const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];
// 1. filter the list of inventors for those who were born in the 1500's
const filterArray1 = inventors.filter((inventor) => {
  if (inventor.year >= 1500 && inventor.year < 1599) {
    return true; //Keep
  }
});
// console.table(filterArray1);
// or you can write in 1 line like a:
const filterArray2 = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
// Array.prototype.map()
//some tra ve true or fal
// 2. give us an array of the inventory first and last names
const fullName1 = inventors.map(
  (inventor) => inventor.first + " " + inventor.last
);
// console.table(fullName1);
// or you can write like a:
const fullName2 = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
// Array.prototype.sort()
// 3. Sort the inventor by birthday, oldest to youngest
const sortArr1 = inventors.sort(function (a, b) {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});
// console.table(sortArr1);
/// or you can write
const sortArr2 = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
// Array.prototype.reduce()
// 4. How many years did all the inventor live?
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
// console.table(totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort((a, b) => {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1;
});
// console.table(oldest);
// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. Sort Exercise
// Sort the people alphabetically by last name
const alphabetName = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(", ");
  const [bLast, bFirst] = nextOne.split(", ");
  return aFirst > bFirst ? 1 : -1;
});
// console.table(alphabetName);

// Reduce Exercise
// 7. Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
];
const transportation = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(transportation);
