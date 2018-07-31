import { Component, OnInit, ViewContainerRef } from '@angular/core'

import { TdLoadingService } from '@covalent/core/loading'
import { TdDialogService } from '@covalent/core/dialogs'
import { FormGroup, Validators, FormBuilder } from '@angular/forms'

const ACCOUNT_REGEX = /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})|\d{11}$/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(
    private _loadingService: TdLoadingService,
    private _dialogService: TdDialogService,
    private _viewContainerRef: ViewContainerRef,
    private _formBuilder: FormBuilder
  ) {
    this.loginForm = this._initialForm()
  }

  ngOnInit() {}

  resetPassword() {}

  login() {
    console.log(this._loginParams())
    this._loadingService.register()
    setTimeout(() => {
      this._loadingService.resolve()
      this._loginSuccess()
    }, 3000)
  }

  private _loginParams() {
    const loginParams: any = {
      LoginName: this.account,
      Password: this.password
    }
    return loginParams
  }

  private _loginSuccess(): void {
    this._dialogService.openAlert({
      message: `登陆账号：${this.account}，登陆密码：${this.password}`,
      disableClose: false,
      viewContainerRef: this._viewContainerRef,
      title: '登陆成功',
      closeButton: '关闭',
      width: '400px'
    })
  }

  private _initialForm(): FormGroup {
    return this._formBuilder.group({
      accountControl: [
        '',
        [Validators.required, Validators.pattern(ACCOUNT_REGEX)]
      ],
      passwordControl: [
        '',
        [Validators.required, Validators.minLength(8), Validators.maxLength(16)]
      ]
    })
  }

  get account() {
    return this.loginForm.value.accountControl
  }
  get password() {
    return this.loginForm.value.passwordControl
  }
}
