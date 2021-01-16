import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  @Input () titulo:string='';
  constructor() { }

  ngOnInit() {
  }

}
