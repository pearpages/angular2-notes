import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class YoutubeVideosActions {

    static ADD = '[YoutubeVideos] ADD_VIDEOS';
    static RESET = '[YoutubeVideos] RESET';

    addVideos(videos: GoogleApiYouTubeVideoResource[]): Action {
        return {
            type: YoutubeVideosActions.ADD,
            payload: videos
        };
    }

    reset(): Action {
        return {
            type: YoutubeVideosActions.RESET
        };
    }
}