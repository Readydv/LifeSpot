let elements = document.getElementsByTagName('*');
alert(`Количество элементов на странице: ${elements.length}`);

const saveInput = function () {
    let currentInput = document.getElementsByTagName('input')[0].value.toLowerCase();

    alert('Последний ввод: ' + this.lastInput + '\n' + 'Текущий ввод: ' + currentInput);

    this.lastInput = currentInput;
}