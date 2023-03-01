import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss'],
})
export class BankingComponent {
  private valuePoupanca = 10;
  private valueCarteira = 50;

  get getPoupanca(): number {
    return this.valuePoupanca;
  }

  get getCarteira(): number {
    return this.valueCarteira;
  }

  sacarValue(value: string): number | undefined {
    const intValue = Number(value);

    if (isNaN(intValue) || this.valuePoupanca < intValue) {
      return;
    }

    this.valuePoupanca -= intValue;
    this.valueCarteira += intValue;
    return intValue;
  }

  depositarValue(value: string): number | undefined {
    const intValue = Number(value);

    if (isNaN(intValue) || this.valueCarteira < intValue) {
      return;
    }

    this.valueCarteira -= intValue;
    this.valuePoupanca += intValue;
    return intValue;
  }
}
