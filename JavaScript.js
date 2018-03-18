var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);


    var colors = ['blue', 'green', 'red', 'purple'];
var index = 0;

function myfunction() {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
}
document.addEventListener('click', myfunction);
