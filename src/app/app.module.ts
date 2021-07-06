import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueryComponent } from './components/query/query.component';
import { QueryService } from './services/query.service';
import { DisplayDataComponent } from './components/display-data/display-data.component';

@NgModule({
  declarations: [
    AppComponent,
    QueryComponent,
    DisplayDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule, 
  ],
  providers: [QueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
