



function updateBar(percent) {
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = percent + '%';
}


let progress = 0;
var num = parseInt(prompt("enter ur precentage"));
const interval = setInterval(() => {
    if (progress >= 100) {

        clearInterval(interval);
    } else {
    
        progress += num;
        updateBar(progress);
    }
}, 500); 