import { Injectable } from '@angular/core'
import { HttpService } from '@services/http.service'
import { Observable } from 'rxjs'
import { AppUser } from '@models/structure'
import { ROOT_URL } from '@models/consts'
import { ValidateCode } from '@models/validateCode'

const LOGIN_PATH = ROOT_URL + '/Account/Login'
const LOGOUT_PATH = ROOT_URL + '/Account/Logout'
const CHANGE_PASSWORD_PATH = ROOT_URL + '/Account/ChangePassword'
const RESET_PASSWORD_PATH = ROOT_URL + '/Account/ResetPassword'
const SEND_SMS_VALIDATE_CODE_PATH = ROOT_URL + '/Account/SendSmsValidateCode'

export interface LoginParams {
  LoginName: string
  Password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _http: HttpService) {}

  login(loginParams: LoginParams): Observable<AppUser> {
    return this._http.post(LOGIN_PATH, loginParams)
  }

  logout(): Observable<any> {
    return this._http.post(LOGOUT_PATH)
  }

  changePassword(resetPwdParams: any): Observable<any> {
    return this._http.post(CHANGE_PASSWORD_PATH, resetPwdParams)
  }

  resetPassword(forgetPwdParams: any): Observable<any> {
    return this._http.post(RESET_PASSWORD_PATH, forgetPwdParams)
  }

  sendSmsValidateCode(mobile: string): Observable<ValidateCode> {
    return this._http.post(SEND_SMS_VALIDATE_CODE_PATH + '?mobile=' + mobile)
  }
}
