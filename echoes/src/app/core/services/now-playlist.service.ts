import { Http, URLSearchParams, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import {  } from "../store";

import { YoutubeVideosInfo } from './youtube-videos-info.service';

@Injectable()
export class NowPlaylistService {


	constructor(

		private youtubeVideosInfo: YoutubeVideosInfo

		) {

	}

	queueVideo (mediaId: string) {
		return this.youtubeVideosInfo.api
			.list(mediaId)
			.map(items => items[0])
	}

	queueVideos (medias: GoogleApiYouTubeVideoResource[]) {

	}

	removeVideo (media) {

	}

	selectVideo (media) {

	}

	updateFilter (filter: string) {

	}

	clearPlaylist () {

	}

	selectNextIndex () {

	}

	getCurrent () {
		
	}

	updateIndexByMedia(mediaId: string) {

	}
}
