document.getElementById("reservationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page
    alert("Merci, nous allons vous appeler pour la confirmation.");
});

function toggleCardField() {
    const paiement = document.getElementById("paiement").value;
    const cardField = document.getElementById("cardNumberField");

    if (paiement === "carte") {
        cardField.style.display = "block";
    } else {
        cardField.style.display = "none";
    }
}
