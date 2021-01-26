import { Component, OnInit } from "@angular/core";

declare var Hls;

@Component({
  selector: "app-camera",
  templateUrl: "./camera.component.html",
  styleUrls: ["./camera.component.css"],
})
export class CameraComponent implements OnInit {
  model = {
    object: true,
    segmentation: true,
    rowImage: true,
  };
  constructor() {}

  ngOnInit(): void {}
}
