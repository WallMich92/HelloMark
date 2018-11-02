describe('test game state service', () => {
  it('expect player selection to set current player', () => {
    const serviceToTest: GameStateService = new GameStateService();
    serviceToTest.setSelectedPlayer('michi');
    expect(serviceToTest.selectedPlayer).toEqual('michi');
  });
});
