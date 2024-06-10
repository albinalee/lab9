<p align = "center">МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ<br>
РОССИЙСКОЙ ФЕДЕРАЦИИ<br>
ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ<br>
ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ<br>
«САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</p>
<br><br><br><br><br><br>
<p align = "center">Институт естественных наук и техносферной безопасности<br>Кафедра информатики<br>Ли Альбина Тевоновна</p>
<br><br><br>
<p align = "center"><br><strong>Лабораторная работа №9. «JS»</strong><br>01.03.02 Прикладная математика и информатика</p>
<br><br><br><br><br><br><br><br><br><br><br><br>
<p align = "right">Научный руководитель<br>
Соболев Евгений Игоревич</p>
<br><br><br>
<p align = "center">г. Южно-Сахалинск<br>2024 г.</p>
<br><br><br><br><br><br><br><br><br><br><br><br>

<h1 align = "center">Введение</h1>

<p><b>Веб-разработка</b> — процесс создания веб-сайта или веб-приложения. Основными этапами процесса являются: </p>

<ul>
<li>Проектирование сайта или веб-приложения (сбор и анализ требований, разработка технического задания, проектирование интерфейсов);</li>
<li>Создание дизайн-концепции сайта;</li>
<li>Создание страниц;</li>
<li>Программирование;</li>
<li>Оптимизация и размещение материалов сайта;</li>
<li>Тестирование и внесение корректировок;</li>
<li>Публикация проекта на хостинге;</li>
<li>Обслуживание работающего сайта.</li>
</ul>

<br>

<h1 align = "center">Цели и задачи</h1>


<p>Цель: ознакомиться с принципами работы в JavaScript.</p>

<p>Задачи:</p>

<ul>
<li>Изучить синтаксис JavaScript</li>
<li>Научиться форматированию элементов c подключением скриптов</li>
</ul>

<p></p>

<h1 align = "center">Решение</h1>

<p>Для выполнения этой лабораторной работы, я пользовалась лекционным материалом и интернет-ресурсами для поиска решений задач оформления и для поиска медиаресурсов:</p>

<ul>
<li><a href="https://youtube.com/">YouTube</a></li>
<li><a href="https://stackoverflow.com/">Stack Overflow</a></li>
</ul>

<p>Примеры кода:</p>
<code>class Tree {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
}
function TreeSum(root) {
    if (!root) return 0;
    let sum = root.value;
    root.children.forEach (child => {
        sum += TreeSum(child);
    })
    return sum;
}
function getSum() {
    let root = new Tree(1);
    let child1 = new Tree(2);
    let child2 = new Tree(3);
    let subChild1 = new Tree(4);
    let subChild2 = new Tree(5);
    root.children.push(child1);
    root.children.push(child2);
    child1.children.push(subChild1);
    child2.children.push(subChild2);
    console.log(TreeSum(root));
}
function drawCircle() {
    var circle = document.getElementById("half_circle");
    var child = document.createElement('div');
    child.style.margin = "auto"
    child.style.width = 200 + "px";
    child.style.height = 100 + "px";
    child.style.backgroundColor = "white";
    child.style.borderTopLeftRadius = 110 + "px"; 
    child.style.borderTopRightRadius = 110 + "px"; 
    child.style.border = 10 + "px solid gray";
    child.style.borderBottom = 0;
    circle.appendChild(child);
}
function sortDate(type) {
    var date = [
        new Date(2022, 3, 30),
        new Date(2023, 6, 26),
        new Date(2021, 2, 24),
        new Date(),
    ];
    if (type == 'asc') {
        date.sort((a,b) => (a < b ? -1 : 1));
    } else if (type == 'desc') {
        date.sort((a,b) => (a < b ? 1 : -1));
    }
    for (let i = 0; i < date.length; i++) {
        console.log(date[i].getFullYear() + '/' + (date[i].getMonth() + 1) + '/' + date[i].getDate());
    }
}
function anagrams(words) {
    for (let i = 0; i < words.length - 1; i++) {
        if (!anagram(words[i], words[i + 1])) {
            console.log('false');
            return;
        }
    }
    console.log('true');
}
function anagram(wordA, wordB) {
    let charA = [];
    let charB = [];
    if (wordA.length != wordB.length) return false;
    for (let i = 0; i < wordA.length; i++) {
        charA.push(wordA[i]);
        charB.push(wordB[i]);
    }
    charA.sort();
    charB.sort();
    for (let i = 0; i < charA.length; i++) {
        if (charA[i] != charB[i]) return false;
    }
    return true;
}
function missing() {
    let array = removeOne(rndArray());
    array.sort((a, b) => { return a - b;});
    console.log(array);
    for (let i = 0; i < 100; i++) {
        if (i + 1 != array[i]) {
            console.log((i + 1) + ' is missing');
            return;
        }
    }
}
function removeOne(array) {
    array.splice(7, 1);
    console.log(array);
    return array;
}
function rndArray() {
    let array = [];
    for (let i = 1; i <= 100; i++) {
        array.push(i);
    }
    for (let i = 0; i < 100; i++) {
        let A = Math.floor(Math.random() * 100);
        let B = Math.floor(Math.random() * 100);
        let tmp = array[A];
        array[A] = array[B];
        array[B] = tmp;
    }
    console.log(array);
    return array;
}</code>
</br></br>
<h1 align = "center">Вывод</h1>
<p>В результате проделанной лабораторной работы, я познакомилась с новыми элементами языка JavaScript и попрактиковалась в решении задач.</p>
