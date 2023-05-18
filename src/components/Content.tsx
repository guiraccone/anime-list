import { useState, useEffect } from 'react';
import { Post } from './Post';

import styles from './Content.module.css';

import { AnimeClient, JikanResponse, Anime } from '@tutkli/jikan-ts';

export function Content() {
  const [anime, setAnime] = useState<Anime[][] | null>(null);


  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const animeClient = new AnimeClient();
        const response: JikanResponse<Anime[]> = await animeClient.getAnimeSearch();
        const animeList = response.data
        const groupedAnime = chunkArray(animeList, 5);
        setAnime(groupedAnime);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnime();
  }, []);

  const chunkArray = (array: any[], size: number) => {
    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
      chunkedArr.push(array.slice(index, index + size));
      index += size;
    }
    return chunkedArr;
  };

  return (
    <div className={styles.post}>
      <header>
        <h1>Recomendações para Você</h1>
        <hr />
      </header>
      <div className={styles.content}>
        {
          anime && anime.map
            (
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
      </div>
    </div>
  );
}
