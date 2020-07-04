// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('matrixrain.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
matrixrain.core.symbols = "\u65E5\u4E8C\u30B1\u30C1\u30E4\u30DB\u30BD\u30CD\u30EA\u30D2\u30F2\u30BB\u30E1\u30CB\u30A4\u30D8\u30E0\u30EC\u30ED\u30EF\u30B9\u30A8\u30F3\u30CF\u30E2\u30AD\u30E8\u30AB\u30CA\u30A6\u30A2\u30CE\u30AF\u30C8\u30D5\u30B5\u30B7\u30AA\u30DF\u30CC\u30C4\u30DE\u30EB\u30C6\u30E6\u30E9\u30BF\u30B3\uFF17\uFF3A\uFF1A\u30FB\uFF0E\uFF1D\uFF0A\uFF0B\uFF0D\uFF1C\uFF1E";
matrixrain.core.textsize = (10);
matrixrain.core.framerate = (60);
matrixrain.core.updates_per_second = (25);
matrixrain.core.symbol_change_rate = (20);
matrixrain.core.now = (function matrixrain$core$now(){
return (new Date()).getTime();
});
matrixrain.core.millis_until_game_update = ((1000) / matrixrain.core.updates_per_second);
matrixrain.core.update_needed_QMARK_ = (function matrixrain$core$update_needed_QMARK_(state){
var last_time = cljs.core.cst$kw$last_DASH_time.cljs$core$IFn$_invoke$arity$1(state);
var current_time = matrixrain.core.now();
return ((current_time - last_time) > matrixrain.core.millis_until_game_update);
});
matrixrain.core.create_grid = (function matrixrain$core$create_grid(rows,cols){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(cols,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((rows * cols),(function (){
return cljs.core.rand_nth(matrixrain.core.symbols);
})))));
});
matrixrain.core.rowcount = (function matrixrain$core$rowcount(grid){
return cljs.core.count(grid);
});
matrixrain.core.colcount = (function matrixrain$core$colcount(grid){
return cljs.core.count(cljs.core.first(grid));
});
matrixrain.core.update_grid = (function matrixrain$core$update_grid(grid){
var rand_row = cljs.core.rand_int(matrixrain.core.rowcount(grid));
var rand_col = cljs.core.rand_int(matrixrain.core.colcount(grid));
return cljs.core.assoc_in(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rand_row,rand_col], null),cljs.core.rand_nth(matrixrain.core.symbols));
});
matrixrain.core.repeat_black_rgb = (function matrixrain$core$repeat_black_rgb(n){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.cycle(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)], null))));
});
matrixrain.core.generate_green_values = (function matrixrain$core$generate_green_values(n){
var fraction = (((255) / n) | (0));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,fraction),fraction)));
});
matrixrain.core.generate_tail = (function matrixrain$core$generate_tail(green_values){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6453_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(p1__6453_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)));
}),green_values);
});
/**
 * max tail length is coupled to the number of visible rows
 */
