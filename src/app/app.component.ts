import { Component } from '@angular/core';

import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'portfolio_ang';

   constructor(){}
   
   onWindowScroll() {
       let element = document.querySelector('.navbar') as HTMLElement;
       if (window.pageYOffset > 50) {
         element.classList.add('py-3');
         element.classList.remove('py-4');
       } else {
         element.classList.remove('py-3');
         element.classList.add('py-4');
       }
     }


   }
   

   
