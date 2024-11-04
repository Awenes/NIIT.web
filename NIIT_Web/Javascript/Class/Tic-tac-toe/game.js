//ca

const winningStates = [
    [1, 2, 3],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [7, 8, 9],
    [4, 5, 6],
    [3, 5, 7],
    [1, 5, 9]
]

const player1States = [];
const player2States = [];

var turn = 1;

function addValue(cell, index) {
    if (turn === 1) {
        //Player one is playing  
        var text = document.createElement('h1');
        text.className = "ca";
        text.innerText = "X";
        if (cell.innerHTML === "") {
            cell.appendChild(text);
        }
        player1States.push(index);
        var won = compareWinningState(player1States);
        if (won === true) {
            alert("Player one won the game");
            window.location.reload();
        }
        turn = 2;
    } else {
        //PLayer two is playing
        var text = document.createElement('h1');
        text.className = "ca";
        text.innerText = "0";
        if (cell.innerHTML === "") {
            cell.appendChild(text);
        }
        player2States.push(index);
        var won = compareWinningState(player2States);
        if (won === true) {
            alert("Player two won the game");
            window.location.reload();
        }
        turn = 1;
    }
}
function checkState(winningState, playerState) {
    var first = winningState[0];
    var second = winningState[1];
    var third = winningState[2];

    return (playerState.includes(first)
        & playerState.includes(second)
        & playerState.includes(third));
}

function compareWinningState(playerState) {
    var won = false;
    for (var i = 0; i < winningStates.length; i++) {
        const winningState = winningStates[i];
        var stateWon = checkState(winningState, playerState);
        if (stateWon === 1) {
            won = true;
            break;
        }
    }
    return won;
}

function checkForWinner(index, event) {
    var cell = event.target;
    addValue(cell, index);
}