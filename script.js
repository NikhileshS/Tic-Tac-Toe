// All the possible win combinations in the game
const winningconditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
// This represents the game array, where the player interacts
let gameboard = ['','','','','','','','',''];
//Selects the message board
const msg = document.querySelector('.msg');
//Selects every single Boxes in the grid of the game
const box = document.querySelectorAll('.box');
// Selects Reset button
const reset = document.querySelector('.reset');
reset.addEventListener('click',() =>{
    const game = board();
    game.reset();
})
//assigning Game functions to each boxes
for(let i=0; i<box.length;i++){
    box[i].addEventListener('click',()=>{
            const user = player('x');
            (game.prevent(i)) ? user.move(i) : msg.textContent = "Already Placed";
        })
    }
// An IIFE Module that is used for checking the winning conditions for the player and the computer
const gamecondition =(function(){
    const check = () =>{
        for(let i of winningconditions){
            const [a,b,c] = i;
            if(gameboard[a] === 'x' && gameboard[b] === 'x' && gameboard[c] === 'x'){
                msg.textContent = "The Player Won";
                return false;
            }
            else if(gameboard[a] === 'o' && gameboard[b] === 'o' && gameboard[c] === 'o'){
                msg.textContent = "The Computer Won";
                return false;
            }
        }
        return true
    }
return{check}
})()
// An IIFE Module that is used for checking if the game has been Won by the player or not
const game = (function(){
    // Checks if the game is won or not -- also checks if the game is draw
    const check = () =>{    
        if(gameboard.includes('')){
            return gamecondition.check();
        }
        else{
            if(gamecondition.check()){
                msg.textContent = "Game Draw";
                return false;
            }
            else{
                return gamecondition.check();
            }
        }
    }
    //prevents Player to play on the same tile
    const prevent = (a) =>{
        return (gameboard[a] === 'x' || gameboard[a] === 'o' )? false : true;
    }
    return {check,prevent};
    } 
)();

// Factory Function for the player and computer control
function player(key){
    // Player movement
    const move = (a) =>{
        if(game.prevent(a)){
            if(game.check()){
                gameboard[a] = key;
                box[a].textContent = 'X';
                console.log(gameboard);
                game.check();
                computer();
            }}
        }
    //Computer movement
    const computer = () => {
        while(gameboard.includes('')){
        let move = Math.floor(Math.random() * 9);
        if(game.prevent(move)){
            if(game.check()){
                gameboard[move] = 'o';
                box[move].textContent = 'O';
                console.log(gameboard);
                game.check();
                break;
        }
        break;
        }
    }}
    return {move}
}
//Factory Function for reseting the entire game board
function board(){
    const reset = () =>{
        gameboard = ['','','','','','','','',''];
        for(let i=0; i<box.length;i++){
            box[i].textContent = ""
            msg.textContent = 'Player Turn'
        }
    }
    return{reset}
}