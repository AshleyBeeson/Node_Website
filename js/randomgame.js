
function loadGame(){
   // var embeddedGame = document.createElement(embed);
   var gameList = loadJSON();

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

function loadJSON() {   

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'js/gamelist.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            window.alert(xobj.responseText);
             return xobj.responseText;
        } else{
            return null;
        }
    };
}