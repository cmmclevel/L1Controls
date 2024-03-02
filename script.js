document.addEventListener('DOMContentLoaded', function() {
    let currentCard = 0;
    const flashcards = document.querySelectorAll('.flashcard');
    const totalCards = flashcards.length;

    document.getElementById('next').addEventListener('click', function() {
        flashcards[currentCard].style.display = 'none';
        currentCard = (currentCard + 1) % totalCards;
        flashcards[currentCard].style.display = 'block';
    });

    document.getElementById('prev').addEventListener('click', function() {
        flashcards[currentCard].style.display = 'none';
        currentCard = (currentCard - 1 + totalCards) % totalCards;
        flashcards[currentCard].style.display = 'block';
    });

    flashcards.forEach(card => {
        card.addEventListener('click', function() {
            card.querySelector('.card-inner').classList.toggle('is-flipped');
        });
    });
});
