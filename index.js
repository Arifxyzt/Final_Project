const planetData = {
    "Kepler-452b": {
        name: "Kepler-452b",
        type: "Super-Earth",
        distance: "1400 light years",
        description: "Kepler-452b is a super-Earth exoplanet in the habitable zone of its star.",
        photo: "exp_photo1.jpg"
    },
    "Proxima Centauri b": {
        name: "Proxima Centauri b",
        type: "Terrestrial",
        distance: "4.24 light years",
        description: "Proxima Centauri b is one of the closest exoplanets to Earth.",
        photo: "exp_photo2.jpg"
    },
    "TRAPPIST-1d": {
        name: "TRAPPIST-1d",
        type: "Terrestrial",
        distance: "39 light years",
        description: "TRAPPIST-1d is a rocky exoplanet in the TRAPPIST-1 system.",
        photo: "exp_photo3.jpg"
    },
    "Gliese 581c": {
        name: "Gliese 581c",
        type: "Super-Earth",
        distance: "20.4 light years",
        description: "Gliese 581c is one of the first Earth-like exoplanets found.",
        photo: "exp_photo4.jpg"
    },
    "HD 189733 b": {
        name: "HD 189733 b",
        type: "Gas Giant",
        distance: "64.5 light years",
        description: "HD 189733 b is a gas giant known for its deep blue color.",
        photo: "exp_photo5.jpg"
    },
    "55 Cancri e": {
        name: "55 Cancri e",
        type: "Super-Earth",
        distance: "41 light years",
        description: "55 Cancri e is a rocky planet twice the size of Earth.",
        photo: "exp_photo6.jpg"
    },
    "Kepler-22b": {
        name: "Kepler-22b",
        type: "Super-Earth",
        distance: "600 light years",
        description: "Kepler-22b is a super-Earth in the habitable zone of its star.",
        photo: "exp_photo7.jpg"
    },
    "WASP-12b": {
        name: "WASP-12b",
        type: "Gas Giant",
        distance: "870 light years",
        description: "WASP-12b is a hot Jupiter that absorbs 94% of the light from its star.",
        photo: "exp_photo8.jpg"
    },
    "HD 209458 b": {
        name: "HD 209458 b",
        type: "Gas Giant",
        distance: "150 light years",
        description: "HD 209458 b is known for its evaporating atmosphere.",
        photo: "exp_photo9.jpg"
    },
    "GJ 1214 b": {
        name: "GJ 1214 b",
        type: "Mini-Neptune",
        distance: "40 light years",
        description: "GJ 1214 b is a water-rich planet with a thick atmosphere.",
        photo: "exp_photo10.jpg"
    },
    "Kepler-62f": {
        name: "Kepler-62f",
        type: "Super-Earth",
        distance: "1200 light years",
        description: "Kepler-62f orbits within the habitable zone of its star.",
        photo: "exp_photo11.jpg"
    },
    "Kepler-69c": {
        name: "Kepler-69c",
        type: "Super-Earth",
        distance: "2700 light years",
        description: "Kepler-69c is potentially Earth-like and orbits a sun-like star.",
        photo: "exp_photo12.jpg"
    },
    "Kepler-442b": {
        name: "Kepler-442b",
        type: "Super-Earth",
        distance: "1200 light years",
        description: "Kepler-442b is one of the most Earth-like exoplanets found.",
        photo: "exp_photo13.jpg"
    },
    "Kepler-10b": {
        name: "Kepler-10b",
        type: "Super-Earth",
        distance: "564 light years",
        description: "Kepler-10b is a rocky planet, the first confirmed terrestrial exoplanet.",
        photo: "exp_photo14.jpg"
    },
    "LHS 1140 b": {
        name: "LHS 1140 b",
        type: "Super-Earth",
        distance: "40 light years",
        description: "LHS 1140 b is a rocky planet orbiting within its star's habitable zone.",
        photo: "exp_photo15.jpg"
    },
    "K2-18b": {
        name: "K2-18b",
        type: "Mini-Neptune",
        distance: "124 light years",
        description: "K2-18b has water vapor detected in its atmosphere.",
        photo: "exp_photo16.jpg"
    },
    "Kepler-90i": {
        name: "Kepler-90i",
        type: "Terrestrial",
        distance: "2840 light years",
        description: "Kepler-90i is part of a planetary system that resembles our own.",
        photo: "exp_photo17.jpg"
    },
    "TOI 700 d": {
        name: "TOI 700 d",
        type: "Super-Earth",
        distance: "101 light years",
        description: "TOI 700 d is located in the habitable zone of its star.",
        photo: "exp_photo18.jpg"
    },
    "Ross 128 b": {
        name: "Ross 128 b",
        type: "Terrestrial",
        distance: "11 light years",
        description: "Ross 128 b is a temperate Earth-sized exoplanet.",
        photo: "exp_photo19.jpg"
    },
    "Wolf 1061c": {
        name: "Wolf 1061c",
        type: "Super-Earth",
        distance: "13.8 light years",
        description: "Wolf 1061c orbits within the habitable zone of its star.",
        photo: "exp_photo20.jpg"
    },
    "Gliese 832c": {
        name: "Gliese 832c",
        type: "Super-Earth",
        distance: "16 light years",
        description: "Gliese 832c is a potentially habitable planet.",
        photo: "exp_photo21.jpg"
    },
    "Kepler-16b": {
        name: "Kepler-16b",
        type: "Gas Giant",
        distance: "200 light years",
        description: "Kepler-16b orbits two stars, much like Tatooine from Star Wars.",
        photo: "exp_photo22.jpg"
    },
    "HD 40307 g": {
        name: "HD 40307 g",
        type: "Super-Earth",
        distance: "42 light years",
        description: "HD 40307 g is located in its star's habitable zone.",
        photo: "exp_photo23.jpg"
    },
    "Kepler-452c": {
        name: "Kepler-452c",
        type: "Super-Earth",
        distance: "1400 light years",
        description: "Kepler-452c is considered a potential Earth-twin.",
        photo: "exp_photo24.jpg"
    },
    "Kapteyn b": {
        name: "Kapteyn b",
        type: "Super-Earth",
        distance: "13 light years",
        description: "Kapteyn b is one of the oldest known exoplanets.",
        photo: "exp_photo25.jpg"
    },
    "Tau Ceti e": {
        name: "Tau Ceti e",
        type: "Super-Earth",
        distance: "11.9 light years",
        description: "Tau Ceti e is a potentially habitable planet.",
        photo: "exp_photo26.jpg"
    },
    "GJ 667 Cc": {
        name: "GJ 667 Cc",
        type: "Super-Earth",
        distance: "23.6 light years",
        description: "GJ 667 Cc orbits within the habitable zone of its star.",
        photo: "exp_photo27.jpg"
    },
    "Kepler-438b": {
        name: "Kepler-438b",
        type: "Super-Earth",
        distance: "470 light years",
        description: "Kepler-438b is a rocky planet with a high chance of habitability.",
        photo: "exp_photo28.jpg"
    },
    "Kepler-1649c": {
        name: "Kepler-1649c",
        type: "Super-Earth",
        distance: "300 light years",
        description: "Kepler-1649c is very similar to Earth in size and temperature.",
        photo: "exp_photo29.jpg"
    },
    
};

