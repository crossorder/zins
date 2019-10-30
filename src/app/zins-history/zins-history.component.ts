import { Component, OnInit } from '@angular/core';
import { ZinsHistory } from './zinsHistory';

@Component({
  selector: 'app-zins-history',
  templateUrl: './zins-history.component.html',
  styleUrls: ['./zins-history.component.scss']
})
export class ZinsHistoryComponent implements OnInit {

  zinsHistories: ZinsHistory[] = [];
  color = 'yellow';

  constructor() { }

  ngOnInit() {
    var z:ZinsHistory;
    for (var i=1; i<=1000; i++) {
      z = {
        id: i, eventTime: new Date()
      };
      this.zinsHistories.push(z);
    }
  }
}
