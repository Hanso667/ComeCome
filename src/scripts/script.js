let piece = document.createElement("div");
piece.id = ("piece");
let s11 = document.getElementById("1-1");
s11.appendChild(piece)
let x = 1, y = 1;
let ex, ey;
let next;
let enext;
let score = 0;
let scoreFinal;

let enemySpawn = setInterval(() => {
    ex = Math.floor(Math.random() * (5-1)+1);
    ey = Math.floor(Math.random() * (5-1)+1);
    enext = `${ex}-${ey}`
    if (document.getElementById(enext).children.length == 0) {
        let enemy = document.createElement("div");
        enemy.className = "enemy";
        document.getElementById(enext).appendChild(enemy)
    }
}, Math.floor(Math.random() * (2000-1000)+1000));




document.addEventListener("keydown", (e) => {
    let moved = false;

    if (e.key == "ArrowLeft" && x - 1 >= 1) {
        x -= 1;
        moved = true;
    } 
    else if (e.key == "ArrowRight" && x + 1 <= 4) {
        x += 1;
        moved = true;
    } 
    else if (e.key == "ArrowDown" && y + 1 <= 4) {
        y += 1;
        moved = true;
    } 
    else if (e.key == "ArrowUp" && y - 1 >= 1) {
        y -= 1;
        moved = true;
    }

    if (moved) {
        next = `${y}-${x}`;
        let element = document.getElementById(next);
        if (element.firstChild) {
            element.removeChild(element.firstChild);
            score += 1;
            document.getElementById("score").textContent = `Score: ${score}`;
        }
        element.appendChild(piece);
    }
});
