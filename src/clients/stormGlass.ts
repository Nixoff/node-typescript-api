import { AxiosStatic } from 'axios';

export class StormGlass {
  readonly stormGlassAPIParams =
    'swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,windDirection,windSpeed';
  readonly stormGlassAPISource = 'noaa';
  // &end=1592113802

  constructor(protected request: AxiosStatic) {}
  url = 'https://api.stormglass.io/v2/weather/point';

  public async fetchPoints(lat: number, lng: number): Promise<{}> {
    return this.request.get(
      `${this.url}?params=${this.stormGlassAPIParams}&source=${this.stormGlassAPISource}&end=1592113802&lat=${lat}&lng=${lng}`
    );
  }
}
