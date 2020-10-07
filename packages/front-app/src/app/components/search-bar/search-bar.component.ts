import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  host: { class: 'search-bar ' },
})
export class SearchBarComponent implements OnInit {
  @Output() search: EventEmitter<string> = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  searchEmmit(value: any) {
    this.search.emit(value);
  }
}
