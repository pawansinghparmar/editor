import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElementSelectorService {

  constructor() { }
  selctedElement(el: string) {
    console.log(el);
  }
  selectedSubElement(subEl: string) {
    console.log(subEl);
  }
}
