var myImage = document.querySelector('img');
myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/img1.jpeg'){
        myImage.setAttribute('src', 'images/img2.jpeg');
    } else {
        myImage.setAttribute('src', 'images/img1.jpeg')
    }
}