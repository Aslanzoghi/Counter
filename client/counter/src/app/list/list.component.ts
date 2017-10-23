import { Component, OnInit } from '@angular/core';
import { ValueService } from '../value.service';

@Component({
  selector: 'fohm-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private valueService: ValueService) {
  }

  counters: any[];

  ngOnInit() {
    this.valueService.list().subscribe((result: any[]) => this.counters = result);
  }

}
