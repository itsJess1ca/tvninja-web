import { Component, OnInit } from '@angular/core';
import { WindowSize } from '../shared/window-resize.service';
import { Subject, Observable } from 'rxjs';

const randomImage = (index: number): number => {
  return (index % 3);
};

@Component({
  selector: 'tvn-listings',
  styleUrls: ['listings.style.scss'],
  templateUrl: 'listings.template.html'
})
export class ListingsComponent implements OnInit {
  columns: number = 10;
  listingCategories: ListingCategory[] = [
    {
      name: 'Current lineup', listings: [
      {seriesName: 'Blindspot', nextAirDate: '06/06/16', status: 'continuing', favorite: true},
      {seriesName: 'Blindspot', nextAirDate: '06/06/16', image: '', status: 'continuing', favorite: false},
      {seriesName: 'Blindspot', nextAirDate: '06/06/16', status: 'continuing', favorite: true},
      {seriesName: 'Blindspot', nextAirDate: '06/06/16', image: '', status: 'continuing', favorite: false},
      {seriesName: 'Blindspot', nextAirDate: '06/06/16', image: '', status: 'continuing', favorite: true},

    ]
    },
     {name: 'Benched', listings: [
       {seriesName: 'Blindspot', nextAirDate: '06/06/16', status: 'continuing', favorite: false},
       {seriesName: 'Blindspot', nextAirDate: '06/06/16', image: '', status: 'continuing', favorite: false},
     ]},
     {name: 'Ended', listings: [
       {seriesName: 'Blindspot', nextAirDate: '06/06/16', status: 'continuing', favorite: true},
       {seriesName: 'Blindspot', nextAirDate: '06/06/16', image: '', status: 'continuing', favorite: false}
     ]}
  ];
  favorites: Listing[] = this.listingCategories.reduce((prev, current) => {
    return [...prev, ...current.listings.filter(listing => listing.favorite === true)]
  }, []);

  constructor(public windowSize: WindowSize) {}

  ngOnInit() {
    this.windowSize.width$.subscribe(width => {
      const newColCount = this.columnCount(width);
      if (newColCount !== this.columns) {
        console.log("Screen width changed. Adjusting column count");
        this.columns = newColCount;
      }
    })
  }

  private columnCount(containerWidth: number): number {
    const containerPadding = 32;
    const column = 125;
    const columnMargin = 4;
    return Math.round((containerWidth + containerPadding) / (column + columnMargin));
  }

  listingImage(image: string, index: number): string {
    if (!image) {
      return `assets/img/listing-placeholder.jpg`;
    } else {
      return `assets/img/${randomImage(index)}.jpg`;
      //return image;
    }
  }
}
export interface ListingCategory {
  name: "Your favorites" | "Benched" | "Current lineup" | "Ended";
  listings: Listing[];
}
export interface Listing {
  seriesName: string;
  nextAirDate: string;
  image?: string;
  favorite: boolean;
  status: "continuing" | "ended";
}
