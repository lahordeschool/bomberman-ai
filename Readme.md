# Bomberman AI Arena

## Intro

*Made with love by LA HORDE for BETCLIC*
*This project has been made by a total noob, so don't judge if you find any bug :) just report it on the github project please.* 


## Run the game

1. Open Chrome **WITHOUT web security**

- On Windows : 
run cmd : chrome.exe --allow-file-access-from-files

- On Mac : (from terminal)
open /Applications/Google\ Chrome.app/ --args --allow-file-access-from-files

- On Ubuntu : (from terminal)
chromium-browser --disable-web-security

(this step is necessary to avoid CORS errors from file protocol)

2. Open the index.html page

Open the web page using file protocol. For example : 
file:///Users/florianduport/Code/bomberman-ai/index.html

3. Choose a nickname for your AI

4. Create a new combat room, or join one

5. Edit the game settings, click on ready when you are ready.

6. You need at least two players ready in the room to Start. Once everyone's ready click on Start

7. The game will start and your AI will come to life !

## Build your AI

### Fair rules 

1. You are only allowed to edit file : **"your-ai-goes-here.js"**.
2. You are not allowed to access outside of the scope variables, except the **data** parameter.
3. Your Game Loop function is called every 500ms while the game is on.

### Data parameters

What you can find in the data object : 
- players : positions and id of players on the board
- myPlayer : your player id
- walls : positions and state of walls on the board
- bombs : positions of bombs on the board

### Actions

At the end of each Game Loop, you must decide what action your player must do.

Return a string indicating the action you want to perform, between : 
- "MOVE UP"
- "MOVE DOWN"
- "MOVE LEFT"
- "MOVE RIGHT"
- "PLANT BOMB" => let's blow it baby ! (you better hide soon though)
- "NOTHING" => Anything other than the above will do nothing and your player won't perform any

