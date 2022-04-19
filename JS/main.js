let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", ""); //создал переменную, записаl в неё ответ на вопрос пользователя
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    //пока строка пустая, либо null(если юзер нажал "Отмена"), либо не является числом
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", ""); //будет постоянно задаваться этот вопрос
  }
}

start();

const personalMovieDB = {
  //создал объект и записал в него различные свойства
  count: numberOfFilms,
  movies: {}, //просто пустой объект в свойстве
  actors: {},
  genres: [], //пустой массив в свойстве
  privat: false,
};

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(
      `Ваш любимый жанр под номером ${i + 1}?`,
      ""
    );
  }
}
writeYourGenres();

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Последний просмотренный Вами фильм?", ""),
      b = prompt("На сколько оцените его?", "");
    if (
      a != "" &&
      b != "" &&
      a != null &&
      b != null &&
      a.length < 50 &&
      b.length < 50
    ) {
      personalMovieDB.movies[a] = b; //если а объявить через ".а", то браузер может не понять, что это переменная с вопросом, а в квадратных скобках - понимает, лучше использовать так
    } else {
      i--;
    }
  }
}
/* rememberMyFilms(); */

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Очень мало фильмов вы смотрели");
  } else if (personalMovieDB.count > 50) {
    console.log("Вы настоящий киноман!");
  } else {
    console.log("Вы среднестатистический и примитивный");
  }
}
/* detectPersonalLevel(); */
