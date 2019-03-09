// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28561_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28561_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28562 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28563 = null;
var count__28564 = (0);
var i__28565 = (0);
while(true){
if((i__28565 < count__28564)){
var n = cljs.core._nth.call(null,chunk__28563,i__28565);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28566 = seq__28562;
var G__28567 = chunk__28563;
var G__28568 = count__28564;
var G__28569 = (i__28565 + (1));
seq__28562 = G__28566;
chunk__28563 = G__28567;
count__28564 = G__28568;
i__28565 = G__28569;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28562);
if(temp__5457__auto__){
var seq__28562__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28562__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28562__$1);
var G__28570 = cljs.core.chunk_rest.call(null,seq__28562__$1);
var G__28571 = c__4319__auto__;
var G__28572 = cljs.core.count.call(null,c__4319__auto__);
var G__28573 = (0);
seq__28562 = G__28570;
chunk__28563 = G__28571;
count__28564 = G__28572;
i__28565 = G__28573;
continue;
} else {
var n = cljs.core.first.call(null,seq__28562__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28574 = cljs.core.next.call(null,seq__28562__$1);
var G__28575 = null;
var G__28576 = (0);
var G__28577 = (0);
seq__28562 = G__28574;
chunk__28563 = G__28575;
count__28564 = G__28576;
i__28565 = G__28577;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28578){
var vec__28579 = p__28578;
var _ = cljs.core.nth.call(null,vec__28579,(0),null);
var v = cljs.core.nth.call(null,vec__28579,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__28582){
var vec__28583 = p__28582;
var k = cljs.core.nth.call(null,vec__28583,(0),null);
var v = cljs.core.nth.call(null,vec__28583,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28595_28603 = cljs.core.seq.call(null,deps);
var chunk__28596_28604 = null;
var count__28597_28605 = (0);
var i__28598_28606 = (0);
while(true){
if((i__28598_28606 < count__28597_28605)){
var dep_28607 = cljs.core._nth.call(null,chunk__28596_28604,i__28598_28606);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_28607;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28607));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28607,(depth + (1)),state);
} else {
}


var G__28608 = seq__28595_28603;
var G__28609 = chunk__28596_28604;
var G__28610 = count__28597_28605;
var G__28611 = (i__28598_28606 + (1));
seq__28595_28603 = G__28608;
chunk__28596_28604 = G__28609;
count__28597_28605 = G__28610;
i__28598_28606 = G__28611;
continue;
} else {
var temp__5457__auto___28612 = cljs.core.seq.call(null,seq__28595_28603);
if(temp__5457__auto___28612){
var seq__28595_28613__$1 = temp__5457__auto___28612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28595_28613__$1)){
var c__4319__auto___28614 = cljs.core.chunk_first.call(null,seq__28595_28613__$1);
var G__28615 = cljs.core.chunk_rest.call(null,seq__28595_28613__$1);
var G__28616 = c__4319__auto___28614;
var G__28617 = cljs.core.count.call(null,c__4319__auto___28614);
var G__28618 = (0);
seq__28595_28603 = G__28615;
chunk__28596_28604 = G__28616;
count__28597_28605 = G__28617;
i__28598_28606 = G__28618;
continue;
} else {
var dep_28619 = cljs.core.first.call(null,seq__28595_28613__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_28619;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28619));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28619,(depth + (1)),state);
} else {
}


var G__28620 = cljs.core.next.call(null,seq__28595_28613__$1);
var G__28621 = null;
var G__28622 = (0);
var G__28623 = (0);
seq__28595_28603 = G__28620;
chunk__28596_28604 = G__28621;
count__28597_28605 = G__28622;
i__28598_28606 = G__28623;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28599){
var vec__28600 = p__28599;
var seq__28601 = cljs.core.seq.call(null,vec__28600);
var first__28602 = cljs.core.first.call(null,seq__28601);
var seq__28601__$1 = cljs.core.next.call(null,seq__28601);
var x = first__28602;
var xs = seq__28601__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28600,seq__28601,first__28602,seq__28601__$1,x,xs,get_deps__$1){
return (function (p1__28586_SHARP_){
return clojure.set.difference.call(null,p1__28586_SHARP_,x);
});})(vec__28600,seq__28601,first__28602,seq__28601__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28624 = cljs.core.seq.call(null,provides);
var chunk__28625 = null;
var count__28626 = (0);
var i__28627 = (0);
while(true){
if((i__28627 < count__28626)){
var prov = cljs.core._nth.call(null,chunk__28625,i__28627);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28628_28636 = cljs.core.seq.call(null,requires);
var chunk__28629_28637 = null;
var count__28630_28638 = (0);
var i__28631_28639 = (0);
while(true){
if((i__28631_28639 < count__28630_28638)){
var req_28640 = cljs.core._nth.call(null,chunk__28629_28637,i__28631_28639);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28640,prov);


var G__28641 = seq__28628_28636;
var G__28642 = chunk__28629_28637;
var G__28643 = count__28630_28638;
var G__28644 = (i__28631_28639 + (1));
seq__28628_28636 = G__28641;
chunk__28629_28637 = G__28642;
count__28630_28638 = G__28643;
i__28631_28639 = G__28644;
continue;
} else {
var temp__5457__auto___28645 = cljs.core.seq.call(null,seq__28628_28636);
if(temp__5457__auto___28645){
var seq__28628_28646__$1 = temp__5457__auto___28645;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28628_28646__$1)){
var c__4319__auto___28647 = cljs.core.chunk_first.call(null,seq__28628_28646__$1);
var G__28648 = cljs.core.chunk_rest.call(null,seq__28628_28646__$1);
var G__28649 = c__4319__auto___28647;
var G__28650 = cljs.core.count.call(null,c__4319__auto___28647);
var G__28651 = (0);
seq__28628_28636 = G__28648;
chunk__28629_28637 = G__28649;
count__28630_28638 = G__28650;
i__28631_28639 = G__28651;
continue;
} else {
var req_28652 = cljs.core.first.call(null,seq__28628_28646__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28652,prov);


var G__28653 = cljs.core.next.call(null,seq__28628_28646__$1);
var G__28654 = null;
var G__28655 = (0);
var G__28656 = (0);
seq__28628_28636 = G__28653;
chunk__28629_28637 = G__28654;
count__28630_28638 = G__28655;
i__28631_28639 = G__28656;
continue;
}
} else {
}
}
break;
}


