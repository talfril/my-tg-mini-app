export type Photo = {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
  alt: string;
};

export type PhotoData = {
  page: number;
  per_page: number;
  photos: Photo[];
  total_results: number;
  next_page: string | null;
};

export interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonText: string;
  buttonType?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

export interface CurrentWeather {
  time: string;
  temperature_2m: number;
  wind_speed_10m: number;
}

export interface WeatherData {
  [key: number]: CurrentWeather | null;
}
