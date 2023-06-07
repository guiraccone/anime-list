import { useState, useEffect, useCallback } from 'react';
import { Post } from "../../components/Post/index.tsx";

import { AnimeClient, JikanResponse, Anime, AnimeSearchParams } from '@tutkli/jikan-ts';
import { HomeLayout } from "./styles.ts";

export function Home() {

    const [anime, setAnime] = useState<Anime[][] | null>(null);
    const [currentPage, setCurrentPage] = useState(1);  

    const fetchAnime = useCallback(async (page: Partial<AnimeSearchParams>) => {
        try {
            const animeClient = new AnimeClient();
            const response: JikanResponse<Anime[]> = await animeClient.getAnimeSearch(page);
            const animeList = response.data;
            const groupedAnime = chunkArray(animeList, 1);
            setAnime(groupedAnime as Anime[][]);
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

    const handleContinue = async () => {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
    };

    return (
        <HomeLayout>
            <header>
                <p>Recomendações para Você</p>
            </header>
            <main>
                {anime && anime.map(
                    (animeGroup, index) =>
                    (
                        <section key={index}>
                            {animeGroup.map((animeItem) => (
                                <Post anime={animeItem} key={animeItem.mal_id} />
                            ))}
                        </section>
                    )
                )
                }
            </main>
            <section>
                <button onClick={handleContinue}>Carregar</button>
            </section>
        </HomeLayout >
    )
}