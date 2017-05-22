var ts = .4;

function startFunction()
{
		TweenLite.set("#explosion", {alpha:.6,scale:.3});
		TweenLite.set("#text", {alpha:0,scale:1.1});
		TweenLite.set("#price", {alpha:0,scale:0.6});
		TweenLite.set("#logo", {alpha:0});
	TweenLite.set("#explosion2", {alpha:0,scale:.3});
	TweenLite.set("#explosion3", {alpha:0,scale:.3});
	TweenLite.set("#price1", {alpha:0,scale:0.6});
	TweenLite.set("#price2", {alpha:0,scale:0.6});
	TweenLite.set("#pack1", {alpha:0,scale:1.1});
	TweenLite.set("#pack2", {alpha:0,scale:1.1});
	TweenLite.set("#textfinal", {alpha:0,scale:1.1});
	TweenLite.set("#cta", {alpha:0});
step2();

}


function step2()
{
		TweenLite.to("#explosion", ts*3, {alpha:1,scale:1, ease:Linear.easeNone});
		TweenLite.to("#text", ts*3, {delay:0.2,alpha:1,scale:1});
		TweenLite.to("#price", ts*3, {delay:0.2,alpha:1,scale:1});
		TweenLite.to("#logo", ts, {alpha:1});
		TweenLite.delayedCall(ts*3, step3);
}

function step3()
{
	TweenLite.to("#explosion", ts*4, {alpha:1,scale:1.3, ease:Linear.easeNone});
	TweenLite.delayedCall(ts*4, step4);
}

function step4()
{
	TweenLite.to("#text", ts, {alpha:0});
	TweenLite.to("#price", ts, {alpha:0, scale:1.4});
	TweenLite.to("#explosion", ts, {alpha:0,scale:1.4, ease:Linear.easeNone});
	TweenLite.to("#logo", ts, {alpha:0});
	TweenLite.to("#explosion2", ts*3, {alpha:1,scale:1, ease:Linear.easeNone});
	TweenLite.to("#price1", ts*3, {delay:0.2,alpha:1,scale:1});
	TweenLite.to("#pack1", ts*3, {delay:0.2,alpha:1,scale:1});
	TweenLite.delayedCall(ts*3, step5);

}
function step5()
{TweenLite.set("#explosion", {scale:.3});
	TweenLite.to("#explosion2", ts*4, {alpha:1,scale:1.2, ease:Linear.easeNone});
	TweenLite.delayedCall(ts*4, step6);
}
function step6(){
	TweenLite.to("#pack1", ts, {alpha:0});
	TweenLite.to("#price1", ts, {alpha:0, scale:1.4});
	TweenLite.to("#explosion2", ts, {alpha:0,scale:1.3, ease:Linear.easeNone});
	TweenLite.to("#explosion3", ts*3, {alpha:1,scale:1, ease:Linear.easeNone});
	TweenLite.to("#price2", ts*3, {delay:0.2,alpha:1,scale:1});
	TweenLite.to("#pack2", ts*3, {delay:0.2,alpha:1,scale:1});
	TweenLite.delayedCall(ts*3, step7);
}
function step7()
{
	TweenLite.to("#explosion3", ts*4, {alpha:1,scale:1.2, ease:Linear.easeNone});
	TweenLite.delayedCall(ts*4, step8);
}
function step8(){
	TweenLite.to("#pack2", ts, {alpha:0});
	TweenLite.to("#price2", ts, {alpha:0, scale:1.4});
	TweenLite.to("#explosion3", ts, {alpha:0,scale:1.3, ease:Linear.easeNone, onComplete:step9});
	TweenLite.to("#explosion", ts*3, {alpha:1,scale:1, ease:Linear.easeNone});

}

function step9(){
	TweenLite.to("#explosion", ts*4, {alpha:1,scale:1.3, ease:Linear.easeNone,onComplete:Stepexp});
	TweenLite.to("#textfinal", ts*3, {delay:0.2,alpha:1,scale:1});
	TweenLite.to("#cta", ts*3, {delay:0.2,alpha:1,onComplete:popup});
}
function popup(){
				TweenLite.to("#cta", .3,{scale:1.1,delay:.5, ease:Linear.easeOut, onComplete:popup2 });

		}
	function popup2(){
			TweenLite.to("#cta", .3,{scale:1, ease:Linear.easeIn});
		}
function Stepexp(){
	TweenLite.to("#explosion", ts*8, {scale:1.5, ease:Linear.easeNone});
}
/*
, onComplete:steploop
function steploop(){
	TweenLite.set("#explosion", {alpha:.6,scale:.3});
		TweenLite.set("#text", {alpha:0,scale:1.1});
		TweenLite.set("#price", {alpha:0,scale:0.6});
		TweenLite.set("#logo", {alpha:0});
step2();
}*/
startFunction();
