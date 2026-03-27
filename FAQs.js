const FAQs = [
  {
    question:
      "Muss ich schon einen Handstand können um in eure Stunden zu kommen?",
    answer:
      "Nein. Wir haben verschiedene Themenschwerpunkte und finden für jede Übung die richtige Skalierung für dich!",
  },
  {
    question: "Was muss ich zu einer Stunde bei euch mitnehmen?",
    answer:
      "Du musst nur Sportgewand, Socken oder Sportschuhe (Barfuß trainieren ist nicht möglich) und ggf. eine Trinkflasche mitnehmen.",
  },
  {
    question: "Wann finden eure Trainings statt?",
    answer:
      "Wir trainieren Montags und Donnerstags um 18:30h und Samstags um 09:30h in der Josefstädter Straße 76, 1080 Wien (in den Räumlichkeiten von Crossfit Vienna). Komm am besten 5 Minuten vor Stundenbeginn, um dich einzufinden.",
  },
  {
    question: "Können auch andere Personen meinen 10er-Block benutzen?",
    answer: "Nein. Dein 10er-Block ist nur für dich gültig.",
  },
  {
    question: "Gibt es ein (gratis) Probetraining?",
    answer:
      "Ja! Deine erste Einheit bei uns ist kostenlos. Somit kannst du dir selbst ein Bild von unseren Stunden machen und dann entscheiden ob du weiter zu uns kommen möchtest.",
  },
  {
    question: "Was sind Gasttrainings?",
    answer:
      "Mittlerweile gibt es diesen Verein schon einige Jahre und wir konnten diverse Kontakte zu namhaften Handstand-Artist*innen knüpfen. Diese laden wir nach Möglichkeit ein, um eine Stunde (Gasttraining) zu halten.",
  },
  {
    question:
      "Gibt es die Möglichkeit einen Gutschein (als Geschenk) zu kaufen?",
    answer: `Ja. Wenn du einen Gutschein kaufen möchtest, klicke einfach <a href="./gutscheine.html">hier</a>!`,
  },
];
const QUESTION_ID_DEFAULT = 9999;
const ACTIVE_IND_ID_DEFAULT = 999;
const container = document.getElementById("faq-container");

// FAQs rendern
FAQs.forEach((faq, index) => {
  const questionId = QUESTION_ID_DEFAULT - index;
  const activeIndId = ACTIVE_IND_ID_DEFAULT - index;

  const faqItem = document.createElement("div");
  faqItem.className = "faq-item";

  faqItem.innerHTML = `
  <div class="question" id="${questionId}" onclick="onClick(${index})">
  <span>${faq.question}</span>
  <span id="${activeIndId}" class="indicator">+</span>
  </div>
  <div class="answer inactive" id="${index}">
  ${faq.answer}
  </div>
  `;

  container.appendChild(faqItem);
});

function onClick(index) {
  collapseActiveItems(index);

  const questionId = QUESTION_ID_DEFAULT - index;
  const questionContainer = document.getElementById(questionId);
  questionContainer?.classList.toggle("active");

  const activeInd = ACTIVE_IND_ID_DEFAULT - index;
  const activeIndicator = document.getElementById(activeInd);

  const answer = document.getElementById(index);

  answer?.classList.toggle("active");
  answer?.classList.toggle("inactive");

  if (activeIndicator) {
    activeIndicator.innerText = answer?.classList.contains("active")
      ? "-"
      : "+";
  }
}

function collapseActiveItems(index) {
  for (let i = 0; i < FAQs.length; i++) {
    if (i === index) continue;

    const questionContainer = document.getElementById(QUESTION_ID_DEFAULT - i);

    if (questionContainer?.classList.contains("active")) {
      questionContainer.classList.remove("active");

      const activeIndItem = document.getElementById(ACTIVE_IND_ID_DEFAULT - i);
      if (activeIndItem) activeIndItem.innerText = "+";

      const answer = document.getElementById(i);
      answer?.classList.remove("active");
      answer?.classList.add("inactive");
    }
  }
}
