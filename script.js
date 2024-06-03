// All the possible win combinations in the game
const winningconditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// This represents the game array, where the player interacts
let gameboard = ['','','','','','','','',''];

const msg = document.querySelector('.msg');

const box = document.querySelectorAll('.box');
for(let i=0; i<box.length;i++){
    box[i].addEventListener('click',()=>{
            const user = player('x');
            if(game.prevent(i)){
                user.move(i);
            }
            else{
                msg.textContent = "Already Placed"
            }
        })
    }

// An IIFE Module that is used for checking if the game has been Won by the player or not
const game = (function(){
    // Checks if the game is won or not -- also checks if the game is draw
    const check = () =>{    
        if(gameboard.includes('')){
        for(let i of winningconditions){
            const [a,b,c] = i;
            if(gameboard[a] === 'x'& gameboard[b] === 'x' & gameboard[c] === 'x'){
                msg.textContent = "The Player Won";
                return false;
            }
            else if(gameboard[a] === 'o' & gameboard[b] === 'o' & gameboard[c] === 'o'){
                msg.textContent = "The Computer Won";
                return false;
            }
        }}
        else{
            for(let i of winningconditions){
                const [a,b,c] = i;
                if(gameboard[a] === 'x'& gameboard[b] === 'x' & gameboard[c] === 'x'){
                    msg.textContent = "The Player Won"
                    return false;
                }
                else if(gameboard[a] === 'o' & gameboard[b] === 'o' & gameboard[c] === 'o'){
                    msg.textContent = "The Computer Won";
                    return false;
                }
            }
            msg.textContent = "Game Draw";
            return false
        }
    return true;
    }
    //prevents Player to play on the same tile
    const prevent = (a) =>{
        if(gameboard[a] === 'x' || gameboard[a] === 'o' ){
            return false;
        }
        return true;
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