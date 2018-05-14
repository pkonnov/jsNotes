function close(){
	document.getElementById('myModal').style.display='none';
};

var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');

img.onclick = function(){
	modal.style.display = 'block';
	modalImg.src = this.src; //получаем ссылку на изображение по которому кликаем
	captionText.innerHTML = this.alt; //получаем описание(alt) изображения по которому кликаем
}

var span = document.getElementsByClassName('close')[0];
span.onclick = function(){
	modal.style.display = 'none';
}
