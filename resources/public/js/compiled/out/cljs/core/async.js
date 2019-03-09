// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26512 = arguments.length;
switch (G__26512) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async26513 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26513 = (function (f,blockable,meta26514){
this.f = f;
this.blockable = blockable;
this.meta26514 = meta26514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26515,meta26514__$1){
var self__ = this;
var _26515__$1 = this;
return (new cljs.core.async.t_cljs$core$async26513(self__.f,self__.blockable,meta26514__$1));
});

cljs.core.async.t_cljs$core$async26513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26515){
var self__ = this;
var _26515__$1 = this;
return self__.meta26514;
});

cljs.core.async.t_cljs$core$async26513.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26513.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26513.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26513.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26513.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26514","meta26514",1783786507,null)], null);
});

cljs.core.async.t_cljs$core$async26513.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26513.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26513";

cljs.core.async.t_cljs$core$async26513.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26513");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26513.
 */
cljs.core.async.__GT_t_cljs$core$async26513 = (function cljs$core$async$__GT_t_cljs$core$async26513(f__$1,blockable__$1,meta26514){
return (new cljs.core.async.t_cljs$core$async26513(f__$1,blockable__$1,meta26514));
});

}

return (new cljs.core.async.t_cljs$core$async26513(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__26519 = arguments.length;
switch (G__26519) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__26522 = arguments.length;
switch (G__26522) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__26525 = arguments.length;
switch (G__26525) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26527 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26527);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26527,ret){
return (function (){
return fn1.call(null,val_26527);
});})(val_26527,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__26529 = arguments.length;
switch (G__26529) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___26531 = n;
var x_26532 = (0);
while(true){
if((x_26532 < n__4376__auto___26531)){
(a[x_26532] = (0));

var G__26533 = (x_26532 + (1));
x_26532 = G__26533;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26534 = (i + (1));
i = G__26534;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26535 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26535 = (function (flag,meta26536){
this.flag = flag;
this.meta26536 = meta26536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26537,meta26536__$1){
var self__ = this;
var _26537__$1 = this;
return (new cljs.core.async.t_cljs$core$async26535(self__.flag,meta26536__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26537){
var self__ = this;
var _26537__$1 = this;
return self__.meta26536;
});})(flag))
;

cljs.core.async.t_cljs$core$async26535.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26535.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26535.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26536","meta26536",-295074672,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26535.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26535";

cljs.core.async.t_cljs$core$async26535.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26535");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26535.
 */
cljs.core.async.__GT_t_cljs$core$async26535 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26535(flag__$1,meta26536){
return (new cljs.core.async.t_cljs$core$async26535(flag__$1,meta26536));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26535(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26538 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26538 = (function (flag,cb,meta26539){
this.flag = flag;
this.cb = cb;
this.meta26539 = meta26539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26540,meta26539__$1){
var self__ = this;
var _26540__$1 = this;
return (new cljs.core.async.t_cljs$core$async26538(self__.flag,self__.cb,meta26539__$1));
});

cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26540){
var self__ = this;
var _26540__$1 = this;
return self__.meta26539;
});

cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26538.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26539","meta26539",1642457799,null)], null);
});

cljs.core.async.t_cljs$core$async26538.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26538";

cljs.core.async.t_cljs$core$async26538.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26538");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26538.
 */
cljs.core.async.__GT_t_cljs$core$async26538 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26538(flag__$1,cb__$1,meta26539){
return (new cljs.core.async.t_cljs$core$async26538(flag__$1,cb__$1,meta26539));
});

}

