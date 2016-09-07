# Injectable Constants

```typescript
@Injectable()
export class YoutubeService {
    constructor(public http: Http,
        @Inject(YOUTUBE_API_KEY) private apiKey: string,
        @Inject(YOUTUBE_API_URL) private apiUrl: string
    ) {}
}
```

```typescript
let YOUTUBE_API_KEY: string = 'XXX_YOUR_KEY_HERE_XXX';
let YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search";

export var youTubeServiceInjectables: Array<any> = [
    {provide: YoutubeService, useClass: YoutubeService},
    {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
    {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
];
```