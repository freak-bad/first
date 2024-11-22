const input = require('readline-sync');

let x = input.questionInt("enter the number of players : ");
let team = [];
for(let i = 1; i <= x; i++){
    let name = input.question(`enter the name of the ${i} player : `);
    let runs = input.questionInt(`enter the runs of the ${i} player : `);
    let wickets = input.questionInt(`enter the wickets of the ${i} player : `);
    let catches = input.questionInt(`enter the catches of the ${i} player : `);
    team.push({NAME :name, RUNS :runs,WICKETS : wickets,CATCHES: catches});
}
// console.log(team);
let score = [];
for(let i = 0; i < team.length; i++){
    score.push({name:team[i].NAME,score: team[i].RUNS + team[i].WICKETS * 25 + team[i].CATCHES * 10});
}
// console.log(score);
var max = score[0];
for(let i = 0; i < score.length; i++){
    if(score[i].score > max.score){
        max = score[i];
    }
}
console.log('"'+max.name+'"');