import { RoomInter } from './../room';
import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { RoomsService } from 'src/app/Services/rooms.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  @Input() name: any | undefined;
  @Input() data: any | undefined;
  rooms:any[]=[];
  constructor(private services: RoomsService) {

              this.services.onDeviceSend.asObservable().subscribe((data)=>{
                 console.log(data)
                 let item={
                  number: data.number,
                  text:data.text
                 }
                 this.rooms.push(item)

              })
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.rooms);
  }
}
