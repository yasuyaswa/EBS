import { Component, OnInit } from '@angular/core';
import { BillsService } from '../bills.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent {
 // bills: Bill[] = [];
}

constructor(private billService: BillsService, private router: Router)
