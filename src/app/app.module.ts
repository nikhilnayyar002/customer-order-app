import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items/items.component';
import { DetailsComponent } from './details/details.component';
import { FinalDetailsComponent } from './final-details/final-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    ItemComponent,
    ItemsComponent,
    DetailsComponent,
    FinalDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
