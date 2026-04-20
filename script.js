// Glitch effect on logo text
document.addEventListener('DOMContentLoaded', () => {
    const logoText = document.querySelector('.logo-text');
    const originalText = logoText.getAttribute('data-text');
    const chars = '!<>-_\\/[]{}—=+*^?#_';

    setInterval(() => {
        if (Math.random() > 0.95) {
            let glitchText = originalText.split('');
            const randomIndexes = [Math.floor(Math.random() * glitchText.length), Math.floor(Math.random() * glitchText.length)];
            
            randomIndexes.forEach(index => {
                glitchText[index] = chars[Math.floor(Math.random() * chars.length)];
            });
            
            logoText.innerText = glitchText.join('');
            
            setTimeout(() => {
                logoText.innerText = originalText;
            }, 100);
        }
    }, 2000);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate stats value randomly to look "alive"
    const statsValue = document.querySelector('.stat .value.active');
    if (statsValue) {
        const statuses = ['INVESTIGANDO', 'ANALISANDO DADOS', 'DESCRIPTOGRAFANDO', 'ACESSANDO LOGS'];
        setInterval(() => {
            if (Math.random() > 0.7) {
                const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
                statsValue.innerText = randomStatus;
            }
        }, 3000);
    }
});
