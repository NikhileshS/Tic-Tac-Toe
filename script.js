// All the possible win combinations in the game
const winningconditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// This represents the game array, where the player interacts
let gameboard = ['','','','','','','','','']

// An IIFE Module that is used for checking if the game has been Won by the player or not
const game = (function(){
    const check = () =>{
    for(let i = 0; i<winningconditions+1; i++){
        let [a,b,c] = winningconditions[i]
        if([gameboard[a],gameboard[b],gameboard[c]] == ['x','x','x']){
            return console.log('The player Won');
        }
    const move = (a) =>{
        gameboard[a] = 'x';
        console.log(gameboard);
    }
    const prevent = (a) =>{
        if(gameboard[a] === 'x'){
            console.log('Already X has been placed')
            return 
        }
    }
    return {check,move};

    } }
})();

