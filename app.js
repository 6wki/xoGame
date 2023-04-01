const boxes = document.querySelectorAll(".box"),
  p = document.querySelector("p"),
  box = [];
let role = "x";
let win = false;
let end = 4;
let moves = 0;

boxes.forEach((bx) => {
  bx.addEventListener("click", () => {
    moves++;
    console.log(moves);
    if (moves == 9 && win == false) {
      p.innerHTML = `Equal`;
      counting();
    }
    if (win !== true) {
      if (bx.innerHTML === "" && role === "x") {
        bx.innerHTML = "X";
        role = "o";
      } else if (bx.innerHTML === "" && role === "o") {
        bx.innerHTML = "O";
        role = "x";
      }
      playing();
    }
  });
});

function counting() {
  setInterval(() => {
    end--;
    p.innerHTML = `Restarting ${end}`;
  }, 1000);
  setTimeout(() => {
    window.location.reload();
  }, 4000);
}

function playing() {
  for (i = 1; i < 10; i++) {
    box[i] = document.getElementById(i).innerHTML;
  }

  function winner(clr1, clr2, clr3, nm) {
    p.innerHTML = `The winner is ${nm}`;
    win = true;
    counting();
    document.getElementById(clr1).style.backgroundColor = "#03C988";
    document.getElementById(clr2).style.backgroundColor = "#03C988";
    document.getElementById(clr3).style.backgroundColor = "#03C988";
  }
  //   Checking
  if (box[1] == box[2] && box[2] == box[3] && box[1] !== "") {
    winner(1, 2, 3, box[1]);
  } else if (box[1] == box[4] && box[4] == box[7] && box[1] !== "") {
    winner(1, 4, 7, box[7]);
  } else if (box[1] == box[5] && box[5] == box[9] && box[1] !== "") {
    winner(1, 5, 9, box[1]);
  } else if (box[2] == box[5] && box[5] == box[8] && box[2] !== "") {
    winner(2, 5, 8, box[2]);
  } else if (box[4] == box[5] && box[5] == box[6] && box[4] !== "") {
    winner(4, 5, 6, box[4]);
  } else if (box[7] == box[8] && box[8] == box[9] && box[7] !== "") {
    winner(7, 8, 9, box[9]);
  } else if (box[7] == box[5] && box[5] == box[3] && box[7] !== "") {
    winner(7, 5, 3, box[3]);
  } else if (box[3] == box[6] && box[6] == box[9] && box[3] !== "") {
    winner(3, 6, 9, box[3]);
  }
}
