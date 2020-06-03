import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { TableCompose } from '../table-compose';
import { Utility } from '../../utility';
import { isNullOrUndefined } from "util";

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit, OnChanges {
  items: TableCompose[];
  @Input() search: boolean;
  @Input() data: TableCompose;
  @Input() title: string;
  @Input() add: any;
  @Input() back: any;
  @Input() entries: number;
  @Output() itemClick = new EventEmitter<any>();
  @Output() addClick = new EventEmitter<any>();
  @Output() backClick = new EventEmitter<any>();

  selected: any;
  elements: any[];
  loaded: boolean;
  public properties: any;
  private _searchText: string = "";

  constructor() { }

  ngOnInit() {  
    if (!this.entries) this.entries = 7;
  }

  ngOnChanges(changes: any): void {
  }

  onclick(item) {
    this.selected = item;
    this.itemClick.emit(item);
  }

  isSelected(item): boolean {
    return Utility.isEquivalent(this.selected, item);
  }

  loadElements($event) {
    this.elements = $event;
  }

  onAdd() {
    this.addClick.emit();
  }
  onBack() {
    this.backClick.emit();
  }

  selectedHead: any;
  sortByHeader(head) {
    this.selectedHead = head;
    console.log(head);
    var sortedData = this.data.body.sort((objA, objB) => {
      if (objA[head.Name] < objB[head.Name])
        return -1;
      if (objA[head.Name] > objB[head.Name])
        return 1;
      return 0;
    });
    this.data.body = [];
    setTimeout(() => {
      this.data.body = sortedData;
    }, 1)
  }

  filterItems(searchText: string) {
    this._searchText = searchText;
    this.properties = Object.getOwnPropertyNames(this.data.body[0]);
    this.loadItems();
  }

  loadItems() {
    this.items = this.data.body.filter(item => this.properties.some(p => this.find(item[p])));
  }

  find(item: any): boolean {
    let searchText: string = this._searchText.toLocaleLowerCase();
    if (isNullOrUndefined(searchText)) return true;
    if (isNullOrUndefined(item)) return false;
    if (typeof item != 'object') return String(item).toLocaleLowerCase().includes(searchText);
    return Object.getOwnPropertyNames(item).some(p => this.find(item[p]));
  }
}