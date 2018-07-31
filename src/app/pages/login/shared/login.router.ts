import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from '@pages/login/login/login.component'
import { ResetPasswordComponent } from '@pages/login/reset-password/reset-password.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    children: [
      { path: 'reset', component: ResetPasswordComponent },
      { path: '', redirectTo: '/reset', pathMatch: 'full' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRouterModule {}
