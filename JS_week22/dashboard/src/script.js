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

