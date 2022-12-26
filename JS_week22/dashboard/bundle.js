(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const ctx = document.getElementById('myChart-1');
const ctx2 = document.getElementById('myChart-2');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Пн', 'Вт', 'Ср', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
        datasets: [{
            label: 'Количество часов работы в день',
            data: [8, 9, 10, 7, 8, 9, 2, 4],
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: [
            'Сон',
            'Работа',
            'Учеба',
            'Спорт',
            'Семья'
        ],
        datasets: [{
            label: 'Моя дневная активность',
            data: [150, 50, 200, 55, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(0, 255, 102)',
                'rgb(192, 192, 192)'
            ],
            hoverOffset: 4
        }]
    }
});

const ctxFirst = document.getElementById('myChart-3').getContext('2d');

let dataJsonFirst = `{
    "labels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    "label": "Учебный процесс",
    "data": [133, 198, 320, 591, 520, 354, 632]
}`
let objDataFirst = JSON.parse(dataJsonFirst);

const myChartFirst = new Chart(ctxFirst, {
    type: 'line',

    data: {
        labels: objDataFirst.labels,
        datasets: [{
            label: objDataFirst.label,
            data: objDataFirst.data,
            fill: 'origin',
            backgroundColor: [
                'rgba(8, 69, 166, 0.8)'],
            borderColor: [
                'rgba(23, 131, 241, 1)',
            ],
            tension: 0.4,
            borderWidth: 2
        }]
    }
});


},{}]},{},[1]);
