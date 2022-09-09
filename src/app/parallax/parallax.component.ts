import { Component, OnInit } from '@angular/core';
declare var test : any;
@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit {
   title =  'parallax works !';
   f(){
    new test();
   }
  constructor() { }

  ngOnInit(): void {

  }

}
