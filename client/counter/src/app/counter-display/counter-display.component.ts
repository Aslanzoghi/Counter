import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fohm-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent implements OnInit {

  constructor() { }
  @Input() value;
  ngOnInit() {
  }

}
