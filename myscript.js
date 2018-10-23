
let btnCounter = 0;
let btn = document.getElementById('btn');
 
btn.addEventListener('click', function () {
let newRequest = new XMLHttpRequest();
newRequest.open('GET', 'pictures.json');
newRequest.onload = function () {
    let myData = JSON.parse(newRequest.responseText);
    console.log(myData[0].src);
    let newpic = myData[btnCounter].src;
    document.getElementById('emoji').src = newpic;
    btnCounter += 1;
    if (btnCounter > myData.length-1){
        btnCounter = 0;
    }
}
newRequest.send();
} );


