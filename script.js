// Audio functionality
let audio = null;
let isPlaying = false;

// Initialize audio when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Create audio element
    audio = new Audio('Sonic Green Hills.mp3');
    audio.loop = true;
    audio.volume = 0.3;

    // Handle audio file not found
    audio.addEventListener('error', () => {
        console.log('Audio file not found. Add "Sonic Green Hills.mp3" to enable music.');
        document.getElementById('playIcon').className = 'fas fa-volume-mute';
        document.querySelector('.audio-note p').innerHTML = '<i class="fas fa-exclamation-triangle"></i> Audio file not found. Please add "Sonic Green Hills.mp3" to the same folder as this portfolio.';
    });

    // Update play/pause button when audio ends (though it loops)
    audio.addEventListener('ended', () => {
        isPlaying = false;
        document.getElementById('playIcon').className = 'fas fa-play';
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-icon').className = 'fas fa-sun';
    }

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease both';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.education-item, .skill-card, .contact-item, .audio-player').forEach(el => {
        observer.observe(el);
    });
});

// Toggle audio play/pause
function toggleAudio() {
    const playIcon = document.getElementById('playIcon');
    
    if (!audio) {
        showNotification('Audio not available');
        return;
    }

    if (isPlaying) {
        audio.pause();
        playIcon.className = 'fas fa-play';
        isPlaying = false;
    } else {
        audio.play().then(() => {
            playIcon.className = 'fas fa-pause';
            isPlaying = true;
            showNotification('🎵 Playing Sonic Green Hills');
        }).catch(error => {
            console.log('Audio play failed:', error);
            showNotification('Audio file not found');
        });
    }
}

// Change volume
function changeVolume(value) {
    if (audio) {
        audio.volume = value / 100;
    }
    document.querySelector('.volume-label').textContent = value + '%';
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Copy to clipboard functionality
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copied to clipboard!');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Copied to clipboard!');
    });
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--secondary-color);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(52, 199, 89, 0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Open LinkedIn (placeholder)
function openLinkedIn() {
    showNotification('LinkedIn profile coming soon!');
}

// Theme toggle
function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    } else {
        icon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    }
}

// Load saved theme and initialize audio
document.addEventListener('DOMContentLoaded', () => {
    // Create audio element
    audio = new Audio('Sonic Green Hills.mp3');
    audio.loop = true;
    audio.volume = 0.3;

    // Handle audio file not found
    audio.addEventListener('error', () => {
        console.log('Audio file not found. Add "Sonic Green Hills.mp3" to enable music.');
        document.getElementById('playIcon').className = 'fas fa-volume-mute';
        document.querySelector('.audio-note p').innerHTML = '<i class="fas fa-exclamation-triangle"></i> Audio file not found. Please add "Sonic Green Hills.mp3" to the same folder as this portfolio.';
    });

    // Update play/pause button when audio ends (though it loops)
    audio.addEventListener('ended', () => {
        isPlaying = false;
        document.getElementById('playIcon').className = 'fas fa-play';
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-icon').className = 'fas fa-sun';
    }

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease both';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.education-item, .skill-card, .contact-item, .audio-player').forEach(el => {
        observer.observe(el);
    });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
