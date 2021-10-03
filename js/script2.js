/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';



//1
const advertisment = document.querySelectorAll('.promo__adv img');
console.log(advertisment);
advertisment.forEach(item => {
    item.remove();
});



//2
const genre = document.querySelector ('.promo__genre');
console.log(genre);
genre.textContent = 'Драма';

//3
const bgpic = document.querySelector('.promo__bg');
bgpic.style.backgroundImage = "url('img/bg.jpg')";
// const bgpic = document.getElementsByClassName('promo__bg');
// function newBackGround (element,background) {
//     element.style.backgroundImage = "url("+background+")";
//  }
 
//  newBackGround (bgpic,"img/bg.jpg");
// console.log(bgpic);



//4+5
const filmList = document.querySelector('.promo__interactive-list');
console.log(filmList);

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

filmList.innerHTML = "";
movieDB.movies.sort();
console.log(movieDB.movies);
console.log(filmList[0]);



movieDB.movies.forEach((film, i) => {
        filmList.innerHTML += `
        <li class="promo__interactive-item">${i+1}. ${film} 
            <div class="delete"></div>
        </li>
        `;
});

// for (let i=0; i<filmList.length; i++){
//     filmList[i].textContent = `${i+1}. ${movieDB.movies[i]}`;
// }



