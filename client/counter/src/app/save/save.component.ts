import { Component } from '@angular/core';
import { ValueService } from '../value.service';

@Component({
  selector: 'fohm-save',
  templateUrl: './save.component.html',
})
export class SaveComponent {

  storageName = 'test';

  constructor(private valueServie: ValueService) {
  }

  onSubmit() {
    this.valueServie.submit(this.storageName).subscribe();
  }

}
