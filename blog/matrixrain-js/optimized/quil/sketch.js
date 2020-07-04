// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.events.EventType');
Processing.disableInit();
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$java2d,(Processing.prototype.PConstants["JAVA2D"]),cljs.core.cst$kw$p2d,(Processing.prototype.PConstants["P2D"]),cljs.core.cst$kw$p3d,(Processing.prototype.PConstants["P3D"]),cljs.core.cst$kw$opengl,(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
});
quil.sketch.set_size = (function quil$sketch$set_size(applet,width,height){
var el = applet.quil_canvas;
el.setAttribute("width",width);

el.setAttribute("height",height);

applet.width = window.parseInt(goog.style.getComputedStyle(el,"width"));

return applet.height = window.parseInt(goog.style.getComputedStyle(el,"height"));
});
quil.sketch.size = (function quil$sketch$size(var_args){
var G__5473 = arguments.length;
switch (G__5473) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().size((width | (0)),(height | (0)),quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__5475 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseScrolled,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__5476 = null;
var count__5477 = (0);
var i__5478 = (0);
while(true){
if((i__5478 < count__5477)){
var vec__5479 = chunk__5476.cljs$core$IIndexed$_nth$arity$2(null,i__5478);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5479,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5479,(1),null);
var temp__5457__auto___5489 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5457__auto___5489)){
var handler_5490 = temp__5457__auto___5489;
(prc[cljs.core.name(processing_name)] = ((function (seq__5475,chunk__5476,count__5477,i__5478,handler_5490,temp__5457__auto___5489,vec__5479,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR__orig_val__5482 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__5483 = prc;
quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__5483;

try{return (handler_5490.cljs$core$IFn$_invoke$arity$0 ? handler_5490.cljs$core$IFn$_invoke$arity$0() : handler_5490.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__5482;
}});})(seq__5475,chunk__5476,count__5477,i__5478,handler_5490,temp__5457__auto___5489,vec__5479,processing_name,quil_name))
);
} else {
}


var G__5491 = seq__5475;
var G__5492 = chunk__5476;
var G__5493 = count__5477;
var G__5494 = (i__5478 + (1));
seq__5475 = G__5491;
chunk__5476 = G__5492;
count__5477 = G__5493;
i__5478 = G__5494;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5475);
if(temp__5457__auto__){
var seq__5475__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5475__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__5475__$1);
var G__5495 = cljs.core.chunk_rest(seq__5475__$1);
var G__5496 = c__4461__auto__;
var G__5497 = cljs.core.count(c__4461__auto__);
var G__5498 = (0);
seq__5475 = G__5495;
chunk__5476 = G__5496;
count__5477 = G__5497;
i__5478 = G__5498;
continue;
} else {
var vec__5484 = cljs.core.first(seq__5475__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5484,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5484,(1),null);
var temp__5457__auto___5499__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5457__auto___5499__$1)){
var handler_5500 = temp__5457__auto___5499__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__5475,chunk__5476,count__5477,i__5478,handler_5500,temp__5457__auto___5499__$1,vec__5484,processing_name,quil_name,seq__5475__$1,temp__5457__auto__){
return (function (){
var _STAR_applet_STAR__orig_val__5487 = quil.sketch._STAR_applet_STAR_;
var _STAR_applet_STAR__temp_val__5488 = prc;
quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__temp_val__5488;

try{return (handler_5500.cljs$core$IFn$_invoke$arity$0 ? handler_5500.cljs$core$IFn$_invoke$arity$0() : handler_5500.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR__orig_val__5487;
}});})(seq__5475,chunk__5476,count__5477,i__5478,handler_5500,temp__5457__auto___5499__$1,vec__5484,processing_name,quil_name,seq__5475__$1,temp__5457__auto__))
);
} else {
}


