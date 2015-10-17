angular
  .module('textModule', [])
  .filter('cut', cutFilter);

//фильтр по обрезанию текста постов
function cutFilter(){
  return function (value, count) {

    //проверим корректность данных
    if (!value) return '';
    count = parseInt(count, 10);
    if (!count) return value;

    //обрежем, если нужно
    if (value.length < count) return value;
    value = value.substr(0, count);

    //проверим после обрезки последний ли пробел - если да - обрежем его! - так красивее
    var lastSpace = value.lastIndexOf(' ');
    if (lastSpace != -1) {
      value = value.substr(0, lastSpace);
    }

    return value + ' …';
  };
}
