var elem = document.getElementById('phone');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = IMask(elem, maskOptions);

var numberMask = IMask(
    document.getElementById('course'), {
      mask: Number,
      min: 1,
      max: 15,
      thousandsSeparator: ' '
});