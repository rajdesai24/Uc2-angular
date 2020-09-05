import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoicefillComponent } from './choicefill.component';

describe('ChoicefillComponent', () => {
  let component: ChoicefillComponent;
  let fixture: ComponentFixture<ChoicefillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoicefillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoicefillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
