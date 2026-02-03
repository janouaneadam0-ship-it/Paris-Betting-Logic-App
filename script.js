document.addEventListener('DOMContentLoaded', () => {

// menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

if(menuToggle){
    menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    });
}

// bouton scroll
const scrollBtn = document.getElementById("scrollTopBtn");

if(scrollBtn) {
    window.onscroll = function() {
        // on affiche après 200px
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollBtn.style.display = "block";
        } else {
    scrollBtn.style.display = "none";
        }
    };

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// formulaire
const form = document.getElementById('contactForm');

if(form) {
    form.addEventListener('submit', function(e) {
        const nom= document.getElementById('nom').value.trim();
        const email = document.getElementById('email').value.trim();
        const message=document.getElementById('message').value.trim();
        
        if(nom === "" || email === "" || message === "") {
            e.preventDefault(); 
            alert("Erreur : Veuillez remplir tous les champs obligatoires.");
        } else {
            alert("Merci " + nom + " ! Votre message a bien été envoyé.");
        }
    });
}

// boutons details
const detailButtons = document.querySelectorAll('.card button');
detailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert("Plus d'informations sur ce monument seront bientôt disponibles !");
    });
});

});