// Planeti bulma butonuna tıklama olayı
document.getElementById('find-planet').addEventListener('click', function() {
    const input = document.getElementById('planet-input').value.trim().toLowerCase();
    const planetInfo = document.getElementById('planet-info');
    const planetPhoto = document.getElementById('planet-photo');

    const planet = Object.keys(planetData).find(
        key => key.toLowerCase() === input
    );

    if (planet) {
        localStorage.setItem('selectedPlanet', planet);
        const data = planetData[planet];
        planetInfo.innerHTML = `
            <h2>${data.name}</h2>
            <p>Type: ${data.type}</p>
            <p>Distance: ${data.distance}</p>
            <p>Description: ${data.description}</p>
        `;
        planetPhoto.src = data.photo; // Gezegen fotoğrafını değiştir
    } else {
        planetInfo.innerHTML = `<p>Planet not found. Please try again.</p>`;
        planetPhoto.src = "exp_photo1.jpg"; // Varsayılan fotoğraf
    }
});

// Autocomplete özelliği
document.getElementById('planet-input').addEventListener('input', function() {
    const input = this.value.trim().toLowerCase();
    const autocompleteList = document.getElementById('autocomplete-list');
    autocompleteList.innerHTML = ''; // Önceki sonuçları temizle

    if (!input) return; // Eğer giriş boşsa çık

    // Uygun gezegenleri bul
    const filteredPlanets = Object.keys(planetData).filter(
        key => key.toLowerCase().startsWith(input)
    );

    // Uygun gezegenleri listele
    filteredPlanets.forEach(planet => {
        const div = document.createElement('div');
        div.textContent = planet;
        div.addEventListener('click', function() {
            document.getElementById('planet-input').value = planet; // Giriş alanını güncelle
            autocompleteList.innerHTML = ''; // Listeyi temizle
        });
        autocompleteList.appendChild(div);
    });
});
