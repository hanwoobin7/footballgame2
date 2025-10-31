function switchTab(tab) {
  const game = document.getElementById('game');
  const league = document.getElementById('league');
  const ranking = document.getElementById('ranking');
  game.classList.remove('active');
  league.classList.remove('active');
  ranking.classList.remove('active');
  document.getElementById(tab).classList.add('active');
}

// ✅ 자동 슬라이더
document.addEventListener("DOMContentLoaded", function () {
  const bannerWrapper = document.querySelector('.banner-wrapper');
  const banners = document.querySelectorAll('.banner-wrapper img');
  let currentIndex = 0;

  function showSlide(index) {
    bannerWrapper.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(() => {
    currentIndex = (currentIndex + 1) % banners.length;
    showSlide(currentIndex);
  }, 3000);
});

function startGame() {
  const btn = document.querySelector('.start-btn');
  btn.innerText = 'LOADING... ⚽';
  btn.disabled = true;
  btn.style.background = 'black';
  btn.style.color = '#00ff5e';

  setTimeout(() => {
    const videoContainer = document.querySelector('.game-video');
    const iframe = document.getElementById('introVideo');

    // 영상 영역 보이기
    videoContainer.style.display = 'block';

    // 유튜브 재생 시작
    iframe.src += "&autoplay=1";

    // 일정 시간 후 다음 페이지로 이동 (예: 영상 길이 20초라면 20000ms)
    setTimeout(() => {
      location.href = 'game.html'; // 이동할 게임 페이지
    }, 20000); // 영상 길이에 맞춰 조정
  }, 1200);
}

// 피파 강화 기능
document.addEventListener("DOMContentLoaded", () => {
  const enhanceBtn = document.getElementById("enhanceBtn");
  const result = document.getElementById("result");
  const playerCard = document.getElementById("playerCard");
  const enhanceEffect = document.getElementById("enhanceEffect");
  const levelText = document.getElementById("levelText");

  let level = 0;

  enhanceBtn.addEventListener("click", () => {
    const success = Math.random() < 0.5; // 50% 확률
    if (success) {
      level++;
      levelText.textContent = `+${level}`;
      result.textContent = `강화 성공! (+${level})`;
      result.style.color = "lime";

      // 카드 흔들기
      playerCard.style.animation = "shake 0.3s ease";
      setTimeout(() => (playerCard.style.animation = ""), 300);

      // 💥 폭발 이펙트 실행
      enhanceEffect.style.animation = "explode 1s ease-out";
      enhanceEffect.style.width = "500px";
      enhanceEffect.style.height = "500px";
      setTimeout(() => {
        enhanceEffect.style.animation = "";
        enhanceEffect.style.width = "0";
        enhanceEffect.style.height = "0";
      }, 1000);
    } else {
      result.textContent = "강화 실패... 😢";
      result.style.color = "red";
      playerCard.style.filter = "grayscale(60%)";
      setTimeout(() => (playerCard.style.filter = "none"), 800);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const enhanceBtn = document.getElementById("enhanceBtn");
  const result = document.getElementById("result");
  const playerCard = document.getElementById("playerCard");
  const explosion = document.getElementById("enhanceExplosion");
  const levelText = document.getElementById("levelText");

  let level = 0;

  enhanceBtn.addEventListener("click", () => {
    const success = Math.random() < 0.5;

    if (success) {
      level++;
      result.textContent = `🔥 강화 성공! +${level}`;
      result.style.color = "lime";
      levelText.textContent = `+${level}`;

      // 카드 반짝임
      playerCard.style.animation = "flash 0.6s ease";
      setTimeout(() => (playerCard.style.animation = ""), 600);

      // 큰 폭발
      explosion.style.animation = "bigExplosion 1s ease-out";
      explosion.style.background = "radial-gradient(circle, yellow, orange, red)";
      explosion.style.opacity = 1;

      // 불꽃 입자 생성
      for (let i = 0; i < 30; i++) {
        const spark = document.createElement("div");
        spark.classList.add("spark");
        spark.style.position = "absolute";
        spark.style.width = "6px";
        spark.style.height = "6px";
        spark.style.background = "gold";
        spark.style.borderRadius = "50%";
        spark.style.top = "50%";
        spark.style.left = "50%";
        spark.style.setProperty("--x", `${(Math.random() - 0.5) * 600}px`);
        spark.style.setProperty("--y", `${(Math.random() - 0.5) * 600}px`);
        spark.style.animation = `spark 0.8s ease-out forwards`;
        explosion.appendChild(spark);
        setTimeout(() => spark.remove(), 800);
      }

      setTimeout(() => (explosion.style.animation = ""), 1000);
    } else {
      result.textContent = "💀 강화 실패...";
      result.style.color = "red";
      playerCard.style.filter = "grayscale(60%)";
      setTimeout(() => (playerCard.style.filter = "none"), 600);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const enhanceBtn = document.getElementById("enhanceBtn");
  const result = document.getElementById("result");
  const playerCard = document.getElementById("playerCard");
  const explosion = document.getElementById("enhanceExplosion");
  const levelText = document.getElementById("levelText");

  let level = 0;

  enhanceBtn.addEventListener("click", () => {
    const success = Math.random() < 0.5;

    if (success) {
      level++;
      result.textContent = `🔥 강화 성공! +${level}`;
      result.style.color = "lime";
      levelText.textContent = `+${level}`;

      // 카드 번쩍
      playerCard.style.animation = "flash 0.5s ease";
      setTimeout(() => (playerCard.style.animation = ""), 500);
    } else {
      // 💀 터짐 연출
      result.textContent = "💣 강화 실패! 카드 폭발...";
      result.style.color = "red";
      level = 0;
      levelText.textContent = "+0";

      // 카드 흔들기
      playerCard.style.animation = "shake 0.4s ease";
      setTimeout(() => (playerCard.style.animation = ""), 400);

      // 폭발 이펙트
      explosion.style.background = "radial-gradient(circle, #000, #111, #222)";
      explosion.style.animation = "blackExplosion 1s ease-out";
      explosion.style.opacity = 1;

      // 연기 입자 생성
      for (let i = 0; i < 40; i++) {
        const smoke = document.createElement("div");
        smoke.style.position = "absolute";
        smoke.style.width = "10px";
        smoke.style.height = "10px";
        smoke.style.borderRadius = "50%";
        smoke.style.background = "rgba(0,0,0,0.6)";
        smoke.style.top = "50%";
        smoke.style.left = "50%";
        smoke.style.setProperty("--x", `${(Math.random() - 0.5) * 400}px`);
        smoke.style.setProperty("--y", `${(Math.random() - 0.5) * 400}px`);
        smoke.style.animation = "smoke 1.2s ease-out forwards";
        explosion.appendChild(smoke);
        setTimeout(() => smoke.remove(), 1200);
      }

      // 카드 색 어둡게
      playerCard.style.filter = "grayscale(80%) brightness(0.5)";
      setTimeout(() => (playerCard.style.filter = "none"), 1200);

      setTimeout(() => (explosion.style.animation = ""), 1200);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const enhanceBtn = document.getElementById("enhanceBtn");
  const result = document.getElementById("result");
  const playerCard = document.getElementById("playerCard");
  const explosion = document.getElementById("enhanceExplosion");
  const levelText = document.getElementById("levelText");

  let level = 0;

  enhanceBtn.addEventListener("click", () => {
    enhanceBtn.disabled = true; // 버튼 잠금
    result.textContent = "강화 시도 중... ⏳";
    result.style.color = "white";

    // 카드 상승 애니메이션
    playerCard.style.animation = "jump 1s ease forwards";

    // 카드 상승 끝나고 1초 후 결과 판단
    setTimeout(() => {
      const success = Math.random() < 0.5;

      if (success) {
        level++;
        levelText.textContent = `+${level}`;
        result.textContent = `🔥 강화 성공! +${level}`;
        result.style.color = "lime";

        // 카드 반짝임
        playerCard.style.animation = "flash 0.5s ease";
      } else {
        level = 0;
        levelText.textContent = "+0";
        result.textContent = "💣 강화 실패! 카드 폭발...";
        result.style.color = "red";

        // 카드 흔들기
        playerCard.style.animation = "shake 0.4s ease";

        // 폭발 효과
        explosion.style.background = "radial-gradient(circle, #000, #111, #222)";
        explosion.style.animation = "blackExplosion 1s ease-out";
        explosion.style.opacity = 1;

        // 연기 입자 생성
        for (let i = 0; i < 40; i++) {
          const smoke = document.createElement("div");
          smoke.style.position = "absolute";
          smoke.style.width = "10px";
          smoke.style.height = "10px";
          smoke.style.borderRadius = "50%";
          smoke.style.background = "rgba(0,0,0,0.6)";
          smoke.style.top = "50%";
          smoke.style.left = "50%";
          smoke.style.setProperty("--x", `${(Math.random()-0.5)*400}px`);
          smoke.style.setProperty("--y", `${(Math.random()-0.5)*400}px`);
          smoke.style.animation = "smoke 1.2s ease-out forwards";
          explosion.appendChild(smoke);
          setTimeout(() => smoke.remove(), 1200);
        }

        playerCard.style.filter = "grayscale(80%) brightness(0.5)";
        setTimeout(() => (playerCard.style.filter = "none"), 1200);
      }

      setTimeout(() => {
        explosion.style.animation = "";
        playerCard.style.animation = "";
        enhanceBtn.disabled = false;
      }, 1200);

    }, 1000); // 카드 상승 + 긴장 시간
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const enhanceBtn = document.getElementById("enhanceBtn");
  const result = document.getElementById("result");
  const playerCard = document.getElementById("playerCard");
  const explosion = document.getElementById("enhanceExplosion");
  const levelText = document.getElementById("levelText");

  let level = 0;

  enhanceBtn.addEventListener("click", () => {
    enhanceBtn.disabled = true;
    result.textContent = "강화 시도 중... ⏳";
    result.style.color = "white";

    // 카드 상승 + 흔들림
    playerCard.style.animation = "jumpShake 1s ease forwards";

    // 1초 후 성공/실패 판단
    setTimeout(() => {
      const success = Math.random() < 0.5;

      if (success) {
        level++;
        levelText.textContent = `+${level}`;
        result.textContent = `🔥 강화 성공! +${level}`;
        result.style.color = "lime";

        // 카드 착지 + 반짝
        playerCard.style.animation = "landSuccess 1s ease forwards";

        // 작은 반짝 입자
        for (let i = 0; i < 15; i++) {
          const spark = document.createElement("div");
          spark.style.position = "absolute";
          spark.style.width = "8px";
          spark.style.height = "8px";
          spark.style.borderRadius = "50%";
          spark.style.background = "lime";
          spark.style.top = "50%";
          spark.style.left = "50%";
          spark.style.setProperty("--x", `${(Math.random()-0.5)*200}px`);
          spark.style.setProperty("--y", `${(Math.random()-0.5)*200}px`);
          spark.style.animation = "smoke 1s ease-out forwards";
          playerCard.parentElement.appendChild(spark);
          setTimeout(() => spark.remove(), 1000);
        }

      } else {
        level = 0;
        levelText.textContent = "+0";
        result.textContent = "💣 강화 실패! 카드 폭발...";
        result.style.color = "red";

        // 카드 흔들기
        playerCard.style.animation = "shake 0.4s ease";

        // 폭발 이펙트
        explosion.style.background = "radial-gradient(circle, #000, #111, #222)";
        explosion.style.animation = "blackExplosion 1s ease-out";
        explosion.style.opacity = 1;

        // 연기 입자
        for (let i = 0; i < 40; i++) {
          const smoke = document.createElement("div");
          smoke.style.position = "absolute";
          smoke.style.width = "10px";
          smoke.style.height = "10px";
          smoke.style.borderRadius = "50%";
          smoke.style.background = "rgba(0,0,0,0.6)";
          smoke.style.top = "50%";
          smoke.style.left = "50%";
          smoke.style.setProperty("--x", `${(Math.random()-0.5)*400}px`);
          smoke.style.setProperty("--y", `${(Math.random()-0.5)*400}px`);
          smoke.style.animation = "smoke 1.2s ease-out forwards";
          explosion.appendChild(smoke);
          setTimeout(() => smoke.remove(), 1200);
        }

        playerCard.style.filter = "grayscale(80%) brightness(0.5)";
        setTimeout(() => (playerCard.style.filter = "none"), 1200);
      }

      // 1.2초 후 초기화 + 버튼 활성화
      setTimeout(() => {
        explosion.style.animation = "";
        playerCard.style.animation = "";
        enhanceBtn.disabled = false;
      }, 1200);

    }, 1000); // 카드 공중 흔들림 + 긴장감
  });
});

