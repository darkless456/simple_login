import { Injectable } from '@angular/core'
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http'
import { Observable, TimeoutError, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

const HTTP_HEADERS = new HttpHeaders({
  Accept: 'application/json',
  'Content-Type': 'application/json'
})

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  get(url: string, params?: any): Observable<any> {
    return this.request('GET', url, params)
  }

  post(url: string, body?: any): Observable<any> {
    return this.request('POST', url, body)
  }

  request(method: string, url: string, params?: any): Observable<any> {
    let options: any
    method = method.toUpperCase()
    if (method === 'GET') {
      options = { HTTP_HEADERS, params: params }
    } else if (method === 'POST') {
      options = { HTTP_HEADERS, body: params }
    } else {
    }

    return this._http
      .request(method, url, options)
      .pipe(catchError(this.handleError.bind(this)))
  }

  handleError(err: HttpErrorResponse) {
    let message: string
    if (err instanceof TimeoutError) {
      message = '网络请求超时，请稍后再试'
    } else if (err.error instanceof ErrorEvent) {
      message = `客户端网络错误：${err.error.message}`
    } else {
      message = `服务端错误。状态码：${err.status}。 
      错误信息：${this._pretty(err.error)}`
    }
    return throwError(message)
  }

  private _pretty(errMsg: any): string {
    let returnMsg = ''
    Object.keys(errMsg).forEach(v => {
      returnMsg += `\n${v.toUpperCase()}: ${errMsg[v]} \n`
    })
    return returnMsg
  }
}
