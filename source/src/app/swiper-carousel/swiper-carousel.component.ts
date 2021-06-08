import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-swiper-carousel',
  templateUrl: './swiper-carousel.component.html',
  styleUrls: ['./swiper-carousel.component.css']
})
export class SwiperCarouselComponent implements OnInit {
  images = ["assets/images/cloth1.jpeg", "assets/images/cloth2jpeg.jpg", "assets/images/cloth3.jpeg"];
  constructor() { }

  ngOnInit(): void {
  }

 

}
