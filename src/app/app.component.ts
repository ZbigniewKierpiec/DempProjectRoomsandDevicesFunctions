import { RoomInter } from './Components/room';
import { RoomsService } from 'src/app/Services/rooms.service';
import { map, Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';

import SwiperCore, {
  Navigation,
  Scrollbar,
  Autoplay,
  A11y,
  Virtual,
  EffectFade,
  EffectCoverflow,
  EffectCube,
  EffectFlip,
} from 'swiper/core';


SwiperCore.use([Navigation, A11y]);
SwiperCore.use([Virtual]);
SwiperCore.use([EffectCoverflow]);
SwiperCore.use([EffectCube]);
SwiperCore.use([EffectFlip]);
SwiperCore.use([EffectFade]);
SwiperCore.use([Autoplay]);






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';
  rooms: Observable<any[]> | undefined;
  devices: Observable<any[]> | undefined;
  components: Observable<any[]> | undefined;
  skyTvName: any;
  isActive: any;
  deviceActive:any;








  config: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 10,
    speed: 500,
    navigation: false,
    autoplay: false,

    longSwipes: true,
    longSwipesMs: 800,
    longSwipesRatio: 0.7,

    effect: 'slide',
    pagination: { clickable: false },
    scrollbar: { draggable: false },
    virtual: true,
  };



















  device(item: any) {
    console.log(item.name);
    this.isActive = item.name;
    this.devices = this.services
      .getDevices()
      .pipe(map((device) => device.filter((d) => d.id == item.deviceId)));
  }

  deviceCheck(item: any) {
    console.log(item);
     this.deviceActive  = item.name;
    this.components = this.services
      .getComponents()
      .pipe(
        map((component) =>
          component.filter((comp) => comp.componentId == item.componentId)
        )
      );
  }


  checkData(e:any){
    console.log(e.target.dataset.numbers)
  }



  constructor(private services: RoomsService) {
    this.rooms = this.services.getRooms();
  }
}
