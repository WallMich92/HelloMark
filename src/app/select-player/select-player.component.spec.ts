import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('expect options to be displayed' , () => {
  let component: SelectPlayerComponent;
  let fixture: ComponentFixture<SelectPlayerComponent>;
  let mockGameStateService;

  beforeEach(() => {
    mockGameStateService = jasmine.createSpyObj('GameStateService', ['setSelectedPlayer']);

    TestBed.configureTestingModule({
      declarations: [ SelectPlayerComponent ],
      providers: [
        { provide: GameStateService, useValue: mockGameStateService }
      ]
    });
    fixture = TestBed.createComponent(SelectPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('expect playeroptions to be displayed', () => {
    const componentHtmlElement: HTMLElement = fixture.nativeElement;
    const playerOptions: HTMLCollection = componentHtmlElement.getElementsByClassName('player-option');
    expect(playerOptions[0].innerHTML).toEqual('michi');
    expect(playerOptions[1].innerHTML).toEqual('mark');
  });
  it ('expect click on option to trigger selection', () => {
    const componentHtmlElement: HTMLElement = fixture.nativeElement;
    const playerOptions: HTMLCollection = componentHtmlElement.getElementsByClassName('player-option');
    expect(playerOptions[0].dispatchEvent(new MouseEvent('click')));
    expect(mockGameStateService.setSelectedPlayer).toHaveBeenCalledWith('michi');
  });
  it ('expect click on option to trigger selection', () => {
    const componentHtmlElement: HTMLElement = fixture.nativeElement;
    const playerOptions: HTMLCollection = componentHtmlElement.getElementsByClassName('player-option');
    expect(playerOptions[1].dispatchEvent(new MouseEvent('click')));
    expect(mockGameStateService.setSelectedPlayer).toHaveBeenCalledWith('mark');
  });
  it ('expect player selected event to have been emitted', (success) => {
    component.playerSelected.subscribe(() => {
      success();
    });
    const componentHtmlElement: HTMLElement = fixture.nativeElement;
    const playerOptions: HTMLCollection = componentHtmlElement.getElementsByClassName('player-option');
    expect(playerOptions[0].dispatchEvent(new MouseEvent('click')));
  });
});
