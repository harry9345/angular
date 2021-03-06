import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CameraComponentModule } from "./camera/camera.module";
import { AppComponent } from "./app.component";
import { CameraComponent } from "./camera/camera.component";

@NgModule({
  declarations: [AppComponent, CameraComponent],
  imports: [BrowserModule, FormsModule, CameraComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
