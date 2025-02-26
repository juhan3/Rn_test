setTimeout(() => {
    console.log("[Countdown Script] 실행 시작");
    document.addEventListener("DOMContentLoaded", function () {
        console.log("[Countdown Script] DOMContentLoaded 이벤트 감지");
        
        const dropDateText = document.querySelector("div:contains('Drop Date:')");
        console.log("[Countdown Script] Drop Date 텍스트 발견: ", dropDateText ? dropDateText.textContent : "없음");
        
        const dateMatch = dropDateText?.textContent.match(/(\d{4})년 (\d{1,2})월 (\d{1,2})일 (\d{1,2}):(\d{2})/);
        console.log("[Countdown Script] 날짜 형식 매칭 결과: ", dateMatch);
        
        const [_, year, month, day, hours, minutes] = dateMatch?.map(Number) || [];
        const dropDate = new Date(year, month - 1, day, hours, minutes);
        console.log("[Countdown Script] 변환된 Drop Date: ", dropDate);
        
        const countdownElement = document.createElement("span");
        countdownElement.style.marginLeft = "10px";
        countdownElement.style.fontWeight = "bold";
        dropDateText?.appendChild(countdownElement);
        
        function updateCountdown() {
            const now = new Date();
            const timeDiff = dropDate - now;
            console.log("[Countdown Script] 현재 시간: ", now, "남은 시간(ms):", timeDiff);
            
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
