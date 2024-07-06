const images = [
    'images/wild_robot.jpg',
    'images/piece_by_piece.jpg',
    'images/moana_2.jpg',
    'images/lotr_rohirrim.jpg',
    'images/mufasa.jpg',
    'images/inside_out_2.jpg',
    'images/despicable_me_4.jpg',
    'images/kung_fu_panda_4.jpg',
    'images/garfield.jpg',
    'images/transformers_one.jpg'
];

const difficulties = {
    easy: { base: 12, increment: 6 },
    medium: { base: 24, increment: 9 },
    hard: { base: 42, increment: 12 }
};

let currentLevel = 0;
const levels = images.length;

function startGame() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    currentLevel = 0;
    startLevel(currentLevel);
}

function startLevel(index) {
    const difficulty = document.getElementById('difficulty').value;
    const pieceCount = difficulties[difficulty].base + index * difficulties[difficulty].increment;
    createPuzzle(pieceCount, images[index]);
}

function resetLevel() {
    startLevel(currentLevel);
}

function goToNextLevel() {
    if (currentLevel + 1 < levels) {
        currentLevel++;
        startLevel(currentLevel);
    }
}

function goToPreviousLevel() {
    if (currentLevel - 1 >= 0) {
        currentLevel--;
        startLevel(currentLevel);
    }
}

function createPuzzle(pieceCount, imageSrc) {
    // Logic for creating the puzzle with a specified number of pieces (pieceCount)
    // and the specified image (imageSrc) goes here.
}

window.addEventListener('load', () => {
    document.getElementById('start-screen').style.display = 'block';
});
