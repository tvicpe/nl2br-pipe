import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nl2brComponent } from './nl2br.component';

describe('Nl2brComponent', () => {
  let component: Nl2brComponent;
  let fixture: ComponentFixture<Nl2brComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nl2brComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nl2brComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
