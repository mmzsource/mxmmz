// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('quil.middlewares.fun_mode');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
quil.middlewares.fun_mode.wrap_setup = (function quil$middlewares$fun_mode$wrap_setup(options){
var setup = cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$2(options,(function (){
return null;
}));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$setup,((function (setup){
return (function (){
return cljs.core.reset_BANG_(quil.core.state_atom(),(setup.cljs$core$IFn$_invoke$arity$0 ? setup.cljs$core$IFn$_invoke$arity$0() : setup.call(null)));
});})(setup))
);
});
quil.middlewares.fun_mode.wrap_draw_update = (function quil$middlewares$fun_mode$wrap_draw_update(options){
var draw = cljs.core.cst$kw$draw.cljs$core$IFn$_invoke$arity$2(options,(function (_){
return null;
}));
var update = cljs.core.cst$kw$update.cljs$core$IFn$_invoke$arity$2(options,cljs.core.identity);
var quil_draw = ((function (draw,update){
return (function (){
var G__6440 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(quil.core.state_atom(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quil.core.frame_count(),(1)))?cljs.core.identity:update));
return (draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(G__6440) : draw.call(null,G__6440));
});})(draw,update))
;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$update),cljs.core.cst$kw$draw,quil_draw);
});
quil.middlewares.fun_mode.mouse_event = (function quil$middlewares$fun_mode$mouse_event(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,quil.core.mouse_x(),cljs.core.cst$kw$y,quil.core.mouse_y()], null);
});
quil.middlewares.fun_mode.mouse_event_full = (function quil$middlewares$fun_mode$mouse_event_full(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,quil.core.mouse_x(),cljs.core.cst$kw$y,quil.core.mouse_y(),cljs.core.cst$kw$button,quil.core.mouse_button()], null);
});
quil.middlewares.fun_mode.key_event = (function quil$middlewares$fun_mode$key_event(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,quil.core.key_as_keyword(),cljs.core.cst$kw$key_DASH_code,quil.core.key_code(),cljs.core.cst$kw$raw_DASH_key,quil.core.raw_key()], null);
});
quil.middlewares.fun_mode.wrap_handler = (function quil$middlewares$fun_mode$wrap_handler(var_args){
var G__6442 = arguments.length;
switch (G__6442) {
case 2:
return quil.middlewares.fun_mode.wrap_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.middlewares.fun_mode.wrap_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.middlewares.fun_mode.wrap_handler.cljs$core$IFn$_invoke$arity$2 = (function (options,handler_key){
return quil.middlewares.fun_mode.wrap_handler.cljs$core$IFn$_invoke$arity$3(options,handler_key,null);
});

quil.middlewares.fun_mode.wrap_handler.cljs$core$IFn$_invoke$arity$3 = (function (options,handler_key,event_fn){
var temp__5455__auto__ = (options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(handler_key) : options.call(null,handler_key));
if(cljs.core.truth_(temp__5455__auto__)){
var handler = temp__5455__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,handler_key,(cljs.core.truth_(event_fn)?((function (handler,temp__5455__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.core.state_atom(),handler,(event_fn.cljs$core$IFn$_invoke$arity$0 ? event_fn.cljs$core$IFn$_invoke$arity$0() : event_fn.call(null)));
});})(handler,temp__5455__auto__))
:((function (handler,temp__5455__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(quil.core.state_atom(),handler);
});})(handler,temp__5455__auto__))
));
} else {
return options;
}
});

quil.middlewares.fun_mode.wrap_handler.cljs$lang$maxFixedArity = 3;

quil.middlewares.fun_mode.wrap_handlers = (function quil$middlewares$fun_mode$wrap_handlers(var_args){
var args__4647__auto__ = [];
var len__4641__auto___6446 = arguments.length;
var i__4642__auto___6447 = (0);
while(true){
if((i__4642__auto___6447 < len__4641__auto___6446)){
args__4647__auto__.push((arguments[i__4642__auto___6447]));

var G__6448 = (i__4642__auto___6447 + (1));
i__4642__auto___6447 = G__6448;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return quil.middlewares.fun_mode.wrap_handlers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

quil.middlewares.fun_mode.wrap_handlers.cljs$core$IFn$_invoke$arity$variadic = (function (options,handlers){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (options__$1,handler){
if((handler instanceof cljs.core.Keyword)){
return quil.middlewares.fun_mode.wrap_handler.cljs$core$IFn$_invoke$arity$2(options__$1,handler);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(quil.middlewares.fun_mode.wrap_handler,options__$1,handler);
}
}),options,handlers);
});

quil.middlewares.fun_mode.wrap_handlers.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
quil.middlewares.fun_mode.wrap_handlers.cljs$lang$applyTo = (function (seq6444){
var G__6445 = cljs.core.first(seq6444);
var seq6444__$1 = cljs.core.next(seq6444);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6445,seq6444__$1);
});

quil.middlewares.fun_mode.wrap_mouse_wheel = (function quil$middlewares$fun_mode$wrap_mouse_wheel(options){
var temp__5455__auto__ = cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5455__auto__)){
var handler = temp__5455__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$mouse_DASH_wheel,((function (handler,temp__5455__auto__){
return (function (rotation){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.core.state_atom(),handler,rotation);
});})(handler,temp__5455__auto__))
);
} else {
return options;
}
});
/**
 * Introduces function mode making all handlers (setup, draw, mouse-click, etc)
 *   state-aware. Adds support for 'update' function.
 */
quil.middlewares.fun_mode.fun_mode = (function quil$middlewares$fun_mode$fun_mode(options){
return quil.middlewares.fun_mode.wrap_mouse_wheel(quil.middlewares.fun_mode.wrap_handlers.cljs$core$IFn$_invoke$arity$variadic(quil.middlewares.fun_mode.wrap_draw_update(quil.middlewares.fun_mode.wrap_setup(options)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$focus_DASH_gained,cljs.core.cst$kw$focus_DASH_lost,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mouse_DASH_entered,quil.middlewares.fun_mode.mouse_event], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mouse_DASH_exited,quil.middlewares.fun_mode.mouse_event], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mouse_DASH_pressed,quil.middlewares.fun_mode.mouse_event_full], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mouse_DASH_released,quil.middlewares.fun_mode.mouse_event], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mouse_DASH_clicked,quil.middlewares.fun_mode.mouse_event_full], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mouse_DASH_moved,(function (){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,quil.core.mouse_x(),cljs.core.cst$kw$y,quil.core.mouse_y(),cljs.core.cst$kw$p_DASH_x,quil.core.pmouse_x(),cljs.core.cst$kw$p_DASH_y,quil.core.pmouse_y()], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mouse_DASH_dragged,(function (){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,quil.core.mouse_x(),cljs.core.cst$kw$y,quil.core.mouse_y(),cljs.core.cst$kw$p_DASH_x,quil.core.pmouse_x(),cljs.core.cst$kw$p_DASH_y,quil.core.pmouse_y(),cljs.core.cst$kw$button,quil.core.mouse_button()], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key_DASH_pressed,quil.middlewares.fun_mode.key_event], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key_DASH_released,quil.middlewares.fun_mode.key_event], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key_DASH_typed,quil.middlewares.fun_mode.key_event], null),cljs.core.cst$kw$on_DASH_close], 0)));
});
