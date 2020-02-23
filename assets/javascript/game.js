$(document).ready(function () {
    
    var targetValue = Math.floor((Math.random() * 121) + 19);
    var currentValue = 0;
    var crystalOne = Math.floor((Math.random() * 13) + 1);
    var crystalTwo = Math.floor((Math.random() * 13) + 1);
    var crystalThree = Math.floor((Math.random() * 13) + 1);
    var crystalFour = Math.floor((Math.random() * 13) + 1);
    
    var wins = 1;
    var losses = 1;
    



    console.log("Crystal1: " + crystalOne);
    console.log("Crystal2: " + crystalTwo);
    console.log("Crystal3: " + crystalThree);
    console.log("Crystal4: " + crystalFour);
    console.log("Target Value: " + targetValue);
    console.log("Current Value: " +currentValue);
    console.log("Wins: " + wins);
    console.log("Losses:" +losses);

    $("#targetVal").text(targetValue);
    $("#currentVal").text(currentValue);

    

    function resetGame() {
        crystalOne = Math.floor((Math.random() * 13) + 1);
        crystalTwo = Math.floor((Math.random() * 13) + 1);
        crystalThree = Math.floor((Math.random() * 13) + 1);
        crystalFour = Math.floor((Math.random() * 13) + 1);
        targetValue = Math.floor((Math.random() * 121) + 19);
        }
    function gameFunction() {
        if (currentValue === targetValue) {
            resetGame();
            alert("You Win!");
            $('#wins').text(wins++);
            $("#targetVal").text(targetValue);
            currentValue=0;
            $("#currentVal").text(currentValue);
            console.log("You Win!!");
            console.log("Crystal1: " + crystalOne);
            console.log("Crystal2: " + crystalTwo);
            console.log("Crystal3: " + crystalThree);
            console.log("Crystal4: " + crystalFour);
            console.log("Target Value: " + targetValue);
            console.log("Current Value: " +currentValue);
        } else if (currentValue > targetValue) {
            resetGame();
            alert("you lose!");
            $("#loss").text(losses++);
            $("#targetVal").text(targetValue);
            currentValue=0;
            $("#currentVal").text(currentValue);
            console.log("You Lose!!");
            console.log("Crystal1: " + crystalOne);
            console.log("Crystal2: " + crystalTwo);
            console.log("Crystal3: " + crystalThree);
            console.log("Crystal4: " + crystalFour);
            console.log("Target Value: " + targetValue);
            console.log("Current Value: " +currentValue);
        } 
    }

    $("#crystalOne").click(function () {
        currentValue = currentValue + crystalOne;
        console.log("Current Value: " +currentValue);
        $("#currentVal").text(currentValue);
        gameFunction();
    });

    $("#crystalTwo").click(function () {
        currentValue = currentValue + crystalTwo;
        console.log("Current Value: " +currentValue);
        $("#currentVal").text(currentValue);
        gameFunction()
    });

    $("#crystalThree").click(function () {
        currentValue = currentValue + crystalThree;
        console.log("Current Value: " +currentValue);
        $("#currentVal").text(currentValue);
        gameFunction()
    });

    $("#crystalFour").click(function () {
        currentValue = currentValue + crystalFour;
        console.log("Current Value: " +currentValue);
        $("#currentVal").text(currentValue);
        gameFunction()
    });

});
