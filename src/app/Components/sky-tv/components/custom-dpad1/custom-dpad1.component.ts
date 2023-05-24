import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/Services/rooms.service';

@Component({
  selector: 'app-custom-dpad1',
  templateUrl: './custom-dpad1.component.html',
  styleUrls: ['./custom-dpad1.component.scss'],
})
export class CustomDpad1Component implements OnInit {
  dpad: Observable<any[]> | undefined;
  constructor(private services: RoomsService) {}

  ngOnInit(): void {
    this.dpad = this.services.getnumPad();

    // this.services.getnumPad().subscribe((data) => {
    //   console.log(data);
    // });
  }
}
