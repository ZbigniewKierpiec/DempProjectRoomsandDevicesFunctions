import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomsService } from 'src/app/Services/rooms.service';

@Component({
  selector: 'app-sky-tv',
  templateUrl: './sky-tv.component.html',
  styleUrls: ['./sky-tv.component.scss'],
})
export class SkyTvComponent implements OnInit {
  constructor(private comp: RoomsService) {}

  component: Observable<any[]> | undefined;
  colorBtn: Observable<any[]> | undefined;
  playBtn: Observable<any[]> | undefined;
  moduleType: Observable<any[]> | undefined;
  type: Observable<any[]> | undefined;
  ngOnInit(): void {
    this.component = this.comp.getSecendNumPad();
    this.colorBtn = this.comp.getColorBtn();
    this.playBtn = this.comp.getPlayBtn();
    this.moduleType = this.comp.getModuleType();

    this.comp.getModuleType().subscribe((data) => {
      console.log(data);
    });

    this.type = this.comp.getType();

    this.comp.getType().subscribe((data) => {
      console.log(data);
    });

    // this.comp.getPlayBtn().subscribe((data)=>{
    //   console.log(data)
    // })
    // this.comp.getColorBtn().subscribe((data)=>{
    //   console.log(data)
    // })
    // this.comp.getSecendNumPad().subscribe((data) => {
    //   console.log(data);
    // });
  }
}
