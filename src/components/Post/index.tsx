import { Diamond } from "@phosphor-icons/react"


import { Anime } from '@tutkli/jikan-ts';
import { PostLayout } from "./styles";

interface PostProps {
  anime: Anime;
}

export function Post(props: PostProps) {
  const { anime } = props;
  const imageUrl = anime.images.jpg.image_url;
  const title = anime.title
  const titleJapanese = anime.title_japanese
  const numOfEpisodes = anime.episodes === null ? 'Airing' : anime.episodes

  return (
    <PostLayout>
      <img src={imageUrl} />
      <span>{title}</span>
      <legend>{titleJapanese}</legend>
      <p><i>Episódios <Diamond size={10} /> </i>{numOfEpisodes}</p>
    </PostLayout>
  );
}