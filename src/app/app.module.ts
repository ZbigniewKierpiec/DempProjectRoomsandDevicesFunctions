import { SwiperModule } from 'swiper/angular';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from './Components/display/display.component';
import { SkyTvComponent } from './Components/sky-tv/sky-tv.component';
import { CustomDpad1Component } from './Components/sky-tv/components/custom-dpad1/custom-dpad1.component';
import { FlatPadComponent } from './Components/sky-tv/components/flat-pad/flat-pad.component';


@NgModule({
  declarations: [AppComponent, DisplayComponent, SkyTvComponent, CustomDpad1Component, FlatPadComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
