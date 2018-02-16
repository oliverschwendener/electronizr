import { Searcher } from "./searcher";
import { SearchResultItem } from "../search-engine";

export class WebUrlSearcher implements Searcher {
    private icon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" version="1.1">
                        <g id="surface1">
                            <path d="M 24 2 C 11.863281 2 2 11.863281 2 24 C 2 36.136719 11.863281 46 24 46 C 26.058594 46 28.070313 45.703125 30 45.15625 L 30 41.296875 C 28.503906 42.742188 26.808594 43.667969 25 43.921875 L 25 36 L 30 36 L 30 34 L 25 34 L 25 25 L 30 25 L 30 23 L 25 23 L 25 14 L 34.371094 14 C 35.265625 16.582031 35.832031 19.519531 35.957031 22.660156 L 37 23.640625 L 37.988281 24.5625 L 38.453125 25 L 43.964844 25 C 43.886719 26.527344 43.644531 28.027344 43.230469 29.480469 L 44.847656 30.996094 C 45.601563 28.757813 46 26.40625 46 24 C 46 11.863281 36.136719 2 24 2 Z M 23 4.082031 L 23 12 L 14.441406 12 C 14.816406 11.175781 15.214844 10.390625 15.65625 9.679688 C 17.652344 6.457031 20.226563 4.472656 23 4.082031 Z M 25 4.082031 C 28.503906 4.566406 31.578125 7.566406 33.578125 12 L 25 12 Z M 31.5 5.453125 C 34.898438 6.828125 37.820313 9.113281 39.988281 12 L 35.71875 12 C 34.625 9.371094 33.183594 7.140625 31.5 5.453125 Z M 16.425781 5.492188 C 15.523438 6.402344 14.6875 7.445313 13.957031 8.625 C 13.316406 9.660156 12.746094 10.792969 12.25 12 L 8.019531 12 C 10.171875 9.136719 13.0625 6.867188 16.425781 5.492188 Z M 6.691406 14 L 11.519531 14 C 10.640625 16.726563 10.121094 19.773438 10.03125 23 L 4.023438 23 C 4.1875 19.726563 5.144531 16.671875 6.691406 14 Z M 13.636719 14 L 23 14 L 23 23 L 12.03125 23 C 12.128906 19.726563 12.699219 16.664063 13.636719 14 Z M 36.453125 14 L 41.324219 14 C 42.867188 16.671875 43.8125 19.730469 43.972656 23 L 37.96875 23 C 37.875 19.769531 37.34375 16.722656 36.453125 14 Z M 4.023438 25 L 10.03125 25 C 10.121094 28.226563 10.640625 31.273438 11.519531 34 L 6.691406 34 C 5.144531 31.328125 4.1875 28.273438 4.023438 25 Z M 12.03125 25 L 23 25 L 23 34 L 13.636719 34 C 12.699219 31.335938 12.128906 28.273438 12.03125 25 Z M 33.953125 25 C 33.421875 25.027344 33 25.464844 33 26 L 33 45.25 C 33 45.65625 33.242188 46.019531 33.617188 46.171875 C 33.992188 46.328125 34.421875 46.242188 34.707031 45.957031 L 37.71875 42.941406 L 40.230469 48.417969 C 40.460938 48.917969 41.054688 49.136719 41.558594 48.90625 L 45.417969 47.140625 C 45.917969 46.910156 46.136719 46.316406 45.90625 45.8125 L 43.300781 40.125 L 48 40.125 C 48.410156 40.125 48.78125 39.875 48.929688 39.492188 C 49.082031 39.109375 48.984375 38.675781 48.683594 38.394531 L 34.683594 25.269531 C 34.484375 25.085938 34.222656 24.988281 33.953125 25 Z M 35 28.308594 L 45.46875 38.125 L 41.875 38.125 C 41.71875 38.125 41.566406 38.160156 41.425781 38.230469 L 41.320313 38.285156 C 40.839844 38.527344 40.632813 39.105469 40.859375 39.59375 L 43.671875 45.734375 L 41.628906 46.671875 L 38.9375 40.800781 C 38.804688 40.503906 38.527344 40.292969 38.207031 40.234375 C 37.882813 40.175781 37.554688 40.28125 37.324219 40.515625 L 35 42.835938 Z M 8.019531 36 L 12.25 36 C 12.746094 37.207031 13.316406 38.339844 13.957031 39.375 C 14.6875 40.554688 15.523438 41.597656 16.425781 42.507813 C 13.0625 41.132813 10.171875 38.863281 8.019531 36 Z M 14.441406 36 L 23 36 L 23 43.917969 C 20.226563 43.527344 17.652344 41.542969 15.65625 38.324219 C 15.214844 37.609375 14.816406 36.824219 14.441406 36 Z "></path>
                        </g>
                    </svg>`;

    public getSearchResult(userInput: string): SearchResultItem[] {
        let url = userInput.startsWith("http://") || userInput.startsWith("https://")
            ? userInput
            : `http://${userInput}`;

        return [
            <SearchResultItem>{
                name: "Open default browser",
                executionArgument: url,
                icon: this.icon,
                tags: []
            }
        ]
    }
}