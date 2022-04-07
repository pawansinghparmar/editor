import { Component, OnInit } from '@angular/core';
import { ElementSelectorService } from '../element-selector.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  constructor(private elSelectorService: ElementSelectorService) { }

  ngOnInit(): void {
  }
  
}
