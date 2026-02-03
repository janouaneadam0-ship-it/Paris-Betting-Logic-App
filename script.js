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
// Function bach t-calculi w t-affichi l'rab7 f l'interface
function updateProfit() {
    const stake = document.getElementById('stake').value;
    const odd = document.getElementById('odd').value;
    const resultDisplay = document.getElementById('result');

    if (stake > 0 && odd > 0) {
        const profit = (stake * odd).toFixed(2);
        const probability = ((1 / odd) * 100).toFixed(0);
        
        resultDisplay.innerHTML = `
            Potential Gain: <span style="color: green;">${profit} DH</span><br>
            Winning Chance: <span style="color: blue;">${probability}%</span>
        `;
    } else {
        resultDisplay.innerHTML = "Please enter valid numbers!";
        resultDisplay.style.color = "red";
    }
}