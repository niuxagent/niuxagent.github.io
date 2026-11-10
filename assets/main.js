// NiuxAgent 官网 · 移动端导航开关（无其他逻辑）
(function () {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('nav.main');
  if (!burger || !nav) return;
  burger.addEventListener('click', function () {
    nav.classList.toggle('open');
  });
})();