matrixrain.core.random_tail_length = (function matrixrain$core$random_tail_length(rowcount){
return (cljs.core.rand_int(((2) * rowcount)) + (1));
});
matrixrain.core.random_drop_speed = (function matrixrain$core$random_drop_speed(){
return (0.7 + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(0.9));
});
matrixrain.core.create_raindrop = (function matrixrain$core$create_raindrop(rowcount){
var filler = matrixrain.core.repeat_black_rgb(rowcount);
var tail = matrixrain.core.generate_tail(matrixrain.core.generate_green_values(matrixrain.core.random_tail_length(rowcount)));
var head = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(150),(150),(150)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200),(200)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null)], null);
var raindrop = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,filler,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,tail,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,head,filler)));
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colours,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$raindrop,raindrop,cljs.core.cst$kw$speed,matrixrain.core.random_drop_speed(),cljs.core.cst$kw$head,(cljs.core.count(raindrop) - (1))], null);
});
matrixrain.core.create_raindrops = (function matrixrain$core$create_raindrops(grid){
var rows = matrixrain.core.rowcount(grid);
var cols = matrixrain.core.colcount(grid);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (rows,cols){
return (function (){
return matrixrain.core.create_raindrop(rows);
});})(rows,cols))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cols));
});
matrixrain.core.update_raindrop = (function matrixrain$core$update_raindrop(rain,rowcount){
var map__6454 = rain;
var map__6454__$1 = (((((!((map__6454 == null))))?(((((map__6454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6454):map__6454);
var raindrop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6454__$1,cljs.core.cst$kw$raindrop);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6454__$1,cljs.core.cst$kw$head);
var speed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6454__$1,cljs.core.cst$kw$speed);
var new_head = (head - speed);
if((new_head < rowcount)){
return matrixrain.core.create_raindrop(rowcount);
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rain,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colours,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(raindrop,(head - rowcount),head),cljs.core.cst$kw$head,new_head], null)], 0));
}
});
matrixrain.core.update_raindrops = (function matrixrain$core$update_raindrops(state){
var rowcount = matrixrain.core.rowcount(cljs.core.cst$kw$grid.cljs$core$IFn$_invoke$arity$1(state));
var raindrops = cljs.core.cst$kw$raindrops.cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (rowcount,raindrops){
return (function (p1__6456_SHARP_){
return matrixrain.core.update_raindrop(p1__6456_SHARP_,rowcount);
});})(rowcount,raindrops))
,raindrops);
});
matrixrain.core.setup = (function matrixrain$core$setup(){
quil.core.frame_rate(matrixrain.core.framerate);

var grid = matrixrain.core.create_grid(((quil.core.height() / matrixrain.core.textsize) | (0)),((quil.core.width() / matrixrain.core.textsize) | (0)));
var raindrops = matrixrain.core.create_raindrops(grid);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$grid,grid,cljs.core.cst$kw$raindrops,raindrops,cljs.core.cst$kw$last_DASH_time,matrixrain.core.now()], null);
});
matrixrain.core.update_state = (function matrixrain$core$update_state(state){
var grid = cljs.core.cst$kw$grid.cljs$core$IFn$_invoke$arity$1(state);
if(matrixrain.core.update_needed_QMARK_(state)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$grid,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(matrixrain.core.update_grid,grid),matrixrain.core.symbol_change_rate),cljs.core.cst$kw$raindrops,matrixrain.core.update_raindrops(state),cljs.core.cst$kw$last_DASH_time,matrixrain.core.now()], null)], 0));
} else {
return state;
}
});
matrixrain.core.draw_state = (function matrixrain$core$draw_state(state){
quil.core.background.cljs$core$IFn$_invoke$arity$1((0));

quil.core.fill.cljs$core$IFn$_invoke$arity$1((255));

quil.core.text_size(matrixrain.core.textsize);

var grid = cljs.core.cst$kw$grid.cljs$core$IFn$_invoke$arity$1(state);
var raindrops = cljs.core.cst$kw$raindrops.cljs$core$IFn$_invoke$arity$1(state);
var seq__6457 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(matrixrain.core.rowcount(grid)));
var chunk__6462 = null;
var count__6463 = (0);
var i__6464 = (0);
while(true){
if((i__6464 < count__6463)){
var row = chunk__6462.cljs$core$IIndexed$_nth$arity$2(null,i__6464);
var seq__6465_6481 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(matrixrain.core.colcount(grid)));
var chunk__6466_6482 = null;
var count__6467_6483 = (0);
var i__6468_6484 = (0);
while(true){
if((i__6468_6484 < count__6467_6483)){
var col_6485 = chunk__6466_6482.cljs$core$IIndexed$_nth$arity$2(null,i__6468_6484);
var vec__6469_6486 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(raindrops,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_6485,cljs.core.cst$kw$colours,row], null));
var r_6487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6469_6486,(0),null);
var g_6488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6469_6486,(1),null);
var b_6489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6469_6486,(2),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_6487,g_6488,b_6489], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null))){
quil.core.fill.cljs$core$IFn$_invoke$arity$3(r_6487,g_6488,b_6489);

quil.core.text.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col_6485], null)),(col_6485 * matrixrain.core.textsize),((row + (1)) * matrixrain.core.textsize));
} else {
}


