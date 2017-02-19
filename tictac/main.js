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


//player vs CPU
function cpu() {
    function score(game, depth) {
        if (game.win === playerOne) {
            return 10 - depth;
        } else if (game.win === playerTwo) {
            return depth - 10;
        } else {
            return 0
        }
    }

    function minimax(game, depth) {
        if (!gameOn) {
            return score(game)
        }
        depth += 1;
        score = []
        moves = []
    }

    def minimax(game, depth)
    return score(game) if game.over ?
        depth += 1
    scores = []# an array of scores
    moves = []# an array of moves

    # Populate the scores array, recursing as needed
    game.get_available_moves.each do |move |
            possible_game = game.get_new_state(move)
        scores.push minimax(possible_game, depth)
    moves.push move
    end

    # Do the min or the max calculation
    if game.active_turn == @player# This is the max calculation
    max_score_index = scores.each_with_index.max[1]
    @choice = moves[max_score_index]
    return scores[max_score_index]
    else# This is the min calculation
    min_score_index = scores.each_with_index.min[1]
    @choice = moves[min_score_index]
    return scores[min_score_index]
    end
    end
}

function move() {
    var num = Math.floor(Math.random() * 8);
    if (col[num].innerText !== "") {
        move();
    } else {
        col[num].innerText = playerTwo.shape;
    }
}

function switchTurns() {
    checkWin(playerTwo.shape);
    playerTwo.turn = false;
    playerOne.turn = true;
}

//##################################################################################################

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
        if (el) {
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