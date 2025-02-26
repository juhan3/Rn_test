setTimeout(() => {
    console.log("[Countdown Script] 실행 시작");
    document.addEventListener("DOMContentLoaded", function () {
        console.log("[Countdown Script] DOMContentLoaded 이벤트 감지");
        
        const dropDateText = document.querySelector("div:contains('Drop Date:')");
        if (!dropDateText) {
            console.log("[Countdown Script] Drop Date 텍스트 없음, 스크립트 종료");
            return;
        }
        
        console.log("[Countdown Script] Drop Date 텍스트 발견: ", dropDateText.textContent);
        
        const dateMatch = dropDateText.textContent.match(/(\d{4})년 (\d{1,2})월 (\d{1,2})일 (\d{1,2}):(\d{2})/);
        if (!dateMatch) {
            console.log("[Countdown Script] 날짜 형식 매칭 실패");
            return;
        }
        
        console.log("[Countdown Script] 날짜 형식 매칭 성공: ", dateMatch);
        
        const [_, year, month, day, hours, minutes] = dateMatch.map(Number);
        const dropDate = new Date(year, month - 1, day, hours, minutes);
        console.log("[Countdown Script] 변환된 Drop Date: ", dropDate);
        
        const countdownElement = document.createElement("span");
        countdownElement.style.marginLeft = "10px";
        countdownElement.style.fontWeight = "bold";
        dropDateText.appendChild(countdownElement);
        
        function updateCountdown() {
            const now = new Date();
            const timeDiff = dropDate - now;
            console.log("[Countdown Script] 현재 시간: ", now, "남은 시간(ms):", timeDiff);
            
            if (timeDiff <= 0) {
                countdownElement.textContent = "Drop Time Reached";
                console.log("[Countdown Script] Drop Time 도달");
                return;
            }
            
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
            
            countdownElement.textContent = `남은 시간: ${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
            console.log("[Countdown Script] 업데이트된 카운트다운: ", countdownElement.textContent);
        }
        
        updateCountdown();
        setInterval(updateCountdown, 1000);
    });
}, 500); // 500ms 딜레이 추가
