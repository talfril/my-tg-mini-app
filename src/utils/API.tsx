export const getWeather = async (latitude: string, longitude: string) => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during fetch:", error);
  }
};

export const getPhotos = async (page: number = 1) => {
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=kittens&per_page=5&page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "6qnNOVN8dYLzbTh1YVXxZ0MSvPKnW2RAO67VbNmLHPFIUqkNDbAqbUfD",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during fetch:", error);
  }
};
