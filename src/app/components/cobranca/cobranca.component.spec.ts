/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CobrancaComponent } from './cobranca.component';

describe('CobrancaComponent', () => {
  let component: CobrancaComponent;
  let fixture: ComponentFixture<CobrancaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobrancaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobrancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
