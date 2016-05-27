exports = module.exports = {
 
  VERSION: 'pokerstar v1',
 
  bet: function (gamestate, bet) {
 
    // gamestate contains info about the state of the game.
    // bet is the function you should use to send your bet.
 
    // currently we just fold every single hand
    return bet(0);
 
  }
 
};
