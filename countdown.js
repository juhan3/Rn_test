document.addEventListener("DOMContentLoaded", () => {
    // 카운트다운을 표시할 div 요소를 선택
    const dropDateDiv = Array.from(document.querySelectorAll("div")).find(div => 
        div.textContent.includes("Drop Date:")
    );

    if (dropDateDiv) {
        // "Drop Date:" 문자열을 추출
        const dateText = dropDateDiv.textContent.replace("Drop Date:", "").trim();
        // 날짜 객체로 변환
        const dropDate = new Date(dateText);

        // 카운트다운 함수
        function updateCountdown() {
            const now = new Date();
            const timeDifference = dropDate - now;

            if (timeDifference < 0) {
                dropDateDiv.textContent = "이벤트가 종료되었습니다!";
                clearInterval(countdownInterval);
                return;
            }

            // 남은 시간 계산
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            // 카운트다운 표시
            dropDateDiv.innerHTML = `남은 시간: ${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
        }

        // 카운트다운을 1초마다 갱신
        updateCountdown(); // 초기 호출
        const countdownInterval = setInterval(updateCountdown, 1000);
    } else {
        console.log("Drop Date가 포함된 요소를 찾을 수 없습니다.");
    }
});
