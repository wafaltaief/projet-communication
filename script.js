// بيانات البرامج للرحلات
const tripsData = {
    tunisie: {
        solo: `
            <h3>Programme Solo - Tunisie</h3>
            <p><strong>Visites:</strong> Carthage, Sidi Bou Saïd, Hammamet.</p>
            <p><strong>Restaurants:</strong> Dar El Jeld, Le Grand Bleu.</p>
            <p><strong>Hôtels:</strong> Hotel Laico (Chambres spacieuses avec vue).</p>
        `,
        group: `
            <h3>Programme Groupe - Tunisie</h3>
            <p><strong>Visites:</strong> Medina Tunis, Bardo, Kairouan.</p>
            <p><strong>Restaurants:</strong> Chez Slah, Le Golfe.</p>
            <p><strong>Hôtels:</strong> Mövenpick Sousse (Services pour groupes).</p>
        `,
    },
    london: {
        solo: `
            <h3>Programme Solo - Londres</h3>
            <p><strong>Visites:</strong> Buckingham Palace, London Eye, Tower of London.</p>
            <p><strong>Restaurants:</strong> The Ledbury, Duck & Waffle.</p>
            <p><strong>Hôtels:</strong> The Ritz London (Luxueux et central).</p>
        `,
        group: `
            <h3>Programme Groupe - Londres</h3>
            <p><strong>Visites:</strong> British Museum, Hyde Park, Camden Market.</p>
            <p><strong>Restaurants:</strong> Dabbous, Restaurant Story.</p>
            <p><strong>Hôtels:</strong> The Langham (Options pour groupes).</p>
        `,
    },
    bali: {
        solo: `
            <h3>Programme Solo - Bali</h3>
            <p><strong>Visites:</strong> Ubud, Tanah Lot, Mount Batur.</p>
            <p><strong>Restaurants:</strong> Locavore, Sarong.</p>
            <p><strong>Hôtels:</strong> The Four Seasons (Villas avec vues).</p>
        `,
        group: `
            <h3>Programme Groupe - Bali</h3>
            <p><strong>Visites:</strong> Monkey Forest, Uluwatu Temple, Gili Islands.</p>
            <p><strong>Restaurants:</strong> Mamasan, Watercress Cafe.</p>
            <p><strong>Hôtels:</strong> Ayana Resort Bali (Grandes options pour groupes).</p>
        `,
    },
    maldives: {
        solo: `
            <h3>Programme Solo - Maldives</h3>
            <p><strong>Visites:</strong> Plages de sable blanc, Snorkeling.</p>
            <p><strong>Restaurants:</strong> Ithaa Undersea, Sea.Fire.Salt.</p>
            <p><strong>Hôtels:</strong> Baros Maldives (Villas privées).</p>
        `,
        group: `
            <h3>Programme Groupe - Maldives</h3>
            <p><strong>Visites:</strong> Atolls, Excursions en bateau.</p>
            <p><strong>Restaurants:</strong> Muraka, Ufaa by Jereme.</p>
            <p><strong>Hôtels:</strong> Kurumba Maldives (Options pour groupes).</p>
        `,
    },
    paris: {
        solo: `
            <h3>Programme Solo - Paris</h3>
            <p><strong>Visites:</strong> Eiffel Tower, Musée du Louvre, Montmartre.</p>
            <p><strong>Restaurants:</strong> Le Cinq, L'Arpège.</p>
            <p><strong>Hôtels:</strong> Le Meurice (Palace Hôtel).</p>
        `,
        group: `
            <h3>Programme Groupe - Paris</h3>
            <p><strong>Visites:</strong> Musée d'Orsay, Champs-Élysées, Notre-Dame.</p>
            <p><strong>Restaurants:</strong> Le Comptoir, Café de Flore.</p>
            <p><strong>Hôtels:</strong> Hôtel Plaza Athénée (Groupes et événements).</p>
        `,
    },
};


function showModal(city) {
    const modal = document.getElementById('modal');
    const details = document.getElementById('modal-details');
    const data = tripsData[city];
    if (data) {
        details.innerHTML = `
            <h2>Programme de ${city.charAt(0).toUpperCase() + city.slice(1)}</h2>
            ${data.solo}
            <hr>
            ${data.group}
        `;
        modal.style.display = 'flex';
    }
}


function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}


window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the current slide
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 5 seconds
    setTimeout(showSlides, 5000);
}

// Start the slideshow when the page is loaded
showSlides();
