let team = {
  _players: [
    {
      firstName: "Bree",
      lastName: "C",
      age: 25
    },
    {
      firstName: "Lily",
      lastName: "F",
      age: 28
    },
    {
      firstName: "Mackee",
      lastName: "R",
      age: 31
    }
  ],
  _games: [
    {
      opponent: "Chicks",
      teamPoints: 7,
      opponentPoints: 2
    },
    {
      opponent: "Raiders",
      teamPoints: 3,
      opponentPoints: 1
    },
    {
      opponent: "Ladybugs",
      teamPoints: 5,
      opponentPoints: 4
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let newPlayer = {
       firstName,
       lastName,
       age,
    };
    let playerArray = this._players;
    playerArray.push(newPlayer);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let newGame = {
      opponent,
      teamPoints,
      opponentPoints
    };
    let gameArray = this._games;
    gameArray.push(newGame);
  }
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

team.addGame("Sparklers", 7, 4);
team.addGame("Firecrackers", 1, 1);
team.addGame("BTSARMY", 2, 2);

console.log(team.players);
console.log(team.games);
