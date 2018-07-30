$(document).ready(function() {
    //global variables
        crystals = ['assets/images/redcry.jpg','assets/images/bluecry.jpg','assets/images/greencry.jpg','assets/images/goldcry.jpg'];
    
        var counter = 0;
        var wins = 0;
        var losses = 0;
        //determining win and loss counter
        $('#win').text(wins);
        $('#loss').text(losses);
        
        newCrystals();
        newGame();
        function newCrystals () {
            var numbers = []
                while(numbers.length < 4){
                    //Math.ceil will round the number in to an integer
                    //here we will going to determine the random number 
                    //this number is the wining number if the user gusse correctly
                  var randomNumber = Math.ceil(Math.random()*15)
                  var found = false;
                  for (var i=0; i< numbers.length; i++){
                    if (numbers[i] == randomNumber){
                        found = true; break
                    }
                  }
                  if(!found)numbers[numbers.length]=randomNumber;
                }
            //console.log(newCrystals);		
            for (i = 0; i < numbers.length; i++) {
                var imageCrystal = $('<img>');
                imageCrystal.attr('data-num', numbers[i]);
                imageCrystal.attr('src', crystals[i]);
                imageCrystal.attr('alt', 'crystals');
                imageCrystal.addClass('crystalImage')
                $('#crystals').append(imageCrystal);
            }
        }
    
        function newGame() {
    
            counter = 0;
            $('#yourScore').text(counter);
    
            function randomIntFromInterval(min,max){
                   return Math.floor(Math.random()*(max-min)+1);
                }
    
            var numberToGuess = randomIntFromInterval(19,120);
    
            $('.value').text(numberToGuess);
    
    
            $('.crystalImage').on('click', function(){
                counter = counter + parseInt($(this).data('num'));
               
                $('#yourScore').text(counter);
    //determine user's win 
                if (counter == numberToGuess){
                  $('#status').text('You won!!!!');
                  wins ++;
                  $('#win').text(wins);
                  console.log(wins)
                  $('#crystals').empty();
                  newCrystals();
                  newGame();
        //determine user losses	        
                } else if ( counter > numberToGuess){
                    $('#status').text('You lost!');
                    losses ++;
                    $('#loss').text(losses);
                    console.log(losses)
                    $('#crystals').empty();
                    newCrystals();
                    newGame();
                }
            });
        }
    
    });







































// //Global variables
// var wins = 0;
// var losses = 0;

// //Players current score
// var userScore = 0;

// //selecting a random number
// var total = Math.floor(Math.random() * 100) + 1;
// $(".total").empty();
// $(".total").append(total);

// //assigning a random number to each crystal
// var image1 = Math.floor(Math.random() * 10) + 1;
// var image2 = Math.floor(Math.random() * 10) + 1;
// var image3 = Math.floor(Math.random() * 10) + 1;
// var image4 = Math.floor(Math.random() * 10) + 1;

// // update the userscore in html

// var updateUserScore = function() {
//     $(".addition").empty();
//     $(".addition").append(addition);
//     $("#wins").empty();
//     $("#wins").append(wins);
//     $("#losses").empty();
//     $("#losses").append(losses);
// }

// //restarting the function

// var restart = function() {

//     addition = 0;
//     total = Math.floor(Math.random()* 100) + 1;
//     $(".total").empty();
//     $(".total").append(total);
//     image1 = Math.floor(Math.random()* 10) + 1;
//     image2 = Math.floor(Math.random()* 10) + 1;
//     image3 = Math.floor(Math.random()* 10) + 1;
//     image4 = Math.floor(Math.random()* 10) + 1;
//     updateAddition();
// }

// //determine wins and losses
// var logic = funciton() {
//     if(addition == total) {
//         wins = wins + 1;
//         alert("YOU WIN!");
//         restart();
//     }else if(addition > total){
//         losses = losses + 1;
//         alert("YOU LOST!");
//         restart();
//     } else {
//         updateAddition();
//     }
// }
// $(".additon").append(total);
// $(".additon").append(addition);


// //the click function

// $(document).ready(function(){
//     $("#image1").click(function(){
//         addition = addition + red;
//         logic();
//     })
//     $(document).ready(function(){
//         $("#image2").click(function(){
//             addition = addition + red;
//             logic();
//         })
//         $(document).ready(function(){
//             $("#image3").click(function(){
//                 addition = addition + red;
//                 logic();
//             })
//             $(document).ready(function(){
//                 $("#image4").click(function(){
//                     addition = addition + red;
//                     logic();
//                 })
// });

















// var crystalValues = {};
// crystalValues["image1"] = Math.floor(Math.random()*12+1);
// crystalValues["image2"] = Math.floor(Math.random()*12+1);
// crystalValues["image3"] = Math.floor(Math.random()*12+1);
// crystalValues["image4"] = Math.floor(Math.random()*12+1);

// var wins = 0;
// var losses = 0;
// var totalScore =0;


// function getCrystalHandler(crystalKey) {
//    return function() {
//     userTotal = userTotal + crystalValues[crystalKey];
//     console.log("New userTotal " + userTotal);
//     $("#score").text(userTotal);

//     if (userTotal === random) {
//         winner++;

//     }

//     else if (userTotal > random) {
//         losses --;
//     } 
// }
// }

// $("#image1").on("click", getCrystalHandler(1));
// $("#image2").on("click", getCrystalHandler(2));
// $("#image3").on("click", getCrystalHandler(3));
// $("#image4").on("click", getCrystalHandler(4));

   