//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
function filters() {
  var input, filter, ul, li, a, i;//определяем переменные
  input = document.getElementById('myInput');//получаем инпут с ид myInput
  filter = input.value.toUpperCase();//получаем введенные символы и приводим в верхний регистр для удобства поиска
  ul = document.getElementById('myUL');// получаем атрибут ul
  li = ul.getElementsByTagName('li');// получаем весь список тегов li из атрибута ul
  for (i=0; i < li.length; i++){//перебираем все элементы списка
    a = li[i].getElementsByTagName('a')[0];//получаем 1ую ссылку из li
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {//получаем содержимое тега 'a', приводим в верхний регистр ..
    // итерируемся по символам которые вытащили из тега 'a' и если такие есть то показываем
      li[i].style.display = '';
    }
    else{// если нет то скрываем этот тег
      li[i].style.display = 'none';
    }
  }
}
