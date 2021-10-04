/*
--1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
--2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
--4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
--5) Фильмы должны быть отсортированы по алфавиту */

'use strict';
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const inputMovie = document.querySelector('.promo__interactive .add input');
const checkbox = document.getElementById('favourite');







//4
checkbox.addEventListener('click', (e) => {
    if (checkbox.checked == true){
        console.log ("Добавляем любимый фильм");
        }
});


//1 2 5
const btn = document.querySelector('.promo__interactive .add button');

//123456789012345678901234567890
//aaaaaaaaalaaaaaaaaalaaaaaaaaaal

btn.addEventListener('click', (e) => {
        e.preventDefault;
        if (inputMovie.value.length > 20){
            inputMovie.value = inputMovie.value.slice(0, 21) + '...';
            movieDB.movies.push(inputMovie.value);
        }else if (inputMovie.value.length == "") {
            console.log('pusto');
        }else {
            movieDB.movies.push(inputMovie.value);
        }          
        
        addMovieToWatched();

        console.log(inputMovie.value);
        console.log(movieDB.movies);



});

const addMovieToWatched = () => {
    filmList.innerHTML = "";
    movieDB.movies.sort().forEach((film, i) => {
        filmList.innerHTML += `
        <li class="promo__interactive-item">${i+1}. ${film} 
            <div class="delete"></div>
        </li>
        `;
    });

};

/////////////////////////////////////////////////////////////////////
//1 Убираем рекламу
const advertisment = document.querySelectorAll('.promo__adv img');
advertisment.forEach(item => {
    item.remove();
});

//2 Меняем жанра комедия на драму
const genre = document.querySelector ('.promo__genre');
genre.textContent = 'Драма';

//3 Меняем фон
const bgpic = document.querySelector('.promo__bg');
bgpic.style.backgroundImage = "url('img/bg.jpg')";
// const bgpic = document.getElementsByClassName('promo__bg');
// function newBackGround (element,background) {
//     element.style.backgroundImage = "url("+background+")";
//  }
 
//  newBackGround (bgpic,"img/bg.jpg");
// console.log(bgpic);



//4+5 Сортировка и нумерация списка просмотренных
const filmList = document.querySelector('.promo__interactive-list');


filmList.innerHTML = "";
movieDB.movies.sort();


movieDB.movies.forEach((film, i) => {
        filmList.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${film}
            <div class="delete"></div>
        </li>
        `;
});

// for (let i=0; i<filmList.length; i++){
//     filmList[i].textContent = `${i+1}. ${movieDB.movies[i]}`;
// }

//3
console.log(movieDB.movies);

const watchedMovies = document.getElementsByClassName('promo__interactive-item');
console.log(watchedMovies);

