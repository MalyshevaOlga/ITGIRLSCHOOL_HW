const button = document.getElementById('button');
function buttonClick () {
   getActivity ();
}

function getActivity () {
    fetch('http://www.boredapi.com/api/activity/')
    .then(response => response.json())
    .then(activity => {
        console.log(activity);
        document.querySelector('.activity').innerText = activity.activity;
        document.querySelector('.type').innerText = activity.type;
        document.querySelector('.href').innerText = activity.link;
    })
}