var G__5501 = cljs.core.next(seq__5475__$1);
var G__5502 = null;
var G__5503 = (0);
var G__5504 = (0);
seq__5475 = G__5501;
chunk__5476 = G__5502;
count__5477 = G__5503;
i__5478 = G__5504;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.in_fullscreen_QMARK_ = (function quil$sketch$in_fullscreen_QMARK_(){
var or__4047__auto__ = document.fullscreenElement;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return document.mozFullScreenElement;
}
});
/**
 * Adds fullscreen support for provided Processing object.
 *   Fullscreen is enabled when user presses F11. We turn
 *   sketch <canvas> element to fullscreen storing old size
 *   in an atom. When user cancels fullscreen (F11 or Esc)
 *   we resize sketch to the old size.
 */
quil.sketch.add_fullscreen_support = (function quil$sketch$add_fullscreen_support(applet){
var old_size = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var adjust_canvas_size = ((function (old_size){
return (function (){
if(cljs.core.truth_(quil.sketch.in_fullscreen_QMARK_())){
cljs.core.reset_BANG_(old_size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [applet.width,applet.height], null));

return quil.sketch.set_size(applet,window.screen.width,window.screen.height);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(quil.sketch.set_size,applet,cljs.core.deref(old_size));
}
});})(old_size))
;
var G__5506_5512 = window;
var G__5507_5513 = goog.events.EventType.KEYDOWN;
var G__5508_5514 = ((function (G__5506_5512,G__5507_5513,old_size,adjust_canvas_size){
return (function (event){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.key,"F11")) && (cljs.core.not(quil.sketch.in_fullscreen_QMARK_())))){
event.preventDefault();

var canvas = applet.quil_canvas;
if(cljs.core.truth_(canvas.requestFullscreen)){
return canvas.requestFullscreen();
} else {
if(cljs.core.truth_(canvas.mozRequestFullScreen)){
return canvas.mozRequestFullScreen();
} else {
return console.warn("Fullscreen mode is not supported in current browser.");

}
}
} else {
return null;
}
});})(G__5506_5512,G__5507_5513,old_size,adjust_canvas_size))
;
goog.events.listen(G__5506_5512,G__5507_5513,G__5508_5514);

goog.events.listen(document,"fullscreenchange",adjust_canvas_size);

goog.events.listen(document,"mozfullscreenchange",adjust_canvas_size);

var G__5509 = document;
var G__5510 = "fullscreenerror";
var G__5511 = ((function (G__5509,G__5510,old_size,adjust_canvas_size){
return (function (p1__5505_SHARP_){
return console.error("Error while switching to/from fullscreen: ",p1__5505_SHARP_);
});})(G__5509,G__5510,old_size,adjust_canvas_size))
;
return goog.events.listen(G__5509,G__5510,G__5511);
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (){var G__5517 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)));
var fexpr__5516 = ((function (G__5517){
return (function (p1__5515_SHARP_){
return (p1__5515_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__5515_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__5515_SHARP_.call(null,options));
});})(G__5517))
;
return fexpr__5516(G__5517);
})()], 0));
var sketch_size = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__5518_5522 = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts);
(fexpr__5518_5522.cljs$core$IFn$_invoke$arity$0 ? fexpr__5518_5522.cljs$core$IFn$_invoke$arity$0() : fexpr__5518_5522.call(null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__5519 = cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__5519.cljs$core$IFn$_invoke$arity$0 ? fexpr__5519.cljs$core$IFn$_invoke$arity$0() : fexpr__5519.call(null));
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (cljs.core.truth_(cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts))?((function (opts,sketch_size,renderer,features,setup){
return (function (){
var G__5521 = ((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll);
var fexpr__5520 = cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__5520.cljs$core$IFn$_invoke$arity$1 ? fexpr__5520.cljs$core$IFn$_invoke$arity$1(G__5521) : fexpr__5520.call(null,G__5521));
});})(opts,sketch_size,renderer,features,setup))
:null);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$setup,setup,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$mouse_DASH_wheel,mouse_wheel], 0));
var attach_function = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

prc.quil = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);

