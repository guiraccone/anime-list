import { Bookmark, Diamond, Heart } from "@phosphor-icons/react"

import { Anime } from '@tutkli/jikan-ts';
import { PostLayout } from "./styles";
import { useState } from "react";

interface PostProps {
  anime: Anime;
  isFavorited?: boolean;
  isBookmarked?: boolean;
}

export function Post(props: PostProps) {
  const { anime, isFavorited } = props;

  const imageUrl = anime.images.jpg.image_url;
  const title = anime.title;
  const titleJapanese = anime.title_japanese;
  const numOfEpisodes = anime.episodes === null ? 'Airing' : anime.episodes;

  const [favorited, setFavorited] = useState(isFavorited);

  const favoriteAnime = () => {
    setFavorited(true);
    console.log(favorited);
  };


  return (
    <PostLayout>
      <div className="imageAndButtonWrapper">
        <img src={imageUrl} />
        <div className="buttonWrapper">
          <button
            onClick={favoriteAnime}><Heart weight="fill" /> Favoritar</button>
          <button><Bookmark /> Salvar</button>
        </div>
      </div>
      <span>{title}</span>
      <legend>{titleJapanese}</legend>
      <p><i>Episódios <Diamond size={10} /> </i>{numOfEpisodes}</p>
    </PostLayout>
  );
}