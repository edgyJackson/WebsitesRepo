$(document).ready(function() 
{

    var speciesNameRegEx = /.+?(?=\s\()/;
    var speciesFormRegEx = new RegExp("/\(.+?\)/");

    var pokedex = ["Reggie's Pokemon Collection"];      // THE ARRAY TO STORE JSON ITEMS.
    var pokemonForms = ["Shadow", "Mega", "Plant", "Sandy", "Trash", "Rainy", "Snowy", "Sunny", "Mega X" ,
     "Mega Y", "Overcast", "Galarian", "Galarian Zen", "Standard", "Zen", "Alolan", "Attack", "Speed", "Defense",
    "East", "West", "Therian", "Incarnate", "Armoured", "Origin", "Altered", "Burn", "Chill", "Douse", "Shock", "Black", "White", "Fan", 
    "Frost", "Heat", "Mow", "Wash", "Ordinary", "Resolute", "Flying", "Libre", "Aria", "Pirouette"   ]


    $.getJSON("https://raw.githubusercontent.com/sindresorhus/pokemon/master/data/en.json", function(data) {

        
        $.each(data, function (index, value) {
            pokedex.push(value);
        });
            
    });

    console.log(pokedex);

    

    
    $("#great-tab").click(function() {
    
        $.getJSON("https://raw.githubusercontent.com/pvpoke/pvpoke/master/src/data/rankings/gobattleleague/overall/rankings-1500.json", function(data) {

            
            $("#greatDiv").empty();   
        
            console.log(data);
            
            //Using PokiAPI
            // const promises = [];
            // for (let i = 1; i <= 25; i++) {
            //   const url = `https://pokeapi.co/api/v2/pokemon/${i}/{name}`;
            //   promises.push(fetch(url).then(res => res.json()));
            // }
            // Promise.all(promises).then(results => {
            //     console.log(results.name);
            //   });
               
            for (i = 0;i < 25; i++) {      
                
                var res
                         
                if(data[i].speciesName.match(speciesNameRegEx)) { 
                     res = data[i].speciesName.match(speciesNameRegEx)[0];
                }
                else {
                     res = data[i].speciesName;
                }
                console.log(res);
                
                
            $("#greatDiv").append('<div > <img id="theImg" style="width:25%;height:auto;" src="Pokemon/pokemon_icon_'+ pokedex.indexOf(res) +'_00.png" /></div>' );
            // $("#greatDiv").append(pokedex.indexOf(data[i].speciesName.match(speciesNameRegEx)) + " " );
            }
             
        });

    });
    
    // $("#ultra-tab").click(function() {
    
    //     $.getJSON("https://raw.githubusercontent.com/pvpoke/pvpoke/master/src/data/rankings/gobattleleague/overall/rankings-2500.json", function(data) {

    //         // console.log(data);
    //         $("#ultraDiv").empty();   
        
    //     for (i = 0;i < 25; i++) {
                         
    //         $("#ultraDiv").append(data[i].speciesId + " ");
        
    //         }
    //     }); 


    // });

    // $("#master-tab").click(function() {
    
    //     $.getJSON("https://raw.githubusercontent.com/pvpoke/pvpoke/master/src/data/rankings/gobattleleague/overall/rankings-10000.json", function(data) {

    //         // console.log(data);
    //         $("#masterDiv").empty();   
        
    //     for (i = 0;i < 25; i++) {
                         
    //         $("#masterDiv").append(data[i].speciesId + " ");
        
    //         }
    //     }); 


    // });

    




});











 // .done(function(){
    //     alert("Completed");
    // })
    // .fail(function(e){
    //     console.log('error:');
    //     console.error(e)
    // })
    // .always(function(){
    //     alert("always runs");
    // })



function setup(){

}

function draw() {

}

function gotData(){

}