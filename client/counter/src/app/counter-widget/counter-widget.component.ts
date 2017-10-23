import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fohm-counter-widget',
  templateUrl: './counter-widget.component.html',
  styleUrls: ['./counter-widget.component.css']
})
export class CounterWidgetComponent implements OnInit {
  value = 0;

  constructor() {
  }

  ngOnInit() {
  }

  minusValue() {
    this.value--;
  }
  plusValue() {
    this.value++;
  }
}