var G__6490 = seq__6465_6481;
var G__6491 = chunk__6466_6482;
var G__6492 = count__6467_6483;
var G__6493 = (i__6468_6484 + (1));
seq__6465_6481 = G__6490;
chunk__6466_6482 = G__6491;
count__6467_6483 = G__6492;
i__6468_6484 = G__6493;
continue;
} else {
var temp__5457__auto___6494 = cljs.core.seq(seq__6465_6481);
if(temp__5457__auto___6494){
var seq__6465_6495__$1 = temp__5457__auto___6494;
if(cljs.core.chunked_seq_QMARK_(seq__6465_6495__$1)){
var c__4461__auto___6496 = cljs.core.chunk_first(seq__6465_6495__$1);
var G__6497 = cljs.core.chunk_rest(seq__6465_6495__$1);
var G__6498 = c__4461__auto___6496;
var G__6499 = cljs.core.count(c__4461__auto___6496);
var G__6500 = (0);
seq__6465_6481 = G__6497;
chunk__6466_6482 = G__6498;
count__6467_6483 = G__6499;
i__6468_6484 = G__6500;
continue;
} else {
var col_6501 = cljs.core.first(seq__6465_6495__$1);
var vec__6472_6502 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(raindrops,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_6501,cljs.core.cst$kw$colours,row], null));
var r_6503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6472_6502,(0),null);
var g_6504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6472_6502,(1),null);
var b_6505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6472_6502,(2),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_6503,g_6504,b_6505], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null))){
quil.core.fill.cljs$core$IFn$_invoke$arity$3(r_6503,g_6504,b_6505);

quil.core.text.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col_6501], null)),(col_6501 * matrixrain.core.textsize),((row + (1)) * matrixrain.core.textsize));
} else {
}


var G__6506 = cljs.core.next(seq__6465_6495__$1);
var G__6507 = null;
var G__6508 = (0);
var G__6509 = (0);
seq__6465_6481 = G__6506;
chunk__6466_6482 = G__6507;
count__6467_6483 = G__6508;
i__6468_6484 = G__6509;
continue;
}
} else {
}
}
break;
}

var G__6510 = seq__6457;
var G__6511 = chunk__6462;
var G__6512 = count__6463;
var G__6513 = (i__6464 + (1));
seq__6457 = G__6510;
chunk__6462 = G__6511;
count__6463 = G__6512;
i__6464 = G__6513;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__6457);
if(temp__5457__auto__){
var seq__6457__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6457__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__6457__$1);
var G__6514 = cljs.core.chunk_rest(seq__6457__$1);
var G__6515 = c__4461__auto__;
var G__6516 = cljs.core.count(c__4461__auto__);
var G__6517 = (0);
seq__6457 = G__6514;
chunk__6462 = G__6515;
count__6463 = G__6516;
i__6464 = G__6517;
continue;
} else {
var row = cljs.core.first(seq__6457__$1);
var seq__6458_6518 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(matrixrain.core.colcount(grid)));
var chunk__6459_6519 = null;
var count__6460_6520 = (0);
var i__6461_6521 = (0);
while(true){
if((i__6461_6521 < count__6460_6520)){
var col_6522 = chunk__6459_6519.cljs$core$IIndexed$_nth$arity$2(null,i__6461_6521);
var vec__6475_6523 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(raindrops,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_6522,cljs.core.cst$kw$colours,row], null));
var r_6524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6475_6523,(0),null);
var g_6525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6475_6523,(1),null);
var b_6526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6475_6523,(2),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_6524,g_6525,b_6526], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null))){
quil.core.fill.cljs$core$IFn$_invoke$arity$3(r_6524,g_6525,b_6526);

quil.core.text.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col_6522], null)),(col_6522 * matrixrain.core.textsize),((row + (1)) * matrixrain.core.textsize));
} else {
}


var G__6527 = seq__6458_6518;
var G__6528 = chunk__6459_6519;
var G__6529 = count__6460_6520;
var G__6530 = (i__6461_6521 + (1));
seq__6458_6518 = G__6527;
chunk__6459_6519 = G__6528;
count__6460_6520 = G__6529;
i__6461_6521 = G__6530;
continue;
} else {
var temp__5457__auto___6531__$1 = cljs.core.seq(seq__6458_6518);
if(temp__5457__auto___6531__$1){
var seq__6458_6532__$1 = temp__5457__auto___6531__$1;
if(cljs.core.chunked_seq_QMARK_(seq__6458_6532__$1)){
var c__4461__auto___6533 = cljs.core.chunk_first(seq__6458_6532__$1);
var G__6534 = cljs.core.chunk_rest(seq__6458_6532__$1);
var G__6535 = c__4461__auto___6533;
var G__6536 = cljs.core.count(c__4461__auto___6533);
var G__6537 = (0);
seq__6458_6518 = G__6534;
chunk__6459_6519 = G__6535;
count__6460_6520 = G__6536;
i__6461_6521 = G__6537;
continue;
} else {
var col_6538 = cljs.core.first(seq__6458_6532__$1);
var vec__6478_6539 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(raindrops,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [col_6538,cljs.core.cst$kw$colours,row], null));
var r_6540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6478_6539,(0),null);
var g_6541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6478_6539,(1),null);
var b_6542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6478_6539,(2),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r_6540,g_6541,b_6542], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null))){
quil.core.fill.cljs$core$IFn$_invoke$arity$3(r_6540,g_6541,b_6542);

quil.core.text.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col_6538], null)),(col_6538 * matrixrain.core.textsize),((row + (1)) * matrixrain.core.textsize));
} else {
}


