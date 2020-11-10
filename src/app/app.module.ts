import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { AppNotesModule } from './modules/notes/notes.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MarkdownModule.forRoot(), AppNotesModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
