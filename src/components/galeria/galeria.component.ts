import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {

  name='Gerson';

  count = 0;

  index = 0;
  disabledPrev = false;
  disabledNext = false;
  disabled = false;

  imgSource = ['https://www.lordinario.it/wp-content/uploads/2018/10/TEX-rampante-Galep.jpg',
  'https://1.bp.blogspot.com/-oZULWV9Csh0/Xej09rnLPbI/AAAAAAAAiXw/BYJUaTwNDuwCvijht0a210b_FKxpPstFwCLcBGAsYHQ/s1600/FB_IMG_1575546796489.jpg',
  'https://i.pinimg.com/736x/53/67/e6/5367e6f10f28181de20a42b5960407b4.jpg']

  updateCount(){
    this.count+=1;
  }
  zeroCount(){
    this.count=0;
  }

nextImage(){
  this.index+=1;
    if(this.index <= 0){
      this.disabledNext = false;
      this.disabledPrev = true;
    }
    else if(this.index==1){
      this.disabledPrev = false;
      this.disabledNext = false;
    }
    else if(this.index>=2){
      this.disabledNext = true;
      this.disabledPrev = false;
    }

}
previousImage(){
  this.index-=1;
    if(this.index <= 0){
      this.disabledPrev = true;
      this.disabledNext = false;
    }
    else if(this.index==1){
      this.disabledPrev = false;
      this.disabledNext = false;
    }
    else if(this.index>=2){
      this.disabledPrev = false;
      this.disabledNext = true;
    }


}



}
