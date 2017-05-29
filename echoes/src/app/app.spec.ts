import {
  inject,
  TestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import { App } from './app.component';
import { YoutubeSearch, YoutubePlayerService, NowPlaylistService } from './core/services';
import { Notify } from "@ngrx/notify";
// import { AppState } from './app.service';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      // AppState,
      App,
      { provide: YoutubeSearch, useClass: class YoutubeSearch {} },
      { provide: YoutubePlayerService, userClass: class YoutubePlayerService {} },
      { provide: NowPlaylistService, useValue: jasmine.createSpyObj('NowPlaylistService', ['updateIndexByMedia']) },
      { provide: Notify, useClass: class Notify { }}
    ]}));

  it('should be defined', inject([ App ], (app) => {
    expect(app).toBeDefined();
  }));

  it('should have 3 public services', inject([ App ], (app) => {
    const expectedServices = [
      'youtubeSearch',
      'playerService',
      'nowPlaylistService'
    ];
    expectedServices.forEach(service => expect(app[service]).toBeDefined());
  }));

  it('should select a video in playlist', inject([ App ], (app) => {
    const media = { id: 'mocked-media-object' };
    const expected = media.id;
    const actual = app.nowPlaylistService.updateIndexByMedia;
    app.selectVideo(media);
    expect(actual).toHaveBeenCalledWith(expected);
  }));
});
