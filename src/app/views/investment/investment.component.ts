import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
// Doughnut
public doughnutChartLabels: string[] = ['SBI', 'TATA', 'ICICI','Axis'];
public doughnutChartData: number[] = [35, 45, 10,5];
public doughnutChartType = 'doughnut';

}