var G__28657 = seq__28624;
var G__28658 = chunk__28625;
var G__28659 = count__28626;
var G__28660 = (i__28627 + (1));
seq__28624 = G__28657;
chunk__28625 = G__28658;
count__28626 = G__28659;
i__28627 = G__28660;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28624);
if(temp__5457__auto__){
var seq__28624__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28624__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28624__$1);
var G__28661 = cljs.core.chunk_rest.call(null,seq__28624__$1);
var G__28662 = c__4319__auto__;
var G__28663 = cljs.core.count.call(null,c__4319__auto__);
var G__28664 = (0);
seq__28624 = G__28661;
chunk__28625 = G__28662;
count__28626 = G__28663;
i__28627 = G__28664;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28624__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28632_28665 = cljs.core.seq.call(null,requires);
var chunk__28633_28666 = null;
var count__28634_28667 = (0);
var i__28635_28668 = (0);
while(true){
if((i__28635_28668 < count__28634_28667)){
var req_28669 = cljs.core._nth.call(null,chunk__28633_28666,i__28635_28668);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28669,prov);


var G__28670 = seq__28632_28665;
var G__28671 = chunk__28633_28666;
var G__28672 = count__28634_28667;
var G__28673 = (i__28635_28668 + (1));
seq__28632_28665 = G__28670;
chunk__28633_28666 = G__28671;
count__28634_28667 = G__28672;
i__28635_28668 = G__28673;
continue;
} else {
var temp__5457__auto___28674__$1 = cljs.core.seq.call(null,seq__28632_28665);
if(temp__5457__auto___28674__$1){
var seq__28632_28675__$1 = temp__5457__auto___28674__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28632_28675__$1)){
var c__4319__auto___28676 = cljs.core.chunk_first.call(null,seq__28632_28675__$1);
var G__28677 = cljs.core.chunk_rest.call(null,seq__28632_28675__$1);
var G__28678 = c__4319__auto___28676;
var G__28679 = cljs.core.count.call(null,c__4319__auto___28676);
var G__28680 = (0);
seq__28632_28665 = G__28677;
chunk__28633_28666 = G__28678;
count__28634_28667 = G__28679;
i__28635_28668 = G__28680;
continue;
} else {
var req_28681 = cljs.core.first.call(null,seq__28632_28675__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28681,prov);


var G__28682 = cljs.core.next.call(null,seq__28632_28675__$1);
var G__28683 = null;
var G__28684 = (0);
var G__28685 = (0);
seq__28632_28665 = G__28682;
chunk__28633_28666 = G__28683;
count__28634_28667 = G__28684;
i__28635_28668 = G__28685;
continue;
}
} else {
}
}
break;
}


