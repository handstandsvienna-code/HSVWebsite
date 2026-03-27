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
