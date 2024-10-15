// Hämta knappen och body-elementet
const toggleButton = document.getElementById("toggleButton");
const body = document.body;

// Variabel för att spåra färgblindhetsläge
let colorblindMode = false;

// Lyssna på klickhändelsen på knappen
toggleButton.addEventListener("click", function() {
    colorblindMode = !colorblindMode; // Växla läget
    if (colorblindMode) {
        body.classList.add("colorblind-mode"); // Lägg till klass för färgblindhetsläge
        toggleButton.innerText = "Avaktivera Färgblindhet"; // Ändra knapptext
    } else {
        body.classList.remove("colorblind-mode"); // Ta bort färgblindhetsläget
        toggleButton.innerText = "Aktivera Färgblindhet"; // Återställ knapptext
    }
});


        // Hämta modal-elementet
        var modal = document.getElementById("imageModal");
        // Hämta modal-bilden
        var modalImg = document.getElementById("modalImage");
        // Hämta alla bilder med klassen "gallery-image"
        var images = document.querySelectorAll(".gallery-image");

        // Gå igenom alla bilder och lägg till en klick-händelse
        images.forEach(function(img) {
            img.onclick = function() {
                modal.style.display = "block"; // Visa modalen
                modalImg.src = this.src; // Sätt bildens källa till modalens bildkälla
            }
        });

        // Hämta stängningsknappen
        var closeBtn = document.querySelector(".close");
        // När användaren klickar på stängningsknappen
        closeBtn.onclick = function() {
            modal.style.display = "none"; // Dölja modalen
        }