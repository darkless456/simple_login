import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from '@pages/login/login/login.component'
import { MydemoComponent } from '@pages/mydemo/mydemo.component'
import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'demo', component: MydemoComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRouterModule {}
