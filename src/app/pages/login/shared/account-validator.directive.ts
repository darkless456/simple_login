import { Directive, forwardRef } from '@angular/core'
import { AbstractControl, NG_ASYNC_VALIDATORS, Validator } from '@angular/forms'
import { Observable, throwError } from 'rxjs'
import {
  debounceTime,
  distinctUntilChanged,
  flatMap,
  catchError,
  first
} from 'rxjs/operators'
import { HttpService } from '@services/http.service'

@Directive({
  selector: '[appAccountValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => AccountValidatorDirective),
      multi: true
    }
  ]
})
export class AccountValidatorDirective implements Validator {
  constructor(private _http: HttpService) {}

  validate(control: AbstractControl): Observable<any> {
    return control.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      flatMap(() => {
        console.log(control.value)
        return this._http.get('url')
      }),
      catchError(this._handleError),
      first()
    )
  }

  private _handleError(err: any): Observable<any> {
    return throwError(`
    服务端错误。状态码：${err.status}。 
    错误信息：${JSON.stringify(err.error)}
    `)
  }
}
