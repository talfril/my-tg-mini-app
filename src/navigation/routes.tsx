import type { ComponentType, JSX } from "react";

import { WebsocketPage } from "@/pages/WebsocketPage/WebsocketPage";
import { WeatherPage } from "@/pages/WeatherPage/WeatherPage";
import { PhotoPage } from "@/pages/PhotoPage/PhotoPage";

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: "/", Component: WebsocketPage },
  { path: "/weather", Component: WeatherPage, title: "Weather" },
  { path: "/photo", Component: PhotoPage, title: "Cute photos" },
];
