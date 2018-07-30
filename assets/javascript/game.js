var crystalValues = {};
crystalValues["image1"] = Math.floor(Math.random()*12+1);
crystalValues["image2"] = Math.floor(Math.random()*12+1);
crystalValues["image3"] = Math.floor(Math.random()*12+1);
crystalValues["image4"] = Math.floor(Math.random()*12+1);

var wins = 0;
var losses = 0;
var totalScore =0;


function getCrystalHandler(crystalKey) {
   return function() {
    userTotal = userTotal + crystalValues[crystalKey];
    console.log("New userTotal " + userTotal);
    $("#score").text(userTotal);

    if (userTotal === random) {
        winner++;

    }

    else if (userTotal > random) {
        losses --;
    } 
}
}

$("#image1").on("click", getCrystalHandler(1));
$("#image2").on("click", getCrystalHandler(2));
$("#image3").on("click", getCrystalHandler(3));
$("#image4").on("click", getCrystalHandler(4));

   