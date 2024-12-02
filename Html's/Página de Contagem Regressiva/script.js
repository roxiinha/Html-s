// Definir a data do evento
const eventDate = new Date("November 28, 2024 00:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    // Cálculo de dias, horas, minutos e segundos restantes
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Exibir os valores
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Se a contagem regressiva terminar
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "O evento começou!";
    }
}, 1000);
