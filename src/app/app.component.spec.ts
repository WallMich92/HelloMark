import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HelloMarkComponent} from './hello-mark/hello-mark.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HelloMarkComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'HelloMark'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('HelloMark');
  });

  it('expect player selection to be hidden after event triggered', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.displayPlayerSelection).toEqual(true);
    app.playerSelected('michi');
    expect(app.displayPlayerSelection).toEqual(false);
  });
});
