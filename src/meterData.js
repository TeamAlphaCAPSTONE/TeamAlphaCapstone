import {findDOMNode} from 'react-dom';
import $ from 'jquery';
import './meter.css';

var dial = $(".dial .inner");
var dial1=$("xyz").attr("id");
console.log("hiiii there"+dial1);
	var gauge_value = $(".gauge .value");
console.log(dial);
console.log(gauge_value)
		function rotateDial()
		{
			var value = 50;
			var deg;
			//var value = Math.round(Math.random()*100);
			deg = (value * 177.5) / 100;
			
            gauge_value.html(value + "%"+ deg);
            

			dial.css({'transform': 'rotate('+deg+'deg)'});
		    dial.css({'-ms-transform': 'rotate('+deg+'deg)'});
		    dial.css({'-moz-transform': 'rotate('+deg+'deg)'});
		    dial.css({'-o-transform': 'rotate('+deg+'deg)'}); 
		    dial.css({'-webkit-transform': 'rotate('+deg+'deg)'});
		}

        setInterval(rotateDial, 2500);
