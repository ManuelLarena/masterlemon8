import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { GalleryEntity } from '../model/Gallery-Entity';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  // galleryImages: GalleryEntity[];
  gallery$: Observable<GalleryEntity[]>;

  constructor() {
    this.gallery$ = of<GalleryEntity[]>([
      {
        id: 0,
        src: 'assets/images/image_0.jpg',
        title: 'Image 1',
      },
      {
        id: 1,
        src: 'assets/images/image_1.jpg',
        title: 'Image 2',
      },
      {
        id: 2,
        src: 'assets/images/image_2.jpg',
        title: 'Image 3',
      },
      {
        id: 3,
        src: 'assets/images/image_3.jpg',
        title: 'Image 4',
      },
      {
        id: 4,
        src: 'assets/images/image_4.jpg',
        title: 'Image 5',
      },
      {
        id: 5,
        src: 'assets/images/image_5.jpg',
        title: 'Image 6',
      },
      {
        id: 6,
        src: 'assets/images/image_6.jpg',
        title: 'Image 7',
      },
      {
        id: 7,
        src: 'assets/images/image_7.jpg',
        title: 'Image 8',
      },
    ]);

    // this.gallery$.subscribe((images) => {
    //   this.galleryImages = [...images];
    // });
  }

  // getImages() {
  //   return this.galleryImages;
  // }
}
