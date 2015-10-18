angular
  .module('textModule', [])
  .filter('cut', cutFilter);

//фильтр по обрезанию текста постов
function cutFilter(){
  // если применить с доп пораметром 'value | cut:50' - обрежет 50
  return function (value, count) {

    if (!value) return '';
    count = parseInt(count, 10);
    //если доп параметр не получен или некорректный - установим его в 100! по умолчанию/заданию
    if (!count) count = 100;

    //обрежем, если нужно
    if (value.length < count) return value;
    value = value.substr(0, count);

    return value + '…';
  };
}
