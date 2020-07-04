// Compiled by ClojureScript 1.10.439 {:static-fns true, :optimize-constants true}
goog.provide('quil.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('quil.sketch');
goog.require('quil.util');
quil.core._STAR_graphics_STAR_ = null;
/**
 * Graphics currently used for drawing. By default it is sketch graphics,
 *   but if called inside with-graphics macro - graphics passed to the macro
 *   is returned. This method should be used if you need to call some methods
 *   that are not implemented by quil. Example:
 *   (.beginDraw (current-graphics)).
 */
quil.core.current_graphics = (function quil$core$current_graphics(){
var or__4047__auto__ = quil.core._STAR_graphics_STAR_;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return quil.sketch.current_applet();
}
});
quil.core.arc_modes = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$open,(Processing.prototype.PConstants["OPEN"]),cljs.core.cst$kw$chord,(Processing.prototype.PConstants["CHORD"]),cljs.core.cst$kw$pie,(Processing.prototype.PConstants["PIE"])], null);

quil.core.shape_modes = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$points,(Processing.prototype.PConstants["POINTS"]),cljs.core.cst$kw$lines,(Processing.prototype.PConstants["LINES"]),cljs.core.cst$kw$triangles,(Processing.prototype.PConstants["TRIANGLES"]),cljs.core.cst$kw$triangle_DASH_fan,(Processing.prototype.PConstants["TRIANGLE_FAN"]),cljs.core.cst$kw$triangle_DASH_strip,(Processing.prototype.PConstants["TRIANGLE_STRIP"]),cljs.core.cst$kw$quads,(Processing.prototype.PConstants["QUADS"]),cljs.core.cst$kw$quad_DASH_strip,(Processing.prototype.PConstants["QUAD_STRIP"])], null);

quil.core.blend_modes = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$burn,cljs.core.cst$kw$screen,cljs.core.cst$kw$darkest,cljs.core.cst$kw$dodge,cljs.core.cst$kw$replace,cljs.core.cst$kw$overlay,cljs.core.cst$kw$difference,cljs.core.cst$kw$exclusion,cljs.core.cst$kw$hard_DASH_light,cljs.core.cst$kw$multiply,cljs.core.cst$kw$lightest,cljs.core.cst$kw$blend,cljs.core.cst$kw$add,cljs.core.cst$kw$soft_DASH_light,cljs.core.cst$kw$subtract],[(Processing.prototype.PConstants["BURN"]),(Processing.prototype.PConstants["SCREEN"]),(Processing.prototype.PConstants["DARKEST"]),(Processing.prototype.PConstants["DODGE"]),(Processing.prototype.PConstants["REPLACE"]),(Processing.prototype.PConstants["OVERLAY"]),(Processing.prototype.PConstants["DIFFERENCE"]),(Processing.prototype.PConstants["EXCLUSION"]),(Processing.prototype.PConstants["HARD_LIGHT"]),(Processing.prototype.PConstants["MULTIPLY"]),(Processing.prototype.PConstants["LIGHTEST"]),(Processing.prototype.PConstants["BLEND"]),(Processing.prototype.PConstants["ADD"]),(Processing.prototype.PConstants["SOFT_LIGHT"]),(Processing.prototype.PConstants["SUBTRACT"])]);

quil.core.color_modes = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$rgb,(Processing.prototype.PConstants["RGB"]),cljs.core.cst$kw$hsb,(Processing.prototype.PConstants["HSB"])], null);

quil.core.image_formats = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$rgb,(Processing.prototype.PConstants["RGB"]),cljs.core.cst$kw$argb,(Processing.prototype.PConstants["ARGB"]),cljs.core.cst$kw$alpha,(Processing.prototype.PConstants["ALPHA"])], null);

quil.core.ellipse_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$center,(Processing.prototype.PConstants["CENTER"]),cljs.core.cst$kw$radius,(Processing.prototype.PConstants["RADIUS"]),cljs.core.cst$kw$corner,(Processing.prototype.PConstants["CORNER"]),cljs.core.cst$kw$corners,(Processing.prototype.PConstants["CORNERS"])], null);

quil.core.hint_options = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$disable_DASH_stroke_DASH_perspective,cljs.core.cst$kw$disable_DASH_depth_DASH_mask,cljs.core.cst$kw$enable_DASH_depth_DASH_test,cljs.core.cst$kw$enable_DASH_depth_DASH_sort,cljs.core.cst$kw$disable_DASH_texture_DASH_mipmaps,cljs.core.cst$kw$disable_DASH_stroke_DASH_pure,cljs.core.cst$kw$disable_DASH_depth_DASH_test,cljs.core.cst$kw$enable_DASH_stroke_DASH_perspective,cljs.core.cst$kw$disable_DASH_optimized_DASH_stroke,cljs.core.cst$kw$enable_DASH_opengl_DASH_errors,cljs.core.cst$kw$enable_DASH_stroke_DASH_pure,cljs.core.cst$kw$enable_DASH_async_DASH_saveframe,cljs.core.cst$kw$enable_DASH_depth_DASH_mask,cljs.core.cst$kw$enable_DASH_optimized_DASH_stroke,cljs.core.cst$kw$disable_DASH_opengl_DASH_errors,cljs.core.cst$kw$disable_DASH_async_DASH_saveframe,cljs.core.cst$kw$disable_DASH_depth_DASH_sort,cljs.core.cst$kw$enable_DASH_texture_DASH_mipmaps],[(Processing.prototype.PConstants["DISABLE_STROKE_PERSPECTIVE"]),(Processing.prototype.PConstants["DISABLE_DEPTH_MASK"]),(Processing.prototype.PConstants["ENABLE_DEPTH_TEST"]),(Processing.prototype.PConstants["ENABLE_DEPTH_SORT"]),(Processing.prototype.PConstants["DISABLE_TEXTURE_MIPMAPS"]),(Processing.prototype.PConstants["DISABLE_STROKE_PURE"]),(Processing.prototype.PConstants["DISABLE_DEPTH_TEST"]),(Processing.prototype.PConstants["ENABLE_STROKE_PERSPECTIVE"]),(Processing.prototype.PConstants["DISABLE_OPTIMIZED_STROKE"]),(Processing.prototype.PConstants["ENABLE_OPENGL_ERRORS"]),(Processing.prototype.PConstants["ENABLE_STROKE_PURE"]),(Processing.prototype.PConstants["ENABLE_ASYNC_SAVEFRAME"]),(Processing.prototype.PConstants["ENABLE_DEPTH_MASK"]),(Processing.prototype.PConstants["ENABLE_OPTIMIZED_STROKE"]),(Processing.prototype.PConstants["DISABLE_OPENGL_ERRORS"]),(Processing.prototype.PConstants["DISABLE_ASYNC_SAVEFRAME"]),(Processing.prototype.PConstants["DISABLE_DEPTH_SORT"]),(Processing.prototype.PConstants["ENABLE_TEXTURE_MIPMAPS"])]);

quil.core.image_modes = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$corner,(Processing.prototype.PConstants["CORNER"]),cljs.core.cst$kw$corners,(Processing.prototype.PConstants["CORNERS"]),cljs.core.cst$kw$center,(Processing.prototype.PConstants["CENTER"])], null);

quil.core.rect_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$corner,(Processing.prototype.PConstants["CORNER"]),cljs.core.cst$kw$corners,(Processing.prototype.PConstants["CORNERS"]),cljs.core.cst$kw$center,(Processing.prototype.PConstants["CENTER"]),cljs.core.cst$kw$radius,(Processing.prototype.PConstants["RADIUS"])], null);

quil.core.p_shape_modes = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$corner,(Processing.prototype.PConstants["CORNER"]),cljs.core.cst$kw$corners,(Processing.prototype.PConstants["CORNERS"]),cljs.core.cst$kw$center,(Processing.prototype.PConstants["CENTER"])], null);

quil.core.stroke_cap_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$square,(Processing.prototype.PConstants["SQUARE"]),cljs.core.cst$kw$round,(Processing.prototype.PConstants["ROUND"]),cljs.core.cst$kw$project,(Processing.prototype.PConstants["PROJECT"]),cljs.core.cst$kw$model,(Processing.prototype.PConstants["MODEL"])], null);

quil.core.stroke_join_modes = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$miter,(Processing.prototype.PConstants["MITER"]),cljs.core.cst$kw$bevel,(Processing.prototype.PConstants["BEVEL"]),cljs.core.cst$kw$round,(Processing.prototype.PConstants["ROUND"])], null);

quil.core.horizontal_alignment_modes = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$left,(Processing.prototype.PConstants["LEFT"]),cljs.core.cst$kw$center,(Processing.prototype.PConstants["CENTER"]),cljs.core.cst$kw$right,(Processing.prototype.PConstants["RIGHT"])], null);

quil.core.vertical_alignment_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$top,(Processing.prototype.PConstants["TOP"]),cljs.core.cst$kw$bottom,(Processing.prototype.PConstants["BOTTOM"]),cljs.core.cst$kw$center,(Processing.prototype.PConstants["CENTER"]),cljs.core.cst$kw$baseline,(Processing.prototype.PConstants["BASELINE"])], null);

quil.core.text_modes = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$model,(Processing.prototype.PConstants["MODEL"]),cljs.core.cst$kw$shape,(Processing.prototype.PConstants["SHAPE"])], null);

quil.core.texture_modes = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$image,(Processing.prototype.PConstants["IMAGE"]),cljs.core.cst$kw$normal,(Processing.prototype.PConstants["NORMAL"])], null);

quil.core.texture_wrap_modes = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$clamp,(Processing.prototype.PConstants["CLAMP"]),cljs.core.cst$kw$repeat,(Processing.prototype.PConstants["REPEAT"])], null);

quil.core.filter_modes = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$threshold,(Processing.prototype.PConstants["THRESHOLD"]),cljs.core.cst$kw$gray,(Processing.prototype.PConstants["GRAY"]),cljs.core.cst$kw$invert,(Processing.prototype.PConstants["INVERT"]),cljs.core.cst$kw$posterize,(Processing.prototype.PConstants["POSTERIZE"]),cljs.core.cst$kw$blur,(Processing.prototype.PConstants["BLUR"]),cljs.core.cst$kw$opaque,(Processing.prototype.PConstants["OPAQUE"]),cljs.core.cst$kw$erode,(Processing.prototype.PConstants["ERODE"]),cljs.core.cst$kw$dilate,(Processing.prototype.PConstants["DILATE"])], null);

quil.core.cursor_modes = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$arrow,(Processing.prototype.PConstants["ARROW"]),cljs.core.cst$kw$cross,(Processing.prototype.PConstants["CROSS"]),cljs.core.cst$kw$hand,(Processing.prototype.PConstants["HAND"]),cljs.core.cst$kw$move,(Processing.prototype.PConstants["MOVE"]),cljs.core.cst$kw$text,(Processing.prototype.PConstants["TEXT"]),cljs.core.cst$kw$wait,(Processing.prototype.PConstants["WAIT"])], null);
quil.core.PI = Math.PI;
quil.core.HALF_PI = (quil.core.PI / 2.0);
quil.core.THIRD_PI = (quil.core.PI / 3.0);
quil.core.QUARTER_PI = (quil.core.PI / 4.0);
quil.core.TWO_PI = (quil.core.PI * 2.0);
quil.core.DEG_TO_RAD = (quil.core.PI / 180.0);
quil.core.RAD_TO_DEG = (180.0 / quil.core.PI);
quil.core.KEY_CODES = cljs.core.PersistentHashMap.fromArrays([(121),(39),(157),(119),(116),(113),(40),(117),(118),(122),(17),(115),(112),(123),(16),(120),(38),(18),(114),(37)],[cljs.core.cst$kw$f10,cljs.core.cst$kw$right,cljs.core.cst$kw$command,cljs.core.cst$kw$f8,cljs.core.cst$kw$f5,cljs.core.cst$kw$f2,cljs.core.cst$kw$down,cljs.core.cst$kw$f6,cljs.core.cst$kw$f7,cljs.core.cst$kw$f11,cljs.core.cst$kw$control,cljs.core.cst$kw$f4,cljs.core.cst$kw$f1,cljs.core.cst$kw$f12,cljs.core.cst$kw$shift,cljs.core.cst$kw$f9,cljs.core.cst$kw$up,cljs.core.cst$kw$alt,cljs.core.cst$kw$f3,cljs.core.cst$kw$left]);
/**
 * Writes to the text area of the Processing environment's console.
 *   This is often helpful for looking at the data a program is producing.
 *   Each call to this function creates a new line of output.
 *   Individual elements can be separated with quotes ("") and joined with the string concatenation operator (+).
 *   Also writes the content of an array to the text area of the Processing environment.
 *   This is often helpful for looking at the data a program is producing.
 *   A new line is put between each element of the array. This function can only print 1D arrays,
 *   but can test to see if the content are null or not null for 2+ dimensional arrays.
 */
quil.core.prc_println = (function quil$core$prc_println(msg){
return quil.sketch.current_applet().println(msg);
});
/**
 * Writes to the console area of the Processing environment.
 *   This is often helpful for looking at the data a program is producing.
 *   The companion function println() works like print(), but creates a new line of text for each call to the function.
 * Individual elements can be separated with quotes ("") and joined with the addition operator (+). 
 */
quil.core.prc_print = (function quil$core$prc_print(msg){
return quil.sketch.current_applet().print(msg);
});
/**
 * Returns sketch object by id of canvas element of sketch.
 */
