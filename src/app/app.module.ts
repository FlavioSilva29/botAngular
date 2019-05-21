import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { MatDividerModule,MatSelectModule,MatCheckboxModule,MatCardModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatRadioModule, MatListModule, MatIconModule, MatProgressBarModule } from '@angular/material';
import { MessageComponent } from './components/message/message.component'
@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDividerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule, 
    MatProgressSpinnerModule, 
    MatRadioModule, 
    MatListModule, 
    MatIconModule,
    MatProgressBarModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
