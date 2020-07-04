// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('quil.middlewares.deprecated_options');
goog.require('cljs.core');
goog.require('cljs.core.constants');
quil.middlewares.deprecated_options.deprecated = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$decor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Try :features [:present] for similar effect"], null),cljs.core.cst$kw$target,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:keep-on-top] instead."], null),cljs.core.cst$kw$safe_DASH_draw_DASH_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:no-safe-fns] instead."], null)], null);
quil.middlewares.deprecated_options.check_features_vector = (function quil$middlewares$deprecated_options$check_features_vector(features){
var features__$1 = cljs.core.set(features);
if(cljs.core.truth_((function (){var G__5409 = cljs.core.cst$kw$no_DASH_safe_DASH_draw;
return (features__$1.cljs$core$IFn$_invoke$arity$1 ? features__$1.cljs$core$IFn$_invoke$arity$1(G__5409) : features__$1.call(null,G__5409));
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Feature :no-safe-draw was renamed to :no-safe-fns in Quil 2.1.","Use :feature [:no-safe-fns] now."], 0));
} else {
}

return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(features__$1,cljs.core.cst$kw$no_DASH_safe_DASH_draw);
});
/**
 * Checks if options map contains deprected options and removes them.
 *   Prints messages how to fix deprecated functions.
 */
quil.middlewares.deprecated_options.deprecated_options = (function quil$middlewares$deprecated_options$deprecated_options(options){
var options__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$features], null),quil.middlewares.deprecated_options.check_features_vector);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,(function (){var iter__4434__auto__ = ((function (options__$1){
return (function quil$middlewares$deprecated_options$deprecated_options_$_iter__5410(s__5411){
return (new cljs.core.LazySeq(null,((function (options__$1){
return (function (){
var s__5411__$1 = s__5411;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__5411__$1);
if(temp__5457__auto__){
var s__5411__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5411__$2)){
var c__4432__auto__ = cljs.core.chunk_first(s__5411__$2);
var size__4433__auto__ = cljs.core.count(c__4432__auto__);
var b__5413 = cljs.core.chunk_buffer(size__4433__auto__);
if((function (){var i__5412 = (0);
while(true){
if((i__5412 < size__4433__auto__)){
var vec__5414 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4432__auto__,i__5412);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5414,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5414,(1),null);
cljs.core.chunk_append(b__5413,(function (){var temp__5455__auto__ = (quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1 ? quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1(name) : quil.middlewares.deprecated_options.deprecated.call(null,name));
if(cljs.core.truth_(temp__5455__auto__)){
var vec__5417 = temp__5455__auto__;
var version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5417,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5417,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name,"option was removed in Quil",version,".",message], 0));

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})());

var G__5426 = (i__5412 + (1));
i__5412 = G__5426;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5413),quil$middlewares$deprecated_options$deprecated_options_$_iter__5410(cljs.core.chunk_rest(s__5411__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5413),null);
}
} else {
var vec__5420 = cljs.core.first(s__5411__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5420,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5420,(1),null);
return cljs.core.cons((function (){var temp__5455__auto__ = (quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1 ? quil.middlewares.deprecated_options.deprecated.cljs$core$IFn$_invoke$arity$1(name) : quil.middlewares.deprecated_options.deprecated.call(null,name));
if(cljs.core.truth_(temp__5455__auto__)){
var vec__5423 = temp__5455__auto__;
var version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5423,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5423,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name,"option was removed in Quil",version,".",message], 0));

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})(),quil$middlewares$deprecated_options$deprecated_options_$_iter__5410(cljs.core.rest(s__5411__$2)));
}
} else {
return null;
}
break;
}
});})(options__$1))
,null,null));
});})(options__$1))
;
return iter__4434__auto__(options__$1);
})()));
});
