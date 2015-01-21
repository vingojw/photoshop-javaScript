fillOpacity       透明度
layerMaskDensity  填充
layerMaskFeather  羽化
vectorMaskDensity 矢量填充？
vectorMaskFeather 矢量羽化？
filterMaskDensity 滤镜的填充？
...
...

```javascript
	var originalRulerUnits = app.preferences.rulerUnits; // remember current setting
	app.preferences.rulerUnits = Units.PIXELS; // set Pixel for checking bounds

    var doc = app.activeDocument;
    var layers = doc.artLayers;
    var layer = layers[0];
    for (var i in layer){
        //console.log 没用  http://stackoverflow.com/questions/8545497/console-log-with-photoshop-scripting-extendedscript-toolkit
	  try{
	  	//打印第一个图层的所有属性键值对。
	    $.writeln (i + '_____' +layer[i] );//不知道为什么 layer[i]如果是 undefined 会报错，所以try一下
	  }catch(e){}
	}
	app.preferences.rulerunits = originalRulerUnits; // restore unit
```