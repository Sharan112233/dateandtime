//full time
var b1 = document.getElementById('b1')
b1.addEventListener('click', function t1() {
    var time = new Date()
    var box = document.getElementById('box').innerHTML = `${time}`;
    setInterval(t1,1000);
});


//only year
var b2 = document.getElementById('b2')
b2.addEventListener('click', function t2() {
    var time = new Date()
    var year = time.getFullYear()
    var box = document.getElementById('box').innerHTML = `${year}`;
    setInterval(t2,1000);

});

//only month
var b3 = document.getElementById('b3')
b3.addEventListener('click', function t3() {
    var time = new Date()
    var month = time.getMonth()
    var box = document.getElementById('box').innerHTML = `${month}`;
    setInterval(t3,1000);
});


//only time  HH:MM:SS
var b4 = document.getElementById('b4')
b4.addEventListener('click', function t4() {
    var time = new Date()
    var full = time.getHours()
    var min = time.getMinutes()
    var sec = time.getSeconds()
    var box = document.getElementById('box').innerHTML = `${full}:${min}:${sec}`;
    setInterval(t4,1000);
});

//ddmmyyy format
var b5 = document.getElementById('b5')
b5.addEventListener('click', function t5() {
    var time = new Date().toLocaleDateString()
    var box = document.getElementById('box').innerHTML = `${time}`;
    setInterval(t5,1000);
});

//only date
var b6 = document.getElementById('b6')
b6.addEventListener('click', function t6() {
    var time = new Date()
    var day = time.getDate()
    var box = document.getElementById('box').innerHTML = `${day}`;
  var timeout= setInterval(t6,1000);

});
