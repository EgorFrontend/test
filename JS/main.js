const personalMovieDB = {
  //создал объект и записал в него различные свойства
  count: 0,
  movies: {}, //просто пустой объект в свойстве
  actors: {},
  genres: [], //пустой массив в свойстве
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", ""); //создал переменную, записаl в неё ответ на вопрос пользователя
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      //пока строка пустая, либо null(если юзер нажал "Отмена"), либо не является числом
      personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", ""); //будет постоянно задаваться этот вопрос
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    /*     for (let i = 0; i < 3; i++) {
      personalMovieDB.genres[i] = prompt(
        `Ваш любимый жанр под номером ${i + 1}?`,
        ""
      );
      while (
        personalMovieDB.genres[i] === "" ||
        personalMovieDB.genres[i] === null
      ) {
        personalMovieDB.genres[i] = prompt(
          `Ваш любимый жанр под номером ${i + 1}?`,
          ""
        );
      }
    } */ //Закомменированный вариант рабочий, а ниже используем другой:
    for (let i = 1; i < 2; i++) {
      genres = prompt(
        `Введите через запятую ваши любимые жанры фильмов`,
        ""
      ).toLowerCase; // перевели всё в нижний регистр, чтобы в дальнейшм сортировка прошла успешно, ведь .sort на первые строки ставит заглавные буквы
      if (genres === "" || genres === null) {
        console.log("Вы не ввели данные");
        i--;
      } else {
        personalMovieDB.genres = genres.split(", "); //Записали в массив данные пользователя, разделив строку сплитом
        personalMovieDB.genres.sort(); //отсортировал жанры по алфавиту по-приколу
      }
    }
    personalMovieDB.genres.forEach(function (item, index) {
      console.log(`Любимый жанр №${index + 1} - это ${item}`);
    });
  },
  rememberMyFilms: function () {
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
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Очень мало фильмов вы смотрели");
    } else if (personalMovieDB.count > 50) {
      console.log("Вы настоящий киноман!");
    } else {
      console.log("Вы среднестатистический кинолюбитель");
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};
