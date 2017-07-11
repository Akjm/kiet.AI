document.getElementById("input").addEventListener("keydown", keyDownTextField, false);

var kietArray = [
    "Mufgo",
    "Jonny Mufgo",
    "Jonny Gozaimasu",
    "Pokemon Go",
    "Gemmy Wemmy",
    "Ollie",
    "Haichi",
    "Kiet",
    "Dumbass",
    "Thing",
    "Lunch Order"
];

var kietAdj = [
    "Public",
    "Hand",
    "Faceless",
    "Bojack",
    "Asian",
    "Vietnamese",
    "Gay"
];

var output = []

function keyDownTextField (e) {
    
}

function generate() {
    var current = document.getElementById("input").value;
    current = current.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    
    var cur_array = current.split(" ");
    
    console.log(current);
    console.log(cur_array);
    
    var output=[];
    var outputString = "";
    document.getElementById("output").innerHTML = "";
    
    
    for (i = 0; i < cur_array.length; i++) {
        
        
        
        /*if (adjectiveArray.indexOf(cur_array[i]) > -1) {
            
            console.log("Adjective:" + cur_array[i])
            
            var ran2 = kietAdj[Math.floor((Math.random() * kietAdj.length) + 1) - 1];
            
            output.push(ran2);
            console.log(output)
            
        }*/
        
        if (nounArray.indexOf(cur_array[i]) > -1) {
            
            var ran = kietArray[Math.floor((Math.random() * kietArray.length) + 1) - 1];
            
            output.push(ran);
            console.log(output)
            
        }
        
        else {
            output.push(cur_array[i]);
            console.log(output)
            
        }
        
    }
    
    var outputString = output.join(' ');
    document.getElementById("output").innerHTML = outputString;
    
}