return (new cljs.core.async.t_cljs$core$async26538(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26541_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26541_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26542_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26542_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26543 = (i + (1));
i = G__26543;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26549 = arguments.length;
var i__4500__auto___26550 = (0);
while(true){
if((i__4500__auto___26550 < len__4499__auto___26549)){
args__4502__auto__.push((arguments[i__4500__auto___26550]));

var G__26551 = (i__4500__auto___26550 + (1));
i__4500__auto___26550 = G__26551;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26546){
var map__26547 = p__26546;
var map__26547__$1 = ((((!((map__26547 == null)))?(((((map__26547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26547):map__26547);
var opts = map__26547__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26544){
var G__26545 = cljs.core.first.call(null,seq26544);
var seq26544__$1 = cljs.core.next.call(null,seq26544);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26545,seq26544__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__26553 = arguments.length;
switch (G__26553) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26452__auto___26599 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto___26599){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto___26599){
return (function (state_26577){
var state_val_26578 = (state_26577[(1)]);
if((state_val_26578 === (7))){
var inst_26573 = (state_26577[(2)]);
var state_26577__$1 = state_26577;
var statearr_26579_26600 = state_26577__$1;
(statearr_26579_26600[(2)] = inst_26573);

(statearr_26579_26600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (1))){
var state_26577__$1 = state_26577;
var statearr_26580_26601 = state_26577__$1;
(statearr_26580_26601[(2)] = null);

(statearr_26580_26601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (4))){
var inst_26556 = (state_26577[(7)]);
var inst_26556__$1 = (state_26577[(2)]);
var inst_26557 = (inst_26556__$1 == null);
var state_26577__$1 = (function (){var statearr_26581 = state_26577;
(statearr_26581[(7)] = inst_26556__$1);

return statearr_26581;
})();
if(cljs.core.truth_(inst_26557)){
var statearr_26582_26602 = state_26577__$1;
(statearr_26582_26602[(1)] = (5));

} else {
var statearr_26583_26603 = state_26577__$1;
(statearr_26583_26603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (13))){
var state_26577__$1 = state_26577;
var statearr_26584_26604 = state_26577__$1;
(statearr_26584_26604[(2)] = null);

(statearr_26584_26604[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (6))){
var inst_26556 = (state_26577[(7)]);
var state_26577__$1 = state_26577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26577__$1,(11),to,inst_26556);
} else {
if((state_val_26578 === (3))){
var inst_26575 = (state_26577[(2)]);
var state_26577__$1 = state_26577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26577__$1,inst_26575);
} else {
if((state_val_26578 === (12))){
var state_26577__$1 = state_26577;
var statearr_26585_26605 = state_26577__$1;
(statearr_26585_26605[(2)] = null);

(statearr_26585_26605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (2))){
var state_26577__$1 = state_26577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26577__$1,(4),from);
} else {
if((state_val_26578 === (11))){
var inst_26566 = (state_26577[(2)]);
var state_26577__$1 = state_26577;
if(cljs.core.truth_(inst_26566)){
var statearr_26586_26606 = state_26577__$1;
(statearr_26586_26606[(1)] = (12));

} else {
var statearr_26587_26607 = state_26577__$1;
(statearr_26587_26607[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (9))){
var state_26577__$1 = state_26577;
var statearr_26588_26608 = state_26577__$1;
(statearr_26588_26608[(2)] = null);

(statearr_26588_26608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (5))){
var state_26577__$1 = state_26577;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26589_26609 = state_26577__$1;
(statearr_26589_26609[(1)] = (8));

} else {
var statearr_26590_26610 = state_26577__$1;
(statearr_26590_26610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (14))){
var inst_26571 = (state_26577[(2)]);
var state_26577__$1 = state_26577;
var statearr_26591_26611 = state_26577__$1;
(statearr_26591_26611[(2)] = inst_26571);

(statearr_26591_26611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (10))){
var inst_26563 = (state_26577[(2)]);
var state_26577__$1 = state_26577;
var statearr_26592_26612 = state_26577__$1;
(statearr_26592_26612[(2)] = inst_26563);

(statearr_26592_26612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (8))){
var inst_26560 = cljs.core.async.close_BANG_.call(null,to);
var state_26577__$1 = state_26577;
var statearr_26593_26613 = state_26577__$1;
(statearr_26593_26613[(2)] = inst_26560);

(statearr_26593_26613[(1)] = (10));


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
});})(c__26452__auto___26599))
;
return ((function (switch__26362__auto__,c__26452__auto___26599){
return (function() {
var cljs$core$async$state_machine__26363__auto__ = null;
var cljs$core$async$state_machine__26363__auto____0 = (function (){
var statearr_26594 = [null,null,null,null,null,null,null,null];
(statearr_26594[(0)] = cljs$core$async$state_machine__26363__auto__);

(statearr_26594[(1)] = (1));

return statearr_26594;
});
var cljs$core$async$state_machine__26363__auto____1 = (function (state_26577){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_26577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e26595){if((e26595 instanceof Object)){
var ex__26366__auto__ = e26595;
var statearr_26596_26614 = state_26577;
(statearr_26596_26614[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26615 = state_26577;
state_26577 = G__26615;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
cljs$core$async$state_machine__26363__auto__ = function(state_26577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26363__auto____1.call(this,state_26577);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26363__auto____0;
cljs$core$async$state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26363__auto____1;
return cljs$core$async$state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto___26599))
})();
var state__26454__auto__ = (function (){var statearr_26597 = f__26453__auto__.call(null);
(statearr_26597[(6)] = c__26452__auto___26599);

return statearr_26597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto___26599))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26616){
var vec__26617 = p__26616;
var v = cljs.core.nth.call(null,vec__26617,(0),null);
var p = cljs.core.nth.call(null,vec__26617,(1),null);
var job = vec__26617;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26452__auto___26788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto___26788,res,vec__26617,v,p,job,jobs,results){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto___26788,res,vec__26617,v,p,job,jobs,results){
return (function (state_26624){
var state_val_26625 = (state_26624[(1)]);
if((state_val_26625 === (1))){
var state_26624__$1 = state_26624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26624__$1,(2),res,v);
} else {
if((state_val_26625 === (2))){
var inst_26621 = (state_26624[(2)]);
var inst_26622 = cljs.core.async.close_BANG_.call(null,res);
var state_26624__$1 = (function (){var statearr_26626 = state_26624;
(statearr_26626[(7)] = inst_26621);

return statearr_26626;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26624__$1,inst_26622);
} else {
return null;
}
}
});})(c__26452__auto___26788,res,vec__26617,v,p,job,jobs,results))
;
return ((function (switch__26362__auto__,c__26452__auto___26788,res,vec__26617,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____0 = (function (){
var statearr_26627 = [null,null,null,null,null,null,null,null];
(statearr_26627[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__);

(statearr_26627[(1)] = (1));

return statearr_26627;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____1 = (function (state_26624){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_26624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e26628){if((e26628 instanceof Object)){
var ex__26366__auto__ = e26628;
var statearr_26629_26789 = state_26624;
(statearr_26629_26789[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26790 = state_26624;
state_26624 = G__26790;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__ = function(state_26624){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____1.call(this,state_26624);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto___26788,res,vec__26617,v,p,job,jobs,results))
})();
var state__26454__auto__ = (function (){var statearr_26630 = f__26453__auto__.call(null);
(statearr_26630[(6)] = c__26452__auto___26788);

return statearr_26630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto___26788,res,vec__26617,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26631){
var vec__26632 = p__26631;
var v = cljs.core.nth.call(null,vec__26632,(0),null);
var p = cljs.core.nth.call(null,vec__26632,(1),null);
var job = vec__26632;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___26791 = n;
var __26792 = (0);
while(true){
if((__26792 < n__4376__auto___26791)){
var G__26635_26793 = type;
var G__26635_26794__$1 = (((G__26635_26793 instanceof cljs.core.Keyword))?G__26635_26793.fqn:null);
switch (G__26635_26794__$1) {
case "compute":
var c__26452__auto___26796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26792,c__26452__auto___26796,G__26635_26793,G__26635_26794__$1,n__4376__auto___26791,jobs,results,process,async){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (__26792,c__26452__auto___26796,G__26635_26793,G__26635_26794__$1,n__4376__auto___26791,jobs,results,process,async){
return (function (state_26648){
var state_val_26649 = (state_26648[(1)]);
if((state_val_26649 === (1))){
var state_26648__$1 = state_26648;
var statearr_26650_26797 = state_26648__$1;
(statearr_26650_26797[(2)] = null);

(statearr_26650_26797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (2))){
var state_26648__$1 = state_26648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26648__$1,(4),jobs);
} else {
if((state_val_26649 === (3))){
var inst_26646 = (state_26648[(2)]);
var state_26648__$1 = state_26648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26648__$1,inst_26646);
} else {
if((state_val_26649 === (4))){
var inst_26638 = (state_26648[(2)]);
var inst_26639 = process.call(null,inst_26638);
var state_26648__$1 = state_26648;
if(cljs.core.truth_(inst_26639)){
var statearr_26651_26798 = state_26648__$1;
(statearr_26651_26798[(1)] = (5));

} else {
var statearr_26652_26799 = state_26648__$1;
(statearr_26652_26799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (5))){
var state_26648__$1 = state_26648;
var statearr_26653_26800 = state_26648__$1;
(statearr_26653_26800[(2)] = null);

(statearr_26653_26800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (6))){
var state_26648__$1 = state_26648;
var statearr_26654_26801 = state_26648__$1;
(statearr_26654_26801[(2)] = null);

(statearr_26654_26801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26649 === (7))){
var inst_26644 = (state_26648[(2)]);
var state_26648__$1 = state_26648;
var statearr_26655_26802 = state_26648__$1;
(statearr_26655_26802[(2)] = inst_26644);

(statearr_26655_26802[(1)] = (3));


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
});})(__26792,c__26452__auto___26796,G__26635_26793,G__26635_26794__$1,n__4376__auto___26791,jobs,results,process,async))
;
return ((function (__26792,switch__26362__auto__,c__26452__auto___26796,G__26635_26793,G__26635_26794__$1,n__4376__auto___26791,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____0 = (function (){
var statearr_26656 = [null,null,null,null,null,null,null];
(statearr_26656[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__);

(statearr_26656[(1)] = (1));

return statearr_26656;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____1 = (function (state_26648){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_26648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e26657){if((e26657 instanceof Object)){
var ex__26366__auto__ = e26657;
var statearr_26658_26803 = state_26648;
(statearr_26658_26803[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26804 = state_26648;
state_26648 = G__26804;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__ = function(state_26648){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____1.call(this,state_26648);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__;
})()
;})(__26792,switch__26362__auto__,c__26452__auto___26796,G__26635_26793,G__26635_26794__$1,n__4376__auto___26791,jobs,results,process,async))
})();
var state__26454__auto__ = (function (){var statearr_26659 = f__26453__auto__.call(null);
(statearr_26659[(6)] = c__26452__auto___26796);

return statearr_26659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(__26792,c__26452__auto___26796,G__26635_26793,G__26635_26794__$1,n__4376__auto___26791,jobs,results,process,async))
);


break;
case "async":
var c__26452__auto___26805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26792,c__26452__auto___26805,G__26635_26793,G__26635_26794__$1,n__4376__auto___26791,jobs,results,process,async){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (__26792,c__26452__auto___26805,G__26635_26793,G__26635_26794__$1,n__4376__auto___26791,jobs,results,process,async){
return (function (state_26672){
var state_val_26673 = (state_26672[(1)]);
if((state_val_26673 === (1))){
var state_26672__$1 = state_26672;
var statearr_26674_26806 = state_26672__$1;
(statearr_26674_26806[(2)] = null);

(statearr_26674_26806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (2))){
var state_26672__$1 = state_26672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26672__$1,(4),jobs);
} else {
if((state_val_26673 === (3))){
var inst_26670 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26672__$1,inst_26670);
} else {
if((state_val_26673 === (4))){
var inst_26662 = (state_26672[(2)]);
var inst_26663 = async.call(null,inst_26662);
var state_26672__$1 = state_26672;
if(cljs.core.truth_(inst_26663)){
var statearr_26675_26807 = state_26672__$1;
(statearr_26675_26807[(1)] = (5));

} else {
var statearr_26676_26808 = state_26672__$1;
(statearr_26676_26808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (5))){
var state_26672__$1 = state_26672;
var statearr_26677_26809 = state_26672__$1;
(statearr_26677_26809[(2)] = null);

(statearr_26677_26809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (6))){
var state_26672__$1 = state_26672;
var statearr_26678_26810 = state_26672__$1;
(statearr_26678_26810[(2)] = null);

(statearr_26678_26810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26673 === (7))){
var inst_26668 = (state_26672[(2)]);
var state_26672__$1 = state_26672;
var statearr_26679_26811 = state_26672__$1;
(statearr_26679_26811[(2)] = inst_26668);

(statearr_26679_26811[(1)] = (3));


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
});})(__26792,c__26452__auto___26805,G__26635_26793,G__26635_26794__$1,n__4376__auto___26791,jobs,results,process,async))
;
return ((function (__26792,switch__26362__auto__,c__26452__auto___26805,G__26635_26793,G__26635_26794__$1,n__4376__auto___26791,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____0 = (function (){
var statearr_26680 = [null,null,null,null,null,null,null];
(statearr_26680[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__);

(statearr_26680[(1)] = (1));

return statearr_26680;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____1 = (function (state_26672){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_26672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e26681){if((e26681 instanceof Object)){
var ex__26366__auto__ = e26681;
var statearr_26682_26812 = state_26672;
(statearr_26682_26812[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26813 = state_26672;
state_26672 = G__26813;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__ = function(state_26672){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____1.call(this,state_26672);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__;
})()
;})(__26792,switch__26362__auto__,c__26452__auto___26805,G__26635_26793,G__26635_26794__$1,n__4376__auto___26791,jobs,results,process,async))
})();
var state__26454__auto__ = (function (){var statearr_26683 = f__26453__auto__.call(null);
(statearr_26683[(6)] = c__26452__auto___26805);

return statearr_26683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(__26792,c__26452__auto___26805,G__26635_26793,G__26635_26794__$1,n__4376__auto___26791,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26635_26794__$1)].join('')));

}

var G__26814 = (__26792 + (1));
__26792 = G__26814;
continue;
} else {
}
break;
}

var c__26452__auto___26815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto___26815,jobs,results,process,async){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto___26815,jobs,results,process,async){
return (function (state_26705){
var state_val_26706 = (state_26705[(1)]);
if((state_val_26706 === (1))){
var state_26705__$1 = state_26705;
var statearr_26707_26816 = state_26705__$1;
(statearr_26707_26816[(2)] = null);

(statearr_26707_26816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26706 === (2))){
var state_26705__$1 = state_26705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26705__$1,(4),from);
} else {
if((state_val_26706 === (3))){
var inst_26703 = (state_26705[(2)]);
var state_26705__$1 = state_26705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26705__$1,inst_26703);
} else {
if((state_val_26706 === (4))){
var inst_26686 = (state_26705[(7)]);
var inst_26686__$1 = (state_26705[(2)]);
var inst_26687 = (inst_26686__$1 == null);
var state_26705__$1 = (function (){var statearr_26708 = state_26705;
(statearr_26708[(7)] = inst_26686__$1);

return statearr_26708;
})();
if(cljs.core.truth_(inst_26687)){
var statearr_26709_26817 = state_26705__$1;
(statearr_26709_26817[(1)] = (5));

} else {
var statearr_26710_26818 = state_26705__$1;
(statearr_26710_26818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26706 === (5))){
var inst_26689 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26705__$1 = state_26705;
var statearr_26711_26819 = state_26705__$1;
(statearr_26711_26819[(2)] = inst_26689);

(statearr_26711_26819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26706 === (6))){
var inst_26691 = (state_26705[(8)]);
var inst_26686 = (state_26705[(7)]);
var inst_26691__$1 = cljs.core.async.chan.call(null,(1));
var inst_26692 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26693 = [inst_26686,inst_26691__$1];
var inst_26694 = (new cljs.core.PersistentVector(null,2,(5),inst_26692,inst_26693,null));
var state_26705__$1 = (function (){var statearr_26712 = state_26705;
(statearr_26712[(8)] = inst_26691__$1);

return statearr_26712;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26705__$1,(8),jobs,inst_26694);
} else {
if((state_val_26706 === (7))){
var inst_26701 = (state_26705[(2)]);
var state_26705__$1 = state_26705;
var statearr_26713_26820 = state_26705__$1;
(statearr_26713_26820[(2)] = inst_26701);

(statearr_26713_26820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26706 === (8))){
var inst_26691 = (state_26705[(8)]);
var inst_26696 = (state_26705[(2)]);
var state_26705__$1 = (function (){var statearr_26714 = state_26705;
(statearr_26714[(9)] = inst_26696);

return statearr_26714;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26705__$1,(9),results,inst_26691);
} else {
if((state_val_26706 === (9))){
var inst_26698 = (state_26705[(2)]);
var state_26705__$1 = (function (){var statearr_26715 = state_26705;
(statearr_26715[(10)] = inst_26698);

return statearr_26715;
})();
var statearr_26716_26821 = state_26705__$1;
(statearr_26716_26821[(2)] = null);

(statearr_26716_26821[(1)] = (2));


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
});})(c__26452__auto___26815,jobs,results,process,async))
;
return ((function (switch__26362__auto__,c__26452__auto___26815,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____0 = (function (){
var statearr_26717 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26717[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__);

(statearr_26717[(1)] = (1));

return statearr_26717;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____1 = (function (state_26705){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_26705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e26718){if((e26718 instanceof Object)){
var ex__26366__auto__ = e26718;
var statearr_26719_26822 = state_26705;
(statearr_26719_26822[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26823 = state_26705;
state_26705 = G__26823;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__ = function(state_26705){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____1.call(this,state_26705);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto___26815,jobs,results,process,async))
})();
var state__26454__auto__ = (function (){var statearr_26720 = f__26453__auto__.call(null);
(statearr_26720[(6)] = c__26452__auto___26815);

return statearr_26720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto___26815,jobs,results,process,async))
);


var c__26452__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto__,jobs,results,process,async){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto__,jobs,results,process,async){
return (function (state_26758){
var state_val_26759 = (state_26758[(1)]);
if((state_val_26759 === (7))){
var inst_26754 = (state_26758[(2)]);
var state_26758__$1 = state_26758;
var statearr_26760_26824 = state_26758__$1;
(statearr_26760_26824[(2)] = inst_26754);

(statearr_26760_26824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (20))){
var state_26758__$1 = state_26758;
var statearr_26761_26825 = state_26758__$1;
(statearr_26761_26825[(2)] = null);

(statearr_26761_26825[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (1))){
var state_26758__$1 = state_26758;
var statearr_26762_26826 = state_26758__$1;
(statearr_26762_26826[(2)] = null);

(statearr_26762_26826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (4))){
var inst_26723 = (state_26758[(7)]);
var inst_26723__$1 = (state_26758[(2)]);
var inst_26724 = (inst_26723__$1 == null);
var state_26758__$1 = (function (){var statearr_26763 = state_26758;
(statearr_26763[(7)] = inst_26723__$1);

return statearr_26763;
})();
if(cljs.core.truth_(inst_26724)){
var statearr_26764_26827 = state_26758__$1;
(statearr_26764_26827[(1)] = (5));

} else {
var statearr_26765_26828 = state_26758__$1;
(statearr_26765_26828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (15))){
var inst_26736 = (state_26758[(8)]);
var state_26758__$1 = state_26758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26758__$1,(18),to,inst_26736);
} else {
if((state_val_26759 === (21))){
var inst_26749 = (state_26758[(2)]);
var state_26758__$1 = state_26758;
var statearr_26766_26829 = state_26758__$1;
(statearr_26766_26829[(2)] = inst_26749);

(statearr_26766_26829[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (13))){
var inst_26751 = (state_26758[(2)]);
var state_26758__$1 = (function (){var statearr_26767 = state_26758;
(statearr_26767[(9)] = inst_26751);

return statearr_26767;
})();
var statearr_26768_26830 = state_26758__$1;
(statearr_26768_26830[(2)] = null);

(statearr_26768_26830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (6))){
var inst_26723 = (state_26758[(7)]);
var state_26758__$1 = state_26758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26758__$1,(11),inst_26723);
} else {
if((state_val_26759 === (17))){
var inst_26744 = (state_26758[(2)]);
var state_26758__$1 = state_26758;
if(cljs.core.truth_(inst_26744)){
var statearr_26769_26831 = state_26758__$1;
(statearr_26769_26831[(1)] = (19));

} else {
var statearr_26770_26832 = state_26758__$1;
(statearr_26770_26832[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (3))){
var inst_26756 = (state_26758[(2)]);
var state_26758__$1 = state_26758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26758__$1,inst_26756);
} else {
if((state_val_26759 === (12))){
var inst_26733 = (state_26758[(10)]);
var state_26758__$1 = state_26758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26758__$1,(14),inst_26733);
} else {
if((state_val_26759 === (2))){
var state_26758__$1 = state_26758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26758__$1,(4),results);
} else {
if((state_val_26759 === (19))){
var state_26758__$1 = state_26758;
var statearr_26771_26833 = state_26758__$1;
(statearr_26771_26833[(2)] = null);

(statearr_26771_26833[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (11))){
var inst_26733 = (state_26758[(2)]);
var state_26758__$1 = (function (){var statearr_26772 = state_26758;
(statearr_26772[(10)] = inst_26733);

return statearr_26772;
})();
var statearr_26773_26834 = state_26758__$1;
(statearr_26773_26834[(2)] = null);

(statearr_26773_26834[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (9))){
var state_26758__$1 = state_26758;
var statearr_26774_26835 = state_26758__$1;
(statearr_26774_26835[(2)] = null);

(statearr_26774_26835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (5))){
var state_26758__$1 = state_26758;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26775_26836 = state_26758__$1;
(statearr_26775_26836[(1)] = (8));

} else {
var statearr_26776_26837 = state_26758__$1;
(statearr_26776_26837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (14))){
var inst_26738 = (state_26758[(11)]);
var inst_26736 = (state_26758[(8)]);
var inst_26736__$1 = (state_26758[(2)]);
var inst_26737 = (inst_26736__$1 == null);
var inst_26738__$1 = cljs.core.not.call(null,inst_26737);
var state_26758__$1 = (function (){var statearr_26777 = state_26758;
(statearr_26777[(11)] = inst_26738__$1);

(statearr_26777[(8)] = inst_26736__$1);

return statearr_26777;
})();
if(inst_26738__$1){
var statearr_26778_26838 = state_26758__$1;
(statearr_26778_26838[(1)] = (15));

} else {
var statearr_26779_26839 = state_26758__$1;
(statearr_26779_26839[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (16))){
var inst_26738 = (state_26758[(11)]);
var state_26758__$1 = state_26758;
var statearr_26780_26840 = state_26758__$1;
(statearr_26780_26840[(2)] = inst_26738);

(statearr_26780_26840[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (10))){
var inst_26730 = (state_26758[(2)]);
var state_26758__$1 = state_26758;
var statearr_26781_26841 = state_26758__$1;
(statearr_26781_26841[(2)] = inst_26730);

(statearr_26781_26841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (18))){
var inst_26741 = (state_26758[(2)]);
var state_26758__$1 = state_26758;
var statearr_26782_26842 = state_26758__$1;
(statearr_26782_26842[(2)] = inst_26741);

(statearr_26782_26842[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26759 === (8))){
var inst_26727 = cljs.core.async.close_BANG_.call(null,to);
var state_26758__$1 = state_26758;
var statearr_26783_26843 = state_26758__$1;
(statearr_26783_26843[(2)] = inst_26727);

(statearr_26783_26843[(1)] = (10));


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
});})(c__26452__auto__,jobs,results,process,async))
;
return ((function (switch__26362__auto__,c__26452__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____0 = (function (){
var statearr_26784 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26784[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__);

(statearr_26784[(1)] = (1));

return statearr_26784;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____1 = (function (state_26758){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_26758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e26785){if((e26785 instanceof Object)){
var ex__26366__auto__ = e26785;
var statearr_26786_26844 = state_26758;
(statearr_26786_26844[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26845 = state_26758;
state_26758 = G__26845;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__ = function(state_26758){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____1.call(this,state_26758);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26363__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto__,jobs,results,process,async))
})();
var state__26454__auto__ = (function (){var statearr_26787 = f__26453__auto__.call(null);
(statearr_26787[(6)] = c__26452__auto__);

return statearr_26787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto__,jobs,results,process,async))
);

return c__26452__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__26847 = arguments.length;
switch (G__26847) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__26850 = arguments.length;
switch (G__26850) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__26853 = arguments.length;
switch (G__26853) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26452__auto___26902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto___26902,tc,fc){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto___26902,tc,fc){
return (function (state_26879){
var state_val_26880 = (state_26879[(1)]);
if((state_val_26880 === (7))){
var inst_26875 = (state_26879[(2)]);
var state_26879__$1 = state_26879;
var statearr_26881_26903 = state_26879__$1;
(statearr_26881_26903[(2)] = inst_26875);

(statearr_26881_26903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (1))){
var state_26879__$1 = state_26879;
var statearr_26882_26904 = state_26879__$1;
(statearr_26882_26904[(2)] = null);

(statearr_26882_26904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (4))){
var inst_26856 = (state_26879[(7)]);
var inst_26856__$1 = (state_26879[(2)]);
var inst_26857 = (inst_26856__$1 == null);
var state_26879__$1 = (function (){var statearr_26883 = state_26879;
(statearr_26883[(7)] = inst_26856__$1);

return statearr_26883;
})();
if(cljs.core.truth_(inst_26857)){
var statearr_26884_26905 = state_26879__$1;
(statearr_26884_26905[(1)] = (5));

} else {
var statearr_26885_26906 = state_26879__$1;
(statearr_26885_26906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (13))){
var state_26879__$1 = state_26879;
var statearr_26886_26907 = state_26879__$1;
(statearr_26886_26907[(2)] = null);

(statearr_26886_26907[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (6))){
var inst_26856 = (state_26879[(7)]);
var inst_26862 = p.call(null,inst_26856);
var state_26879__$1 = state_26879;
if(cljs.core.truth_(inst_26862)){
var statearr_26887_26908 = state_26879__$1;
(statearr_26887_26908[(1)] = (9));

} else {
var statearr_26888_26909 = state_26879__$1;
(statearr_26888_26909[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (3))){
var inst_26877 = (state_26879[(2)]);
var state_26879__$1 = state_26879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26879__$1,inst_26877);
} else {
if((state_val_26880 === (12))){
var state_26879__$1 = state_26879;
var statearr_26889_26910 = state_26879__$1;
(statearr_26889_26910[(2)] = null);

(statearr_26889_26910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (2))){
var state_26879__$1 = state_26879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26879__$1,(4),ch);
} else {
if((state_val_26880 === (11))){
var inst_26856 = (state_26879[(7)]);
var inst_26866 = (state_26879[(2)]);
var state_26879__$1 = state_26879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26879__$1,(8),inst_26866,inst_26856);
} else {
if((state_val_26880 === (9))){
var state_26879__$1 = state_26879;
var statearr_26890_26911 = state_26879__$1;
(statearr_26890_26911[(2)] = tc);

(statearr_26890_26911[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (5))){
var inst_26859 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26860 = cljs.core.async.close_BANG_.call(null,fc);
var state_26879__$1 = (function (){var statearr_26891 = state_26879;
(statearr_26891[(8)] = inst_26859);

return statearr_26891;
})();
var statearr_26892_26912 = state_26879__$1;
(statearr_26892_26912[(2)] = inst_26860);

(statearr_26892_26912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (14))){
var inst_26873 = (state_26879[(2)]);
var state_26879__$1 = state_26879;
var statearr_26893_26913 = state_26879__$1;
(statearr_26893_26913[(2)] = inst_26873);

(statearr_26893_26913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (10))){
var state_26879__$1 = state_26879;
var statearr_26894_26914 = state_26879__$1;
(statearr_26894_26914[(2)] = fc);

(statearr_26894_26914[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (8))){
var inst_26868 = (state_26879[(2)]);
var state_26879__$1 = state_26879;
if(cljs.core.truth_(inst_26868)){
var statearr_26895_26915 = state_26879__$1;
(statearr_26895_26915[(1)] = (12));

} else {
var statearr_26896_26916 = state_26879__$1;
(statearr_26896_26916[(1)] = (13));

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
});})(c__26452__auto___26902,tc,fc))
;
return ((function (switch__26362__auto__,c__26452__auto___26902,tc,fc){
return (function() {
var cljs$core$async$state_machine__26363__auto__ = null;
var cljs$core$async$state_machine__26363__auto____0 = (function (){
var statearr_26897 = [null,null,null,null,null,null,null,null,null];
(statearr_26897[(0)] = cljs$core$async$state_machine__26363__auto__);

(statearr_26897[(1)] = (1));

return statearr_26897;
});
var cljs$core$async$state_machine__26363__auto____1 = (function (state_26879){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_26879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e26898){if((e26898 instanceof Object)){
var ex__26366__auto__ = e26898;
var statearr_26899_26917 = state_26879;
(statearr_26899_26917[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26918 = state_26879;
state_26879 = G__26918;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
cljs$core$async$state_machine__26363__auto__ = function(state_26879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26363__auto____1.call(this,state_26879);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26363__auto____0;
cljs$core$async$state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26363__auto____1;
return cljs$core$async$state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto___26902,tc,fc))
})();
var state__26454__auto__ = (function (){var statearr_26900 = f__26453__auto__.call(null);
(statearr_26900[(6)] = c__26452__auto___26902);

return statearr_26900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto___26902,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26452__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto__){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto__){
return (function (state_26939){
var state_val_26940 = (state_26939[(1)]);
if((state_val_26940 === (7))){
var inst_26935 = (state_26939[(2)]);
var state_26939__$1 = state_26939;
var statearr_26941_26959 = state_26939__$1;
(statearr_26941_26959[(2)] = inst_26935);

(statearr_26941_26959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26940 === (1))){
var inst_26919 = init;
var state_26939__$1 = (function (){var statearr_26942 = state_26939;
(statearr_26942[(7)] = inst_26919);

return statearr_26942;
})();
var statearr_26943_26960 = state_26939__$1;
(statearr_26943_26960[(2)] = null);

(statearr_26943_26960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26940 === (4))){
var inst_26922 = (state_26939[(8)]);
var inst_26922__$1 = (state_26939[(2)]);
var inst_26923 = (inst_26922__$1 == null);
var state_26939__$1 = (function (){var statearr_26944 = state_26939;
(statearr_26944[(8)] = inst_26922__$1);

return statearr_26944;
})();
if(cljs.core.truth_(inst_26923)){
var statearr_26945_26961 = state_26939__$1;
(statearr_26945_26961[(1)] = (5));

} else {
var statearr_26946_26962 = state_26939__$1;
(statearr_26946_26962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26940 === (6))){
var inst_26926 = (state_26939[(9)]);
var inst_26919 = (state_26939[(7)]);
var inst_26922 = (state_26939[(8)]);
var inst_26926__$1 = f.call(null,inst_26919,inst_26922);
var inst_26927 = cljs.core.reduced_QMARK_.call(null,inst_26926__$1);
var state_26939__$1 = (function (){var statearr_26947 = state_26939;
(statearr_26947[(9)] = inst_26926__$1);

return statearr_26947;
})();
if(inst_26927){
var statearr_26948_26963 = state_26939__$1;
(statearr_26948_26963[(1)] = (8));

} else {
var statearr_26949_26964 = state_26939__$1;
(statearr_26949_26964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26940 === (3))){
var inst_26937 = (state_26939[(2)]);
var state_26939__$1 = state_26939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26939__$1,inst_26937);
} else {
if((state_val_26940 === (2))){
var state_26939__$1 = state_26939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26939__$1,(4),ch);
} else {
if((state_val_26940 === (9))){
var inst_26926 = (state_26939[(9)]);
var inst_26919 = inst_26926;
var state_26939__$1 = (function (){var statearr_26950 = state_26939;
(statearr_26950[(7)] = inst_26919);

return statearr_26950;
})();
var statearr_26951_26965 = state_26939__$1;
(statearr_26951_26965[(2)] = null);

(statearr_26951_26965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26940 === (5))){
var inst_26919 = (state_26939[(7)]);
var state_26939__$1 = state_26939;
var statearr_26952_26966 = state_26939__$1;
(statearr_26952_26966[(2)] = inst_26919);

(statearr_26952_26966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26940 === (10))){
var inst_26933 = (state_26939[(2)]);
var state_26939__$1 = state_26939;
var statearr_26953_26967 = state_26939__$1;
(statearr_26953_26967[(2)] = inst_26933);

(statearr_26953_26967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26940 === (8))){
var inst_26926 = (state_26939[(9)]);
var inst_26929 = cljs.core.deref.call(null,inst_26926);
var state_26939__$1 = state_26939;
var statearr_26954_26968 = state_26939__$1;
(statearr_26954_26968[(2)] = inst_26929);

(statearr_26954_26968[(1)] = (10));


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
});})(c__26452__auto__))
;
return ((function (switch__26362__auto__,c__26452__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26363__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26363__auto____0 = (function (){
var statearr_26955 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26955[(0)] = cljs$core$async$reduce_$_state_machine__26363__auto__);

(statearr_26955[(1)] = (1));

return statearr_26955;
});
var cljs$core$async$reduce_$_state_machine__26363__auto____1 = (function (state_26939){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_26939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e26956){if((e26956 instanceof Object)){
var ex__26366__auto__ = e26956;
var statearr_26957_26969 = state_26939;
(statearr_26957_26969[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26970 = state_26939;
state_26939 = G__26970;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26363__auto__ = function(state_26939){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26363__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26363__auto____1.call(this,state_26939);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26363__auto____0;
cljs$core$async$reduce_$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26363__auto____1;
return cljs$core$async$reduce_$_state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto__))
})();
var state__26454__auto__ = (function (){var statearr_26958 = f__26453__auto__.call(null);
(statearr_26958[(6)] = c__26452__auto__);

return statearr_26958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto__))
);

return c__26452__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26452__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto__,f__$1){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto__,f__$1){
return (function (state_26976){
var state_val_26977 = (state_26976[(1)]);
if((state_val_26977 === (1))){
var inst_26971 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26976__$1 = state_26976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26976__$1,(2),inst_26971);
} else {
if((state_val_26977 === (2))){
var inst_26973 = (state_26976[(2)]);
var inst_26974 = f__$1.call(null,inst_26973);
var state_26976__$1 = state_26976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26976__$1,inst_26974);
} else {
return null;
}
}
});})(c__26452__auto__,f__$1))
;
return ((function (switch__26362__auto__,c__26452__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26363__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26363__auto____0 = (function (){
var statearr_26978 = [null,null,null,null,null,null,null];
(statearr_26978[(0)] = cljs$core$async$transduce_$_state_machine__26363__auto__);

(statearr_26978[(1)] = (1));

return statearr_26978;
});
var cljs$core$async$transduce_$_state_machine__26363__auto____1 = (function (state_26976){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_26976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e26979){if((e26979 instanceof Object)){
var ex__26366__auto__ = e26979;
var statearr_26980_26982 = state_26976;
(statearr_26980_26982[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26983 = state_26976;
state_26976 = G__26983;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26363__auto__ = function(state_26976){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26363__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26363__auto____1.call(this,state_26976);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26363__auto____0;
cljs$core$async$transduce_$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26363__auto____1;
return cljs$core$async$transduce_$_state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto__,f__$1))
})();
var state__26454__auto__ = (function (){var statearr_26981 = f__26453__auto__.call(null);
(statearr_26981[(6)] = c__26452__auto__);

return statearr_26981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto__,f__$1))
);

return c__26452__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__26985 = arguments.length;
switch (G__26985) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26452__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto__){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto__){
return (function (state_27010){
var state_val_27011 = (state_27010[(1)]);
if((state_val_27011 === (7))){
var inst_26992 = (state_27010[(2)]);
var state_27010__$1 = state_27010;
var statearr_27012_27033 = state_27010__$1;
(statearr_27012_27033[(2)] = inst_26992);

(statearr_27012_27033[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (1))){
var inst_26986 = cljs.core.seq.call(null,coll);
var inst_26987 = inst_26986;
var state_27010__$1 = (function (){var statearr_27013 = state_27010;
(statearr_27013[(7)] = inst_26987);

return statearr_27013;
})();
var statearr_27014_27034 = state_27010__$1;
(statearr_27014_27034[(2)] = null);

(statearr_27014_27034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (4))){
var inst_26987 = (state_27010[(7)]);
var inst_26990 = cljs.core.first.call(null,inst_26987);
var state_27010__$1 = state_27010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27010__$1,(7),ch,inst_26990);
} else {
if((state_val_27011 === (13))){
var inst_27004 = (state_27010[(2)]);
var state_27010__$1 = state_27010;
var statearr_27015_27035 = state_27010__$1;
(statearr_27015_27035[(2)] = inst_27004);

(statearr_27015_27035[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (6))){
var inst_26995 = (state_27010[(2)]);
var state_27010__$1 = state_27010;
if(cljs.core.truth_(inst_26995)){
var statearr_27016_27036 = state_27010__$1;
(statearr_27016_27036[(1)] = (8));

} else {
var statearr_27017_27037 = state_27010__$1;
(statearr_27017_27037[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (3))){
var inst_27008 = (state_27010[(2)]);
var state_27010__$1 = state_27010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27010__$1,inst_27008);
} else {
if((state_val_27011 === (12))){
var state_27010__$1 = state_27010;
var statearr_27018_27038 = state_27010__$1;
(statearr_27018_27038[(2)] = null);

(statearr_27018_27038[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (2))){
var inst_26987 = (state_27010[(7)]);
var state_27010__$1 = state_27010;
if(cljs.core.truth_(inst_26987)){
var statearr_27019_27039 = state_27010__$1;
(statearr_27019_27039[(1)] = (4));

} else {
var statearr_27020_27040 = state_27010__$1;
(statearr_27020_27040[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (11))){
var inst_27001 = cljs.core.async.close_BANG_.call(null,ch);
var state_27010__$1 = state_27010;
var statearr_27021_27041 = state_27010__$1;
(statearr_27021_27041[(2)] = inst_27001);

(statearr_27021_27041[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (9))){
var state_27010__$1 = state_27010;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27022_27042 = state_27010__$1;
(statearr_27022_27042[(1)] = (11));

} else {
var statearr_27023_27043 = state_27010__$1;
(statearr_27023_27043[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (5))){
var inst_26987 = (state_27010[(7)]);
var state_27010__$1 = state_27010;
var statearr_27024_27044 = state_27010__$1;
(statearr_27024_27044[(2)] = inst_26987);

(statearr_27024_27044[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (10))){
var inst_27006 = (state_27010[(2)]);
var state_27010__$1 = state_27010;
var statearr_27025_27045 = state_27010__$1;
(statearr_27025_27045[(2)] = inst_27006);

(statearr_27025_27045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27011 === (8))){
var inst_26987 = (state_27010[(7)]);
var inst_26997 = cljs.core.next.call(null,inst_26987);
var inst_26987__$1 = inst_26997;
var state_27010__$1 = (function (){var statearr_27026 = state_27010;
(statearr_27026[(7)] = inst_26987__$1);

return statearr_27026;
})();
var statearr_27027_27046 = state_27010__$1;
(statearr_27027_27046[(2)] = null);

(statearr_27027_27046[(1)] = (2));


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
});})(c__26452__auto__))
;
return ((function (switch__26362__auto__,c__26452__auto__){
return (function() {
var cljs$core$async$state_machine__26363__auto__ = null;
var cljs$core$async$state_machine__26363__auto____0 = (function (){
var statearr_27028 = [null,null,null,null,null,null,null,null];
(statearr_27028[(0)] = cljs$core$async$state_machine__26363__auto__);

(statearr_27028[(1)] = (1));

return statearr_27028;
});
var cljs$core$async$state_machine__26363__auto____1 = (function (state_27010){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_27010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e27029){if((e27029 instanceof Object)){
var ex__26366__auto__ = e27029;
var statearr_27030_27047 = state_27010;
(statearr_27030_27047[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27048 = state_27010;
state_27010 = G__27048;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
cljs$core$async$state_machine__26363__auto__ = function(state_27010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26363__auto____1.call(this,state_27010);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26363__auto____0;
cljs$core$async$state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26363__auto____1;
return cljs$core$async$state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto__))
})();
var state__26454__auto__ = (function (){var statearr_27031 = f__26453__auto__.call(null);
(statearr_27031[(6)] = c__26452__auto__);

return statearr_27031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto__))
);

return c__26452__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27049 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27049 = (function (ch,cs,meta27050){
this.ch = ch;
this.cs = cs;
this.meta27050 = meta27050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27051,meta27050__$1){
var self__ = this;
var _27051__$1 = this;
return (new cljs.core.async.t_cljs$core$async27049(self__.ch,self__.cs,meta27050__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27049.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27051){
var self__ = this;
var _27051__$1 = this;
return self__.meta27050;
});})(cs))
;

cljs.core.async.t_cljs$core$async27049.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27049.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27049.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27049.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27049.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27049.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27049.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27050","meta27050",-705807748,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27049.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27049";

cljs.core.async.t_cljs$core$async27049.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27049");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27049.
 */
cljs.core.async.__GT_t_cljs$core$async27049 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27049(ch__$1,cs__$1,meta27050){
return (new cljs.core.async.t_cljs$core$async27049(ch__$1,cs__$1,meta27050));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27049(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26452__auto___27271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto___27271,cs,m,dchan,dctr,done){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto___27271,cs,m,dchan,dctr,done){
return (function (state_27186){
var state_val_27187 = (state_27186[(1)]);
if((state_val_27187 === (7))){
var inst_27182 = (state_27186[(2)]);
var state_27186__$1 = state_27186;
var statearr_27188_27272 = state_27186__$1;
(statearr_27188_27272[(2)] = inst_27182);

(statearr_27188_27272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (20))){
var inst_27085 = (state_27186[(7)]);
var inst_27097 = cljs.core.first.call(null,inst_27085);
var inst_27098 = cljs.core.nth.call(null,inst_27097,(0),null);
var inst_27099 = cljs.core.nth.call(null,inst_27097,(1),null);
var state_27186__$1 = (function (){var statearr_27189 = state_27186;
(statearr_27189[(8)] = inst_27098);

return statearr_27189;
})();
if(cljs.core.truth_(inst_27099)){
var statearr_27190_27273 = state_27186__$1;
(statearr_27190_27273[(1)] = (22));

} else {
var statearr_27191_27274 = state_27186__$1;
(statearr_27191_27274[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (27))){
var inst_27129 = (state_27186[(9)]);
var inst_27127 = (state_27186[(10)]);
var inst_27054 = (state_27186[(11)]);
var inst_27134 = (state_27186[(12)]);
var inst_27134__$1 = cljs.core._nth.call(null,inst_27127,inst_27129);
var inst_27135 = cljs.core.async.put_BANG_.call(null,inst_27134__$1,inst_27054,done);
var state_27186__$1 = (function (){var statearr_27192 = state_27186;
(statearr_27192[(12)] = inst_27134__$1);

return statearr_27192;
})();
if(cljs.core.truth_(inst_27135)){
var statearr_27193_27275 = state_27186__$1;
(statearr_27193_27275[(1)] = (30));

} else {
var statearr_27194_27276 = state_27186__$1;
(statearr_27194_27276[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (1))){
var state_27186__$1 = state_27186;
var statearr_27195_27277 = state_27186__$1;
(statearr_27195_27277[(2)] = null);

(statearr_27195_27277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (24))){
var inst_27085 = (state_27186[(7)]);
var inst_27104 = (state_27186[(2)]);
var inst_27105 = cljs.core.next.call(null,inst_27085);
var inst_27063 = inst_27105;
var inst_27064 = null;
var inst_27065 = (0);
var inst_27066 = (0);
var state_27186__$1 = (function (){var statearr_27196 = state_27186;
(statearr_27196[(13)] = inst_27063);

(statearr_27196[(14)] = inst_27104);

(statearr_27196[(15)] = inst_27066);

(statearr_27196[(16)] = inst_27065);

(statearr_27196[(17)] = inst_27064);

return statearr_27196;
})();
var statearr_27197_27278 = state_27186__$1;
(statearr_27197_27278[(2)] = null);

(statearr_27197_27278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (39))){
var state_27186__$1 = state_27186;
var statearr_27201_27279 = state_27186__$1;
(statearr_27201_27279[(2)] = null);

(statearr_27201_27279[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (4))){
var inst_27054 = (state_27186[(11)]);
var inst_27054__$1 = (state_27186[(2)]);
var inst_27055 = (inst_27054__$1 == null);
var state_27186__$1 = (function (){var statearr_27202 = state_27186;
(statearr_27202[(11)] = inst_27054__$1);

return statearr_27202;
})();
if(cljs.core.truth_(inst_27055)){
var statearr_27203_27280 = state_27186__$1;
(statearr_27203_27280[(1)] = (5));

} else {
var statearr_27204_27281 = state_27186__$1;
(statearr_27204_27281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (15))){
var inst_27063 = (state_27186[(13)]);
var inst_27066 = (state_27186[(15)]);
var inst_27065 = (state_27186[(16)]);
var inst_27064 = (state_27186[(17)]);
var inst_27081 = (state_27186[(2)]);
var inst_27082 = (inst_27066 + (1));
var tmp27198 = inst_27063;
var tmp27199 = inst_27065;
var tmp27200 = inst_27064;
var inst_27063__$1 = tmp27198;
var inst_27064__$1 = tmp27200;
var inst_27065__$1 = tmp27199;
var inst_27066__$1 = inst_27082;
var state_27186__$1 = (function (){var statearr_27205 = state_27186;
(statearr_27205[(13)] = inst_27063__$1);

(statearr_27205[(15)] = inst_27066__$1);

(statearr_27205[(16)] = inst_27065__$1);

(statearr_27205[(17)] = inst_27064__$1);

(statearr_27205[(18)] = inst_27081);

return statearr_27205;
})();
var statearr_27206_27282 = state_27186__$1;
(statearr_27206_27282[(2)] = null);

(statearr_27206_27282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (21))){
var inst_27108 = (state_27186[(2)]);
var state_27186__$1 = state_27186;
var statearr_27210_27283 = state_27186__$1;
(statearr_27210_27283[(2)] = inst_27108);

(statearr_27210_27283[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (31))){
var inst_27134 = (state_27186[(12)]);
var inst_27138 = done.call(null,null);
var inst_27139 = cljs.core.async.untap_STAR_.call(null,m,inst_27134);
var state_27186__$1 = (function (){var statearr_27211 = state_27186;
(statearr_27211[(19)] = inst_27138);

return statearr_27211;
})();
var statearr_27212_27284 = state_27186__$1;
(statearr_27212_27284[(2)] = inst_27139);

(statearr_27212_27284[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (32))){
var inst_27129 = (state_27186[(9)]);
var inst_27127 = (state_27186[(10)]);
var inst_27126 = (state_27186[(20)]);
var inst_27128 = (state_27186[(21)]);
var inst_27141 = (state_27186[(2)]);
var inst_27142 = (inst_27129 + (1));
var tmp27207 = inst_27127;
var tmp27208 = inst_27126;
var tmp27209 = inst_27128;
var inst_27126__$1 = tmp27208;
var inst_27127__$1 = tmp27207;
var inst_27128__$1 = tmp27209;
var inst_27129__$1 = inst_27142;
var state_27186__$1 = (function (){var statearr_27213 = state_27186;
(statearr_27213[(9)] = inst_27129__$1);

(statearr_27213[(10)] = inst_27127__$1);

(statearr_27213[(20)] = inst_27126__$1);

(statearr_27213[(21)] = inst_27128__$1);

(statearr_27213[(22)] = inst_27141);

return statearr_27213;
})();
var statearr_27214_27285 = state_27186__$1;
(statearr_27214_27285[(2)] = null);

(statearr_27214_27285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (40))){
var inst_27154 = (state_27186[(23)]);
var inst_27158 = done.call(null,null);
var inst_27159 = cljs.core.async.untap_STAR_.call(null,m,inst_27154);
var state_27186__$1 = (function (){var statearr_27215 = state_27186;
(statearr_27215[(24)] = inst_27158);

return statearr_27215;
})();
var statearr_27216_27286 = state_27186__$1;
(statearr_27216_27286[(2)] = inst_27159);

(statearr_27216_27286[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (33))){
var inst_27145 = (state_27186[(25)]);
var inst_27147 = cljs.core.chunked_seq_QMARK_.call(null,inst_27145);
var state_27186__$1 = state_27186;
if(inst_27147){
var statearr_27217_27287 = state_27186__$1;
(statearr_27217_27287[(1)] = (36));

} else {
var statearr_27218_27288 = state_27186__$1;
(statearr_27218_27288[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (13))){
var inst_27075 = (state_27186[(26)]);
var inst_27078 = cljs.core.async.close_BANG_.call(null,inst_27075);
var state_27186__$1 = state_27186;
var statearr_27219_27289 = state_27186__$1;
(statearr_27219_27289[(2)] = inst_27078);

(statearr_27219_27289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (22))){
var inst_27098 = (state_27186[(8)]);
var inst_27101 = cljs.core.async.close_BANG_.call(null,inst_27098);
var state_27186__$1 = state_27186;
var statearr_27220_27290 = state_27186__$1;
(statearr_27220_27290[(2)] = inst_27101);

(statearr_27220_27290[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (36))){
var inst_27145 = (state_27186[(25)]);
var inst_27149 = cljs.core.chunk_first.call(null,inst_27145);
var inst_27150 = cljs.core.chunk_rest.call(null,inst_27145);
var inst_27151 = cljs.core.count.call(null,inst_27149);
var inst_27126 = inst_27150;
var inst_27127 = inst_27149;
var inst_27128 = inst_27151;
var inst_27129 = (0);
var state_27186__$1 = (function (){var statearr_27221 = state_27186;
(statearr_27221[(9)] = inst_27129);

(statearr_27221[(10)] = inst_27127);

(statearr_27221[(20)] = inst_27126);

(statearr_27221[(21)] = inst_27128);

return statearr_27221;
})();
var statearr_27222_27291 = state_27186__$1;
(statearr_27222_27291[(2)] = null);

(statearr_27222_27291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (41))){
var inst_27145 = (state_27186[(25)]);
var inst_27161 = (state_27186[(2)]);
var inst_27162 = cljs.core.next.call(null,inst_27145);
var inst_27126 = inst_27162;
var inst_27127 = null;
var inst_27128 = (0);
var inst_27129 = (0);
var state_27186__$1 = (function (){var statearr_27223 = state_27186;
(statearr_27223[(9)] = inst_27129);

(statearr_27223[(10)] = inst_27127);

(statearr_27223[(20)] = inst_27126);

(statearr_27223[(21)] = inst_27128);

(statearr_27223[(27)] = inst_27161);

return statearr_27223;
})();
var statearr_27224_27292 = state_27186__$1;
(statearr_27224_27292[(2)] = null);

(statearr_27224_27292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (43))){
var state_27186__$1 = state_27186;
var statearr_27225_27293 = state_27186__$1;
(statearr_27225_27293[(2)] = null);

(statearr_27225_27293[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (29))){
var inst_27170 = (state_27186[(2)]);
var state_27186__$1 = state_27186;
var statearr_27226_27294 = state_27186__$1;
(statearr_27226_27294[(2)] = inst_27170);

(statearr_27226_27294[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (44))){
var inst_27179 = (state_27186[(2)]);
var state_27186__$1 = (function (){var statearr_27227 = state_27186;
(statearr_27227[(28)] = inst_27179);

return statearr_27227;
})();
var statearr_27228_27295 = state_27186__$1;
(statearr_27228_27295[(2)] = null);

(statearr_27228_27295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (6))){
var inst_27118 = (state_27186[(29)]);
var inst_27117 = cljs.core.deref.call(null,cs);
var inst_27118__$1 = cljs.core.keys.call(null,inst_27117);
var inst_27119 = cljs.core.count.call(null,inst_27118__$1);
var inst_27120 = cljs.core.reset_BANG_.call(null,dctr,inst_27119);
var inst_27125 = cljs.core.seq.call(null,inst_27118__$1);
var inst_27126 = inst_27125;
var inst_27127 = null;
var inst_27128 = (0);
var inst_27129 = (0);
var state_27186__$1 = (function (){var statearr_27229 = state_27186;
(statearr_27229[(9)] = inst_27129);

(statearr_27229[(10)] = inst_27127);

(statearr_27229[(30)] = inst_27120);

(statearr_27229[(20)] = inst_27126);

(statearr_27229[(21)] = inst_27128);

(statearr_27229[(29)] = inst_27118__$1);

return statearr_27229;
})();
var statearr_27230_27296 = state_27186__$1;
(statearr_27230_27296[(2)] = null);

(statearr_27230_27296[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (28))){
var inst_27145 = (state_27186[(25)]);
var inst_27126 = (state_27186[(20)]);
var inst_27145__$1 = cljs.core.seq.call(null,inst_27126);
var state_27186__$1 = (function (){var statearr_27231 = state_27186;
(statearr_27231[(25)] = inst_27145__$1);

return statearr_27231;
})();
if(inst_27145__$1){
var statearr_27232_27297 = state_27186__$1;
(statearr_27232_27297[(1)] = (33));

} else {
var statearr_27233_27298 = state_27186__$1;
(statearr_27233_27298[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (25))){
var inst_27129 = (state_27186[(9)]);
var inst_27128 = (state_27186[(21)]);
var inst_27131 = (inst_27129 < inst_27128);
var inst_27132 = inst_27131;
var state_27186__$1 = state_27186;
if(cljs.core.truth_(inst_27132)){
var statearr_27234_27299 = state_27186__$1;
(statearr_27234_27299[(1)] = (27));

} else {
var statearr_27235_27300 = state_27186__$1;
(statearr_27235_27300[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (34))){
var state_27186__$1 = state_27186;
var statearr_27236_27301 = state_27186__$1;
(statearr_27236_27301[(2)] = null);

(statearr_27236_27301[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (17))){
var state_27186__$1 = state_27186;
var statearr_27237_27302 = state_27186__$1;
(statearr_27237_27302[(2)] = null);

(statearr_27237_27302[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (3))){
var inst_27184 = (state_27186[(2)]);
var state_27186__$1 = state_27186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27186__$1,inst_27184);
} else {
if((state_val_27187 === (12))){
var inst_27113 = (state_27186[(2)]);
var state_27186__$1 = state_27186;
var statearr_27238_27303 = state_27186__$1;
(statearr_27238_27303[(2)] = inst_27113);

(statearr_27238_27303[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (2))){
var state_27186__$1 = state_27186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27186__$1,(4),ch);
} else {
if((state_val_27187 === (23))){
var state_27186__$1 = state_27186;
var statearr_27239_27304 = state_27186__$1;
(statearr_27239_27304[(2)] = null);

(statearr_27239_27304[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (35))){
var inst_27168 = (state_27186[(2)]);
var state_27186__$1 = state_27186;
var statearr_27240_27305 = state_27186__$1;
(statearr_27240_27305[(2)] = inst_27168);

(statearr_27240_27305[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (19))){
var inst_27085 = (state_27186[(7)]);
var inst_27089 = cljs.core.chunk_first.call(null,inst_27085);
var inst_27090 = cljs.core.chunk_rest.call(null,inst_27085);
var inst_27091 = cljs.core.count.call(null,inst_27089);
var inst_27063 = inst_27090;
var inst_27064 = inst_27089;
var inst_27065 = inst_27091;
var inst_27066 = (0);
var state_27186__$1 = (function (){var statearr_27241 = state_27186;
(statearr_27241[(13)] = inst_27063);

(statearr_27241[(15)] = inst_27066);

(statearr_27241[(16)] = inst_27065);

(statearr_27241[(17)] = inst_27064);

return statearr_27241;
})();
var statearr_27242_27306 = state_27186__$1;
(statearr_27242_27306[(2)] = null);

(statearr_27242_27306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (11))){
var inst_27063 = (state_27186[(13)]);
var inst_27085 = (state_27186[(7)]);
var inst_27085__$1 = cljs.core.seq.call(null,inst_27063);
var state_27186__$1 = (function (){var statearr_27243 = state_27186;
(statearr_27243[(7)] = inst_27085__$1);

return statearr_27243;
})();
if(inst_27085__$1){
var statearr_27244_27307 = state_27186__$1;
(statearr_27244_27307[(1)] = (16));

} else {
var statearr_27245_27308 = state_27186__$1;
(statearr_27245_27308[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (9))){
var inst_27115 = (state_27186[(2)]);
var state_27186__$1 = state_27186;
var statearr_27246_27309 = state_27186__$1;
(statearr_27246_27309[(2)] = inst_27115);

(statearr_27246_27309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (5))){
var inst_27061 = cljs.core.deref.call(null,cs);
var inst_27062 = cljs.core.seq.call(null,inst_27061);
var inst_27063 = inst_27062;
var inst_27064 = null;
var inst_27065 = (0);
var inst_27066 = (0);
var state_27186__$1 = (function (){var statearr_27247 = state_27186;
(statearr_27247[(13)] = inst_27063);

(statearr_27247[(15)] = inst_27066);

(statearr_27247[(16)] = inst_27065);

(statearr_27247[(17)] = inst_27064);

return statearr_27247;
})();
var statearr_27248_27310 = state_27186__$1;
(statearr_27248_27310[(2)] = null);

(statearr_27248_27310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (14))){
var state_27186__$1 = state_27186;
var statearr_27249_27311 = state_27186__$1;
(statearr_27249_27311[(2)] = null);

(statearr_27249_27311[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (45))){
var inst_27176 = (state_27186[(2)]);
var state_27186__$1 = state_27186;
var statearr_27250_27312 = state_27186__$1;
(statearr_27250_27312[(2)] = inst_27176);

(statearr_27250_27312[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (26))){
var inst_27118 = (state_27186[(29)]);
var inst_27172 = (state_27186[(2)]);
var inst_27173 = cljs.core.seq.call(null,inst_27118);
var state_27186__$1 = (function (){var statearr_27251 = state_27186;
(statearr_27251[(31)] = inst_27172);

return statearr_27251;
})();
if(inst_27173){
var statearr_27252_27313 = state_27186__$1;
(statearr_27252_27313[(1)] = (42));

} else {
var statearr_27253_27314 = state_27186__$1;
(statearr_27253_27314[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (16))){
var inst_27085 = (state_27186[(7)]);
var inst_27087 = cljs.core.chunked_seq_QMARK_.call(null,inst_27085);
var state_27186__$1 = state_27186;
if(inst_27087){
var statearr_27254_27315 = state_27186__$1;
(statearr_27254_27315[(1)] = (19));

} else {
var statearr_27255_27316 = state_27186__$1;
(statearr_27255_27316[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (38))){
var inst_27165 = (state_27186[(2)]);
var state_27186__$1 = state_27186;
var statearr_27256_27317 = state_27186__$1;
(statearr_27256_27317[(2)] = inst_27165);

(statearr_27256_27317[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (30))){
var state_27186__$1 = state_27186;
var statearr_27257_27318 = state_27186__$1;
(statearr_27257_27318[(2)] = null);

(statearr_27257_27318[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (10))){
var inst_27066 = (state_27186[(15)]);
var inst_27064 = (state_27186[(17)]);
var inst_27074 = cljs.core._nth.call(null,inst_27064,inst_27066);
var inst_27075 = cljs.core.nth.call(null,inst_27074,(0),null);
var inst_27076 = cljs.core.nth.call(null,inst_27074,(1),null);
var state_27186__$1 = (function (){var statearr_27258 = state_27186;
(statearr_27258[(26)] = inst_27075);

return statearr_27258;
})();
if(cljs.core.truth_(inst_27076)){
var statearr_27259_27319 = state_27186__$1;
(statearr_27259_27319[(1)] = (13));

} else {
var statearr_27260_27320 = state_27186__$1;
(statearr_27260_27320[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (18))){
var inst_27111 = (state_27186[(2)]);
var state_27186__$1 = state_27186;
var statearr_27261_27321 = state_27186__$1;
(statearr_27261_27321[(2)] = inst_27111);

(statearr_27261_27321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (42))){
var state_27186__$1 = state_27186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27186__$1,(45),dchan);
} else {
if((state_val_27187 === (37))){
var inst_27145 = (state_27186[(25)]);
var inst_27154 = (state_27186[(23)]);
var inst_27054 = (state_27186[(11)]);
var inst_27154__$1 = cljs.core.first.call(null,inst_27145);
var inst_27155 = cljs.core.async.put_BANG_.call(null,inst_27154__$1,inst_27054,done);
var state_27186__$1 = (function (){var statearr_27262 = state_27186;
(statearr_27262[(23)] = inst_27154__$1);

return statearr_27262;
})();
if(cljs.core.truth_(inst_27155)){
var statearr_27263_27322 = state_27186__$1;
(statearr_27263_27322[(1)] = (39));

} else {
var statearr_27264_27323 = state_27186__$1;
(statearr_27264_27323[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27187 === (8))){
var inst_27066 = (state_27186[(15)]);
var inst_27065 = (state_27186[(16)]);
var inst_27068 = (inst_27066 < inst_27065);
var inst_27069 = inst_27068;
var state_27186__$1 = state_27186;
if(cljs.core.truth_(inst_27069)){
var statearr_27265_27324 = state_27186__$1;
(statearr_27265_27324[(1)] = (10));

} else {
var statearr_27266_27325 = state_27186__$1;
(statearr_27266_27325[(1)] = (11));

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
});})(c__26452__auto___27271,cs,m,dchan,dctr,done))
;
return ((function (switch__26362__auto__,c__26452__auto___27271,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26363__auto__ = null;
var cljs$core$async$mult_$_state_machine__26363__auto____0 = (function (){
var statearr_27267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27267[(0)] = cljs$core$async$mult_$_state_machine__26363__auto__);

(statearr_27267[(1)] = (1));

return statearr_27267;
});
var cljs$core$async$mult_$_state_machine__26363__auto____1 = (function (state_27186){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_27186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e27268){if((e27268 instanceof Object)){
var ex__26366__auto__ = e27268;
var statearr_27269_27326 = state_27186;
(statearr_27269_27326[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27327 = state_27186;
state_27186 = G__27327;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26363__auto__ = function(state_27186){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26363__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26363__auto____1.call(this,state_27186);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26363__auto____0;
cljs$core$async$mult_$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26363__auto____1;
return cljs$core$async$mult_$_state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto___27271,cs,m,dchan,dctr,done))
})();
var state__26454__auto__ = (function (){var statearr_27270 = f__26453__auto__.call(null);
(statearr_27270[(6)] = c__26452__auto___27271);

return statearr_27270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto___27271,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27329 = arguments.length;
switch (G__27329) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27341 = arguments.length;
var i__4500__auto___27342 = (0);
while(true){
if((i__4500__auto___27342 < len__4499__auto___27341)){
args__4502__auto__.push((arguments[i__4500__auto___27342]));

var G__27343 = (i__4500__auto___27342 + (1));
i__4500__auto___27342 = G__27343;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27335){
var map__27336 = p__27335;
var map__27336__$1 = ((((!((map__27336 == null)))?(((((map__27336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27336):map__27336);
var opts = map__27336__$1;
var statearr_27338_27344 = state;
(statearr_27338_27344[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__27336,map__27336__$1,opts){
return (function (val){
var statearr_27339_27345 = state;
(statearr_27339_27345[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27336,map__27336__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_27340_27346 = state;
(statearr_27340_27346[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27331){
var G__27332 = cljs.core.first.call(null,seq27331);
var seq27331__$1 = cljs.core.next.call(null,seq27331);
var G__27333 = cljs.core.first.call(null,seq27331__$1);
var seq27331__$2 = cljs.core.next.call(null,seq27331__$1);
var G__27334 = cljs.core.first.call(null,seq27331__$2);
var seq27331__$3 = cljs.core.next.call(null,seq27331__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27332,G__27333,G__27334,seq27331__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27347 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27347 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27348){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27348 = meta27348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27349,meta27348__$1){
var self__ = this;
var _27349__$1 = this;
return (new cljs.core.async.t_cljs$core$async27347(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27348__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27347.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27349){
var self__ = this;
var _27349__$1 = this;
return self__.meta27348;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27347.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27347.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27347.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27347.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27347.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27347.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27347.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27347.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27347.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta27348","meta27348",1647780179,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27347.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27347";

cljs.core.async.t_cljs$core$async27347.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27347");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27347.
 */
cljs.core.async.__GT_t_cljs$core$async27347 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27347(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27348){
return (new cljs.core.async.t_cljs$core$async27347(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27348));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27347(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26452__auto___27511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto___27511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto___27511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27451){
var state_val_27452 = (state_27451[(1)]);
if((state_val_27452 === (7))){
var inst_27366 = (state_27451[(2)]);
var state_27451__$1 = state_27451;
var statearr_27453_27512 = state_27451__$1;
(statearr_27453_27512[(2)] = inst_27366);

(statearr_27453_27512[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (20))){
var inst_27378 = (state_27451[(7)]);
var state_27451__$1 = state_27451;
var statearr_27454_27513 = state_27451__$1;
(statearr_27454_27513[(2)] = inst_27378);

(statearr_27454_27513[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (27))){
var state_27451__$1 = state_27451;
var statearr_27455_27514 = state_27451__$1;
(statearr_27455_27514[(2)] = null);

(statearr_27455_27514[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (1))){
var inst_27353 = (state_27451[(8)]);
var inst_27353__$1 = calc_state.call(null);
var inst_27355 = (inst_27353__$1 == null);
var inst_27356 = cljs.core.not.call(null,inst_27355);
var state_27451__$1 = (function (){var statearr_27456 = state_27451;
(statearr_27456[(8)] = inst_27353__$1);

return statearr_27456;
})();
if(inst_27356){
var statearr_27457_27515 = state_27451__$1;
(statearr_27457_27515[(1)] = (2));

} else {
var statearr_27458_27516 = state_27451__$1;
(statearr_27458_27516[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (24))){
var inst_27411 = (state_27451[(9)]);
var inst_27402 = (state_27451[(10)]);
var inst_27425 = (state_27451[(11)]);
var inst_27425__$1 = inst_27402.call(null,inst_27411);
var state_27451__$1 = (function (){var statearr_27459 = state_27451;
(statearr_27459[(11)] = inst_27425__$1);

return statearr_27459;
})();
if(cljs.core.truth_(inst_27425__$1)){
var statearr_27460_27517 = state_27451__$1;
(statearr_27460_27517[(1)] = (29));

} else {
var statearr_27461_27518 = state_27451__$1;
(statearr_27461_27518[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (4))){
var inst_27369 = (state_27451[(2)]);
var state_27451__$1 = state_27451;
if(cljs.core.truth_(inst_27369)){
var statearr_27462_27519 = state_27451__$1;
(statearr_27462_27519[(1)] = (8));

} else {
var statearr_27463_27520 = state_27451__$1;
(statearr_27463_27520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (15))){
var inst_27396 = (state_27451[(2)]);
var state_27451__$1 = state_27451;
if(cljs.core.truth_(inst_27396)){
var statearr_27464_27521 = state_27451__$1;
(statearr_27464_27521[(1)] = (19));

} else {
var statearr_27465_27522 = state_27451__$1;
(statearr_27465_27522[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (21))){
var inst_27401 = (state_27451[(12)]);
var inst_27401__$1 = (state_27451[(2)]);
var inst_27402 = cljs.core.get.call(null,inst_27401__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27403 = cljs.core.get.call(null,inst_27401__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27404 = cljs.core.get.call(null,inst_27401__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27451__$1 = (function (){var statearr_27466 = state_27451;
(statearr_27466[(10)] = inst_27402);

(statearr_27466[(13)] = inst_27403);

(statearr_27466[(12)] = inst_27401__$1);

return statearr_27466;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27451__$1,(22),inst_27404);
} else {
if((state_val_27452 === (31))){
var inst_27433 = (state_27451[(2)]);
var state_27451__$1 = state_27451;
if(cljs.core.truth_(inst_27433)){
var statearr_27467_27523 = state_27451__$1;
(statearr_27467_27523[(1)] = (32));

} else {
var statearr_27468_27524 = state_27451__$1;
(statearr_27468_27524[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (32))){
var inst_27410 = (state_27451[(14)]);
var state_27451__$1 = state_27451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27451__$1,(35),out,inst_27410);
} else {
if((state_val_27452 === (33))){
var inst_27401 = (state_27451[(12)]);
var inst_27378 = inst_27401;
var state_27451__$1 = (function (){var statearr_27469 = state_27451;
(statearr_27469[(7)] = inst_27378);

return statearr_27469;
})();
var statearr_27470_27525 = state_27451__$1;
(statearr_27470_27525[(2)] = null);

(statearr_27470_27525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (13))){
var inst_27378 = (state_27451[(7)]);
var inst_27385 = inst_27378.cljs$lang$protocol_mask$partition0$;
var inst_27386 = (inst_27385 & (64));
var inst_27387 = inst_27378.cljs$core$ISeq$;
var inst_27388 = (cljs.core.PROTOCOL_SENTINEL === inst_27387);
var inst_27389 = ((inst_27386) || (inst_27388));
var state_27451__$1 = state_27451;
if(cljs.core.truth_(inst_27389)){
var statearr_27471_27526 = state_27451__$1;
(statearr_27471_27526[(1)] = (16));

} else {
var statearr_27472_27527 = state_27451__$1;
(statearr_27472_27527[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (22))){
var inst_27411 = (state_27451[(9)]);
var inst_27410 = (state_27451[(14)]);
var inst_27409 = (state_27451[(2)]);
var inst_27410__$1 = cljs.core.nth.call(null,inst_27409,(0),null);
var inst_27411__$1 = cljs.core.nth.call(null,inst_27409,(1),null);
var inst_27412 = (inst_27410__$1 == null);
var inst_27413 = cljs.core._EQ_.call(null,inst_27411__$1,change);
var inst_27414 = ((inst_27412) || (inst_27413));
var state_27451__$1 = (function (){var statearr_27473 = state_27451;
(statearr_27473[(9)] = inst_27411__$1);

(statearr_27473[(14)] = inst_27410__$1);

return statearr_27473;
})();
if(cljs.core.truth_(inst_27414)){
var statearr_27474_27528 = state_27451__$1;
(statearr_27474_27528[(1)] = (23));

} else {
var statearr_27475_27529 = state_27451__$1;
(statearr_27475_27529[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (36))){
var inst_27401 = (state_27451[(12)]);
var inst_27378 = inst_27401;
var state_27451__$1 = (function (){var statearr_27476 = state_27451;
(statearr_27476[(7)] = inst_27378);

return statearr_27476;
})();
var statearr_27477_27530 = state_27451__$1;
(statearr_27477_27530[(2)] = null);

(statearr_27477_27530[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (29))){
var inst_27425 = (state_27451[(11)]);
var state_27451__$1 = state_27451;
var statearr_27478_27531 = state_27451__$1;
(statearr_27478_27531[(2)] = inst_27425);

(statearr_27478_27531[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (6))){
var state_27451__$1 = state_27451;
var statearr_27479_27532 = state_27451__$1;
(statearr_27479_27532[(2)] = false);

(statearr_27479_27532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (28))){
var inst_27421 = (state_27451[(2)]);
var inst_27422 = calc_state.call(null);
var inst_27378 = inst_27422;
var state_27451__$1 = (function (){var statearr_27480 = state_27451;
(statearr_27480[(7)] = inst_27378);

(statearr_27480[(15)] = inst_27421);

return statearr_27480;
})();
var statearr_27481_27533 = state_27451__$1;
(statearr_27481_27533[(2)] = null);

(statearr_27481_27533[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (25))){
var inst_27447 = (state_27451[(2)]);
var state_27451__$1 = state_27451;
var statearr_27482_27534 = state_27451__$1;
(statearr_27482_27534[(2)] = inst_27447);

(statearr_27482_27534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (34))){
var inst_27445 = (state_27451[(2)]);
var state_27451__$1 = state_27451;
var statearr_27483_27535 = state_27451__$1;
(statearr_27483_27535[(2)] = inst_27445);

(statearr_27483_27535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (17))){
var state_27451__$1 = state_27451;
var statearr_27484_27536 = state_27451__$1;
(statearr_27484_27536[(2)] = false);

(statearr_27484_27536[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (3))){
var state_27451__$1 = state_27451;
var statearr_27485_27537 = state_27451__$1;
(statearr_27485_27537[(2)] = false);

(statearr_27485_27537[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (12))){
var inst_27449 = (state_27451[(2)]);
var state_27451__$1 = state_27451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27451__$1,inst_27449);
} else {
if((state_val_27452 === (2))){
var inst_27353 = (state_27451[(8)]);
var inst_27358 = inst_27353.cljs$lang$protocol_mask$partition0$;
var inst_27359 = (inst_27358 & (64));
var inst_27360 = inst_27353.cljs$core$ISeq$;
var inst_27361 = (cljs.core.PROTOCOL_SENTINEL === inst_27360);
var inst_27362 = ((inst_27359) || (inst_27361));
var state_27451__$1 = state_27451;
if(cljs.core.truth_(inst_27362)){
var statearr_27486_27538 = state_27451__$1;
(statearr_27486_27538[(1)] = (5));

} else {
var statearr_27487_27539 = state_27451__$1;
(statearr_27487_27539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (23))){
var inst_27410 = (state_27451[(14)]);
var inst_27416 = (inst_27410 == null);
var state_27451__$1 = state_27451;
if(cljs.core.truth_(inst_27416)){
var statearr_27488_27540 = state_27451__$1;
(statearr_27488_27540[(1)] = (26));

} else {
var statearr_27489_27541 = state_27451__$1;
(statearr_27489_27541[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (35))){
var inst_27436 = (state_27451[(2)]);
var state_27451__$1 = state_27451;
if(cljs.core.truth_(inst_27436)){
var statearr_27490_27542 = state_27451__$1;
(statearr_27490_27542[(1)] = (36));

} else {
var statearr_27491_27543 = state_27451__$1;
(statearr_27491_27543[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (19))){
var inst_27378 = (state_27451[(7)]);
var inst_27398 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27378);
var state_27451__$1 = state_27451;
var statearr_27492_27544 = state_27451__$1;
(statearr_27492_27544[(2)] = inst_27398);

(statearr_27492_27544[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (11))){
var inst_27378 = (state_27451[(7)]);
var inst_27382 = (inst_27378 == null);
var inst_27383 = cljs.core.not.call(null,inst_27382);
var state_27451__$1 = state_27451;
if(inst_27383){
var statearr_27493_27545 = state_27451__$1;
(statearr_27493_27545[(1)] = (13));

} else {
var statearr_27494_27546 = state_27451__$1;
(statearr_27494_27546[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (9))){
var inst_27353 = (state_27451[(8)]);
var state_27451__$1 = state_27451;
var statearr_27495_27547 = state_27451__$1;
(statearr_27495_27547[(2)] = inst_27353);

(statearr_27495_27547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (5))){
var state_27451__$1 = state_27451;
var statearr_27496_27548 = state_27451__$1;
(statearr_27496_27548[(2)] = true);

(statearr_27496_27548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (14))){
var state_27451__$1 = state_27451;
var statearr_27497_27549 = state_27451__$1;
(statearr_27497_27549[(2)] = false);

(statearr_27497_27549[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (26))){
var inst_27411 = (state_27451[(9)]);
var inst_27418 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27411);
var state_27451__$1 = state_27451;
var statearr_27498_27550 = state_27451__$1;
(statearr_27498_27550[(2)] = inst_27418);

(statearr_27498_27550[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (16))){
var state_27451__$1 = state_27451;
var statearr_27499_27551 = state_27451__$1;
(statearr_27499_27551[(2)] = true);

(statearr_27499_27551[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (38))){
var inst_27441 = (state_27451[(2)]);
var state_27451__$1 = state_27451;
var statearr_27500_27552 = state_27451__$1;
(statearr_27500_27552[(2)] = inst_27441);

(statearr_27500_27552[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (30))){
var inst_27411 = (state_27451[(9)]);
var inst_27402 = (state_27451[(10)]);
var inst_27403 = (state_27451[(13)]);
var inst_27428 = cljs.core.empty_QMARK_.call(null,inst_27402);
var inst_27429 = inst_27403.call(null,inst_27411);
var inst_27430 = cljs.core.not.call(null,inst_27429);
var inst_27431 = ((inst_27428) && (inst_27430));
var state_27451__$1 = state_27451;
var statearr_27501_27553 = state_27451__$1;
(statearr_27501_27553[(2)] = inst_27431);

(statearr_27501_27553[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (10))){
var inst_27353 = (state_27451[(8)]);
var inst_27374 = (state_27451[(2)]);
var inst_27375 = cljs.core.get.call(null,inst_27374,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27376 = cljs.core.get.call(null,inst_27374,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27377 = cljs.core.get.call(null,inst_27374,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27378 = inst_27353;
var state_27451__$1 = (function (){var statearr_27502 = state_27451;
(statearr_27502[(16)] = inst_27376);

(statearr_27502[(17)] = inst_27375);

(statearr_27502[(7)] = inst_27378);

(statearr_27502[(18)] = inst_27377);

return statearr_27502;
})();
var statearr_27503_27554 = state_27451__$1;
(statearr_27503_27554[(2)] = null);

(statearr_27503_27554[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (18))){
var inst_27393 = (state_27451[(2)]);
var state_27451__$1 = state_27451;
var statearr_27504_27555 = state_27451__$1;
(statearr_27504_27555[(2)] = inst_27393);

(statearr_27504_27555[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (37))){
var state_27451__$1 = state_27451;
var statearr_27505_27556 = state_27451__$1;
(statearr_27505_27556[(2)] = null);

(statearr_27505_27556[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27452 === (8))){
var inst_27353 = (state_27451[(8)]);
var inst_27371 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27353);
var state_27451__$1 = state_27451;
var statearr_27506_27557 = state_27451__$1;
(statearr_27506_27557[(2)] = inst_27371);

(statearr_27506_27557[(1)] = (10));


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
});})(c__26452__auto___27511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26362__auto__,c__26452__auto___27511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26363__auto__ = null;
var cljs$core$async$mix_$_state_machine__26363__auto____0 = (function (){
var statearr_27507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27507[(0)] = cljs$core$async$mix_$_state_machine__26363__auto__);

(statearr_27507[(1)] = (1));

return statearr_27507;
});
var cljs$core$async$mix_$_state_machine__26363__auto____1 = (function (state_27451){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_27451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e27508){if((e27508 instanceof Object)){
var ex__26366__auto__ = e27508;
var statearr_27509_27558 = state_27451;
(statearr_27509_27558[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27559 = state_27451;
state_27451 = G__27559;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26363__auto__ = function(state_27451){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26363__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26363__auto____1.call(this,state_27451);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26363__auto____0;
cljs$core$async$mix_$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26363__auto____1;
return cljs$core$async$mix_$_state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto___27511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26454__auto__ = (function (){var statearr_27510 = f__26453__auto__.call(null);
(statearr_27510[(6)] = c__26452__auto___27511);

return statearr_27510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto___27511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27561 = arguments.length;
switch (G__27561) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__27565 = arguments.length;
switch (G__27565) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__27563_SHARP_){
if(cljs.core.truth_(p1__27563_SHARP_.call(null,topic))){
return p1__27563_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27563_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27566 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27566 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27567){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27567 = meta27567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27568,meta27567__$1){
var self__ = this;
var _27568__$1 = this;
return (new cljs.core.async.t_cljs$core$async27566(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27567__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27568){
var self__ = this;
var _27568__$1 = this;
return self__.meta27567;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27566.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27566.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27566.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27566.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27566.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27566.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27566.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27566.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27567","meta27567",-1670196783,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27566.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27566";

cljs.core.async.t_cljs$core$async27566.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27566");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27566.
 */
cljs.core.async.__GT_t_cljs$core$async27566 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27566(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27567){
return (new cljs.core.async.t_cljs$core$async27566(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27567));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27566(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26452__auto___27686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto___27686,mults,ensure_mult,p){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto___27686,mults,ensure_mult,p){
return (function (state_27640){
var state_val_27641 = (state_27640[(1)]);
if((state_val_27641 === (7))){
var inst_27636 = (state_27640[(2)]);
var state_27640__$1 = state_27640;
var statearr_27642_27687 = state_27640__$1;
(statearr_27642_27687[(2)] = inst_27636);

(statearr_27642_27687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (20))){
var state_27640__$1 = state_27640;
var statearr_27643_27688 = state_27640__$1;
(statearr_27643_27688[(2)] = null);

(statearr_27643_27688[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (1))){
var state_27640__$1 = state_27640;
var statearr_27644_27689 = state_27640__$1;
(statearr_27644_27689[(2)] = null);

(statearr_27644_27689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (24))){
var inst_27619 = (state_27640[(7)]);
var inst_27628 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27619);
var state_27640__$1 = state_27640;
var statearr_27645_27690 = state_27640__$1;
(statearr_27645_27690[(2)] = inst_27628);

(statearr_27645_27690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (4))){
var inst_27571 = (state_27640[(8)]);
var inst_27571__$1 = (state_27640[(2)]);
var inst_27572 = (inst_27571__$1 == null);
var state_27640__$1 = (function (){var statearr_27646 = state_27640;
(statearr_27646[(8)] = inst_27571__$1);

return statearr_27646;
})();
if(cljs.core.truth_(inst_27572)){
var statearr_27647_27691 = state_27640__$1;
(statearr_27647_27691[(1)] = (5));

} else {
var statearr_27648_27692 = state_27640__$1;
(statearr_27648_27692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (15))){
var inst_27613 = (state_27640[(2)]);
var state_27640__$1 = state_27640;
var statearr_27649_27693 = state_27640__$1;
(statearr_27649_27693[(2)] = inst_27613);

(statearr_27649_27693[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (21))){
var inst_27633 = (state_27640[(2)]);
var state_27640__$1 = (function (){var statearr_27650 = state_27640;
(statearr_27650[(9)] = inst_27633);

return statearr_27650;
})();
var statearr_27651_27694 = state_27640__$1;
(statearr_27651_27694[(2)] = null);

(statearr_27651_27694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (13))){
var inst_27595 = (state_27640[(10)]);
var inst_27597 = cljs.core.chunked_seq_QMARK_.call(null,inst_27595);
var state_27640__$1 = state_27640;
if(inst_27597){
var statearr_27652_27695 = state_27640__$1;
(statearr_27652_27695[(1)] = (16));

} else {
var statearr_27653_27696 = state_27640__$1;
(statearr_27653_27696[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (22))){
var inst_27625 = (state_27640[(2)]);
var state_27640__$1 = state_27640;
if(cljs.core.truth_(inst_27625)){
var statearr_27654_27697 = state_27640__$1;
(statearr_27654_27697[(1)] = (23));

} else {
var statearr_27655_27698 = state_27640__$1;
(statearr_27655_27698[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (6))){
var inst_27619 = (state_27640[(7)]);
var inst_27621 = (state_27640[(11)]);
var inst_27571 = (state_27640[(8)]);
var inst_27619__$1 = topic_fn.call(null,inst_27571);
var inst_27620 = cljs.core.deref.call(null,mults);
var inst_27621__$1 = cljs.core.get.call(null,inst_27620,inst_27619__$1);
var state_27640__$1 = (function (){var statearr_27656 = state_27640;
(statearr_27656[(7)] = inst_27619__$1);

(statearr_27656[(11)] = inst_27621__$1);

return statearr_27656;
})();
if(cljs.core.truth_(inst_27621__$1)){
var statearr_27657_27699 = state_27640__$1;
(statearr_27657_27699[(1)] = (19));

} else {
var statearr_27658_27700 = state_27640__$1;
(statearr_27658_27700[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (25))){
var inst_27630 = (state_27640[(2)]);
var state_27640__$1 = state_27640;
var statearr_27659_27701 = state_27640__$1;
(statearr_27659_27701[(2)] = inst_27630);

(statearr_27659_27701[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (17))){
var inst_27595 = (state_27640[(10)]);
var inst_27604 = cljs.core.first.call(null,inst_27595);
var inst_27605 = cljs.core.async.muxch_STAR_.call(null,inst_27604);
var inst_27606 = cljs.core.async.close_BANG_.call(null,inst_27605);
var inst_27607 = cljs.core.next.call(null,inst_27595);
var inst_27581 = inst_27607;
var inst_27582 = null;
var inst_27583 = (0);
var inst_27584 = (0);
var state_27640__$1 = (function (){var statearr_27660 = state_27640;
(statearr_27660[(12)] = inst_27581);

(statearr_27660[(13)] = inst_27582);

(statearr_27660[(14)] = inst_27606);

(statearr_27660[(15)] = inst_27583);

(statearr_27660[(16)] = inst_27584);

return statearr_27660;
})();
var statearr_27661_27702 = state_27640__$1;
(statearr_27661_27702[(2)] = null);

(statearr_27661_27702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (3))){
var inst_27638 = (state_27640[(2)]);
var state_27640__$1 = state_27640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27640__$1,inst_27638);
} else {
if((state_val_27641 === (12))){
var inst_27615 = (state_27640[(2)]);
var state_27640__$1 = state_27640;
var statearr_27662_27703 = state_27640__$1;
(statearr_27662_27703[(2)] = inst_27615);

(statearr_27662_27703[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (2))){
var state_27640__$1 = state_27640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27640__$1,(4),ch);
} else {
if((state_val_27641 === (23))){
var state_27640__$1 = state_27640;
var statearr_27663_27704 = state_27640__$1;
(statearr_27663_27704[(2)] = null);

(statearr_27663_27704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (19))){
var inst_27621 = (state_27640[(11)]);
var inst_27571 = (state_27640[(8)]);
var inst_27623 = cljs.core.async.muxch_STAR_.call(null,inst_27621);
var state_27640__$1 = state_27640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27640__$1,(22),inst_27623,inst_27571);
} else {
if((state_val_27641 === (11))){
var inst_27581 = (state_27640[(12)]);
var inst_27595 = (state_27640[(10)]);
var inst_27595__$1 = cljs.core.seq.call(null,inst_27581);
var state_27640__$1 = (function (){var statearr_27664 = state_27640;
(statearr_27664[(10)] = inst_27595__$1);

return statearr_27664;
})();
if(inst_27595__$1){
var statearr_27665_27705 = state_27640__$1;
(statearr_27665_27705[(1)] = (13));

} else {
var statearr_27666_27706 = state_27640__$1;
(statearr_27666_27706[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (9))){
var inst_27617 = (state_27640[(2)]);
var state_27640__$1 = state_27640;
var statearr_27667_27707 = state_27640__$1;
(statearr_27667_27707[(2)] = inst_27617);

(statearr_27667_27707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (5))){
var inst_27578 = cljs.core.deref.call(null,mults);
var inst_27579 = cljs.core.vals.call(null,inst_27578);
var inst_27580 = cljs.core.seq.call(null,inst_27579);
var inst_27581 = inst_27580;
var inst_27582 = null;
var inst_27583 = (0);
var inst_27584 = (0);
var state_27640__$1 = (function (){var statearr_27668 = state_27640;
(statearr_27668[(12)] = inst_27581);

(statearr_27668[(13)] = inst_27582);

(statearr_27668[(15)] = inst_27583);

(statearr_27668[(16)] = inst_27584);

return statearr_27668;
})();
var statearr_27669_27708 = state_27640__$1;
(statearr_27669_27708[(2)] = null);

(statearr_27669_27708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (14))){
var state_27640__$1 = state_27640;
var statearr_27673_27709 = state_27640__$1;
(statearr_27673_27709[(2)] = null);

(statearr_27673_27709[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (16))){
var inst_27595 = (state_27640[(10)]);
var inst_27599 = cljs.core.chunk_first.call(null,inst_27595);
var inst_27600 = cljs.core.chunk_rest.call(null,inst_27595);
var inst_27601 = cljs.core.count.call(null,inst_27599);
var inst_27581 = inst_27600;
var inst_27582 = inst_27599;
var inst_27583 = inst_27601;
var inst_27584 = (0);
var state_27640__$1 = (function (){var statearr_27674 = state_27640;
(statearr_27674[(12)] = inst_27581);

(statearr_27674[(13)] = inst_27582);

(statearr_27674[(15)] = inst_27583);

(statearr_27674[(16)] = inst_27584);

return statearr_27674;
})();
var statearr_27675_27710 = state_27640__$1;
(statearr_27675_27710[(2)] = null);

(statearr_27675_27710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (10))){
var inst_27581 = (state_27640[(12)]);
var inst_27582 = (state_27640[(13)]);
var inst_27583 = (state_27640[(15)]);
var inst_27584 = (state_27640[(16)]);
var inst_27589 = cljs.core._nth.call(null,inst_27582,inst_27584);
var inst_27590 = cljs.core.async.muxch_STAR_.call(null,inst_27589);
var inst_27591 = cljs.core.async.close_BANG_.call(null,inst_27590);
var inst_27592 = (inst_27584 + (1));
var tmp27670 = inst_27581;
var tmp27671 = inst_27582;
var tmp27672 = inst_27583;
var inst_27581__$1 = tmp27670;
var inst_27582__$1 = tmp27671;
var inst_27583__$1 = tmp27672;
var inst_27584__$1 = inst_27592;
var state_27640__$1 = (function (){var statearr_27676 = state_27640;
(statearr_27676[(12)] = inst_27581__$1);

(statearr_27676[(13)] = inst_27582__$1);

(statearr_27676[(17)] = inst_27591);

(statearr_27676[(15)] = inst_27583__$1);

(statearr_27676[(16)] = inst_27584__$1);

return statearr_27676;
})();
var statearr_27677_27711 = state_27640__$1;
(statearr_27677_27711[(2)] = null);

(statearr_27677_27711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (18))){
var inst_27610 = (state_27640[(2)]);
var state_27640__$1 = state_27640;
var statearr_27678_27712 = state_27640__$1;
(statearr_27678_27712[(2)] = inst_27610);

(statearr_27678_27712[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27641 === (8))){
var inst_27583 = (state_27640[(15)]);
var inst_27584 = (state_27640[(16)]);
var inst_27586 = (inst_27584 < inst_27583);
var inst_27587 = inst_27586;
var state_27640__$1 = state_27640;
if(cljs.core.truth_(inst_27587)){
var statearr_27679_27713 = state_27640__$1;
(statearr_27679_27713[(1)] = (10));

} else {
var statearr_27680_27714 = state_27640__$1;
(statearr_27680_27714[(1)] = (11));

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
});})(c__26452__auto___27686,mults,ensure_mult,p))
;
return ((function (switch__26362__auto__,c__26452__auto___27686,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26363__auto__ = null;
var cljs$core$async$state_machine__26363__auto____0 = (function (){
var statearr_27681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27681[(0)] = cljs$core$async$state_machine__26363__auto__);

(statearr_27681[(1)] = (1));

return statearr_27681;
});
var cljs$core$async$state_machine__26363__auto____1 = (function (state_27640){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_27640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e27682){if((e27682 instanceof Object)){
var ex__26366__auto__ = e27682;
var statearr_27683_27715 = state_27640;
(statearr_27683_27715[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27716 = state_27640;
state_27640 = G__27716;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
cljs$core$async$state_machine__26363__auto__ = function(state_27640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26363__auto____1.call(this,state_27640);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26363__auto____0;
cljs$core$async$state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26363__auto____1;
return cljs$core$async$state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto___27686,mults,ensure_mult,p))
})();
var state__26454__auto__ = (function (){var statearr_27684 = f__26453__auto__.call(null);
(statearr_27684[(6)] = c__26452__auto___27686);

return statearr_27684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto___27686,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__27718 = arguments.length;
switch (G__27718) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__27721 = arguments.length;
switch (G__27721) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__27724 = arguments.length;
switch (G__27724) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26452__auto___27791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto___27791,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto___27791,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27763){
var state_val_27764 = (state_27763[(1)]);
if((state_val_27764 === (7))){
var state_27763__$1 = state_27763;
var statearr_27765_27792 = state_27763__$1;
(statearr_27765_27792[(2)] = null);

(statearr_27765_27792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (1))){
var state_27763__$1 = state_27763;
var statearr_27766_27793 = state_27763__$1;
(statearr_27766_27793[(2)] = null);

(statearr_27766_27793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (4))){
var inst_27727 = (state_27763[(7)]);
var inst_27729 = (inst_27727 < cnt);
var state_27763__$1 = state_27763;
if(cljs.core.truth_(inst_27729)){
var statearr_27767_27794 = state_27763__$1;
(statearr_27767_27794[(1)] = (6));

} else {
var statearr_27768_27795 = state_27763__$1;
(statearr_27768_27795[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (15))){
var inst_27759 = (state_27763[(2)]);
var state_27763__$1 = state_27763;
var statearr_27769_27796 = state_27763__$1;
(statearr_27769_27796[(2)] = inst_27759);

(statearr_27769_27796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (13))){
var inst_27752 = cljs.core.async.close_BANG_.call(null,out);
var state_27763__$1 = state_27763;
var statearr_27770_27797 = state_27763__$1;
(statearr_27770_27797[(2)] = inst_27752);

(statearr_27770_27797[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (6))){
var state_27763__$1 = state_27763;
var statearr_27771_27798 = state_27763__$1;
(statearr_27771_27798[(2)] = null);

(statearr_27771_27798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (3))){
var inst_27761 = (state_27763[(2)]);
var state_27763__$1 = state_27763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27763__$1,inst_27761);
} else {
if((state_val_27764 === (12))){
var inst_27749 = (state_27763[(8)]);
var inst_27749__$1 = (state_27763[(2)]);
var inst_27750 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27749__$1);
var state_27763__$1 = (function (){var statearr_27772 = state_27763;
(statearr_27772[(8)] = inst_27749__$1);

return statearr_27772;
})();
if(cljs.core.truth_(inst_27750)){
var statearr_27773_27799 = state_27763__$1;
(statearr_27773_27799[(1)] = (13));

} else {
var statearr_27774_27800 = state_27763__$1;
(statearr_27774_27800[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (2))){
var inst_27726 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27727 = (0);
var state_27763__$1 = (function (){var statearr_27775 = state_27763;
(statearr_27775[(7)] = inst_27727);

(statearr_27775[(9)] = inst_27726);

return statearr_27775;
})();
var statearr_27776_27801 = state_27763__$1;
(statearr_27776_27801[(2)] = null);

(statearr_27776_27801[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (11))){
var inst_27727 = (state_27763[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27763,(10),Object,null,(9));
var inst_27736 = chs__$1.call(null,inst_27727);
var inst_27737 = done.call(null,inst_27727);
var inst_27738 = cljs.core.async.take_BANG_.call(null,inst_27736,inst_27737);
var state_27763__$1 = state_27763;
var statearr_27777_27802 = state_27763__$1;
(statearr_27777_27802[(2)] = inst_27738);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27763__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (9))){
var inst_27727 = (state_27763[(7)]);
var inst_27740 = (state_27763[(2)]);
var inst_27741 = (inst_27727 + (1));
var inst_27727__$1 = inst_27741;
var state_27763__$1 = (function (){var statearr_27778 = state_27763;
(statearr_27778[(7)] = inst_27727__$1);

(statearr_27778[(10)] = inst_27740);

return statearr_27778;
})();
var statearr_27779_27803 = state_27763__$1;
(statearr_27779_27803[(2)] = null);

(statearr_27779_27803[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (5))){
var inst_27747 = (state_27763[(2)]);
var state_27763__$1 = (function (){var statearr_27780 = state_27763;
(statearr_27780[(11)] = inst_27747);

return statearr_27780;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27763__$1,(12),dchan);
} else {
if((state_val_27764 === (14))){
var inst_27749 = (state_27763[(8)]);
var inst_27754 = cljs.core.apply.call(null,f,inst_27749);
var state_27763__$1 = state_27763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27763__$1,(16),out,inst_27754);
} else {
if((state_val_27764 === (16))){
var inst_27756 = (state_27763[(2)]);
var state_27763__$1 = (function (){var statearr_27781 = state_27763;
(statearr_27781[(12)] = inst_27756);

return statearr_27781;
})();
var statearr_27782_27804 = state_27763__$1;
(statearr_27782_27804[(2)] = null);

(statearr_27782_27804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (10))){
var inst_27731 = (state_27763[(2)]);
var inst_27732 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27763__$1 = (function (){var statearr_27783 = state_27763;
(statearr_27783[(13)] = inst_27731);

return statearr_27783;
})();
var statearr_27784_27805 = state_27763__$1;
(statearr_27784_27805[(2)] = inst_27732);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27763__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27764 === (8))){
var inst_27745 = (state_27763[(2)]);
var state_27763__$1 = state_27763;
var statearr_27785_27806 = state_27763__$1;
(statearr_27785_27806[(2)] = inst_27745);

(statearr_27785_27806[(1)] = (5));


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
});})(c__26452__auto___27791,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26362__auto__,c__26452__auto___27791,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26363__auto__ = null;
var cljs$core$async$state_machine__26363__auto____0 = (function (){
var statearr_27786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27786[(0)] = cljs$core$async$state_machine__26363__auto__);

(statearr_27786[(1)] = (1));

return statearr_27786;
});
var cljs$core$async$state_machine__26363__auto____1 = (function (state_27763){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_27763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e27787){if((e27787 instanceof Object)){
var ex__26366__auto__ = e27787;
var statearr_27788_27807 = state_27763;
(statearr_27788_27807[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27808 = state_27763;
state_27763 = G__27808;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
cljs$core$async$state_machine__26363__auto__ = function(state_27763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26363__auto____1.call(this,state_27763);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26363__auto____0;
cljs$core$async$state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26363__auto____1;
return cljs$core$async$state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto___27791,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26454__auto__ = (function (){var statearr_27789 = f__26453__auto__.call(null);
(statearr_27789[(6)] = c__26452__auto___27791);

return statearr_27789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto___27791,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__27811 = arguments.length;
switch (G__27811) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26452__auto___27865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto___27865,out){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto___27865,out){
return (function (state_27843){
var state_val_27844 = (state_27843[(1)]);
if((state_val_27844 === (7))){
var inst_27823 = (state_27843[(7)]);
var inst_27822 = (state_27843[(8)]);
var inst_27822__$1 = (state_27843[(2)]);
var inst_27823__$1 = cljs.core.nth.call(null,inst_27822__$1,(0),null);
var inst_27824 = cljs.core.nth.call(null,inst_27822__$1,(1),null);
var inst_27825 = (inst_27823__$1 == null);
var state_27843__$1 = (function (){var statearr_27845 = state_27843;
(statearr_27845[(7)] = inst_27823__$1);

(statearr_27845[(9)] = inst_27824);

(statearr_27845[(8)] = inst_27822__$1);

return statearr_27845;
})();
if(cljs.core.truth_(inst_27825)){
var statearr_27846_27866 = state_27843__$1;
(statearr_27846_27866[(1)] = (8));

} else {
var statearr_27847_27867 = state_27843__$1;
(statearr_27847_27867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (1))){
var inst_27812 = cljs.core.vec.call(null,chs);
var inst_27813 = inst_27812;
var state_27843__$1 = (function (){var statearr_27848 = state_27843;
(statearr_27848[(10)] = inst_27813);

return statearr_27848;
})();
var statearr_27849_27868 = state_27843__$1;
(statearr_27849_27868[(2)] = null);

(statearr_27849_27868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (4))){
var inst_27813 = (state_27843[(10)]);
var state_27843__$1 = state_27843;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27843__$1,(7),inst_27813);
} else {
if((state_val_27844 === (6))){
var inst_27839 = (state_27843[(2)]);
var state_27843__$1 = state_27843;
var statearr_27850_27869 = state_27843__$1;
(statearr_27850_27869[(2)] = inst_27839);

(statearr_27850_27869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (3))){
var inst_27841 = (state_27843[(2)]);
var state_27843__$1 = state_27843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27843__$1,inst_27841);
} else {
if((state_val_27844 === (2))){
var inst_27813 = (state_27843[(10)]);
var inst_27815 = cljs.core.count.call(null,inst_27813);
var inst_27816 = (inst_27815 > (0));
var state_27843__$1 = state_27843;
if(cljs.core.truth_(inst_27816)){
var statearr_27852_27870 = state_27843__$1;
(statearr_27852_27870[(1)] = (4));

} else {
var statearr_27853_27871 = state_27843__$1;
(statearr_27853_27871[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (11))){
var inst_27813 = (state_27843[(10)]);
var inst_27832 = (state_27843[(2)]);
var tmp27851 = inst_27813;
var inst_27813__$1 = tmp27851;
var state_27843__$1 = (function (){var statearr_27854 = state_27843;
(statearr_27854[(10)] = inst_27813__$1);

(statearr_27854[(11)] = inst_27832);

return statearr_27854;
})();
var statearr_27855_27872 = state_27843__$1;
(statearr_27855_27872[(2)] = null);

(statearr_27855_27872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (9))){
var inst_27823 = (state_27843[(7)]);
var state_27843__$1 = state_27843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27843__$1,(11),out,inst_27823);
} else {
if((state_val_27844 === (5))){
var inst_27837 = cljs.core.async.close_BANG_.call(null,out);
var state_27843__$1 = state_27843;
var statearr_27856_27873 = state_27843__$1;
(statearr_27856_27873[(2)] = inst_27837);

(statearr_27856_27873[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (10))){
var inst_27835 = (state_27843[(2)]);
var state_27843__$1 = state_27843;
var statearr_27857_27874 = state_27843__$1;
(statearr_27857_27874[(2)] = inst_27835);

(statearr_27857_27874[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27844 === (8))){
var inst_27813 = (state_27843[(10)]);
var inst_27823 = (state_27843[(7)]);
var inst_27824 = (state_27843[(9)]);
var inst_27822 = (state_27843[(8)]);
var inst_27827 = (function (){var cs = inst_27813;
var vec__27818 = inst_27822;
var v = inst_27823;
var c = inst_27824;
return ((function (cs,vec__27818,v,c,inst_27813,inst_27823,inst_27824,inst_27822,state_val_27844,c__26452__auto___27865,out){
return (function (p1__27809_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27809_SHARP_);
});
;})(cs,vec__27818,v,c,inst_27813,inst_27823,inst_27824,inst_27822,state_val_27844,c__26452__auto___27865,out))
})();
var inst_27828 = cljs.core.filterv.call(null,inst_27827,inst_27813);
var inst_27813__$1 = inst_27828;
var state_27843__$1 = (function (){var statearr_27858 = state_27843;
(statearr_27858[(10)] = inst_27813__$1);

return statearr_27858;
})();
var statearr_27859_27875 = state_27843__$1;
(statearr_27859_27875[(2)] = null);

(statearr_27859_27875[(1)] = (2));


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
});})(c__26452__auto___27865,out))
;
return ((function (switch__26362__auto__,c__26452__auto___27865,out){
return (function() {
var cljs$core$async$state_machine__26363__auto__ = null;
var cljs$core$async$state_machine__26363__auto____0 = (function (){
var statearr_27860 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27860[(0)] = cljs$core$async$state_machine__26363__auto__);

(statearr_27860[(1)] = (1));

return statearr_27860;
});
var cljs$core$async$state_machine__26363__auto____1 = (function (state_27843){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_27843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e27861){if((e27861 instanceof Object)){
var ex__26366__auto__ = e27861;
var statearr_27862_27876 = state_27843;
(statearr_27862_27876[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27877 = state_27843;
state_27843 = G__27877;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
cljs$core$async$state_machine__26363__auto__ = function(state_27843){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26363__auto____1.call(this,state_27843);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26363__auto____0;
cljs$core$async$state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26363__auto____1;
return cljs$core$async$state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto___27865,out))
})();
var state__26454__auto__ = (function (){var statearr_27863 = f__26453__auto__.call(null);
(statearr_27863[(6)] = c__26452__auto___27865);

return statearr_27863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto___27865,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__27879 = arguments.length;
switch (G__27879) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26452__auto___27924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto___27924,out){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto___27924,out){
return (function (state_27903){
var state_val_27904 = (state_27903[(1)]);
if((state_val_27904 === (7))){
var inst_27885 = (state_27903[(7)]);
var inst_27885__$1 = (state_27903[(2)]);
var inst_27886 = (inst_27885__$1 == null);
var inst_27887 = cljs.core.not.call(null,inst_27886);
var state_27903__$1 = (function (){var statearr_27905 = state_27903;
(statearr_27905[(7)] = inst_27885__$1);

return statearr_27905;
})();
if(inst_27887){
var statearr_27906_27925 = state_27903__$1;
(statearr_27906_27925[(1)] = (8));

} else {
var statearr_27907_27926 = state_27903__$1;
(statearr_27907_27926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (1))){
var inst_27880 = (0);
var state_27903__$1 = (function (){var statearr_27908 = state_27903;
(statearr_27908[(8)] = inst_27880);

return statearr_27908;
})();
var statearr_27909_27927 = state_27903__$1;
(statearr_27909_27927[(2)] = null);

(statearr_27909_27927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (4))){
var state_27903__$1 = state_27903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27903__$1,(7),ch);
} else {
if((state_val_27904 === (6))){
var inst_27898 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
var statearr_27910_27928 = state_27903__$1;
(statearr_27910_27928[(2)] = inst_27898);

(statearr_27910_27928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (3))){
var inst_27900 = (state_27903[(2)]);
var inst_27901 = cljs.core.async.close_BANG_.call(null,out);
var state_27903__$1 = (function (){var statearr_27911 = state_27903;
(statearr_27911[(9)] = inst_27900);

return statearr_27911;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27903__$1,inst_27901);
} else {
if((state_val_27904 === (2))){
var inst_27880 = (state_27903[(8)]);
var inst_27882 = (inst_27880 < n);
var state_27903__$1 = state_27903;
if(cljs.core.truth_(inst_27882)){
var statearr_27912_27929 = state_27903__$1;
(statearr_27912_27929[(1)] = (4));

} else {
var statearr_27913_27930 = state_27903__$1;
(statearr_27913_27930[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (11))){
var inst_27880 = (state_27903[(8)]);
var inst_27890 = (state_27903[(2)]);
var inst_27891 = (inst_27880 + (1));
var inst_27880__$1 = inst_27891;
var state_27903__$1 = (function (){var statearr_27914 = state_27903;
(statearr_27914[(10)] = inst_27890);

(statearr_27914[(8)] = inst_27880__$1);

return statearr_27914;
})();
var statearr_27915_27931 = state_27903__$1;
(statearr_27915_27931[(2)] = null);

(statearr_27915_27931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (9))){
var state_27903__$1 = state_27903;
var statearr_27916_27932 = state_27903__$1;
(statearr_27916_27932[(2)] = null);

(statearr_27916_27932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (5))){
var state_27903__$1 = state_27903;
var statearr_27917_27933 = state_27903__$1;
(statearr_27917_27933[(2)] = null);

(statearr_27917_27933[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (10))){
var inst_27895 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
var statearr_27918_27934 = state_27903__$1;
(statearr_27918_27934[(2)] = inst_27895);

(statearr_27918_27934[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27904 === (8))){
var inst_27885 = (state_27903[(7)]);
var state_27903__$1 = state_27903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27903__$1,(11),out,inst_27885);
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
});})(c__26452__auto___27924,out))
;
return ((function (switch__26362__auto__,c__26452__auto___27924,out){
return (function() {
var cljs$core$async$state_machine__26363__auto__ = null;
var cljs$core$async$state_machine__26363__auto____0 = (function (){
var statearr_27919 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27919[(0)] = cljs$core$async$state_machine__26363__auto__);

(statearr_27919[(1)] = (1));

return statearr_27919;
});
var cljs$core$async$state_machine__26363__auto____1 = (function (state_27903){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_27903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e27920){if((e27920 instanceof Object)){
var ex__26366__auto__ = e27920;
var statearr_27921_27935 = state_27903;
(statearr_27921_27935[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27936 = state_27903;
state_27903 = G__27936;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
cljs$core$async$state_machine__26363__auto__ = function(state_27903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26363__auto____1.call(this,state_27903);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26363__auto____0;
cljs$core$async$state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26363__auto____1;
return cljs$core$async$state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto___27924,out))
})();
var state__26454__auto__ = (function (){var statearr_27922 = f__26453__auto__.call(null);
(statearr_27922[(6)] = c__26452__auto___27924);

return statearr_27922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto___27924,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27938 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27938 = (function (f,ch,meta27939){
this.f = f;
this.ch = ch;
this.meta27939 = meta27939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27940,meta27939__$1){
var self__ = this;
var _27940__$1 = this;
return (new cljs.core.async.t_cljs$core$async27938(self__.f,self__.ch,meta27939__$1));
});

cljs.core.async.t_cljs$core$async27938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27940){
var self__ = this;
var _27940__$1 = this;
return self__.meta27939;
});

cljs.core.async.t_cljs$core$async27938.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27938.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27938.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27938.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27938.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27941 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27941 = (function (f,ch,meta27939,_,fn1,meta27942){
this.f = f;
this.ch = ch;
this.meta27939 = meta27939;
this._ = _;
this.fn1 = fn1;
this.meta27942 = meta27942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27943,meta27942__$1){
var self__ = this;
var _27943__$1 = this;
return (new cljs.core.async.t_cljs$core$async27941(self__.f,self__.ch,self__.meta27939,self__._,self__.fn1,meta27942__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27941.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27943){
var self__ = this;
var _27943__$1 = this;
return self__.meta27942;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27941.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27941.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27941.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27941.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27937_SHARP_){
return f1.call(null,(((p1__27937_SHARP_ == null))?null:self__.f.call(null,p1__27937_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27941.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27939","meta27939",-1901148023,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27938","cljs.core.async/t_cljs$core$async27938",841669781,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27942","meta27942",564383911,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27941.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27941.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27941";

cljs.core.async.t_cljs$core$async27941.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27941");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27941.
 */
cljs.core.async.__GT_t_cljs$core$async27941 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27941(f__$1,ch__$1,meta27939__$1,___$2,fn1__$1,meta27942){
return (new cljs.core.async.t_cljs$core$async27941(f__$1,ch__$1,meta27939__$1,___$2,fn1__$1,meta27942));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27941(self__.f,self__.ch,self__.meta27939,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27938.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27938.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27938.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27939","meta27939",-1901148023,null)], null);
});

cljs.core.async.t_cljs$core$async27938.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27938.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27938";

cljs.core.async.t_cljs$core$async27938.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27938");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27938.
 */
cljs.core.async.__GT_t_cljs$core$async27938 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27938(f__$1,ch__$1,meta27939){
return (new cljs.core.async.t_cljs$core$async27938(f__$1,ch__$1,meta27939));
});

}

return (new cljs.core.async.t_cljs$core$async27938(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27944 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27944 = (function (f,ch,meta27945){
this.f = f;
this.ch = ch;
this.meta27945 = meta27945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27946,meta27945__$1){
var self__ = this;
var _27946__$1 = this;
return (new cljs.core.async.t_cljs$core$async27944(self__.f,self__.ch,meta27945__$1));
});

cljs.core.async.t_cljs$core$async27944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27946){
var self__ = this;
var _27946__$1 = this;
return self__.meta27945;
});

cljs.core.async.t_cljs$core$async27944.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27944.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27944.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27944.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27944.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27944.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27945","meta27945",272379116,null)], null);
});

cljs.core.async.t_cljs$core$async27944.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27944";

cljs.core.async.t_cljs$core$async27944.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27944");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27944.
 */
cljs.core.async.__GT_t_cljs$core$async27944 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27944(f__$1,ch__$1,meta27945){
return (new cljs.core.async.t_cljs$core$async27944(f__$1,ch__$1,meta27945));
});

}

return (new cljs.core.async.t_cljs$core$async27944(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27947 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27947 = (function (p,ch,meta27948){
this.p = p;
this.ch = ch;
this.meta27948 = meta27948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27949,meta27948__$1){
var self__ = this;
var _27949__$1 = this;
return (new cljs.core.async.t_cljs$core$async27947(self__.p,self__.ch,meta27948__$1));
});

cljs.core.async.t_cljs$core$async27947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27949){
var self__ = this;
var _27949__$1 = this;
return self__.meta27948;
});

cljs.core.async.t_cljs$core$async27947.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27947.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27947.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27947.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27947.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27947.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27947.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27947.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27948","meta27948",1937020442,null)], null);
});

cljs.core.async.t_cljs$core$async27947.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27947.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27947";

cljs.core.async.t_cljs$core$async27947.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27947");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27947.
 */
cljs.core.async.__GT_t_cljs$core$async27947 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27947(p__$1,ch__$1,meta27948){
return (new cljs.core.async.t_cljs$core$async27947(p__$1,ch__$1,meta27948));
});

}

return (new cljs.core.async.t_cljs$core$async27947(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__27951 = arguments.length;
switch (G__27951) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26452__auto___27991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto___27991,out){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto___27991,out){
return (function (state_27972){
var state_val_27973 = (state_27972[(1)]);
if((state_val_27973 === (7))){
var inst_27968 = (state_27972[(2)]);
var state_27972__$1 = state_27972;
var statearr_27974_27992 = state_27972__$1;
(statearr_27974_27992[(2)] = inst_27968);

(statearr_27974_27992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27973 === (1))){
var state_27972__$1 = state_27972;
var statearr_27975_27993 = state_27972__$1;
(statearr_27975_27993[(2)] = null);

(statearr_27975_27993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27973 === (4))){
var inst_27954 = (state_27972[(7)]);
var inst_27954__$1 = (state_27972[(2)]);
var inst_27955 = (inst_27954__$1 == null);
var state_27972__$1 = (function (){var statearr_27976 = state_27972;
(statearr_27976[(7)] = inst_27954__$1);

return statearr_27976;
})();
if(cljs.core.truth_(inst_27955)){
var statearr_27977_27994 = state_27972__$1;
(statearr_27977_27994[(1)] = (5));

} else {
var statearr_27978_27995 = state_27972__$1;
(statearr_27978_27995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27973 === (6))){
var inst_27954 = (state_27972[(7)]);
var inst_27959 = p.call(null,inst_27954);
var state_27972__$1 = state_27972;
if(cljs.core.truth_(inst_27959)){
var statearr_27979_27996 = state_27972__$1;
(statearr_27979_27996[(1)] = (8));

} else {
var statearr_27980_27997 = state_27972__$1;
(statearr_27980_27997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27973 === (3))){
var inst_27970 = (state_27972[(2)]);
var state_27972__$1 = state_27972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27972__$1,inst_27970);
} else {
if((state_val_27973 === (2))){
var state_27972__$1 = state_27972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27972__$1,(4),ch);
} else {
if((state_val_27973 === (11))){
var inst_27962 = (state_27972[(2)]);
var state_27972__$1 = state_27972;
var statearr_27981_27998 = state_27972__$1;
(statearr_27981_27998[(2)] = inst_27962);

(statearr_27981_27998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27973 === (9))){
var state_27972__$1 = state_27972;
var statearr_27982_27999 = state_27972__$1;
(statearr_27982_27999[(2)] = null);

(statearr_27982_27999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27973 === (5))){
var inst_27957 = cljs.core.async.close_BANG_.call(null,out);
var state_27972__$1 = state_27972;
var statearr_27983_28000 = state_27972__$1;
(statearr_27983_28000[(2)] = inst_27957);

(statearr_27983_28000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27973 === (10))){
var inst_27965 = (state_27972[(2)]);
var state_27972__$1 = (function (){var statearr_27984 = state_27972;
(statearr_27984[(8)] = inst_27965);

return statearr_27984;
})();
var statearr_27985_28001 = state_27972__$1;
(statearr_27985_28001[(2)] = null);

(statearr_27985_28001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27973 === (8))){
var inst_27954 = (state_27972[(7)]);
var state_27972__$1 = state_27972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27972__$1,(11),out,inst_27954);
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
});})(c__26452__auto___27991,out))
;
return ((function (switch__26362__auto__,c__26452__auto___27991,out){
return (function() {
var cljs$core$async$state_machine__26363__auto__ = null;
var cljs$core$async$state_machine__26363__auto____0 = (function (){
var statearr_27986 = [null,null,null,null,null,null,null,null,null];
(statearr_27986[(0)] = cljs$core$async$state_machine__26363__auto__);

(statearr_27986[(1)] = (1));

return statearr_27986;
});
var cljs$core$async$state_machine__26363__auto____1 = (function (state_27972){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_27972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e27987){if((e27987 instanceof Object)){
var ex__26366__auto__ = e27987;
var statearr_27988_28002 = state_27972;
(statearr_27988_28002[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28003 = state_27972;
state_27972 = G__28003;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
cljs$core$async$state_machine__26363__auto__ = function(state_27972){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26363__auto____1.call(this,state_27972);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26363__auto____0;
cljs$core$async$state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26363__auto____1;
return cljs$core$async$state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto___27991,out))
})();
var state__26454__auto__ = (function (){var statearr_27989 = f__26453__auto__.call(null);
(statearr_27989[(6)] = c__26452__auto___27991);

return statearr_27989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto___27991,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28005 = arguments.length;
switch (G__28005) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26452__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto__){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto__){
return (function (state_28068){
var state_val_28069 = (state_28068[(1)]);
if((state_val_28069 === (7))){
var inst_28064 = (state_28068[(2)]);
var state_28068__$1 = state_28068;
var statearr_28070_28108 = state_28068__$1;
(statearr_28070_28108[(2)] = inst_28064);

(statearr_28070_28108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28069 === (20))){
var inst_28034 = (state_28068[(7)]);
var inst_28045 = (state_28068[(2)]);
var inst_28046 = cljs.core.next.call(null,inst_28034);
var inst_28020 = inst_28046;
var inst_28021 = null;
var inst_28022 = (0);
var inst_28023 = (0);
var state_28068__$1 = (function (){var statearr_28071 = state_28068;
(statearr_28071[(8)] = inst_28022);

(statearr_28071[(9)] = inst_28045);

(statearr_28071[(10)] = inst_28023);

(statearr_28071[(11)] = inst_28021);

(statearr_28071[(12)] = inst_28020);

return statearr_28071;
})();
var statearr_28072_28109 = state_28068__$1;
(statearr_28072_28109[(2)] = null);

(statearr_28072_28109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28069 === (1))){
var state_28068__$1 = state_28068;
var statearr_28073_28110 = state_28068__$1;
(statearr_28073_28110[(2)] = null);

(statearr_28073_28110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28069 === (4))){
var inst_28009 = (state_28068[(13)]);
var inst_28009__$1 = (state_28068[(2)]);
var inst_28010 = (inst_28009__$1 == null);
var state_28068__$1 = (function (){var statearr_28074 = state_28068;
(statearr_28074[(13)] = inst_28009__$1);

return statearr_28074;
})();
if(cljs.core.truth_(inst_28010)){
var statearr_28075_28111 = state_28068__$1;
(statearr_28075_28111[(1)] = (5));

} else {
var statearr_28076_28112 = state_28068__$1;
(statearr_28076_28112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28069 === (15))){
var state_28068__$1 = state_28068;
var statearr_28080_28113 = state_28068__$1;
(statearr_28080_28113[(2)] = null);

(statearr_28080_28113[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28069 === (21))){
var state_28068__$1 = state_28068;
var statearr_28081_28114 = state_28068__$1;
(statearr_28081_28114[(2)] = null);

(statearr_28081_28114[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28069 === (13))){
var inst_28022 = (state_28068[(8)]);
var inst_28023 = (state_28068[(10)]);
var inst_28021 = (state_28068[(11)]);
var inst_28020 = (state_28068[(12)]);
var inst_28030 = (state_28068[(2)]);
var inst_28031 = (inst_28023 + (1));
var tmp28077 = inst_28022;
var tmp28078 = inst_28021;
var tmp28079 = inst_28020;
var inst_28020__$1 = tmp28079;
var inst_28021__$1 = tmp28078;
var inst_28022__$1 = tmp28077;
var inst_28023__$1 = inst_28031;
var state_28068__$1 = (function (){var statearr_28082 = state_28068;
(statearr_28082[(8)] = inst_28022__$1);

(statearr_28082[(10)] = inst_28023__$1);

(statearr_28082[(11)] = inst_28021__$1);

(statearr_28082[(14)] = inst_28030);

(statearr_28082[(12)] = inst_28020__$1);

return statearr_28082;
})();
var statearr_28083_28115 = state_28068__$1;
(statearr_28083_28115[(2)] = null);

(statearr_28083_28115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28069 === (22))){
var state_28068__$1 = state_28068;
var statearr_28084_28116 = state_28068__$1;
(statearr_28084_28116[(2)] = null);

(statearr_28084_28116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28069 === (6))){
var inst_28009 = (state_28068[(13)]);
var inst_28018 = f.call(null,inst_28009);
var inst_28019 = cljs.core.seq.call(null,inst_28018);
var inst_28020 = inst_28019;
var inst_28021 = null;
var inst_28022 = (0);
var inst_28023 = (0);
var state_28068__$1 = (function (){var statearr_28085 = state_28068;
(statearr_28085[(8)] = inst_28022);

(statearr_28085[(10)] = inst_28023);

(statearr_28085[(11)] = inst_28021);

(statearr_28085[(12)] = inst_28020);

return statearr_28085;
})();
var statearr_28086_28117 = state_28068__$1;
(statearr_28086_28117[(2)] = null);

(statearr_28086_28117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28069 === (17))){
var inst_28034 = (state_28068[(7)]);
var inst_28038 = cljs.core.chunk_first.call(null,inst_28034);
var inst_28039 = cljs.core.chunk_rest.call(null,inst_28034);
var inst_28040 = cljs.core.count.call(null,inst_28038);
var inst_28020 = inst_28039;
var inst_28021 = inst_28038;
var inst_28022 = inst_28040;
var inst_28023 = (0);
var state_28068__$1 = (function (){var statearr_28087 = state_28068;
(statearr_28087[(8)] = inst_28022);

(statearr_28087[(10)] = inst_28023);

(statearr_28087[(11)] = inst_28021);

(statearr_28087[(12)] = inst_28020);

return statearr_28087;
})();
var statearr_28088_28118 = state_28068__$1;
(statearr_28088_28118[(2)] = null);

(statearr_28088_28118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28069 === (3))){
var inst_28066 = (state_28068[(2)]);
var state_28068__$1 = state_28068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28068__$1,inst_28066);
} else {
if((state_val_28069 === (12))){
var inst_28054 = (state_28068[(2)]);
var state_28068__$1 = state_28068;
var statearr_28089_28119 = state_28068__$1;
(statearr_28089_28119[(2)] = inst_28054);

(statearr_28089_28119[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28069 === (2))){
var state_28068__$1 = state_28068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28068__$1,(4),in$);
} else {
if((state_val_28069 === (23))){
var inst_28062 = (state_28068[(2)]);
var state_28068__$1 = state_28068;
var statearr_28090_28120 = state_28068__$1;
(statearr_28090_28120[(2)] = inst_28062);

(statearr_28090_28120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28069 === (19))){
var inst_28049 = (state_28068[(2)]);
var state_28068__$1 = state_28068;
var statearr_28091_28121 = state_28068__$1;
(statearr_28091_28121[(2)] = inst_28049);

(statearr_28091_28121[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28069 === (11))){
var inst_28020 = (state_28068[(12)]);
var inst_28034 = (state_28068[(7)]);
var inst_28034__$1 = cljs.core.seq.call(null,inst_28020);
var state_28068__$1 = (function (){var statearr_28092 = state_28068;
(statearr_28092[(7)] = inst_28034__$1);

return statearr_28092;
})();
if(inst_28034__$1){
var statearr_28093_28122 = state_28068__$1;
(statearr_28093_28122[(1)] = (14));

} else {
var statearr_28094_28123 = state_28068__$1;
(statearr_28094_28123[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28069 === (9))){
var inst_28056 = (state_28068[(2)]);
var inst_28057 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28068__$1 = (function (){var statearr_28095 = state_28068;
(statearr_28095[(15)] = inst_28056);

return statearr_28095;
})();
if(cljs.core.truth_(inst_28057)){
var statearr_28096_28124 = state_28068__$1;
(statearr_28096_28124[(1)] = (21));

} else {
var statearr_28097_28125 = state_28068__$1;
(statearr_28097_28125[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28069 === (5))){
var inst_28012 = cljs.core.async.close_BANG_.call(null,out);
var state_28068__$1 = state_28068;
var statearr_28098_28126 = state_28068__$1;
(statearr_28098_28126[(2)] = inst_28012);

(statearr_28098_28126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28069 === (14))){
var inst_28034 = (state_28068[(7)]);
var inst_28036 = cljs.core.chunked_seq_QMARK_.call(null,inst_28034);
var state_28068__$1 = state_28068;
if(inst_28036){
var statearr_28099_28127 = state_28068__$1;
(statearr_28099_28127[(1)] = (17));

} else {
var statearr_28100_28128 = state_28068__$1;
(statearr_28100_28128[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28069 === (16))){
var inst_28052 = (state_28068[(2)]);
var state_28068__$1 = state_28068;
var statearr_28101_28129 = state_28068__$1;
(statearr_28101_28129[(2)] = inst_28052);

(statearr_28101_28129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28069 === (10))){
var inst_28023 = (state_28068[(10)]);
var inst_28021 = (state_28068[(11)]);
var inst_28028 = cljs.core._nth.call(null,inst_28021,inst_28023);
var state_28068__$1 = state_28068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28068__$1,(13),out,inst_28028);
} else {
if((state_val_28069 === (18))){
var inst_28034 = (state_28068[(7)]);
var inst_28043 = cljs.core.first.call(null,inst_28034);
var state_28068__$1 = state_28068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28068__$1,(20),out,inst_28043);
} else {
if((state_val_28069 === (8))){
var inst_28022 = (state_28068[(8)]);
var inst_28023 = (state_28068[(10)]);
var inst_28025 = (inst_28023 < inst_28022);
var inst_28026 = inst_28025;
var state_28068__$1 = state_28068;
if(cljs.core.truth_(inst_28026)){
var statearr_28102_28130 = state_28068__$1;
(statearr_28102_28130[(1)] = (10));

} else {
var statearr_28103_28131 = state_28068__$1;
(statearr_28103_28131[(1)] = (11));

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
});})(c__26452__auto__))
;
return ((function (switch__26362__auto__,c__26452__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26363__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26363__auto____0 = (function (){
var statearr_28104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28104[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26363__auto__);

(statearr_28104[(1)] = (1));

return statearr_28104;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26363__auto____1 = (function (state_28068){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_28068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e28105){if((e28105 instanceof Object)){
var ex__26366__auto__ = e28105;
var statearr_28106_28132 = state_28068;
(statearr_28106_28132[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28133 = state_28068;
state_28068 = G__28133;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26363__auto__ = function(state_28068){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26363__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26363__auto____1.call(this,state_28068);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26363__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26363__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto__))
})();
var state__26454__auto__ = (function (){var statearr_28107 = f__26453__auto__.call(null);
(statearr_28107[(6)] = c__26452__auto__);

return statearr_28107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto__))
);

return c__26452__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28135 = arguments.length;
switch (G__28135) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28138 = arguments.length;
switch (G__28138) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28141 = arguments.length;
switch (G__28141) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26452__auto___28188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto___28188,out){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto___28188,out){
return (function (state_28165){
var state_val_28166 = (state_28165[(1)]);
if((state_val_28166 === (7))){
var inst_28160 = (state_28165[(2)]);
var state_28165__$1 = state_28165;
var statearr_28167_28189 = state_28165__$1;
(statearr_28167_28189[(2)] = inst_28160);

(statearr_28167_28189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (1))){
var inst_28142 = null;
var state_28165__$1 = (function (){var statearr_28168 = state_28165;
(statearr_28168[(7)] = inst_28142);

return statearr_28168;
})();
var statearr_28169_28190 = state_28165__$1;
(statearr_28169_28190[(2)] = null);

(statearr_28169_28190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (4))){
var inst_28145 = (state_28165[(8)]);
var inst_28145__$1 = (state_28165[(2)]);
var inst_28146 = (inst_28145__$1 == null);
var inst_28147 = cljs.core.not.call(null,inst_28146);
var state_28165__$1 = (function (){var statearr_28170 = state_28165;
(statearr_28170[(8)] = inst_28145__$1);

return statearr_28170;
})();
if(inst_28147){
var statearr_28171_28191 = state_28165__$1;
(statearr_28171_28191[(1)] = (5));

} else {
var statearr_28172_28192 = state_28165__$1;
(statearr_28172_28192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (6))){
var state_28165__$1 = state_28165;
var statearr_28173_28193 = state_28165__$1;
(statearr_28173_28193[(2)] = null);

(statearr_28173_28193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (3))){
var inst_28162 = (state_28165[(2)]);
var inst_28163 = cljs.core.async.close_BANG_.call(null,out);
var state_28165__$1 = (function (){var statearr_28174 = state_28165;
(statearr_28174[(9)] = inst_28162);

return statearr_28174;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28165__$1,inst_28163);
} else {
if((state_val_28166 === (2))){
var state_28165__$1 = state_28165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28165__$1,(4),ch);
} else {
if((state_val_28166 === (11))){
var inst_28145 = (state_28165[(8)]);
var inst_28154 = (state_28165[(2)]);
var inst_28142 = inst_28145;
var state_28165__$1 = (function (){var statearr_28175 = state_28165;
(statearr_28175[(10)] = inst_28154);

(statearr_28175[(7)] = inst_28142);

return statearr_28175;
})();
var statearr_28176_28194 = state_28165__$1;
(statearr_28176_28194[(2)] = null);

(statearr_28176_28194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (9))){
var inst_28145 = (state_28165[(8)]);
var state_28165__$1 = state_28165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28165__$1,(11),out,inst_28145);
} else {
if((state_val_28166 === (5))){
var inst_28142 = (state_28165[(7)]);
var inst_28145 = (state_28165[(8)]);
var inst_28149 = cljs.core._EQ_.call(null,inst_28145,inst_28142);
var state_28165__$1 = state_28165;
if(inst_28149){
var statearr_28178_28195 = state_28165__$1;
(statearr_28178_28195[(1)] = (8));

} else {
var statearr_28179_28196 = state_28165__$1;
(statearr_28179_28196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (10))){
var inst_28157 = (state_28165[(2)]);
var state_28165__$1 = state_28165;
var statearr_28180_28197 = state_28165__$1;
(statearr_28180_28197[(2)] = inst_28157);

(statearr_28180_28197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28166 === (8))){
var inst_28142 = (state_28165[(7)]);
var tmp28177 = inst_28142;
var inst_28142__$1 = tmp28177;
var state_28165__$1 = (function (){var statearr_28181 = state_28165;
(statearr_28181[(7)] = inst_28142__$1);

return statearr_28181;
})();
var statearr_28182_28198 = state_28165__$1;
(statearr_28182_28198[(2)] = null);

(statearr_28182_28198[(1)] = (2));


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
});})(c__26452__auto___28188,out))
;
return ((function (switch__26362__auto__,c__26452__auto___28188,out){
return (function() {
var cljs$core$async$state_machine__26363__auto__ = null;
var cljs$core$async$state_machine__26363__auto____0 = (function (){
var statearr_28183 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28183[(0)] = cljs$core$async$state_machine__26363__auto__);

(statearr_28183[(1)] = (1));

return statearr_28183;
});
var cljs$core$async$state_machine__26363__auto____1 = (function (state_28165){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_28165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e28184){if((e28184 instanceof Object)){
var ex__26366__auto__ = e28184;
var statearr_28185_28199 = state_28165;
(statearr_28185_28199[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28200 = state_28165;
state_28165 = G__28200;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
cljs$core$async$state_machine__26363__auto__ = function(state_28165){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26363__auto____1.call(this,state_28165);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26363__auto____0;
cljs$core$async$state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26363__auto____1;
return cljs$core$async$state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto___28188,out))
})();
var state__26454__auto__ = (function (){var statearr_28186 = f__26453__auto__.call(null);
(statearr_28186[(6)] = c__26452__auto___28188);

return statearr_28186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto___28188,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28202 = arguments.length;
switch (G__28202) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26452__auto___28268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto___28268,out){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto___28268,out){
return (function (state_28240){
var state_val_28241 = (state_28240[(1)]);
if((state_val_28241 === (7))){
var inst_28236 = (state_28240[(2)]);
var state_28240__$1 = state_28240;
var statearr_28242_28269 = state_28240__$1;
(statearr_28242_28269[(2)] = inst_28236);

(statearr_28242_28269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28241 === (1))){
var inst_28203 = (new Array(n));
var inst_28204 = inst_28203;
var inst_28205 = (0);
var state_28240__$1 = (function (){var statearr_28243 = state_28240;
(statearr_28243[(7)] = inst_28205);

(statearr_28243[(8)] = inst_28204);

return statearr_28243;
})();
var statearr_28244_28270 = state_28240__$1;
(statearr_28244_28270[(2)] = null);

(statearr_28244_28270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28241 === (4))){
var inst_28208 = (state_28240[(9)]);
var inst_28208__$1 = (state_28240[(2)]);
var inst_28209 = (inst_28208__$1 == null);
var inst_28210 = cljs.core.not.call(null,inst_28209);
var state_28240__$1 = (function (){var statearr_28245 = state_28240;
(statearr_28245[(9)] = inst_28208__$1);

return statearr_28245;
})();
if(inst_28210){
var statearr_28246_28271 = state_28240__$1;
(statearr_28246_28271[(1)] = (5));

} else {
var statearr_28247_28272 = state_28240__$1;
(statearr_28247_28272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28241 === (15))){
var inst_28230 = (state_28240[(2)]);
var state_28240__$1 = state_28240;
var statearr_28248_28273 = state_28240__$1;
(statearr_28248_28273[(2)] = inst_28230);

(statearr_28248_28273[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28241 === (13))){
var state_28240__$1 = state_28240;
var statearr_28249_28274 = state_28240__$1;
(statearr_28249_28274[(2)] = null);

(statearr_28249_28274[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28241 === (6))){
var inst_28205 = (state_28240[(7)]);
var inst_28226 = (inst_28205 > (0));
var state_28240__$1 = state_28240;
if(cljs.core.truth_(inst_28226)){
var statearr_28250_28275 = state_28240__$1;
(statearr_28250_28275[(1)] = (12));

} else {
var statearr_28251_28276 = state_28240__$1;
(statearr_28251_28276[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28241 === (3))){
var inst_28238 = (state_28240[(2)]);
var state_28240__$1 = state_28240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28240__$1,inst_28238);
} else {
if((state_val_28241 === (12))){
var inst_28204 = (state_28240[(8)]);
var inst_28228 = cljs.core.vec.call(null,inst_28204);
var state_28240__$1 = state_28240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28240__$1,(15),out,inst_28228);
} else {
if((state_val_28241 === (2))){
var state_28240__$1 = state_28240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28240__$1,(4),ch);
} else {
if((state_val_28241 === (11))){
var inst_28220 = (state_28240[(2)]);
var inst_28221 = (new Array(n));
var inst_28204 = inst_28221;
var inst_28205 = (0);
var state_28240__$1 = (function (){var statearr_28252 = state_28240;
(statearr_28252[(7)] = inst_28205);

(statearr_28252[(10)] = inst_28220);

(statearr_28252[(8)] = inst_28204);

return statearr_28252;
})();
var statearr_28253_28277 = state_28240__$1;
(statearr_28253_28277[(2)] = null);

(statearr_28253_28277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28241 === (9))){
var inst_28204 = (state_28240[(8)]);
var inst_28218 = cljs.core.vec.call(null,inst_28204);
var state_28240__$1 = state_28240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28240__$1,(11),out,inst_28218);
} else {
if((state_val_28241 === (5))){
var inst_28213 = (state_28240[(11)]);
var inst_28205 = (state_28240[(7)]);
var inst_28204 = (state_28240[(8)]);
var inst_28208 = (state_28240[(9)]);
var inst_28212 = (inst_28204[inst_28205] = inst_28208);
var inst_28213__$1 = (inst_28205 + (1));
var inst_28214 = (inst_28213__$1 < n);
var state_28240__$1 = (function (){var statearr_28254 = state_28240;
(statearr_28254[(12)] = inst_28212);

(statearr_28254[(11)] = inst_28213__$1);

return statearr_28254;
})();
if(cljs.core.truth_(inst_28214)){
var statearr_28255_28278 = state_28240__$1;
(statearr_28255_28278[(1)] = (8));

} else {
var statearr_28256_28279 = state_28240__$1;
(statearr_28256_28279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28241 === (14))){
var inst_28233 = (state_28240[(2)]);
var inst_28234 = cljs.core.async.close_BANG_.call(null,out);
var state_28240__$1 = (function (){var statearr_28258 = state_28240;
(statearr_28258[(13)] = inst_28233);

return statearr_28258;
})();
var statearr_28259_28280 = state_28240__$1;
(statearr_28259_28280[(2)] = inst_28234);

(statearr_28259_28280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28241 === (10))){
var inst_28224 = (state_28240[(2)]);
var state_28240__$1 = state_28240;
var statearr_28260_28281 = state_28240__$1;
(statearr_28260_28281[(2)] = inst_28224);

(statearr_28260_28281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28241 === (8))){
var inst_28213 = (state_28240[(11)]);
var inst_28204 = (state_28240[(8)]);
var tmp28257 = inst_28204;
var inst_28204__$1 = tmp28257;
var inst_28205 = inst_28213;
var state_28240__$1 = (function (){var statearr_28261 = state_28240;
(statearr_28261[(7)] = inst_28205);

(statearr_28261[(8)] = inst_28204__$1);

return statearr_28261;
})();
var statearr_28262_28282 = state_28240__$1;
(statearr_28262_28282[(2)] = null);

(statearr_28262_28282[(1)] = (2));


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
});})(c__26452__auto___28268,out))
;
return ((function (switch__26362__auto__,c__26452__auto___28268,out){
return (function() {
var cljs$core$async$state_machine__26363__auto__ = null;
var cljs$core$async$state_machine__26363__auto____0 = (function (){
var statearr_28263 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28263[(0)] = cljs$core$async$state_machine__26363__auto__);

(statearr_28263[(1)] = (1));

return statearr_28263;
});
var cljs$core$async$state_machine__26363__auto____1 = (function (state_28240){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_28240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e28264){if((e28264 instanceof Object)){
var ex__26366__auto__ = e28264;
var statearr_28265_28283 = state_28240;
(statearr_28265_28283[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28284 = state_28240;
state_28240 = G__28284;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
cljs$core$async$state_machine__26363__auto__ = function(state_28240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26363__auto____1.call(this,state_28240);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26363__auto____0;
cljs$core$async$state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26363__auto____1;
return cljs$core$async$state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto___28268,out))
})();
var state__26454__auto__ = (function (){var statearr_28266 = f__26453__auto__.call(null);
(statearr_28266[(6)] = c__26452__auto___28268);

return statearr_28266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto___28268,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28286 = arguments.length;
switch (G__28286) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26452__auto___28356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26452__auto___28356,out){
return (function (){
var f__26453__auto__ = (function (){var switch__26362__auto__ = ((function (c__26452__auto___28356,out){
return (function (state_28328){
var state_val_28329 = (state_28328[(1)]);
if((state_val_28329 === (7))){
var inst_28324 = (state_28328[(2)]);
var state_28328__$1 = state_28328;
var statearr_28330_28357 = state_28328__$1;
(statearr_28330_28357[(2)] = inst_28324);

(statearr_28330_28357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (1))){
var inst_28287 = [];
var inst_28288 = inst_28287;
var inst_28289 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28328__$1 = (function (){var statearr_28331 = state_28328;
(statearr_28331[(7)] = inst_28289);

(statearr_28331[(8)] = inst_28288);

return statearr_28331;
})();
var statearr_28332_28358 = state_28328__$1;
(statearr_28332_28358[(2)] = null);

(statearr_28332_28358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (4))){
var inst_28292 = (state_28328[(9)]);
var inst_28292__$1 = (state_28328[(2)]);
var inst_28293 = (inst_28292__$1 == null);
var inst_28294 = cljs.core.not.call(null,inst_28293);
var state_28328__$1 = (function (){var statearr_28333 = state_28328;
(statearr_28333[(9)] = inst_28292__$1);

return statearr_28333;
})();
if(inst_28294){
var statearr_28334_28359 = state_28328__$1;
(statearr_28334_28359[(1)] = (5));

} else {
var statearr_28335_28360 = state_28328__$1;
(statearr_28335_28360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (15))){
var inst_28318 = (state_28328[(2)]);
var state_28328__$1 = state_28328;
var statearr_28336_28361 = state_28328__$1;
(statearr_28336_28361[(2)] = inst_28318);

(statearr_28336_28361[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (13))){
var state_28328__$1 = state_28328;
var statearr_28337_28362 = state_28328__$1;
(statearr_28337_28362[(2)] = null);

(statearr_28337_28362[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (6))){
var inst_28288 = (state_28328[(8)]);
var inst_28313 = inst_28288.length;
var inst_28314 = (inst_28313 > (0));
var state_28328__$1 = state_28328;
if(cljs.core.truth_(inst_28314)){
var statearr_28338_28363 = state_28328__$1;
(statearr_28338_28363[(1)] = (12));

} else {
var statearr_28339_28364 = state_28328__$1;
(statearr_28339_28364[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (3))){
var inst_28326 = (state_28328[(2)]);
var state_28328__$1 = state_28328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28328__$1,inst_28326);
} else {
if((state_val_28329 === (12))){
var inst_28288 = (state_28328[(8)]);
var inst_28316 = cljs.core.vec.call(null,inst_28288);
var state_28328__$1 = state_28328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28328__$1,(15),out,inst_28316);
} else {
if((state_val_28329 === (2))){
var state_28328__$1 = state_28328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28328__$1,(4),ch);
} else {
if((state_val_28329 === (11))){
var inst_28296 = (state_28328[(10)]);
var inst_28292 = (state_28328[(9)]);
var inst_28306 = (state_28328[(2)]);
var inst_28307 = [];
var inst_28308 = inst_28307.push(inst_28292);
var inst_28288 = inst_28307;
var inst_28289 = inst_28296;
var state_28328__$1 = (function (){var statearr_28340 = state_28328;
(statearr_28340[(7)] = inst_28289);

(statearr_28340[(11)] = inst_28306);

(statearr_28340[(8)] = inst_28288);

(statearr_28340[(12)] = inst_28308);

return statearr_28340;
})();
var statearr_28341_28365 = state_28328__$1;
(statearr_28341_28365[(2)] = null);

(statearr_28341_28365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (9))){
var inst_28288 = (state_28328[(8)]);
var inst_28304 = cljs.core.vec.call(null,inst_28288);
var state_28328__$1 = state_28328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28328__$1,(11),out,inst_28304);
} else {
if((state_val_28329 === (5))){
var inst_28296 = (state_28328[(10)]);
var inst_28292 = (state_28328[(9)]);
var inst_28289 = (state_28328[(7)]);
var inst_28296__$1 = f.call(null,inst_28292);
var inst_28297 = cljs.core._EQ_.call(null,inst_28296__$1,inst_28289);
var inst_28298 = cljs.core.keyword_identical_QMARK_.call(null,inst_28289,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28299 = ((inst_28297) || (inst_28298));
var state_28328__$1 = (function (){var statearr_28342 = state_28328;
(statearr_28342[(10)] = inst_28296__$1);

return statearr_28342;
})();
if(cljs.core.truth_(inst_28299)){
var statearr_28343_28366 = state_28328__$1;
(statearr_28343_28366[(1)] = (8));

} else {
var statearr_28344_28367 = state_28328__$1;
(statearr_28344_28367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (14))){
var inst_28321 = (state_28328[(2)]);
var inst_28322 = cljs.core.async.close_BANG_.call(null,out);
var state_28328__$1 = (function (){var statearr_28346 = state_28328;
(statearr_28346[(13)] = inst_28321);

return statearr_28346;
})();
var statearr_28347_28368 = state_28328__$1;
(statearr_28347_28368[(2)] = inst_28322);

(statearr_28347_28368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (10))){
var inst_28311 = (state_28328[(2)]);
var state_28328__$1 = state_28328;
var statearr_28348_28369 = state_28328__$1;
(statearr_28348_28369[(2)] = inst_28311);

(statearr_28348_28369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28329 === (8))){
var inst_28296 = (state_28328[(10)]);
var inst_28292 = (state_28328[(9)]);
var inst_28288 = (state_28328[(8)]);
var inst_28301 = inst_28288.push(inst_28292);
var tmp28345 = inst_28288;
var inst_28288__$1 = tmp28345;
var inst_28289 = inst_28296;
var state_28328__$1 = (function (){var statearr_28349 = state_28328;
(statearr_28349[(7)] = inst_28289);

(statearr_28349[(14)] = inst_28301);

(statearr_28349[(8)] = inst_28288__$1);

return statearr_28349;
})();
var statearr_28350_28370 = state_28328__$1;
(statearr_28350_28370[(2)] = null);

(statearr_28350_28370[(1)] = (2));


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
});})(c__26452__auto___28356,out))
;
return ((function (switch__26362__auto__,c__26452__auto___28356,out){
return (function() {
var cljs$core$async$state_machine__26363__auto__ = null;
var cljs$core$async$state_machine__26363__auto____0 = (function (){
var statearr_28351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28351[(0)] = cljs$core$async$state_machine__26363__auto__);

(statearr_28351[(1)] = (1));

return statearr_28351;
});
var cljs$core$async$state_machine__26363__auto____1 = (function (state_28328){
while(true){
var ret_value__26364__auto__ = (function (){try{while(true){
var result__26365__auto__ = switch__26362__auto__.call(null,state_28328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26365__auto__;
}
break;
}
}catch (e28352){if((e28352 instanceof Object)){
var ex__26366__auto__ = e28352;
var statearr_28353_28371 = state_28328;
(statearr_28353_28371[(5)] = ex__26366__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28372 = state_28328;
state_28328 = G__28372;
continue;
} else {
return ret_value__26364__auto__;
}
break;
}
});
cljs$core$async$state_machine__26363__auto__ = function(state_28328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26363__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26363__auto____1.call(this,state_28328);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26363__auto____0;
cljs$core$async$state_machine__26363__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26363__auto____1;
return cljs$core$async$state_machine__26363__auto__;
})()
;})(switch__26362__auto__,c__26452__auto___28356,out))
})();
var state__26454__auto__ = (function (){var statearr_28354 = f__26453__auto__.call(null);
(statearr_28354[(6)] = c__26452__auto___28356);

return statearr_28354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26454__auto__);
});})(c__26452__auto___28356,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1552095709044
