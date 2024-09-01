// script.js

// Vérifier si le formulaire d'inscription existe sur la page
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêcher la soumission du formulaire

        // Récupérer les valeurs des champs de saisie
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const accessCode = document.getElementById('accessCode').value;

        // Vérifier si le code d'accès est correct
        if (accessCode === '#1234.0') {
            // Si le code est correct, rediriger vers le site Web spécifié
            window.location.href = 'https://daemonbotfb.github.io/Daemon/';
        } else {
            // Si le code est incorrect, afficher un message d'erreur
            document.getElementById('errorMessage').textContent = 'Code d\'accès incorrect. Veuillez réessayer.';
        }
    });
}