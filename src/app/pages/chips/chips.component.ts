import { Component, OnInit } from '@angular/core';
import { USER_DATA } from '../../data';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {

  userData = USER_DATA;

  constructor() { }

  ngOnInit() {
  }

  remove(index) {
    if (index >= 0) {
      this.userData.list.entries.splice(index, 1);
    }
  }

}
