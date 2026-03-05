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
    question: "Gibt es die Möglichkeit Gutscheine zu kaufen?",
    answer: `Ja. Wenn du einen Gutschein kaufen möchtest, klicke einfach <a href="./gutscheine.html">hier</a>!`,
  },
];

const overlay = document.getElementById("cookie-overlay");
const banner = document.getElementById("cookie-banner");
const QUESTION_ID_DEFAULT = 9999;
const ACTIVE_IND_ID_DEFAULT = 999;
const container = document.getElementById("faq-container");
const datenschutzeinstellungen = document.getElementById(
  "datenschutzeinstellungen",
);

// Datenschutzeinstellungen
datenschutzeinstellungen.addEventListener("click", function () {
  banner.style.display = "block";
  overlay.style.display = "block";
});

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

/* Date function */
const yearObjects = document.getElementsByClassName("currentYear");

for (const yearObject of yearObjects) {
  const year = new Date().getFullYear();
  yearObject.textContent = year.toString();
}

/* Cookies */

document.addEventListener("DOMContentLoaded", function () {
  const acceptButton = document.getElementById("cookie-accept");
  const rejectButton = document.getElementById("cookie-reject");
  const cookieName = "HSV_Cookie_Consent";

  const hasCookie = (name) =>
    document.cookie.split("; ").find((c) => c.startsWith(name + "=accepted"));

  if (!hasCookie(cookieName)) {
    banner.style.display = "block";
    overlay.style.display = "block";
  }

  if (hasCookie(cookieName)) {
    const script = document.createElement("script");
    script.src = "https://widget-static.eversports.io/loader.js";
    script.async = true;
    script.type = "module";

    const wrapper = document.getElementById("widgetWrapperId");
    if (wrapper && !wrapper.querySelector("[data-eversports-widget-id]")) {
      let tempDiv = document.createElement("div");
      tempDiv.setAttribute(
        "data-eversports-widget-id",
        "fa96ca77-1129-4e00-b0b6-ce610c4325ef",
      );

      wrapper.appendChild(tempDiv);
    }
    document.head.appendChild(script);
  }

  function deleteCookie(cookieName) {
    document.cookie =
      cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  let tempScript;

  acceptButton.addEventListener("click", function () {
    banner.style.display = "none";
    overlay.style.display = "none";

    const wrapper = document.getElementById("widgetWrapperId");
    if (wrapper && !wrapper.querySelector("[data-eversports-widget-id]")) {
      let tempDiv = document.createElement("div");
      tempDiv.setAttribute(
        "data-eversports-widget-id",
        "fa96ca77-1129-4e00-b0b6-ce610c4325ef",
      );

      wrapper.appendChild(tempDiv);
    }

    document.cookie =
      cookieName + "=accepted; max-age=86400; path=/; SameSite=Lax";

    if (!tempScript) {
      tempScript = document.createElement("script");
      tempScript.src = "https://widget-static.eversports.io/loader.js";
      tempScript.async = true;
      tempScript.type = "module";

      document.head.appendChild(tempScript);
    }

    // reload page!
    location.reload();
  });

  rejectButton.addEventListener("click", function () {
    banner.style.display = "none";
    overlay.style.display = "none";

    //script entfernen
    if (tempScript) {
      tempScript.remove();
      tempScript = null;
    }

    //widget div entfernen
    const widgetDiv = document.getElementById("widgetWrapperId");
    if (widgetDiv) {
      widgetDiv.innerHTML = "";
    }

    //reset cookies
    deleteCookie(cookieName);
  });
});

//focus nur im banner

const modal = document.getElementById("cookie-banner");
const focusableElements = modal.querySelectorAll("button, a");
let first = focusableElements[0];
let last = focusableElements[focusableElements.length - 1];

modal.addEventListener("keydown", function (e) {
  if (e.key === "Tab") {
    if (e.shiftKey) {
      // shift + tab
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      // tab
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
});

//Jahrestrainingsplan

const trainingsplan = {
  Jänner: {
    montag: "Tuck & Pike",
    donnerstag: "Strength & Conditioning",
    samstag: "Line & Balance",
  },
  Februar: { montag: "Shapes", donnerstag: "Press", samstag: "Tuck & Pike" },
  März: {
    montag: "Strength & Conditioning",
    donnerstag: "Line & Balance",
    samstag: "Shapes",
  },
  April: {
    montag: "Press",
    donnerstag: "Tuck & Pike",
    samstag: "Strength & Conditioning",
  },
  Mai: { montag: "Line & Balance", donnerstag: "Shapes", samstag: "Press" },
  Juni: {
    montag: "Tuck & Pike",
    donnerstag: "Strength & Conditioning",
    samstag: "Line & Balance",
  },
  Juli: { montag: "Shapes", donnerstag: "Press", samstag: "Tuck & Pike" },
  August: {
    montag: "Strength & Conditioning",
    donnerstag: "Line & Balance",
    samstag: "Shapes",
  },
  September: {
    montag: "Press",
    donnerstag: "Tuck & Pike",
    samstag: "Strength & Conditioning",
  },
  Oktober: { montag: "Line & Balance", donnerstag: "Shapes", samstag: "Press" },
  November: {
    montag: "Tuck & Pike",
    donnerstag: "Strength & Conditioning",
    samstag: "Line & Balance",
  },
  Dezember: { montag: "Shapes", donnerstag: "Press", samstag: "Tuck & Pike" },
};

const monate = [
  "Jänner",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

const now = new Date();
const thisMonth = monate[now.getMonth()];
const data = trainingsplan[thisMonth];

document.getElementById("monatTitel").textContent = thisMonth;
document.getElementById("montag").textContent = data.montag;
document.getElementById("donnerstag").textContent = data.donnerstag;
document.getElementById("samstag").textContent = data.samstag;
