import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { VgCoreModule } from "@videogular/ngx-videogular/core";
import { VgControlsModule } from "@videogular/ngx-videogular/controls";
import { VgOverlayPlayModule } from "@videogular/ngx-videogular/overlay-play";
import { VgBufferingModule } from "@videogular/ngx-videogular/buffering";
import { VgStreamingModule } from "@videogular/ngx-videogular/streaming";

import { AppComponent } from "./app.component";
import { CameraComponent } from "./camera/camera.component";

@NgModule({
  declarations: [AppComponent, CameraComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
