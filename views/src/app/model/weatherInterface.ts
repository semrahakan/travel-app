export interface Weather {
  cod: string;
  list: [
    {
      name: string,
      rain: string,
      snow: string,
      main: {
        temp: string,
        temp_max: string,
        temp_min: string,
        feels_like: string
      },
      weather: [
        {description: string}
      ]
    }
  ]
}
