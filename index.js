document.addEventListener('DOMContentLoaded', function () {
    const sidenav = document.querySelector('.side-navbar');
    const menuBtn = document.querySelector('.navbar-menu-toggle');
    const closeBtn = document.querySelector('.side-navbar-exit');

    if (menuBtn && sidenav) {
        menuBtn.addEventListener('click', () => {
            sidenav.classList.toggle('open');
        });
    }

    if (closeBtn && sidenav) {
        closeBtn.addEventListener('click', () => {
            sidenav.classList.remove('open');
        });
    }

    const togglePassword = document.getElementById('togglePassword');
    const pwd = document.getElementById('password');
    if (togglePassword && pwd) {
        togglePassword.addEventListener('click', function() {
            if (pwd.type === 'password') {
                pwd.type = 'text';
                this.src = 'https://cdn-icons-png.flaticon.com/128/2767/2767146.png';
                this.title = 'Hide Password';
                this.alt = 'Hide Password';
                this.style.opacity = 1;
            } else {
                pwd.type = 'password';
                this.src = 'https://cdn-icons-png.flaticon.com/128/709/709612.png';
                this.title = 'Show Password';
                this.alt = 'Show Password';
                this.style.opacity = 0.7;
            }
        });
    }

    

    const slides = document.querySelectorAll('.slider-img');
    let current = 0;
    if (slides.length > 0) { 
        setInterval(() => {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }, 3000);
    }
});

function showMessage(message, isSuccess = false) {
    let messageBox = document.getElementById('messageBox');
    if (!messageBox) { 
        messageBox = document.createElement('div');
        messageBox.id = 'messageBox';
        document.body.appendChild(messageBox);
        messageBox.style.cssText = `
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            text-align: center;
            color: white;
            font-family: Arial, sans-serif;
        `;
    }
    messageBox.textContent = message;
    messageBox.style.backgroundColor = isSuccess ? '#4CAF50' : '#f44336';
    messageBox.style.display = 'block';
    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 3000);
}

function shownav() {
    document.querySelector('.side-navbar').classList.add('open'); 
}

function closenav() { 
    document.querySelector('.side-navbar').classList.remove('open'); 
}

function toggleSearch() {
  const bar = document.getElementById("searchBar");
  bar.classList.toggle("active");
}