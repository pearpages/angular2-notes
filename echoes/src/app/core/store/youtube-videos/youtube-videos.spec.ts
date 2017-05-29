import { videos } from './youtube-videos.reducer';
import { YoutubeVideosActions } from './youtube-videos.actions';
// Mock File
import { YoutubeMediaItemsMock } from '../../../../../tests/mocks/youtube.media.items';

describe('The Youtube Videos reducer', () => {
    const mockedState = [];
    const youtubeVideosActions = new YoutubeVideosActions();

    it('should return current state when no valid actions have been made', () => {
        const state = [...mockedState];
        const actual = videos(state, { type: 'INVALID_ACTION', payload: {} }); const expected = state;
        expect(actual).toBe(expected);
    });

    it('should ADD videos', () => {
        const state = [...mockedState];
        const actual = videos(state, youtubeVideosActions.addVideos(YoutubeMediaItemsMock));
        const expected = [...state, ...YoutubeMediaItemsMock];
        expect(actual.length).toBe(expected.length);
    });

    it('should empty the state when RESET', () => {
        const state = [...YoutubeMediaItemsMock];
        const actual = videos(state, youtubeVideosActions.reset());
        const expected = 0;
        expect(actual.length).toEqual(expected);
    });
});