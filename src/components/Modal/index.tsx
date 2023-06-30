import { JikanResource } from "@tutkli/jikan-ts";
import { ModalLayout } from "./styles";

interface IModal {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  title: string;
  genres: JikanResource[];
  imageUrl: string;
  synopsis: string;
  titleJapanese: string;
  type: string;
  status: string;
}

export function Modal({
  isOpen,
  setOpen,
  title,
  genres,
  imageUrl,
  synopsis,
  titleJapanese,
  type,
  status,
}: IModal) {
  if (isOpen) {
    return (
      <ModalLayout>
        <div>
          <h1>{title}</h1>
          <h4>{titleJapanese}</h4>
          <legend>
            {genres.map((genre, index) => (
              <span key={genre.mal_id}>
                {genre.name}
                {index !== genres.length - 1 && " - "}
              </span>
            ))}
          </legend>

          <img src={imageUrl} />
        </div>
        <section>
          <span>Status: {status}</span>
          <span>Type: {type}</span>
          <span>Sinopsys</span>
          <p>{synopsis}</p>
          <button onClick={() => setOpen(false)}>Close</button>
        </section>
      </ModalLayout>
    );
  } else {
    return <></>;
  }
}