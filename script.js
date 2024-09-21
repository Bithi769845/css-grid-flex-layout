
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
console.log(hamburger);
console.log(navMenu);
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

   
