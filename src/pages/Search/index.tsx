import { MagnifyingGlass } from "@phosphor-icons/react";
import { AnimeContainer, SearchContainer } from "./styles";
import {
  AnimeClient,
  JikanResponse,
  Anime,
  AnimeSearchParams,
} from "@tutkli/jikan-ts";

import { useState } from "react";
import { Post } from "../../components/Post";

export function Search() {
  const [anime, setAnime] = useState<Anime[] | null>(null);

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchTerm = (event.target as HTMLFormElement).elements.namedItem(
      "searchBar"
    ) as HTMLInputElement;

    try {
      const animeClient = new AnimeClient();
      const searchParams: Partial<AnimeSearchParams> = {
        q: searchTerm.value,
      };

      const response: JikanResponse<Anime[]> = await animeClient.getAnimeSearch(
        searchParams
      );
      const searchResults: Anime[] | null = response.data;
      
      const groupedAnime = groupAnimeByScore(searchResults);
      
      setAnime(groupedAnime);
    } catch (error) {
      console.error("Error searching anime:", error);
    }
  };

  const groupAnimeByScore = (anime: Anime[] | null): Anime[] | null => {
    if (!anime) return null;
    
    // Sort anime by score in descending order
    const sortedAnime = anime.sort((a, b) => b.score - a.score);

    return sortedAnime;
  };

  return (
    <>
      <SearchContainer onSubmit={handleSearch}>
        <input type="text" name="searchBar" id="searchBar" />
        <button type="submit">
          <MagnifyingGlass />
          <span>Pesquisar</span>
        </button>
      </SearchContainer>

      <AnimeContainer>
        {anime &&
          anime.map((anime) => <Post key={anime.mal_id} anime={anime} />)}
      </AnimeContainer>
    </>
  );
}
