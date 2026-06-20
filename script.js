// 📝 중3 가정 교과 관련 샘플 문제 세트 (선생님이 언제든 수정 가능!)
const quizData = [
    {
        question: "Q1. 청소년기 자아정체감 형성을 위해 바람직한 태도는 무엇일까요?",
        options: ["타인의 의견에 무조건 따른다", "자신의 장단점을 객관적으로 파악한다", "부모님이 정해준 진로만 고집한다", "유행하는 스타일을 맹목적으로 모방한다"],
        answer: 1 // 두 번째 보기 (0부터 시작하므로 1은 두 번째를 의미)
    },
    {
        question: "Q2. 식품을 구매할 때 안전성과 영양 정보를 확인하기 위해 가장 먼저 살펴보아야 하는 것은?",
        options: ["제품의 디자인", "식품 표시 (유통기한, 영양성분 등)", "연예인 광고 모델", "가장 저렴한 가격 원칙"],
        answer: 1
    },
    {
        question: "Q3. 이웃과 소통하며 함께 살아가는 친환경적이고 공동체 중심의 주거 문화를 무엇이라고 할까요?",
        options: ["독점 주거", "폐쇄형 주택", "코하우징 (Co-housing)", "단독 주거"],
        answer: 2 // 세 번째 보기
    }
];

let currentQuiz = 0;
let score = 0;

const quizBox = document.getElementById('quiz-box');

function loadQuiz() {
    if(currentQuiz < quizData.length) {
        const currentData = quizData[currentQuiz];
        quizBox.innerHTML = `
            <h2>🏠 가정 시간 미니 퀴즈 (${currentQuiz + 1}/${quizData.length})</h2>
            <div class="question">${currentData.question}</div>
            ${currentData.options.map((option, index) => 
                `<button class="options-btn" onclick="checkAnswer(${index})">${option}</button>`
            ).join('')}
        `;
    } else {
        showResult();
    }
}

function checkAnswer(selectedIndex) {
    if(selectedIndex === quizData[currentQuiz].answer) {
        alert("정답입니다! 🎉");
        score++;
    } else {
        const correctAns = quizData[currentQuiz].options[quizData[currentQuiz].answer];
        alert(`아쉽습니다! 😢 \n정답: ${correctAns}`);
    }
    currentQuiz++;
    loadQuiz();
}

function showResult() {
    quizBox.innerHTML = `
        <h2>🏁 퀴즈 종료! 🏁</h2>
        <p class="score-area">총 ${quizData.length}문제 중 ${score}문제를 맞혔습니다!</p>
        <p>${score === quizData.length ? '🥇 완벽해요! 오늘 수업 집중도 100%!' : '👍 수고했어요! 오늘 수업을 통해 더 배워봅시다!'}</p>
        <button class="restart-btn" onclick="restartQuiz()">다시 풀기</button>
    `;
}

function restartQuiz() {
    currentQuiz = 0;
    score = 0;
    loadQuiz();
}

// 첫 실행
loadQuiz();
