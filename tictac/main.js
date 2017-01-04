//  Setting up player objects
function Player(turn, shape, isHuman) {
    this.turn = turn;
    this.shape = shape;
    this.isHuman = isHuman;
}

var playerOne = new Player();
playerOne.turn = false;
playerOne.shape = "";
playerOne.isHuman = true;


var playerTwo = new Player();
playerTwo.turn = false;
playerTwo.shape = "";
playerTwo.isHuman = false;

var gameOn = true;

var col = document.getElementsByClassName("columns");

//Game Function
var onePlayer = function() {
    playerTwo.isHuman = false;
    if (playerOne.turn) {
        playerMove(playerOne);
    } else {
        cpu();
    }
};

//setting up player VS player mode
var twoPlayer = function() {
    playerTwo.isHuman = true;
    if (playerOne.turn) {
        playerMove(playerOne);
    } else {
        playerMove(playerTwo);
    }
};

//player one function
var playerMove = function(player) {
    Array.prototype.map.call(col, function(el, i) {
        return col[i].onclick = function() {
            if (this.innerText === "") {
                if ((player.turn) && (player.isHuman)) {
                    this.innerText = player.shape;
                    checkWin(player.shape);
                    if (player.shape === playerOne.shape) {
                        playerOne.turn = false;
                        playerTwo.turn = true;
                    } else {
                        playerTwo.turn = false;
                        playerOne.turn = true;
                    }
                }
            }
            if (!playerTwo.isHuman) {
                onePlayer();
            } else {
                twoPlayer();
            }
        };

    });


};

//player vs CPU easy mode
var CPU = function() {
    var num = 0;
    if ((playerTwo.turn) && (gameOn)) {
        var move = function() {
            num = Math.floor(Math.random() * 8);
            if (col[num].innerText !== "") {
                move();
            }
        };
        move();
        col[num].innerText = playerTwo.shape;
        checkWin(playerTwo.shape);
        playerTwo.turn = false;
        playerOne.turn = true;
    }
};

//player vs cpu hard mode
var cpu = function() {
    var isolatedArray = [];
    var combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    var idx1 = [];
    var idx2 = [];
    for (var i in col) {
        if (col[i].innerText === playerOne.shape) {
            idx1.push(Number(i));
        }
        if (col[i].innerText === playerTwo.shape) {
            idx2.push(Number(i));
        }
    }

    if ((playerTwo.turn) && (gameOn)) {
        if (idx1.length < 2) {
            if (col[4].innerText === "") {
                col[4].innerText = playerTwo.shape;
            } else {
                move();
            }
            switchTurns();
        } else {
            cpuMove();
            switchTurns();
        }

    }

    function cpuMove() {
        var num;
        var check = combos.map(function(elem, ind) {
            return idx1.filter(function(el) {
                return combos[ind].indexOf(el) > -1;
            }).length > 1;
        });


        for (var i = 0; i < check.length; i++) {
            if (check[i]) {
                console.log(combos[i].length);
                //col[stuff].indexOf(playerTwo.shape) !== combos[i]
                //console.log(combos[i].indexOf(playerTwo.shape));
                // if (combos[i].indexOf(playerTwo.shape) > -1) {
                //     console.log(combos[i]);
                // }
                isolatedArray.push(combos[i]);
            }
        }



        console.log("iso: " + isolatedArray);
        checkArray(isolatedArray[0]);
    }

    function checkArray(arr) {
        var pick = arr.filter(function(index) {
            if (col[index].innerText === "") {
                return index;
            }
        });
        // var pick = arr.filter(function(el, i) {
        //     if (col[arr[i]].innerText === "") {
        //         console.log(arr[i]);
        //         num = arr[i];
        //         return num;
        //     }
        // });

        console.log("idx1: " + idx1);
        console.log(pick);
        col[pick].innerText = playerTwo.shape;
        // if (col[pick].innerText !== "") {
        //     move();
        // } else {
        //     col[pick].innerText = playerTwo.shape;
        // }



    }

    function move() {
        var num;
        num = Math.floor(Math.random() * 8);
        if (col[num].innerText !== "") {
            move();
        } else {
            col[num].innerText = playerTwo.shape;
        }

    }

};




function switchTurns() {
    checkWin(playerTwo.shape);
    playerTwo.turn = false;
    playerOne.turn = true;
}



function checkWin(shape) {

    var combos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    var boardArr = [];
    for (var i = 0; i < col.length; i++) {
        boardArr.push(col[i].innerText);
        var mapped = boardArr.map(function(a, b) {
            return a.concat(b);
        });
    }
    //pushed index of X and O into serpreate arrays
    var indices = [];
    var idx = boardArr.indexOf(shape);
    while (idx != -1) {
        indices.push(idx);
        idx = boardArr.indexOf(shape, idx + 1);
    }
    if (indices.length === 5) {
        win(indices.length);
    }

    //Check combos

    var check = combos.map(function(elem, ind) {
        return indices.filter(function(el) {
            return combos[ind].indexOf(el) > -1;
        }).length == combos[ind].length;
    });


    //Find the winner
    check.map(function(el, i) {
        if (el === true) {
            win(shape, combos[i]);
        }
    });

}


//Declare Winner
var win = function(shape, combos) {
    //stop game
    gameOn = false;
    playerOne.turn = false;
    playerTwo.turn = false;
    //announce winner

    if (shape === 5) {
        document.querySelector(".win").innerHTML = "<h1> Tie </h1>";
    } else {
        document.querySelector(".win").innerHTML = "<h1>" + shape + " Wins!</h1>";
        //highlight winning shape
        col[combos[0]].style["background-color"] = "grey";
        col[combos[1]].style["background-color"] = "grey";
        col[combos[2]].style["background-color"] = "grey";
    }
    scoreBoard(shape);
    message();

};

var scoreBoard = function(shape) {
    var xScore = Number(document.getElementById("xScore").innerText);
    var oScore = Number(document.getElementById("oScore").innerText);
    var tie = Number(document.getElementById("tie").innerText);
    if (shape === "X") {
        xScore++;
    } else if (shape === "O") {
        oScore++;
    } else {
        tie++;
    }
    document.getElementById("xScore").innerText = xScore;
    document.getElementById("oScore").innerText = oScore;
    document.getElementById("tie").innerText = tie;
};

var message = function(shape) {
    document.querySelector(".message").style.visibility = "visible";
    document.querySelector(".success").onclick = reset;
};

//reset game
var reset = function() {
    for (var i = 0; i < col.length; i++) {
        col[i].innerText = "";
        col[i].style["background-color"] = "seagreen";
    }
    gameOn = true;
    playerOne.turn = true;
    document.querySelector(".message").style.visibility = "hidden";
};
//PICK X OR O
function getValue() {
    playerOne.shape = this.value;
    if (playerOne.shape == "X") {
        playerOne.turn = true;
        playerTwo.shape = "O";
    } else {
        playerTwo.shape = "X";
        playerTwo.turn = true;
    }
}

window.onload = function() {
    document.getElementById("playerTwo").onclick = twoPlayer;
    document.getElementById("playerOne").onclick = onePlayer;
    document.getElementById("clear").onclick = reset;
    document.getElementById("X").onclick = getValue;
    document.getElementById("O").onclick = getValue;
};