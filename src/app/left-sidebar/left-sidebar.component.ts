import { Component, OnInit } from '@angular/core';
import { Element } from '../element.model';
import { ElementSelectorService } from '../element-selector.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  constructor(private elSelectorService: ElementSelectorService) { }
  selectedElement = '/Text'
  ngOnInit(): void {
  }
  elements: Element[] = [
    { name: 'Text', icon: 'fa fa-keyboard-o' },
    { name: 'Shape', icon: 'fa fa-pencil-square-o', subelements: ['Line', 'Arrow', 'Circle', 'Rectangle'] },
    { name: 'Button', icon: 'fa fa-caret-square-o-right', subelements: ['Submit', 'Radio'] },
    { name: 'List', icon: 'fa fa-list', subelements: ['Numbered', 'Bullet', 'Arrow'] },
    { name: 'Select', icon: 'fa fa-check-square-o' },
    { name: 'Table', icon: 'fa fa-table' }
  ]

  elSelected(el: string) {
    this.selectedElement = '/' + el;
    this.elSelectorService.selctedElement(el);
  }
  subElSelected(subEl: string) {
    this.elSelectorService.selectedSubElement(subEl);
  }
}
