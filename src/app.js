//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
const managerDetails =[managerName, managerAge, currentTeam, trophiesWon];
return managerDetails;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];
function createFormation()
{
  if(formation.length == 0)
  {
    return null;
  }
  var car = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2],
  };
 return car;
}
//write your function here

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  var debutant = [];
  for (var i = 0; i < players.length; i++) {
    if (players[i].debut == year) {
      debutant.push(players[i]);
    }
  }
  return debutant;
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  var player_position = [];
  for (var i = 0; i < players.length; i++) {
    if (players[i].position == position) {
      player_position.push(players[i]);
    }
  }
  return player_position;

}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName){
  var player_awards = [];
  var j;
  for (var i = 0; i < players.length; i++) {
    for (j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awradName) {
        player_awards.push(players[i]);
      }
    }
  }
  return player_awards;
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){
  var count = 0;
  var awardsTimes = [];
  var player_awards = [];
  
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName) {
        count++;
      }
    }
    awardsTimes[i] = count;
    count = 0;
  }
  for (var i = 0; i < players.length; i++) {
    if (awardsTimes[i] == noOfTimes) {
      player_awards.push(players[i]);
    }
  }
  return player_awards;

}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxTimes(awardName, country){
  var player_country = [];
  var j;
  for (var i = 0; i < players.length; i++) {
    if(players[i].country == country){
    for (j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName && players[i].country == country) {
        player_country.push(players[i]);
      }
    }
  }
}
  return player_country;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var player_end = [];
  var j = 0;
  for (var i = 0; i < players.length; i++) {
    if ((players[i].awards.length >= no) && (players[i].team == team) && (players[i].age <= age))
      player_end[j++] = players[i];
  }
  return player_end;
  
}

//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  let sort_age = [];
  for (var i = 0; i < players.length; i++) {
    sort_age = players[i].sort().reverse();
  }
  return sort_age;
  
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team) {
  var player_team = [];
  for (var i = 0; i < players.length; i++) {
    if (players[i].team == team) {
      player_team.push(players[i]);
    }
  }
  for (var i = 0; i < players.length; i++) {
    if (player[i].awards == noOfTimes) {
      player_team.sort().reverse();
    }
  }
  return player_team;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age) {
  
}
