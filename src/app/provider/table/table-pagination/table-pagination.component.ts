import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss']
})
export class TablePaginationComponent implements OnInit {
  @Output() elements = new EventEmitter<any>();
  @Input() data: any[];
  @Input() entries: number;
  display: any[];
  splits: any[];
  selectedNum: number;
  pageTracker: number[];
  maxButtons: number = 6;

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.makeSplits(), 1);
  }

  ngOnChanges(changes: any): void {
    setTimeout(() => this.makeSplits(), 1);
  }

  makeSplits() {
    if (!this.data) return;
    if (this.entries > this.data.length) {
      this.elements.emit(this.data);
      return;
    }

    this.splits = [];
    this.pageTracker = [];
    var count = 0;
    for (let index = 0; index < this.data.length; index += this.entries) {
      this.splits.push(this.data.slice(index, index + this.entries));
      this.pageTracker.push(count++);
    }

    this.selectedNum = 0;
    this.emit();
  }

  getPageTracker(): number[] {
    if (!this.pageTracker) return null;
    if (this.pageTracker.length < this.maxButtons) return this.pageTracker;
    var half: number = this.maxButtons / 2;
    if (this.selectedNum < half)
      return this.pageTracker.slice(0, this.maxButtons);
    return this.pageTracker.slice(this.selectedNum - half, this.selectedNum + half);
  }

  emit() {
    this.elements.emit(this.splits[this.selectedNum]);
  }

  isMax() {
    return this.splits ? this.selectedNum + 2 > this.splits.length : false;
  }

  isMin() {
    return this.selectedNum < 1;
  }

  onNext() {
    if (this.isMax()) return;
    this.selectedNum++;
    this.emit();
  }

  onPrev() {
    if (this.isMin()) return;
    this.selectedNum--;
    this.emit();
  }

  onPage(page: number) {
    this.selectedNum = page;
    this.emit();
  }

  exceedsMin(): boolean {
    return this.data ? this.data.length > this.entries : false;
  }

  selected(num: number) {
    return num == this.selectedNum;
  }
}