return prc.quil_internal_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(quil.util.initial_internal_state);
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_(features,cljs.core.cst$kw$global_DASH_key_DASH_events)){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__5457__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__5457__auto__)){
var proc_obj = temp__5457__auto__;
return proc_obj.exit();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5525 = arguments.length;
var i__4642__auto___5526 = (0);
while(true){
if((i__4642__auto___5526 < len__4641__auto___5525)){
args__4647__auto__.push((arguments[i__4642__auto___5526]));

var G__5527 = (i__4642__auto___5526 + (1));
i__4642__auto___5526 = G__5527;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = (function (){var G__5524 = cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map);
return goog.dom.getElement(G__5524);
})();
var renderer = (function (){var or__4047__auto__ = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.cst$kw$p2d;
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch(host_elem);

var proc_obj = (new Processing(host_elem,quil.sketch.make_sketch(opts_map)));
host_elem.processing_obj = proc_obj;

proc_obj.quil_canvas = host_elem;

quil.sketch.add_fullscreen_support(proc_obj);

return proc_obj;
} else {
return console.error((cljs.core.truth_(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map))?["ERROR: Cannot find host element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map))].join(''):"ERROR: Cannot create sketch. :host is not specified or element not found."));
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
quil.sketch.sketch.cljs$lang$applyTo = (function (seq5523){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5523));
});

quil.sketch.sketch_init_list = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__5534 = quil.sketch.empty_body_QMARK_();
var seq__5528_5535 = cljs.core.seq(cljs.core.deref(quil.sketch.sketch_init_list));
var chunk__5529_5536 = null;
var count__5530_5537 = (0);
var i__5531_5538 = (0);
while(true){
if((i__5531_5538 < count__5530_5537)){
var sk_5539 = chunk__5529_5536.cljs$core$IIndexed$_nth$arity$2(null,i__5531_5538);
if(add_elem_QMARK__5534){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_5539));
} else {
}

var fexpr__5532_5540 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_5539);
(fexpr__5532_5540.cljs$core$IFn$_invoke$arity$0 ? fexpr__5532_5540.cljs$core$IFn$_invoke$arity$0() : fexpr__5532_5540.call(null));


var G__5541 = seq__5528_5535;
var G__5542 = chunk__5529_5536;
var G__5543 = count__5530_5537;
var G__5544 = (i__5531_5538 + (1));
seq__5528_5535 = G__5541;
chunk__5529_5536 = G__5542;
count__5530_5537 = G__5543;
i__5531_5538 = G__5544;
continue;
} else {
var temp__5457__auto___5545 = cljs.core.seq(seq__5528_5535);
if(temp__5457__auto___5545){
var seq__5528_5546__$1 = temp__5457__auto___5545;
if(cljs.core.chunked_seq_QMARK_(seq__5528_5546__$1)){
var c__4461__auto___5547 = cljs.core.chunk_first(seq__5528_5546__$1);
var G__5548 = cljs.core.chunk_rest(seq__5528_5546__$1);
var G__5549 = c__4461__auto___5547;
var G__5550 = cljs.core.count(c__4461__auto___5547);
var G__5551 = (0);
seq__5528_5535 = G__5548;
chunk__5529_5536 = G__5549;
count__5530_5537 = G__5550;
i__5531_5538 = G__5551;
continue;
} else {
var sk_5552 = cljs.core.first(seq__5528_5546__$1);
if(add_elem_QMARK__5534){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_5552));
} else {
}

var fexpr__5533_5553 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_5552);
(fexpr__5533_5553.cljs$core$IFn$_invoke$arity$0 ? fexpr__5533_5553.cljs$core$IFn$_invoke$arity$0() : fexpr__5533_5553.call(null));


var G__5554 = cljs.core.next(seq__5528_5546__$1);
var G__5555 = null;
var G__5556 = (0);
var G__5557 = (0);
seq__5528_5535 = G__5554;
chunk__5529_5536 = G__5555;
count__5530_5537 = G__5556;
i__5531_5538 = G__5557;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"complete")){
return quil.sketch.init_sketches();
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);
