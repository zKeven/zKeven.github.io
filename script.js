const shadowCircle = document.getElementById("shadow-circle");

document.addEventListener("mousemove", (e) => {
    const mens = 500; // Ajusta este valor según sea necesario

    const x = e.clientX - mens;
    const y = e.clientY - mens; // Asegúrate de restar "mens" aquí

    // Define el gradiente radial como una cadena de estilo
    shadowCircle.style.top = y + "px";
    shadowCircle.style.left = x + "px";
});
