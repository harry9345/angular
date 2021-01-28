import { Component, OnInit, ViewChild } from "@angular/core";
import {
  IDRMLicenseServer,
  BitrateOptions,
} from "@videogular/ngx-videogular/core";
import { VgHlsDirective } from "@videogular/ngx-videogular/streaming";

export interface IMediaStream {
  type: "hls";
  source: string;
  label: string;
  token?: string;
  licenseServers?: IDRMLicenseServer;
}

@Component({
  selector: "app-camera",
  templateUrl: "./camera.component.html",
  styleUrls: ["./camera.component.css"],
})
export class CameraComponent implements OnInit {
  @ViewChild(VgHlsDirective, { static: true }) vgHls: VgHlsDirective;
  currentStream: IMediaStream;

  bitrates: BitrateOptions[];

  streams: IMediaStream[] = [
    {
      type: "hls",
      label: "HLS: Streaming",
      source:
        "http://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel.ism/.m3u8",
    },
  ];

  ngOnInit() {
    this.currentStream = this.streams[0];
  }

  setBitrate(option: BitrateOptions) {
    this.vgHls.setBitrate(option);
  }
}
