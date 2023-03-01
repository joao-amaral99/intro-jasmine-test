import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain list of investiments', () => {
    let investiments = component.investiments;

    expect(investiments.length).toBe(3);
    expect(investiments[0].name).toEqual('Itaú');
    expect(investiments[2].name).toEqual('Inter');
  });

  it('should render list of investiments', () => {
    const investiments = fixture.debugElement.nativeElement as HTMLElement;
    const elements = investiments.querySelectorAll('.list-item');

    expect(elements.length).toBe(3);
    expect(elements[0].textContent?.trim()).toEqual('Itaú | 1000');
    expect(elements[1].textContent?.trim()).toEqual('Nubank | 2000');
    expect(elements[2].textContent?.trim()).toEqual('Inter | 4000');
  });
});
