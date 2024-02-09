import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleMedComponent } from './article-med.component';

describe('ArticleMedComponent', () => {
  let component: ArticleMedComponent;
  let fixture: ComponentFixture<ArticleMedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleMedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
