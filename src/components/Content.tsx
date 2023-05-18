import { useState, useEffect } from 'react';
import { Post } from './Post';

import styles from './Content.module.css';

import { AnimeClient, JikanResponse, Anime } from '@tutkli/jikan-ts';

export function Content() {
  const [anime, setAnime] = useState<Anime[] | null>(null);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const animeClient = new AnimeClient();
        const response: JikanResponse<Anime[]> = await animeClient.getAnimeSearch();
        setAnime(response.data.slice(0, 5));
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnime();
  }, []);

  return (
    <article className={styles.header}>
      <header>
        <h1>Recomendações para Você</h1>
        <hr />
      </header>
      <div className={styles.content}>
        {anime && anime.map(
          (animeItem) =>
            <Post anime={animeItem} 
            key={animeItem.mal_id} />
        )
        }
      </div>
    </article>
  );
}