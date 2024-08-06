function myFunction() {
    document.getElementById('myButton').addEventListener('click', function() {
        var element = document.getElementById('sidebar');
        if (element.style.opacity === '0') {
        element.style.opacity = '1';
        } else {
        element.style.opacity = '0';
        }
    });
}

