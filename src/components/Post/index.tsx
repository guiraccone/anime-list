import { Diamond } from "@phosphor-icons/react";
import { Anime } from "@tutkli/jikan-ts";
import { PostLayout } from "./styles";

interface PostProps {
  anime: Anime;
}

export function Post(props: PostProps) {
  const { anime } = props;

  const imageUrl = anime.images.jpg.image_url;
  const title = anime.title;
  const titleJapanese = anime.title_japanese;
  const typeAnime = anime.type;
  const numOfEpisodes = anime.episodes === null ? anime.status : anime.episodes;

  return (
    <PostLayout>
      <div className="imageWrapper">
        <article>
          <span>{title}</span>
          <legend>{titleJapanese}</legend>
          <span>{typeAnime}</span>
          <p>
            <i>
              Episódios <Diamond size={10} weight="fill" />
            </i>
            {numOfEpisodes}
          </p>
        </article>
        <img src={imageUrl} />
      </div>
    </PostLayout>
  );
}
