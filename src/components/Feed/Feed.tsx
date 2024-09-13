import styles from "./Feed.module.css";
import { useEffect, useState, useRef } from "react";
import { getPhotos } from "@/utils/API";
import type { FC } from "react";
import { Button } from "@/components/Button/Button";
import { Photo } from "@/data/types";

export const Feed: FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const lastPhotoRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      const data = await getPhotos(page);
      if (data && data.photos.length > 0) {
        setPhotos((prevPhotos) => [...prevPhotos, ...data.photos]);
        setLoading(false);

        if (lastPhotoRef.current) {
          lastPhotoRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    fetchPhotos();
  }, [page]);

  const loadMorePhotos = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setPage((prevPage) => prevPage + 1);
  };

  if (loading && page === 1) {
    return <div>Ищем изображения для вас...</div>;
  }

  return (
    <div className={styles.component}>
      {photos.length > 0 ? (
        <ul className={styles.photoList}>
          {photos.map((photo, index) => (
            <li
              key={`${photo.id}-${index}`}
              ref={index === photos.length - 1 ? lastPhotoRef : null}
              className={styles.photoItem}
            >
              <img
                src={photo.src.medium}
                alt={photo.alt}
                className={styles.photoItemImg}
              />
              <p className={styles.photoItemDesc}>
                <strong>Автор:</strong> {photo.photographer}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Фотографии не найдены</p>
      )}

      <Button
        buttonText='Загрузить ещё'
        onClick={loadMorePhotos}
        buttonType='button'
        className={styles.addButton}
      />

      {loading && <div>Загрузка новых изображений...</div>}
    </div>
  );
};

export default Feed;
