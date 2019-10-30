import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZinsEditorComponent } from './zins-editor/zins-editor.component';
import { ZinsResultComponent } from './zins-result/zins-result.component';
import { ZinsHistoryComponent } from './zins-history/zins-history.component';

@NgModule({
  declarations: [
    AppComponent,
    ZinsEditorComponent,
    ZinsResultComponent,
    ZinsHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
