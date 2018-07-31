import { Injectable } from '@angular/core'
import { CookieStorage } from 'cookie-storage'

@Injectable({
  providedIn: 'root',
})
export class CookieService {
  private _cookie: CookieStorage

  constructor() {
    this._cookie = new CookieStorage()
  }

  get(key: string): string | null {
    return this._cookie.getItem(key)
  }

  set(key: string, value: string, options?: any): void {
    this._cookie.setItem(key, value, options)
  }

  remove(key: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this._cookie.removeItem(key)
      if (this.get(key) === null) {
        resolve()
      } else {
        reject(key)
      }
    })
  }

  clear(): Promise<void> {
    return new Promise((resolve, reject) => {
      this._cookie.clear()
      if (this._cookie.length === 0) {
        resolve()
      } else {
        reject()
      }
    })
  }
}
