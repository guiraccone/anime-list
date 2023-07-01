import { Diamond } from "@phosphor-icons/react";
import { Anime } from "@tutkli/jikan-ts";
import { PostLayout } from "./styles";
import { useState } from "react";
import { Modal } from "../Modal";

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
  const genre = anime.genres;
  const synopsis = anime.synopsis;
  const status = anime.status;
  const rating = anime.rating
  const avaliation = anime.score

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <PostLayout>
        <div className="imageWrapper">
          <article>
            <span>{title}</span>
            <span>{typeAnime}</span>
            <p>
              <i>
                Episodes <Diamond size={10} weight="fill" />
              </i>
              {numOfEpisodes}
            </p>
            <button onClick={() => setOpen(!open)}>View More</button>
          </article>
          <img src={imageUrl} alt={title} />
        </div>
      </PostLayout>
      <Modal
        isOpen={open}
        setOpen={setOpen}
        title={title}
        titleJapanese={titleJapanese}
        genres={genre}
        imageUrl={imageUrl}
        synopsis={synopsis}
        type={typeAnime}
        status={status}
        rating={rating}
        avaliation={avaliation}
      />
    </>
  );
}
