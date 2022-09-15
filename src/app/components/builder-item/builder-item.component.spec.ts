import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderItemComponent } from './builder-item.component';

describe('BuilderItemComponent', () => {
  let component: BuilderItemComponent;
  let fixture: ComponentFixture<BuilderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuilderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
