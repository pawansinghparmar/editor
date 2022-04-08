import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Element } from '../element.model';
import { ElementSelectorService } from '../element-selector.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  constructor(private elSelectorService: ElementSelectorService) { }
  selectedElement = '/Text';
  shapeSelected = '/Line';
  buttonSelected = '/Submit';
  listSelcted = '/Numbered';
  ngOnInit(): void {
  }
  elements: Element[] = [
    { name: 'Text', icon: 'fa fa-keyboard-o' },
    { name: 'Shape', icon: 'fa fa-pencil-square-o', subelements: ['Line', 'Arrow', 'Circle', 'Rectangle'], status: true },
    { name: 'Button', icon: 'fa fa-caret-square-o-right', subelements: ['Submit', 'Radio'], status: true },
    { name: 'List', icon: 'fa fa-list', subelements: ['Numbered', 'Bullet', 'Arrow'], status: true },
    { name: 'Select', icon: 'fa fa-check-square-o' },
    { name: 'Table', icon: 'fa fa-table' }
  ]

  elSelected(el: Element) {
    // if (el.name === 'Text' || el.name === 'Select' || el.name === 'Table') {
    //   this.selectedElement = '/' + el.name;
    // } else {
    //   if (el.name === 'Shape') {
    //     // this.selectedElement = this.shapeSelected;
    //     console.log(el.status);
    //     this.selectedElement = '/' + el.name;
    //   } else if (el.name === 'Button') {
    //     console.log(el.status);
    //     this.selectedElement = '/' + el.name;
    //   } else {
    //     this.selectedElement = '/' + el.name;
    //     console.log(el.status);
    //   }
    // }
    // this.elSelectorService.selctedElement(el);
    this.selectedElement = '/' + el.name;
    return this.selectedElement;
  }
  subElSelected(subEl: string) {

    // this.elSelectorService.selectedSubElement(subEl);
  }
  toggle(el: Element) {
    const tempStatus = el.status;
    this.elements.forEach((el) => el.status = true);
    el.status = !tempStatus;
  }
}