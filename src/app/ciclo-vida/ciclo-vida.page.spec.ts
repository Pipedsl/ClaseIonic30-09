import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CicloVidaPage } from './ciclo-vida.page';

describe('CicloVidaPage', () => {
  let component: CicloVidaPage;
  let fixture: ComponentFixture<CicloVidaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CicloVidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
