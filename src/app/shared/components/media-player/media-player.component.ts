import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent implements OnInit {
  mockCover: any = {
    cover: 'https://i.scdn.co/image/ab67616d000048510c471c36970b9406233842a5',
    name: 'SZA',
    song: 'Kill Bill',
  };

  constructor() {}

  ngOnInit(): void {}
}
