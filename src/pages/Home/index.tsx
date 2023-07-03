import {
  AnimeClient,
  JikanResponse,
  Anime,
  AnimeSearchParams,
} from "@tutkli/jikan-ts";

import { HomeLayout } from "./styles.ts";
import { ArrowRight, ArrowLeft } from "@phosphor-icons/react";

import { useState, useEffect, useCallback } from "react";
import { Post } from "../../components/Post/index.tsx";
import { Skeleton } from "../../components/Skeleton/index.tsx";

export function Home() {
  const [anime, setAnime] = useState<Anime[][] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchAnime = useCallback(async (page: Partial<AnimeSearchParams>) => {
    try {
      const animeClient = new AnimeClient();
      const response: JikanResponse<Anime[]> = await animeClient.getAnimeSearch(
        page
      );
      const animeList = response.data;
      const groupedAnime = chunkArray(animeList, 1);
      setAnime(groupedAnime as Anime[][]);
      setIsLoaded(true);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const searchParams: Partial<AnimeSearchParams> = { page: currentPage };
    fetchAnime(searchParams);
  }, [currentPage, fetchAnime]);

  const chunkArray = (array: unknown[], size: number) => {
    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
      chunkedArr.push(array.slice(index, index + size));
      index += size;
    }
    return chunkedArr;
  };

  if (currentPage === 1) {
    document.getElementById("backButton")?.classList.add("hidden");
  } else {
    document.getElementById("backButton")?.classList.remove("hidden");
  }

  const handleContinue = async () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  };

  const handleBack = async () => {
    const lastPage = currentPage - 1;
    console.log(currentPage);
    setCurrentPage(lastPage);
  };

  return (
    <HomeLayout>
      {!isLoaded ? (
        <div>
          {Array(25)
            .fill(null)
            .map((_, index) => (
              <Skeleton key={index} />
            ))}
        </div>
      ) : (
        <>
          <header>
            <p>
              AnyMedia is a website where you can find any anime that is on the
              MyAnimeList database. It was made using the Jikan API that parses
              the website to the needs for an API. Feel free to search for an
              anime on the search page or go through the pages to find an anime
              that interests you the most!
            </p>

            <h1>Recommended for you!</h1>
          </header>
          <main>
            {anime &&
              anime.map((animeGroup, index) => (
                <section key={index}>
                  {animeGroup.map((animeItem) => (
                    <Post anime={animeItem} key={animeItem.mal_id} />
                  ))}
                </section>
              ))}
          </main>

          <section>
            <button
              id="backButton"
              onClick={handleBack}
              disabled={currentPage === 1}
            >
              <ArrowLeft />
              Back
            </button>
            <button onClick={handleContinue}>
              Next
              <ArrowRight />
            </button>
          </section>
        </>
      )}
    </HomeLayout>
  );
}
