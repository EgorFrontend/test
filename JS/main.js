const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", ""); //создал переменную, записа в неё ответ на вопрос пользователя

const personalMovieDB = {
  //создал объект и записал в него различные свойства
  count: numberOfFilms,
  movies: {}, //просто пустой объект в свойстве
  actors: {},
  genres: [], //пустой массив в свойстве
  privat: false,
};

const a = prompt("Последний просмотренный Вами фильм?", ""),
  b = prompt("На сколько оцените его?", ""),
  c = prompt("Последний просмотренный Вами фильм?", ""),
  d = prompt("На сколько оцените его?", "");

personalMovieDB.movies.a = b; //при такой форме записи консоль не понимет, что "а" - это переменная с вопросом о последнем просмотренном фильме
personalMovieDB.movies[c] = d; //а в квадратных скобках - понимает, лучше использовать так

console.log(personalMovieDB);
