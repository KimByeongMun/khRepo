document.addEventListener("DOMContentLoaded", function () {
    const gameSelect = document.getElementById("game");
    const oddsDisplay = document.getElementById("odds-display");

    gameSelect.addEventListener("change", function () {
        const selectedGame = gameSelect.value;
        let odds = 3.50;
        oddsDisplay.textContent = odds.toFixed(2);
    });

    const bBtn = document.getElementById("place-bet");
    bBtn.addEventListener("click", function () {
        const selectedGame = gameSelect.value;
        const betAmount = parseFloat(document.getElementById("amount").value);
        if (!isNaN(betAmount) && betAmount > 0) {
            
            alert(`배팅이 완료되었습니다!${betAmount}원을 배팅했습니다.`);
        } else {
            alert("똑바로 입력해주세요^ㅇ^");
        }
    });
});
