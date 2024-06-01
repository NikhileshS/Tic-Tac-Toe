// All the possible win combinations in the game
const winningconditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// This represents the game array, where the player interacts
let gameboard = ['','','','','','','','','']

// An IIFE Module that is used for checking if the game has been Won by the player or not
const game = (function(){
    // Checks if the game is won or not -- also checks if the game is draw
    const check = () =>{    

        for(let i of winningconditions){
            const [a,b,c] = i;
            if(gameboard[a] === 'x'& gameboard[b] === 'x' & gameboard[c] === 'x'){
                console.log('The player Won');
                return false;
        }}
    return true;
    }

    // Player move -- checks the board if the player plays on same tile or if the board is draw
    const move = (a) =>{
        if(prevent(a)){
        gameboard[a] = 'x';
        console.log(gameboard);
        }
    }
    //prevents Player to play on the same tile
    const prevent = (a) =>{
        if(gameboard[a] === 'x'){
            console.log('Already X has been placed')
            return false
        }
        return true
    }
    return {check,prevent};
    } 
)();

// Factory Function for the player control
function player(){
    const move = (a) =>{
        if(game.prevent(a)){
            if(game.check()){
                gameboard[a] = 'x';
                console.log(gameboard);
                game.check();
            }
        }
    }
    return {move}
}

const user = player();