quil.core.get_sketch_by_id = (function quil$core$get_sketch_by_id(id){
return Processing.getInstanceById(id);
});
var ret__4684__auto___5564 = (function (){
quil.core.with_sketch = (function quil$core$with_sketch(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5565 = arguments.length;
var i__4642__auto___5566 = (0);
while(true){
if((i__4642__auto___5566 < len__4641__auto___5565)){
args__4647__auto__.push((arguments[i__4642__auto___5566]));

var G__5567 = (i__4642__auto___5566 + (1));
i__4642__auto___5566 = G__5567;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return quil.core.with_sketch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

quil.core.with_sketch.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,applet,body){
if(quil.util.clj_compilation_QMARK_()){
return null;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$quil$sketch_SLASH_with_DASH_sketch,null,(1),null)),(new cljs.core.List(null,applet,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}
});

quil.core.with_sketch.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
quil.core.with_sketch.cljs$lang$applyTo = (function (seq5560){
var G__5561 = cljs.core.first(seq5560);
var seq5560__$1 = cljs.core.next(seq5560);
var G__5562 = cljs.core.first(seq5560__$1);
var seq5560__$2 = cljs.core.next(seq5560__$1);
var G__5563 = cljs.core.first(seq5560__$2);
var seq5560__$3 = cljs.core.next(seq5560__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5561,G__5562,G__5563,seq5560__$3);
});

return null;
})()
;
quil.core.with_sketch.cljs$lang$macro = true;

/**
 * Retrieve sketch-specific state-atom. All changes to the
 *   atom will be reflected in the state.
 * 
 *   (set-state! :foo 1)
 *   (state :foo) ;=> 1
 *   (swap! (state-atom) update-in [:foo] inc)
 *   (state :foo) ;=> 2
 */
quil.core.state_atom = (function quil$core$state_atom(){
return quil.sketch.current_applet().quil;
});
/**
 * Returns atom representing internal sketch state. Can be used by
 *   functions to save implementation-specific state. This state is
 *   supposed to be visible to users.
 */
quil.core.internal_state = (function quil$core$internal_state(){
return quil.sketch.current_applet().quil_internal_state;
});
/**
 * Retrieve sketch-specific state by key. Must initially call
 *   set-state! to store state. If no parameter passed whole
 *   state map is returned.
 * 
 *   (set-state! :foo 1)
 *   (state :foo) ;=> 1
 *   (state) ;=> {:foo 1}
 */
quil.core.state = (function quil$core$state(var_args){
var G__5569 = arguments.length;
switch (G__5569) {
case 0:
return quil.core.state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quil.core.state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.state.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.deref(quil.core.state_atom());
});

quil.core.state.cljs$core$IFn$_invoke$arity$1 = (function (key){
var state = quil.core.state.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.contains_QMARK_(state,key)){
} else {
throw Error(["Unable to find state with key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''));
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,key);
});

quil.core.state.cljs$lang$maxFixedArity = 1;

/**
 * Set sketch-specific state. May only be called once (ideally in the
 *   setup fn).  Subsequent calls have no effect.
 * 
 *   Example:
 *   (set-state! :foo 1 :bar (atom true) :baz (/ (width) 2))
 */
quil.core.set_state_BANG_ = (function quil$core$set_state_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5572 = arguments.length;
var i__4642__auto___5573 = (0);
while(true){
if((i__4642__auto___5573 < len__4641__auto___5572)){
args__4647__auto__.push((arguments[i__4642__auto___5573]));

var G__5574 = (i__4642__auto___5573 + (1));
i__4642__auto___5573 = G__5574;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return quil.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

quil.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state_vals){
var state_STAR_ = quil.core.state_atom();
if(cljs.core.truth_(cljs.core.deref(state_STAR_))){
return null;
} else {
var state_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,state_vals);
return cljs.core.reset_BANG_(state_STAR_,state_map);
}
});

quil.core.set_state_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
quil.core.set_state_BANG_.cljs$lang$applyTo = (function (seq5571){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5571));
});

/**
 * Calculates the absolute value (magnitude) of a number. The
 *   absolute value of a number is always positive. Dynamically casts to
 *   an int or float appropriately for Clojure.
 */
quil.core.abs = (function quil$core$abs(n){
return quil.sketch.current_applet().abs(n);
});
/**
 * The inverse of cos, returns the arc cosine of a value. This
 *   function expects the values in the range of -1 to 1 and values are
 *   returned in the range 0 to Math/PI (3.1415927).
 */
quil.core.acos = (function quil$core$acos(n){
return quil.sketch.current_applet().acos(n);
});
/**
 * Extracts the alpha value from a color.
 */
quil.core.alpha = (function quil$core$alpha(color){
return quil.core.current_graphics().alpha(cljs.core.unchecked_int(color));
});
/**
 * Sets the ambient reflectance for shapes drawn to the screen. This
 *   is combined with the ambient light component of environment. The
 *   color components set through the parameters define the
 *   reflectance. For example in the default color mode, setting x=255,
 *   y=126, z=0, would cause all the red light to reflect and half of the
 *   green light to reflect. Used in combination with emissive, specular,
 *   and shininess in setting the material properties of shapes.
 */
quil.core.ambient = (function quil$core$ambient(var_args){
var G__5576 = arguments.length;
switch (G__5576) {
case 1:
return quil.core.ambient.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return quil.core.ambient.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.ambient.cljs$core$IFn$_invoke$arity$1 = (function (gray){
return quil.core.current_graphics().ambient(gray);
});

quil.core.ambient.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return quil.core.current_graphics().ambient(r,g,b);
});

quil.core.ambient.cljs$lang$maxFixedArity = 3;

/**
 * Adds an ambient light. Ambient light doesn't come from a specific direction,
 *   the rays have light have bounced around so much that objects are
 *   evenly lit from all sides. Ambient lights are almost always used in
 *   combination with other types of lights. Lights need to be included
 *   in the draw to remain persistent in a looping program. Placing them
 *   in the setup of a looping program will cause them to only have an
 *   effect the first time through the loop. The effect of the
 *   parameters is determined by the current color mode.
 */
quil.core.ambient_light = (function quil$core$ambient_light(var_args){
var G__5579 = arguments.length;
switch (G__5579) {
case 3:
return quil.core.ambient_light.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 6:
return quil.core.ambient_light.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.ambient_light.cljs$core$IFn$_invoke$arity$3 = (function (red,green,blue){
return quil.core.current_graphics().ambientLight(red,green,blue);
});

quil.core.ambient_light.cljs$core$IFn$_invoke$arity$6 = (function (red,green,blue,x,y,z){
return quil.core.current_graphics().ambientLight(red,green,blue,x,y,z);
});

quil.core.ambient_light.cljs$lang$maxFixedArity = 6;

/**
 * Multiplies the current matrix by the one specified through the
 *   parameters. This is very slow because it will try to calculate the
 *   inverse of the transform, so avoid it whenever possible. The
 *   equivalent function in OpenGL is glMultMatrix().
 */
quil.core.apply_matrix = (function quil$core$apply_matrix(n00,n01,n02,n03,n10,n11,n12,n13,n20,n21,n22,n23,n30,n31,n32,n33){
return quil.core.current_graphics().applyMatrix(n00,n01,n02,n03,n10,n11,n12,n13,n20,n21,n22,n23,n30,n31,n32,n33);
});
/**
 * Draws an arc in the display window. Arcs are drawn along the outer
 *   edge of an ellipse defined by the x, y, width and height
 *   parameters. The origin or the arc's ellipse may be changed with the
 *   ellipse-mode function. The start and stop parameters specify the
 *   angles at which to draw the arc. The mode is either :open, :chord or :pie.
 */
quil.core.arc = (function quil$core$arc(x,y,width,height,start,stop){
return quil.core.current_graphics().arc(x,y,width,height,start,stop);
});
/**
 * The inverse of sin, returns the arc sine of a value. This function
 *   expects the values in the range of -1 to 1 and values are returned
 *   in the range -PI/2 to PI/2.
 */
quil.core.asin = (function quil$core$asin(n){
return quil.sketch.current_applet().asin(n);
});
/**
 * The inverse of tan, returns the arc tangent of a value. This
 *   function expects the values in the range of -Infinity to
 *   Infinity (exclusive) and values are returned in the range -PI/2 to
 *   PI/2 .
 */
quil.core.atan = (function quil$core$atan(n){
return quil.sketch.current_applet().atan(n);
});
/**
 * Calculates the angle (in radians) from a specified point to the
 *   coordinate origin as measured from the positive x-axis. Values are
 *   returned as a float in the range from PI to -PI. The atan2 function
 *   is most often used for orienting geometry to the position of the
 *   cursor. Note: The y-coordinate of the point is the first parameter
 *   and the x-coordinate is the second due to the structure of
 *   calculating the tangent.
 */
quil.core.atan2 = (function quil$core$atan2(y,x){
return quil.sketch.current_applet().atan2(y,x);
});
/**
 * A sequence of strings representing the fonts on this system
 *   available for use.
 * 
 *   Because of limitations in Java, not all fonts can be used and some
 *   might work with one operating system and not others. When sharing a
 *   sketch with other people or posting it on the web, you may need to
 *   include a .ttf or .otf version of your font in the data directory of
 *   the sketch because other people might not have the font installed on
 *   their computer. Only fonts that can legally be distributed should be
 *   included with a sketch.
 */
quil.core.available_fonts = (function quil$core$available_fonts(){
return cljs.core.seq(PFont.list());
});
/**
 * Sets the color used for the background of the Processing
 *   window. The default background is light gray. In the draw function,
 *   the background color is used to clear the display window at the
 *   beginning of each frame.
 * 
 *   It is not possible to use transparency (alpha) in background colors
 *   with the main drawing surface, however they will work properly with
 *   create-graphics. Converts args to floats.
 */
quil.core.background = (function quil$core$background(var_args){
var G__5582 = arguments.length;
switch (G__5582) {
case 1:
return quil.core.background.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.background.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.background.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.background.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.background.cljs$core$IFn$_invoke$arity$1 = (function (gray){
return quil.core.current_graphics().background(gray);
});

quil.core.background.cljs$core$IFn$_invoke$arity$2 = (function (gray,alpha){
return quil.core.current_graphics().background(gray,alpha);
});

quil.core.background.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return quil.core.current_graphics().background(r,g,b);
});

quil.core.background.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return quil.core.current_graphics().background(r,g,b,a);
});

quil.core.background.cljs$lang$maxFixedArity = 4;

/**
 * Specify an image to be used as the background for a sketch. Its
 *   width and height must be the same size as the sketch window. Images
 *   used as background will ignore the current tint setting.
 */
quil.core.background_image = (function quil$core$background_image(img){
return quil.core.current_graphics().background(img);
});
/**
 * Sets the matrix mode to the camera matrix so calls such as
 *   translate, rotate, apply-matrix and reset-matrix affect the
 *   camera. begin-camera should always be used with a following
 *   end-camera and pairs of begin-camera and end-camera cannot be
 *   nested.
 * 
 *   For most situations the camera function will be sufficient.
 */
quil.core.begin_camera = (function quil$core$begin_camera(){
return quil.core.current_graphics().beginCamera();
});
/**
 * Use the begin-contour and end-contour function to create negative
 *   shapes within shapes. These functions can only be within a
 *   begin-shape/end-shape pair and they only work with the :p2d and :p3d
 *   renderers.
 */
quil.core.begin_contour = (function quil$core$begin_contour(){
return quil.core.current_graphics().beginContour();
});
/**
 * Enables the creation of complex forms. begin-shape begins recording
 *   vertices for a shape and end-shape stops recording. Use the mode
 *   keyword to specify which shape create from the provided
 *   vertices. With no mode specified, the shape can be any irregular
 *   polygon.
 * 
 *   The available mode keywords are :points, :lines, :triangles,
 *                                :triangle-fan, :triangle-strip,
 *                                :quads, :quad-strip.
 * 
 *   After calling the begin-shape function, a series of vertex commands
 *   must follow. To stop drawing the shape, call end-shape. The vertex
 *   function with two parameters specifies a position in 2D and the
 *   vertex function with three parameters specifies a position in
 *   3D. Each shape will be outlined with the current stroke color and
 *   filled with the fill color.
 * 
 *   Transformations such as translate, rotate, and scale do not work
 *   within begin-shape. It is also not possible to use other shapes,
 *   such as ellipse or rect within begin-shape.
 */
quil.core.begin_shape = (function quil$core$begin_shape(var_args){
var G__5585 = arguments.length;
switch (G__5585) {
case 0:
return quil.core.begin_shape.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quil.core.begin_shape.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.begin_shape.cljs$core$IFn$_invoke$arity$0 = (function (){
return quil.core.current_graphics().beginShape();
});

quil.core.begin_shape.cljs$core$IFn$_invoke$arity$1 = (function (mode){
var mode__$1 = quil.util.resolve_constant_key(mode,quil.core.shape_modes);
return quil.core.current_graphics().beginShape((mode__$1 | (0)));
});

quil.core.begin_shape.cljs$lang$maxFixedArity = 1;

/**
 * Draws a Bezier curve on the screen. These curves are defined by a
 *   series of anchor and control points. The first two parameters
 *   specify the first anchor point and the last two parameters specify
 *   the other anchor point. The middle parameters specify the control
 *   points which define the shape of the curve.
 */
quil.core.bezier = (function quil$core$bezier(var_args){
var G__5588 = arguments.length;
switch (G__5588) {
case 8:
return quil.core.bezier.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 12:
return quil.core.bezier.cljs$core$IFn$_invoke$arity$12((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.bezier.cljs$core$IFn$_invoke$arity$8 = (function (x1,y1,cx1,cy1,cx2,cy2,x2,y2){
return quil.core.current_graphics().bezier(x1,y1,cx1,cy1,cx2,cy2,x2,y2);
});

quil.core.bezier.cljs$core$IFn$_invoke$arity$12 = (function (x1,y1,z1,cx1,cy1,cz1,cx2,cy2,cz2,x2,y2,z2){
return quil.core.current_graphics().bezier(x1,y1,z1,cx1,cy1,cz1,cx2,cy2,cz2,x2,y2,z2);
});

quil.core.bezier.cljs$lang$maxFixedArity = 12;

/**
 * Sets the resolution at which Beziers display. The default value is
 *   20. This function is only useful when using the :p3d or :opengl
 *   renderer as the default (:java2d) renderer does not use this
 *   information.
 */
quil.core.bezier_detail = (function quil$core$bezier_detail(detail){
return quil.core.current_graphics().bezierDetail((detail | (0)));
});
/**
 * Evaluates the Bezier at point t for points a, b, c, d. The
 *   parameter t varies between 0 and 1, a and d are points on the curve,
 *   and b and c are the control points. This can be done once with the x
 *   coordinates and a second time with the y coordinates to get the
 *   location of a bezier curve at t.
 */
quil.core.bezier_point = (function quil$core$bezier_point(a,b,c,d,t){
return quil.core.current_graphics().bezierPoint(a,b,c,d,t);
});
/**
 * Calculates the tangent of a point on a Bezier curve.
 *   (See http://en.wikipedia.org/wiki/Tangent)
 */
quil.core.bezier_tangent = (function quil$core$bezier_tangent(a,b,c,d,t){
return quil.core.current_graphics().bezierTangent(a,b,c,d,t);
});
/**
 * Specifies vertex coordinates for Bezier curves. Each call to
 *   bezier-vertex defines the position of two control points and one
 *   anchor point of a Bezier curve, adding a new segment to a line or
 *   shape. The first time bezier-vertex is used within a begin-shape
 *   call, it must be prefaced with a call to vertex to set the first
 *   anchor point. This function must be used between begin-shape and
 *   end-shape and only when there is no parameter specified to
 *   begin-shape.
 */
quil.core.bezier_vertex = (function quil$core$bezier_vertex(var_args){
var G__5591 = arguments.length;
switch (G__5591) {
case 6:
return quil.core.bezier_vertex.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 9:
return quil.core.bezier_vertex.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.bezier_vertex.cljs$core$IFn$_invoke$arity$6 = (function (cx1,cy1,cx2,cy2,x,y){
return quil.core.current_graphics().bezierVertex(cx1,cy1,cx2,cy2,x,y);
});

quil.core.bezier_vertex.cljs$core$IFn$_invoke$arity$9 = (function (cx1,cy1,cz1,cx2,cy2,cz2,x,y,z){
return quil.core.current_graphics().bezierVertex(cx1,cy1,cz1,cx2,cy2,cz2,x,y,z);
});

quil.core.bezier_vertex.cljs$lang$maxFixedArity = 9;

/**
 * Returns a string representing the binary value of an int, char or
 *   byte. When converting an int to a string, it is possible to specify
 *   the number of digits used.
 */
quil.core.binary = (function quil$core$binary(var_args){
var G__5594 = arguments.length;
switch (G__5594) {
case 1:
return quil.core.binary.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.binary.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.binary.cljs$core$IFn$_invoke$arity$1 = (function (val){
return quil.sketch.current_applet().binary(val);
});

quil.core.binary.cljs$core$IFn$_invoke$arity$2 = (function (val,num_digits){
return quil.sketch.current_applet().binary(val,num_digits);
});

quil.core.binary.cljs$lang$maxFixedArity = 2;

/**
 * Blends a region of pixels from one image into another with full alpha
 *   channel support. If src is not specified it defaults to current-graphics.
 *   If dest is not specified it defaults to current-graphics.
 * 
 *   Note: blend-mode function is recommended to use instead of this one.
 * 
 *   Available blend modes are:
 * 
 *   :blend      - linear interpolation of colours: C = A*factor + B
 *   :add        - additive blending with white clip:
 *                                          C = min(A*factor + B, 255)
 *   :subtract   - subtractive blending with black clip:
 *                                          C = max(B - A*factor, 0)
 *   :darkest    - only the darkest colour succeeds:
 *                                          C = min(A*factor, B)
 *   :lightest   - only the lightest colour succeeds:
 *                                          C = max(A*factor, B)
 *   :difference - subtract colors from underlying image.
 *   :exclusion  - similar to :difference, but less extreme.
 *   :multiply   - Multiply the colors, result will always be darker.
 *   :screen     - Opposite multiply, uses inverse values of the colors.
 *   :overlay    - A mix of :multiply and :screen. Multiplies dark values
 *              and screens light values.
 *   :hard-light - :screen when greater than 50% gray, :multiply when
 *              lower.
 *   :soft-light - Mix of :darkest and :lightest. Works like :overlay,
 *              but not as harsh.
 *   :dodge      - Lightens light tones and increases contrast, ignores
 *              darks.
 *              Called "Color Dodge" in Illustrator and Photoshop.
 *   :burn       - Darker areas are applied, increasing contrast, ignores
 *              lights. Called "Color Burn" in Illustrator and
 *              Photoshop.
 */
quil.core.blend = (function quil$core$blend(var_args){
var G__5597 = arguments.length;
switch (G__5597) {
case 9:
return quil.core.blend.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return quil.core.blend.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return quil.core.blend.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.blend.cljs$core$IFn$_invoke$arity$9 = (function (x,y,width,height,dx,dy,dwidth,dheight,mode){
return quil.core.blend.cljs$core$IFn$_invoke$arity$11(quil.core.current_graphics(),quil.core.current_graphics(),x,y,width,height,dx,dy,dwidth,dheight,mode);
});

quil.core.blend.cljs$core$IFn$_invoke$arity$10 = (function (src_img,x,y,width,height,dx,dy,dwidth,dheight,mode){
return quil.core.blend.cljs$core$IFn$_invoke$arity$11(src_img,quil.core.current_graphics(),x,y,width,height,dx,dy,dwidth,dheight,mode);
});

quil.core.blend.cljs$core$IFn$_invoke$arity$11 = (function (src_img,dest_img,x,y,width,height,dx,dy,dwidth,dheight,mode){
var mode__$1 = quil.util.resolve_constant_key(mode,quil.core.blend_modes);
return dest_img.blend(src_img,(x | (0)),(y | (0)),(width | (0)),(height | (0)),(dx | (0)),(dy | (0)),(dwidth | (0)),(dheight | (0)),(mode__$1 | (0)));
});

quil.core.blend.cljs$lang$maxFixedArity = 11;

/**
 * Blends two color values together based on the blending mode given specified
 *   with the mode keyword.
 * 
 *   Available blend modes are:
 * 
 *   :blend      - linear interpolation of colours: C = A*factor + B
 *   :add        - additive blending with white clip:
 *                                          C = min(A*factor + B, 255)
 *   :subtract   - subtractive blending with black clip:
 *                                          C = max(B - A*factor, 0)
 *   :darkest    - only the darkest colour succeeds:
 *                                          C = min(A*factor, B)
 *   :lightest   - only the lightest colour succeeds:
 *                                          C = max(A*factor, B)
 *   :difference - subtract colors from underlying image.
 *   :exclusion  - similar to :difference, but less extreme.
 *   :multiply   - Multiply the colors, result will always be darker.
 *   :screen     - Opposite multiply, uses inverse values of the colors.
 *   :overlay    - A mix of :multiply and :screen. Multiplies dark values
 *              and screens light values.
 *   :hard-light - :screen when greater than 50% gray, :multiply when
 *              lower.
 *   :soft-light - Mix of :darkest and :lightest. Works like :overlay,
 *              but not as harsh.
 *   :dodge      - Lightens light tones and increases contrast, ignores
 *              darks.
 *              Called "Color Dodge" in Illustrator and Photoshop.
 *   :burn       - Darker areas are applied, increasing contrast, ignores
 *              lights. Called "Color Burn" in Illustrator and
 *              Photoshop.
 */
quil.core.blend_color = (function quil$core$blend_color(c1,c2,mode){
var mode__$1 = quil.util.resolve_constant_key(mode,quil.core.blend_modes);
return quil.core.current_graphics().blendColor(c1,c2,mode__$1);
});
/**
 * Extracts the blue value from a color, scaled to match current color-mode.
 *   Returns a float.
 */
quil.core.blue = (function quil$core$blue(color){
return quil.core.current_graphics().blue(cljs.core.unchecked_int(color));
});
/**
 * Creates an extruded rectangle.
 */
quil.core.box = (function quil$core$box(var_args){
var G__5600 = arguments.length;
switch (G__5600) {
case 1:
return quil.core.box.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return quil.core.box.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.box.cljs$core$IFn$_invoke$arity$1 = (function (size){
return quil.core.current_graphics().box(size);
});

quil.core.box.cljs$core$IFn$_invoke$arity$3 = (function (width,height,depth){
return quil.core.current_graphics().box(width,height,depth);
});

quil.core.box.cljs$lang$maxFixedArity = 3;

/**
 * Extracts the brightness value from a color. Returns a float.
 */
quil.core.brightness = (function quil$core$brightness(color){
return quil.core.current_graphics().brightness(cljs.core.unchecked_int(color));
});
/**
 * Sets the position of the camera through setting the eye position,
 *   the center of the scene, and which axis is facing upward. Moving the
 *   eye position and the direction it is pointing (the center of the
 *   scene) allows the images to be seen from different angles. The
 *   version without any parameters sets the camera to the default
 *   position, pointing to the center of the display window with the Y
 *   axis as up. The default values are:
 * 
 *   eyeX:     (/ (width) 2.0)
 *   eyeY:     (/ (height) 2.0)
 *   eyeZ:     (/ (/ (height) 2.0) (tan (/ (* Math/PI 60.0) 360.0)))
 *   centerX:  (/ (width) 2.0)
 *   centerY:  (/ (height) 2.0)
 *   centerZ:  0
 *   upX:      0
 *   upY:      1
 *   upZ:      0
 * 
 *   Similar imilar to gluLookAt() in OpenGL, but it first clears the
 *   current camera settings.
 */
quil.core.camera = (function quil$core$camera(var_args){
var G__5603 = arguments.length;
switch (G__5603) {
case 0:
return quil.core.camera.cljs$core$IFn$_invoke$arity$0();

break;
case 9:
return quil.core.camera.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.camera.cljs$core$IFn$_invoke$arity$0 = (function (){
return quil.core.current_graphics().camera();
});

quil.core.camera.cljs$core$IFn$_invoke$arity$9 = (function (eyeX,eyeY,eyeZ,centerX,centerY,centerZ,upX,upY,upZ){
return quil.core.current_graphics().camera(eyeX,eyeY,eyeZ,centerX,centerY,centerZ,upX,upY,upZ);
});

quil.core.camera.cljs$lang$maxFixedArity = 9;

/**
 * Calculates the closest int value that is greater than or equal to
 *   the value of the parameter. For example, (ceil 9.03) returns the
 *   value 10.
 */
quil.core.ceil = (function quil$core$ceil(n){
return quil.sketch.current_applet().ceil(n);
});
/**
 * Creates an integer representation of a color The parameters are
 *   interpreted as RGB or HSB values depending on the current
 *   color-mode. The default mode is RGB values from 0 to 255 and
 *   therefore, the function call (color 255 204 0) will return a bright
 *   yellow. Args are cast to floats.
 * 
 *   r - red or hue value
 *   g - green or saturation value
 *   b - blue or brightness value
 *   a - alpha value
 */
quil.core.color = (function quil$core$color(var_args){
var G__5606 = arguments.length;
switch (G__5606) {
case 1:
return quil.core.color.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.color.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.color.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.color.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.color.cljs$core$IFn$_invoke$arity$1 = (function (gray){
return quil.core.current_graphics().color(gray);
});

quil.core.color.cljs$core$IFn$_invoke$arity$2 = (function (gray,alpha){
return quil.core.current_graphics().color(gray,alpha);
});

quil.core.color.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return quil.core.current_graphics().color(r,g,b);
});

quil.core.color.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return quil.core.current_graphics().color(r,g,b,a);
});

quil.core.color.cljs$lang$maxFixedArity = 4;

/**
 * Changes the way Processing interprets color data. Available modes
 *   are :rgb and :hsb.By default, the parameters for fill, stroke,
 *   background, and color are defined by values between 0 and 255 using
 *   the :rgb color model. The color-mode fn is used to change the
 *   numerical range used for specifying colors and to switch color
 *   systems. For example, calling
 *   (color-mode :rgb 1.0) will specify that values are specified between
 *   0 and 1. The limits for defining colors are altered by setting the
 *   parameters range1, range2, range3, and range 4.
 */
quil.core.color_mode = (function quil$core$color_mode(var_args){
var G__5609 = arguments.length;
switch (G__5609) {
case 1:
return quil.core.color_mode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.color_mode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return quil.core.color_mode.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return quil.core.color_mode.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1 = (function (mode){
var mode__$1 = quil.util.resolve_constant_key(mode,quil.core.color_modes);
return quil.core.current_graphics().colorMode((mode__$1 | (0)));
});

quil.core.color_mode.cljs$core$IFn$_invoke$arity$2 = (function (mode,max){
var mode__$1 = quil.util.resolve_constant_key(mode,quil.core.color_modes);
return quil.core.current_graphics().colorMode((mode__$1 | (0)),max);
});

quil.core.color_mode.cljs$core$IFn$_invoke$arity$4 = (function (mode,max_x,max_y,max_z){
var mode__$1 = quil.util.resolve_constant_key(mode,quil.core.color_modes);
return quil.core.current_graphics().colorMode((mode__$1 | (0)),max_x,max_y,max_z);
});

quil.core.color_mode.cljs$core$IFn$_invoke$arity$5 = (function (mode,max_x,max_y,max_z,max_a){
var mode__$1 = quil.util.resolve_constant_key(mode,quil.core.color_modes);
return quil.core.current_graphics().colorMode((mode__$1 | (0)),max_x,max_y,max_z,max_a);
});

quil.core.color_mode.cljs$lang$maxFixedArity = 5;

/**
 * Constrains a value to not exceed a maximum and minimum value.
 */
quil.core.constrain = (function quil$core$constrain(amt,low,high){
return quil.sketch.current_applet().constrain(amt,low,high);
});
/**
 * Copies a region of pixels from the one image to another. If src-img
 *   is not specified it defaults to current-graphics. If dest-img is not
 *   specified - it defaults to current-graphics. If the source
 *   and destination regions aren't the same size, it will automatically
 *   resize the source pixels to fit the specified target region. No
 *   alpha information is used in the process, however if the source
 *   image has an alpha channel set, it will be copied as well. 
 */
quil.core.copy = (function quil$core$copy(var_args){
var G__5612 = arguments.length;
switch (G__5612) {
case 2:
return quil.core.copy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.copy.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.copy.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.copy.cljs$core$IFn$_invoke$arity$2 = (function (p__5613,p__5614){
var vec__5615 = p__5613;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5615,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5615,(1),null);
var swidth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5615,(2),null);
var sheight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5615,(3),null);
var vec__5618 = p__5614;
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5618,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5618,(1),null);
var dwidth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5618,(2),null);
var dheight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5618,(3),null);
return quil.core.current_graphics().copy((sx | (0)),(sy | (0)),(swidth | (0)),(sheight | (0)),(dx | (0)),(dy | (0)),(dwidth | (0)),(dheight | (0)));
});

quil.core.copy.cljs$core$IFn$_invoke$arity$3 = (function (src_img,p__5621,p__5622){
var vec__5623 = p__5621;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5623,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5623,(1),null);
var swidth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5623,(2),null);
var sheight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5623,(3),null);
var vec__5626 = p__5622;
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5626,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5626,(1),null);
var dwidth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5626,(2),null);
var dheight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5626,(3),null);
return quil.core.copy.cljs$core$IFn$_invoke$arity$4(src_img,quil.core.current_graphics(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy,swidth,sheight], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy,dwidth,dheight], null));
});

quil.core.copy.cljs$core$IFn$_invoke$arity$4 = (function (src_img,dest_img,p__5629,p__5630){
var vec__5631 = p__5629;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5631,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5631,(1),null);
var swidth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5631,(2),null);
var sheight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5631,(3),null);
var vec__5634 = p__5630;
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5634,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5634,(1),null);
var dwidth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5634,(2),null);
var dheight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5634,(3),null);
return dest_img.copy(src_img,(sx | (0)),(sy | (0)),(swidth | (0)),(sheight | (0)),(dx | (0)),(dy | (0)),(dwidth | (0)),(dheight | (0)));
});

quil.core.copy.cljs$lang$maxFixedArity = 4;

/**
 * Calculates the cosine of an angle. This function expects the values
 *   of the angle parameter to be provided in radians (values from 0 to
 *   Math/PI*2). Values are returned in the range -1 to 1.
 */
quil.core.cos = (function quil$core$cos(angle){
return quil.sketch.current_applet().cos(angle);
});
/**
 * Dynamically converts a font to the format used by Processing (a
 *   PFont) from either a font name that's installed on the computer, or
 *   from a .ttf or .otf file inside the sketches 'data' folder. This
 *   function is an advanced feature for precise control.
 * 
 *   Use available-fonts to obtain the names for the fonts recognized by
 *   the computer and are compatible with this function.
 * 
 *   The size parameter states the font size you want to generate. The
 *   smooth parameter specifies if the font should be antialiased or not,
 *   and the charset parameter is an array of chars that specifies the
 *   characters to generate.
 * 
 *   This function creates a bitmapped version of a font It loads a font
 *   by name, and converts it to a series of images based on the size of
 *   the font. When possible, the text function will use a native font
 *   rather than the bitmapped version created behind the scenes with
 *   create-font. For instance, when using the default renderer
 *   setting (JAVA2D), the actual native version of the font will be
 *   employed by the sketch, improving drawing quality and
 *   performance. With the :p2d, :p3d, and :opengl renderer settings, the
 *   bitmapped version will be used. While this can drastically improve
 *   speed and appearance, results are poor when exporting if the sketch
 *   does not include the .otf or .ttf file, and the requested font is
 *   not available on the machine running the sketch.
 */
quil.core.create_font = (function quil$core$create_font(var_args){
var G__5639 = arguments.length;
switch (G__5639) {
case 2:
return quil.core.create_font.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.create_font.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.create_font.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.create_font.cljs$core$IFn$_invoke$arity$2 = (function (name,size){
return quil.sketch.current_applet().createFont(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),size);
});

quil.core.create_font.cljs$core$IFn$_invoke$arity$3 = (function (name,size,smooth){
return quil.sketch.current_applet().createFont(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),size,smooth);
});

quil.core.create_font.cljs$core$IFn$_invoke$arity$4 = (function (name,size,smooth,charset){
return quil.sketch.current_applet().createFont(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),size,smooth,charset);
});

quil.core.create_font.cljs$lang$maxFixedArity = 4;

/**
 * Creates and returns a new PGraphics object of the types :p2d, :p3d,
 *   :java2d, :pdf. By default :java2d is used. Use this class if you
 *   need to draw into an off-screen graphics buffer. It's not possible
 *   to use create-graphics with the :opengl renderer, because it doesn't
 *   allow offscreen use. The :pdf renderer requires the filename parameter.
 * 
 *   Note: don't use create-graphics in draw in clojurescript, it leaks memory.
 *   You should create graphic in setup and reuse it in draw instead of creating
 *   a new one.
 * 
 *   It's important to call any drawing commands between (.beginDraw graphics) and
 *   (.endDraw graphics) statements or use with-graphics macro. This is also true
 *   for any commands that affect drawing, such as smooth or color-mode.
 * 
 *   If you're using :pdf renderer - don't forget to call (.dispose graphics)
 *   as last command inside with-graphics macro, otherwise graphics won't be
 *   saved.
 * 
 *   Unlike the main drawing surface which is completely opaque, surfaces
 *   created with create-graphics can have transparency. This makes it
 *   possible to draw into a graphics and maintain the alpha channel. By
 *   using save to write a PNG or TGA file, the transparency of the
 *   graphics object will be honored.
 */
quil.core.create_graphics = (function quil$core$create_graphics(var_args){
var G__5642 = arguments.length;
switch (G__5642) {
case 2:
return quil.core.create_graphics.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.create_graphics.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.create_graphics.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.create_graphics.cljs$core$IFn$_invoke$arity$2 = (function (w,h){
return quil.sketch.current_applet().createGraphics((w | (0)),(h | (0)),cljs.core.cst$kw$p2d);
});

quil.core.create_graphics.cljs$core$IFn$_invoke$arity$3 = (function (w,h,renderer){
return quil.sketch.current_applet().createGraphics((w | (0)),(h | (0)),quil.sketch.resolve_renderer(renderer));
});

quil.core.create_graphics.cljs$core$IFn$_invoke$arity$4 = (function (w,h,renderer,path){
return quil.sketch.current_applet().createGraphics((w | (0)),(h | (0)),quil.sketch.resolve_renderer(renderer),path);
});

quil.core.create_graphics.cljs$lang$maxFixedArity = 4;

/**
 * Creates a new PImage (the datatype for storing images). This
 *   provides a fresh buffer of pixels to play with. Set the size of the
 *   buffer with the width and height parameters. The format parameter
 *   defines how the pixels are stored. See the PImage reference for more
 *   information.
 * 
 *   Possible formats: :rgb, :argb, :alpha (grayscale alpha channel)
 * 
 *   Prefer using create-image over initialising new PImage instances
 *   directly.
 */
quil.core.create_image = (function quil$core$create_image(w,h,format){
var format__$1 = quil.util.resolve_constant_key(format,quil.core.image_formats);
return quil.sketch.current_applet().createImage((w | (0)),(h | (0)),(format__$1 | (0)));
});
/**
 * Return the current fill color.
 */
quil.core.current_fill = (function quil$core$current_fill(){
return cljs.core.cst$kw$current_DASH_fill.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(quil.core.internal_state()));
});
/**
 * Return the current stroke color.
 */
quil.core.current_stroke = (function quil$core$current_stroke(){
return cljs.core.cst$kw$current_DASH_stroke.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(quil.core.internal_state()));
});
/**
 * Sets the cursor to a predefined symbol or makes it
 *   visible if already hidden (after no-cursor was called).
 * 
 *   Available modes: :arrow, :cross, :hand, :move, :text, :wait
 * 
 *   See cursor-image for specifying a generic image as the cursor
 *   symbol.
 */
quil.core.cursor = (function quil$core$cursor(var_args){
var G__5645 = arguments.length;
switch (G__5645) {
case 0:
return quil.core.cursor.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quil.core.cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.cursor.cljs$core$IFn$_invoke$arity$0 = (function (){
return quil.sketch.current_applet().cursor();
});

quil.core.cursor.cljs$core$IFn$_invoke$arity$1 = (function (cursor_mode){
var cursor_mode__$1 = quil.util.resolve_constant_key(cursor_mode,quil.core.cursor_modes);
return quil.sketch.current_applet().cursor(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cursor_mode__$1));
});

quil.core.cursor.cljs$lang$maxFixedArity = 1;

/**
 * Set the cursor to a predefined image. The horizontal and vertical
 *   active spots of the cursor may be specified with hx and hy.
 *   It is recommended to make the size 16x16 or 32x32 pixels.
 */
quil.core.cursor_image = (function quil$core$cursor_image(var_args){
var G__5648 = arguments.length;
switch (G__5648) {
case 1:
return quil.core.cursor_image.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return quil.core.cursor_image.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.cursor_image.cljs$core$IFn$_invoke$arity$1 = (function (img){
return quil.sketch.current_applet().cursor(img);
});

quil.core.cursor_image.cljs$core$IFn$_invoke$arity$3 = (function (img,hx,hy){
return quil.sketch.current_applet().cursor(img,(hx | (0)),(hy | (0)));
});

quil.core.cursor_image.cljs$lang$maxFixedArity = 3;

/**
 * Draws a curved line on the screen. The first and second parameters
 *   specify the beginning control point and the last two parameters
 *   specify the ending control point. The middle parameters specify the
 *   start and stop of the curve. Longer curves can be created by putting
 *   a series of curve fns together or using curve-vertex. An additional
 *   fn called curve-tightness provides control for the visual quality of
 *   the curve. The curve fn is an implementation of Catmull-Rom
 *   splines.
 */
quil.core.curve = (function quil$core$curve(var_args){
var G__5651 = arguments.length;
switch (G__5651) {
case 8:
return quil.core.curve.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 12:
return quil.core.curve.cljs$core$IFn$_invoke$arity$12((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.curve.cljs$core$IFn$_invoke$arity$8 = (function (x1,y1,x2,y2,x3,y3,x4,y4){
return quil.core.current_graphics().curve(x1,y1,x2,y2,x3,y3,x4,y4);
});

quil.core.curve.cljs$core$IFn$_invoke$arity$12 = (function (x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4){
return quil.core.current_graphics().curve(x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4);
});

quil.core.curve.cljs$lang$maxFixedArity = 12;

/**
 * Sets the resolution at which curves display. The default value is
 *   20. This function is only useful when using the :p3d or :opengl
 *   renderer as the default (:java2d) renderer does not use this
 *   information.
 */
quil.core.curve_detail = (function quil$core$curve_detail(detail){
return quil.core.current_graphics().curveDetail((detail | (0)));
});
/**
 * Evalutes the curve at point t for points a, b, c, d. The parameter
 *   t varies between 0 and 1, a and d are points on the curve, and b c
 *   and are the control points. This can be done once with the x
 *   coordinates and a second time with the y coordinates to get the
 *   location of a curve at t.
 */
quil.core.curve_point = (function quil$core$curve_point(a,b,c,d,t){
return quil.core.current_graphics().curvePoint(a,b,c,d,t);
});
/**
 * Calculates the tangent of a point on a curve.
 *   See: http://en.wikipedia.org/wiki/Tangent
 */
quil.core.curve_tangent = (function quil$core$curve_tangent(a,b,c,d,t){
return quil.core.current_graphics().curveTangent(a,b,c,d,t);
});
/**
 * Modifies the quality of forms created with curve and
 *   curve-vertex. The parameter squishy determines how the curve fits
 *   to the vertex points. The value 0.0 is the default value for
 *   squishy (this value defines the curves to be Catmull-Rom splines)
 *   and the value 1.0 connects all the points with straight
 *   lines. Values within the range -5.0 and 5.0 will deform the curves
 *   but will leave them recognizable and as values increase in
 *   magnitude, they will continue to deform.
 */
quil.core.curve_tightness = (function quil$core$curve_tightness(ti){
return quil.core.current_graphics().curveTightness(ti);
});
/**
 * Specifies vertex coordinates for curves. This function may only be
 *   used between begin-shape and end-shape and only when there is no
 *   mode keyword specified to begin-shape. The first and last points in a
 *   series of curve-vertex lines will be used to guide the beginning and
 *   end of a the curve. A minimum of four points is required to draw a
 *   tiny curve between the second and third points. Adding a fifth point
 *   with curve-vertex will draw the curve between the second, third, and
 *   fourth points. The curve-vertex function is an implementation of
 *   Catmull-Rom splines.
 */
quil.core.curve_vertex = (function quil$core$curve_vertex(var_args){
var G__5654 = arguments.length;
switch (G__5654) {
case 2:
return quil.core.curve_vertex.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.curve_vertex.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.curve_vertex.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return quil.core.current_graphics().curveVertex(x,y);
});

quil.core.curve_vertex.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return quil.core.current_graphics().curveVertex(x,y,z);
});

quil.core.curve_vertex.cljs$lang$maxFixedArity = 3;

/**
 * Get the current day of the month (1 through 31).
 */
quil.core.day = (function quil$core$day(){
return quil.sketch.current_applet().day();
});
/**
 * Converts a radian measurement to its corresponding value in
 *   degrees. Radians and degrees are two ways of measuring the same
 *   thing. There are 360 degrees in a circle and (* 2 Math/PI) radians
 *   in a circle. For example, (= 90° (/ Math/PI 2) 1.5707964). All
 *   trigonometric methods in Processing require their parameters to be
 *   specified in radians.
 */
quil.core.degrees = (function quil$core$degrees(radians){
return quil.sketch.current_applet().degrees(radians);
});
/**
 * Forces the program to stop running for a specified time. Delay
 *   times are specified in thousandths of a second, therefore the
 *   function call (delay 3000) will stop the program for three
 *   seconds. Because the screen is updated only at the end of draw,
 *   the program may appear to 'freeze', because the screen will not
 *   update when the delay fn is used. This function has no affect
 *   inside setup.
 */
quil.core.delay_frame = (function quil$core$delay_frame(freeze_ms){
return quil.sketch.current_applet().delay((freeze_ms | (0)));
});
/**
 * Adds a directional light. Directional light comes from one
 *   direction and is stronger when hitting a surface squarely and weaker
 *   if it hits at a gentle angle. After hitting a surface, a
 *   directional lights scatters in all directions. Lights need to be
 *   included in the draw fn to remain persistent in a looping
 *   program. Placing them in the setup fn of a looping program will cause
 *   them to only have an effect the first time through the loop. The
 *   affect of the r, g, and b parameters is determined by the current
 *   color mode. The nx, ny, and nz parameters specify the direction the
 *   light is facing. For example, setting ny to -1 will cause the
 *   geometry to be lit from below (the light is facing directly upward)
 */
quil.core.directional_light = (function quil$core$directional_light(r,g,b,nx,ny,nz){
return quil.core.current_graphics().directionalLight(r,g,b,nx,ny,nz);
});
/**
 * Calculates the distance between two points
 */
quil.core.dist = (function quil$core$dist(var_args){
var G__5657 = arguments.length;
switch (G__5657) {
case 4:
return quil.core.dist.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return quil.core.dist.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.dist.cljs$core$IFn$_invoke$arity$4 = (function (x1,y1,x2,y2){
return quil.sketch.current_applet().dist(x1,y1,x2,y2);
});

quil.core.dist.cljs$core$IFn$_invoke$arity$6 = (function (x1,y1,z1,x2,y2,z2){
return quil.sketch.current_applet().dist(x1,y1,z1,x2,y2,z2);
});

quil.core.dist.cljs$lang$maxFixedArity = 6;

var ret__4684__auto___5664 = (function (){
/**
 * Macro for drawing on graphics which saves result in the file at the end.
 *   Similar to 'with-graphics' macro. do-record assumed to be used with :pdf
 *   graphics. Example:
 * 
 *   (q/do-record (q/create-graphics 200 200 :pdf "output.pdf")
 *  (q/fill 250 0 0)
 *  (q/ellipse 100 100 150 150))
 *   
 */
quil.core.do_record = (function quil$core$do_record(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5665 = arguments.length;
var i__4642__auto___5666 = (0);
while(true){
if((i__4642__auto___5666 < len__4641__auto___5665)){
args__4647__auto__.push((arguments[i__4642__auto___5666]));

var G__5667 = (i__4642__auto___5666 + (1));
i__4642__auto___5666 = G__5667;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return quil.core.do_record.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

quil.core.do_record.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,graphics,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$gr__5659__auto__,null,(1),null)),(new cljs.core.List(null,graphics,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$quil$core_SLASH_with_DASH_graphics,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$gr__5659__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$$dispose,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$gr__5659__auto__,null,(1),null))))),null,(1),null))], 0))));
});

quil.core.do_record.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
quil.core.do_record.cljs$lang$applyTo = (function (seq5660){
var G__5661 = cljs.core.first(seq5660);
var seq5660__$1 = cljs.core.next(seq5660);
var G__5662 = cljs.core.first(seq5660__$1);
var seq5660__$2 = cljs.core.next(seq5660__$1);
var G__5663 = cljs.core.first(seq5660__$2);
var seq5660__$3 = cljs.core.next(seq5660__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5661,G__5662,G__5663,seq5660__$3);
});

return null;
})()
;
quil.core.do_record.cljs$lang$macro = true;

/**
 * Draws an ellipse (oval) in the display window. An ellipse with an
 *   equal width and height is a circle.  The origin may be changed with
 *   the ellipse-mode function
 */
quil.core.ellipse = (function quil$core$ellipse(x,y,width,height){
return quil.core.current_graphics().ellipse(x,y,width,height);
});
/**
 * Modifies the origin of the ellispse according to the specified mode:
 * 
 *   :center  - specifies the location of the ellipse as
 *           the center of the shape. (Default).
 *   :radius  - similar to center, but the width and height parameters to
 *           ellipse specify the radius of the ellipse, rather than the
 *           diameter.
 *   :corner  - draws the shape from the upper-left corner of its bounding
 *           box.
 *   :corners - uses the four parameters to ellipse to set two opposing
 *           corners of the ellipse's bounding box.
 */
quil.core.ellipse_mode = (function quil$core$ellipse_mode(mode){
var mode__$1 = quil.util.resolve_constant_key(mode,quil.core.ellipse_modes);
return quil.core.current_graphics().ellipseMode((mode__$1 | (0)));
});
/**
 * Sets the emissive color of the material used for drawing shapes
 *   drawn to the screen. Used in combination with ambient, specular, and
 *   shininess in setting the material properties of shapes.
 * 
 *   If passed one arg - it is assumed to be an int (i.e. a color),
 *   multiple args are converted to floats.
 */
quil.core.emissive = (function quil$core$emissive(var_args){
var G__5669 = arguments.length;
switch (G__5669) {
case 1:
return quil.core.emissive.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return quil.core.emissive.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.emissive.cljs$core$IFn$_invoke$arity$1 = (function (gray){
return quil.core.current_graphics().emissive(gray);
});

quil.core.emissive.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return quil.core.current_graphics().emissive(r,g,b);
});

quil.core.emissive.cljs$lang$maxFixedArity = 3;

/**
 * Unsets the matrix mode from the camera matrix. See begin-camera.
 */
quil.core.end_camera = (function quil$core$end_camera(){
return quil.core.current_graphics().endCamera();
});
/**
 * Use the begin-contour and end-contour function to create negative
 *   shapes within shapes. These functions can only be within a
 *   begin-shape/end-shape pair and they only work with the :p2d and :p3d
 *   renderers.
 */
quil.core.end_contour = (function quil$core$end_contour(){
return quil.core.current_graphics().endContour();
});
/**
 * Complement to begin-raw; they must always be used together. See
 *   the begin-raw docstring for details.
 */
quil.core.end_raw = (function quil$core$end_raw(){
return quil.core.current_graphics().endRaw();
});
/**
 * May only be called after begin-shape. When end-shape is called,
 *   all of image data defined since the previous call to begin-shape is
 *   written into the image buffer. The keyword :close may be passed to
 *   close the shape (to connect the beginning and the end).
 */
quil.core.end_shape = (function quil$core$end_shape(var_args){
var G__5672 = arguments.length;
switch (G__5672) {
case 0:
return quil.core.end_shape.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quil.core.end_shape.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.end_shape.cljs$core$IFn$_invoke$arity$0 = (function (){
return quil.core.current_graphics().endShape();
});

quil.core.end_shape.cljs$core$IFn$_invoke$arity$1 = (function (mode){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$close,mode)){
} else {
}

return quil.core.current_graphics().endShape((2));
});

quil.core.end_shape.cljs$lang$maxFixedArity = 1;

/**
 * Quits/stops/exits the program.  Rather than terminating
 *   immediately, exit will cause the sketch to exit after draw has
 *   completed (or after setup completes if called during the setup
 *   method). 
 */
quil.core.exit = (function quil$core$exit(){
return quil.sketch.current_applet().exit();
});
/**
 * Returns Euler's number e (2.71828...) raised to the power of the
 *   value parameter.
 */
quil.core.exp = (function quil$core$exp(val){
return quil.sketch.current_applet().exp(val);
});
/**
 * Save current fill color vector in the internal state. It can be accessed using (current-fill) function.
 */
quil.core.save_current_fill = (function quil$core$save_current_fill(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(quil.core.internal_state(),cljs.core.assoc,cljs.core.cst$kw$current_DASH_fill,color);
});
/**
 * Sets the color used to fill shapes. For example, if you run fill(204, 102, 0),
 *   all subsequent shapes will be filled with orange.  This function casts all input as a float.
 *   If nil is passed it removes any fill color; equivalent to (no-fill).
 */
quil.core.fill = (function quil$core$fill(var_args){
var G__5675 = arguments.length;
switch (G__5675) {
case 1:
return quil.core.fill.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.fill.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.fill.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.fill.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.fill.cljs$core$IFn$_invoke$arity$1 = (function (gray){
if(cljs.core.vector_QMARK_(gray)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,gray);
} else {
if((gray == null)){
return (quil.core.no_fill.cljs$core$IFn$_invoke$arity$0 ? quil.core.no_fill.cljs$core$IFn$_invoke$arity$0() : quil.core.no_fill.call(null));
} else {
quil.core.current_graphics().fill(gray);

return quil.core.save_current_fill(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gray], null));

}
}
});

quil.core.fill.cljs$core$IFn$_invoke$arity$2 = (function (gray,alpha){
quil.core.current_graphics().fill(gray,alpha);

return quil.core.save_current_fill(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gray,alpha], null));
});

quil.core.fill.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
quil.core.current_graphics().fill(r,g,b);

return quil.core.save_current_fill(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});

quil.core.fill.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,alpha){
quil.core.current_graphics().fill(r,g,b,alpha);

return quil.core.save_current_fill(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,alpha], null));
});

quil.core.fill.cljs$lang$maxFixedArity = 4;

/**
 * Originally named filter in Processing Language.
 *   Filters the display window with the specified mode and level.
 *   Level defines the quality of the filter and mode may be one of the
 *   following keywords:
 * 
 *   :threshold - converts the image to black and white pixels depending
 *             if they are above or below the threshold defined by
 *             the level parameter. The level must be between
 *             0.0 (black) and 1.0 (white). If no level is specified,
 *             0.5 is used.
 *   :gray      - converts any colors in the image to grayscale
 *             equivalents. Doesn't work with level.
 *   :invert    - sets each pixel to its inverse value. Doesn't work with
 *             level.
 *   :posterize - limits each channel of the image to the number of
 *             colors specified as the level parameter. The parameter can
 *             be set to values between 2 and 255, but results are most
 *             noticeable in the lower ranges.
 *   :blur      - executes a Guassian blur with the level parameter
 *             specifying the extent of the blurring. If no level
 *             parameter is used, the blur is equivalent to Guassian
 *             blur of radius 1.
 *   :opaque    - sets the alpha channel to entirely opaque. Doesn't work
 *             with level.
 *   :erode     - reduces the light areas. Doesn't work with level.
 *   :dilate    - increases the light areas.  Doesn't work with level.
 */
quil.core.display_filter = (function quil$core$display_filter(var_args){
var G__5678 = arguments.length;
switch (G__5678) {
case 1:
return quil.core.display_filter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.display_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.display_filter.cljs$core$IFn$_invoke$arity$1 = (function (mode){
return quil.core.current_graphics().filter((quil.util.resolve_constant_key(mode,quil.core.filter_modes) | (0)));
});

quil.core.display_filter.cljs$core$IFn$_invoke$arity$2 = (function (mode,level){
var mode__$1 = quil.util.resolve_constant_key(mode,quil.core.filter_modes);
return quil.core.current_graphics().filter((mode__$1 | (0)),level);
});

quil.core.display_filter.cljs$lang$maxFixedArity = 2;

/**
 * Calculates the closest int value that is less than or equal to the
 *   value of the parameter. For example, (floor 9.03) returns the value 9.
 */
quil.core.floor = (function quil$core$floor(n){
return quil.sketch.current_applet().floor(n);
});
/**
 * Returns a boolean value representing whether the applet has focus.
 */
quil.core.focused = (function quil$core$focused(){
return quil.sketch.current_applet().focused;
});
/**
 * The system variable frameCount contains the number of frames
 *   displayed since the program started. Inside setup() the value is 0
 *   and after the first iteration of draw it is 1, etc.
 */
quil.core.frame_count = (function quil$core$frame_count(){
return quil.sketch.current_applet().frameCount;
});
/**
 * Returns the current framerate
 */
quil.core.current_frame_rate = (function quil$core$current_frame_rate(){
return quil.sketch.current_applet().__frameRate;
});
/**
 * Returns whether the sketch is looping.
 */
quil.core.looping_QMARK_ = (function quil$core$looping_QMARK_(){
return cljs.core.cst$kw$looping_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(quil.core.internal_state()));
});
/**
 * Specifies a new target framerate (number of frames to be displayed every
 *   second). If the processor is not fast enough to maintain the
 *   specified rate, it will not be achieved. For example, the function
 *   call (frame-rate 30) will attempt to refresh 30 times a second. It
 *   is recommended to set the frame rate within setup. The default rate
 *   is 60 frames per second.
 */
quil.core.frame_rate = (function quil$core$frame_rate(new_rate){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(quil.core.internal_state(),cljs.core.assoc,cljs.core.cst$kw$frame_DASH_rate,new_rate);

return quil.sketch.current_applet().frameRate(new_rate);
});
/**
 * Sets a perspective matrix defined through the parameters. Works
 *   like glFrustum, except it wipes out the current perspective matrix
 *   rather than muliplying itself with it.
 */
quil.core.frustum = (function quil$core$frustum(left,right,bottom,top,near,far){
return quil.core.current_graphics().frustum(left,right,bottom,top,near,far);
});
/**
 * Reads the color of any pixel or grabs a section of an image. If no
 *   parameters are specified, a copy of entire image is returned. Get the
 *   value of one pixel by specifying an x,y coordinate. Get a section of
 *   the image by specifying an additional width and height parameter.
 *   If the pixel requested is outside of the image window, black is returned.
 *   The numbers returned are scaled according to the current color ranges,
 *   but only RGB values are returned by this function. For example, even though
 *   you may have drawn a shape with (color-mode :hsb), the numbers returned
 *   will be in RGB.
 * 
 *   Getting the color of a single pixel with (get x y) is easy, but not
 *   as fast as grabbing the data directly using the pixels fn.
 * 
 *   If no img specified - current-graphics is used.
 */
quil.core.get_pixel = (function quil$core$get_pixel(var_args){
var G__5681 = arguments.length;
switch (G__5681) {
case 0:
return quil.core.get_pixel.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quil.core.get_pixel.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.get_pixel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.get_pixel.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.get_pixel.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return quil.core.get_pixel.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.get_pixel.cljs$core$IFn$_invoke$arity$0 = (function (){
return quil.core.get_pixel.cljs$core$IFn$_invoke$arity$1(quil.core.current_graphics());
});

quil.core.get_pixel.cljs$core$IFn$_invoke$arity$1 = (function (img){
return img.get();
});

quil.core.get_pixel.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return quil.core.get_pixel.cljs$core$IFn$_invoke$arity$3(quil.core.current_graphics(),x,y);
});

quil.core.get_pixel.cljs$core$IFn$_invoke$arity$3 = (function (img,x,y){
return img.get((x | (0)),(y | (0)));
});

quil.core.get_pixel.cljs$core$IFn$_invoke$arity$4 = (function (x,y,w,h){
return quil.core.get_pixel.cljs$core$IFn$_invoke$arity$5(quil.core.current_graphics(),x,y,w,h);
});

quil.core.get_pixel.cljs$core$IFn$_invoke$arity$5 = (function (img,x,y,w,h){
return img.get((x | (0)),(y | (0)),(w | (0)),(h | (0)));
});

quil.core.get_pixel.cljs$lang$maxFixedArity = 5;

/**
 * Extracts the green value from a color, scaled to match current
 *   color-mode. This value is always returned as a float so be careful
 *   not to assign it to an int value.
 */
quil.core.green = (function quil$core$green(col){
return quil.core.current_graphics().green(cljs.core.unchecked_int(col));
});
/**
 * Converts a byte, char, int, or color to a String containing the
 *   equivalent hexadecimal notation. For example color(0, 102, 153) will
 *   convert to the String "FF006699". This function can help make your
 *   geeky debugging sessions much happier. 
 */
quil.core.hex = (function quil$core$hex(var_args){
var G__5684 = arguments.length;
switch (G__5684) {
case 1:
return quil.core.hex.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.hex.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.hex.cljs$core$IFn$_invoke$arity$1 = (function (val){
return quil.sketch.current_applet().hex(val);
});

quil.core.hex.cljs$core$IFn$_invoke$arity$2 = (function (val,num_digits){
return quil.sketch.current_applet().hex(val,num_digits);
});

quil.core.hex.cljs$lang$maxFixedArity = 2;

/**
 * Height of the display window. The value of height is zero until
 *   size is called.
 */
quil.core.height = (function quil$core$height(){
return quil.sketch.current_applet().height;
});
/**
 * Set various hints and hacks for the renderer. This is used to
 *   handle obscure rendering features that cannot be implemented in a
 *   consistent manner across renderers. Many options will often graduate
 *   to standard features instead of hints over time.
 * 
 *   Options:
 * 
 *   :enable-native-fonts - Use the native version fonts when they are
 *  installed, rather than the bitmapped version from a .vlw
 *  file. This is useful with the default (or JAVA2D) renderer
 *  setting, as it will improve font rendering speed. This is not
 *  enabled by default, because it can be misleading while testing
 *  because the type will look great on your machine (because you have
 *  the font installed) but lousy on others' machines if the identical
 *  font is unavailable. This option can only be set per-sketch, and
 *  must be called before any use of text-font.
 * 
 *   :disable-native-fonts - Disables native font support.
 * 
 *   :disable-depth-test - Disable the zbuffer, allowing you to draw on
 *  top of everything at will. When depth testing is disabled, items
 *  will be drawn to the screen sequentially, like a painting. This
 *  hint is most often used to draw in 3D, then draw in 2D on top of
 *  it (for instance, to draw GUI controls in 2D on top of a 3D
 *  interface). Starting in release 0149, this will also clear the
 *  depth buffer. Restore the default with :enable-depth-test
 *  but note that with the depth buffer cleared, any 3D drawing that
 *  happens later in draw will ignore existing shapes on the screen.
 * 
 *   :enable-depth-test - Enables the zbuffer.
 * 
 *   :enable-depth-sort - Enable primitive z-sorting of triangles and
 *  lines in :p3d and :opengl rendering modes. This can slow
 *  performance considerably, and the algorithm is not yet perfect.
 * 
 *   :disable-depth-sort - Disables hint :enable-depth-sort
 * 
 *   :disable-opengl-errors - Speeds up the OPENGL renderer setting
 *   by not checking for errors while running.
 * 
 *   :enable-opengl-errors - Turns on OpenGL error checking
 * 
 *   :enable-depth-mask
 *   :disable-depth-mask
 * 
 *   :enable-optimized-stroke
 *   :disable-optimized-stroke
 *   :enable-retina-pixels
 *   :disable-retina-pixels
 *   :enable-stroke-perspective
 *   :disable-stroke-perspective
 *   :enable-stroke-pure
 *   :disable-stroke-pure
 *   :enable-texture-mipmaps
 *   :disable-texture-mipmaps
 */
quil.core.hint = (function quil$core$hint(hint_type){
var hint_type__$1 = (((hint_type instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(quil.core.hint_options,hint_type):hint_type);
return quil.core.current_graphics().hint((hint_type__$1 | (0)));
});
/**
 * Returns the current hour as a value from 0 - 23.
 */
quil.core.hour = (function quil$core$hour(){
return quil.sketch.current_applet().hour();
});
/**
 * Extracts the hue value from a color.
 */
quil.core.hue = (function quil$core$hue(col){
return quil.core.current_graphics().hue(cljs.core.unchecked_int(col));
});
/**
 * Displays images to the screen. Processing currently works with GIF,
 *   JPEG, and Targa images. The color of an image may be modified with
 *   the tint function and if a GIF has transparency, it will maintain
 *   its transparency. The img parameter specifies the image to display
 *   and the x and y parameters define the location of the image from its
 *   upper-left corner. The image is displayed at its original size
 *   unless the width and height parameters specify a different size. The
 *   image-mode fn changes the way the parameters work. A call to
 *   (image-mode :corners) will change the width and height parameters to
 *   define the x and y values of the opposite corner of the image.
 * 
 *   Starting with release 0124, when using the default (JAVA2D)
 *   renderer, smooth will also improve image quality of resized
 *   images.
 */
quil.core.image = (function quil$core$image(var_args){
var G__5687 = arguments.length;
switch (G__5687) {
case 3:
return quil.core.image.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return quil.core.image.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.image.cljs$core$IFn$_invoke$arity$3 = (function (img,x,y){
return quil.core.current_graphics().image(img,x,y);
});

quil.core.image.cljs$core$IFn$_invoke$arity$5 = (function (img,x,y,c,d){
return quil.core.current_graphics().image(img,x,y,c,d);
});

quil.core.image.cljs$lang$maxFixedArity = 5;

/**
 * Originally named filter in Processing Language.
 *   Filters given image with the specified mode and level.
 *   Level defines the quality of the filter and mode may be one of
 *   the following keywords:
 * 
 *   :threshold - converts the image to black and white pixels depending
 *             if they are above or below the threshold defined by
 *             the level parameter. The level must be between
 *             0.0 (black) and 1.0 (white). If no level is specified,
 *             0.5 is used.
 *   :gray      - converts any colors in the image to grayscale
 *             equivalents. Doesn't work with level.
 *   :invert    - sets each pixel to its inverse value. Doesn't work with
 *             level.
 *   :posterize - limits each channel of the image to the number of
 *             colors specified as the level parameter. The parameter can
 *             be set to values between 2 and 255, but results are most
 *             noticeable in the lower ranges.
 *   :blur      - executes a Guassian blur with the level parameter
 *             specifying the extent of the blurring. If no level
 *             parameter is used, the blur is equivalent to Guassian
 *             blur of radius 1.
 *   :opaque    - sets the alpha channel to entirely opaque. Doesn't work
 *             with level.
 *   :erode     - reduces the light areas. Doesn't work with level.
 *   :dilate    - increases the light areas.  Doesn't work with level.
 */
quil.core.image_filter = (function quil$core$image_filter(var_args){
var G__5690 = arguments.length;
switch (G__5690) {
case 2:
return quil.core.image_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.image_filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.image_filter.cljs$core$IFn$_invoke$arity$2 = (function (img,mode){
var mode__$1 = quil.util.resolve_constant_key(mode,quil.core.filter_modes);
return img.filter((mode__$1 | (0)));
});

quil.core.image_filter.cljs$core$IFn$_invoke$arity$3 = (function (img,mode,level){
var mode__$1 = quil.util.resolve_constant_key(mode,quil.core.filter_modes);
return img.filter((mode__$1 | (0)),level);
});

quil.core.image_filter.cljs$lang$maxFixedArity = 3;

/**
 * Modifies the location from which images draw. The default mode is :corner.
 * Available modes are:
 * 
 *   :corner  - specifies the location to be the upper left corner and
 *           uses the fourth and fifth parameters of image to set the
 *           image's width and height.
 * 
 *   :corners - uses the second and third parameters of image to set the
 *           location of one corner of the image and uses the fourth
 *           and fifth parameters to set the opposite corner.
 * 
 *   :center  - draw images centered at the given x and y position.
 */
quil.core.image_mode = (function quil$core$image_mode(mode){
var mode__$1 = quil.util.resolve_constant_key(mode,quil.core.image_modes);
return quil.core.current_graphics().imageMode((mode__$1 | (0)));
});
/**
 * The variable keyCode is used to detect special keys such as the UP,
 *   DOWN, LEFT, RIGHT arrow keys and ALT, CONTROL, SHIFT. When checking
 *   for these keys, it's first necessary to check and see if the key is
 *   coded. This is done with the conditional (= (key) CODED).
 * 
 *   The keys included in the ASCII specification (BACKSPACE, TAB, ENTER,
 *   RETURN, ESC, and DELETE) do not require checking to see if they key
 *   is coded, and you should simply use the key variable instead of
 *   key-code If you're making cross-platform projects, note that the
 *   ENTER key is commonly used on PCs and Unix and the RETURN key is
 *   used instead on Macintosh. Check for both ENTER and RETURN to make
 *   sure your program will work for all platforms.
 * 
 *   For users familiar with Java, the values for UP and DOWN are simply
 *   shorter versions of Java's KeyEvent.VK_UP and
 *   KeyEvent.VK_DOWN. Other keyCode values can be found in the Java
 *   KeyEvent reference.
 */
quil.core.key_code = (function quil$core$key_code(){
return quil.sketch.current_applet().keyCode;
});
/**
 * true if any key is currently pressed, false otherwise.
 */
quil.core.key_pressed_QMARK_ = (function quil$core$key_pressed_QMARK_(){
return quil.sketch.current_applet().__keyPressed;
});
/**
 * Sets the falloff rates for point lights, spot lights, and ambient
 *   lights. The parameters are used to determine the falloff with the
 *   following equation:
 * 
 *   d = distance from light position to vertex position
 *   falloff = 1 / (CONSTANT + d * LINEAR + (d*d) * QUADRATIC)
 * 
 *   Like fill, it affects only the elements which are created after it
 *   in the code. The default value is (light-falloff 1.0 0.0 0.0).
 *   Thinking about an ambient light with a falloff can be tricky. It is
 *   used, for example, if you wanted a region of your scene to be lit
 *   ambiently one color and another region to be lit ambiently by
 *   another color, you would use an ambient light with location and
 *   falloff. You can think of it as a point light that doesn't care
 *   which direction a surface is facing.
 */
quil.core.light_falloff = (function quil$core$light_falloff(constant,linear,quadratic){
return quil.core.current_graphics().lightFalloff(constant,linear,quadratic);
});
/**
 * Calculates a color or colors between two color at a specific
 *   increment. The amt parameter is the amount to interpolate between
 *   the two values where 0.0 equal to the first point, 0.1 is very near
 *   the first point, 0.5 is half-way in between, etc.
 */
quil.core.lerp_color = (function quil$core$lerp_color(c1,c2,amt){
return quil.core.current_graphics().lerpColor(cljs.core.unchecked_int(c1),cljs.core.unchecked_int(c2),amt);
});
/**
 * Calculates a number between two numbers at a specific
 *   increment. The amt parameter is the amount to interpolate between
 *   the two values where 0.0 equal to the first point, 0.1 is very near
 *   the first point, 0.5 is half-way in between, etc. The lerp function
 *   is convenient for creating motion along a straight path and for
 *   drawing dotted lines.
 */
quil.core.lerp = (function quil$core$lerp(start,stop,amt){
return quil.sketch.current_applet().lerp(start,stop,amt);
});
/**
 * Sets the default ambient light, directional light, falloff, and
 *   specular values. The defaults are:
 * 
 *   (ambient-light 128 128 128)
 *   (directional-light 128 128 128 0 0 -1)
 *   (light-falloff 1 0 0)
 *   (light-specular 0 0 0).
 * 
 *   Lights need to be included in the draw to remain persistent in a
 *   looping program. Placing them in the setup of a looping program
 *   will cause them to only have an effect the first time through the
 *   loop.
 */
quil.core.lights = (function quil$core$lights(){
return quil.core.current_graphics().lights();
});
/**
 * Sets the specular color for lights. Like fill, it affects only the
 *   elements which are created after it in the code. Specular refers to
 *   light which bounces off a surface in a perferred direction (rather
 *   than bouncing in all directions like a diffuse light) and is used
 *   for creating highlights. The specular quality of a light interacts
 *   with the specular material qualities set through the specular and
 *   shininess functions.
 */
quil.core.light_specular = (function quil$core$light_specular(r,g,b){
return quil.core.current_graphics().lightSpecular(r,g,b);
});
/**
 * Draws a line (a direct path between two points) to the screen. The
 *   version of line with four parameters draws the line in 2D. To color
 *   a line, use the stroke function. A line cannot be filled, therefore
 *   the fill method will not affect the color of a line. 2D lines are
 *   drawn with a width of one pixel by default, but this can be changed
 *   with the stroke-weight function. The version with six parameters
 *   allows the line to be placed anywhere within XYZ space. 
 */
quil.core.line = (function quil$core$line(var_args){
var G__5693 = arguments.length;
switch (G__5693) {
case 2:
return quil.core.line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return quil.core.line.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return quil.core.line.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.line.cljs$core$IFn$_invoke$arity$2 = (function (p1,p2){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.line,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1,p2));
});

quil.core.line.cljs$core$IFn$_invoke$arity$4 = (function (x1,y1,x2,y2){
return quil.core.current_graphics().line(x1,y1,x2,y2);
});

quil.core.line.cljs$core$IFn$_invoke$arity$6 = (function (x1,y1,z1,x2,y2,z2){
return quil.core.current_graphics().line(x1,y1,z1,x2,y2,z2);
});

quil.core.line.cljs$lang$maxFixedArity = 6;

/**
 * Loads a font into a variable of type PFont. To load correctly,
 *   fonts must be located in the data directory of the current sketch.
 *   To create a font to use with Processing use the create-font fn.
 * 
 *   Like load-image and other methods that load data, the load-font fn
 *   should not be used inside draw, because it will slow down the sketch
 *   considerably, as the font will be re-loaded from the disk (or
 *   network) on each frame.
 * 
 *   For most renderers, Processing displays fonts using the .vlw font
 *   format, which uses images for each letter, rather than defining them
 *   through vector data. When hint :enable-native-fonts is used with the
 *   JAVA2D renderer, the native version of a font will be used if it is
 *   installed on the user's machine.
 * 
 *   Using create-font (instead of load-font) enables vector data to be
 *   used with the JAVA2D (default) renderer setting. This can be helpful
 *   when many font sizes are needed, or when using any renderer based on
 *   JAVA2D, such as the PDF library.
 */
quil.core.load_font = (function quil$core$load_font(filename){
return quil.sketch.current_applet().loadFont(cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename));
});
/**
 * Loads an image into a variable of type PImage. Four types of
 *   images ( .gif, .jpg, .tga, .png) images may be loaded. To load
 *   correctly, images must be located in the data directory of the
 *   current sketch. In most cases, load all images in setup to preload
 *   them at the start of the program. Loading images inside draw will
 *   reduce the speed of a program.
 * 
 *   The filename parameter can also be a URL to a file found online.
 * 
 *   If an image is not loaded successfully, the null value is returned
 *   and an error message will be printed to the console. The error
 *   message does not halt the program, however the null value may cause
 *   a NullPointerException if your code does not check whether the value
 *   returned from load-image is nil.
 * 
 *   Depending on the type of error, a PImage object may still be
 *   returned, but the width and height of the image will be set to
 *   -1. This happens if bad image data is returned or cannot be decoded
 *   properly. Sometimes this happens with image URLs that produce a 403
 *   error or that redirect to a password prompt, because load-image
 *   will attempt to interpret the HTML as image data.
 */
quil.core.load_image = (function quil$core$load_image(filename){
return quil.sketch.current_applet().loadImage(cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename));
});
/**
 * Loads a shader into the PShader object. Shaders are compatible with the
 *   P2D and P3D renderers, but not with the default renderer.
 */
quil.core.load_shader = (function quil$core$load_shader(var_args){
var G__5696 = arguments.length;
switch (G__5696) {
case 1:
return quil.core.load_shader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.load_shader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.load_shader.cljs$core$IFn$_invoke$arity$1 = (function (fragment_filename){
return quil.core.current_graphics().loadShader(fragment_filename);
});

quil.core.load_shader.cljs$core$IFn$_invoke$arity$2 = (function (fragment_filename,vertex_filename){
return quil.core.current_graphics().loadShader(fragment_filename,vertex_filename);
});

quil.core.load_shader.cljs$lang$maxFixedArity = 2;

/**
 * Load a geometry from a file as a PShape.
 */
quil.core.load_shape = (function quil$core$load_shape(filename){
return quil.sketch.current_applet().loadShape(filename);
});
/**
 * Calculates the natural logarithm (the base-e logarithm) of a
 *   number. This function expects the values greater than 0.0.
 */
quil.core.log = (function quil$core$log(val){
return quil.sketch.current_applet().log(val);
});
/**
 * Calculates the magnitude (or length) of a vector. A vector is a
 *   direction in space commonly used in computer graphics and linear
 *   algebra. Because it has no start position, the magnitude of a vector
 *   can be thought of as the distance from coordinate (0,0) to its (x,y)
 *   value. Therefore, mag is a shortcut for writing (dist 0 0 x y).
 */
quil.core.mag = (function quil$core$mag(var_args){
var G__5699 = arguments.length;
switch (G__5699) {
case 2:
return quil.core.mag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.mag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.mag.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return quil.sketch.current_applet().mag(a,b);
});

quil.core.mag.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return quil.sketch.current_applet().mag(a,b,c);
});

quil.core.mag.cljs$lang$maxFixedArity = 3;

/**
 * Re-maps a number from one range to another.
 * 
 *   Numbers outside the range are not clamped to 0 and 1, because
 *   out-of-range values are often intentional and useful.
 */
quil.core.map_range = (function quil$core$map_range(val,low1,high1,low2,high2){
return quil.sketch.current_applet().map(val,low1,high1,low2,high2);
});
/**
 * Returns the number of milliseconds (thousandths of a second) since
 *   starting the sketch. This information is often used for timing
 *   animation sequences.
 */
quil.core.millis = (function quil$core$millis(){
return quil.sketch.current_applet().millis();
});
/**
 * Returns the current minute as a value from 0 - 59
 */
quil.core.minute = (function quil$core$minute(){
return quil.sketch.current_applet().minute();
});
/**
 * Returns the three-dimensional x, y, z position in model space. This
 *   returns the x value for a given coordinate based on the current set
 *   of transformations (scale, rotate, translate, etc.) The x value can
 *   be used to place an object in space relative to the location of the
 *   original point once the transformations are no longer in use.
 */
quil.core.model_x = (function quil$core$model_x(x,y,z){
return quil.core.current_graphics().modelX(x,y,z);
});
/**
 * Returns the three-dimensional x, y, z position in model space. This
 *   returns the y value for a given coordinate based on the current set
 *   of transformations (scale, rotate, translate, etc.) The y value can
 *   be used to place an object in space relative to the location of the
 *   original point once the transformations are no longer in use.
 */
quil.core.model_y = (function quil$core$model_y(x,y,z){
return quil.core.current_graphics().modelY(x,y,z);
});
/**
 * Returns the three-dimensional x, y, z position in model space. This
 *   returns the z value for a given coordinate based on the current set
 *   of transformations (scale, rotate, translate, etc.) The z value can
 *   be used to place an object in space relative to the location of the
 *   original point once the transformations are no longer in use.
 */
quil.core.model_z = (function quil$core$model_z(x,y,z){
return quil.core.current_graphics().modelZ(x,y,z);
});
/**
 * Returns the current month as a value from 1 - 12.
 */
quil.core.month = (function quil$core$month(){
return quil.sketch.current_applet().month();
});
/**
 * The value of the system variable mouseButton is either :left, :right,
 *   or :center depending on which button is pressed. nil if no button pressed
 */
quil.core.mouse_button = (function quil$core$mouse_button(){
var button_code = quil.sketch.current_applet().mouseButton;
var pred__5701 = cljs.core._EQ_;
var expr__5702 = button_code;
if(cljs.core.truth_((pred__5701.cljs$core$IFn$_invoke$arity$2 ? pred__5701.cljs$core$IFn$_invoke$arity$2((37),expr__5702) : pred__5701.call(null,(37),expr__5702)))){
return cljs.core.cst$kw$left;
} else {
if(cljs.core.truth_((pred__5701.cljs$core$IFn$_invoke$arity$2 ? pred__5701.cljs$core$IFn$_invoke$arity$2((39),expr__5702) : pred__5701.call(null,(39),expr__5702)))){
return cljs.core.cst$kw$right;
} else {
if(cljs.core.truth_((pred__5701.cljs$core$IFn$_invoke$arity$2 ? pred__5701.cljs$core$IFn$_invoke$arity$2((3),expr__5702) : pred__5701.call(null,(3),expr__5702)))){
return cljs.core.cst$kw$center;
} else {
return null;
}
}
}
});
/**
 * Variable storing if a mouse button is pressed. The value of the
 *   system variable mousePressed is true if a mouse button is pressed
 *   and false if a button is not pressed.
 */
quil.core.mouse_pressed_QMARK_ = (function quil$core$mouse_pressed_QMARK_(){
return quil.sketch.current_applet().__mousePressed;
});
/**
 * Current horizontal coordinate of the mouse.
 */
quil.core.mouse_x = (function quil$core$mouse_x(){
return quil.sketch.current_applet().mouseX;
});
/**
 * Current vertical coordinate of the mouse.
 */
quil.core.mouse_y = (function quil$core$mouse_y(){
return quil.sketch.current_applet().mouseY;
});
/**
 * Hides the cursor from view. Will not work when running the in full
 *   screen (Present) mode.
 */
quil.core.no_cursor = (function quil$core$no_cursor(){
return quil.sketch.current_applet().noCursor();
});
/**
 * Disables filling geometry. If both no-stroke and no-fill are called,
 *   nothing will be drawn to the screen.
 */
quil.core.no_fill = (function quil$core$no_fill(){
quil.core.current_graphics().noFill();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(quil.core.internal_state(),cljs.core.assoc,cljs.core.cst$kw$current_DASH_fill,null);
});
/**
 * Returns the Perlin noise value at specified coordinates. Perlin
 *   noise is a random sequence generator producing a more natural
 *   ordered, harmonic succession of numbers compared to the standard
 *   random function. It was invented by Ken Perlin in the 1980s and
 *   been used since in graphical applications to produce procedural
 *   textures, natural motion, shapes, terrains etc.
 * 
 *   The main difference to the random function is that Perlin noise is
 *   defined in an infinite n-dimensional space where each pair of
 *   coordinates corresponds to a fixed semi-random value (fixed only for
 *   the lifespan of the program). The resulting value will always be
 *   between 0.0 and 1.0. Processing can compute 1D, 2D and 3D noise,
 *   depending on the number of coordinates given. The noise value can be
 *   animated by moving through the noise space and the 2nd and 3rd
 *   dimensions can also be interpreted as time.
 * 
 *   The actual noise is structured similar to an audio signal, in
 *   respect to the function's use of frequencies. Similar to the concept
 *   of harmonics in physics, perlin noise is computed over several
 *   octaves which are added together for the final result.
 * 
 *   Another way to adjust the character of the resulting sequence is the
 *   scale of the input coordinates. As the function works within an
 *   infinite space the value of the coordinates doesn't matter as such,
 *   only the distance between successive coordinates does (eg. when
 *   using noise within a loop). As a general rule the smaller the
 *   difference between coordinates, the smoother the resulting noise
 *   sequence will be. Steps of 0.005-0.03 work best for most
 *   applications, but this will differ depending on use.
 */
quil.core.noise = (function quil$core$noise(var_args){
var G__5705 = arguments.length;
switch (G__5705) {
case 1:
return quil.core.noise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.noise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.noise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.noise.cljs$core$IFn$_invoke$arity$1 = (function (x){
return quil.sketch.current_applet().noise(x);
});

quil.core.noise.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return quil.sketch.current_applet().noise(x,y);
});

quil.core.noise.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return quil.sketch.current_applet().noise(x,y,z);
});

quil.core.noise.cljs$lang$maxFixedArity = 3;

/**
 * Adjusts the character and level of detail produced by the Perlin
 *   noise function. Similar to harmonics in physics, noise is computed
 *   over several octaves. Lower octaves contribute more to the output
 *   signal and as such define the overal intensity of the noise, whereas
 *   higher octaves create finer grained details in the noise
 *   sequence. By default, noise is computed over 4 octaves with each
 *   octave contributing exactly half than its predecessor, starting at
 *   50% strength for the 1st octave. This falloff amount can be changed
 *   by adding an additional function parameter. Eg. a falloff factor of
 *   0.75 means each octave will now have 75% impact (25% less) of the
 *   previous lower octave. Any value between 0.0 and 1.0 is valid,
 *   however note that values greater than 0.5 might result in greater
 *   than 1.0 values returned by noise.
 * 
 *   By changing these parameters, the signal created by the noise
 *   function can be adapted to fit very specific needs and
 *   characteristics.
 */
quil.core.noise_detail = (function quil$core$noise_detail(var_args){
var G__5708 = arguments.length;
switch (G__5708) {
case 1:
return quil.core.noise_detail.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.noise_detail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.noise_detail.cljs$core$IFn$_invoke$arity$1 = (function (octaves){
return quil.sketch.current_applet().noiseDetail((octaves | (0)));
});

quil.core.noise_detail.cljs$core$IFn$_invoke$arity$2 = (function (octaves,falloff){
return quil.sketch.current_applet().noiseDetail((octaves | (0)),falloff);
});

quil.core.noise_detail.cljs$lang$maxFixedArity = 2;

/**
 * Sets the seed value for noise. By default, noise produces different
 *   results each time the program is run. Set the value parameter to a
 *   constant to return the same pseudo-random numbers each time the
 *   software is run.
 */
quil.core.noise_seed = (function quil$core$noise_seed(val){
return quil.sketch.current_applet().noiseSeed((val | (0)));
});
/**
 * Disable all lighting. Lighting is turned off by default and enabled
 *   with the lights fn. This function can be used to disable lighting so
 *   that 2D geometry (which does not require lighting) can be drawn
 *   after a set of lighted 3D geometry.
 */
quil.core.no_lights = (function quil$core$no_lights(){
return quil.core.current_graphics().noLights();
});
/**
 * Stops Processing from continuously executing the code within
 *   draw. If start-loop is called, the code in draw will begin to run
 *   continuously again. If using no-loop in setup, it should be the last
 *   line inside the block.
 * 
 *   When no-loop is used, it's not possible to manipulate or access the
 *   screen inside event handling functions such as mouse-pressed or
 *   key-pressed. Instead, use those functions to call redraw or
 *   loop which will run draw, which can update the screen
 *   properly. This means that when no-loop has been called, no drawing
 *   can happen, and functions like save-frame may not be used.
 * 
 *   Note that if the sketch is resized, redraw will be called to
 *   update the sketch, even after no-loop has been
 *   specified. Otherwise, the sketch would enter an odd state until
 *   loop was called.
 */
quil.core.no_loop = (function quil$core$no_loop(){
quil.sketch.current_applet().noLoop();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(quil.core.internal_state(),cljs.core.assoc,cljs.core.cst$kw$looping_QMARK_,false);
});
/**
 * Normalize a value to exist between 0 and 1 (inclusive).
 */
quil.core.norm = (function quil$core$norm(val,start,stop){
return quil.sketch.current_applet().norm(val,start,stop);
});
/**
 * Sets the current normal vector. This is for drawing three
 *   dimensional shapes and surfaces and specifies a vector perpendicular
 *   to the surface of the shape which determines how lighting affects
 *   it. Processing attempts to automatically assign normals to shapes,
 *   but since that's imperfect, this is a better option when you want
 *   more control. This function is identical to glNormal3f() in OpenGL.
 */
quil.core.normal = (function quil$core$normal(nx,ny,nz){
return quil.core.current_graphics().normal(nx,ny,nz);
});
/**
 * Draws all geometry with jagged (aliased) edges. Must be called inside
 *   :settings handler.
 */
quil.core.no_smooth = (function quil$core$no_smooth(){
return quil.core.current_graphics().noSmooth();
});
/**
 * Disables drawing the stroke (outline). If both no-stroke and
 *   no-fill are called, nothing will be drawn to the screen.
 */
quil.core.no_stroke = (function quil$core$no_stroke(){
quil.core.current_graphics().noStroke();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(quil.core.internal_state(),cljs.core.assoc,cljs.core.cst$kw$current_DASH_stroke,null);
});
/**
 * Removes the current fill value for displaying images and reverts to
 *   displaying images with their original hues.
 */
quil.core.no_tint = (function quil$core$no_tint(){
return quil.core.current_graphics().noTint();
});
/**
 * Sets an orthographic projection and defines a parallel clipping
 *   volume. All objects with the same dimension appear the same size,
 *   regardless of whether they are near or far from the camera. The
 *   parameters to this function specify the clipping volume where left
 *   and right are the minimum and maximum x values, top and bottom are
 *   the minimum and maximum y values, and near and far are the minimum
 *   and maximum z values. If no parameters are given, the default is
 *   used: (ortho 0 width 0 height -10 10)
 */
quil.core.ortho = (function quil$core$ortho(var_args){
var G__5711 = arguments.length;
switch (G__5711) {
case 0:
return quil.core.ortho.cljs$core$IFn$_invoke$arity$0();

break;
case 4:
return quil.core.ortho.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return quil.core.ortho.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.ortho.cljs$core$IFn$_invoke$arity$0 = (function (){
return quil.core.current_graphics().ortho();
});

quil.core.ortho.cljs$core$IFn$_invoke$arity$4 = (function (left,right,bottom,top){
return quil.core.current_graphics().ortho(left,right,bottom,top);
});

quil.core.ortho.cljs$core$IFn$_invoke$arity$6 = (function (left,right,bottom,top,near,far){
return quil.core.current_graphics().ortho(left,right,bottom,top,near,far);
});

quil.core.ortho.cljs$lang$maxFixedArity = 6;

/**
 * Sets a perspective projection applying foreshortening, making
 *   distant objects appear smaller than closer ones. The parameters
 *   define a viewing volume with the shape of truncated pyramid. Objects
 *   near to the front of the volume appear their actual size, while
 *   farther objects appear smaller. This projection simulates the
 *   perspective of the world more accurately than orthographic
 *   projection. The version of perspective without parameters sets the
 *   default perspective and the version with four parameters allows the
 *   programmer to set the area precisely. The default values are:
 *   perspective(PI/3.0, width/height, cameraZ/10.0, cameraZ*10.0) where
 *   cameraZ is ((height/2.0) / tan(PI*60.0/360.0));
 */
quil.core.perspective = (function quil$core$perspective(var_args){
var G__5714 = arguments.length;
switch (G__5714) {
case 0:
return quil.core.perspective.cljs$core$IFn$_invoke$arity$0();

break;
case 4:
return quil.core.perspective.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.perspective.cljs$core$IFn$_invoke$arity$0 = (function (){
return quil.core.current_graphics().perspective();
});

quil.core.perspective.cljs$core$IFn$_invoke$arity$4 = (function (fovy,aspect,z_near,z_far){
return quil.core.current_graphics().perspective(fovy,aspect,z_near,z_far);
});

quil.core.perspective.cljs$lang$maxFixedArity = 4;

/**
 * Array containing the values for all the pixels in the display
 *   window or image. This array is therefore the size of the display window. If
 *   this array is modified, the update-pixels fn must be called to update
 *   the changes. Calls .loadPixels before obtaining the pixel array.
 */
quil.core.pixels = (function quil$core$pixels(var_args){
var G__5717 = arguments.length;
switch (G__5717) {
case 0:
return quil.core.pixels.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quil.core.pixels.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.pixels.cljs$core$IFn$_invoke$arity$0 = (function (){
return quil.core.pixels.cljs$core$IFn$_invoke$arity$1(quil.core.current_graphics());
});

quil.core.pixels.cljs$core$IFn$_invoke$arity$1 = (function (img){
img.loadPixels();

var pix_array = img.pixels.toArray();
img.stored_pix_array = pix_array;

return pix_array;
});

quil.core.pixels.cljs$lang$maxFixedArity = 1;

/**
 * Horizontal coordinate of the mouse in the previous frame
 */
quil.core.pmouse_x = (function quil$core$pmouse_x(){
return quil.sketch.current_applet().pmouseX;
});
/**
 * Vertical coordinate of the mouse in the previous frame
 */
quil.core.pmouse_y = (function quil$core$pmouse_y(){
return quil.sketch.current_applet().pmouseY;
});
/**
 * Draws a point, a coordinate in space at the dimension of one
 *   pixel. The first parameter is the horizontal value for the point,
 *   the second value is the vertical value for the point, and the
 *   optional third value is the depth value. Drawing this shape in 3D
 *   using the z parameter requires the :P3D or :opengl renderer to be
 *   used.
 */
quil.core.point = (function quil$core$point(var_args){
var G__5720 = arguments.length;
switch (G__5720) {
case 2:
return quil.core.point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.point.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.point.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return quil.core.current_graphics().point(x,y);
});

quil.core.point.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return quil.core.current_graphics().point(x,y,z);
});

quil.core.point.cljs$lang$maxFixedArity = 3;

/**
 * Adds a point light. Lights need to be included in the draw() to
 *   remain persistent in a looping program. Placing them in the setup()
 *   of a looping program will cause them to only have an effect the
 *   first time through the loop. The affect of the r, g, and b
 *   parameters is determined by the current color mode. The x, y, and z
 *   parameters set the position of the light
 */
quil.core.point_light = (function quil$core$point_light(r,g,b,x,y,z){
return quil.core.current_graphics().pointLight(r,g,b,x,y,z);
});
/**
 * Pops the current transformation matrix off the matrix
 *   stack. Understanding pushing and popping requires understanding the
 *   concept of a matrix stack. The push-matrix fn saves the current
 *   coordinate system to the stack and pop-matrix restores the prior
 *   coordinate system. push-matrix and pop-matrix are used in conjuction
 *   with the other transformation methods and may be embedded to control
 *   the scope of the transformations.
 */
quil.core.pop_matrix = (function quil$core$pop_matrix(){
return quil.core.current_graphics().popMatrix();
});
/**
 * Restores the prior settings on the 'style stack'. Used in
 *   conjunction with push-style. Together they allow you to change the
 *   style settings and later return to what you had. When a new style is
 *   started with push-style, it builds on the current style information.
 *   The push-style and pop-style functions can be nested to provide more
 *   control
 */
quil.core.pop_style = (function quil$core$pop_style(){
return quil.core.current_graphics().popStyle();
});
/**
 * Facilitates exponential expressions. The pow() function is an
 *   efficient way of multiplying numbers by themselves (or their
 *   reciprocal) in large quantities. For example, (pow 3 5) is
 *   equivalent to the expression (* 3 3 3 3 3) and (pow 3 -5) is
 *   equivalent to (/ 1 (* 3 3 3 3 3)).
 */
quil.core.pow = (function quil$core$pow(num,exponent){
return quil.sketch.current_applet().pow(num,exponent);
});
/**
 * Prints the current camera matrix to std out. Useful for debugging.
 */
quil.core.print_camera = (function quil$core$print_camera(){
return quil.core.current_graphics().printCamera();
});
/**
 * Prints the current matrix to std out. Useful for debugging.
 */
quil.core.print_matrix = (function quil$core$print_matrix(){
return quil.core.current_graphics().printMatrix();
});
/**
 * Prints the current projection matrix to std out. Useful for
 *   debugging
 */
quil.core.print_projection = (function quil$core$print_projection(){
return quil.core.current_graphics().printProjection();
});
/**
 * Pushes the current transformation matrix onto the matrix
 *   stack. Understanding push-matrix and pop-matrix requires
 *   understanding the concept of a matrix stack. The push-matrix
 *   function saves the current coordinate system to the stack and
 *   pop-matrix restores the prior coordinate system. push-matrix and
 *   pop-matrix are used in conjuction with the other transformation
 *   methods and may be embedded to control the scope of the
 *   transformations.
 */
quil.core.push_matrix = (function quil$core$push_matrix(){
return quil.core.current_graphics().pushMatrix();
});
/**
 * Saves the current style settings onto a 'style stack'. Use with
 *   pop-style which restores the prior settings. Note that these
 *   functions are always used together. They allow you to change the
 *   style settings and later return to what you had. When a new style is
 *   started with push-style, it builds on the current style
 *   information. The push-style and pop-style fns can be embedded to
 *   provide more control.
 * 
 *   The style information controlled by the following functions are
 *   included in the style: fill, stroke, tint, stroke-weight,
 *   stroke-cap, stroke-join, image-mode, rect-mode, ellipse-mode,
 *   shape-mode, color-mode, text-align, text-font, text-mode, text-size,
 *   text-leading, emissive, specular, shininess, and ambient
 */
quil.core.push_style = (function quil$core$push_style(){
return quil.core.current_graphics().pushStyle();
});
/**
 * A quad is a quadrilateral, a four sided polygon. It is similar to a
 *   rectangle, but the angles between its edges are not constrained to
 *   be ninety degrees. The first pair of parameters (x1,y1) sets the
 *   first vertex and the subsequent pairs should proceed clockwise or
 *   counter-clockwise around the defined shape.
 */
quil.core.quad = (function quil$core$quad(x1,y1,x2,y2,x3,y3,x4,y4){
return quil.core.current_graphics().quad(x1,y1,x2,y2,x3,y3,x4,y4);
});
/**
 * Specifies vertex coordinates for quadratic Bezier curves. Each call to
 *   quadratic-vertex defines the position of one control points and one
 *   anchor point of a Bezier curve, adding a new segment to a line or shape.
 *   The first time quadratic-vertex is used within a begin-shape call, it
 *   must be prefaced with a call to vertex to set the first anchor point.
 *   This function must be used between begin-shape and end-shape and only
 *   when there is no MODE parameter specified to begin-shape. Using the 3D
 *   version requires rendering with :p3d.
 */
quil.core.quadratic_vertex = (function quil$core$quadratic_vertex(var_args){
var G__5723 = arguments.length;
switch (G__5723) {
case 4:
return quil.core.quadratic_vertex.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return quil.core.quadratic_vertex.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.quadratic_vertex.cljs$core$IFn$_invoke$arity$4 = (function (cx,cy,x3,y3){
return quil.core.current_graphics().quadraticVertex(cx,cy,x3,y3);
});

quil.core.quadratic_vertex.cljs$core$IFn$_invoke$arity$6 = (function (cx,cy,cz,x3,y3,z3){
return quil.core.current_graphics().quadraticVertex(cx,cy,cz,x3,y3,z3);
});

quil.core.quadratic_vertex.cljs$lang$maxFixedArity = 6;

/**
 * Converts a degree measurement to its corresponding value in
 *   radians. Radians and degrees are two ways of measuring the same
 *   thing. There are 360 degrees in a circle and 2*PI radians in a
 *   circle. For example, 90° = PI/2 = 1.5707964. All trigonometric
 *   methods in Processing require their parameters to be specified in
 *   radians.
 */
quil.core.radians = (function quil$core$radians(degrees){
return quil.sketch.current_applet().radians(degrees);
});
/**
 * Generates random numbers. Each time the random function is called,
 *   it returns an unexpected value within the specified range. If one
 *   parameter is passed to the function it will return a float between
 *   zero and the value of the high parameter. The function call (random
 *   5) returns values between 0 and 5 (starting at zero, up to but not
 *   including 5). If two parameters are passed, it will return a float
 *   with a value between the parameters. The function call
 *   (random -5 10.2) returns values starting at -5 up to (but not
 *   including) 10.2.
 */
quil.core.random = (function quil$core$random(var_args){
var G__5726 = arguments.length;
switch (G__5726) {
case 1:
return quil.core.random.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.random.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.random.cljs$core$IFn$_invoke$arity$1 = (function (max){
return quil.sketch.current_applet().random(max);
});

quil.core.random.cljs$core$IFn$_invoke$arity$2 = (function (min,max){
return quil.sketch.current_applet().random(min,max);
});

quil.core.random.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new 2D unit vector with a random direction
 */
quil.core.random_2d = (function quil$core$random_2d(){
var theta = quil.core.random.cljs$core$IFn$_invoke$arity$1(quil.core.TWO_PI);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos(theta),Math.sin(theta)], null);
});
/**
 * Returns a new 3D unit vector with a random direction
 */
quil.core.random_3d = (function quil$core$random_3d(){
var theta = quil.core.random.cljs$core$IFn$_invoke$arity$1(quil.core.TWO_PI);
var u = quil.core.random.cljs$core$IFn$_invoke$arity$2((-1),(1));
var xy = (function (){var G__5728 = ((1) - (u * u));
return Math.sqrt(G__5728);
})();
var vx = (xy * Math.cos(theta));
var vy = (xy * Math.sin(theta));
var vz = u;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vx,vy,vz], null);
});
/**
 * Returns a float from a random series of numbers having a mean of 0 and
 *   standard deviation of 1. Each time the randomGaussian() function is called,
 *   it returns a number fitting a Gaussian, or normal, distribution.
 *   There is theoretically no minimum or maximum value that randomGaussian()
 *   might return. Rather, there is just a very low probability that values far
 *   from the mean will be returned; and a higher probability that numbers near
 *   the mean will be returned. .
 */
quil.core.random_gaussian = (function quil$core$random_gaussian(){
return quil.sketch.current_applet().randomGaussian();
});
/**
 * Sets the seed value for random. By default, random produces
 *   different results each time the program is run. Set the value
 *   parameter to a constant to return the same pseudo-random numbers
 *   each time the software is run.
 */
quil.core.random_seed = (function quil$core$random_seed(w){
return quil.sketch.current_applet().randomSeed(w);
});
/**
 * Contains the value of the most recent key on the keyboard that was
 *   used (either pressed or released).
 * 
 *   For non-ASCII keys, use the keyCode variable. The keys included in
 *   the ASCII specification (BACKSPACE, TAB, ENTER, RETURN, ESC, and
 *   DELETE) do not require checking to see if they key is coded, and you
 *   should simply use the key variable instead of keyCode If you're
 *   making cross-platform projects, note that the ENTER key is commonly
 *   used on PCs and Unix and the RETURN key is used instead on
 *   Macintosh. Check for both ENTER and RETURN to make sure your program
 *   will work for all platforms.
 */
quil.core.raw_key = (function quil$core$raw_key(){
return quil.sketch.current_applet().key;
});
/**
 * Draws a rectangle to the screen. A rectangle is a four-sided shape
 *   with every angle at ninety degrees. By default, the first two
 *   parameters set the location of the upper-left corner, the third
 *   sets the width, and the fourth sets the height. These parameters
 *   may be changed with rect-mode.
 * 
 *   To draw a rounded rectangle, add a fifth parameter, which is used as
 *   the radius value for all four corners. To use a different radius value
 *   for each corner, include eight parameters.
 */
quil.core.rect = (function quil$core$rect(var_args){
var G__5730 = arguments.length;
switch (G__5730) {
case 4:
return quil.core.rect.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return quil.core.rect.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 8:
return quil.core.rect.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.rect.cljs$core$IFn$_invoke$arity$4 = (function (x,y,width,height){
return quil.core.current_graphics().rect(x,y,width,height);
});

quil.core.rect.cljs$core$IFn$_invoke$arity$5 = (function (x,y,width,height,r){
return quil.core.current_graphics().rect(x,y,width,height,r);
});

quil.core.rect.cljs$core$IFn$_invoke$arity$8 = (function (x,y,width,height,top_left_r,top_right_r,bottom_right_r,bottom_left_r){
return quil.core.current_graphics().rect(x,y,width,height,top_left_r,top_right_r,bottom_right_r,bottom_left_r);
});

quil.core.rect.cljs$lang$maxFixedArity = 8;

/**
 * Modifies the location from which rectangles draw. The default mode
 *   is :corner. Available modes are:
 * 
 * 
 *   :corner  - Specifies the location to be the upper left corner of the
 *           shape and uses the third and fourth parameters of rect to
 *           specify the width and height.
 * 
 *   :corners - Uses the first and second parameters of rect to set the
 *           location of one corner and uses the third and fourth
 *           parameters to set the opposite corner.
 * 
 *   :center  - Draws the image from its center point and uses the third
 *           and forth parameters of rect to specify the image's width
 *           and height.
 * 
 *   :radius  - Draws the image from its center point and uses the third
 *           and forth parameters of rect() to specify half of the
 *           image's width and height.
 */
quil.core.rect_mode = (function quil$core$rect_mode(mode){
var mode__$1 = quil.util.resolve_constant_key(mode,quil.core.rect_modes);
return quil.core.current_graphics().rectMode((mode__$1 | (0)));
});
/**
 * Extracts the red value from a color, scaled to match current color-mode.
 */
quil.core.red = (function quil$core$red(c){
return quil.core.current_graphics().red(cljs.core.unchecked_int(c));
});
/**
 * Executes the code within the draw fn one time. This functions
 *   allows the program to update the display window only when necessary,
 *   for example when an event registered by mouse-pressed or
 *   key-pressed occurs.
 * 
 *   In structuring a program, it only makes sense to call redraw
 *   within events such as mouse-pressed. This is because redraw does
 *   not run draw immediately (it only sets a flag that indicates an
 *   update is needed).
 * 
 *   Calling redraw within draw has no effect because draw is
 *   continuously called anyway.
 */
quil.core.redraw = (function quil$core$redraw(){
return quil.sketch.current_applet().redraw();
});
/**
 * This function load images on a separate thread so that your sketch
 *   does not freeze while images load during setup. While the image is
 *   loading, its width and height will be 0. If an error occurs while
 *   loading the image, its width and height will be set to -1. You'll
 *   know when the image has loaded properly because its width and height
 *   will be greater than 0. Asynchronous image loading (particularly
 *   when downloading from a server) can dramatically improve
 *   performance.
 */
quil.core.request_image = (function quil$core$request_image(filename){
return quil.sketch.current_applet().requestImage(cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename));
});
/**
 * Replaces the current matrix with the identity matrix. The
 *   equivalent function in OpenGL is glLoadIdentity()
 */
quil.core.reset_matrix = (function quil$core$reset_matrix(){
return quil.core.current_graphics().resetMatrix();
});
/**
 * Resize the image to a new width and height.
 *   To make the image scale proportionally, use 0 as the value for the wide or
 *   high parameter. For instance, to make the width of an image 150 pixels,
 *   and change the height using the same proportion, use resize(150, 0).
 * 
 *   Even though a PGraphics is technically a PImage, it is not possible
 *   to rescale the image data found in a PGraphics.
 *   (It's simply not possible to do this consistently across renderers:
 *   technically infeasible with P3D, or what would it even do with PDF?)
 *   If you want to resize PGraphics content, first get a copy of its image data
 *   using the get() method, and call resize() on the PImage that is returned.
 */
quil.core.resize = (function quil$core$resize(img,w,h){
return img.resize(w,h);
});
/**
 * Resizes sketch.
 *   Note about ClojureScript version: if canvas element is resized by external
 *   reasons (for example from js on a page then you still need to call this
 *   method in order to tell Quil that size has changed. Currently there is no
 *   good way to automatically detect that size of <canvas> element changed.
 */
quil.core.resize_sketch = (function quil$core$resize_sketch(width,height){
return quil.sketch.set_size(quil.sketch.current_applet(),width,height);
});
/**
 * Rotates a shape the amount specified by the angle parameter. Angles
 *   should be specified in radians (values from 0 to TWO-PI) or
 *   converted to radians with the radians function.
 * 
 *   Objects are always rotated around their relative position to the
 *   origin and positive numbers rotate objects in a clockwise
 *   direction. Transformations apply to everything that happens after
 *   and subsequent calls to the function accumulates the effect. For
 *   example, calling (rotate HALF-PI) and then (rotate HALF-PI) is the
 *   same as (rotate PI). All tranformations are reset when draw begins
 *   again.
 * 
 *   Technically, rotate multiplies the current transformation matrix by
 *   a rotation matrix. This function can be further controlled by the
 *   push-matrix and pop-matrix.
 * 
 *   When 4 arguments provides it produces a rotation of angle degrees
 *   around the vector x y z. Check examples for to better understand.
 *   This rotation follows the right-hand rule, so if the vector x y z points
 *   toward the user, the rotation will be counterclockwise.
 */
quil.core.rotate = (function quil$core$rotate(var_args){
var G__5733 = arguments.length;
switch (G__5733) {
case 1:
return quil.core.rotate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return quil.core.rotate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.rotate.cljs$core$IFn$_invoke$arity$1 = (function (angle){
return quil.core.current_graphics().rotate(angle);
});

quil.core.rotate.cljs$core$IFn$_invoke$arity$4 = (function (angle,vx,vy,vz){
return quil.core.current_graphics().rotate(angle,vx,vy,vz);
});

quil.core.rotate.cljs$lang$maxFixedArity = 4;

/**
 * Rotates a shape around the x-axis the amount specified by the angle
 *   parameter. Angles should be specified in radians (values from 0 to
 *   (* PI 2)) or converted to radians with the radians function. Objects
 *   are always rotated around their relative position to the origin and
 *   positive numbers rotate objects in a counterclockwise
 *   direction. Transformations apply to everything that happens after
 *   and subsequent calls to the function accumulates the effect. For
 *   example, calling (rotate-x HALF-PI) and then (rotate-x HALF-PI) is
 *   the same as (rotate-x PI). If rotate-x is called within the draw fn,
 *   the transformation is reset when the loop begins again. This
 *   function requires either the :p3d or :opengl renderer.
 */
quil.core.rotate_x = (function quil$core$rotate_x(angle){
return quil.core.current_graphics().rotateX(angle);
});
/**
 * Rotates a shape around the y-axis the amount specified by the angle
 *   parameter. Angles should be specified in radians (values from 0
 *   to (* PI 2)) or converted to radians with the radians function.
 *   Objects are always rotated around their relative position to the
 *   origin and positive numbers rotate objects in a counterclockwise
 *   direction. Transformations apply to everything that happens after
 *   and subsequent calls to the function accumulates the effect. For
 *   example, calling (rotate-y HALF-PI) and then (rotate-y HALF-PI) is
 *   the same as (rotate-y PI). If rotate-y is called within the draw fn,
 *   the transformation is reset when the loop begins again. This
 *   function requires either the :p3d or :opengl renderer.
 */
quil.core.rotate_y = (function quil$core$rotate_y(angle){
return quil.core.current_graphics().rotateY(angle);
});
/**
 * Rotates a shape around the z-axis the amount specified by the angle
 *   parameter. Angles should be specified in radians (values from 0
 *   to (* PI 2)) or converted to radians with the radians function.
 *   Objects are always rotated around their relative position to the
 *   origin and positive numbers rotate objects in a counterclockwise
 *   direction. Transformations apply to everything that happens after
 *   and subsequent calls to the function accumulates the effect. For
 *   example, calling (rotate-z HALF-PI) and then (rotate-z HALF-PI) is
 *   the same as (rotate-z PI). If rotate-y is called within the draw fn,
 *   the transformation is reset when the loop begins again. This
 *   function requires either the :p3d or :opengl renderer.
 */
quil.core.rotate_z = (function quil$core$rotate_z(angle){
return quil.core.current_graphics().rotateZ(angle);
});
/**
 * Calculates the integer closest to the value parameter. For example,
 *   (round 9.2) returns the value 9.
 */
quil.core.round = (function quil$core$round(val){
return quil.sketch.current_applet().round(val);
});
/**
 * Extracts the saturation value from a color.
 */
quil.core.saturation = (function quil$core$saturation(c){
return quil.core.current_graphics().saturation(cljs.core.unchecked_int(c));
});
/**
 * Saves an image from the display window. Images are saved in TIFF,
 *   TARGA, JPEG, and PNG format depending on the extension within the
 *   filename parameter. For example, image.tif will have a TIFF image
 *   and image.png will save a PNG image. If no extension is included in
 *   the filename, the image will save in TIFF format and .tif will be
 *   added to the name. All images saved from the main drawing window
 *   will be opaque. To save images without a background, use
 *   create-graphics.
 */
quil.core.save = (function quil$core$save(filename){
return quil.core.current_graphics().save(cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename));
});
/**
 * Saves an image identical to the current display window as a
 *   file. May be called multple times - each file saved will have a
 *   unique name. Name and image formate may be modified by passing a
 *   string parameter of the form "foo-####.ext" where foo- can be any
 *   arbitrary string, #### will be replaced with the current frame id
 *   and .ext is one of .tiff, .targa, .png, .jpeg or .jpg
 * 
 *   Examples:
 *   (save-frame)
 *   (save-frame "pretty-pic-####.jpg")
 */
quil.core.save_frame = (function quil$core$save_frame(var_args){
var G__5736 = arguments.length;
switch (G__5736) {
case 0:
return quil.core.save_frame.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quil.core.save_frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.save_frame.cljs$core$IFn$_invoke$arity$0 = (function (){
return quil.sketch.current_applet().saveFrame();
});

quil.core.save_frame.cljs$core$IFn$_invoke$arity$1 = (function (name){
return quil.sketch.current_applet().saveFrame(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
});

quil.core.save_frame.cljs$lang$maxFixedArity = 1;

/**
 * Increases or decreases the size of a shape by expanding and
 *   contracting vertices. Objects always scale from their relative
 *   origin to the coordinate system. Scale values are specified as
 *   decimal percentages. For example, the function call (scale 2)
 *   increases the dimension of a shape by 200%. Transformations apply to
 *   everything that happens after and subsequent calls to the function
 *   multiply the effect. For example, calling (scale 2) and then
 *   (scale 1.5) is the same as (scale 3). If scale is called within
 *   draw, the transformation is reset when the loop begins again. Using
 *   this fuction with the z parameter requires specfying :p3d or :opengl
 *   as the renderer. This function can be further controlled by
 *   push-matrix and pop-matrix.
 */
quil.core.scale = (function quil$core$scale(var_args){
var G__5739 = arguments.length;
switch (G__5739) {
case 1:
return quil.core.scale.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.scale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.scale.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.scale.cljs$core$IFn$_invoke$arity$1 = (function (s){
return quil.core.current_graphics().scale(s);
});

quil.core.scale.cljs$core$IFn$_invoke$arity$2 = (function (sx,sy){
return quil.core.current_graphics().scale(sx,sy);
});

quil.core.scale.cljs$core$IFn$_invoke$arity$3 = (function (sx,sy,sz){
return quil.core.current_graphics().scale(sx,sy,sz);
});

quil.core.scale.cljs$lang$maxFixedArity = 3;

/**
 * Takes a three-dimensional x, y, z position and returns the x value
 *   for where it will appear on a (two-dimensional) screen, once
 *   affected by translate, scale or any other transformations
 */
quil.core.screen_x = (function quil$core$screen_x(var_args){
var G__5742 = arguments.length;
switch (G__5742) {
case 2:
return quil.core.screen_x.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.screen_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.screen_x.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return quil.core.current_graphics().screenX(x,y);
});

quil.core.screen_x.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return quil.core.current_graphics().screenX(x,y,z);
});

quil.core.screen_x.cljs$lang$maxFixedArity = 3;

/**
 * Takes a three-dimensional x, y, z position and returns the y value
 *   for where it will appear on a (two-dimensional) screen, once
 *   affected by translate, scale or any other transformations
 */
quil.core.screen_y = (function quil$core$screen_y(var_args){
var G__5745 = arguments.length;
switch (G__5745) {
case 2:
return quil.core.screen_y.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.screen_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.screen_y.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return quil.core.current_graphics().screenY(x,y);
});

quil.core.screen_y.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return quil.core.current_graphics().screenY(x,y,z);
});

quil.core.screen_y.cljs$lang$maxFixedArity = 3;

/**
 * Given an x, y, z coordinate, returns its z value.
 * This value can be used to determine if an x, y, z coordinate is in
 * front or in back of another (x, y, z) coordinate. The units are
 * based on how the zbuffer is set up, and don't relate to anything
 * 'real'. They're only useful for in comparison to another value
 * obtained from screen-z, or directly out of the zbuffer
 */
quil.core.screen_z = (function quil$core$screen_z(x,y,z){
return quil.core.current_graphics().screenZ(x,y,z);
});
/**
 * Returns the current second as a value from 0 - 59.
 */
quil.core.seconds = (function quil$core$seconds(){
return quil.sketch.current_applet().second();
});
/**
 * Changes the color of any pixel in the display window. The x and y
 *   parameters specify the pixel to change and the color parameter
 *   specifies the color value. The color parameter is affected by the
 *   current color mode (the default is RGB values from 0 to 255).
 * 
 *   Setting the color of a single pixel with (set x, y) is easy, but not
 *   as fast as putting the data directly into pixels[].
 * 
 *   This function ignores imageMode().
 * 
 *   Due to what appears to be a bug in Apple's Java implementation, the
 *   point() and set() methods are extremely slow in some circumstances
 *   when used with the default renderer. Using :p2d or :p3d will fix the
 *   problem. Grouping many calls to point or set-pixel together can also
 *   help. (Bug 1094)
 */
quil.core.set_pixel = (function quil$core$set_pixel(var_args){
var G__5748 = arguments.length;
switch (G__5748) {
case 3:
return quil.core.set_pixel.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.set_pixel.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.set_pixel.cljs$core$IFn$_invoke$arity$3 = (function (x,y,c){
return quil.core.set_pixel.cljs$core$IFn$_invoke$arity$4(quil.core.current_graphics(),x,y,c);
});

quil.core.set_pixel.cljs$core$IFn$_invoke$arity$4 = (function (img,x,y,c){
return img.set((x | (0)),(y | (0)),(c | (0)));
});

quil.core.set_pixel.cljs$lang$maxFixedArity = 4;

/**
 * Writes an image directly into the display window. The x and y
 *   parameters define the coordinates for the upper-left corner of the
 *   image.
 */
quil.core.set_image = (function quil$core$set_image(x,y,src){
return quil.core.current_graphics().set((x | (0)),(y | (0)),src);
});
/**
 * Displays shapes to the screen. The shapes must have been loaded
 *   with load-shape. Processing currently works with SVG shapes
 *   only. The sh parameter specifies the shape to display and the x and
 *   y parameters define the location of the shape from its upper-left
 *   corner. The shape is displayed at its original size unless the width
 *   and height parameters specify a different size. The shape-mode
 *   fn changes the way the parameters work. A call to
 *   (shape-mode :corners), for example, will change the width and height
 *   parameters to define the x and y values of the opposite corner of
 *   the shape.
 * 
 *   Note complex shapes may draw awkwardly with the renderers :p2d, :p3d, and
 *   :opengl. Those renderers do not yet support shapes that have holes
 *   or complicated breaks.
 */
quil.core.shape = (function quil$core$shape(var_args){
var G__5751 = arguments.length;
switch (G__5751) {
case 1:
return quil.core.shape.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return quil.core.shape.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return quil.core.shape.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.shape.cljs$core$IFn$_invoke$arity$1 = (function (sh){
return quil.core.current_graphics().shape(sh);
});

quil.core.shape.cljs$core$IFn$_invoke$arity$3 = (function (sh,x,y){
return quil.core.current_graphics().shape(sh,x,y);
});

quil.core.shape.cljs$core$IFn$_invoke$arity$5 = (function (sh,x,y,width,height){
return quil.core.current_graphics().shape(sh,x,y,width,height);
});

quil.core.shape.cljs$lang$maxFixedArity = 5;

/**
 * Shears a shape around the x-axis the amount specified by the angle
 *   parameter. Angles should be specified in radians (values from 0 to
 *   PI*2) or converted to radians with the radians() function. Objects
 *   are always sheared around their relative position to the origin and
 *   positive numbers shear objects in a clockwise direction.
 *   Transformations apply to everything that happens after and
 *   subsequent calls to the function accumulates the effect. For
 *   example, calling (shear-x (/ PI 2)) and then (shear-x (/ PI 2)) is
 *   the same as (shear-x PI). If shear-x is called within the draw fn,
 *   the transformation is reset when the loop begins again. This
 *   function works in P2D or JAVA2D mode.
 * 
 *   Technically, shear-x multiplies the current transformation matrix
 *   by a rotation matrix. This function can be further controlled by the
 *   push-matrix and pop-matrix fns.
 */
quil.core.shear_x = (function quil$core$shear_x(angle){
return quil.core.current_graphics().shearX(angle);
});
/**
 * Shears a shape around the y-axis the amount specified by the angle
 *   parameter. Angles should be specified in radians (values from 0 to
 *   PI*2) or converted to radians with the radians() function. Objects
 *   are always sheared around their relative position to the origin and
 *   positive numbers shear objects in a clockwise direction.
 *   Transformations apply to everything that happens after and
 *   subsequent calls to the function accumulates the effect. For
 *   example, calling (shear-y (/ PI 2)) and then (shear-y (/ PI 2)) is
 *   the same as (shear-y PI). If shear-y is called within the draw fn,
 *   the transformation is reset when the loop begins again. This
 *   function works in P2D or JAVA2D mode.
 * 
 *   Technically, shear-y multiplies the current transformation matrix
 *   by a rotation matrix. This function can be further controlled by the
 *   push-matrix and pop-matrix fns.
 */
quil.core.shear_y = (function quil$core$shear_y(angle){
return quil.core.current_graphics().shearY(angle);
});
/**
 * Modifies the location from which shapes draw. Available modes are
 *   :corner, :corners and :center. Default is :corner.
 * 
 *   :corner  - specifies the location to be the upper left corner of the
 *           shape and uses the third and fourth parameters of shape
 *           to specify the width and height.
 * 
 *   :corners - uses the first and second parameters of shape to set
 *           the location of one corner and uses the third and fourth
 *           parameters to set the opposite corner.
 * 
 *   :center  - draws the shape from its center point and uses the third
 *           and forth parameters of shape to specify the width and
 *           height. 
 */
quil.core.shape_mode = (function quil$core$shape_mode(mode){
var mode__$1 = quil.util.resolve_constant_key(mode,quil.core.p_shape_modes);
return quil.core.current_graphics().shapeMode((mode__$1 | (0)));
});
/**
 * Sets the amount of gloss in the surface of shapes. Used in
 *   combination with ambient, specular, and emissive in setting
 *   the material properties of shapes.
 */
quil.core.shininess = (function quil$core$shininess(shine){
return quil.core.current_graphics().shininess(shine);
});
/**
 * Calculates the sine of an angle. This function expects the values
 *   of the angle parameter to be provided in radians (values from 0 to
 *   6.28). A float within the range -1 to 1 is returned.
 */
quil.core.sin = (function quil$core$sin(angle){
return quil.sketch.current_applet().sin(angle);
});
/**
 * Draws all geometry with smooth (anti-aliased) edges. This will slow
 *   down the frame rate of the application, but will enhance the visual
 *   refinement.
 * 
 *   Must be called inside :settings handler.
 * 
 *   The level parameter (int) increases the level of smoothness with the
 *   P2D and P3D renderers. This is the level of over sampling applied to
 *   the graphics buffer. The value '2' will double the rendering size
 *   before scaling it down to the display size. This is called '2x
 *   anti-aliasing.' The value 4 is used for 4x anti-aliasing and 8 is
 *   specified for 8x anti-aliasing. If level is set to 0, it will disable
 *   all smoothing; it's the equivalent of the function noSmooth().
 *   The maximum anti-aliasing level is determined by the hardware of the
 *   machine that is running the software.
 * 
 *   Note that smooth will also improve image quality of resized images.
 */
quil.core.smooth = (function quil$core$smooth(var_args){
var G__5754 = arguments.length;
switch (G__5754) {
case 0:
return quil.core.smooth.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quil.core.smooth.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.smooth.cljs$core$IFn$_invoke$arity$0 = (function (){
return quil.core.current_graphics().smooth();
});

quil.core.smooth.cljs$core$IFn$_invoke$arity$1 = (function (level){
return quil.core.current_graphics().smooth((level | (0)));
});

quil.core.smooth.cljs$lang$maxFixedArity = 1;

/**
 * Sets the specular color of the materials used for shapes drawn to
 *   the screen, which sets the color of hightlights. Specular refers to
 *   light which bounces off a surface in a perferred direction (rather
 *   than bouncing in all directions like a diffuse light). Used in
 *   combination with emissive, ambient, and shininess in setting
 *   the material properties of shapes.
 */
quil.core.specular = (function quil$core$specular(var_args){
var G__5757 = arguments.length;
switch (G__5757) {
case 1:
return quil.core.specular.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return quil.core.specular.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.specular.cljs$core$IFn$_invoke$arity$1 = (function (gray){
return quil.core.current_graphics().specular(gray);
});

quil.core.specular.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return quil.core.current_graphics().specular(x,y,z);
});

quil.core.specular.cljs$lang$maxFixedArity = 3;

/**
 * Generates a hollow ball made from tessellated triangles.
 */
quil.core.sphere = (function quil$core$sphere(radius){
return quil.core.current_graphics().sphere(radius);
});
/**
 * Controls the detail used to render a sphere by adjusting the number
 *   of vertices of the sphere mesh. The default resolution is 30, which
 *   creates a fairly detailed sphere definition with vertices every
 *   360/30 = 12 degrees. If you're going to render a great number of
 *   spheres per frame, it is advised to reduce the level of detail using
 *   this function. The setting stays active until sphere-detail is
 *   called again with a new parameter and so should not be called prior
 *   to every sphere statement, unless you wish to render spheres with
 *   different settings, e.g. using less detail for smaller spheres or
 *   ones further away from the camera. To controla the detail of the
 *   horizontal and vertical resolution independently, use the version of
 *   the functions with two parameters.
 */
quil.core.sphere_detail = (function quil$core$sphere_detail(var_args){
var G__5760 = arguments.length;
switch (G__5760) {
case 1:
return quil.core.sphere_detail.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.sphere_detail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.sphere_detail.cljs$core$IFn$_invoke$arity$1 = (function (res){
return quil.core.current_graphics().sphereDetail((res | (0)));
});

quil.core.sphere_detail.cljs$core$IFn$_invoke$arity$2 = (function (ures,vres){
return quil.core.current_graphics().sphereDetail((ures | (0)),(vres | (0)));
});

quil.core.sphere_detail.cljs$lang$maxFixedArity = 2;

/**
 * Adds a spot light. Lights need to be included in the draw to
 *   remain persistent in a looping program. Placing them in the setup
 *   of a looping program will cause them to only have an effect the
 *   first time through the loop. The affect of the r, g, and b
 *   parameters is determined by the current color mode. The x, y, and z
 *   parameters specify the position of the light and nx, ny, nz specify
 *   the direction or light. The angle parameter affects angle of the
 *   spotlight cone.
 */
quil.core.spot_light = (function quil$core$spot_light(var_args){
var G__5763 = arguments.length;
switch (G__5763) {
case 11:
return quil.core.spot_light.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
case 5:
return quil.core.spot_light.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.spot_light.cljs$core$IFn$_invoke$arity$11 = (function (r,g,b,x,y,z,nx,ny,nz,angle,concentration){
return quil.core.current_graphics().spotLight(r,g,b,x,y,z,nx,ny,nz,angle,concentration);
});

quil.core.spot_light.cljs$core$IFn$_invoke$arity$5 = (function (p__5764,p__5765,p__5766,angle,concentration){
var vec__5767 = p__5764;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5767,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5767,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5767,(2),null);
var vec__5770 = p__5765;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5770,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5770,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5770,(2),null);
var vec__5773 = p__5766;
var nx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5773,(0),null);
var ny = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5773,(1),null);
var nz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5773,(2),null);
return quil.core.current_graphics().spotLight(r,g,b,x,y,z,nx,ny,nz,angle,concentration);
});

quil.core.spot_light.cljs$lang$maxFixedArity = 11;

/**
 * Squares a number (multiplies a number by itself). The result is
 *   always a positive number, as multiplying two negative numbers always
 *   yields a positive result. For example, -1 * -1 = 1.
 */
quil.core.sq = (function quil$core$sq(a){
return quil.sketch.current_applet().sq(a);
});
/**
 * Calculates the square root of a number. The square root of a number
 *   is always positive, even though there may be a valid negative
 *   root. The square root s of number a is such that (= a (* s s)) . It
 *   is the opposite of squaring.
 */
quil.core.sqrt = (function quil$core$sqrt(a){
return quil.sketch.current_applet().sqrt(a);
});
/**
 * Causes Processing to continuously execute the code within
 *   draw. If no-loop is called, the code in draw stops executing.
 */
quil.core.start_loop = (function quil$core$start_loop(){
quil.sketch.current_applet().loop();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(quil.core.internal_state(),cljs.core.assoc,cljs.core.cst$kw$looping_QMARK_,true);
});
/**
 * Save current stroke color vector in the internal state. It can be accessed using (current-stroke) function.
 */
quil.core.save_current_stroke = (function quil$core$save_current_stroke(color){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(quil.core.internal_state(),cljs.core.assoc,cljs.core.cst$kw$current_DASH_stroke,color);
});
/**
 * Sets the color used to draw lines and borders around shapes. This
 *   color is either specified in terms of the RGB or HSB color depending
 *   on the current color-mode (the default color space is RGB, with
 *   each value in the range from 0 to 255).
 *   If nil is passed it removes any fill color; equivalent to (no-stroke).
 */
quil.core.stroke = (function quil$core$stroke(var_args){
var G__5778 = arguments.length;
switch (G__5778) {
case 1:
return quil.core.stroke.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.stroke.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.stroke.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.stroke.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.stroke.cljs$core$IFn$_invoke$arity$1 = (function (gray){
if(cljs.core.vector_QMARK_(gray)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.stroke,gray);
} else {
if((gray == null)){
return quil.core.no_stroke();
} else {
quil.core.current_graphics().stroke(gray);

return quil.core.save_current_stroke(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gray], null));

}
}
});

quil.core.stroke.cljs$core$IFn$_invoke$arity$2 = (function (gray,alpha){
quil.core.current_graphics().stroke(gray,alpha);

return quil.core.save_current_stroke(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gray,alpha], null));
});

quil.core.stroke.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
quil.core.current_graphics().stroke(x,y,z);

return quil.core.save_current_stroke(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null));
});

quil.core.stroke.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,alpha){
quil.core.current_graphics().stroke(x,y,z,alpha);

return quil.core.save_current_stroke(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [z,y,z,alpha], null));
});

quil.core.stroke.cljs$lang$maxFixedArity = 4;

/**
 * Sets the style for rendering line endings. These ends are either
 *   squared, extended, or rounded and specified with the corresponding
 *   parameters :square, :project, and :round. The default cap is :round.
 */
quil.core.stroke_cap = (function quil$core$stroke_cap(cap_mode){
var cap_mode__$1 = quil.util.resolve_constant_key(cap_mode,quil.core.stroke_cap_modes);
return quil.core.current_graphics().strokeCap(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cap_mode__$1));
});
/**
 * Sets the style of the joints which connect line
 *   segments. These joints are either mitered, beveled, or rounded and
 *   specified with the corresponding parameters :miter, :bevel, and
 *   :round. The default joint is :miter.
 * 
 *   This function is not available with the :p2d, :p3d, or :opengl
 *   renderers.
 */
quil.core.stroke_join = (function quil$core$stroke_join(join_mode){
var join_mode__$1 = quil.util.resolve_constant_key(join_mode,quil.core.stroke_join_modes);
return quil.core.current_graphics().strokeJoin(cljs.core.str.cljs$core$IFn$_invoke$arity$1(join_mode__$1));
});
/**
 * Sets the width of the stroke used for lines, points, and the border
 *   around shapes. All widths are set in units of pixels. 
 */
quil.core.stroke_weight = (function quil$core$stroke_weight(weight){
return quil.core.current_graphics().strokeWeight(weight);
});
/**
 * Calculates the ratio of the sine and cosine of an angle. This
 *   function expects the values of the angle parameter to be provided in
 *   radians (values from 0 to PI*2). Values are returned in the range
 *   infinity to -infinity.
 */
quil.core.tan = (function quil$core$tan(angle){
return quil.sketch.current_applet().tan(angle);
});
/**
 * Returns the target framerate specified with the fn frame-rate
 */
quil.core.target_frame_rate = (function quil$core$target_frame_rate(){
return cljs.core.cst$kw$frame_DASH_rate.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(quil.core.internal_state()));
});
/**
 * Draws a char to the screen in the specified position. See text fn
 *   for more details.
 */
quil.core.text_char = (function quil$core$text_char(var_args){
var G__5781 = arguments.length;
switch (G__5781) {
case 3:
return quil.core.text_char.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.text_char.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.text_char.cljs$core$IFn$_invoke$arity$3 = (function (c,x,y){
if(cljs.core.truth_(quil.core.current_fill())){
return quil.core.current_graphics().text(cljs.core.char$(c),x,y);
} else {
return null;
}
});

quil.core.text_char.cljs$core$IFn$_invoke$arity$4 = (function (c,x,y,z){
if(cljs.core.truth_(quil.core.current_fill())){
return quil.core.current_graphics().text(cljs.core.char$(c),x,y,z);
} else {
return null;
}
});

quil.core.text_char.cljs$lang$maxFixedArity = 4;

/**
 * Draws a number to the screen in the specified position. See text fn
 *   for more details.
 */
quil.core.text_num = (function quil$core$text_num(var_args){
var G__5784 = arguments.length;
switch (G__5784) {
case 3:
return quil.core.text_num.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.text_num.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.text_num.cljs$core$IFn$_invoke$arity$3 = (function (num,x,y){
if(cljs.core.truth_(quil.core.current_fill())){
return quil.core.current_graphics().text(num,x,y);
} else {
return null;
}
});

quil.core.text_num.cljs$core$IFn$_invoke$arity$4 = (function (num,x,y,z){
if(cljs.core.truth_(quil.core.current_fill())){
return quil.core.current_graphics().text(num,x,y,z);
} else {
return null;
}
});

quil.core.text_num.cljs$lang$maxFixedArity = 4;

/**
 * Draws text to the screen in the position specified by the x and y
 *   parameters and the optional z parameter. A default font will be used
 *   unless a font is set with the text-font fn. Change the color of the
 *   text with the fill fn. The text displays in relation to the
 *   text-align fn, which gives the option to draw to the left, right, and
 *   center of the coordinates.
 * 
 *   The x1, y1, x2 and y2 parameters define a
 *   rectangular area to display within and may only be used with string
 *   data. For text drawn inside a rectangle, the coordinates are
 *   interpreted based on the current rect-mode setting.
 */
quil.core.text = (function quil$core$text(var_args){
var G__5787 = arguments.length;
switch (G__5787) {
case 3:
return quil.core.text.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.text.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return quil.core.text.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.text.cljs$core$IFn$_invoke$arity$3 = (function (s,x,y){
if(cljs.core.truth_(quil.core.current_fill())){
return quil.core.current_graphics().text(s,x,y);
} else {
return null;
}
});

quil.core.text.cljs$core$IFn$_invoke$arity$4 = (function (s,x,y,z){
if(cljs.core.truth_(quil.core.current_fill())){
return quil.core.current_graphics().text(s,x,y,z);
} else {
return null;
}
});

quil.core.text.cljs$core$IFn$_invoke$arity$5 = (function (s,x1,y1,x2,y2){
if(cljs.core.truth_(quil.core.current_fill())){
return quil.core.current_graphics().text(s,x1,y1,x2,y2);
} else {
return null;
}
});

quil.core.text.cljs$lang$maxFixedArity = 5;

/**
 * Sets the current alignment for drawing text. Available modes are:
 * 
 *   horizontal - :left, :center, and :right
 *   vertical   - :top, :bottom, :center, and :baseline
 * 
 *   An optional second parameter specifies the vertical alignment
 *   mode. :baseline is the default. The :top and :center parameters are
 *   straightforward. The :bottom parameter offsets the line based on the
 *   current text-descent. For multiple lines, the final line will be
 *   aligned to the bottom, with the previous lines appearing above it.
 * 
 *   When using text with width and height parameters, :baseline is
 *   ignored, and treated as :top. (Otherwise, text would by default draw
 *   outside the box, since :baseline is the default setting. :baseline is
 *   not a useful drawing mode for text drawn in a rectangle.)
 * 
 *   The vertical alignment is based on the value of text-ascent, which
 *   many fonts do not specify correctly. It may be necessary to use a
 *   hack and offset by a few pixels by hand so that the offset looks
 *   correct. To do this as less of a hack, use some percentage of
 *   text-ascent or text-descent so that the hack works even if you
 *   change the size of the font.
 */
quil.core.text_align = (function quil$core$text_align(var_args){
var G__5790 = arguments.length;
switch (G__5790) {
case 1:
return quil.core.text_align.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.text_align.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.text_align.cljs$core$IFn$_invoke$arity$1 = (function (align){
var align__$1 = quil.util.resolve_constant_key(align,quil.core.horizontal_alignment_modes);
return quil.core.current_graphics().textAlign((align__$1 | (0)));
});

quil.core.text_align.cljs$core$IFn$_invoke$arity$2 = (function (align_x,align_y){
var align_x__$1 = quil.util.resolve_constant_key(align_x,quil.core.horizontal_alignment_modes);
var align_y__$1 = quil.util.resolve_constant_key(align_y,quil.core.vertical_alignment_modes);
return quil.core.current_graphics().textAlign((align_x__$1 | (0)),(align_y__$1 | (0)));
});

quil.core.text_align.cljs$lang$maxFixedArity = 2;

/**
 * Returns the ascent of the current font at its current size. This
 *   information is useful for determining the height of the font above
 *   the baseline. For example, adding the text-ascent and text-descent
 *   values will give you the total height of the line.
 */
quil.core.text_ascent = (function quil$core$text_ascent(){
return quil.core.current_graphics().textAscent();
});
/**
 * Returns descent of the current font at its current size. This
 *   information is useful for determining the height of the font below
 *   the baseline. For example, adding the text-ascent and text-descent
 *   values will give you the total height of the line.
 */
quil.core.text_descent = (function quil$core$text_descent(){
return quil.core.current_graphics().textDescent();
});
/**
 * Sets the current font that will be drawn with the text
 *   function. Fonts must be loaded with load-font before it can be
 *   used. This font will be used in all subsequent calls to the text
 *   function. If no size parameter is input, the font will appear at its
 *   original size until it is changed with text-size.
 * 
 *   Because fonts are usually bitmaped, you should create fonts at the
 *   sizes that will be used most commonly. Using textFont without the
 *   size parameter will result in the cleanest-looking text.
 * 
 *   With the default (JAVA2D) and PDF renderers, it's also possible to
 *   enable the use of native fonts via the command
 *   (hint :enable-native-fonts). This will produce vector text in JAVA2D
 *   sketches and PDF output in cases where the vector data is available:
 *   when the font is still installed, or the font is created via the
 *   create-font fn
 */
quil.core.text_font = (function quil$core$text_font(var_args){
var G__5793 = arguments.length;
switch (G__5793) {
case 1:
return quil.core.text_font.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.text_font.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.text_font.cljs$core$IFn$_invoke$arity$1 = (function (font){
return quil.core.current_graphics().textFont(font);
});

quil.core.text_font.cljs$core$IFn$_invoke$arity$2 = (function (font,size){
return quil.core.current_graphics().textFont(font,(size | (0)));
});

quil.core.text_font.cljs$lang$maxFixedArity = 2;

/**
 * Sets the spacing between lines of text in units of pixels. This
 *   setting will be used in all subsequent calls to the text function.
 */
quil.core.text_leading = (function quil$core$text_leading(leading){
return quil.core.current_graphics().textLeading(leading);
});
/**
 * Sets the way text draws to the screen - available modes
 *   are :model and :shape
 * 
 *   In the default configuration (the :model mode), it's possible to
 *   rotate, scale, and place letters in two and three dimensional space.
 * 
 *   The :shape mode draws text using the glyph outlines of individual
 *   characters rather than as textures. This mode is only supported with
 *   the PDF and OPENGL renderer settings. With the PDF renderer, you
 *   must specify the :shape text-mode before any other drawing occurs.
 *   If the outlines are not available, then :shape will be ignored and
 *   :model will be used instead.
 * 
 *   The :shape option in OPENGL mode can be combined with begin-raw to
 *   write vector-accurate text to 2D and 3D output files, for instance
 *   DXF or PDF. :shape is not currently optimized for OPENGL, so if
 *   recording shape data, use :model until you're ready to capture the
 *   geometry with begin-raw.
 */
quil.core.text_mode = (function quil$core$text_mode(mode){
var mode__$1 = quil.util.resolve_constant_key(mode,quil.core.text_modes);
return quil.core.current_graphics().textMode((mode__$1 | (0)));
});
/**
 * Sets the current font size. This size will be used in all
 *   subsequent calls to the text fn. Font size is measured in
 *   units of pixels.
 */
quil.core.text_size = (function quil$core$text_size(size){
return quil.core.current_graphics().textSize(size);
});
/**
 * Sets a texture to be applied to vertex points. The texture fn must
 *   be called between begin-shape and end-shape and before any calls to
 *   vertex.
 * 
 *   When textures are in use, the fill color is ignored. Instead, use
 *   tint to specify the color of the texture as it is applied to the
 *   shape.
 */
quil.core.texture = (function quil$core$texture(img){
return quil.core.current_graphics().texture(img);
});
/**
 * Sets the coordinate space for texture mapping. There are two
 *   options, :image and :normal.
 * 
 *   :image refers to the actual coordinates of the image and :normal
 *   refers to a normalized space of values ranging from 0 to 1. The
 *   default mode is :image. In :image, if an image is 100 x 200 pixels,
 *   mapping the image onto the entire size of a quad would require the
 *   points (0,0) (0,100) (100,200) (0,200). The same mapping in
 *   NORMAL_SPACE is (0,0) (0,1) (1,1) (0,1).
 */
quil.core.texture_mode = (function quil$core$texture_mode(mode){
var mode__$1 = quil.util.resolve_constant_key(mode,quil.core.texture_modes);
return quil.core.current_graphics().textureMode((mode__$1 | (0)));
});
/**
 * Calculates and returns the width of any text string.
 */
quil.core.text_width = (function quil$core$text_width(data){
return quil.core.current_graphics().textWidth(data);
});
/**
 * Sets the fill value for displaying images. Images can be tinted to
 *   specified colors or made transparent by setting the alpha.
 * 
 *   To make an image transparent, but not change it's color, use white
 *   as the tint color and specify an alpha value. For instance,
 *   tint(255, 128) will make an image 50% transparent (unless
 *   colorMode() has been used).
 * 
 *   The value for the parameter gray must be less than or equal to the
 *   current maximum value as specified by colorMode(). The default
 *   maximum value is 255.
 * 
 *   Also used to control the coloring of textures in 3D.
 */
quil.core.tint = (function quil$core$tint(var_args){
var G__5796 = arguments.length;
switch (G__5796) {
case 1:
return quil.core.tint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.tint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.tint.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.tint.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.tint.cljs$core$IFn$_invoke$arity$1 = (function (gray){
return quil.core.current_graphics().tint(gray);
});

quil.core.tint.cljs$core$IFn$_invoke$arity$2 = (function (gray,alpha){
return quil.core.current_graphics().tint(gray,alpha);
});

quil.core.tint.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return quil.core.current_graphics().tint(r,g,b);
});

quil.core.tint.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return quil.core.current_graphics().tint(g,g,b,a);
});

quil.core.tint.cljs$lang$maxFixedArity = 4;

/**
 * Specifies an amount to displace objects within the display
 *   window. The x parameter specifies left/right translation, the y
 *   parameter specifies up/down translation, and the z parameter
 *   specifies translations toward/away from the screen.  Transformations
 *   apply to everything that happens after and subsequent calls to the
 *   function accumulates the effect. For example, calling (translate 50
 *   0) and then (translate 20, 0) is the same as (translate 70, 0). If
 *   translate is called within draw, the transformation is reset when
 *   the loop begins again. This function can be further controlled by
 *   the push-matrix and pop-matrix.
 */
quil.core.translate = (function quil$core$translate(var_args){
var G__5799 = arguments.length;
switch (G__5799) {
case 1:
return quil.core.translate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.core.translate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.translate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.translate.cljs$core$IFn$_invoke$arity$1 = (function (v){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.translate,v);
});

quil.core.translate.cljs$core$IFn$_invoke$arity$2 = (function (tx,ty){
return quil.core.current_graphics().translate(tx,ty);
});

quil.core.translate.cljs$core$IFn$_invoke$arity$3 = (function (tx,ty,tz){
return quil.core.current_graphics().translate(tx,ty,tz);
});

quil.core.translate.cljs$lang$maxFixedArity = 3;

/**
 * A triangle is a plane created by connecting three points. The first
 *   two arguments specify the first point, the middle two arguments
 *   specify the second point, and the last two arguments specify the
 *   third point.
 */
quil.core.triangle = (function quil$core$triangle(x1,y1,x2,y2,x3,y3){
return quil.core.current_graphics().triangle(x1,y1,x2,y2,x3,y3);
});
/**
 * Unpack a binary string to an integer. See binary for converting
 *   integers to strings.
 */
quil.core.unbinary = (function quil$core$unbinary(str_val){
return quil.sketch.current_applet().unbinary(cljs.core.str.cljs$core$IFn$_invoke$arity$1(str_val));
});
/**
 * Converts a String representation of a hexadecimal number to its
 *   equivalent integer value.
 */
quil.core.unhex = (function quil$core$unhex(hex_str){
return quil.sketch.current_applet().unhex(cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex_str));
});
/**
 * Updates the display window or image with the data in the pixels array.
 *   Use in conjunction with (pixels). If you're only reading pixels from
 *   the array, there's no need to call update-pixels unless there are
 *   changes.
 * 
 *   Certain renderers may or may not seem to require pixels or
 *   update-pixels. However, the rule is that any time you want to
 *   manipulate the pixels array, you must first call pixels, and
 *   after changes have been made, call update-pixels. Even if the
 *   renderer may not seem to use this function in the current Processing
 *   release, this will always be subject to change.
 */
quil.core.update_pixels = (function quil$core$update_pixels(var_args){
var G__5802 = arguments.length;
switch (G__5802) {
case 0:
return quil.core.update_pixels.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return quil.core.update_pixels.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.update_pixels.cljs$core$IFn$_invoke$arity$0 = (function (){
return quil.core.update_pixels.cljs$core$IFn$_invoke$arity$1(quil.core.current_graphics());
});

quil.core.update_pixels.cljs$core$IFn$_invoke$arity$1 = (function (img){
var temp__5457__auto___5804 = img.stored_pix_array;
if(cljs.core.truth_(temp__5457__auto___5804)){
var pix_array_5805 = temp__5457__auto___5804;
img.pixels.set(pix_array_5805);

img.stored_pix_array = null;
} else {
}

return img.updatePixels();
});

quil.core.update_pixels.cljs$lang$maxFixedArity = 1;

/**
 * All shapes are constructed by connecting a series of
 *   vertices. vertex is used to specify the vertex coordinates for
 *   points, lines, triangles, quads, and polygons and is used
 *   exclusively within the begin-shape and end-shape fns.
 * 
 *   Drawing a vertex in 3D using the z parameter requires the :p3d or
 *   :opengl renderers to be used.
 * 
 *   This function is also used to map a texture onto the geometry. The
 *   texture fn declares the texture to apply to the geometry and the u
 *   and v coordinates set define the mapping of this texture to the
 *   form. By default, the coordinates used for u and v are specified in
 *   relation to the image's size in pixels, but this relation can be
 *   changed with texture-mode.
 */
quil.core.vertex = (function quil$core$vertex(var_args){
var G__5807 = arguments.length;
switch (G__5807) {
case 2:
return quil.core.vertex.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.core.vertex.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return quil.core.vertex.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return quil.core.vertex.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.core.vertex.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return quil.core.current_graphics().vertex(x,y);
});

quil.core.vertex.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return quil.core.current_graphics().vertex(x,y,z);
});

quil.core.vertex.cljs$core$IFn$_invoke$arity$4 = (function (x,y,u,v){
return quil.core.current_graphics().vertex(x,y,u,v);
});

quil.core.vertex.cljs$core$IFn$_invoke$arity$5 = (function (x,y,z,u,v){
return quil.core.current_graphics().vertex(x,y,z,u,v);
});

quil.core.vertex.cljs$lang$maxFixedArity = 5;

/**
 * Returns the current year as an integer (2003, 2004, 2005, etc).
 */
quil.core.year = (function quil$core$year(){
return quil.sketch.current_applet().year();
});
/**
 * Width of the display window. The value of width is zero until size is
 *   called.
 */
quil.core.width = (function quil$core$width(){
return quil.sketch.current_applet().width;
});
var ret__4684__auto___5816 = (function (){
/**
 * Temporarily set the fill color for the body of this macro.
 * The code outside of with-fill form will have the previous fill color set.
 * 
 * A fill argument of nil disables the fill.
 * 
 * Example: (with-fill 255 ...)
 *          (with-fill [10 80 98] ...)
 *          (with-fill nil ...)
 */
quil.core.with_fill = (function quil$core$with_fill(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5817 = arguments.length;
var i__4642__auto___5818 = (0);
while(true){
if((i__4642__auto___5818 < len__4641__auto___5817)){
args__4647__auto__.push((arguments[i__4642__auto___5818]));

var G__5819 = (i__4642__auto___5818 + (1));
i__4642__auto___5818 = G__5819;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return quil.core.with_fill.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

quil.core.with_fill.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fill,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$fill__5809__auto__,null,(1),null)),(new cljs.core.List(null,fill,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$previous_DASH_fill__5810__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$quil$core_SLASH_current_DASH_fill,null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_cond,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_sequential_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$fill__5809__auto__,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_apply,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$quil$core_SLASH_fill,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$fill__5809__auto__,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quil$core_SLASH_fill,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$fill__5809__auto__,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$return_DASH_val__5811__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$previous_DASH_fill__5810__auto__,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$quil$core_SLASH_no_DASH_fill,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quil$core_SLASH_fill,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$previous_DASH_fill__5810__auto__,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$return_DASH_val__5811__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
});

quil.core.with_fill.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
quil.core.with_fill.cljs$lang$applyTo = (function (seq5812){
var G__5813 = cljs.core.first(seq5812);
var seq5812__$1 = cljs.core.next(seq5812);
var G__5814 = cljs.core.first(seq5812__$1);
var seq5812__$2 = cljs.core.next(seq5812__$1);
var G__5815 = cljs.core.first(seq5812__$2);
var seq5812__$3 = cljs.core.next(seq5812__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5813,G__5814,G__5815,seq5812__$3);
});

return null;
})()
;
quil.core.with_fill.cljs$lang$macro = true;

var ret__4684__auto___5827 = (function (){
/**
 * Temporarily set the stroke color for the body of this macro.
 * The code outside of with-stroke form will have the previous stroke color set.
 * 
 * A stroke argument of nil disables the stroke.
 * 
 * Example: (with-stroke 255 ...)
 *          (with-stroke [10 80 98] ...)
 *          (with-stroke nil ...)
 */
quil.core.with_stroke = (function quil$core$with_stroke(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5828 = arguments.length;
var i__4642__auto___5829 = (0);
while(true){
if((i__4642__auto___5829 < len__4641__auto___5828)){
args__4647__auto__.push((arguments[i__4642__auto___5829]));

var G__5830 = (i__4642__auto___5829 + (1));
i__4642__auto___5829 = G__5830;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return quil.core.with_stroke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

quil.core.with_stroke.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,stroke,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$stroke__5820__auto__,null,(1),null)),(new cljs.core.List(null,stroke,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$previous_DASH_stroke__5821__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$quil$core_SLASH_current_DASH_stroke,null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_cond,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_sequential_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$stroke__5820__auto__,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_apply,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$quil$core_SLASH_stroke,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$stroke__5820__auto__,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quil$core_SLASH_stroke,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$stroke__5820__auto__,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$return_DASH_val__5822__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_nil_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$previous_DASH_stroke__5821__auto__,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$quil$core_SLASH_no_DASH_stroke,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quil$core_SLASH_stroke,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$previous_DASH_stroke__5821__auto__,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$return_DASH_val__5822__auto__,null,(1),null))], 0)))),null,(1),null))], 0))));
});

quil.core.with_stroke.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
quil.core.with_stroke.cljs$lang$applyTo = (function (seq5823){
var G__5824 = cljs.core.first(seq5823);
var seq5823__$1 = cljs.core.next(seq5823);
var G__5825 = cljs.core.first(seq5823__$1);
var seq5823__$2 = cljs.core.next(seq5823__$1);
var G__5826 = cljs.core.first(seq5823__$2);
var seq5823__$3 = cljs.core.next(seq5823__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5824,G__5825,G__5826,seq5823__$3);
});

return null;
})()
;
quil.core.with_stroke.cljs$lang$macro = true;

var ret__4684__auto___5836 = (function (){
/**
 * Performs body with translation, restores current transformation on
 *   exit.
 */
quil.core.with_translation = (function quil$core$with_translation(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5837 = arguments.length;
var i__4642__auto___5838 = (0);
while(true){
if((i__4642__auto___5838 < len__4641__auto___5837)){
args__4647__auto__.push((arguments[i__4642__auto___5838]));

var G__5839 = (i__4642__auto___5838 + (1));
i__4642__auto___5838 = G__5839;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return quil.core.with_translation.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

quil.core.with_translation.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,translation_vector,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tr__5831__auto__,null,(1),null)),(new cljs.core.List(null,translation_vector,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$quil$core_SLASH_push_DASH_matrix,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$try,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quil$core_SLASH_translate,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$tr__5831__auto__,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$finally,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$quil$core_SLASH_pop_DASH_matrix,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

quil.core.with_translation.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
quil.core.with_translation.cljs$lang$applyTo = (function (seq5832){
var G__5833 = cljs.core.first(seq5832);
var seq5832__$1 = cljs.core.next(seq5832);
var G__5834 = cljs.core.first(seq5832__$1);
var seq5832__$2 = cljs.core.next(seq5832__$1);
var G__5835 = cljs.core.first(seq5832__$2);
var seq5832__$3 = cljs.core.next(seq5832__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5833,G__5834,G__5835,seq5832__$3);
});

return null;
})()
;
quil.core.with_translation.cljs$lang$macro = true;

var ret__4684__auto___5845 = (function (){
/**
 * Performs body with rotation, restores current transformation on exit.
 *   Accepts a vector [angle] or [angle x y z].
 * 
 *   When 4 arguments provides it produces a rotation of angle degrees
 *   around the vector x y z. Check examples for to better understand.
 *   This rotation follows the right-hand rule, so if the vector x y z points
 *   toward the user, the rotation will be counterclockwise.
 * 
 *   Example:
 *  (with-rotation [angle]
 *    (vertex 1 2))
 */
quil.core.with_rotation = (function quil$core$with_rotation(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5846 = arguments.length;
var i__4642__auto___5847 = (0);
while(true){
if((i__4642__auto___5847 < len__4641__auto___5846)){
args__4647__auto__.push((arguments[i__4642__auto___5847]));

var G__5848 = (i__4642__auto___5847 + (1));
i__4642__auto___5847 = G__5848;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return quil.core.with_rotation.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

quil.core.with_rotation.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rotation,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$tr__5840__auto__,null,(1),null)),(new cljs.core.List(null,rotation,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$quil$core_SLASH_push_DASH_matrix,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$try,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_apply,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$quil$core_SLASH_rotate,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$tr__5840__auto__,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$finally,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$quil$core_SLASH_pop_DASH_matrix,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

quil.core.with_rotation.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
quil.core.with_rotation.cljs$lang$applyTo = (function (seq5841){
var G__5842 = cljs.core.first(seq5841);
var seq5841__$1 = cljs.core.next(seq5841);
var G__5843 = cljs.core.first(seq5841__$1);
var seq5841__$2 = cljs.core.next(seq5841__$1);
var G__5844 = cljs.core.first(seq5841__$2);
var seq5841__$3 = cljs.core.next(seq5841__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5842,G__5843,G__5844,seq5841__$3);
});

return null;
})()
;
quil.core.with_rotation.cljs$lang$macro = true;

var ret__4684__auto___5854 = (function (){
/**
 * All subsequent calls of any drawing function will draw on given
 *   graphics. 'with-graphics' cannot be nested (you can draw simultaneously
 *   only on 1 graphics)
 */
quil.core.with_graphics = (function quil$core$with_graphics(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5855 = arguments.length;
var i__4642__auto___5856 = (0);
while(true){
if((i__4642__auto___5856 < len__4641__auto___5855)){
args__4647__auto__.push((arguments[i__4642__auto___5856]));

var G__5857 = (i__4642__auto___5856 + (1));
i__4642__auto___5856 = G__5857;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return quil.core.with_graphics.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

quil.core.with_graphics.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,graphics,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$gr__5849__auto__,null,(1),null)),(new cljs.core.List(null,graphics,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quil$core_SLASH__STAR_graphics_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$gr__5849__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$$beginDraw,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$gr__5849__auto__,null,(1),null))))),null,(1),null)),body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$$endDraw,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$gr__5849__auto__,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});

quil.core.with_graphics.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
quil.core.with_graphics.cljs$lang$applyTo = (function (seq5850){
var G__5851 = cljs.core.first(seq5850);
var seq5850__$1 = cljs.core.next(seq5850);
var G__5852 = cljs.core.first(seq5850__$1);
var seq5850__$2 = cljs.core.next(seq5850__$1);
var G__5853 = cljs.core.first(seq5850__$2);
var seq5850__$3 = cljs.core.next(seq5850__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5851,G__5852,G__5853,seq5850__$3);
});

return null;
})()
;
quil.core.with_graphics.cljs$lang$macro = true;

/**
 * Create and start a new visualisation applet. Can be used to create
 *   new sketches programmatically. See documentation for 'defsketch' for
 *   list of available options.
 */
quil.core.sketch = (function quil$core$sketch(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5859 = arguments.length;
var i__4642__auto___5860 = (0);
while(true){
if((i__4642__auto___5860 < len__4641__auto___5859)){
args__4647__auto__.push((arguments[i__4642__auto___5860]));

var G__5861 = (i__4642__auto___5860 + (1));
i__4642__auto___5860 = G__5861;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return quil.core.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

quil.core.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.sketch,opts);
});

quil.core.sketch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
quil.core.sketch.cljs$lang$applyTo = (function (seq5858){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5858));
});

var ret__4684__auto___5866 = (function (){
/**
 * Define and start a sketch and bind it to a var with the symbol
 *   app-name. If any of the options to the various callbacks are
 *   symbols, it wraps them in a call to var to ensure they aren't
 *   inlined and that redefinitions to the original fns are reflected in
 *   the visualisation.
 * 
 *   Available options:
 * 
 * :size           - A vector of width and height for the sketch or :fullscreen.
 *                   Defaults to [500 300]. If you're using :fullscreen you may
 *                   want to enable present mode - :features [:present].
 *                   :fullscreen size works only in Clojure. In ClojureScript
 *                   all sketches are support fullscreen when you press F11.
 * 
 * :renderer       - Specifies the renderer type. One of :p2d, :p3d, :java2d,
 *                   :opengl, :pdf). Defaults to :java2d. :dxf renderer
 *                   can't be used as sketch renderer. Use begin-raw method
 *                   instead. In clojurescript only :p2d and :p3d renderers
 *                   are supported.
 * 
 * :output-file    - Specifies an output file path. Only used in :pdf mode.
 *                   Not supported in clojurescript.
 * 
 * :title          - A string which will be displayed at the top of
 *                   the sketch window. Not supported in clojurescript.
 * 
 * :features       - A vector of keywords customizing sketch behaviour.
 *                   Supported features:
 * 
 *                   :keep-on-top - Sketch window will always be above other
 *                                  windows. Note: some platforms might not
 *                                  support always-on-top windows.
 *                                  Not supported in clojurescript.
 * 
 *                   :exit-on-close - Shutdown JVM  when sketch is closed.
 *                                    Not supported in clojurescript.
 * 
 *                   :resizable - Makes sketch resizable.
 *                                Not supported in clojurescript.
 * 
 *                   :no-safe-fns - Do not catch and print exceptions thrown
 *                                  inside functions provided to sketch (like
 *                                  draw, mouse-click, key-pressed and
 *                                  other). By default all exceptions thrown
 *                                  inside these functions are catched. This
 *                                  prevents sketch from breaking when bad
 *                                  function was provided and allows you to
 *                                  fix it and reload it on fly. You can
 *                                  disable this behaviour by enabling
 *                                  :no-safe-fns feature.
 *                                  Not supported in clojurescript.
 * 
 *                   :present - Switch to present mode (fullscreen without
 *                              borders, OS panels). You may want to use
 *                              this feature together with :size :fullscreen.
 *                              Not supported in ClojureScript. In ClojureScript
 *                              fullscreen is enabled by pressing F11 and it's
 *                              enabled on all sketches automatically.
 * 
 *                   :no-start - Disables autostart if sketch was created using
 *                               defsketch macro. To start sketch you have to
 *                               call function created defsketch.
 *                               Supported only in ClojureScript.
 * 
 *                   :global-key-events - Allows a sketch to receive any
 *                                        keyboard event sent to the page,
 *                                        regardless of whether the canvas it is
 *                                        loaded in has focus or not.
 *                                        Supported only in ClojureScript.
 * 
 *                   Usage example: :features [:keep-on-top :present]
 * 
 * :bgcolor        - Sets background color for unused space in present mode.
 *                   Color is specified in hex format: #XXXXXX.
 *                   Example: :bgcolor "#00FFFF" (cyan background)
 *                   Not supported in ClojureScript.
 * 
 * :display        - Sets what display should be used by this sketch.
 *                   Displays are numbered starting from 0. Example: :display 1.
 *                   Not supported in ClojureScript.
 * 
 * :setup          - A function to be called once when setting the sketch up.
 * 
 * :draw           - A function to be repeatedly called at most n times per
 *                   second where n is the target frame-rate set for
 *                   the visualisation.
 * 
 * :host           - String id of canvas element or DOM element itself.
 *                   Specifies host for the sketch. Must be specified in sketch,
 *                   may be omitted in defsketch. If ommitted in defsketch,
 *                   :host is set to the name of the sketch. If element with
 *                   specified id is not found on the page and page is empty -
 *                   new canvas element will be created. Used in ClojureScript.
 * 
 * :focus-gained   - Called when the sketch gains focus.
 *                   Not supported in ClojureScript.
 * 
 * :focus-lost     - Called when the sketch loses focus.
 *                   Not supported in ClojureScript.
 * 
 * :mouse-entered  - Called when the mouse enters the sketch window.
 * 
 * :mouse-exited   - Called when the mouse leaves the sketch window
 * 
 * :mouse-pressed  - Called every time a mouse button is pressed.
 * 
 * :mouse-released - Called every time a mouse button is released.
 * 
 * :mouse-clicked  - called once after a mouse button has been pressed
 *                   and then released.
 * 
 * :mouse-moved    - Called every time the mouse moves and a button is
 *                   not pressed.
 * 
 * :mouse-dragged  - Called every time the mouse moves and a button is
 *                   pressed.
 * 
 * :mouse-wheel    - Called every time mouse wheel is rotated.
 *                   Takes 1 argument - wheel rotation, an int.
 *                   Negative values if the mouse wheel was rotated
 *                   up/away from the user, and positive values
 *                   if the mouse wheel was rotated down/ towards the user
 * 
 * :key-pressed    - Called every time any key is pressed.
 * 
 * :key-released   - Called every time any key is released.
 * 
 * :key-typed      - Called once every time non-modifier keys are
 *                   pressed.
 * 
 * :on-close       - Called once, when sketch is closed
 *                   Not supported in ClojureScript.
 * 
 * :middleware     - Vector of middleware to be applied to the sketch.
 *                   Middleware will be applied in the same order as in comp
 *                   function: [f g] will be applied as (f (g options)).
 * 
 * :settings       - cousin of :setup. A function to be called once when
 *                   setting sketch up. Should be used only for (smooth) and
 *                   (no-smooth). Due to Processing limitations these functions
 *                   cannot be used neither in :setup nor in :draw.
 */
quil.core.defsketch = (function quil$core$defsketch(var_args){
var args__4647__auto__ = [];
var len__4641__auto___5867 = arguments.length;
var i__4642__auto___5868 = (0);
while(true){
if((i__4642__auto___5868 < len__4641__auto___5867)){
args__4647__auto__.push((arguments[i__4642__auto___5868]));

var G__5869 = (i__4642__auto___5868 + (1));
i__4642__auto___5868 = G__5869;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return quil.core.defsketch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

quil.core.defsketch.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,app_name,options){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$quil$sketch$macros_SLASH_defsketch,null,(1),null)),(new cljs.core.List(null,app_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0))));
});

quil.core.defsketch.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
quil.core.defsketch.cljs$lang$applyTo = (function (seq5862){
var G__5863 = cljs.core.first(seq5862);
var seq5862__$1 = cljs.core.next(seq5862);
var G__5864 = cljs.core.first(seq5862__$1);
var seq5862__$2 = cljs.core.next(seq5862__$1);
var G__5865 = cljs.core.first(seq5862__$2);
var seq5862__$3 = cljs.core.next(seq5862__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5863,G__5864,G__5865,seq5862__$3);
});

return null;
})()
;
quil.core.defsketch.cljs$lang$macro = true;

/**
 * Returns true if char c is a 'coded' char i.e. it is necessary to
 *   fetch the key-code as an integer and use that to determine the
 *   specific key pressed. See key-keyword.
 */
quil.core.key_coded_QMARK_ = (function quil$core$key_coded_QMARK_(c){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((65535),String(c).charCodeAt());
});
/**
 * Returns a keyword representing the currently pressed key. Modifier
 *   keys are represented as: :up, :down, :left, :right, :alt, :control,
 *   :shift, :command, :f1-24
 */
quil.core.key_as_keyword = (function quil$core$key_as_keyword(){
var key_char = quil.core.raw_key();
var code = quil.core.key_code();
if(quil.core.key_coded_QMARK_(key_char)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(quil.core.KEY_CODES,code,cljs.core.cst$kw$unknown_DASH_key);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(String(key_char));
}
});
