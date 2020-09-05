import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthInterceptor } from './auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HardSkillComponent } from './hard-skill/hard-skill.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SkillComponent } from './skill/skill.component';
import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { FormControlComponent } from './form-control/form-control.component';
import { FilterByFinPipe } from './filter-by-fin.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HardSkillComponent,
    SkillComponent,
    FormControlComponent,
    FilterByFinPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AdminModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
