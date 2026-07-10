window.addEventListener('DOMContentLoaded', () => {
    const baseDate = new Date(CONFIG.counterStartDate);
    const today = new Date();

    const timeDiff = today.getTime() - baseDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

    let currentCount = CONFIG.counterStartValue;

    if (daysDiff > 0) {
        for (let i = 0; i < daysDiff; i++) {
            const seededRandom = Math.sin(i + 1) * 10000;
            const dailyIncrement =
                Math.floor((seededRandom - Math.floor(seededRandom)) * 5) + 1;

            currentCount += dailyIncrement;
        }
    }

    const formattedNumber = String(currentCount).padStart(6, "0");

    document.getElementById("visitorNumber").innerText = formattedNumber;
});