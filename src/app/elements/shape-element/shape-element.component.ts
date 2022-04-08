import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shape-element',
  templateUrl: './shape-element.component.html',
  styleUrls: ['./shape-element.component.css']
})
export class ShapeElementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  subelements = ['Line', 'Arrow', 'Circle', 'Rectangle'];

}
