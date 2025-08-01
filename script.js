let countdownInterval;

document.getElementById("startBtn").addEventListener("click", function () {
    const datetimeInput = document.getElementById("datetime").value;

    if (!datetimeInput) {
        alert("Please select a valid date and time!");
        return;
    }

    const targetDate = new Date(datetimeInput).getTime();
    document.getElementById("countdown").classList.remove("hidden");

    clearInterval(countdownInterval);

    countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "<h2>🎉 Time's Up!</h2>";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }, 1000);
});
