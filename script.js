// Handle answer selection
const answerButtons = document.querySelectorAll('.answer-btn');
const feedbackElements = document.querySelectorAll('.feedback');
const resetButton = document.getElementById('reset-btn');

// Add event listener to each answer button
answerButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const isCorrect = e.target.dataset.correct === 'true';
        const feedbackElement = e.target.closest('.question').querySelector('.feedback');

        // Provide feedback based on answer
        if (isCorrect) {
            e.target.classList.add('correct');
            feedbackElement.textContent = 'Correct!';
            feedbackElement.classList.add('correct');
        } else {
            e.target.classList.add('incorrect');
            feedbackElement.textContent = 'Incorrect';
            feedbackElement.classList.add('incorrect');
        }

        // Disable all buttons for this question after answering
        const buttons = e.target.closest('.question').querySelectorAll('.answer-btn');
        buttons.forEach(button => button.disabled = true);
    });
});

// Reset the quiz when clicking the reset button
resetButton.addEventListener('click', () => {
    // Reset all buttons and feedback
    answerButtons.forEach(button => {
        button.disabled = false;
        button.classList.remove('correct', 'incorrect');
    });

    feedbackElements.forEach(feedback => {
        feedback.textContent = '';
        feedback.classList.remove('correct', 'incorrect');
    });
});
