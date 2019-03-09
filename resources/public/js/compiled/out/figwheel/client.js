// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e30312){if((e30312 instanceof Error)){
var e = e30312;
return "Error: Unable to stringify";
} else {
throw e30312;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30315 = arguments.length;
switch (G__30315) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30313_SHARP_){
if(typeof p1__30313_SHARP_ === 'string'){
return p1__30313_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30313_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30318 = arguments.length;
var i__4500__auto___30319 = (0);
while(true){
if((i__4500__auto___30319 < len__4499__auto___30318)){
args__4502__auto__.push((arguments[i__4500__auto___30319]));

var G__30320 = (i__4500__auto___30319 + (1));
i__4500__auto___30319 = G__30320;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30317){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30317));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30322 = arguments.length;
var i__4500__auto___30323 = (0);
while(true){
if((i__4500__auto___30323 < len__4499__auto___30322)){
args__4502__auto__.push((arguments[i__4500__auto___30323]));

var G__30324 = (i__4500__auto___30323 + (1));
i__4500__auto___30323 = G__30324;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30321){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30321));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30325){
var map__30326 = p__30325;
var map__30326__$1 = ((((!((map__30326 == null)))?(((((map__30326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30326):map__30326);
var message = cljs.core.get.call(null,map__30326__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30326__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26452__auto___30405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto___30405,ch){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto___30405,ch){
return (function (state_30377){
var state_val_30378 = (state_30377[(1)]);
if((state_val_30378 === (7))){
var inst_30373 = (state_30377[(2)]);
var state_30377__$1 = state_30377;
var statearr_30379_30406 = state_30377__$1;
(statearr_30379_30406[(2)] = inst_30373);

(statearr_30379_30406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (1))){
var state_30377__$1 = state_30377;
var statearr_30380_30407 = state_30377__$1;
(statearr_30380_30407[(2)] = null);

(statearr_30380_30407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (4))){
var inst_30330 = (state_30377[(7)]);
var inst_30330__$1 = (state_30377[(2)]);
var state_30377__$1 = (function (){var statearr_30381 = state_30377;
(statearr_30381[(7)] = inst_30330__$1);

return statearr_30381;
})();
if(cljs.core.truth_(inst_30330__$1)){
var statearr_30382_30408 = state_30377__$1;
(statearr_30382_30408[(1)] = (5));

} else {
var statearr_30383_30409 = state_30377__$1;
(statearr_30383_30409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (15))){
var inst_30337 = (state_30377[(8)]);
var inst_30352 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30337);
var inst_30353 = cljs.core.first.call(null,inst_30352);
var inst_30354 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30353);
var inst_30355 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30354)].join('');
var inst_30356 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30355);
var state_30377__$1 = state_30377;
var statearr_30384_30410 = state_30377__$1;
(statearr_30384_30410[(2)] = inst_30356);

(statearr_30384_30410[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (13))){
var inst_30361 = (state_30377[(2)]);
var state_30377__$1 = state_30377;
var statearr_30385_30411 = state_30377__$1;
(statearr_30385_30411[(2)] = inst_30361);

(statearr_30385_30411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (6))){
var state_30377__$1 = state_30377;
var statearr_30386_30412 = state_30377__$1;
(statearr_30386_30412[(2)] = null);

(statearr_30386_30412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (17))){
var inst_30359 = (state_30377[(2)]);
var state_30377__$1 = state_30377;
var statearr_30387_30413 = state_30377__$1;
(statearr_30387_30413[(2)] = inst_30359);

(statearr_30387_30413[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (3))){
var inst_30375 = (state_30377[(2)]);
var state_30377__$1 = state_30377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30377__$1,inst_30375);
} else {
if((state_val_30378 === (12))){
var inst_30336 = (state_30377[(9)]);
var inst_30350 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30336,opts);
var state_30377__$1 = state_30377;
if(cljs.core.truth_(inst_30350)){
var statearr_30388_30414 = state_30377__$1;
(statearr_30388_30414[(1)] = (15));

} else {
var statearr_30389_30415 = state_30377__$1;
(statearr_30389_30415[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (2))){
var state_30377__$1 = state_30377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30377__$1,(4),ch);
} else {
if((state_val_30378 === (11))){
var inst_30337 = (state_30377[(8)]);
var inst_30342 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30343 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30337);
var inst_30344 = cljs.core.async.timeout.call(null,(1000));
var inst_30345 = [inst_30343,inst_30344];
var inst_30346 = (new cljs.core.PersistentVector(null,2,(5),inst_30342,inst_30345,null));
var state_30377__$1 = state_30377;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30377__$1,(14),inst_30346);
} else {
if((state_val_30378 === (9))){
var inst_30337 = (state_30377[(8)]);
var inst_30363 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30364 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30337);
var inst_30365 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30364);
var inst_30366 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30365)].join('');
var inst_30367 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30366);
var state_30377__$1 = (function (){var statearr_30390 = state_30377;
(statearr_30390[(10)] = inst_30363);

return statearr_30390;
})();
var statearr_30391_30416 = state_30377__$1;
(statearr_30391_30416[(2)] = inst_30367);

(statearr_30391_30416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (5))){
var inst_30330 = (state_30377[(7)]);
var inst_30332 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30333 = (new cljs.core.PersistentArrayMap(null,2,inst_30332,null));
var inst_30334 = (new cljs.core.PersistentHashSet(null,inst_30333,null));
var inst_30335 = figwheel.client.focus_msgs.call(null,inst_30334,inst_30330);
var inst_30336 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30335);
var inst_30337 = cljs.core.first.call(null,inst_30335);
var inst_30338 = figwheel.client.autoload_QMARK_.call(null);
var state_30377__$1 = (function (){var statearr_30392 = state_30377;
(statearr_30392[(8)] = inst_30337);

(statearr_30392[(9)] = inst_30336);

return statearr_30392;
})();
if(cljs.core.truth_(inst_30338)){
var statearr_30393_30417 = state_30377__$1;
(statearr_30393_30417[(1)] = (8));

} else {
var statearr_30394_30418 = state_30377__$1;
(statearr_30394_30418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (14))){
var inst_30348 = (state_30377[(2)]);
var state_30377__$1 = state_30377;
var statearr_30395_30419 = state_30377__$1;
(statearr_30395_30419[(2)] = inst_30348);

(statearr_30395_30419[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (16))){
var state_30377__$1 = state_30377;
var statearr_30396_30420 = state_30377__$1;
(statearr_30396_30420[(2)] = null);

(statearr_30396_30420[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (10))){
var inst_30369 = (state_30377[(2)]);
var state_30377__$1 = (function (){var statearr_30397 = state_30377;
(statearr_30397[(11)] = inst_30369);

return statearr_30397;
})();
var statearr_30398_30421 = state_30377__$1;
(statearr_30398_30421[(2)] = null);

(statearr_30398_30421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (8))){
var inst_30336 = (state_30377[(9)]);
var inst_30340 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30336,opts);
var state_30377__$1 = state_30377;
if(cljs.core.truth_(inst_30340)){
var statearr_30399_30422 = state_30377__$1;
(statearr_30399_30422[(1)] = (11));

} else {
var statearr_30400_30423 = state_30377__$1;
(statearr_30400_30423[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26452__auto___30405,ch))
;
return ((function (switch__26362__auto__,c__26452__auto___30405,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26363__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26363__auto____0 = (function (){
var statearr_30401 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30401[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26363__auto__);

(statearr_30401[(1)] = (1));

return statearr_30401;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26363__auto____1 = (function (state_30377){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_30377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e30402){if((e30402 instanceof Object)){
var ex__26366__auto__ = e30402;
var statearr_30403_30424 = state_30377;
(statearr_30403_30424[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30425 = state_30377;
state_30377 = G__30425;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26363__auto__ = function(state_30377){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26363__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26363__auto____1.call(this,state_30377);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26363__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26363__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto___30405,ch))
})();
var state__26454__auto__ = (function (){var statearr_30404 = f__26453__auto__.call(null);
(statearr_30404[(6)] = c__26452__auto___30405);

return statearr_30404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto___30405,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30426_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30426_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30430 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30430){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30428 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30429 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30428,_STAR_print_fn_STAR_30429,sb,base_path_30430){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_30428,_STAR_print_fn_STAR_30429,sb,base_path_30430))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30429;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30428;
}}catch (e30427){if((e30427 instanceof Error)){
var e = e30427;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30430], null));
} else {
var e = e30427;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30430))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30431){
var map__30432 = p__30431;
var map__30432__$1 = ((((!((map__30432 == null)))?(((((map__30432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30432):map__30432);
var opts = map__30432__$1;
var build_id = cljs.core.get.call(null,map__30432__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30432,map__30432__$1,opts,build_id){
return (function (p__30434){
var vec__30435 = p__30434;
var seq__30436 = cljs.core.seq.call(null,vec__30435);
var first__30437 = cljs.core.first.call(null,seq__30436);
var seq__30436__$1 = cljs.core.next.call(null,seq__30436);
var map__30438 = first__30437;
var map__30438__$1 = ((((!((map__30438 == null)))?(((((map__30438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30438):map__30438);
var msg = map__30438__$1;
var msg_name = cljs.core.get.call(null,map__30438__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30436__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30435,seq__30436,first__30437,seq__30436__$1,map__30438,map__30438__$1,msg,msg_name,_,map__30432,map__30432__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30435,seq__30436,first__30437,seq__30436__$1,map__30438,map__30438__$1,msg,msg_name,_,map__30432,map__30432__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30432,map__30432__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30440){
var vec__30441 = p__30440;
var seq__30442 = cljs.core.seq.call(null,vec__30441);
var first__30443 = cljs.core.first.call(null,seq__30442);
var seq__30442__$1 = cljs.core.next.call(null,seq__30442);
var map__30444 = first__30443;
var map__30444__$1 = ((((!((map__30444 == null)))?(((((map__30444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30444):map__30444);
var msg = map__30444__$1;
var msg_name = cljs.core.get.call(null,map__30444__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30442__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30446){
var map__30447 = p__30446;
var map__30447__$1 = ((((!((map__30447 == null)))?(((((map__30447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30447):map__30447);
var on_compile_warning = cljs.core.get.call(null,map__30447__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30447__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30447,map__30447__$1,on_compile_warning,on_compile_fail){
return (function (p__30449){
var vec__30450 = p__30449;
var seq__30451 = cljs.core.seq.call(null,vec__30450);
var first__30452 = cljs.core.first.call(null,seq__30451);
var seq__30451__$1 = cljs.core.next.call(null,seq__30451);
var map__30453 = first__30452;
var map__30453__$1 = ((((!((map__30453 == null)))?(((((map__30453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30453):map__30453);
var msg = map__30453__$1;
var msg_name = cljs.core.get.call(null,map__30453__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30451__$1;
var pred__30455 = cljs.core._EQ_;
var expr__30456 = msg_name;
if(cljs.core.truth_(pred__30455.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30456))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30455.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30456))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30447,map__30447__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26452__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto__,msg_hist,msg_names,msg){
return (function (state_30545){
var state_val_30546 = (state_30545[(1)]);
if((state_val_30546 === (7))){
var inst_30465 = (state_30545[(2)]);
var state_30545__$1 = state_30545;
if(cljs.core.truth_(inst_30465)){
var statearr_30547_30594 = state_30545__$1;
(statearr_30547_30594[(1)] = (8));

} else {
var statearr_30548_30595 = state_30545__$1;
(statearr_30548_30595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (20))){
var inst_30539 = (state_30545[(2)]);
var state_30545__$1 = state_30545;
var statearr_30549_30596 = state_30545__$1;
(statearr_30549_30596[(2)] = inst_30539);

(statearr_30549_30596[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (27))){
var inst_30535 = (state_30545[(2)]);
var state_30545__$1 = state_30545;
var statearr_30550_30597 = state_30545__$1;
(statearr_30550_30597[(2)] = inst_30535);

(statearr_30550_30597[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (1))){
var inst_30458 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30545__$1 = state_30545;
if(cljs.core.truth_(inst_30458)){
var statearr_30551_30598 = state_30545__$1;
(statearr_30551_30598[(1)] = (2));

} else {
var statearr_30552_30599 = state_30545__$1;
(statearr_30552_30599[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (24))){
var inst_30537 = (state_30545[(2)]);
var state_30545__$1 = state_30545;
var statearr_30553_30600 = state_30545__$1;
(statearr_30553_30600[(2)] = inst_30537);

(statearr_30553_30600[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (4))){
var inst_30543 = (state_30545[(2)]);
var state_30545__$1 = state_30545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30545__$1,inst_30543);
} else {
if((state_val_30546 === (15))){
var inst_30541 = (state_30545[(2)]);
var state_30545__$1 = state_30545;
var statearr_30554_30601 = state_30545__$1;
(statearr_30554_30601[(2)] = inst_30541);

(statearr_30554_30601[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (21))){
var inst_30494 = (state_30545[(2)]);
var inst_30495 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30496 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30495);
var state_30545__$1 = (function (){var statearr_30555 = state_30545;
(statearr_30555[(7)] = inst_30494);

return statearr_30555;
})();
var statearr_30556_30602 = state_30545__$1;
(statearr_30556_30602[(2)] = inst_30496);

(statearr_30556_30602[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (31))){
var inst_30524 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30545__$1 = state_30545;
if(cljs.core.truth_(inst_30524)){
var statearr_30557_30603 = state_30545__$1;
(statearr_30557_30603[(1)] = (34));

} else {
var statearr_30558_30604 = state_30545__$1;
(statearr_30558_30604[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (32))){
var inst_30533 = (state_30545[(2)]);
var state_30545__$1 = state_30545;
var statearr_30559_30605 = state_30545__$1;
(statearr_30559_30605[(2)] = inst_30533);

(statearr_30559_30605[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (33))){
var inst_30520 = (state_30545[(2)]);
var inst_30521 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30522 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30521);
var state_30545__$1 = (function (){var statearr_30560 = state_30545;
(statearr_30560[(8)] = inst_30520);

return statearr_30560;
})();
var statearr_30561_30606 = state_30545__$1;
(statearr_30561_30606[(2)] = inst_30522);

(statearr_30561_30606[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (13))){
var inst_30479 = figwheel.client.heads_up.clear.call(null);
var state_30545__$1 = state_30545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30545__$1,(16),inst_30479);
} else {
if((state_val_30546 === (22))){
var inst_30500 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30501 = figwheel.client.heads_up.append_warning_message.call(null,inst_30500);
var state_30545__$1 = state_30545;
var statearr_30562_30607 = state_30545__$1;
(statearr_30562_30607[(2)] = inst_30501);

(statearr_30562_30607[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (36))){
var inst_30531 = (state_30545[(2)]);
var state_30545__$1 = state_30545;
var statearr_30563_30608 = state_30545__$1;
(statearr_30563_30608[(2)] = inst_30531);

(statearr_30563_30608[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (29))){
var inst_30511 = (state_30545[(2)]);
var inst_30512 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30513 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30512);
var state_30545__$1 = (function (){var statearr_30564 = state_30545;
(statearr_30564[(9)] = inst_30511);

return statearr_30564;
})();
var statearr_30565_30609 = state_30545__$1;
(statearr_30565_30609[(2)] = inst_30513);

(statearr_30565_30609[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (6))){
var inst_30460 = (state_30545[(10)]);
var state_30545__$1 = state_30545;
var statearr_30566_30610 = state_30545__$1;
(statearr_30566_30610[(2)] = inst_30460);

(statearr_30566_30610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (28))){
var inst_30507 = (state_30545[(2)]);
var inst_30508 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30509 = figwheel.client.heads_up.display_warning.call(null,inst_30508);
var state_30545__$1 = (function (){var statearr_30567 = state_30545;
(statearr_30567[(11)] = inst_30507);

return statearr_30567;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30545__$1,(29),inst_30509);
} else {
if((state_val_30546 === (25))){
var inst_30505 = figwheel.client.heads_up.clear.call(null);
var state_30545__$1 = state_30545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30545__$1,(28),inst_30505);
} else {
if((state_val_30546 === (34))){
var inst_30526 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30545__$1 = state_30545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30545__$1,(37),inst_30526);
} else {
if((state_val_30546 === (17))){
var inst_30485 = (state_30545[(2)]);
var inst_30486 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30487 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30486);
var state_30545__$1 = (function (){var statearr_30568 = state_30545;
(statearr_30568[(12)] = inst_30485);

return statearr_30568;
})();
var statearr_30569_30611 = state_30545__$1;
(statearr_30569_30611[(2)] = inst_30487);

(statearr_30569_30611[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (3))){
var inst_30477 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30545__$1 = state_30545;
if(cljs.core.truth_(inst_30477)){
var statearr_30570_30612 = state_30545__$1;
(statearr_30570_30612[(1)] = (13));

} else {
var statearr_30571_30613 = state_30545__$1;
(statearr_30571_30613[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (12))){
var inst_30473 = (state_30545[(2)]);
var state_30545__$1 = state_30545;
var statearr_30572_30614 = state_30545__$1;
(statearr_30572_30614[(2)] = inst_30473);

(statearr_30572_30614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (2))){
var inst_30460 = (state_30545[(10)]);
var inst_30460__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30545__$1 = (function (){var statearr_30573 = state_30545;
(statearr_30573[(10)] = inst_30460__$1);

return statearr_30573;
})();
if(cljs.core.truth_(inst_30460__$1)){
var statearr_30574_30615 = state_30545__$1;
(statearr_30574_30615[(1)] = (5));

} else {
var statearr_30575_30616 = state_30545__$1;
(statearr_30575_30616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (23))){
var inst_30503 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30545__$1 = state_30545;
if(cljs.core.truth_(inst_30503)){
var statearr_30576_30617 = state_30545__$1;
(statearr_30576_30617[(1)] = (25));

} else {
var statearr_30577_30618 = state_30545__$1;
(statearr_30577_30618[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (35))){
var state_30545__$1 = state_30545;
var statearr_30578_30619 = state_30545__$1;
(statearr_30578_30619[(2)] = null);

(statearr_30578_30619[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (19))){
var inst_30498 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30545__$1 = state_30545;
if(cljs.core.truth_(inst_30498)){
var statearr_30579_30620 = state_30545__$1;
(statearr_30579_30620[(1)] = (22));

} else {
var statearr_30580_30621 = state_30545__$1;
(statearr_30580_30621[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (11))){
var inst_30469 = (state_30545[(2)]);
var state_30545__$1 = state_30545;
var statearr_30581_30622 = state_30545__$1;
(statearr_30581_30622[(2)] = inst_30469);

(statearr_30581_30622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (9))){
var inst_30471 = figwheel.client.heads_up.clear.call(null);
var state_30545__$1 = state_30545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30545__$1,(12),inst_30471);
} else {
if((state_val_30546 === (5))){
var inst_30462 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30545__$1 = state_30545;
var statearr_30582_30623 = state_30545__$1;
(statearr_30582_30623[(2)] = inst_30462);

(statearr_30582_30623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (14))){
var inst_30489 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30545__$1 = state_30545;
if(cljs.core.truth_(inst_30489)){
var statearr_30583_30624 = state_30545__$1;
(statearr_30583_30624[(1)] = (18));

} else {
var statearr_30584_30625 = state_30545__$1;
(statearr_30584_30625[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (26))){
var inst_30515 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30545__$1 = state_30545;
if(cljs.core.truth_(inst_30515)){
var statearr_30585_30626 = state_30545__$1;
(statearr_30585_30626[(1)] = (30));

} else {
var statearr_30586_30627 = state_30545__$1;
(statearr_30586_30627[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (16))){
var inst_30481 = (state_30545[(2)]);
var inst_30482 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30483 = figwheel.client.heads_up.display_exception.call(null,inst_30482);
var state_30545__$1 = (function (){var statearr_30587 = state_30545;
(statearr_30587[(13)] = inst_30481);

return statearr_30587;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30545__$1,(17),inst_30483);
} else {
if((state_val_30546 === (30))){
var inst_30517 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30518 = figwheel.client.heads_up.display_warning.call(null,inst_30517);
var state_30545__$1 = state_30545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30545__$1,(33),inst_30518);
} else {
if((state_val_30546 === (10))){
var inst_30475 = (state_30545[(2)]);
var state_30545__$1 = state_30545;
var statearr_30588_30628 = state_30545__$1;
(statearr_30588_30628[(2)] = inst_30475);

(statearr_30588_30628[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (18))){
var inst_30491 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30492 = figwheel.client.heads_up.display_exception.call(null,inst_30491);
var state_30545__$1 = state_30545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30545__$1,(21),inst_30492);
} else {
if((state_val_30546 === (37))){
var inst_30528 = (state_30545[(2)]);
var state_30545__$1 = state_30545;
var statearr_30589_30629 = state_30545__$1;
(statearr_30589_30629[(2)] = inst_30528);

(statearr_30589_30629[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30546 === (8))){
var inst_30467 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30545__$1 = state_30545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30545__$1,(11),inst_30467);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26452__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26362__auto__,c__26452__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26363__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26363__auto____0 = (function (){
var statearr_30590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30590[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26363__auto__);

(statearr_30590[(1)] = (1));

return statearr_30590;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26363__auto____1 = (function (state_30545){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_30545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e30591){if((e30591 instanceof Object)){
var ex__26366__auto__ = e30591;
var statearr_30592_30630 = state_30545;
(statearr_30592_30630[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30631 = state_30545;
state_30545 = G__30631;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26363__auto__ = function(state_30545){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26363__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26363__auto____1.call(this,state_30545);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26363__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26363__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto__,msg_hist,msg_names,msg))
})();
var state__26454__auto__ = (function (){var statearr_30593 = f__26453__auto__.call(null);
(statearr_30593[(6)] = c__26452__auto__);

return statearr_30593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto__,msg_hist,msg_names,msg))
);

return c__26452__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26452__auto___30660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto___30660,ch){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto___30660,ch){
return (function (state_30646){
var state_val_30647 = (state_30646[(1)]);
if((state_val_30647 === (1))){
var state_30646__$1 = state_30646;
var statearr_30648_30661 = state_30646__$1;
(statearr_30648_30661[(2)] = null);

(statearr_30648_30661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (2))){
var state_30646__$1 = state_30646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30646__$1,(4),ch);
} else {
if((state_val_30647 === (3))){
var inst_30644 = (state_30646[(2)]);
var state_30646__$1 = state_30646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30646__$1,inst_30644);
} else {
if((state_val_30647 === (4))){
var inst_30634 = (state_30646[(7)]);
var inst_30634__$1 = (state_30646[(2)]);
var state_30646__$1 = (function (){var statearr_30649 = state_30646;
(statearr_30649[(7)] = inst_30634__$1);

return statearr_30649;
})();
if(cljs.core.truth_(inst_30634__$1)){
var statearr_30650_30662 = state_30646__$1;
(statearr_30650_30662[(1)] = (5));

} else {
var statearr_30651_30663 = state_30646__$1;
(statearr_30651_30663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (5))){
var inst_30634 = (state_30646[(7)]);
var inst_30636 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30634);
var state_30646__$1 = state_30646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30646__$1,(8),inst_30636);
} else {
if((state_val_30647 === (6))){
var state_30646__$1 = state_30646;
var statearr_30652_30664 = state_30646__$1;
(statearr_30652_30664[(2)] = null);

(statearr_30652_30664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (7))){
var inst_30642 = (state_30646[(2)]);
var state_30646__$1 = state_30646;
var statearr_30653_30665 = state_30646__$1;
(statearr_30653_30665[(2)] = inst_30642);

(statearr_30653_30665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30647 === (8))){
var inst_30638 = (state_30646[(2)]);
var state_30646__$1 = (function (){var statearr_30654 = state_30646;
(statearr_30654[(8)] = inst_30638);

return statearr_30654;
})();
var statearr_30655_30666 = state_30646__$1;
(statearr_30655_30666[(2)] = null);

(statearr_30655_30666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__26452__auto___30660,ch))
;
return ((function (switch__26362__auto__,c__26452__auto___30660,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26363__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26363__auto____0 = (function (){
var statearr_30656 = [null,null,null,null,null,null,null,null,null];
(statearr_30656[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26363__auto__);

(statearr_30656[(1)] = (1));

return statearr_30656;
});
var figwheel$client$heads_up_plugin_$_state_machine__26363__auto____1 = (function (state_30646){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_30646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e30657){if((e30657 instanceof Object)){
var ex__26366__auto__ = e30657;
var statearr_30658_30667 = state_30646;
(statearr_30658_30667[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30668 = state_30646;
state_30646 = G__30668;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26363__auto__ = function(state_30646){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26363__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26363__auto____1.call(this,state_30646);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26363__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26363__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto___30660,ch))
})();
var state__26454__auto__ = (function (){var statearr_30659 = f__26453__auto__.call(null);
(statearr_30659[(6)] = c__26452__auto___30660);

return statearr_30659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto___30660,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26452__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto__){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto__){
return (function (state_30674){
var state_val_30675 = (state_30674[(1)]);
if((state_val_30675 === (1))){
var inst_30669 = cljs.core.async.timeout.call(null,(3000));
var state_30674__$1 = state_30674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30674__$1,(2),inst_30669);
} else {
if((state_val_30675 === (2))){
var inst_30671 = (state_30674[(2)]);
var inst_30672 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30674__$1 = (function (){var statearr_30676 = state_30674;
(statearr_30676[(7)] = inst_30671);

return statearr_30676;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30674__$1,inst_30672);
} else {
return null;
}
}
});})(c__26452__auto__))
;
return ((function (switch__26362__auto__,c__26452__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26363__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26363__auto____0 = (function (){
var statearr_30677 = [null,null,null,null,null,null,null,null];
(statearr_30677[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26363__auto__);

(statearr_30677[(1)] = (1));

return statearr_30677;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26363__auto____1 = (function (state_30674){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_30674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e30678){if((e30678 instanceof Object)){
var ex__26366__auto__ = e30678;
var statearr_30679_30681 = state_30674;
(statearr_30679_30681[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30682 = state_30674;
state_30674 = G__30682;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26363__auto__ = function(state_30674){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26363__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26363__auto____1.call(this,state_30674);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26363__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26363__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto__))
})();
var state__26454__auto__ = (function (){var statearr_30680 = f__26453__auto__.call(null);
(statearr_30680[(6)] = c__26452__auto__);

return statearr_30680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto__))
);

return c__26452__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26452__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto__,figwheel_version,temp__5457__auto__){
return (function (state_30689){
var state_val_30690 = (state_30689[(1)]);
if((state_val_30690 === (1))){
var inst_30683 = cljs.core.async.timeout.call(null,(2000));
var state_30689__$1 = state_30689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30689__$1,(2),inst_30683);
} else {
if((state_val_30690 === (2))){
var inst_30685 = (state_30689[(2)]);
var inst_30686 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30687 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30686);
var state_30689__$1 = (function (){var statearr_30691 = state_30689;
(statearr_30691[(7)] = inst_30685);

return statearr_30691;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30689__$1,inst_30687);
} else {
return null;
}
}
});})(c__26452__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__26362__auto__,c__26452__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26363__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26363__auto____0 = (function (){
var statearr_30692 = [null,null,null,null,null,null,null,null];
(statearr_30692[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26363__auto__);

(statearr_30692[(1)] = (1));

return statearr_30692;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26363__auto____1 = (function (state_30689){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_30689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e30693){if((e30693 instanceof Object)){
var ex__26366__auto__ = e30693;
var statearr_30694_30696 = state_30689;
(statearr_30694_30696[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30697 = state_30689;
state_30689 = G__30697;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26363__auto__ = function(state_30689){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26363__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26363__auto____1.call(this,state_30689);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26363__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26363__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto__,figwheel_version,temp__5457__auto__))
})();
var state__26454__auto__ = (function (){var statearr_30695 = f__26453__auto__.call(null);
(statearr_30695[(6)] = c__26452__auto__);

return statearr_30695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto__,figwheel_version,temp__5457__auto__))
);

return c__26452__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30698){
var map__30699 = p__30698;
var map__30699__$1 = ((((!((map__30699 == null)))?(((((map__30699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30699):map__30699);
var file = cljs.core.get.call(null,map__30699__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30699__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30699__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30701 = "";
var G__30701__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30701),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30701);
var G__30701__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30701__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30701__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30701__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30701__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30702){
var map__30703 = p__30702;
var map__30703__$1 = ((((!((map__30703 == null)))?(((((map__30703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30703):map__30703);
var ed = map__30703__$1;
var formatted_exception = cljs.core.get.call(null,map__30703__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30703__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30703__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30705_30709 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30706_30710 = null;
var count__30707_30711 = (0);
var i__30708_30712 = (0);
while(true){
if((i__30708_30712 < count__30707_30711)){
var msg_30713 = cljs.core._nth.call(null,chunk__30706_30710,i__30708_30712);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30713);


var G__30714 = seq__30705_30709;
var G__30715 = chunk__30706_30710;
var G__30716 = count__30707_30711;
var G__30717 = (i__30708_30712 + (1));
seq__30705_30709 = G__30714;
chunk__30706_30710 = G__30715;
count__30707_30711 = G__30716;
i__30708_30712 = G__30717;
continue;
} else {
var temp__5457__auto___30718 = cljs.core.seq.call(null,seq__30705_30709);
if(temp__5457__auto___30718){
var seq__30705_30719__$1 = temp__5457__auto___30718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30705_30719__$1)){
var c__4319__auto___30720 = cljs.core.chunk_first.call(null,seq__30705_30719__$1);
var G__30721 = cljs.core.chunk_rest.call(null,seq__30705_30719__$1);
var G__30722 = c__4319__auto___30720;
var G__30723 = cljs.core.count.call(null,c__4319__auto___30720);
var G__30724 = (0);
seq__30705_30709 = G__30721;
chunk__30706_30710 = G__30722;
count__30707_30711 = G__30723;
i__30708_30712 = G__30724;
continue;
} else {
var msg_30725 = cljs.core.first.call(null,seq__30705_30719__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30725);


var G__30726 = cljs.core.next.call(null,seq__30705_30719__$1);
var G__30727 = null;
var G__30728 = (0);
var G__30729 = (0);
seq__30705_30709 = G__30726;
chunk__30706_30710 = G__30727;
count__30707_30711 = G__30728;
i__30708_30712 = G__30729;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30730){
var map__30731 = p__30730;
var map__30731__$1 = ((((!((map__30731 == null)))?(((((map__30731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30731):map__30731);
var w = map__30731__$1;
var message = cljs.core.get.call(null,map__30731__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30733 = cljs.core.seq.call(null,plugins);
var chunk__30734 = null;
var count__30735 = (0);
var i__30736 = (0);
while(true){
if((i__30736 < count__30735)){
var vec__30737 = cljs.core._nth.call(null,chunk__30734,i__30736);
var k = cljs.core.nth.call(null,vec__30737,(0),null);
var plugin = cljs.core.nth.call(null,vec__30737,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30743 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30733,chunk__30734,count__30735,i__30736,pl_30743,vec__30737,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30743.call(null,msg_hist);
});})(seq__30733,chunk__30734,count__30735,i__30736,pl_30743,vec__30737,k,plugin))
);
} else {
}


var G__30744 = seq__30733;
var G__30745 = chunk__30734;
var G__30746 = count__30735;
var G__30747 = (i__30736 + (1));
seq__30733 = G__30744;
chunk__30734 = G__30745;
count__30735 = G__30746;
i__30736 = G__30747;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30733);
if(temp__5457__auto__){
var seq__30733__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30733__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30733__$1);
var G__30748 = cljs.core.chunk_rest.call(null,seq__30733__$1);
var G__30749 = c__4319__auto__;
var G__30750 = cljs.core.count.call(null,c__4319__auto__);
var G__30751 = (0);
seq__30733 = G__30748;
chunk__30734 = G__30749;
count__30735 = G__30750;
i__30736 = G__30751;
continue;
} else {
var vec__30740 = cljs.core.first.call(null,seq__30733__$1);
var k = cljs.core.nth.call(null,vec__30740,(0),null);
var plugin = cljs.core.nth.call(null,vec__30740,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30752 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30733,chunk__30734,count__30735,i__30736,pl_30752,vec__30740,k,plugin,seq__30733__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30752.call(null,msg_hist);
});})(seq__30733,chunk__30734,count__30735,i__30736,pl_30752,vec__30740,k,plugin,seq__30733__$1,temp__5457__auto__))
);
} else {
}


var G__30753 = cljs.core.next.call(null,seq__30733__$1);
var G__30754 = null;
var G__30755 = (0);
var G__30756 = (0);
seq__30733 = G__30753;
chunk__30734 = G__30754;
count__30735 = G__30755;
i__30736 = G__30756;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__30758 = arguments.length;
switch (G__30758) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30759_30764 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30760_30765 = null;
var count__30761_30766 = (0);
var i__30762_30767 = (0);
while(true){
if((i__30762_30767 < count__30761_30766)){
var msg_30768 = cljs.core._nth.call(null,chunk__30760_30765,i__30762_30767);
figwheel.client.socket.handle_incoming_message.call(null,msg_30768);


var G__30769 = seq__30759_30764;
var G__30770 = chunk__30760_30765;
var G__30771 = count__30761_30766;
var G__30772 = (i__30762_30767 + (1));
seq__30759_30764 = G__30769;
chunk__30760_30765 = G__30770;
count__30761_30766 = G__30771;
i__30762_30767 = G__30772;
continue;
} else {
var temp__5457__auto___30773 = cljs.core.seq.call(null,seq__30759_30764);
if(temp__5457__auto___30773){
var seq__30759_30774__$1 = temp__5457__auto___30773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30759_30774__$1)){
var c__4319__auto___30775 = cljs.core.chunk_first.call(null,seq__30759_30774__$1);
var G__30776 = cljs.core.chunk_rest.call(null,seq__30759_30774__$1);
var G__30777 = c__4319__auto___30775;
var G__30778 = cljs.core.count.call(null,c__4319__auto___30775);
var G__30779 = (0);
seq__30759_30764 = G__30776;
chunk__30760_30765 = G__30777;
count__30761_30766 = G__30778;
i__30762_30767 = G__30779;
continue;
} else {
var msg_30780 = cljs.core.first.call(null,seq__30759_30774__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30780);


var G__30781 = cljs.core.next.call(null,seq__30759_30774__$1);
var G__30782 = null;
var G__30783 = (0);
var G__30784 = (0);
seq__30759_30764 = G__30781;
chunk__30760_30765 = G__30782;
count__30761_30766 = G__30783;
i__30762_30767 = G__30784;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30789 = arguments.length;
var i__4500__auto___30790 = (0);
while(true){
if((i__4500__auto___30790 < len__4499__auto___30789)){
args__4502__auto__.push((arguments[i__4500__auto___30790]));

var G__30791 = (i__4500__auto___30790 + (1));
i__4500__auto___30790 = G__30791;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30786){
var map__30787 = p__30786;
var map__30787__$1 = ((((!((map__30787 == null)))?(((((map__30787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30787):map__30787);
var opts = map__30787__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30785){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30785));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30792){if((e30792 instanceof Error)){
var e = e30792;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30792;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__30793){
var map__30794 = p__30793;
var map__30794__$1 = ((((!((map__30794 == null)))?(((((map__30794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30794):map__30794);
var msg_name = cljs.core.get.call(null,map__30794__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1552095712820
