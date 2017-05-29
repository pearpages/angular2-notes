import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { EchoesState } from '../core/store';



import { YoutubeSearch } from '../core/services/youtube.search';
import { NowPlaylistService } from '../core/services/now-playlist.service';

import './home.less';

@Component({
  selector: 'home',
  template: `
  <article class="col-md-12">
    <h1>Empty Boilperplate</h1>
    <p>Ready To Use</p>
  </article>
  `
})
export class Home implements OnInit {


  constructor(
    private youtubeSearch: YoutubeSearch,
    private nowPlaylistService: NowPlaylistService,
    private store: Store<EchoesState>
  ) {
  }

  ngOnInit(){

  }

  search (query: string) {

  }

  playSelectedVideo (media: GoogleApiYouTubeSearchResource) {



  }

  queueSelectedVideo (media: GoogleApiYouTubeSearchResource) {

  }

  resetPageToken() {

  }

  searchMore () {

  }
}
