
var _P = _P || {};
_P.wh = 200;
var qrcodejs = require('qrcodejs');
_P.fs = require('fs');
_P.Canvas = require('canvas');
_P.Image = _P.Canvas.Image;
_P.canvas = new _P.Canvas.Canvas(200, 200);
_P.ctx = _P.canvas.getContext('2d');

_P.App={
    //
    init: function(){
      qrcodejs = new QRCode(_P.canvas, {
      	"width" : _P.wh,
      	"height" : _P.wh
      });
      this.qrcode.makeCode("abc");
      var imgD = _P.canvas.toDataURL().replace(/^data:image\/\w+;base64,/, "");
    _P.fs.writeFile("img/"+"abc"+'.png', imgD, 'base64', function(err){
      if(!err){
        console.log("complete");
      }else{
        console.log(err);
      }
    })
  }
}


_P.App.init();
