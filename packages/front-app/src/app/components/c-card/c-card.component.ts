import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-c-card',
  templateUrl: './c-card.component.html',
  styleUrls: ['./c-card.component.scss'],
})
export class CCardComponent implements OnInit {
  @Input() name: string;
  @Input() imageUrl: String;
  @Input() id: String;
  @Input() moreDetails: boolean = false;
  @Input() callback: Function;
  @Output() detailsRedirect: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  emitDetailsRedirect() {
    this.callback();
    this.detailsRedirect.emit('click');
  }
}
