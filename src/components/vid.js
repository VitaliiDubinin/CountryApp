window.myWidgetParam ? window.myWidgetParam : (window.myWidgetParam = []);
window.myWidgetParam.push({
  id: 15,
  cityid: "643492",
  appid: "7ba6687b19a6e5271e98d0f410014678",
  units: "metric",
  containerid: "openweathermap-widget-15",
});
(function () {
  var script = document.createElement("script");
  script.async = true;
  script.charset = "utf-8";
  script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(script, s);
})();