var G__28686 = cljs.core.next.call(null,seq__28624__$1);
var G__28687 = null;
var G__28688 = (0);
var G__28689 = (0);
seq__28624 = G__28686;
chunk__28625 = G__28687;
count__28626 = G__28688;
i__28627 = G__28689;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28690_28694 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28691_28695 = null;
var count__28692_28696 = (0);
var i__28693_28697 = (0);
while(true){
if((i__28693_28697 < count__28692_28696)){
var ns_28698 = cljs.core._nth.call(null,chunk__28691_28695,i__28693_28697);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28698);


var G__28699 = seq__28690_28694;
var G__28700 = chunk__28691_28695;
var G__28701 = count__28692_28696;
var G__28702 = (i__28693_28697 + (1));
seq__28690_28694 = G__28699;
chunk__28691_28695 = G__28700;
count__28692_28696 = G__28701;
i__28693_28697 = G__28702;
continue;
} else {
var temp__5457__auto___28703 = cljs.core.seq.call(null,seq__28690_28694);
if(temp__5457__auto___28703){
var seq__28690_28704__$1 = temp__5457__auto___28703;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28690_28704__$1)){
var c__4319__auto___28705 = cljs.core.chunk_first.call(null,seq__28690_28704__$1);
var G__28706 = cljs.core.chunk_rest.call(null,seq__28690_28704__$1);
var G__28707 = c__4319__auto___28705;
var G__28708 = cljs.core.count.call(null,c__4319__auto___28705);
var G__28709 = (0);
seq__28690_28694 = G__28706;
chunk__28691_28695 = G__28707;
count__28692_28696 = G__28708;
i__28693_28697 = G__28709;
continue;
} else {
var ns_28710 = cljs.core.first.call(null,seq__28690_28704__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28710);


var G__28711 = cljs.core.next.call(null,seq__28690_28704__$1);
var G__28712 = null;
var G__28713 = (0);
var G__28714 = (0);
seq__28690_28694 = G__28711;
chunk__28691_28695 = G__28712;
count__28692_28696 = G__28713;
i__28693_28697 = G__28714;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28715__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28715 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28716__i = 0, G__28716__a = new Array(arguments.length -  0);
while (G__28716__i < G__28716__a.length) {G__28716__a[G__28716__i] = arguments[G__28716__i + 0]; ++G__28716__i;}
  args = new cljs.core.IndexedSeq(G__28716__a,0,null);
} 
return G__28715__delegate.call(this,args);};
G__28715.cljs$lang$maxFixedArity = 0;
G__28715.cljs$lang$applyTo = (function (arglist__28717){
var args = cljs.core.seq(arglist__28717);
return G__28715__delegate(args);
});
G__28715.cljs$core$IFn$_invoke$arity$variadic = G__28715__delegate;
return G__28715;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__28718_SHARP_,p2__28719_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28718_SHARP_)].join('')),p2__28719_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__28720_SHARP_,p2__28721_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28720_SHARP_)].join(''),p2__28721_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28722 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28722.addCallback(((function (G__28722){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28722))
);

G__28722.addErrback(((function (G__28722){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28722))
);

return G__28722;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28723){if((e28723 instanceof Error)){
var e = e28723;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28723;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28724){if((e28724 instanceof Error)){
var e = e28724;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28724;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28725 = cljs.core._EQ_;
var expr__28726 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28725.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28726))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28725.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28726))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28725.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28726))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28725,expr__28726){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28725,expr__28726))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28728,callback){
var map__28729 = p__28728;
var map__28729__$1 = ((((!((map__28729 == null)))?(((((map__28729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28729):map__28729);
var file_msg = map__28729__$1;
var request_url = cljs.core.get.call(null,map__28729__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28729,map__28729__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28729,map__28729__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26452__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto__){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto__){
return (function (state_28767){
var state_val_28768 = (state_28767[(1)]);
if((state_val_28768 === (7))){
var inst_28763 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
var statearr_28769_28795 = state_28767__$1;
(statearr_28769_28795[(2)] = inst_28763);

(statearr_28769_28795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (1))){
var state_28767__$1 = state_28767;
var statearr_28770_28796 = state_28767__$1;
(statearr_28770_28796[(2)] = null);

(statearr_28770_28796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (4))){
var inst_28733 = (state_28767[(7)]);
var inst_28733__$1 = (state_28767[(2)]);
var state_28767__$1 = (function (){var statearr_28771 = state_28767;
(statearr_28771[(7)] = inst_28733__$1);

return statearr_28771;
})();
if(cljs.core.truth_(inst_28733__$1)){
var statearr_28772_28797 = state_28767__$1;
(statearr_28772_28797[(1)] = (5));

} else {
var statearr_28773_28798 = state_28767__$1;
(statearr_28773_28798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (15))){
var inst_28748 = (state_28767[(8)]);
var inst_28746 = (state_28767[(9)]);
var inst_28750 = inst_28748.call(null,inst_28746);
var state_28767__$1 = state_28767;
var statearr_28774_28799 = state_28767__$1;
(statearr_28774_28799[(2)] = inst_28750);

(statearr_28774_28799[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (13))){
var inst_28757 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
var statearr_28775_28800 = state_28767__$1;
(statearr_28775_28800[(2)] = inst_28757);

(statearr_28775_28800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (6))){
var state_28767__$1 = state_28767;
var statearr_28776_28801 = state_28767__$1;
(statearr_28776_28801[(2)] = null);

(statearr_28776_28801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (17))){
var inst_28754 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
var statearr_28777_28802 = state_28767__$1;
(statearr_28777_28802[(2)] = inst_28754);

(statearr_28777_28802[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (3))){
var inst_28765 = (state_28767[(2)]);
var state_28767__$1 = state_28767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28767__$1,inst_28765);
} else {
if((state_val_28768 === (12))){
var state_28767__$1 = state_28767;
var statearr_28778_28803 = state_28767__$1;
(statearr_28778_28803[(2)] = null);

(statearr_28778_28803[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (2))){
var state_28767__$1 = state_28767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28767__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28768 === (11))){
var inst_28738 = (state_28767[(10)]);
var inst_28744 = figwheel.client.file_reloading.blocking_load.call(null,inst_28738);
var state_28767__$1 = state_28767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28767__$1,(14),inst_28744);
} else {
if((state_val_28768 === (9))){
var inst_28738 = (state_28767[(10)]);
var state_28767__$1 = state_28767;
if(cljs.core.truth_(inst_28738)){
var statearr_28779_28804 = state_28767__$1;
(statearr_28779_28804[(1)] = (11));

} else {
var statearr_28780_28805 = state_28767__$1;
(statearr_28780_28805[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (5))){
var inst_28739 = (state_28767[(11)]);
var inst_28733 = (state_28767[(7)]);
var inst_28738 = cljs.core.nth.call(null,inst_28733,(0),null);
var inst_28739__$1 = cljs.core.nth.call(null,inst_28733,(1),null);
var state_28767__$1 = (function (){var statearr_28781 = state_28767;
(statearr_28781[(11)] = inst_28739__$1);

(statearr_28781[(10)] = inst_28738);

return statearr_28781;
})();
if(cljs.core.truth_(inst_28739__$1)){
var statearr_28782_28806 = state_28767__$1;
(statearr_28782_28806[(1)] = (8));

} else {
var statearr_28783_28807 = state_28767__$1;
(statearr_28783_28807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (14))){
var inst_28738 = (state_28767[(10)]);
var inst_28748 = (state_28767[(8)]);
var inst_28746 = (state_28767[(2)]);
var inst_28747 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28748__$1 = cljs.core.get.call(null,inst_28747,inst_28738);
var state_28767__$1 = (function (){var statearr_28784 = state_28767;
(statearr_28784[(8)] = inst_28748__$1);

(statearr_28784[(9)] = inst_28746);

return statearr_28784;
})();
if(cljs.core.truth_(inst_28748__$1)){
var statearr_28785_28808 = state_28767__$1;
(statearr_28785_28808[(1)] = (15));

} else {
var statearr_28786_28809 = state_28767__$1;
(statearr_28786_28809[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (16))){
var inst_28746 = (state_28767[(9)]);
var inst_28752 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28746);
var state_28767__$1 = state_28767;
var statearr_28787_28810 = state_28767__$1;
(statearr_28787_28810[(2)] = inst_28752);

(statearr_28787_28810[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (10))){
var inst_28759 = (state_28767[(2)]);
var state_28767__$1 = (function (){var statearr_28788 = state_28767;
(statearr_28788[(12)] = inst_28759);

return statearr_28788;
})();
var statearr_28789_28811 = state_28767__$1;
(statearr_28789_28811[(2)] = null);

(statearr_28789_28811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28768 === (8))){
var inst_28739 = (state_28767[(11)]);
var inst_28741 = eval(inst_28739);
var state_28767__$1 = state_28767;
var statearr_28790_28812 = state_28767__$1;
(statearr_28790_28812[(2)] = inst_28741);

(statearr_28790_28812[(1)] = (10));


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
});})(c__26452__auto__))
;
return ((function (switch__26362__auto__,c__26452__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26363__auto__ = null;
var figwheel$client$file_reloading$state_machine__26363__auto____0 = (function (){
var statearr_28791 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28791[(0)] = figwheel$client$file_reloading$state_machine__26363__auto__);

(statearr_28791[(1)] = (1));

return statearr_28791;
});
var figwheel$client$file_reloading$state_machine__26363__auto____1 = (function (state_28767){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_28767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e28792){if((e28792 instanceof Object)){
var ex__26366__auto__ = e28792;
var statearr_28793_28813 = state_28767;
(statearr_28793_28813[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28814 = state_28767;
state_28767 = G__28814;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26363__auto__ = function(state_28767){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26363__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26363__auto____1.call(this,state_28767);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26363__auto____0;
figwheel$client$file_reloading$state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26363__auto____1;
return figwheel$client$file_reloading$state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto__))
})();
var state__26454__auto__ = (function (){var statearr_28794 = f__26453__auto__.call(null);
(statearr_28794[(6)] = c__26452__auto__);

return statearr_28794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto__))
);

return c__26452__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28816 = arguments.length;
switch (G__28816) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28818,callback){
var map__28819 = p__28818;
var map__28819__$1 = ((((!((map__28819 == null)))?(((((map__28819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28819):map__28819);
var file_msg = map__28819__$1;
var namespace = cljs.core.get.call(null,map__28819__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28819,map__28819__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28819,map__28819__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28821){
var map__28822 = p__28821;
var map__28822__$1 = ((((!((map__28822 == null)))?(((((map__28822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28822):map__28822);
var file_msg = map__28822__$1;
var namespace = cljs.core.get.call(null,map__28822__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28824){
var map__28825 = p__28824;
var map__28825__$1 = ((((!((map__28825 == null)))?(((((map__28825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28825):map__28825);
var file_msg = map__28825__$1;
var namespace = cljs.core.get.call(null,map__28825__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28827,callback){
var map__28828 = p__28827;
var map__28828__$1 = ((((!((map__28828 == null)))?(((((map__28828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28828):map__28828);
var file_msg = map__28828__$1;
var request_url = cljs.core.get.call(null,map__28828__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28828__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26452__auto___28878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto___28878,out){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto___28878,out){
return (function (state_28863){
var state_val_28864 = (state_28863[(1)]);
if((state_val_28864 === (1))){
var inst_28837 = cljs.core.seq.call(null,files);
var inst_28838 = cljs.core.first.call(null,inst_28837);
var inst_28839 = cljs.core.next.call(null,inst_28837);
var inst_28840 = files;
var state_28863__$1 = (function (){var statearr_28865 = state_28863;
(statearr_28865[(7)] = inst_28839);

(statearr_28865[(8)] = inst_28838);

(statearr_28865[(9)] = inst_28840);

return statearr_28865;
})();
var statearr_28866_28879 = state_28863__$1;
(statearr_28866_28879[(2)] = null);

(statearr_28866_28879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (2))){
var inst_28840 = (state_28863[(9)]);
var inst_28846 = (state_28863[(10)]);
var inst_28845 = cljs.core.seq.call(null,inst_28840);
var inst_28846__$1 = cljs.core.first.call(null,inst_28845);
var inst_28847 = cljs.core.next.call(null,inst_28845);
var inst_28848 = (inst_28846__$1 == null);
var inst_28849 = cljs.core.not.call(null,inst_28848);
var state_28863__$1 = (function (){var statearr_28867 = state_28863;
(statearr_28867[(11)] = inst_28847);

(statearr_28867[(10)] = inst_28846__$1);

return statearr_28867;
})();
if(inst_28849){
var statearr_28868_28880 = state_28863__$1;
(statearr_28868_28880[(1)] = (4));

} else {
var statearr_28869_28881 = state_28863__$1;
(statearr_28869_28881[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (3))){
var inst_28861 = (state_28863[(2)]);
var state_28863__$1 = state_28863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28863__$1,inst_28861);
} else {
if((state_val_28864 === (4))){
var inst_28846 = (state_28863[(10)]);
var inst_28851 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28846);
var state_28863__$1 = state_28863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28863__$1,(7),inst_28851);
} else {
if((state_val_28864 === (5))){
var inst_28857 = cljs.core.async.close_BANG_.call(null,out);
var state_28863__$1 = state_28863;
var statearr_28870_28882 = state_28863__$1;
(statearr_28870_28882[(2)] = inst_28857);

(statearr_28870_28882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (6))){
var inst_28859 = (state_28863[(2)]);
var state_28863__$1 = state_28863;
var statearr_28871_28883 = state_28863__$1;
(statearr_28871_28883[(2)] = inst_28859);

(statearr_28871_28883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (7))){
var inst_28847 = (state_28863[(11)]);
var inst_28853 = (state_28863[(2)]);
var inst_28854 = cljs.core.async.put_BANG_.call(null,out,inst_28853);
var inst_28840 = inst_28847;
var state_28863__$1 = (function (){var statearr_28872 = state_28863;
(statearr_28872[(12)] = inst_28854);

(statearr_28872[(9)] = inst_28840);

return statearr_28872;
})();
var statearr_28873_28884 = state_28863__$1;
(statearr_28873_28884[(2)] = null);

(statearr_28873_28884[(1)] = (2));


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
});})(c__26452__auto___28878,out))
;
return ((function (switch__26362__auto__,c__26452__auto___28878,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26363__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26363__auto____0 = (function (){
var statearr_28874 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28874[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26363__auto__);

(statearr_28874[(1)] = (1));

return statearr_28874;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26363__auto____1 = (function (state_28863){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_28863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e28875){if((e28875 instanceof Object)){
var ex__26366__auto__ = e28875;
var statearr_28876_28885 = state_28863;
(statearr_28876_28885[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28886 = state_28863;
state_28863 = G__28886;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26363__auto__ = function(state_28863){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26363__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26363__auto____1.call(this,state_28863);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26363__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26363__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto___28878,out))
})();
var state__26454__auto__ = (function (){var statearr_28877 = f__26453__auto__.call(null);
(statearr_28877[(6)] = c__26452__auto___28878);

return statearr_28877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto___28878,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28887,opts){
var map__28888 = p__28887;
var map__28888__$1 = ((((!((map__28888 == null)))?(((((map__28888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28888):map__28888);
var eval_body = cljs.core.get.call(null,map__28888__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28888__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28890){var e = e28890;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28891_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28891_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28892){
var vec__28893 = p__28892;
var k = cljs.core.nth.call(null,vec__28893,(0),null);
var v = cljs.core.nth.call(null,vec__28893,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28896){
var vec__28897 = p__28896;
var k = cljs.core.nth.call(null,vec__28897,(0),null);
var v = cljs.core.nth.call(null,vec__28897,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28903,p__28904){
var map__28905 = p__28903;
var map__28905__$1 = ((((!((map__28905 == null)))?(((((map__28905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28905):map__28905);
var opts = map__28905__$1;
var before_jsload = cljs.core.get.call(null,map__28905__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28905__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28905__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28906 = p__28904;
var map__28906__$1 = ((((!((map__28906 == null)))?(((((map__28906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28906):map__28906);
var msg = map__28906__$1;
var files = cljs.core.get.call(null,map__28906__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28906__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28906__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26452__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29060){
var state_val_29061 = (state_29060[(1)]);
if((state_val_29061 === (7))){
var inst_28921 = (state_29060[(7)]);
var inst_28920 = (state_29060[(8)]);
var inst_28923 = (state_29060[(9)]);
var inst_28922 = (state_29060[(10)]);
var inst_28928 = cljs.core._nth.call(null,inst_28921,inst_28923);
var inst_28929 = figwheel.client.file_reloading.eval_body.call(null,inst_28928,opts);
var inst_28930 = (inst_28923 + (1));
var tmp29062 = inst_28921;
var tmp29063 = inst_28920;
var tmp29064 = inst_28922;
var inst_28920__$1 = tmp29063;
var inst_28921__$1 = tmp29062;
var inst_28922__$1 = tmp29064;
var inst_28923__$1 = inst_28930;
var state_29060__$1 = (function (){var statearr_29065 = state_29060;
(statearr_29065[(7)] = inst_28921__$1);

(statearr_29065[(8)] = inst_28920__$1);

(statearr_29065[(9)] = inst_28923__$1);

(statearr_29065[(11)] = inst_28929);

(statearr_29065[(10)] = inst_28922__$1);

return statearr_29065;
})();
var statearr_29066_29149 = state_29060__$1;
(statearr_29066_29149[(2)] = null);

(statearr_29066_29149[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (20))){
var inst_28963 = (state_29060[(12)]);
var inst_28971 = figwheel.client.file_reloading.sort_files.call(null,inst_28963);
var state_29060__$1 = state_29060;
var statearr_29067_29150 = state_29060__$1;
(statearr_29067_29150[(2)] = inst_28971);

(statearr_29067_29150[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (27))){
var state_29060__$1 = state_29060;
var statearr_29068_29151 = state_29060__$1;
(statearr_29068_29151[(2)] = null);

(statearr_29068_29151[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (1))){
var inst_28912 = (state_29060[(13)]);
var inst_28909 = before_jsload.call(null,files);
var inst_28910 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28911 = (function (){return ((function (inst_28912,inst_28909,inst_28910,state_val_29061,c__26452__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28900_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28900_SHARP_);
});
;})(inst_28912,inst_28909,inst_28910,state_val_29061,c__26452__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28912__$1 = cljs.core.filter.call(null,inst_28911,files);
var inst_28913 = cljs.core.not_empty.call(null,inst_28912__$1);
var state_29060__$1 = (function (){var statearr_29069 = state_29060;
(statearr_29069[(13)] = inst_28912__$1);

(statearr_29069[(14)] = inst_28910);

(statearr_29069[(15)] = inst_28909);

return statearr_29069;
})();
if(cljs.core.truth_(inst_28913)){
var statearr_29070_29152 = state_29060__$1;
(statearr_29070_29152[(1)] = (2));

} else {
var statearr_29071_29153 = state_29060__$1;
(statearr_29071_29153[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (24))){
var state_29060__$1 = state_29060;
var statearr_29072_29154 = state_29060__$1;
(statearr_29072_29154[(2)] = null);

(statearr_29072_29154[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (39))){
var inst_29013 = (state_29060[(16)]);
var state_29060__$1 = state_29060;
var statearr_29073_29155 = state_29060__$1;
(statearr_29073_29155[(2)] = inst_29013);

(statearr_29073_29155[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (46))){
var inst_29055 = (state_29060[(2)]);
var state_29060__$1 = state_29060;
var statearr_29074_29156 = state_29060__$1;
(statearr_29074_29156[(2)] = inst_29055);

(statearr_29074_29156[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (4))){
var inst_28957 = (state_29060[(2)]);
var inst_28958 = cljs.core.List.EMPTY;
var inst_28959 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28958);
var inst_28960 = (function (){return ((function (inst_28957,inst_28958,inst_28959,state_val_29061,c__26452__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28901_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28901_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28901_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28901_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_28957,inst_28958,inst_28959,state_val_29061,c__26452__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28961 = cljs.core.filter.call(null,inst_28960,files);
var inst_28962 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28963 = cljs.core.concat.call(null,inst_28961,inst_28962);
var state_29060__$1 = (function (){var statearr_29075 = state_29060;
(statearr_29075[(12)] = inst_28963);

(statearr_29075[(17)] = inst_28957);

(statearr_29075[(18)] = inst_28959);

return statearr_29075;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29076_29157 = state_29060__$1;
(statearr_29076_29157[(1)] = (16));

} else {
var statearr_29077_29158 = state_29060__$1;
(statearr_29077_29158[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (15))){
var inst_28947 = (state_29060[(2)]);
var state_29060__$1 = state_29060;
var statearr_29078_29159 = state_29060__$1;
(statearr_29078_29159[(2)] = inst_28947);

(statearr_29078_29159[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (21))){
var inst_28973 = (state_29060[(19)]);
var inst_28973__$1 = (state_29060[(2)]);
var inst_28974 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28973__$1);
var state_29060__$1 = (function (){var statearr_29079 = state_29060;
(statearr_29079[(19)] = inst_28973__$1);

return statearr_29079;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29060__$1,(22),inst_28974);
} else {
if((state_val_29061 === (31))){
var inst_29058 = (state_29060[(2)]);
var state_29060__$1 = state_29060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29060__$1,inst_29058);
} else {
if((state_val_29061 === (32))){
var inst_29013 = (state_29060[(16)]);
var inst_29018 = inst_29013.cljs$lang$protocol_mask$partition0$;
var inst_29019 = (inst_29018 & (64));
var inst_29020 = inst_29013.cljs$core$ISeq$;
var inst_29021 = (cljs.core.PROTOCOL_SENTINEL === inst_29020);
var inst_29022 = ((inst_29019) || (inst_29021));
var state_29060__$1 = state_29060;
if(cljs.core.truth_(inst_29022)){
var statearr_29080_29160 = state_29060__$1;
(statearr_29080_29160[(1)] = (35));

} else {
var statearr_29081_29161 = state_29060__$1;
(statearr_29081_29161[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (40))){
var inst_29035 = (state_29060[(20)]);
var inst_29034 = (state_29060[(2)]);
var inst_29035__$1 = cljs.core.get.call(null,inst_29034,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29036 = cljs.core.get.call(null,inst_29034,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29037 = cljs.core.not_empty.call(null,inst_29035__$1);
var state_29060__$1 = (function (){var statearr_29082 = state_29060;
(statearr_29082[(20)] = inst_29035__$1);

(statearr_29082[(21)] = inst_29036);

return statearr_29082;
})();
if(cljs.core.truth_(inst_29037)){
var statearr_29083_29162 = state_29060__$1;
(statearr_29083_29162[(1)] = (41));

} else {
var statearr_29084_29163 = state_29060__$1;
(statearr_29084_29163[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (33))){
var state_29060__$1 = state_29060;
var statearr_29085_29164 = state_29060__$1;
(statearr_29085_29164[(2)] = false);

(statearr_29085_29164[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (13))){
var inst_28933 = (state_29060[(22)]);
var inst_28937 = cljs.core.chunk_first.call(null,inst_28933);
var inst_28938 = cljs.core.chunk_rest.call(null,inst_28933);
var inst_28939 = cljs.core.count.call(null,inst_28937);
var inst_28920 = inst_28938;
var inst_28921 = inst_28937;
var inst_28922 = inst_28939;
var inst_28923 = (0);
var state_29060__$1 = (function (){var statearr_29086 = state_29060;
(statearr_29086[(7)] = inst_28921);

(statearr_29086[(8)] = inst_28920);

(statearr_29086[(9)] = inst_28923);

(statearr_29086[(10)] = inst_28922);

return statearr_29086;
})();
var statearr_29087_29165 = state_29060__$1;
(statearr_29087_29165[(2)] = null);

(statearr_29087_29165[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (22))){
var inst_28973 = (state_29060[(19)]);
var inst_28977 = (state_29060[(23)]);
var inst_28976 = (state_29060[(24)]);
var inst_28981 = (state_29060[(25)]);
var inst_28976__$1 = (state_29060[(2)]);
var inst_28977__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28976__$1);
var inst_28978 = (function (){var all_files = inst_28973;
var res_SINGLEQUOTE_ = inst_28976__$1;
var res = inst_28977__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28973,inst_28977,inst_28976,inst_28981,inst_28976__$1,inst_28977__$1,state_val_29061,c__26452__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28902_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28902_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28973,inst_28977,inst_28976,inst_28981,inst_28976__$1,inst_28977__$1,state_val_29061,c__26452__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28979 = cljs.core.filter.call(null,inst_28978,inst_28976__$1);
var inst_28980 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28981__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28980);
var inst_28982 = cljs.core.not_empty.call(null,inst_28981__$1);
var state_29060__$1 = (function (){var statearr_29088 = state_29060;
(statearr_29088[(23)] = inst_28977__$1);

(statearr_29088[(24)] = inst_28976__$1);

(statearr_29088[(26)] = inst_28979);

(statearr_29088[(25)] = inst_28981__$1);

return statearr_29088;
})();
if(cljs.core.truth_(inst_28982)){
var statearr_29089_29166 = state_29060__$1;
(statearr_29089_29166[(1)] = (23));

} else {
var statearr_29090_29167 = state_29060__$1;
(statearr_29090_29167[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (36))){
var state_29060__$1 = state_29060;
var statearr_29091_29168 = state_29060__$1;
(statearr_29091_29168[(2)] = false);

(statearr_29091_29168[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (41))){
var inst_29035 = (state_29060[(20)]);
var inst_29039 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29040 = cljs.core.map.call(null,inst_29039,inst_29035);
var inst_29041 = cljs.core.pr_str.call(null,inst_29040);
var inst_29042 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29041)].join('');
var inst_29043 = figwheel.client.utils.log.call(null,inst_29042);
var state_29060__$1 = state_29060;
var statearr_29092_29169 = state_29060__$1;
(statearr_29092_29169[(2)] = inst_29043);

(statearr_29092_29169[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (43))){
var inst_29036 = (state_29060[(21)]);
var inst_29046 = (state_29060[(2)]);
var inst_29047 = cljs.core.not_empty.call(null,inst_29036);
var state_29060__$1 = (function (){var statearr_29093 = state_29060;
(statearr_29093[(27)] = inst_29046);

return statearr_29093;
})();
if(cljs.core.truth_(inst_29047)){
var statearr_29094_29170 = state_29060__$1;
(statearr_29094_29170[(1)] = (44));

} else {
var statearr_29095_29171 = state_29060__$1;
(statearr_29095_29171[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (29))){
var inst_28973 = (state_29060[(19)]);
var inst_28977 = (state_29060[(23)]);
var inst_28976 = (state_29060[(24)]);
var inst_29013 = (state_29060[(16)]);
var inst_28979 = (state_29060[(26)]);
var inst_28981 = (state_29060[(25)]);
var inst_29009 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29012 = (function (){var all_files = inst_28973;
var res_SINGLEQUOTE_ = inst_28976;
var res = inst_28977;
var files_not_loaded = inst_28979;
var dependencies_that_loaded = inst_28981;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28973,inst_28977,inst_28976,inst_29013,inst_28979,inst_28981,inst_29009,state_val_29061,c__26452__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29011){
var map__29096 = p__29011;
var map__29096__$1 = ((((!((map__29096 == null)))?(((((map__29096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29096):map__29096);
var namespace = cljs.core.get.call(null,map__29096__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28973,inst_28977,inst_28976,inst_29013,inst_28979,inst_28981,inst_29009,state_val_29061,c__26452__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29013__$1 = cljs.core.group_by.call(null,inst_29012,inst_28979);
var inst_29015 = (inst_29013__$1 == null);
var inst_29016 = cljs.core.not.call(null,inst_29015);
var state_29060__$1 = (function (){var statearr_29098 = state_29060;
(statearr_29098[(28)] = inst_29009);

(statearr_29098[(16)] = inst_29013__$1);

return statearr_29098;
})();
if(inst_29016){
var statearr_29099_29172 = state_29060__$1;
(statearr_29099_29172[(1)] = (32));

} else {
var statearr_29100_29173 = state_29060__$1;
(statearr_29100_29173[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (44))){
var inst_29036 = (state_29060[(21)]);
var inst_29049 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29036);
var inst_29050 = cljs.core.pr_str.call(null,inst_29049);
var inst_29051 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29050)].join('');
var inst_29052 = figwheel.client.utils.log.call(null,inst_29051);
var state_29060__$1 = state_29060;
var statearr_29101_29174 = state_29060__$1;
(statearr_29101_29174[(2)] = inst_29052);

(statearr_29101_29174[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (6))){
var inst_28954 = (state_29060[(2)]);
var state_29060__$1 = state_29060;
var statearr_29102_29175 = state_29060__$1;
(statearr_29102_29175[(2)] = inst_28954);

(statearr_29102_29175[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (28))){
var inst_28979 = (state_29060[(26)]);
var inst_29006 = (state_29060[(2)]);
var inst_29007 = cljs.core.not_empty.call(null,inst_28979);
var state_29060__$1 = (function (){var statearr_29103 = state_29060;
(statearr_29103[(29)] = inst_29006);

return statearr_29103;
})();
if(cljs.core.truth_(inst_29007)){
var statearr_29104_29176 = state_29060__$1;
(statearr_29104_29176[(1)] = (29));

} else {
var statearr_29105_29177 = state_29060__$1;
(statearr_29105_29177[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (25))){
var inst_28977 = (state_29060[(23)]);
var inst_28993 = (state_29060[(2)]);
var inst_28994 = cljs.core.not_empty.call(null,inst_28977);
var state_29060__$1 = (function (){var statearr_29106 = state_29060;
(statearr_29106[(30)] = inst_28993);

return statearr_29106;
})();
if(cljs.core.truth_(inst_28994)){
var statearr_29107_29178 = state_29060__$1;
(statearr_29107_29178[(1)] = (26));

} else {
var statearr_29108_29179 = state_29060__$1;
(statearr_29108_29179[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (34))){
var inst_29029 = (state_29060[(2)]);
var state_29060__$1 = state_29060;
if(cljs.core.truth_(inst_29029)){
var statearr_29109_29180 = state_29060__$1;
(statearr_29109_29180[(1)] = (38));

} else {
var statearr_29110_29181 = state_29060__$1;
(statearr_29110_29181[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (17))){
var state_29060__$1 = state_29060;
var statearr_29111_29182 = state_29060__$1;
(statearr_29111_29182[(2)] = recompile_dependents);

(statearr_29111_29182[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (3))){
var state_29060__$1 = state_29060;
var statearr_29112_29183 = state_29060__$1;
(statearr_29112_29183[(2)] = null);

(statearr_29112_29183[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (12))){
var inst_28950 = (state_29060[(2)]);
var state_29060__$1 = state_29060;
var statearr_29113_29184 = state_29060__$1;
(statearr_29113_29184[(2)] = inst_28950);

(statearr_29113_29184[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (2))){
var inst_28912 = (state_29060[(13)]);
var inst_28919 = cljs.core.seq.call(null,inst_28912);
var inst_28920 = inst_28919;
var inst_28921 = null;
var inst_28922 = (0);
var inst_28923 = (0);
var state_29060__$1 = (function (){var statearr_29114 = state_29060;
(statearr_29114[(7)] = inst_28921);

(statearr_29114[(8)] = inst_28920);

(statearr_29114[(9)] = inst_28923);

(statearr_29114[(10)] = inst_28922);

return statearr_29114;
})();
var statearr_29115_29185 = state_29060__$1;
(statearr_29115_29185[(2)] = null);

(statearr_29115_29185[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (23))){
var inst_28973 = (state_29060[(19)]);
var inst_28977 = (state_29060[(23)]);
var inst_28976 = (state_29060[(24)]);
var inst_28979 = (state_29060[(26)]);
var inst_28981 = (state_29060[(25)]);
var inst_28984 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28986 = (function (){var all_files = inst_28973;
var res_SINGLEQUOTE_ = inst_28976;
var res = inst_28977;
var files_not_loaded = inst_28979;
var dependencies_that_loaded = inst_28981;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28973,inst_28977,inst_28976,inst_28979,inst_28981,inst_28984,state_val_29061,c__26452__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28985){
var map__29116 = p__28985;
var map__29116__$1 = ((((!((map__29116 == null)))?(((((map__29116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29116):map__29116);
var request_url = cljs.core.get.call(null,map__29116__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28973,inst_28977,inst_28976,inst_28979,inst_28981,inst_28984,state_val_29061,c__26452__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28987 = cljs.core.reverse.call(null,inst_28981);
var inst_28988 = cljs.core.map.call(null,inst_28986,inst_28987);
var inst_28989 = cljs.core.pr_str.call(null,inst_28988);
var inst_28990 = figwheel.client.utils.log.call(null,inst_28989);
var state_29060__$1 = (function (){var statearr_29118 = state_29060;
(statearr_29118[(31)] = inst_28984);

return statearr_29118;
})();
var statearr_29119_29186 = state_29060__$1;
(statearr_29119_29186[(2)] = inst_28990);

(statearr_29119_29186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (35))){
var state_29060__$1 = state_29060;
var statearr_29120_29187 = state_29060__$1;
(statearr_29120_29187[(2)] = true);

(statearr_29120_29187[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (19))){
var inst_28963 = (state_29060[(12)]);
var inst_28969 = figwheel.client.file_reloading.expand_files.call(null,inst_28963);
var state_29060__$1 = state_29060;
var statearr_29121_29188 = state_29060__$1;
(statearr_29121_29188[(2)] = inst_28969);

(statearr_29121_29188[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (11))){
var state_29060__$1 = state_29060;
var statearr_29122_29189 = state_29060__$1;
(statearr_29122_29189[(2)] = null);

(statearr_29122_29189[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (9))){
var inst_28952 = (state_29060[(2)]);
var state_29060__$1 = state_29060;
var statearr_29123_29190 = state_29060__$1;
(statearr_29123_29190[(2)] = inst_28952);

(statearr_29123_29190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (5))){
var inst_28923 = (state_29060[(9)]);
var inst_28922 = (state_29060[(10)]);
var inst_28925 = (inst_28923 < inst_28922);
var inst_28926 = inst_28925;
var state_29060__$1 = state_29060;
if(cljs.core.truth_(inst_28926)){
var statearr_29124_29191 = state_29060__$1;
(statearr_29124_29191[(1)] = (7));

} else {
var statearr_29125_29192 = state_29060__$1;
(statearr_29125_29192[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (14))){
var inst_28933 = (state_29060[(22)]);
var inst_28942 = cljs.core.first.call(null,inst_28933);
var inst_28943 = figwheel.client.file_reloading.eval_body.call(null,inst_28942,opts);
var inst_28944 = cljs.core.next.call(null,inst_28933);
var inst_28920 = inst_28944;
var inst_28921 = null;
var inst_28922 = (0);
var inst_28923 = (0);
var state_29060__$1 = (function (){var statearr_29126 = state_29060;
(statearr_29126[(7)] = inst_28921);

(statearr_29126[(8)] = inst_28920);

(statearr_29126[(9)] = inst_28923);

(statearr_29126[(32)] = inst_28943);

(statearr_29126[(10)] = inst_28922);

return statearr_29126;
})();
var statearr_29127_29193 = state_29060__$1;
(statearr_29127_29193[(2)] = null);

(statearr_29127_29193[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (45))){
var state_29060__$1 = state_29060;
var statearr_29128_29194 = state_29060__$1;
(statearr_29128_29194[(2)] = null);

(statearr_29128_29194[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (26))){
var inst_28973 = (state_29060[(19)]);
var inst_28977 = (state_29060[(23)]);
var inst_28976 = (state_29060[(24)]);
var inst_28979 = (state_29060[(26)]);
var inst_28981 = (state_29060[(25)]);
var inst_28996 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28998 = (function (){var all_files = inst_28973;
var res_SINGLEQUOTE_ = inst_28976;
var res = inst_28977;
var files_not_loaded = inst_28979;
var dependencies_that_loaded = inst_28981;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28973,inst_28977,inst_28976,inst_28979,inst_28981,inst_28996,state_val_29061,c__26452__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28997){
var map__29129 = p__28997;
var map__29129__$1 = ((((!((map__29129 == null)))?(((((map__29129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29129):map__29129);
var namespace = cljs.core.get.call(null,map__29129__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29129__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28973,inst_28977,inst_28976,inst_28979,inst_28981,inst_28996,state_val_29061,c__26452__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28999 = cljs.core.map.call(null,inst_28998,inst_28977);
var inst_29000 = cljs.core.pr_str.call(null,inst_28999);
var inst_29001 = figwheel.client.utils.log.call(null,inst_29000);
var inst_29002 = (function (){var all_files = inst_28973;
var res_SINGLEQUOTE_ = inst_28976;
var res = inst_28977;
var files_not_loaded = inst_28979;
var dependencies_that_loaded = inst_28981;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28973,inst_28977,inst_28976,inst_28979,inst_28981,inst_28996,inst_28998,inst_28999,inst_29000,inst_29001,state_val_29061,c__26452__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28973,inst_28977,inst_28976,inst_28979,inst_28981,inst_28996,inst_28998,inst_28999,inst_29000,inst_29001,state_val_29061,c__26452__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29003 = setTimeout(inst_29002,(10));
var state_29060__$1 = (function (){var statearr_29131 = state_29060;
(statearr_29131[(33)] = inst_29001);

(statearr_29131[(34)] = inst_28996);

return statearr_29131;
})();
var statearr_29132_29195 = state_29060__$1;
(statearr_29132_29195[(2)] = inst_29003);

(statearr_29132_29195[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (16))){
var state_29060__$1 = state_29060;
var statearr_29133_29196 = state_29060__$1;
(statearr_29133_29196[(2)] = reload_dependents);

(statearr_29133_29196[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (38))){
var inst_29013 = (state_29060[(16)]);
var inst_29031 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29013);
var state_29060__$1 = state_29060;
var statearr_29134_29197 = state_29060__$1;
(statearr_29134_29197[(2)] = inst_29031);

(statearr_29134_29197[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (30))){
var state_29060__$1 = state_29060;
var statearr_29135_29198 = state_29060__$1;
(statearr_29135_29198[(2)] = null);

(statearr_29135_29198[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (10))){
var inst_28933 = (state_29060[(22)]);
var inst_28935 = cljs.core.chunked_seq_QMARK_.call(null,inst_28933);
var state_29060__$1 = state_29060;
if(inst_28935){
var statearr_29136_29199 = state_29060__$1;
(statearr_29136_29199[(1)] = (13));

} else {
var statearr_29137_29200 = state_29060__$1;
(statearr_29137_29200[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (18))){
var inst_28967 = (state_29060[(2)]);
var state_29060__$1 = state_29060;
if(cljs.core.truth_(inst_28967)){
var statearr_29138_29201 = state_29060__$1;
(statearr_29138_29201[(1)] = (19));

} else {
var statearr_29139_29202 = state_29060__$1;
(statearr_29139_29202[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (42))){
var state_29060__$1 = state_29060;
var statearr_29140_29203 = state_29060__$1;
(statearr_29140_29203[(2)] = null);

(statearr_29140_29203[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (37))){
var inst_29026 = (state_29060[(2)]);
var state_29060__$1 = state_29060;
var statearr_29141_29204 = state_29060__$1;
(statearr_29141_29204[(2)] = inst_29026);

(statearr_29141_29204[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29061 === (8))){
var inst_28920 = (state_29060[(8)]);
var inst_28933 = (state_29060[(22)]);
var inst_28933__$1 = cljs.core.seq.call(null,inst_28920);
var state_29060__$1 = (function (){var statearr_29142 = state_29060;
(statearr_29142[(22)] = inst_28933__$1);

return statearr_29142;
})();
if(inst_28933__$1){
var statearr_29143_29205 = state_29060__$1;
(statearr_29143_29205[(1)] = (10));

} else {
var statearr_29144_29206 = state_29060__$1;
(statearr_29144_29206[(1)] = (11));

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
});})(c__26452__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26362__auto__,c__26452__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26363__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26363__auto____0 = (function (){
var statearr_29145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29145[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26363__auto__);

(statearr_29145[(1)] = (1));

return statearr_29145;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26363__auto____1 = (function (state_29060){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_29060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e29146){if((e29146 instanceof Object)){
var ex__26366__auto__ = e29146;
var statearr_29147_29207 = state_29060;
(statearr_29147_29207[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29208 = state_29060;
state_29060 = G__29208;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26363__auto__ = function(state_29060){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26363__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26363__auto____1.call(this,state_29060);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26363__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26363__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26454__auto__ = (function (){var statearr_29148 = f__26453__auto__.call(null);
(statearr_29148[(6)] = c__26452__auto__);

return statearr_29148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto__,map__28905,map__28905__$1,opts,before_jsload,on_jsload,reload_dependents,map__28906,map__28906__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26452__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29211,link){
var map__29212 = p__29211;
var map__29212__$1 = ((((!((map__29212 == null)))?(((((map__29212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29212):map__29212);
var file = cljs.core.get.call(null,map__29212__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__29212,map__29212__$1,file){
return (function (p1__29209_SHARP_,p2__29210_SHARP_){
if(cljs.core._EQ_.call(null,p1__29209_SHARP_,p2__29210_SHARP_)){
return p1__29209_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__29212,map__29212__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29215){
var map__29216 = p__29215;
var map__29216__$1 = ((((!((map__29216 == null)))?(((((map__29216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29216):map__29216);
var match_length = cljs.core.get.call(null,map__29216__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29216__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29214_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29214_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29218_SHARP_,p2__29219_SHARP_){
return cljs.core.assoc.call(null,p1__29218_SHARP_,cljs.core.get.call(null,p2__29219_SHARP_,key),p2__29219_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29220 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29220);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29220);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29221,p__29222){
var map__29223 = p__29221;
var map__29223__$1 = ((((!((map__29223 == null)))?(((((map__29223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29223):map__29223);
var on_cssload = cljs.core.get.call(null,map__29223__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29224 = p__29222;
var map__29224__$1 = ((((!((map__29224 == null)))?(((((map__29224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29224):map__29224);
var files_msg = map__29224__$1;
var files = cljs.core.get.call(null,map__29224__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1552095710054
