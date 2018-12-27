import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular'
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { UploadComponent } from './upload/upload.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'search', component: SearchComponent },
  { path: 'upload', component: UploadComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AmplifyAngularModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AmplifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
