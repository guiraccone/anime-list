import { Bookmark, Diamond, Heart } from "@phosphor-icons/react"

import { Anime } from '@tutkli/jikan-ts';
import { PostLayout } from "./styles";

interface PostProps {
  anime: Anime;
  isFavorited?: boolean;
  isBookmarked?: boolean;
}

export function Post(props: PostProps) {
  const { anime } = props;

  const imageUrl = anime.images.jpg.image_url;
  const title = anime.title;
  const titleJapanese = anime.title_japanese;
  const typeAnime = anime.type === 'TV' ? 'Série' : 'Filme'
  const numOfEpisodes = anime.episodes === null ? 'Airing' : anime.episodes;

  return (
    <PostLayout>
      <div className="imageWrapper">
        <article>
          <span>{title}</span>
          <legend>{titleJapanese}</legend>
          <span>{typeAnime}</span>
          <p><i>Episódios <Diamond size={10} weight="fill" /> </i>{numOfEpisodes}</p>
        </article>
        <img src={imageUrl} />
      </div>
      <div className="buttonWrapper">
        <button><Heart /> Favoritar</button>
        <button><Bookmark /> Salvar</button>
      </div>
    </PostLayout>
  );
}