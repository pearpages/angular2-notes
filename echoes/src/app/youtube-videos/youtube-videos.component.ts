import { YoutubeMediaItemsMock } from './../../../tests/mocks/youtube.media.items';
import { EchoesVideos, YoutubeVideosActions } from './../core/store/youtube-videos';
import { EchoesState } from './../core/store/index';
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
    selector: 'youtube-videos',
    template: `
  <article class="col-md-12">
    <h1>Search Results</h1>
    <code>
      There are {{ (videos$ | async).length }} videos
    </code>
    <ul class="list-unstyled">
      <li *ngFor="let video of (videos$ | async)">
        <img [src]="video.snippet.thumbnails.default.url">
        {{ video.snippet.title }}
      </li>
    </ul>
</article>
` })
export class YoutubeVideosComponent implements OnInit {

    videos$: Observable<EchoesVideos>;

    constructor(private youtubeVideosActions: YoutubeVideosActions, private store: Store<EchoesState>) { }

    ngOnInit() {
        this.videos$ = this.store.select(state => state.videos);
        this.store.dispatch(this.youtubeVideosActions.addVideos(YoutubeMediaItemsMock));
    }
}
