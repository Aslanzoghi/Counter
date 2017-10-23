import { Component, OnInit } from '@angular/core';
import { ValueService } from '../value.service';

@Component({
  selector: 'fohm-counter-widget',
  templateUrl: './counter-widget.component.html',
  styleUrls: ['./counter-widget.component.css']
})
export class CounterWidgetComponent implements OnInit {
  value = 0;

  constructor(private valueService: ValueService) {
  }

  ngOnInit() {
    const serviceCall = this.valueService.get();
    serviceCall.subscribe((rsult: any) =>
      this.value = +rsult
    );
  }

  minusValue() {
    this.valueService.minus().subscribe((rsult:any) =>
      this.value = +rsult
    );
  }

  plusValue() {
    this.valueService.plus().subscribe((rsult:any) =>
      this.value = +rsult
    );
  }
}
