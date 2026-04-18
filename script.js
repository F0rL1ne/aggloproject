
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let random = getRandomInt(1, 100);
  console.log(random); 



  let input = document.getElementById('myInput')
  input.addEventListener('input', (click) => {
    console.log('Текущий текст:', event.target.value);
  });


  function getData() {
    input.value = input.value.replace(/[^0-9]/g, "");
    if (input.value === ""){
      document.getElementById('myInout').innerHTML = "Поле не должно быть пустым";
      return;
    }
    let numeric = document.getElementById('myInput').value;
    console.log('Текущий текст:', input.value);
    if (random > input.value){
           document.getElementById('myInout').innerHTML = "Итог - больше чем "+input.value
           return;
     
    }
    if (random < input.value){
        document.getElementById('myInout').innerHTML = "Итог - меньше чем "+input.value
        return;
 }
    if (random == input.value){
        document.getElementById('myInout').innerHTML = "Итог - победа "+input.value
        return;
}

 // Получение значения
  }



  const button = document.querySelector('#myButton');
  button.addEventListener('click', function() {
    getData();
  });

