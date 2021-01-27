import { Component, OnInit, ViewChild } from "@angular/core";
import { VgApiService, BitrateOptions } from "@videogular/ngx-videogular/core";
import { VgHlsDirective } from "@videogular/ngx-videogular/streaming";

export interface IMediaStream {
  type: "hls";
  source: string;
  label: string;
}

@Component({
  selector: "app-camera",
  templateUrl: "./camera.component.html",
  styleUrls: ["./camera.component.css"],
})
export class CameraComponent implements OnInit {
  @ViewChild(VgHlsDirective, { static: true }) vgHls: VgHlsDirective;

  currentStream: IMediaStream;
  api: VgApiService;

  bitrates: BitrateOptions[];

  streams: IMediaStream[] = [
    {
      type: "hls",
      label: "HLS: Streaming",
      source:
        "http://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel.ism/.m3u8",
    },
  ];

  onPlayerReady(api: VgApiService) {
    this.api = api;
  }

  ngOnInit() {
    this.currentStream = this.streams[0];
  }

  setBitrate(option: BitrateOptions) {
    if (this.currentStream.type === "hls") {
      this.vgHls.setBitrate(option);
    }
  }
}
