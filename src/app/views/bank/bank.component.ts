import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
// Doughnut
public doughnutChartLabels: string[] = ['SBI', 'TATA', 'ICICI','Axis'];
public doughnutChartData: number[] = [35, 45, 10,5];
public doughnutChartType = 'doughnut';

}
