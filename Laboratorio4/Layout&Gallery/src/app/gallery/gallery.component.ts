import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';
import { GalleryEntity } from '../model/Gallery-Entity';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  gallery: GalleryEntity[] = [];
  selectedImg: GalleryEntity;
  indexGallery: number;
  galleryLength: number;
  imgWidth: number;
  widthIncrease: number;
  start: number;
  end: number;
  itemsGallery: number;
  isFirstGallery: boolean;
  isLastGallery: boolean;
  carousel: number;

  constructor(private galleryService: GalleryService) {
    galleryService.gallery$.subscribe((images: GalleryEntity[]) => {
      this.gallery = [...images];
    });
    // this.gallery = galleryService.getImages();
    this.selectedImg = { ...this.gallery[0] };
    this.indexGallery = 0;
    this.galleryLength = this.gallery.length - 1;
    this.imgWidth = 500;
    this.widthIncrease = 50;
    this.start = 0;
    this.end = 3;
    this.itemsGallery = 3;
    this.isFirstGallery = true;
    this.isLastGallery = false;
    this.carousel = 0;
  }

  ngOnInit(): void {}

  isFirstImg(index: number): boolean {
    return index === 0 ? true : false;
  }

  isLastImg(index: number): boolean {
    return index === this.galleryLength ? true : false;
  }

  isActive(img: GalleryEntity): boolean {
    return img.id === this.selectedImg.id ? true : false;
  }

  getPrevImg(): void {
    this.selectedImg = { ...this.gallery[--this.indexGallery] };
    this.isFirstImg(this.indexGallery);
  }

  getNextImg(): void {
    this.selectedImg = { ...this.gallery[++this.indexGallery] };
    this.isLastImg(this.indexGallery);
  }

  getGrowImg(): void {
    this.imgWidth += this.widthIncrease;
  }

  getReduceImg(): void {
    this.imgWidth -= this.widthIncrease;
  }

  playCarousel(): void {
    if (this.isLastImg(this.indexGallery)) {
      this.indexGallery = 0;
    } else {
      this.indexGallery++;
    }
    this.selectedImg = { ...this.gallery[this.indexGallery] };
  }

  play(e: any): void {
    if (e.target.innerHTML === 'Play') {
      this.carousel = setInterval(() => {
        this.playCarousel();
      }, 2000);
      e.target.innerHTML = 'Stop';
    } else {
      clearInterval(this.carousel);
      e.target.innerHTML = 'Play';
    }
  }

  getPrevGallery(): void {
    this.start -= this.itemsGallery;
    this.end -= this.itemsGallery;

    switch (this.start) {
      case 0:
        this.isFirstGallery = true;
      default:
        this.isLastGallery = false;
    }
  }

  getNextGallery(): void {
    this.start += this.itemsGallery;
    this.end += this.itemsGallery;

    switch (true) {
      case this.end >= this.galleryLength:
        this.isLastGallery = true;
      default:
        this.isFirstGallery = false;
    }
  }

  selectedSmallImg(img: GalleryEntity): void {
    const { id, src, title } = img;
    this.selectedImg = { ...img };
    this.indexGallery = this.gallery.findIndex((item) => item.id === id);
    this.isFirstImg(this.indexGallery);
    this.isLastImg(this.indexGallery);
    this.isActive(img);
  }
}
