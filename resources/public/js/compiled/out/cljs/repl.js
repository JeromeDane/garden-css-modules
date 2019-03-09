// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30024){
var map__30025 = p__30024;
var map__30025__$1 = ((((!((map__30025 == null)))?(((((map__30025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30025):map__30025);
var m = map__30025__$1;
var n = cljs.core.get.call(null,map__30025__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30025__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30027_30049 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30028_30050 = null;
var count__30029_30051 = (0);
var i__30030_30052 = (0);
while(true){
if((i__30030_30052 < count__30029_30051)){
var f_30053 = cljs.core._nth.call(null,chunk__30028_30050,i__30030_30052);
cljs.core.println.call(null,"  ",f_30053);


var G__30054 = seq__30027_30049;
var G__30055 = chunk__30028_30050;
var G__30056 = count__30029_30051;
var G__30057 = (i__30030_30052 + (1));
seq__30027_30049 = G__30054;
chunk__30028_30050 = G__30055;
count__30029_30051 = G__30056;
i__30030_30052 = G__30057;
continue;
} else {
var temp__5457__auto___30058 = cljs.core.seq.call(null,seq__30027_30049);
if(temp__5457__auto___30058){
var seq__30027_30059__$1 = temp__5457__auto___30058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30027_30059__$1)){
var c__4319__auto___30060 = cljs.core.chunk_first.call(null,seq__30027_30059__$1);
var G__30061 = cljs.core.chunk_rest.call(null,seq__30027_30059__$1);
var G__30062 = c__4319__auto___30060;
var G__30063 = cljs.core.count.call(null,c__4319__auto___30060);
var G__30064 = (0);
seq__30027_30049 = G__30061;
chunk__30028_30050 = G__30062;
count__30029_30051 = G__30063;
i__30030_30052 = G__30064;
continue;
} else {
var f_30065 = cljs.core.first.call(null,seq__30027_30059__$1);
cljs.core.println.call(null,"  ",f_30065);


var G__30066 = cljs.core.next.call(null,seq__30027_30059__$1);
var G__30067 = null;
var G__30068 = (0);
var G__30069 = (0);
seq__30027_30049 = G__30066;
chunk__30028_30050 = G__30067;
count__30029_30051 = G__30068;
i__30030_30052 = G__30069;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30070 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30070);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30070)))?cljs.core.second.call(null,arglists_30070):arglists_30070));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30031_30071 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30032_30072 = null;
var count__30033_30073 = (0);
var i__30034_30074 = (0);
while(true){
if((i__30034_30074 < count__30033_30073)){
var vec__30035_30075 = cljs.core._nth.call(null,chunk__30032_30072,i__30034_30074);
var name_30076 = cljs.core.nth.call(null,vec__30035_30075,(0),null);
var map__30038_30077 = cljs.core.nth.call(null,vec__30035_30075,(1),null);
var map__30038_30078__$1 = ((((!((map__30038_30077 == null)))?(((((map__30038_30077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30038_30077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30038_30077):map__30038_30077);
var doc_30079 = cljs.core.get.call(null,map__30038_30078__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30080 = cljs.core.get.call(null,map__30038_30078__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30076);

cljs.core.println.call(null," ",arglists_30080);

if(cljs.core.truth_(doc_30079)){
cljs.core.println.call(null," ",doc_30079);
} else {
}


var G__30081 = seq__30031_30071;
var G__30082 = chunk__30032_30072;
var G__30083 = count__30033_30073;
var G__30084 = (i__30034_30074 + (1));
seq__30031_30071 = G__30081;
chunk__30032_30072 = G__30082;
count__30033_30073 = G__30083;
i__30034_30074 = G__30084;
continue;
} else {
var temp__5457__auto___30085 = cljs.core.seq.call(null,seq__30031_30071);
if(temp__5457__auto___30085){
var seq__30031_30086__$1 = temp__5457__auto___30085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30031_30086__$1)){
var c__4319__auto___30087 = cljs.core.chunk_first.call(null,seq__30031_30086__$1);
var G__30088 = cljs.core.chunk_rest.call(null,seq__30031_30086__$1);
var G__30089 = c__4319__auto___30087;
var G__30090 = cljs.core.count.call(null,c__4319__auto___30087);
var G__30091 = (0);
seq__30031_30071 = G__30088;
chunk__30032_30072 = G__30089;
count__30033_30073 = G__30090;
i__30034_30074 = G__30091;
continue;
} else {
var vec__30040_30092 = cljs.core.first.call(null,seq__30031_30086__$1);
var name_30093 = cljs.core.nth.call(null,vec__30040_30092,(0),null);
var map__30043_30094 = cljs.core.nth.call(null,vec__30040_30092,(1),null);
var map__30043_30095__$1 = ((((!((map__30043_30094 == null)))?(((((map__30043_30094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30043_30094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30043_30094):map__30043_30094);
var doc_30096 = cljs.core.get.call(null,map__30043_30095__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30097 = cljs.core.get.call(null,map__30043_30095__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30093);

cljs.core.println.call(null," ",arglists_30097);

if(cljs.core.truth_(doc_30096)){
cljs.core.println.call(null," ",doc_30096);
} else {
}


var G__30098 = cljs.core.next.call(null,seq__30031_30086__$1);
var G__30099 = null;
var G__30100 = (0);
var G__30101 = (0);
seq__30031_30071 = G__30098;
chunk__30032_30072 = G__30099;
count__30033_30073 = G__30100;
i__30034_30074 = G__30101;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__30045 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30046 = null;
var count__30047 = (0);
var i__30048 = (0);
while(true){
if((i__30048 < count__30047)){
var role = cljs.core._nth.call(null,chunk__30046,i__30048);
var temp__5457__auto___30102__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30102__$1)){
var spec_30103 = temp__5457__auto___30102__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30103));
} else {
}


var G__30104 = seq__30045;
var G__30105 = chunk__30046;
var G__30106 = count__30047;
var G__30107 = (i__30048 + (1));
seq__30045 = G__30104;
chunk__30046 = G__30105;
count__30047 = G__30106;
i__30048 = G__30107;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__30045);
if(temp__5457__auto____$1){
var seq__30045__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30045__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30045__$1);
var G__30108 = cljs.core.chunk_rest.call(null,seq__30045__$1);
var G__30109 = c__4319__auto__;
var G__30110 = cljs.core.count.call(null,c__4319__auto__);
var G__30111 = (0);
seq__30045 = G__30108;
chunk__30046 = G__30109;
count__30047 = G__30110;
i__30048 = G__30111;
continue;
} else {
var role = cljs.core.first.call(null,seq__30045__$1);
var temp__5457__auto___30112__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30112__$2)){
var spec_30113 = temp__5457__auto___30112__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30113));
} else {
}


var G__30114 = cljs.core.next.call(null,seq__30045__$1);
var G__30115 = null;
var G__30116 = (0);
var G__30117 = (0);
seq__30045 = G__30114;
chunk__30046 = G__30115;
count__30047 = G__30116;
i__30048 = G__30117;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1552095711996
