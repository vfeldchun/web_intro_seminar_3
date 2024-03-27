let btn = document.querySelector(".btn");
btn.addEventListener("click", ShowName);

function ShowName() {
  let isGotName = false;
  var userName;

  while (!isGotName) {
    userName = prompt("Введите имя пользователя");
    // Если имя пользователя не соответсвует шаблону
    if (ValidateName(userName)) {
      isGotName = true;
    }
  }
  // Если не отмена то выводим имя пользователя
  if (userName != null) {
    PrintName(userName);
  }
}

function ValidateName(name) {
  // Проверка на шаблон
  // Имя пользователя может содержать буквы в латинице или кирилице, цифры и символ '_'
  return /^[a-zA-Zа-яА-Я0-9_]+$/.exec(name);
}

function PrintName(userName) {
  alert("Имя пользователя: " + userName);
}
