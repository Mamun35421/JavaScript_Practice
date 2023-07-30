document.addEventListener('DOMContentLoaded', function () {
    const originalArray = [12, 34, 45, 23, 6, 78, 54, 90];
    
    const filteredEvenNumbers = originalArray.filter(number => number % 2 === 0);

    // Display the original array on the webpage
    document.getElementById('originalArray').textContent = `[${originalArray.join(', ')}]`;

    // Display the filtered even numbers on the webpage
    document.getElementById('filteredNumbers').textContent = `[${filteredEvenNumbers.join(', ')}]`;
});
