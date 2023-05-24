import { map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/Services/rooms.service';

@Component({
  selector: 'app-flat-pad',
  templateUrl: './flat-pad.component.html',
  styleUrls: ['./flat-pad.component.scss'],
})
export class FlatPadComponent implements OnInit {
  constructor(private services: RoomsService) {}

  flatPad: Observable<any[]> | undefined;

  getGrid(columns: any, width: any, gap: any, rows: any) {
    return {
      'grid-template-columns': `repeat(${columns}, ${width}rem)`,
      'grid-template-rows': `${rows}rem`,
      'grid-gap': `${gap}rem`,
    };
  }

  ngOnInit(): void {
    this.flatPad = this.services.getflatPad();
    this.services.getflatPad().subscribe((data) => {
      console.log(data);
    });

    // console.log(this.columns);
  }
}
