function mapDataForAiVision(){
    let mapInfos
    return {
        players: players.map(({id, x, y})  => ({id, x, y})),
        myPlayer: myPlayer,
        walls: walls.map(({height, width, x, y, active, state, ignoreDestroy}) => ({height, width, x, y, active, state, ignoreDestroy})),
        bombs: bombs.map(({player_id, x,y})=>({player_id, x, y})),
        /*flipFlopBomb: flipFlopBomb,
        scene: scene,
        tileset: tileset,*/
        map: {heightInPixels : map.heightInPixels, widthInPixels : map.widthInPixels, height : map.height, width : map.width},
    };
}
var gameOn = true;

async function aiLogicStart (){
    await sleep(3000);
    aiLogic();
}

async function aiLogic (){
  
    while(gameOn){
        
        gameLoop(mapDataForAiVision()).then(function(actionText){
            let actions = actionText.toString().toLowerCase().split(" ");
            console.log(actions);
            switch (actions[0]) {
                case "plant":
                    plantBomb();
                    break;
                case "move":
                    movePlayer(actions[1])
                    break;
            }
        });
        
        await sleep(500);
    }
}

async function movePlayer (direction){
    $('#chevron-'+direction).trigger("mousedown");
    await sleep(100);
    $('#chevron-'+direction).trigger("mouseup");
}

async function plantBomb (){
    $('#bomb-key').trigger("mousedown");
    await sleep(100);
    $('#bomb-key').trigger("mouseup");
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function triggerMouseEvent (node, eventType) {
    var clickEvent = document.createEvent ('MouseEvents');
    clickEvent.initEvent (eventType, true, true);
    node.dispatchEvent (clickEvent);
}
