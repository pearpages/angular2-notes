import { Http, URLSearchParams, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';


import { YOUTUBE_API_KEY } from './constants';
import { YoutubeApiService } from './youtube-api.service';

@Injectable()
export class YoutubeSearch {
	url: string = 'https://www.googleapis.com/youtube/v3/search';
  api: YoutubeApiService;
	isSearching: Boolean = false;
	items: Array<any> = [];
	private _config: URLSearchParams = new URLSearchParams();
	private nextPageToken: string;

	constructor(private http: Http, private store: Store<any>) {
    this.api = new YoutubeApiService({
      url: this.url,
      http: http,
      idKey: 'type',
			config: {
				part: 'snippet,id',
				q: '',
				type: 'video'
			}
    });
	}

	search(query: string, dontReset: Boolean){
		const isNewSearch = query && query !== this.api.config.get('q');
		const shouldBeReset = !dontReset;

		if (shouldBeReset || isNewSearch) {
			this.resetPageToken();

		}
		if (query) {
			this.api.config.set('q', query);

		}
		this.isSearching = true;
		return this.api.list('video')
			.then(response => {
				let itemsAmount = this.items.length;
				this.isSearching = false;
				this.items.splice(itemsAmount, 0, ...response.items);
				
				return response;
			});
	}

	searchMore() {
		if (!this.isSearching && this.items.length) {
			this.api.config.set('pageToken', this.api.nextPageToken);
			this.search(this.api.config.get('q'), true);
		}
	}

	resetPageToken () {
    this.api.resetPageToken();
	}
}
