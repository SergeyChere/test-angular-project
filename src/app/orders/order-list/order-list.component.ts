import {Component, OnInit, ViewChild} from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { PageEvent } from '@angular/material';

const ELEMENT_DATA = [
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 29.99,
    description: '2lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 10.99,
    description: '0.5lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 43.99,
    description: '15lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 29.99,
    description: '2lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 10.99,
    description: '0.5lbs of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 43.99,
    description: '15lbs of tuna',
    isChecked: false
  }
];

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  displayedColumns: string[] = ['action', 'orderNumber', 'orderDate', 'descriptions', 'total'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource: MatTableDataSource<object>;

  lenght = 100;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [1,2,5,10];

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  pageEvent: PageEvent;

  constructor() { }

  onPageChange(e) {
    const previousPageIndex = e.previousPageIndex;
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    const lenght = e.length;
    this.loadData(this.pageIndex, this.pageSize);
  }

  loadData(pageIndex, pageSize) {
    this.dataSource = new MatTableDataSource<object>(ELEMENT_DATA.slice(pageIndex, pageIndex+pageSize));
  }

  ngOnInit() {
    this.loadData(0, this.pageSize);
    this.dataSource.sort = this.sort;
  }

  selectAll() {
    for(var elm of ELEMENT_DATA) {
      elm.isChecked = !elm.isChecked;
    }
  }
}
