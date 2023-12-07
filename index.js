let player1Score = 0;
        let player2Score = 0;

        function rollDice() {
            var randomNumber1 = Math.floor(Math.random() * 6) + 1;
            var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
            document.querySelector(".img1").setAttribute("src", randomImageSource1);

            var randomNumber2 = Math.floor(Math.random() * 6) + 1;
            var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
            document.querySelector(".img2").setAttribute("src", randomImageSource2);

            if (randomNumber1 > randomNumber2) {
                document.querySelector(".winner").innerHTML = "🚩 Player 1 Wins!";
                player1Score++;
            } else if (randomNumber2 > randomNumber1) {
                document.querySelector(".winner").innerHTML = "Player 2 Wins! 🚩";
                player2Score++;
            } else {
                document.querySelector(".winner").innerHTML = "Draw!";
            }

          
            document.getElementById("player1Score").textContent = player1Score;
            document.getElementById("player2Score").textContent = player2Score;
        }

        
        document.getElementById("rollButton").addEventListener("click", rollDice);

    
        rollDice();
