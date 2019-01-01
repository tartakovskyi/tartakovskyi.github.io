'use strict';

var form = $('#contactForm');
form.on('submit', function (e) {
  e.preventDefault();
});
var servicesTexts = $('.grid-item__text');
console.log(servicesTexts);
servicesTexts.map = [].map;
servicesTexts.forEach = [].forEach;
var arr = servicesTexts.map(function (el) {
  var a = el.innerText.split('');
  if (a.length < 85) return el.innerText;
  var newA = a.slice(0, 85);
  var index = newA.lastIndexOf(' ');
  return newA.slice(0, index).join('') + '...';
});
servicesTexts.forEach(function (el, idx) {
  el.innerText = arr[idx];
}); // Height of text blocks in the Services section

var $servicesTextHeight = 0;
$('.grid-item__text').each(function () {
  if ($(this).height() > $servicesTextHeight) {
    $servicesTextHeight = $(this).height();
  }
});
$('.grid-item__text').height($servicesTextHeight);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJmb3JtIiwiJCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VydmljZXNUZXh0cyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJmb3JFYWNoIiwiYXJyIiwiZWwiLCJhIiwiaW5uZXJUZXh0Iiwic3BsaXQiLCJsZW5ndGgiLCJuZXdBIiwic2xpY2UiLCJpbmRleCIsImxhc3RJbmRleE9mIiwiam9pbiIsImlkeCIsIiRzZXJ2aWNlc1RleHRIZWlnaHQiLCJlYWNoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQSxJQUFNQSxJQUFJLEdBQUdDLENBQUMsQ0FBQyxjQUFELENBQWQ7QUFDQUQsSUFBSSxDQUFDRSxFQUFMLENBQVEsUUFBUixFQUFrQixVQUFDQyxDQUFELEVBQU87QUFDeEJBLEVBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLENBRkQ7QUFJQSxJQUFNQyxhQUFhLEdBQUdKLENBQUMsQ0FBQyxrQkFBRCxDQUF2QjtBQUVBSyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsYUFBWjtBQUlBQSxhQUFhLENBQUNHLEdBQWQsR0FBb0IsR0FBR0EsR0FBdkI7QUFDQUgsYUFBYSxDQUFDSSxPQUFkLEdBQXdCLEdBQUdBLE9BQTNCO0FBRUEsSUFBTUMsR0FBRyxHQUFHTCxhQUFhLENBQUNHLEdBQWQsQ0FBa0IsVUFBQUcsRUFBRSxFQUFJO0FBQ25DLE1BQUlDLENBQUMsR0FBR0QsRUFBRSxDQUFDRSxTQUFILENBQWFDLEtBQWIsQ0FBbUIsRUFBbkIsQ0FBUjtBQUNBLE1BQUdGLENBQUMsQ0FBQ0csTUFBRixHQUFXLEVBQWQsRUFBa0IsT0FBT0osRUFBRSxDQUFDRSxTQUFWO0FBQ2xCLE1BQUlHLElBQUksR0FBR0osQ0FBQyxDQUFDSyxLQUFGLENBQVEsQ0FBUixFQUFXLEVBQVgsQ0FBWDtBQUNBLE1BQUlDLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxXQUFMLENBQWlCLEdBQWpCLENBQVo7QUFDQSxTQUFPSCxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFYLEVBQWNDLEtBQWQsRUFBcUJFLElBQXJCLENBQTBCLEVBQTFCLElBQWdDLEtBQXZDO0FBRUEsQ0FQVyxDQUFaO0FBV0FmLGFBQWEsQ0FBQ0ksT0FBZCxDQUFzQixVQUFDRSxFQUFELEVBQUtVLEdBQUwsRUFBYTtBQUNsQ1YsRUFBQUEsRUFBRSxDQUFDRSxTQUFILEdBQWVILEdBQUcsQ0FBQ1csR0FBRCxDQUFsQjtBQUNBLENBRkQsRSxDQUtBOztBQUNBLElBQUlDLG1CQUFtQixHQUFHLENBQTFCO0FBRUFyQixDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQnNCLElBQXRCLENBQTJCLFlBQVc7QUFDckMsTUFBSXRCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXVCLE1BQVIsS0FBbUJGLG1CQUF2QixFQUE0QztBQUFDQSxJQUFBQSxtQkFBbUIsR0FBR3JCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXVCLE1BQVIsRUFBdEI7QUFBdUM7QUFDcEYsQ0FGRDtBQUlBdkIsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0J1QixNQUF0QixDQUE2QkYsbUJBQTdCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5jb25zdCBmb3JtID0gJCgnI2NvbnRhY3RGb3JtJyk7XHJcbmZvcm0ub24oJ3N1Ym1pdCcsIChlKSA9PiB7XHJcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbmNvbnN0IHNlcnZpY2VzVGV4dHMgPSAkKCcuZ3JpZC1pdGVtX190ZXh0Jyk7XHJcblxyXG5jb25zb2xlLmxvZyhzZXJ2aWNlc1RleHRzKTtcclxuXHJcblxyXG5cclxuc2VydmljZXNUZXh0cy5tYXAgPSBbXS5tYXA7XHJcbnNlcnZpY2VzVGV4dHMuZm9yRWFjaCA9IFtdLmZvckVhY2g7XHJcblxyXG5jb25zdCBhcnIgPSBzZXJ2aWNlc1RleHRzLm1hcChlbCA9PiB7XHJcblx0bGV0IGEgPSBlbC5pbm5lclRleHQuc3BsaXQoJycpO1xyXG5cdGlmKGEubGVuZ3RoIDwgODUpIHJldHVybiBlbC5pbm5lclRleHQ7XHJcblx0bGV0IG5ld0EgPSBhLnNsaWNlKDAsIDg1KTtcclxuXHRsZXQgaW5kZXggPSBuZXdBLmxhc3RJbmRleE9mKCcgJyk7XHJcblx0cmV0dXJuIG5ld0Euc2xpY2UoMCwgaW5kZXgpLmpvaW4oJycpICsgJy4uLic7XHJcblx0XHJcbn0pXHJcblxyXG5cclxuXHJcbnNlcnZpY2VzVGV4dHMuZm9yRWFjaCgoZWwsIGlkeCkgPT4ge1xyXG5cdGVsLmlubmVyVGV4dCA9IGFycltpZHhdO1xyXG59KTtcclxuXHJcblxyXG4vLyBIZWlnaHQgb2YgdGV4dCBibG9ja3MgaW4gdGhlIFNlcnZpY2VzIHNlY3Rpb25cclxubGV0ICRzZXJ2aWNlc1RleHRIZWlnaHQgPSAwO1xyXG5cclxuJCgnLmdyaWQtaXRlbV9fdGV4dCcpLmVhY2goZnVuY3Rpb24oKSB7XHRcclxuXHRpZiAoJCh0aGlzKS5oZWlnaHQoKSA+ICRzZXJ2aWNlc1RleHRIZWlnaHQpIHskc2VydmljZXNUZXh0SGVpZ2h0ID0gJCh0aGlzKS5oZWlnaHQoKX1cclxufSk7XHJcblxyXG4kKCcuZ3JpZC1pdGVtX190ZXh0JykuaGVpZ2h0KCRzZXJ2aWNlc1RleHRIZWlnaHQpOyJdLCJmaWxlIjoic2NyaXB0LmpzIn0=