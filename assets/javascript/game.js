$(document).ready(function() {

    //step one-variables ran num, wins&&losses, our score,rando crystal values,
    var crystalOne = Math.floor((Math.random() * 13) + 1);
    var crystalTwo = Math.floor((Math.random() * 13) + 1);
    var crystalThree = Math.floor((Math.random() * 13) + 1);
    var crystalFour = Math.floor((Math.random() * 13) + 1);
    var targetValue = Math.floor((Math.random() * 121) + 19);
    var wins = 0;
    var losses = 0;
    var currentValue = 0;

    console.log(crystalOne);
    console.log(crystalTwo);
    console.log(crystalThree);
    console.log(crystalFour);
    console.log(targetValue);
    console.log(wins);
    console.log(losses);

    $("#targetVal").text(targetValue);

    if (currentValue === targetValue) {
        resetGame ();
        wins++;
        $('#wins').text(wins);
        console.log("You win!!");
    } else if (currentValue > targetValue) {
        resetGame ();
        losses++;
        $('#loss').text(losses);
        console.log("You Lose!!");
    }

    $('#crystalOne').click(function() {
        currentValue =currentValue + crystalOne;
        console.log(currentValue);
        $('#currentVal').text(currentValue);
        
    });

    $('#crystalTwo').click(function() {
        currentValue = currentValue + crystalTwo;
        console.log(currentValue);
        $('#currentVal').text(currentValue);
        
    });

    $('#crystalThree').click(function() {
        currentValue =currentValue + crystalThree;
        console.log(currentValue);
        $('#currentVal').text(currentValue);
        
    });

    $('#crystalFour').click(function() {
        currentValue =currentValue + crystalFour;
        console.log(currentValue);
        $('#currentVal').text(currentValue);
        
    });

    if (currentValue === targetValue) {
        resetGame ();
        wins++;
        $('#wins').text(wins);
        console.log("You win!!");
    } else if (currentValue > targetValue) {
        resetGame ();
        losses++;
        $('#loss').text(losses);
        console.log("You Lose!!");
    }

    //our number generator
    function resetGame () {
        targetValue = Math.floor((Math.random() * 121) + 19);
        crystalOne = Math.floor((Math.random() * 13) +1);
        crystalOne = Math.floor((Math.random() * 13) +1);
        crystalOne = Math.floor((Math.random() * 13) +1);
        crystalOne = Math.floor((Math.random() * 13) +1);
        currentValue = 0;
    };
    //restart once number is <= 

});