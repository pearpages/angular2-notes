/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

// SERVICES
import { YoutubeSearch, YoutubePlayerService, NowPlaylistService } from './core/services';



import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';

import { Notify } from "@ngrx/notify";
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  template: require('./app.html')
})
export class App {

  constructor(

    public youtubeSearch: YoutubeSearch,
    public playerService: YoutubePlayerService,
    public nowPlaylistService: NowPlaylistService,

    private notify: Notify
  ) {


  }

  selectVideo (media: GoogleApiYouTubeVideoResource) {


    this.nowPlaylistService.updateIndexByMedia(media.id);
  }

  handleVideoEnded (state) {
    if (!this.isLastIndex()) {
      this.playNextVideo(state);
    }
  }

  playNextVideo (player) {
    this.nowPlaylistService.selectNextIndex();
    this.playerService.playVideo(this.nowPlaylistService.getCurrent());
  }

  sortVideo (media: GoogleApiYouTubeSearchResource) {

  }

  isLastIndex() {

  }
}
