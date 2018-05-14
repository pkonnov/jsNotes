var tab;
var tabContent;
var i;


window.onload = function() { //при загрузке выполняем эту функцию
  tabContent = document.getElementsByClassName('tabContent');
  tab = document.getElementsByClassName('tab');
  hideTabsContent(1);
}

function hideTabsContent (a) {
  for (i = a; i < tabContent.length; i++) {//перебераем все табы
    tabContent[i].classList.remove('show'); // скрываем их
    tabContent[i].classList.add('hide');
    tab[i].classList.remove('whiteborder'); //удаляем у елемента класс whiteborder
  }
}

function showTabsContent (b) {
  if (tabContent[b].classList.contains('hide')){//если у полученного таба есть класс hide
    hideTabsContent(0);// то скрываем его
    tab[b].classList.add('whiteborder');// добавляем номеру вкладки .whiteborder
    tabContent[b].classList.remove('hide'); //показываем таб по которому кликнули
    tabContent[b].classList.add('show');
  }
}

document.getElementById('tabs').onclick = function (event) {//проверям все элементы из tabs на клик
  var target = event.target; // отслеживаем клик
  if (target.className == 'tab'){//если элемент имеет класс tab то запускаем цикл
    for (i = 0; i < tab.length; i++) {//перебираем все элементы tab
      if(target == tab[i]){//находим элемент по которому кликнули
        showTabsContent(i);//показываем этот элемент
        break;
      }
    }
  }
}
