
function loadGame(){
   // var embeddedGame = document.createElement(embed);
   var gameList;

   loadJSON(function(response) {
    // Parse JSON string into object
    gameList = JSON.parse(response);
   });
   document.write(gameList);

    var gameAmt = gameList.games.length
    var rand = Math.floor((Math.random() * gameAmt) + 0);// generate between 1 and 100
    
    var picked = gameList.games[rand];

    //game.base = picked.base;
    //game.src = picked.src;
    //game.type = picked.type;
    //document.title = picked.name;

    notify(picked.name,picked.src,picked.base,picked.type);
}

function notify(name,src,base,type){
    window.alert("Base: " + base + "\n Src: " + src + "\n Type: " + type + "\n Title: " + name);
}

function loadJSON(callback) {   
    
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'js/gamelist.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
             callback(xobj.responseText);
         }
    };
    xobj.send(null);  
}