// Récupération des éléments
const startButton = document.getElementById('startButton');
const homepage = document.getElementById('homepage');
const registrationSection = document.getElementById('registration');
const testSection = document.getElementById('test');
const resultsSection = document.getElementById('results');
const resultMessage = document.getElementById('resultMessage');

// Afficher la section d'inscription
startButton.addEventListener('click', () => {
  homepage.style.display = 'none';
  registrationSection.style.display = 'block';
});

// Gestion de l'inscription
const registrationForm = document.getElementById('registrationForm');
registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Inscription réussie ! Vous pouvez passer au test.');
  registrationSection.style.display = 'none';
  testSection.style.display = 'block';
});

// Gestion du test
const testForm = document.getElementById('testForm');
testForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const answers = {
    q1: "vite",
    q2: "venu",
    q3: "est",
    q4: "sont",
    q5: "Paris"
  };

  const formData = new FormData(testForm);
  let score = 0;
  let feedback = "";

  for (let question in answers) {
    const userAnswer = formData.get(question).toLowerCase().trim();
    if (userAnswer === answers[question]) {
      score++;
      feedback += `Question ${question.slice(1)} : Correct !\n`;
    } else {
      feedback += `Question ${question.slice(1)} : Faux (Bonne réponse : ${answers[question]})\n`;
    }
  }

  // Affichage des résultats
  testSection.style.display = 'none';
  resultsSection.style.display = 'block';
  resultMessage.textContent = `Score final : ${score}/5\n\n${feedback}`;


  
});
