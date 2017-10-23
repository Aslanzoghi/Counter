import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fohm-counter-display',
  templateUrl: './counter-display.component.html',
})
export class CounterDisplayComponent implements OnInit {

  constructor() { }
  @Input() value;
  ngOnInit() {
  }

}
