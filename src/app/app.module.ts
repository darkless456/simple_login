// Angular Import
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// import { NoopAnimationsModule } from '@angular/platform-browser/animations'

// Material Import
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'
import { MatInputModule } from '@angular/material/input'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatStepperModule } from '@angular/material/stepper'
import { MatFormFieldModule } from '@angular/material/form-field'

// Covalent Import
import { CovalentCommonModule } from '@covalent/core/common'
import { CovalentLayoutModule } from '@covalent/core/layout'
import { CovalentMediaModule } from '@covalent/core/media'
import { CovalentLoadingModule } from '@covalent/core/loading'
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms'
import { CovalentDialogsModule } from '@covalent/core/dialogs'

// Router Import
import { AppRouterModule } from '@app/app.router'

// Other Import
import { AppComponent } from '@app/app.component'
import { LoginComponent } from '@pages/login/login/login.component'
import { MydemoComponent } from '@pages/mydemo/mydemo.component'
import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component'
import { ResetPasswordComponent } from '@pages/login/reset-password/reset-password.component';
import { AccountValidatorDirective } from './pages/login/shared/account-validator.directive'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MydemoComponent,
    PageNotFoundComponent,
    ResetPasswordComponent,
    AccountValidatorDirective
  ],
  imports: [
    // angular modules
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule, // 取消动画
    // material modules
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatStepperModule,
    MatFormFieldModule,
    // covalent modules
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentLoadingModule,
    CovalentDynamicFormsModule,
    CovalentDialogsModule,
    // routers
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
