import type { FC } from "react";
import Feed from "@/components/Feed/Feed";

export const PhotoPage: FC = () => {
  return (
    <>
      <h1>Лента фотографий с котиками</h1>
      <Feed />
    </>
  );
};

export default PhotoPage;
