import styles from './Post.module.css';
import { Diamond } from "@phosphor-icons/react"


import { Anime } from '@tutkli/jikan-ts';

interface PostProps {
  anime: Anime;
}

export function Post(props: PostProps) {
  const { anime } = props;
  const imageUrl = anime.images.jpg.image_url;
  const title = anime.title
  const titleJapanese = anime.title_japanese
  const numOfEpisodes = anime.episodes

  return (
    <>
      <div className={styles.post}>
        <div className="card">
          <img src={imageUrl} />
        </div>
        <span>{title}</span>
        <legend>{titleJapanese}</legend>
        <legend><i>Episódios <Diamond size={10} /> </i>{numOfEpisodes}</legend>
      </div>

    </>
  );
}