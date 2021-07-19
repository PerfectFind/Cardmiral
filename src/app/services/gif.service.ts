import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { GifObject } from '../models/gif.model';

export const EMPTY_GIF: GifObject = {
    images: {
        fixed_height: { url: "" },
        fixed_height_small: { url: "" }
    }
}

@Injectable({
    providedIn: "root"
})
export class GifService {
    constructor(private http: HttpClient) { }
    
    private trendUrl: string = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
    private searchUrl: string = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=";

    public trendingGifs() {
        let url = new HttpRequest("GET", this.trendUrl);
        return this.http.request(url);
    }

    public searchGifs(searchTerm: string) {
        let url = new HttpRequest("GET", this.searchUrl + searchTerm);
        return this.http.request(url);
    }
}