var G__6543 = cljs.core.next(seq__6458_6532__$1);
var G__6544 = null;
var G__6545 = (0);
var G__6546 = (0);
seq__6458_6518 = G__6543;
chunk__6459_6519 = G__6544;
count__6460_6520 = G__6545;
i__6461_6521 = G__6546;
continue;
}
} else {
}
}
break;
}

var G__6547 = cljs.core.next(seq__6457__$1);
var G__6548 = null;
var G__6549 = (0);
var G__6550 = (0);
seq__6457 = G__6547;
chunk__6462 = G__6548;
count__6463 = G__6549;
i__6464 = G__6550;
continue;
}
} else {
return null;
}
}
break;
}
});
matrixrain.core.run_sketch = (function matrixrain$core$run_sketch(){
matrixrain.core.matrixrain = (function matrixrain$core$run_sketch_$_matrixrain(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,"matrixrain",cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(matrixrain.core.update_state))?(function() { 
var G__6551__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(matrixrain.core.update_state,args);
};
var G__6551 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6552__i = 0, G__6552__a = new Array(arguments.length -  0);
while (G__6552__i < G__6552__a.length) {G__6552__a[G__6552__i] = arguments[G__6552__i + 0]; ++G__6552__i;}
  args = new cljs.core.IndexedSeq(G__6552__a,0,null);
} 
return G__6551__delegate.call(this,args);};
G__6551.cljs$lang$maxFixedArity = 0;
G__6551.cljs$lang$applyTo = (function (arglist__6553){
var args = cljs.core.seq(arglist__6553);
return G__6551__delegate(args);
});
G__6551.cljs$core$IFn$_invoke$arity$variadic = G__6551__delegate;
return G__6551;
})()
:matrixrain.core.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(750),(500)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(matrixrain.core.setup))?(function() { 
var G__6554__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(matrixrain.core.setup,args);
};
var G__6554 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6555__i = 0, G__6555__a = new Array(arguments.length -  0);
while (G__6555__i < G__6555__a.length) {G__6555__a[G__6555__i] = arguments[G__6555__i + 0]; ++G__6555__i;}
  args = new cljs.core.IndexedSeq(G__6555__a,0,null);
} 
return G__6554__delegate.call(this,args);};
G__6554.cljs$lang$maxFixedArity = 0;
G__6554.cljs$lang$applyTo = (function (arglist__6556){
var args = cljs.core.seq(arglist__6556);
return G__6554__delegate(args);
});
G__6554.cljs$core$IFn$_invoke$arity$variadic = G__6554__delegate;
return G__6554;
})()
:matrixrain.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(matrixrain.core.draw_state))?(function() { 
var G__6557__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(matrixrain.core.draw_state,args);
};
var G__6557 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6558__i = 0, G__6558__a = new Array(arguments.length -  0);
while (G__6558__i < G__6558__a.length) {G__6558__a[G__6558__i] = arguments[G__6558__i + 0]; ++G__6558__i;}
  args = new cljs.core.IndexedSeq(G__6558__a,0,null);
} 
return G__6557__delegate.call(this,args);};
G__6557.cljs$lang$maxFixedArity = 0;
G__6557.cljs$lang$applyTo = (function (arglist__6559){
var args = cljs.core.seq(arglist__6559);
return G__6557__delegate(args);
});
G__6557.cljs$core$IFn$_invoke$arity$variadic = G__6557__delegate;
return G__6557;
})()
:matrixrain.core.draw_state)], 0));
});
goog.exportSymbol('matrixrain.core.matrixrain', matrixrain.core.matrixrain);

if(cljs.core.truth_(cljs.core.some((function (p1__5463__5464__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__5463__5464__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,matrixrain.core.matrixrain,cljs.core.cst$kw$host_DASH_id,"matrixrain"], null));
}
});
goog.exportSymbol('matrixrain.core.run_sketch', matrixrain.core.run_sketch);
matrixrain.core.run_sketch();
