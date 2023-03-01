import { Component, OnInit } from '@angular/core';
import { Investiments } from 'src/app/models/investiments';
import { InvestimentsService } from 'src/app/services/investiments.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  investiments!: Array<Investiments>;

  constructor(private investimentsService: InvestimentsService) {}

  ngOnInit(): void {
    this.fetchInvestiments();
  }

  fetchInvestiments() {
    this.investimentsService.fetchInvestiments().subscribe({
      next: (res) => (this.investiments = res),
      error: (err) => console.log(err),
    });
  }
}
