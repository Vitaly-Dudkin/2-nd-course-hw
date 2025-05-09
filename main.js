

document.getElementById('scrollButton').addEventListener('click', function() {
    const gamesSection = document.getElementById('gamesSection');
    gamesSection.scrollIntoView({ behavior: 'smooth' });
});