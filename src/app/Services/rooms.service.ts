import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, filter, flatMap } from 'rxjs';
import { RoomInter } from '../Components/room';
@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(private http: HttpClient) {}

  onDeviceSend = new EventEmitter<{ number: number; text: string }>();

  sendDevice(Device: { number: number; text: string }) {
    this.onDeviceSend.emit(Device);
  }

  getRooms(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/rooms');
  }

  getDevices(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/device');
  }

  getComponents(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/components');
  }

  getSecendDevice(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/Secend-devices');
  }

  getSecendNumPad(): Observable<any[]> {
    return this.getSecendDevice().pipe(
      map((device) => device.flatMap((device) => device.Modules)),
      map((module) => module.filter((modul) => modul.ModuleId == 3))
    );
  }

  getColorBtn(): Observable<any[]> {
    return this.getSecendDevice().pipe(
      map((device) => device.flatMap((device) => device.Modules)),
      map((module) => module.filter((modul) => modul.ModuleId == 1))
    );
  }

  getPlayBtn(): Observable<any[]> {
    return this.getSecendDevice().pipe(
      map((device) => device.flatMap((device) => device.Modules)),
      map((module) => module.filter((modul) => modul.ModuleId == 4))
    );
  }

  getnumPad(): Observable<any[]> {
    return this.getSecendDevice().pipe(
      map((device) => device.flatMap((device) => device.Modules)),
      map((module) => module.filter((modul) => modul.ModuleId == 2))
    );
  }

  getflatPad(): Observable<any[]> {
    return this.getSecendDevice().pipe(
      map((device) => device.flatMap((device) => device.Modules)),
      map((module) => module.filter((modul) => modul.ModuleId == 6))
    );
  }

  getModuleType(): Observable<any[]> {
    return this.getSecendDevice().pipe(
      map((device) => device.flatMap((device) => device.Modules))
    );
  }

  getType(): Observable<any[]> {
    return this.getModuleType().pipe(
      map((data) => data.filter((modul) => modul.type === 'DefaultDpad'))
    );
  }

  // getDevice(){
  //   return this.getDevices().pipe(
  //     map((device)=>device.filter((d)=>d.id === 2))
  //   )
  // }
}
