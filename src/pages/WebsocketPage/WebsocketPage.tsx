import { FC } from "react";
import { Websocket } from "@/components/Websocket/Websocket";

export const WebsocketPage: FC = () => {
  return (
    <>
      <h1>Разговор с эхо</h1>
      <Websocket />
    </>
  );
};
