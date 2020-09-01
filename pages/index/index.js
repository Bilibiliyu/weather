var amapFile = require('libs/amap-wx.js');
var util = require('../../utils/util.js')
Page({
  data: { 
    weatherData: '' 
  },
  onLoad: function() {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({key:'bdb6fe091556f2263c0ded2054195954'});
    myAmapFun.getWeather({
      success: function(data){
        //成功回调
        console.log(data)
        var weatherData = data; 
            weatherData = '城市：' + weatherData.city.data + '\n' + 
            '湿度：' + weatherData.humidity.data + '\n' +
            '日期：' + util.formatTime(new Date()) + '\n' + 
            '温度：' + weatherData.temperature.data + '\n' +
            '天气：' + weatherData.weather.data + '\n' +
            '风力：' + weatherData.windpower.data + '\n'; 
            that.setData({ 
                weatherData: weatherData 
            }); 
      },
      fail: function(info){
        //失败回调
        console.log(info)
      }
    })
  }
})