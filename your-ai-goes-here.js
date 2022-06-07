const SERVER_URL = "http://51.210.149.106:8080";

/*
* 
* This project has been made by a total noob so don't judge if you find any bug :) 
* Made with love by LA HORDE for BETCLIC
*
*
* Game Loop function is called every 500ms 
* 
* What you can find in the data object : 
*  - players : positions and id of players on the board
*  - myPlayer : your player id
*  - walls : positions and state of walls on the board
*  - bombs : positions of bombs on the board
*
* You can control your player using those two methods : 
*  - return "MOVE XXX" => possible values for XXX are directions : "UP", "DOWN", "LEFT", "RIGHT"
*  - return "PLANT BOMB" => no parameters nor security, let's blow it baby ! (you better hide soon though)
*
* 
* Start the game by opening Chrome WITHOUT web security
*
* - On Windows : 
*   run cmd : chrome.exe --allow-file-access-from-files
*
* - On Mac : (from terminal)
*   open /Applications/Google\ Chrome.app/ --args --allow-file-access-from-files
*
* - On Ubuntu : (from terminal)
*   chromium-browser --disable-web-security
*
*
*/


/*
*  SAMPLE DUMMY BOT THAT GOES RANDOMLY AROUND
*/

var directions = ["up", "down", "left", "right"];


async function gameLoop(data){
    
    console.log(data);
        
    return "MOVE "+directions[Math.floor(Math.random()*directions.length)];
}