import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { WalkinPage } from './walkin.page';

describe('WalkinPage', () => {
  let component: WalkinPage;
  let fixture: ComponentFixture<WalkinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkinPage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(WalkinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
