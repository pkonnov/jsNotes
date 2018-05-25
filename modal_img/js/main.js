var modal = document.getElementById('myModal');
var img = document.getElementsByClassName('myImg');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById("caption");

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

for (var i = 0; i < img.length; i++) {
    img[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
}
//получить список всех изображений и ходить по ним в модальном окне
