import { Injectable } from '@angular/core'
import Config from '@config/config.conf'

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private _config: any

  constructor() {
    this._config = Config
  }

  get(key: string): string {
    return this._config[key]
  }
}
