import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GifObject } from 'src/app/models/gif.model';
import { GifService } from 'src/app/services/gif.service';

@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.scss']
})
export class GifSearchComponent implements OnInit {
  gifResults: GifObject[] = [];
  selectedIndex: number = 0;
  currentPage: number = 0;
  pageSize: number = 12;

  constructor(
      public gifService: GifService,
      public dialogRef: MatDialogRef<GifSearchComponent>,
      @Inject(MAT_DIALOG_DATA) public data: GifObject) { }

  ngOnInit() {
    this.gifService.trendingGifs()
      .subscribe((res: any) => {
        console.log(res?.body?.data);
        this.gifResults = res?.body?.data;
      })
  }

  performSearch(searchTerm: string) {
    this.gifService.searchGifs(searchTerm)
      .subscribe((res: any)  => {
        console.log(res?.body?.data);
        this.gifResults = res?.body?.data;
      })
  }
}