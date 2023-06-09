/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: "Andreas",
  surname: "Ubertini",
  age: 29,
}
console.log(me, "prima")
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

const deleteProperty = (objName) => {
  delete objName.age
}

deleteProperty(me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

const addProperty = (objName) => {
  let skills = ["javascript", "php"]
  objName.skills = skills
}
addProperty(me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

const pushToArray = (toPush) => {
  me.skills.push(toPush)
}
pushToArray("nuova skill")

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

const popFromArray = (a) => {
  me.skills.pop()
}
popFromArray()

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = function () {
  return Math.floor(Math.random() * 6 + 1)
}
console.log(dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = function (n1, n2) {
  if (n1 > n2) {
    return n1
  } else {
    return n2
  }
}

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitString = function (stringa) {
  const arrayOfwords = stringa.split(" ")
  return arrayOfwords
}
console.log(splitString("Provo la funzione per splittare"))

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = function (string, bool) {
  if (bool) {
    return string.slice(1)
  } else {
    return string.slice(0, string.length - 1)
  }
}
console.log(deleteOne("Provo", false))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = function (string) {
  let newString = string.replace(/[0-9]/g, "")
  return newString
}
console.log(onlyLetters("levo 10 tutti i 10 numeri"))

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = (strg) => {
  if (strg.includes("@") && strg.includes(".com") && strg.length > 6) {
    console.log("email ok")
    return true
  } else {
    console.log("email non corretta")
    return false
  }
}
isThisAnEmail("indirizzo@email.com")

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = () => {
  const date = new Date()
  let day = date.getDay()
  const weekDays = [
    "lunedì",
    "martedì",
    "mercoledì",
    "giovedì",
    "venerdì",
    "sabato",
    "domenica",
  ]
  return weekDays[day - 1]
}
console.log("il giorno corrente é:", whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = function (n) {
  const valuesObj = { values: [] }
  let sum = 0
  for (i = 0; i < n; i++) {
    numberToSum = dice()
    valuesObj.values.push(numberToSum)
    console.log(numberToSum, "sono da sommare")
    sum += numberToSum
  }
  valuesObj.sum = sum
  return valuesObj
}
console.log(rollTheDices(7), "funzione rollTheDices")

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = function (data) {
  const dataCorrente = new Date()
  let timestampData = new Date(data).getTime()
  let timestampDataCorrente = dataCorrente.getTime()
  let difference = timestampData - timestampDataCorrente
  let dayDiff = Math.ceil(difference / (1000 * 60 * 60 * 24))
  return dayDiff
}

console.log(howManyDays("2025-06-15"), "giorni di differenza")
// Esempio di utilizzo

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = function () {
  const birthday = new Date("June 9, 1994")
  const monthToCheck = birthday.getMonth() + 1
  const dayToCheck = birthday.getDate()
  const currentTime = new Date()
  const month = currentTime.getMonth() + 1
  const day = currentTime.getDate()
  if (monthToCheck === month && dayToCheck === day) {
    return true
  } else {
    return false
  }
}

console.log(isTodayMyBirthday(), "birthday check")

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const objectToModify = {
  prop1: "placeholder",
  "prop-2": "placeholder2",
  "prop-3": "placeholder3",
}
const deleteProp = function (obj, string) {
  delete obj[string]
}
deleteProp(objectToModify, "prop1")
console.log(objectToModify, "sono oggetto modificato ex 11")

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = (arr) => {
  let currentToPass = 10
  let newestFilm = null
  arr.forEach((movie) => {
    if (parseInt(movie.Year) > currentToPass)
      currentToPass = parseInt(movie.Year)
    newestFilm = movie
  })
  return newestFilm
}

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = (arr) => {
  counter = 0
  for (let i = 0; i < arr.length; i++) {
    counter++
  }
  return counter
}

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = (arr) => {
  const arrayOfYears = []
  arr.forEach((movie) => {
    arrayOfYears.push(movie.Year)
  })
  return arrayOfYears
}

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = (arr) => {
  const arrayOfLastMill = []
  arr.forEach((movie) => {
    if (parseInt(movie.Year) < 2000) {
      arrayOfLastMill.push(movie)
    }
  })
  return arrayOfLastMill
}

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = (arr) => {
  let counter = 0
  arr.forEach((movie) => {
    const numberToSum = parseInt(movie.Year)
    counter += numberToSum
  })
  return counter
}

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = (string) => {
  const founded = []
  movies.forEach((movie) => {
    let title = movie.Title
    title = title.toLowerCase()
    if (title.includes(string.toLowerCase())) {
      founded.push(movie)
    }
  })
  return founded
}

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (string) => {
  const match = []
  const unmatch = []
  movies.forEach((movie) => {
    let title = movie.Title
    title = title.toLowerCase()
    if (title.includes(string.toLowerCase())) {
      match.push(movie)
    } else {
      unmatch.push(movie)
    }
  })
  return [match, unmatch]
}

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = (n) => {
  movies.splice(n, 1)
  return movies
}

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const selectCont = () => {
  const selectedContainer = document.getElementById("container")
}
selectCont()

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const selectTag = () => {
  const allTdTag = document.querySelectorAll("td")
}
selectTag

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const logOfTd = () => {
  const allTdTag = document.querySelectorAll("td")
  for (let i = 0; i < allTdTag.length; i++) {
    const toStamp = allTdTag[i].innerText
    console.log(toStamp)
  }
}
logOfTd()
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const addBackgroundColor = () => {
  const allTheLink = document.querySelectorAll("a")
  allTheLink.forEach((a) => {
    a.style.backgroundColor = "red"
  })
}
addBackgroundColor()
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const ulList = document.getElementById("myList")
const addListElement = () => {
  const newLi = document.createElement("li")
  ulList.appendChild(newLi)
}
addListElement()
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const clearUl = () => {
  ulList.innerHTML = ``
}
clearUl()
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const addClass = () => {
  let allTrTag = document.getElementsByTagName("tr")
  console.log(allTrTag)
  allTrTag = Array.from(allTrTag)
  allTrTag.forEach((el) => {
    el.classList.add("test")
  })
}
addClass()
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const halfTree = (n) => {
  for (var i = 1; i <= n; i++) {
    console.log("* ".repeat(i))
  }
}
halfTree(15)
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

const tree = (n) => {
  let string = ""

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      string += " "
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      string += "*"
    }
    string += "\n"
  }
  console.log(string)
}

tree(14)

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(num) {
  if (num <= 1) return false
  if (num % 2 == 0 && num > 2) return false
  const s = Math.sqrt(num)
  for (let i = 3; i <= s; i += 2) {
    if (num % i === 0) return false
  }
  return true
}
console.log(isItPrime(2029), "numeri primi")

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]
console.log(newestMovie(movies), "sono il film più recente")
console.log(countMovies(movies), "film contenuto nell'array")
console.log(onlyTheYears(movies), "array degli anni")
console.log(onlyInLastMillennium(movies), "film usciti nello scorso millennio")
console.log(sumAllTheYears(movies), "conteggio totale degli anni")
console.log("Guarda i film che ho trovato", searchByTitle("endgame"))
// console.log(removeIndex(1))
console.log(
  "Film match",
  searchAndDivide("endgame")[0],
  "film unmatch:",
  searchAndDivide("endgame")[1]
)
