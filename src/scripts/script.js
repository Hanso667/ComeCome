let piece = document.createElement("div");
piece.id = ("piece");
let s11 = document.getElementById("1-1");
s11.appendChild(piece)
let x = 1, y = 1;
let ex, ey;
let next;
let enext;

let enemySpawn = setInterval(() => {
    ex = Math.floor(Math.random() * (5-1)+1);
    ey = Math.floor(Math.random() * (5-1)+1);
    enext = `${ex}-${ey}`
    if (document.getElementById(enext).children.length == 0) {
        let enemy = document.createElement("div");
        enemy.className = "enemy";
        document.getElementById(enext).appendChild(enemy)
    }
}, Math.floor(Math.random() * 2000));




document.addEventListener("keydown", (e) => {
    if (e.key == "ArrowLeft") {
        if (x - 1 >= 1) {
            x -= 1;
        }
        next = `${y}-${x}`;
        let element = document.getElementById(next);
        if (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        document.getElementById(next).appendChild(piece);
    }
    else if (e.key == "ArrowRight") {
        if (x + 1 <= 4) {
            x += 1;
        }

        next = `${y}-${x}`;
        let element = document.getElementById(next);
        if (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        document.getElementById(next).appendChild(piece);
    }
    else if (e.key == "ArrowDown") {
        if (y + 1 <= 4) {
            y += 1;
        }
        next = `${y}-${x}`;
        let element = document.getElementById(next);
        if (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        document.getElementById(next).appendChild(piece);
    }
    else if (e.key == "ArrowUp") {
        if (y - 1 >= 1) {
            y -= 1;
        }
        next = `${y}-${x}`;
        let element = document.getElementById(next);
        if (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        document.getElementById(next).appendChild(piece);
    }
})