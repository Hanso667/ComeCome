// Criando e posicionando a peça inicial
const piece = document.createElement("div");
piece.id = "piece";
document.getElementById("1-1").appendChild(piece);

let x = 1, y = 1;
let score = 0;

// Função para atualizar o placar
const updateScore = () => {
    document.getElementById("score").textContent = `Score: ${score}`;
};

// Função para gerar inimigos aleatoriamente
const spawnEnemy = () => {
    const ex = Math.floor(Math.random() * 4) + 1;
    const ey = Math.floor(Math.random() * 4) + 1;
    const enemyPosition = `${ex}-${ey}`;
    
    const cell = document.getElementById(enemyPosition);
    if (cell.children.length === 0) {
        const enemy = document.createElement("div");
        enemy.className = "enemy";
        cell.appendChild(enemy);
    }
};

// Spawning de inimigos em intervalos aleatórios
setInterval(spawnEnemy, Math.floor(Math.random() * 1000) + 1000);

// Função para mover a peça
const movePiece = (newX, newY) => {
    const nextPosition = `${newY}-${newX}`;
    const nextCell = document.getElementById(nextPosition);

    // Se houver um inimigo, remove e adiciona ponto
    if (nextCell.firstChild) {
        nextCell.removeChild(nextCell.firstChild);
        score++;
        updateScore();
    }

    // Move a peça para a nova posição
    nextCell.appendChild(piece);
    x = newX;
    y = newY;
};

// Evento de teclado para movimentação
document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowLeft":
            if (x > 1) movePiece(x - 1, y);
            break;
        case "ArrowRight":
            if (x < 4) movePiece(x + 1, y);
            break;
        case "ArrowDown":
            if (y < 4) movePiece(x, y + 1);
            break;
        case "ArrowUp":
            if (y > 1) movePiece(x, y - 1);
            break;
    }
});