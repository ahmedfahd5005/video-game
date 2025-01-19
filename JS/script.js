// Add to Cart Button Functionality
document.querySelectorAll('.game-item button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Game added to cart!');
    });
});
