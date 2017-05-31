import { ActionReducer, Action } from '@ngrx/store';
import { YoutubeVideosActions } from './youtube-videos.actions';

export interface EchoesVideos extends Array<GoogleApiYouTubeVideoResource> { };

export function videos(state: EchoesVideos = [], action: Action): EchoesVideos {
    switch (action.type) {
        case YoutubeVideosActions.ADD:
            return [...state, ...action.payload];
        case YoutubeVideosActions.RESET:
            return [];
        default:
            return state;
    }
}