import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from '../investiments/list/list.component';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [BankingComponent, ListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) getPoupanca(): poupanca must have 10 ', () => {
    expect(component.getPoupanca).toEqual(10);
  });

  it('(U) getCarteira(): carteira must have 50', () => {
    expect(component.getCarteira).toEqual(50);
  });

  it('(U) sacarValue(): should transfer value from poupanca to carteira', () => {
    component.sacarValue('10');

    expect(component.getPoupanca).toEqual(0);
    expect(component.getCarteira).toEqual(60);
  });

  it('(U) sacarValue(): should verify if input value is a NaN or is a invalid number', () => {
    expect(component.sacarValue('NaN')).not.toBeTruthy();
    expect(component.sacarValue('100')).not.toBeTruthy();
    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });

  it('(U) depositarValue(): should transfer value from carteira to poupanca', () => {
    component.depositarValue('50');

    expect(component.getPoupanca).toEqual(60);
    expect(component.getCarteira).toEqual(0);
  });

  it('(U) depositarValue(): should verify if input value is a NaN or is a invalid number', () => {
    expect(component.depositarValue('NaN')).not.toBeTruthy();
    expect(component.depositarValue('100')).not.toBeTruthy();
    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });
});
