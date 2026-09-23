var ys = Object.defineProperty;
var vr = (e) => {
  throw TypeError(e);
};
var Es = (e, t, n) => t in e ? ys(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Le = (e, t, n) => Es(e, typeof t != "symbol" ? t + "" : t, n), Ln = (e, t, n) => t.has(e) || vr("Cannot " + n);
var i = (e, t, n) => (Ln(e, t, "read from private field"), n ? n.call(e) : t.get(e)), E = (e, t, n) => t.has(e) ? vr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), k = (e, t, n, r) => (Ln(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), I = (e, t, n) => (Ln(e, t, "access private method"), n);
const K = Symbol(), ks = "http://www.w3.org/1999/xhtml", Ts = !1;
var Sr = Array.isArray, Ss = Array.prototype.indexOf, Bt = Array.prototype.includes, Rn = Array.from, Cs = Object.defineProperty, Qt = Object.getOwnPropertyDescriptor, As = Object.prototype, Ns = Array.prototype, Ds = Object.getPrototypeOf, dr = Object.isExtensible;
const Ms = () => {
};
function Rs(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Cr() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
const re = 2, zt = 4, In = 8, Ar = 1 << 24, Ge = 16, qe = 32, ht = 64, $n = 128, Me = 512, V = 1024, Z = 2048, Ke = 4096, ue = 8192, Re = 16384, Mt = 32768, qn = 1 << 25, Vt = 65536, Bn = 1 << 17, Is = 1 << 18, Kt = 1 << 19, Os = 1 << 20, Ye = 1 << 25, At = 65536, zn = 1 << 21, tn = 1 << 22, vt = 1 << 23, wn = Symbol("$state"), Qe = new class extends Error {
  constructor() {
    super(...arguments);
    Le(this, "name", "StaleReactionError");
    Le(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Fs() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ls(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ps(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Hs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function $s(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function qs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Bs() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function zs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Vs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Us() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ys() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Gs() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Nr(e) {
  return e === this.v;
}
function Ks(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Dr(e) {
  return !Ks(e, this.v);
}
let Ws = !1, we = null;
function Ut(e) {
  we = e;
}
function Mr(e, t = !1, n) {
  we = {
    p: we,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      C
    ),
    l: null
  };
}
function Rr(e) {
  var t = (
    /** @type {ComponentContext} */
    we
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      Qr(r);
  }
  return t.i = !0, we = t.p, /** @type {T} */
  {};
}
function Ir() {
  return !0;
}
let It = [];
function Xs() {
  var e = It;
  It = [], Rs(e);
}
function kt(e) {
  if (It.length === 0) {
    var t = It;
    queueMicrotask(() => {
      t === It && Xs();
    });
  }
  It.push(e);
}
function Or(e) {
  var t = C;
  if (t === null)
    return T.f |= vt, e;
  if (!(t.f & Mt) && !(t.f & zt))
    throw e;
  ct(e, t);
}
function ct(e, t) {
  for (; t !== null; ) {
    if (t.f & $n) {
      if (!(t.f & Mt))
        throw e;
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    }
    t = t.parent;
  }
  throw e;
}
const Zs = -7169;
function q(e, t) {
  e.f = e.f & Zs | t;
}
function er(e) {
  e.f & Me || e.deps === null ? q(e, V) : q(e, Ke);
}
function Fr(e) {
  if (e !== null)
    for (const t of e)
      !(t.f & re) || !(t.f & At) || (t.f ^= At, Fr(
        /** @type {Derived} */
        t.deps
      ));
}
function Lr(e, t, n) {
  e.f & Z ? t.add(e) : e.f & Ke && n.add(e), Fr(e.deps), q(e, V);
}
const mt = /* @__PURE__ */ new Set();
let y = null, X = null, Vn = null, Pn = !1, Ot = null, jn = null;
var hr = 0;
let Js = 1;
var Ft, Lt, wt, et, ze, rn, pe, sn, ut, tt, Ve, Pt, Ht, jt, z, bn, Pr, yn, Un, En, Qs;
const Nn = class Nn {
  constructor() {
    E(this, z);
    Le(this, "id", Js++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Le(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Le(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, Ft, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, Lt, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, wt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    E(this, et, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    E(this, ze, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    E(this, rn, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    E(this, pe, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    E(this, sn, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    E(this, ut, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    E(this, tt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    E(this, Ve, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    E(this, Pt, /* @__PURE__ */ new Set());
    Le(this, "is_fork", !1);
    E(this, Ht, !1);
    /** @type {Set<Batch>} */
    E(this, jt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    i(this, Ve).has(t) || i(this, Ve).set(t, { d: [], m: [] }), i(this, Pt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = i(this, Ve).get(t);
    if (r) {
      i(this, Ve).delete(t);
      for (var s of r.d)
        q(s, Z), n(s);
      for (s of r.m)
        q(s, Ke), n(s);
    }
    i(this, Pt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== K && !this.previous.has(t) && this.previous.set(t, t.v), t.f & vt || (this.current.set(t, [n, r]), X == null || X.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    y = this;
  }
  deactivate() {
    y = null, X = null;
  }
  flush() {
    try {
      Pn = !0, y = this, I(this, z, yn).call(this);
    } finally {
      hr = 0, Vn = null, Ot = null, jn = null, Pn = !1, y = null, X = null, Tt.clear();
    }
  }
  discard() {
    for (const t of i(this, Lt)) t(this);
    i(this, Lt).clear(), i(this, wt).clear(), mt.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    i(this, sn).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    let r = i(this, et).get(n) ?? 0;
    if (i(this, et).set(n, r + 1), t) {
      let s = i(this, ze).get(n) ?? 0;
      i(this, ze).set(n, s + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, n, r) {
    let s = i(this, et).get(n) ?? 0;
    if (s === 1 ? i(this, et).delete(n) : i(this, et).set(n, s - 1), t) {
      let l = i(this, ze).get(n) ?? 0;
      l === 1 ? i(this, ze).delete(n) : i(this, ze).set(n, l - 1);
    }
    i(this, Ht) || r || (k(this, Ht, !0), kt(() => {
      k(this, Ht, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      i(this, ut).add(r);
    for (const r of n)
      i(this, tt).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    i(this, Ft).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    i(this, Lt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    i(this, wt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of i(this, wt)) t(this);
    i(this, wt).clear();
  }
  settled() {
    return (i(this, rn) ?? k(this, rn, Cr())).promise;
  }
  static ensure() {
    if (y === null) {
      const t = y = new Nn();
      Pn || (mt.add(y), kt(() => {
        y === t && t.flush();
      }));
    }
    return y;
  }
  apply() {
    {
      X = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var s;
    if (Vn = t, (s = t.b) != null && s.is_pending && t.f & (zt | In | Ar) && !(t.f & Mt)) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (Ot !== null && n === C && (T === null || !(T.f & re)))
        return;
      if (r & (ht | qe)) {
        if (!(r & V))
          return;
        n.f ^= V;
      }
    }
    i(this, pe).push(n);
  }
};
Ft = new WeakMap(), Lt = new WeakMap(), wt = new WeakMap(), et = new WeakMap(), ze = new WeakMap(), rn = new WeakMap(), pe = new WeakMap(), sn = new WeakMap(), ut = new WeakMap(), tt = new WeakMap(), Ve = new WeakMap(), Pt = new WeakMap(), Ht = new WeakMap(), jt = new WeakMap(), z = new WeakSet(), bn = function() {
  return this.is_fork || i(this, ze).size > 0;
}, Pr = function() {
  for (const r of i(this, jt))
    for (const s of i(r, ze).keys()) {
      for (var t = !1, n = s; n.parent !== null; ) {
        if (i(this, Ve).has(n)) {
          t = !0;
          break;
        }
        n = n.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, yn = function() {
  var f, a;
  if (hr++ > 1e3 && (mt.delete(this), ei()), !I(this, z, bn).call(this)) {
    for (const u of i(this, ut))
      i(this, tt).delete(u), q(u, Z), this.schedule(u);
    for (const u of i(this, tt))
      q(u, Ke), this.schedule(u);
  }
  const t = i(this, pe);
  k(this, pe, []), this.apply();
  var n = Ot = [], r = [], s = jn = [];
  for (const u of t)
    try {
      I(this, z, Un).call(this, u, n, r);
    } catch (v) {
      throw qr(u), v;
    }
  if (y = null, s.length > 0) {
    var l = Nn.ensure();
    for (const u of s)
      l.schedule(u);
  }
  if (Ot = null, jn = null, I(this, z, bn).call(this) || I(this, z, Pr).call(this)) {
    I(this, z, En).call(this, r), I(this, z, En).call(this, n);
    for (const [u, v] of i(this, Ve))
      $r(u, v);
  } else {
    i(this, et).size === 0 && mt.delete(this), i(this, ut).clear(), i(this, tt).clear();
    for (const u of i(this, Ft)) u(this);
    i(this, Ft).clear(), _r(r), _r(n), (f = i(this, rn)) == null || f.resolve();
  }
  var o = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    y
  );
  if (i(this, pe).length > 0) {
    const u = o ?? (o = this);
    i(u, pe).push(...i(this, pe).filter((v) => !i(u, pe).includes(v)));
  }
  o !== null && (mt.add(o), I(a = o, z, yn).call(a));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Un = function(t, n, r) {
  t.f ^= V;
  for (var s = t.first; s !== null; ) {
    var l = s.f, o = (l & (qe | ht)) !== 0, f = o && (l & V) !== 0, a = f || (l & ue) !== 0 || i(this, Ve).has(s);
    if (!a && s.fn !== null) {
      o ? s.f ^= V : l & zt ? n.push(s) : cn(s) && (l & Ge && i(this, tt).add(s), Gt(s));
      var u = s.first;
      if (u !== null) {
        s = u;
        continue;
      }
    }
    for (; s !== null; ) {
      var v = s.next;
      if (v !== null) {
        s = v;
        break;
      }
      s = s.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
En = function(t) {
  for (var n = 0; n < t.length; n += 1)
    Lr(t[n], i(this, ut), i(this, tt));
}, Qs = function() {
  var v, x, h;
  for (const _ of mt) {
    var t = _.id < this.id, n = [];
    for (const [d, [w, c]] of this.current) {
      if (_.current.has(d)) {
        var r = (
          /** @type {[any, boolean]} */
          _.current.get(d)[0]
        );
        if (t && w !== r)
          _.current.set(d, [w, c]);
        else
          continue;
      }
      n.push(d);
    }
    var s = [..._.current.keys()].filter((d) => !this.current.has(d));
    if (s.length === 0)
      t && _.discard();
    else if (n.length > 0) {
      if (t)
        for (const d of i(this, Pt))
          _.unskip_effect(d, (w) => {
            var c;
            w.f & (Ge | tn) ? _.schedule(w) : I(c = _, z, En).call(c, [w]);
          });
      _.activate();
      var l = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
      for (var f of n)
        Hr(f, s, l, o);
      o = /* @__PURE__ */ new Map();
      var a = [..._.current.keys()].filter(
        (d) => this.current.has(d) ? (
          /** @type {[any, boolean]} */
          this.current.get(d)[0] !== d
        ) : !0
      );
      for (const d of i(this, sn))
        !(d.f & (Re | ue | Bn)) && tr(d, a, o) && (d.f & (tn | Ge) ? (q(d, Z), _.schedule(d)) : i(_, ut).add(d));
      if (i(_, pe).length > 0) {
        _.apply();
        for (var u of i(_, pe))
          I(v = _, z, Un).call(v, u, [], []);
        k(_, pe, []);
      }
      _.deactivate();
    }
  }
  for (const _ of mt)
    i(_, jt).has(this) && (i(_, jt).delete(this), i(_, jt).size === 0 && !I(x = _, z, bn).call(x) && (_.activate(), I(h = _, z, yn).call(h)));
};
let Nt = Nn;
function ei() {
  try {
    qs();
  } catch (e) {
    ct(e, Vn);
  }
}
let Pe = null;
function _r(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (!(r.f & (Re | ue)) && cn(r) && (Pe = /* @__PURE__ */ new Set(), Gt(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && ns(r), (Pe == null ? void 0 : Pe.size) > 0)) {
        Tt.clear();
        for (const s of Pe) {
          if (s.f & (Re | ue)) continue;
          const l = [s];
          let o = s.parent;
          for (; o !== null; )
            Pe.has(o) && (Pe.delete(o), l.push(o)), o = o.parent;
          for (let f = l.length - 1; f >= 0; f--) {
            const a = l[f];
            a.f & (Re | ue) || Gt(a);
          }
        }
        Pe.clear();
      }
    }
    Pe = null;
  }
}
function Hr(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const l = s.f;
      l & re ? Hr(
        /** @type {Derived} */
        s,
        t,
        n,
        r
      ) : l & (tn | Ge) && !(l & Z) && tr(s, t, r) && (q(s, Z), nr(
        /** @type {Effect} */
        s
      ));
    }
}
function tr(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Bt.call(t, s))
        return !0;
      if (s.f & re && tr(
        /** @type {Derived} */
        s,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          s,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function nr(e) {
  y.schedule(e);
}
function $r(e, t) {
  if (!(e.f & qe && e.f & V)) {
    e.f & Z ? t.d.push(e) : e.f & Ke && t.m.push(e), q(e, V);
    for (var n = e.first; n !== null; )
      $r(n, t), n = n.next;
  }
}
function qr(e) {
  q(e, V);
  for (var t = e.first; t !== null; )
    qr(t), t = t.next;
}
function ti(e) {
  let t = 0, n = Dt(0), r;
  return () => {
    sr() && (p(n), es(() => (t === 0 && (r = cs(() => e(() => en(n)))), t += 1, () => {
      kt(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, en(n));
      });
    })));
  };
}
var ni = Vt | Kt;
function ri(e, t, n, r) {
  new si(e, t, n, r);
}
var Se, Qn, Ce, bt, ce, Ae, oe, ge, nt, yt, ft, $t, ln, an, rt, Dn, $, ii, li, ai, Yn, kn, Tn, Gn, Kn;
class si {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, s) {
    E(this, $);
    /** @type {Boundary | null} */
    Le(this, "parent");
    Le(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Le(this, "transform_error");
    /** @type {TemplateNode} */
    E(this, Se);
    /** @type {TemplateNode | null} */
    E(this, Qn, null);
    /** @type {BoundaryProps} */
    E(this, Ce);
    /** @type {((anchor: Node) => void)} */
    E(this, bt);
    /** @type {Effect} */
    E(this, ce);
    /** @type {Effect | null} */
    E(this, Ae, null);
    /** @type {Effect | null} */
    E(this, oe, null);
    /** @type {Effect | null} */
    E(this, ge, null);
    /** @type {DocumentFragment | null} */
    E(this, nt, null);
    E(this, yt, 0);
    E(this, ft, 0);
    E(this, $t, !1);
    /** @type {Set<Effect>} */
    E(this, ln, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    E(this, an, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    E(this, rt, null);
    E(this, Dn, ti(() => (k(this, rt, Dt(i(this, yt))), () => {
      k(this, rt, null);
    })));
    var l;
    k(this, Se, t), k(this, Ce, n), k(this, bt, (o) => {
      var f = (
        /** @type {Effect} */
        C
      );
      f.b = this, f.f |= $n, r(o);
    }), this.parent = /** @type {Effect} */
    C.b, this.transform_error = s ?? ((l = this.parent) == null ? void 0 : l.transform_error) ?? ((o) => o), k(this, ce, ir(() => {
      I(this, $, Yn).call(this);
    }, ni));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Lr(t, i(this, ln), i(this, an));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!i(this, Ce).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    I(this, $, Gn).call(this, t, n), k(this, yt, i(this, yt) + t), !(!i(this, rt) || i(this, $t)) && (k(this, $t, !0), kt(() => {
      k(this, $t, !1), i(this, rt) && Yt(i(this, rt), i(this, yt));
    }));
  }
  get_effect_pending() {
    return i(this, Dn).call(this), p(
      /** @type {Source<number>} */
      i(this, rt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!i(this, Ce).onerror && !i(this, Ce).failed)
      throw t;
    y != null && y.is_fork ? (i(this, Ae) && y.skip_effect(i(this, Ae)), i(this, oe) && y.skip_effect(i(this, oe)), i(this, ge) && y.skip_effect(i(this, ge)), y.on_fork_commit(() => {
      I(this, $, Kn).call(this, t);
    })) : I(this, $, Kn).call(this, t);
  }
}
Se = new WeakMap(), Qn = new WeakMap(), Ce = new WeakMap(), bt = new WeakMap(), ce = new WeakMap(), Ae = new WeakMap(), oe = new WeakMap(), ge = new WeakMap(), nt = new WeakMap(), yt = new WeakMap(), ft = new WeakMap(), $t = new WeakMap(), ln = new WeakMap(), an = new WeakMap(), rt = new WeakMap(), Dn = new WeakMap(), $ = new WeakSet(), ii = function() {
  try {
    k(this, Ae, Ne(() => i(this, bt).call(this, i(this, Se))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
li = function(t) {
  const n = i(this, Ce).failed;
  n && k(this, ge, Ne(() => {
    n(
      i(this, Se),
      () => t,
      () => () => {
      }
    );
  }));
}, ai = function() {
  const t = i(this, Ce).pending;
  t && (this.is_pending = !0, k(this, oe, Ne(() => t(i(this, Se)))), kt(() => {
    var n = k(this, nt, document.createDocumentFragment()), r = dt();
    n.append(r), k(this, Ae, I(this, $, Tn).call(this, () => Ne(() => i(this, bt).call(this, r)))), i(this, ft) === 0 && (i(this, Se).before(n), k(this, nt, null), St(
      /** @type {Effect} */
      i(this, oe),
      () => {
        k(this, oe, null);
      }
    ), I(this, $, kn).call(
      this,
      /** @type {Batch} */
      y
    ));
  }));
}, Yn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), k(this, ft, 0), k(this, yt, 0), k(this, Ae, Ne(() => {
      i(this, bt).call(this, i(this, Se));
    })), i(this, ft) > 0) {
      var t = k(this, nt, document.createDocumentFragment());
      or(i(this, Ae), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        i(this, Ce).pending
      );
      k(this, oe, Ne(() => n(i(this, Se))));
    } else
      I(this, $, kn).call(
        this,
        /** @type {Batch} */
        y
      );
  } catch (n) {
    this.error(n);
  }
}, /**
 * @param {Batch} batch
 */
kn = function(t) {
  this.is_pending = !1, t.transfer_effects(i(this, ln), i(this, an));
}, /**
 * @template T
 * @param {() => T} fn
 */
Tn = function(t) {
  var n = C, r = T, s = we;
  We(i(this, ce)), Oe(i(this, ce)), Ut(i(this, ce).ctx);
  try {
    return Nt.ensure(), t();
  } catch (l) {
    return Or(l), null;
  } finally {
    We(n), Oe(r), Ut(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Gn = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && I(r = this.parent, $, Gn).call(r, t, n);
    return;
  }
  k(this, ft, i(this, ft) + t), i(this, ft) === 0 && (I(this, $, kn).call(this, n), i(this, oe) && St(i(this, oe), () => {
    k(this, oe, null);
  }), i(this, nt) && (i(this, Se).before(i(this, nt)), k(this, nt, null)));
}, /**
 * @param {unknown} error
 */
Kn = function(t) {
  i(this, Ae) && (de(i(this, Ae)), k(this, Ae, null)), i(this, oe) && (de(i(this, oe)), k(this, oe, null)), i(this, ge) && (de(i(this, ge)), k(this, ge, null));
  var n = i(this, Ce).onerror;
  let r = i(this, Ce).failed;
  var s = !1, l = !1;
  const o = () => {
    if (s) {
      Gs();
      return;
    }
    s = !0, l && Us(), i(this, ge) !== null && St(i(this, ge), () => {
      k(this, ge, null);
    }), I(this, $, Tn).call(this, () => {
      I(this, $, Yn).call(this);
    });
  }, f = (a) => {
    try {
      l = !0, n == null || n(a, o), l = !1;
    } catch (u) {
      ct(u, i(this, ce) && i(this, ce).parent);
    }
    r && k(this, ge, I(this, $, Tn).call(this, () => {
      try {
        return Ne(() => {
          var u = (
            /** @type {Effect} */
            C
          );
          u.b = this, u.f |= $n, r(
            i(this, Se),
            () => a,
            () => o
          );
        });
      } catch (u) {
        return ct(
          u,
          /** @type {Effect} */
          i(this, ce).parent
        ), null;
      }
    }));
  };
  kt(() => {
    var a;
    try {
      a = this.transform_error(t);
    } catch (u) {
      ct(u, i(this, ce) && i(this, ce).parent);
      return;
    }
    a !== null && typeof a == "object" && typeof /** @type {any} */
    a.then == "function" ? a.then(
      f,
      /** @param {unknown} e */
      (u) => ct(u, i(this, ce) && i(this, ce).parent)
    ) : f(a);
  });
};
function oi(e, t, n, r) {
  const s = zr;
  var l = e.filter((h) => !h.settled);
  if (n.length === 0 && l.length === 0) {
    r(t.map(s));
    return;
  }
  var o = (
    /** @type {Effect} */
    C
  ), f = ui(), a = l.length === 1 ? l[0].promise : l.length > 1 ? Promise.all(l.map((h) => h.promise)) : null;
  function u(h) {
    f();
    try {
      r(h);
    } catch (_) {
      o.f & Re || ct(_, o);
    }
    Cn();
  }
  if (n.length === 0) {
    a.then(() => u(t.map(s)));
    return;
  }
  var v = Br();
  function x() {
    Promise.all(n.map((h) => /* @__PURE__ */ fi(h))).then((h) => u([...t.map(s), ...h])).catch((h) => ct(h, o)).finally(() => v());
  }
  a ? a.then(() => {
    f(), x(), Cn();
  }) : x();
}
function ui() {
  var e = (
    /** @type {Effect} */
    C
  ), t = T, n = we, r = (
    /** @type {Batch} */
    y
  );
  return function(l = !0) {
    We(e), Oe(t), Ut(n), l && !(e.f & Re) && (r == null || r.activate(), r == null || r.apply());
  };
}
function Cn(e = !0) {
  We(null), Oe(null), Ut(null), e && (y == null || y.deactivate());
}
function Br() {
  var e = (
    /** @type {Effect} */
    C
  ), t = (
    /** @type {Boundary} */
    e.b
  ), n = (
    /** @type {Batch} */
    y
  ), r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (s = !1) => {
    t.update_pending_count(-1, n), n.decrement(r, e, s);
  };
}
// @__NO_SIDE_EFFECTS__
function zr(e) {
  var t = re | Z;
  return C !== null && (C.f |= Kt), {
    ctx: we,
    deps: null,
    effects: null,
    equals: Nr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      K
    ),
    wv: 0,
    parent: C,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function fi(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    C
  );
  r === null && Fs();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = Dt(
    /** @type {V} */
    K
  ), o = !T, f = /* @__PURE__ */ new Map();
  return ki(() => {
    var _;
    var a = (
      /** @type {Effect} */
      C
    ), u = Cr();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(Cn);
    } catch (d) {
      u.reject(d), Cn();
    }
    var v = (
      /** @type {Batch} */
      y
    );
    if (o) {
      if (a.f & Mt)
        var x = Br();
      if (
        /** @type {Boundary} */
        r.b.is_rendered()
      )
        (_ = f.get(v)) == null || _.reject(Qe), f.delete(v);
      else {
        for (const d of f.values())
          d.reject(Qe);
        f.clear();
      }
      f.set(v, u);
    }
    const h = (d, w = void 0) => {
      if (x) {
        var c = w === Qe;
        x(c);
      }
      if (!(w === Qe || a.f & Re)) {
        if (v.activate(), w)
          l.f |= vt, Yt(l, w);
        else {
          l.f & vt && (l.f ^= vt), Yt(l, d);
          for (const [b, R] of f) {
            if (f.delete(b), b === v) break;
            R.reject(Qe);
          }
        }
        v.deactivate();
      }
    };
    u.promise.then(h, (d) => h(null, d || "unknown"));
  }), ji(() => {
    for (const a of f.values())
      a.reject(Qe);
  }), new Promise((a) => {
    function u(v) {
      function x() {
        v === s ? a(l) : u(s);
      }
      v.then(x, x);
    }
    u(s);
  });
}
// @__NO_SIDE_EFFECTS__
function ci(e) {
  const t = /* @__PURE__ */ zr(e);
  return t.equals = Dr, t;
}
function vi(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      de(
        /** @type {Effect} */
        t[n]
      );
  }
}
function rr(e) {
  var t, n = C, r = e.parent;
  if (!_t && r !== null && r.f & (Re | ue))
    return Ys(), e.v;
  We(r);
  try {
    e.f &= ~At, vi(e), t = os(e);
  } finally {
    We(n);
  }
  return t;
}
function Vr(e) {
  var t = rr(e);
  if (!e.equals(t) && (e.wv = ls(), (!(y != null && y.is_fork) || e.deps === null) && (y !== null ? y.capture(e, t, !0) : e.v = t, e.deps === null))) {
    q(e, V);
    return;
  }
  _t || (X !== null ? (sr() || y != null && y.is_fork) && X.set(e, t) : er(e));
}
function di(e) {
  var t, n;
  if (e.effects !== null)
    for (const r of e.effects)
      (r.teardown || r.ac) && ((t = r.teardown) == null || t.call(r), (n = r.ac) == null || n.abort(Qe), r.teardown = Ms, r.ac = null, nn(r, 0), lr(r));
}
function Ur(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Gt(t);
}
let Wn = /* @__PURE__ */ new Set();
const Tt = /* @__PURE__ */ new Map();
let Yr = !1;
function Dt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Nr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function xe(e, t) {
  const n = Dt(e);
  return Ci(n), n;
}
// @__NO_SIDE_EFFECTS__
function hi(e, t = !1, n = !0) {
  const r = Dt(e);
  return t || (r.equals = Dr), r;
}
function De(e, t, n = !1) {
  T !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!$e || T.f & Bn) && Ir() && T.f & (re | Ge | tn | Bn) && (Ie === null || !Bt.call(Ie, e)) && Vs();
  let r = n ? st(t) : t;
  return Yt(e, r, jn);
}
function Yt(e, t, n = null) {
  if (!e.equals(t)) {
    Tt.set(e, _t ? t : e.v);
    var r = Nt.ensure();
    if (r.capture(e, t), e.f & re) {
      const s = (
        /** @type {Derived} */
        e
      );
      e.f & Z && rr(s), X === null && er(s);
    }
    e.wv = ls(), Gr(e, Z, n), C !== null && C.f & V && !(C.f & (qe | ht)) && (Te === null ? Ai([e]) : Te.push(e)), !r.is_fork && Wn.size > 0 && !Yr && _i();
  }
  return t;
}
function _i() {
  Yr = !1;
  for (const e of Wn)
    e.f & V && q(e, Ke), cn(e) && Gt(e);
  Wn.clear();
}
function en(e) {
  De(e, e.v + 1);
}
function Gr(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var s = r.length, l = 0; l < s; l++) {
      var o = r[l], f = o.f, a = (f & Z) === 0;
      if (a && q(o, t), f & re) {
        var u = (
          /** @type {Derived} */
          o
        );
        X == null || X.delete(u), f & At || (f & Me && (o.f |= At), Gr(u, Ke, n));
      } else if (a) {
        var v = (
          /** @type {Effect} */
          o
        );
        f & Ge && Pe !== null && Pe.add(v), n !== null ? n.push(v) : nr(v);
      }
    }
}
function st(e) {
  if (typeof e != "object" || e === null || wn in e)
    return e;
  const t = Ds(e);
  if (t !== As && t !== Ns)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Sr(e), s = /* @__PURE__ */ xe(0), l = Ct, o = (f) => {
    if (Ct === l)
      return f();
    var a = T, u = Ct;
    Oe(null), mr(l);
    var v = f();
    return Oe(a), mr(u), v;
  };
  return r && n.set("length", /* @__PURE__ */ xe(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(f, a, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Bs();
        var v = n.get(a);
        return v === void 0 ? o(() => {
          var x = /* @__PURE__ */ xe(u.value);
          return n.set(a, x), x;
        }) : De(v, u.value, !0), !0;
      },
      deleteProperty(f, a) {
        var u = n.get(a);
        if (u === void 0) {
          if (a in f) {
            const v = o(() => /* @__PURE__ */ xe(K));
            n.set(a, v), en(s);
          }
        } else
          De(u, K), en(s);
        return !0;
      },
      get(f, a, u) {
        var _;
        if (a === wn)
          return e;
        var v = n.get(a), x = a in f;
        if (v === void 0 && (!x || (_ = Qt(f, a)) != null && _.writable) && (v = o(() => {
          var d = st(x ? f[a] : K), w = /* @__PURE__ */ xe(d);
          return w;
        }), n.set(a, v)), v !== void 0) {
          var h = p(v);
          return h === K ? void 0 : h;
        }
        return Reflect.get(f, a, u);
      },
      getOwnPropertyDescriptor(f, a) {
        var u = Reflect.getOwnPropertyDescriptor(f, a);
        if (u && "value" in u) {
          var v = n.get(a);
          v && (u.value = p(v));
        } else if (u === void 0) {
          var x = n.get(a), h = x == null ? void 0 : x.v;
          if (x !== void 0 && h !== K)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return u;
      },
      has(f, a) {
        var h;
        if (a === wn)
          return !0;
        var u = n.get(a), v = u !== void 0 && u.v !== K || Reflect.has(f, a);
        if (u !== void 0 || C !== null && (!v || (h = Qt(f, a)) != null && h.writable)) {
          u === void 0 && (u = o(() => {
            var _ = v ? st(f[a]) : K, d = /* @__PURE__ */ xe(_);
            return d;
          }), n.set(a, u));
          var x = p(u);
          if (x === K)
            return !1;
        }
        return v;
      },
      set(f, a, u, v) {
        var D;
        var x = n.get(a), h = a in f;
        if (r && a === "length")
          for (var _ = u; _ < /** @type {Source<number>} */
          x.v; _ += 1) {
            var d = n.get(_ + "");
            d !== void 0 ? De(d, K) : _ in f && (d = o(() => /* @__PURE__ */ xe(K)), n.set(_ + "", d));
          }
        if (x === void 0)
          (!h || (D = Qt(f, a)) != null && D.writable) && (x = o(() => /* @__PURE__ */ xe(void 0)), De(x, st(u)), n.set(a, x));
        else {
          h = x.v !== K;
          var w = o(() => st(u));
          De(x, w);
        }
        var c = Reflect.getOwnPropertyDescriptor(f, a);
        if (c != null && c.set && c.set.call(v, u), !h) {
          if (r && typeof a == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), R = Number(a);
            Number.isInteger(R) && R >= b.v && De(b, R + 1);
          }
          en(s);
        }
        return !0;
      },
      ownKeys(f) {
        p(s);
        var a = Reflect.ownKeys(f).filter((x) => {
          var h = n.get(x);
          return h === void 0 || h.v !== K;
        });
        for (var [u, v] of n)
          v.v !== K && !(u in f) && a.push(u);
        return a;
      },
      setPrototypeOf() {
        zs();
      }
    }
  );
}
var pr, Kr, Wr, Xr;
function pi() {
  if (pr === void 0) {
    pr = window, Kr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Wr = Qt(t, "firstChild").get, Xr = Qt(t, "nextSibling").get, dr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), dr(n) && (n.__t = void 0);
  }
}
function dt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function An(e) {
  return (
    /** @type {TemplateNode | null} */
    Wr.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function fn(e) {
  return (
    /** @type {TemplateNode | null} */
    Xr.call(e)
  );
}
function g(e, t) {
  return /* @__PURE__ */ An(e);
}
function gn(e, t = !1) {
  {
    var n = /* @__PURE__ */ An(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ fn(n) : n;
  }
}
function j(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ fn(r);
  return r;
}
function gi(e) {
  e.textContent = "";
}
function Zr() {
  return !1;
}
function mi(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(ks, e, void 0)
  );
}
function Jr(e) {
  var t = T, n = C;
  Oe(null), We(null);
  try {
    return e();
  } finally {
    Oe(t), We(n);
  }
}
function xi(e) {
  C === null && (T === null && $s(), Hs()), _t && Ps();
}
function wi(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function it(e, t) {
  var n = C;
  n !== null && n.f & ue && (e |= ue);
  var r = {
    ctx: we,
    deps: null,
    nodes: null,
    f: e | Z | Me,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  y == null || y.register_created_effect(r);
  var s = r;
  if (e & zt)
    Ot !== null ? Ot.push(r) : Nt.ensure().schedule(r);
  else if (t !== null) {
    try {
      Gt(r);
    } catch (o) {
      throw de(r), o;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & Kt) && (s = s.first, e & Ge && e & Vt && s !== null && (s.f |= Vt));
  }
  if (s !== null && (s.parent = n, n !== null && wi(s, n), T !== null && T.f & re && !(e & ht))) {
    var l = (
      /** @type {Derived} */
      T
    );
    (l.effects ?? (l.effects = [])).push(s);
  }
  return r;
}
function sr() {
  return T !== null && !$e;
}
function ji(e) {
  const t = it(In, null);
  return q(t, V), t.teardown = e, t;
}
function bi(e) {
  xi();
  var t = (
    /** @type {Effect} */
    C.f
  ), n = !T && (t & qe) !== 0 && (t & Mt) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      we
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return Qr(e);
}
function Qr(e) {
  return it(zt | Os, e);
}
function yi(e) {
  Nt.ensure();
  const t = it(ht | Kt, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? St(t, () => {
      de(t), r(void 0);
    }) : (de(t), r(void 0));
  });
}
function Ei(e) {
  return it(zt, e);
}
function ki(e) {
  return it(tn | Kt, e);
}
function es(e, t = 0) {
  return it(In | t, e);
}
function H(e, t = [], n = [], r = []) {
  oi(r, t, n, (s) => {
    it(In, () => e(...s.map(p)));
  });
}
function ir(e, t = 0) {
  var n = it(Ge | t, e);
  return n;
}
function Ne(e) {
  return it(qe | Kt, e);
}
function ts(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = _t, r = T;
    gr(!0), Oe(null);
    try {
      t.call(null);
    } finally {
      gr(n), Oe(r);
    }
  }
}
function lr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && Jr(() => {
      s.abort(Qe);
    });
    var r = n.next;
    n.f & ht ? n.parent = null : de(n, t), n = r;
  }
}
function Ti(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & qe || de(t), t = n;
  }
}
function de(e, t = !0) {
  var n = !1;
  (t || e.f & Is) && e.nodes !== null && e.nodes.end !== null && (Si(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), q(e, qn), lr(e, t && !n), nn(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const l of r)
      l.stop();
  ts(e), e.f ^= qn, e.f |= Re;
  var s = e.parent;
  s !== null && s.first !== null && ns(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Si(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ fn(e);
    e.remove(), e = n;
  }
}
function ns(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function St(e, t, n = !0) {
  var r = [];
  rs(e, r, !0);
  var s = () => {
    n && de(e), t && t();
  }, l = r.length;
  if (l > 0) {
    var o = () => --l || s();
    for (var f of r)
      f.out(o);
  } else
    s();
}
function rs(e, t, n) {
  if (!(e.f & ue)) {
    e.f ^= ue;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const f of r)
        (f.is_global || n) && t.push(f);
    for (var s = e.first; s !== null; ) {
      var l = s.next;
      if (!(s.f & ht)) {
        var o = (s.f & Vt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & qe) !== 0 && (e.f & Ge) !== 0;
        rs(s, t, o ? n : !1);
      }
      s = l;
    }
  }
}
function ar(e) {
  ss(e, !0);
}
function ss(e, t) {
  if (e.f & ue) {
    e.f ^= ue, e.f & V || (q(e, Z), Nt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & Vt) !== 0 || (n.f & qe) !== 0;
      ss(n, s ? t : !1), n = r;
    }
    var l = e.nodes && e.nodes.t;
    if (l !== null)
      for (const o of l)
        (o.is_global || t) && o.in();
  }
}
function or(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var s = n === r ? null : /* @__PURE__ */ fn(n);
      t.append(n), n = s;
    }
}
let Sn = !1, _t = !1;
function gr(e) {
  _t = e;
}
let T = null, $e = !1;
function Oe(e) {
  T = e;
}
let C = null;
function We(e) {
  C = e;
}
let Ie = null;
function Ci(e) {
  T !== null && (Ie === null ? Ie = [e] : Ie.push(e));
}
let ve = null, _e = 0, Te = null;
function Ai(e) {
  Te = e;
}
let is = 1, xt = 0, Ct = xt;
function mr(e) {
  Ct = e;
}
function ls() {
  return ++is;
}
function cn(e) {
  var t = e.f;
  if (t & Z)
    return !0;
  if (t & re && (e.f &= ~At), t & Ke) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, s = 0; s < r; s++) {
      var l = n[s];
      if (cn(
        /** @type {Derived} */
        l
      ) && Vr(
        /** @type {Derived} */
        l
      ), l.wv > e.wv)
        return !0;
    }
    t & Me && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    X === null && q(e, V);
  }
  return !1;
}
function as(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(Ie !== null && Bt.call(Ie, e)))
    for (var s = 0; s < r.length; s++) {
      var l = r[s];
      l.f & re ? as(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (n ? q(l, Z) : l.f & V && q(l, Ke), nr(
        /** @type {Effect} */
        l
      ));
    }
}
function os(e) {
  var w;
  var t = ve, n = _e, r = Te, s = T, l = Ie, o = we, f = $e, a = Ct, u = e.f;
  ve = /** @type {null | Value[]} */
  null, _e = 0, Te = null, T = u & (qe | ht) ? null : e, Ie = null, Ut(e.ctx), $e = !1, Ct = ++xt, e.ac !== null && (Jr(() => {
    e.ac.abort(Qe);
  }), e.ac = null);
  try {
    e.f |= zn;
    var v = (
      /** @type {Function} */
      e.fn
    ), x = v();
    e.f |= Mt;
    var h = e.deps, _ = y == null ? void 0 : y.is_fork;
    if (ve !== null) {
      var d;
      if (_ || nn(e, _e), h !== null && _e > 0)
        for (h.length = _e + ve.length, d = 0; d < ve.length; d++)
          h[_e + d] = ve[d];
      else
        e.deps = h = ve;
      if (sr() && e.f & Me)
        for (d = _e; d < h.length; d++)
          ((w = h[d]).reactions ?? (w.reactions = [])).push(e);
    } else !_ && h !== null && _e < h.length && (nn(e, _e), h.length = _e);
    if (Ir() && Te !== null && !$e && h !== null && !(e.f & (re | Ke | Z)))
      for (d = 0; d < /** @type {Source[]} */
      Te.length; d++)
        as(
          Te[d],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (xt++, s.deps !== null)
        for (let c = 0; c < n; c += 1)
          s.deps[c].rv = xt;
      if (t !== null)
        for (const c of t)
          c.rv = xt;
      Te !== null && (r === null ? r = Te : r.push(.../** @type {Source[]} */
      Te));
    }
    return e.f & vt && (e.f ^= vt), x;
  } catch (c) {
    return Or(c);
  } finally {
    e.f ^= zn, ve = t, _e = n, Te = r, T = s, Ie = l, Ut(o), $e = f, Ct = a;
  }
}
function Ni(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Ss.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  if (n === null && t.f & re && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ve === null || !Bt.call(ve, t))) {
    var l = (
      /** @type {Derived} */
      t
    );
    l.f & Me && (l.f ^= Me, l.f &= ~At), l.v !== K && er(l), di(l), nn(l, 0);
  }
}
function nn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Ni(e, n[r]);
}
function Gt(e) {
  var t = e.f;
  if (!(t & Re)) {
    q(e, V);
    var n = C, r = Sn;
    C = e, Sn = !0;
    try {
      t & (Ge | Ar) ? Ti(e) : lr(e), ts(e);
      var s = os(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = is;
      var l;
      Ts && Ws && e.f & Z && e.deps;
    } finally {
      Sn = r, C = n;
    }
  }
}
function p(e) {
  var t = e.f, n = (t & re) !== 0;
  if (T !== null && !$e) {
    var r = C !== null && (C.f & Re) !== 0;
    if (!r && (Ie === null || !Bt.call(Ie, e))) {
      var s = T.deps;
      if (T.f & zn)
        e.rv < xt && (e.rv = xt, ve === null && s !== null && s[_e] === e ? _e++ : ve === null ? ve = [e] : ve.push(e));
      else {
        (T.deps ?? (T.deps = [])).push(e);
        var l = e.reactions;
        l === null ? e.reactions = [T] : Bt.call(l, T) || l.push(T);
      }
    }
  }
  if (_t && Tt.has(e))
    return Tt.get(e);
  if (n) {
    var o = (
      /** @type {Derived} */
      e
    );
    if (_t) {
      var f = o.v;
      return (!(o.f & V) && o.reactions !== null || fs(o)) && (f = rr(o)), Tt.set(o, f), f;
    }
    var a = (o.f & Me) === 0 && !$e && T !== null && (Sn || (T.f & Me) !== 0), u = (o.f & Mt) === 0;
    cn(o) && (a && (o.f |= Me), Vr(o)), a && !u && (Ur(o), us(o));
  }
  if (X != null && X.has(e))
    return X.get(e);
  if (e.f & vt)
    throw e.v;
  return e.v;
}
function us(e) {
  if (e.f |= Me, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), t.f & re && !(t.f & Me) && (Ur(
        /** @type {Derived} */
        t
      ), us(
        /** @type {Derived} */
        t
      ));
}
function fs(e) {
  if (e.v === K) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Tt.has(t) || t.f & re && fs(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function cs(e) {
  var t = $e;
  try {
    return $e = !0, e();
  } finally {
    $e = t;
  }
}
const mn = Symbol("events"), Di = /* @__PURE__ */ new Set(), xr = /* @__PURE__ */ new Set();
let wr = null;
function jr(e) {
  var c, b;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, s = ((c = e.composedPath) == null ? void 0 : c.call(e)) || [], l = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  wr = e;
  var o = 0, f = wr === e && e[mn];
  if (f) {
    var a = s.indexOf(f);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[mn] = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    a <= u && (o = a);
  }
  if (l = /** @type {Element} */
  s[o] || e.target, l !== t) {
    Cs(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || n;
      }
    });
    var v = T, x = C;
    Oe(null), We(null);
    try {
      for (var h, _ = []; l !== null; ) {
        var d = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var w = (b = l[mn]) == null ? void 0 : b[r];
          w != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l) && w.call(l, e);
        } catch (R) {
          h ? _.push(R) : h = R;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        l = d;
      }
      if (h) {
        for (let R of _)
          queueMicrotask(() => {
            throw R;
          });
        throw h;
      }
    } finally {
      e[mn] = t, delete e.currentTarget, Oe(v), We(x);
    }
  }
}
var kr;
const Hn = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((kr = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : kr.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Mi(e) {
  return (
    /** @type {string} */
    (Hn == null ? void 0 : Hn.createHTML(e)) ?? e
  );
}
function Ri(e) {
  var t = mi("template");
  return t.innerHTML = Mi(e.replaceAll("<!>", "<!---->")), t.content;
}
function Xn(e, t) {
  var n = (
    /** @type {Effect} */
    C
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function P(e, t) {
  var n = (t & 1) !== 0, r = (t & 2) !== 0, s, l = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = Ri(l ? e : "<!>" + e), n || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ An(s)));
    var o = (
      /** @type {TemplateNode} */
      r || Kr ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (n) {
      var f = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ An(o)
      ), a = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Xn(f, a);
    } else
      Xn(o, o);
    return o;
  };
}
function Ii() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = dt();
  return e.append(t, n), Xn(t, n), e;
}
function F(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Oi = ["touchstart", "touchmove"];
function Fi(e) {
  return Oi.includes(e);
}
function O(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = `${n}`);
}
function Li(e, t) {
  return Pi(e, t);
}
const xn = /* @__PURE__ */ new Map();
function Pi(e, { target: t, anchor: n, props: r = {}, events: s, context: l, intro: o = !0, transformError: f }) {
  pi();
  var a = void 0, u = yi(() => {
    var v = n ?? t.appendChild(dt());
    ri(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (_) => {
        Mr({});
        var d = (
          /** @type {ComponentContext} */
          we
        );
        l && (d.c = l), s && (r.$$events = s), a = e(_, r) || {}, Rr();
      },
      f
    );
    var x = /* @__PURE__ */ new Set(), h = (_) => {
      for (var d = 0; d < _.length; d++) {
        var w = _[d];
        if (!x.has(w)) {
          x.add(w);
          var c = Fi(w);
          for (const D of [t, document]) {
            var b = xn.get(D);
            b === void 0 && (b = /* @__PURE__ */ new Map(), xn.set(D, b));
            var R = b.get(w);
            R === void 0 ? (D.addEventListener(w, jr, { passive: c }), b.set(w, 1)) : b.set(w, R + 1);
          }
        }
      }
    };
    return h(Rn(Di)), xr.add(h), () => {
      var c;
      for (var _ of x)
        for (const b of [t, document]) {
          var d = (
            /** @type {Map<string, number>} */
            xn.get(b)
          ), w = (
            /** @type {number} */
            d.get(_)
          );
          --w == 0 ? (b.removeEventListener(_, jr), d.delete(_), d.size === 0 && xn.delete(b)) : d.set(_, w);
        }
      xr.delete(h), v !== n && ((c = v.parentNode) == null || c.removeChild(v));
    };
  });
  return Hi.set(a, u), a;
}
let Hi = /* @__PURE__ */ new WeakMap();
var He, Ue, me, Et, on, un, Mn;
class $i {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    Le(this, "anchor");
    /** @type {Map<Batch, Key>} */
    E(this, He, /* @__PURE__ */ new Map());
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    E(this, Ue, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    E(this, me, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    E(this, Et, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    E(this, on, !0);
    /**
     * @param {Batch} batch
     */
    E(this, un, (t) => {
      if (i(this, He).has(t)) {
        var n = (
          /** @type {Key} */
          i(this, He).get(t)
        ), r = i(this, Ue).get(n);
        if (r)
          ar(r), i(this, Et).delete(n);
        else {
          var s = i(this, me).get(n);
          s && (i(this, Ue).set(n, s.effect), i(this, me).delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), r = s.effect);
        }
        for (const [l, o] of i(this, He)) {
          if (i(this, He).delete(l), l === t)
            break;
          const f = i(this, me).get(o);
          f && (de(f.effect), i(this, me).delete(o));
        }
        for (const [l, o] of i(this, Ue)) {
          if (l === n || i(this, Et).has(l)) continue;
          const f = () => {
            if (Array.from(i(this, He).values()).includes(l)) {
              var u = document.createDocumentFragment();
              or(o, u), u.append(dt()), i(this, me).set(l, { effect: o, fragment: u });
            } else
              de(o);
            i(this, Et).delete(l), i(this, Ue).delete(l);
          };
          i(this, on) || !r ? (i(this, Et).add(l), St(o, f, !1)) : f();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    E(this, Mn, (t) => {
      i(this, He).delete(t);
      const n = Array.from(i(this, He).values());
      for (const [r, s] of i(this, me))
        n.includes(r) || (de(s.effect), i(this, me).delete(r));
    });
    this.anchor = t, k(this, on, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      y
    ), s = Zr();
    if (n && !i(this, Ue).has(t) && !i(this, me).has(t))
      if (s) {
        var l = document.createDocumentFragment(), o = dt();
        l.append(o), i(this, me).set(t, {
          effect: Ne(() => n(o)),
          fragment: l
        });
      } else
        i(this, Ue).set(
          t,
          Ne(() => n(this.anchor))
        );
    if (i(this, He).set(r, t), s) {
      for (const [f, a] of i(this, Ue))
        f === t ? r.unskip_effect(a) : r.skip_effect(a);
      for (const [f, a] of i(this, me))
        f === t ? r.unskip_effect(a.effect) : r.skip_effect(a.effect);
      r.oncommit(i(this, un)), r.ondiscard(i(this, Mn));
    } else
      i(this, un).call(this, r);
  }
}
He = new WeakMap(), Ue = new WeakMap(), me = new WeakMap(), Et = new WeakMap(), on = new WeakMap(), un = new WeakMap(), Mn = new WeakMap();
function br(e, t, n = !1) {
  var r = new $i(e), s = n ? Vt : 0;
  function l(o, f) {
    r.ensure(o, f);
  }
  ir(() => {
    var o = !1;
    t((f, a = 0) => {
      o = !0, l(a, f);
    }), o || l(-1, null);
  }, s);
}
function te(e, t) {
  return t;
}
function qi(e, t, n) {
  for (var r = [], s = t.length, l, o = t.length, f = 0; f < s; f++) {
    let x = t[f];
    St(
      x,
      () => {
        if (l) {
          if (l.pending.delete(x), l.done.add(x), l.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Zn(e, Rn(l.done)), h.delete(l), h.size === 0 && (e.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var a = r.length === 0 && n !== null;
    if (a) {
      var u = (
        /** @type {Element} */
        n
      ), v = (
        /** @type {Element} */
        u.parentNode
      );
      gi(v), v.append(u), e.items.clear();
    }
    Zn(e, t, !a);
  } else
    l = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(l);
}
function Zn(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const o of e.pending.values())
      for (const f of o)
        r.add(
          /** @type {EachItem} */
          e.items.get(f).e
        );
  }
  for (var s = 0; s < t.length; s++) {
    var l = t[s];
    if (r != null && r.has(l)) {
      l.f |= Ye;
      const o = document.createDocumentFragment();
      or(l, o);
    } else
      de(t[s], n);
  }
}
var yr;
function ne(e, t, n, r, s, l = null) {
  var o = e, f = /* @__PURE__ */ new Map(), a = (t & 4) !== 0;
  if (a) {
    var u = (
      /** @type {Element} */
      e
    );
    o = u.appendChild(dt());
  }
  var v = null, x = /* @__PURE__ */ ci(() => {
    var D = n();
    return Sr(D) ? D : D == null ? [] : Rn(D);
  }), h, _ = /* @__PURE__ */ new Map(), d = !0;
  function w(D) {
    R.effect.f & Re || (R.pending.delete(D), R.fallback = v, Bi(R, h, o, t, r), v !== null && (h.length === 0 ? v.f & Ye ? (v.f ^= Ye, Jt(v, null, o)) : ar(v) : St(v, () => {
      v = null;
    })));
  }
  function c(D) {
    R.pending.delete(D);
  }
  var b = ir(() => {
    h = /** @type {V[]} */
    p(x);
    for (var D = h.length, J = /* @__PURE__ */ new Set(), Fe = (
      /** @type {Batch} */
      y
    ), Xe = Zr(), se = 0; se < D; se += 1) {
      var Ze = h[se], lt = r(Ze, se), ie = d ? null : f.get(lt);
      ie ? (ie.v && Yt(ie.v, Ze), ie.i && Yt(ie.i, se), Xe && Fe.unskip_effect(ie.e)) : (ie = zi(
        f,
        d ? o : yr ?? (yr = dt()),
        Ze,
        lt,
        se,
        s,
        t,
        n
      ), d || (ie.e.f |= Ye), f.set(lt, ie)), J.add(lt);
    }
    if (D === 0 && l && !v && (d ? v = Ne(() => l(o)) : (v = Ne(() => l(yr ?? (yr = dt()))), v.f |= Ye)), D > J.size && Ls(), !d)
      if (_.set(Fe, J), Xe) {
        for (const [pt, Rt] of f)
          J.has(pt) || Fe.skip_effect(Rt.e);
        Fe.oncommit(w), Fe.ondiscard(c);
      } else
        w(Fe);
    p(x);
  }), R = { effect: b, items: f, pending: _, outrogroups: null, fallback: v };
  d = !1;
}
function Zt(e) {
  for (; e !== null && !(e.f & qe); )
    e = e.next;
  return e;
}
function Bi(e, t, n, r, s) {
  var ie, pt, Rt, Wt, vn, Xt, dn, hn, _n;
  var l = (r & 8) !== 0, o = t.length, f = e.items, a = Zt(e.effect.first), u, v = null, x, h = [], _ = [], d, w, c, b;
  if (l)
    for (b = 0; b < o; b += 1)
      d = t[b], w = s(d, b), c = /** @type {EachItem} */
      f.get(w).e, c.f & Ye || ((pt = (ie = c.nodes) == null ? void 0 : ie.a) == null || pt.measure(), (x ?? (x = /* @__PURE__ */ new Set())).add(c));
  for (b = 0; b < o; b += 1) {
    if (d = t[b], w = s(d, b), c = /** @type {EachItem} */
    f.get(w).e, e.outrogroups !== null)
      for (const je of e.outrogroups)
        je.pending.delete(c), je.done.delete(c);
    if (c.f & ue && (ar(c), l && ((Wt = (Rt = c.nodes) == null ? void 0 : Rt.a) == null || Wt.unfix(), (x ?? (x = /* @__PURE__ */ new Set())).delete(c))), c.f & Ye)
      if (c.f ^= Ye, c === a)
        Jt(c, null, n);
      else {
        var R = v ? v.next : a;
        c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), ot(e, v, c), ot(e, c, R), Jt(c, R, n), v = c, h = [], _ = [], a = Zt(v.next);
        continue;
      }
    if (c !== a) {
      if (u !== void 0 && u.has(c)) {
        if (h.length < _.length) {
          var D = _[0], J;
          v = D.prev;
          var Fe = h[0], Xe = h[h.length - 1];
          for (J = 0; J < h.length; J += 1)
            Jt(h[J], D, n);
          for (J = 0; J < _.length; J += 1)
            u.delete(_[J]);
          ot(e, Fe.prev, Xe.next), ot(e, v, Fe), ot(e, Xe, D), a = D, v = Xe, b -= 1, h = [], _ = [];
        } else
          u.delete(c), Jt(c, a, n), ot(e, c.prev, c.next), ot(e, c, v === null ? e.effect.first : v.next), ot(e, v, c), v = c;
        continue;
      }
      for (h = [], _ = []; a !== null && a !== c; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(a), _.push(a), a = Zt(a.next);
      if (a === null)
        continue;
    }
    c.f & Ye || h.push(c), v = c, a = Zt(c.next);
  }
  if (e.outrogroups !== null) {
    for (const je of e.outrogroups)
      je.pending.size === 0 && (Zn(e, Rn(je.done)), (vn = e.outrogroups) == null || vn.delete(je));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || u !== void 0) {
    var se = [];
    if (u !== void 0)
      for (c of u)
        c.f & ue || se.push(c);
    for (; a !== null; )
      !(a.f & ue) && a !== e.fallback && se.push(a), a = Zt(a.next);
    var Ze = se.length;
    if (Ze > 0) {
      var lt = r & 4 && o === 0 ? n : null;
      if (l) {
        for (b = 0; b < Ze; b += 1)
          (dn = (Xt = se[b].nodes) == null ? void 0 : Xt.a) == null || dn.measure();
        for (b = 0; b < Ze; b += 1)
          (_n = (hn = se[b].nodes) == null ? void 0 : hn.a) == null || _n.fix();
      }
      qi(e, se, lt);
    }
  }
  l && kt(() => {
    var je, pn;
    if (x !== void 0)
      for (c of x)
        (pn = (je = c.nodes) == null ? void 0 : je.a) == null || pn.apply();
  });
}
function zi(e, t, n, r, s, l, o, f) {
  var a = o & 1 ? o & 16 ? Dt(n) : /* @__PURE__ */ hi(n, !1, !1) : null, u = o & 2 ? Dt(s) : null;
  return {
    v: a,
    i: u,
    e: Ne(() => (l(t, a ?? n, u ?? s, f), () => {
      e.delete(r);
    }))
  };
}
function Jt(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, s = e.nodes.end, l = t && !(t.f & Ye) ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ fn(r)
      );
      if (l.before(r), r === s)
        return;
      r = o;
    }
}
function ot(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Vi(e, t) {
  return e == null ? null : String(e);
}
function G(e, t, n, r) {
  var s = e.__style;
  if (s !== t) {
    var l = Vi(t);
    l == null ? e.removeAttribute("style") : e.style.cssText = l, e.__style = t;
  }
  return r;
}
function Er(e, t) {
  return e === t || (e == null ? void 0 : e[wn]) === t;
}
function Ui(e = {}, t, n, r) {
  var s = (
    /** @type {ComponentContext} */
    we.r
  ), l = (
    /** @type {Effect} */
    C
  );
  return Ei(() => {
    var o, f;
    return es(() => {
      o = f, f = [], cs(() => {
        e !== n(...f) && (t(e, ...f), o && Er(n(...o), e) && t(null, ...o));
      });
    }), () => {
      let a = l;
      for (; a !== s && a.parent !== null && a.parent.f & qn; )
        a = a.parent;
      const u = () => {
        f && Er(n(...f), e) && t(null, ...f);
      }, v = a.teardown;
      a.teardown = () => {
        u(), v == null || v();
      };
    };
  }), e;
}
const Yi = "5";
var Tr;
typeof window < "u" && ((Tr = window.__svelte ?? (window.__svelte = {})).v ?? (Tr.v = /* @__PURE__ */ new Set())).add(Yi);
function Jn(e, t, n) {
  const r = document.createElement("span");
  r.style.setProperty(n, `var(${e})`), t.appendChild(r);
  const s = getComputedStyle(r).getPropertyValue(n).trim();
  return t.removeChild(r), s;
}
function Gi(e, t) {
  return Ki(Jn(e, t, "color"));
}
function Ki(e) {
  const t = e.match(/[\d.]+/g);
  return !t || t.length < 3 ? e : `#${[t[0], t[1], t[2]].map((r) => Math.round(Number(r)).toString(16).padStart(2, "0")).join("")}`;
}
var Wi = /* @__PURE__ */ P('<th class="svelte-1juuxfj"> </th>'), Xi = /* @__PURE__ */ P('<td class="svelte-1juuxfj"><button type="button" class="btn svelte-1juuxfj">Button</button></td>'), Zi = /* @__PURE__ */ P('<td class="svelte-1juuxfj"><button type="button" class="btn svelte-1juuxfj">Button</button></td>'), Ji = /* @__PURE__ */ P('<tr><td class="svelte-1juuxfj"><code class="svelte-1juuxfj"> </code></td><td class="hex svelte-1juuxfj"> </td><!></tr> <tr><td class="svelte-1juuxfj"><code class="svelte-1juuxfj"> </code></td><td class="hex svelte-1juuxfj"> </td><!></tr>', 1), Qi = /* @__PURE__ */ P('<div class="grey-item svelte-1juuxfj"><span class="swatch svelte-1juuxfj"></span> <code class="svelte-1juuxfj"> </code> <span class="hex svelte-1juuxfj"> </span> <span>The quick brown fox</span></div>'), el = /* @__PURE__ */ P('<div class="grey-item svelte-1juuxfj"><span class="swatch svelte-1juuxfj"></span> <code class="svelte-1juuxfj"> </code> <span class="hex svelte-1juuxfj"> </span> <span>The quick brown fox</span></div>'), tl = /* @__PURE__ */ P('<th class="svelte-1juuxfj"> </th>'), nl = /* @__PURE__ */ P('<td class="svelte-1juuxfj">Packed my box with five dozen liquor jugs.</td>'), rl = /* @__PURE__ */ P('<tr><td class="svelte-1juuxfj"><code class="svelte-1juuxfj"> </code></td><td class="hex svelte-1juuxfj"> </td><!></tr>'), sl = /* @__PURE__ */ P('<div class="alert svelte-1juuxfj"><div class="bar svelte-1juuxfj"></div> <div><code class="svelte-1juuxfj"> </code> <span class="hex svelte-1juuxfj"> </span> <p class="svelte-1juuxfj"> </p> <p class="on svelte-1juuxfj"> </p></div></div>'), il = /* @__PURE__ */ P('<th class="svelte-1juuxfj"> </th>'), ll = /* @__PURE__ */ P("<span> </span>"), al = /* @__PURE__ */ P('<span class="icon-sample svelte-1juuxfj"></span>'), ol = /* @__PURE__ */ P('<span class="font-sample svelte-1juuxfj">The quick brown fox</span>'), ul = /* @__PURE__ */ P('<td class="svelte-1juuxfj"><!></td>'), fl = /* @__PURE__ */ P('<tr><td class="svelte-1juuxfj"><code class="svelte-1juuxfj"> </code></td><td class="hex svelte-1juuxfj"> </td><!></tr>'), cl = /* @__PURE__ */ P('<div class="shape-box svelte-1juuxfj"></div>'), vl = /* @__PURE__ */ P('<span class="shape-chip svelte-1juuxfj">Chip</span> <span class="shape-field svelte-1juuxfj">Text field</span>', 1), dl = /* @__PURE__ */ P('<button type="button" class="shape-btn svelte-1juuxfj">Button</button>'), hl = /* @__PURE__ */ P('<div class="shape-card svelte-1juuxfj"><strong>Card</strong> <span>Menu / surface</span></div>'), _l = /* @__PURE__ */ P('<div class="shape-dialog svelte-1juuxfj"><strong>Dialog</strong> <span>Modal surface</span></div> <button type="button" class="shape-fab svelte-1juuxfj" aria-label="FAB">+</button>', 1), pl = /* @__PURE__ */ P('<tr><td class="svelte-1juuxfj"><code class="svelte-1juuxfj"> </code></td><td class="hex svelte-1juuxfj"> </td><td class="hex svelte-1juuxfj"> </td><td class="svelte-1juuxfj"> </td><td class="svelte-1juuxfj"><div class="shape-preview svelte-1juuxfj"><!></div></td></tr>'), gl = /* @__PURE__ */ P('<div class="page svelte-1juuxfj"><h1 class="svelte-1juuxfj">Demo Theme</h1> <p class="lead svelte-1juuxfj">Internal tokens <code class="svelte-1juuxfj">--my-internal-*</code>, labeled with source <code class="svelte-1juuxfj">--oscd-theme-*</code>. Hex is read from the computed internal token.</p> <section class="svelte-1juuxfj"><h2 class="svelte-1juuxfj">1. Primary &amp; secondary buttons</h2> <table class="svelte-1juuxfj"><thead><tr><th class="svelte-1juuxfj">Token</th><th class="svelte-1juuxfj">Hex</th><!></tr></thead><tbody></tbody></table></section> <section class="svelte-1juuxfj"><h2 class="svelte-1juuxfj">2. Solarized greys</h2> <div class="grey-band svelte-1juuxfj" style="background: var(--my-internal-base3)"></div> <div class="grey-band svelte-1juuxfj" style="background: var(--my-internal-base03)"></div></section> <section class="svelte-1juuxfj"><h2 class="svelte-1juuxfj">3. Solarized colors</h2> <table class="svelte-1juuxfj"><thead><tr><th style="width: 150px" class="svelte-1juuxfj">Token</th><th class="svelte-1juuxfj">Hex</th><!></tr></thead><tbody></tbody></table></section> <section class="svelte-1juuxfj"><h2 class="svelte-1juuxfj">4. Error &amp; warning</h2> <div class="alerts svelte-1juuxfj"></div></section> <section class="svelte-1juuxfj"><h2 class="svelte-1juuxfj">5. Fonts</h2> <div class="table-wrap svelte-1juuxfj"><table class="svelte-1juuxfj"><thead><tr><th style="width: 200px" class="svelte-1juuxfj">Token</th><th class="svelte-1juuxfj">Value</th><!></tr></thead><tbody></tbody></table></div></section> <section class="svelte-1juuxfj"><h2 class="svelte-1juuxfj">6. Shape</h2> <p class="note svelte-1juuxfj">Host provides <code class="svelte-1juuxfj">--oscd-theme-shape</code> (<span class="hex svelte-1juuxfj"> </span> via <code class="svelte-1juuxfj">--my-internal-shape</code>). The MDC-style scale below is derived in <code class="svelte-1juuxfj">demo-theme.css</code>.</p> <div class="table-wrap svelte-1juuxfj"><table class="svelte-1juuxfj"><thead><tr><th class="svelte-1juuxfj">Token</th><th class="svelte-1juuxfj">Scale</th><th class="svelte-1juuxfj">Computed</th><th class="svelte-1juuxfj">Typical use</th><th class="svelte-1juuxfj">Preview</th></tr></thead><tbody></tbody></table></div></section></div>');
function ml(e, t) {
  Mr(t, !0);
  let n = /* @__PURE__ */ xe(void 0), r = /* @__PURE__ */ xe(st({})), s = /* @__PURE__ */ xe(st({})), l = /* @__PURE__ */ xe(st({}));
  const o = ["base03", "base02", "base01", "base00"], f = ["base3", "base2", "base1", "base0"], a = [
    "yellow",
    "orange",
    "red",
    "magenta",
    "violet",
    "blue",
    "cyan",
    "green"
  ], u = ["base03", "base02", "base2", "base3"], v = ["base3", "base2"], x = ["text-font", "text-font-mono", "icon-font"], h = [300, 400, 500, 600, 700], _ = ["home", "search", "settings"], d = [
    {
      id: "shape-none",
      scale: "×0",
      use: "Checkboxes, dense lists",
      preview: "tile"
    },
    {
      id: "shape-extra-small",
      scale: "×0.5",
      use: "Chips, text fields",
      preview: "chip"
    },
    {
      id: "shape-small",
      scale: "×1",
      use: "Buttons",
      preview: "button"
    },
    {
      id: "shape-medium",
      scale: "×1.5",
      use: "Cards, menus",
      preview: "card"
    },
    {
      id: "shape-large",
      scale: "×2",
      use: "Dialogs, FABs",
      preview: "dialog"
    }
  ];
  function w(A) {
    return `--oscd-theme-${A}`;
  }
  function c(A) {
    return `--my-internal-${A}`;
  }
  function b(A) {
    return A.replace(/^["']+|["']+$/g, "");
  }
  function R() {
    if (!p(n)) return;
    const A = [
      ...o,
      ...f,
      ...a,
      "primary",
      "secondary",
      "error",
      "warning"
    ], m = {};
    for (const N of A)
      m[N] = Gi(c(N), p(n));
    De(r, m, !0);
    const S = {};
    for (const N of x)
      S[N] = b(Jn(c(N), p(n), "font-family")) || "…";
    De(s, S, !0);
    const M = {};
    for (const N of ["shape", ...d.map((Q) => Q.id)])
      M[N] = Jn(c(N), p(n), "border-top-left-radius") || "…";
    De(l, M, !0);
  }
  bi(() => {
    if (!p(n)) return;
    R();
    const A = new MutationObserver(R);
    return A.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }), () => A.disconnect();
  });
  var D = gl(), J = j(g(D), 4), Fe = j(g(J), 2), Xe = g(Fe), se = g(Xe), Ze = j(g(se), 2);
  ne(Ze, 17, () => v, te, (A, m) => {
    var S = Wi(), M = g(S);
    H((N) => O(M, N), [() => w(p(m))]), F(A, S);
  });
  var lt = j(Xe);
  ne(lt, 20, () => ["primary", "secondary"], te, (A, m) => {
    var S = Ji(), M = gn(S), N = g(M), Q = g(N), U = g(Q), le = j(N), fe = g(le), Y = j(le);
    ne(Y, 17, () => v, te, (ae, Ee) => {
      var ke = Xi(), L = g(ke);
      H(
        (B, W, gt) => G(L, `
                    background: var(${B ?? ""});
                    color: var(${W ?? ""});
                    border-color: var(${gt ?? ""});
                  `),
        [
          () => c(m),
          () => c(p(Ee)),
          () => c(p(Ee))
        ]
      ), F(ae, ke);
    });
    var ee = j(M, 2), he = g(ee), Je = g(he), Be = g(Je), at = j(he), be = g(at), ye = j(at);
    ne(ye, 17, () => v, te, (ae, Ee) => {
      var ke = Zi(), L = g(ke);
      H(
        (B, W, gt) => G(L, `
                    background: var(${B ?? ""});
                    color: var(${W ?? ""});
                    border-color: var(${gt ?? ""});
                  `),
        [
          () => c(p(Ee)),
          () => c(m),
          () => c(m)
        ]
      ), F(ae, ke);
    }), H(
      (ae, Ee) => {
        O(U, ae), O(fe, p(r)[m] ?? "…"), O(Be, `${Ee ?? ""} inverted`), O(be, p(r)[m] ?? "…");
      },
      [() => w(m), () => w(m)]
    ), F(A, S);
  });
  var ie = j(J, 2), pt = j(g(ie), 2);
  ne(pt, 21, () => o, te, (A, m) => {
    var S = Qi(), M = g(S), N = j(M, 2), Q = g(N), U = j(N, 2), le = g(U);
    H(
      (fe, Y, ee) => {
        G(S, `color: var(${fe ?? ""})`), G(M, `background: var(${Y ?? ""})`), O(Q, ee), O(le, p(r)[p(m)] ?? "…");
      },
      [
        () => c(p(m)),
        () => c(p(m)),
        () => w(p(m))
      ]
    ), F(A, S);
  });
  var Rt = j(pt, 2);
  ne(Rt, 21, () => f, te, (A, m) => {
    var S = el(), M = g(S), N = j(M, 2), Q = g(N), U = j(N, 2), le = g(U);
    H(
      (fe, Y, ee) => {
        G(S, `color: var(${fe ?? ""})`), G(M, `background: var(${Y ?? ""})`), O(Q, ee), O(le, p(r)[p(m)] ?? "…");
      },
      [
        () => c(p(m)),
        () => c(p(m)),
        () => w(p(m))
      ]
    ), F(A, S);
  });
  var Wt = j(ie, 2), vn = j(g(Wt), 2), Xt = g(vn), dn = g(Xt), hn = j(g(dn), 2);
  ne(hn, 17, () => u, te, (A, m) => {
    var S = tl(), M = g(S);
    H((N) => O(M, N), [() => w(p(m))]), F(A, S);
  });
  var _n = j(Xt);
  ne(_n, 21, () => a, te, (A, m) => {
    var S = rl(), M = g(S), N = g(M), Q = g(N), U = j(M), le = g(U), fe = j(U);
    ne(fe, 17, () => u, te, (Y, ee) => {
      var he = nl();
      H(
        (Je, Be) => G(he, `
                  background: var(${Je ?? ""});
                  color: var(${Be ?? ""});
                `),
        [() => c(p(ee)), () => c(p(m))]
      ), F(Y, he);
    }), H(
      (Y) => {
        O(Q, Y), O(le, p(r)[p(m)] ?? "…");
      },
      [() => w(p(m))]
    ), F(A, S);
  });
  var je = j(Wt, 2), pn = j(g(je), 2);
  ne(pn, 20, () => ["error", "warning"], te, (A, m) => {
    var S = Ii(), M = gn(S);
    ne(M, 17, () => v, te, (N, Q) => {
      var U = sl(), le = g(U), fe = j(le, 2), Y = g(fe), ee = g(Y), he = j(Y, 2), Je = g(he), Be = j(he, 2), at = g(Be), be = j(Be, 2), ye = g(be);
      H(
        (ae, Ee, ke, L, B, W) => {
          G(U, `
              background: var(${ae ?? ""});
              color: var(${Ee ?? ""});
              border-color: var(${ke ?? ""});
            `), G(le, `background: var(${L ?? ""})`), O(ee, B), O(Je, p(r)[m] ?? "…"), O(at, m === "error" ? "Something went wrong. Check the log." : "This setting is deprecated."), O(ye, `on ${W ?? ""}`);
        },
        [
          () => c(p(Q)),
          () => c(m),
          () => c(m),
          () => c(m),
          () => w(m),
          () => w(p(Q))
        ]
      ), F(N, U);
    }), F(A, S);
  });
  var ur = j(je, 2), vs = j(g(ur), 2), ds = g(vs), fr = g(ds), hs = g(fr), _s = j(g(hs), 2);
  ne(_s, 17, () => h, te, (A, m) => {
    var S = il(), M = g(S);
    H(() => O(M, p(m))), F(A, S);
  });
  var ps = j(fr);
  ne(ps, 21, () => x, te, (A, m) => {
    var S = fl(), M = g(S), N = g(M), Q = g(N), U = j(M), le = g(U), fe = j(U);
    ne(fe, 17, () => h, te, (Y, ee) => {
      var he = ul(), Je = g(he);
      {
        var Be = (be) => {
          var ye = al();
          ne(ye, 21, () => _, te, (ae, Ee) => {
            var ke = ll(), L = g(ke);
            H(() => O(L, p(Ee))), F(ae, ke);
          }), H(
            (ae) => G(ye, `
                        font-family: var(${ae ?? ""});
                        font-weight: ${p(ee) ?? ""};
                        font-variation-settings: 'wght' ${p(ee) ?? ""};
                      `),
            [() => c(p(m))]
          ), F(be, ye);
        }, at = (be) => {
          var ye = ol();
          H(
            (ae) => G(ye, `
                        font-family: var(${ae ?? ""});
                        font-weight: ${p(ee) ?? ""};
                      `),
            [() => c(p(m))]
          ), F(be, ye);
        };
        br(Je, (be) => {
          p(m) === "icon-font" ? be(Be) : be(at, -1);
        });
      }
      F(Y, he);
    }), H(
      (Y) => {
        O(Q, Y), O(le, p(s)[p(m)] ?? "…");
      },
      [() => w(p(m))]
    ), F(A, S);
  });
  var gs = j(ur, 2), cr = j(g(gs), 2), ms = j(g(cr), 3), xs = g(ms), ws = j(cr, 2), js = g(ws), bs = j(g(js));
  ne(bs, 21, () => d, te, (A, m) => {
    var S = pl(), M = g(S), N = g(M), Q = g(N), U = j(M), le = g(U), fe = j(U), Y = g(fe), ee = j(fe), he = g(ee), Je = j(ee), Be = g(Je), at = g(Be);
    {
      var be = (L) => {
        var B = cl();
        H((W) => G(B, `border-radius: var(${W ?? ""})`), [() => c(p(m).id)]), F(L, B);
      }, ye = (L) => {
        var B = vl(), W = gn(B), gt = j(W, 2);
        H(
          (On, Fn) => {
            G(W, `border-radius: var(${On ?? ""})`), G(gt, `border-radius: var(${Fn ?? ""})`);
          },
          [() => c(p(m).id), () => c(p(m).id)]
        ), F(L, B);
      }, ae = (L) => {
        var B = dl();
        H((W) => G(B, `border-radius: var(${W ?? ""})`), [() => c(p(m).id)]), F(L, B);
      }, Ee = (L) => {
        var B = hl();
        H((W) => G(B, `border-radius: var(${W ?? ""})`), [() => c(p(m).id)]), F(L, B);
      }, ke = (L) => {
        var B = _l(), W = gn(B), gt = j(W, 2);
        H(
          (On, Fn) => {
            G(W, `border-radius: var(${On ?? ""})`), G(gt, `border-radius: var(${Fn ?? ""})`);
          },
          [() => c(p(m).id), () => c(p(m).id)]
        ), F(L, B);
      };
      br(at, (L) => {
        p(m).preview === "tile" ? L(be) : p(m).preview === "chip" ? L(ye, 1) : p(m).preview === "button" ? L(ae, 2) : p(m).preview === "card" ? L(Ee, 3) : L(ke, -1);
      });
    }
    H(() => {
      O(Q, p(m).id), O(le, p(m).scale), O(Y, p(l)[p(m).id] ?? "…"), O(he, p(m).use);
    }), F(A, S);
  }), Ui(D, (A) => De(n, A), () => p(n)), H(() => O(xs, p(l).shape ?? "…")), F(e, D), Rr();
}
function xl(e, t) {
  ml(e, {
    get doc() {
      return t.doc;
    },
    get docName() {
      return t.docName;
    },
    get editCount() {
      return t.editCount;
    },
    get host() {
      return t.host;
    },
    get plugins() {
      return t.plugins;
    }
  });
}
const wl = "demo-theme", jl = "0.0.1";
function bl() {
  return document.querySelector("open-scd");
}
function yl() {
  const e = bl();
  return e != null && e.shadowRoot ? e.shadowRoot.querySelector("compas-layout") ?? e.shadowRoot.querySelector("oscd-layout") ?? null : null;
}
const El = "calc(100vh - 4px)", kl = "flex", Tl = "column";
function Sl() {
  const e = yl();
  if (!(e != null && e.shadowRoot)) return null;
  const t = e.shadowRoot.querySelector("div");
  if (!(t instanceof HTMLDivElement)) return null;
  const n = {
    height: t.style.height,
    display: t.style.display,
    flexDirection: t.style.flexDirection
  };
  return t.style.height = El, t.style.display = kl, t.style.flexDirection = Tl, { targetDiv: t, originalStyles: n };
}
function Cl(e) {
  e != null && e.targetDiv && (e.targetDiv.style.height = e.originalStyles.height ?? "", e.targetDiv.style.display = e.originalStyles.display ?? "", e.targetDiv.style.flexDirection = e.originalStyles.flexDirection ?? "", e.targetDiv = null);
}
var qt;
class Rl extends HTMLElement {
  constructor() {
    super();
    E(this, qt);
    this.layoutHack = null, this._docName = "", this._editCount = 0, k(this, qt, /* @__PURE__ */ xe(st({
      doc: void 0,
      docName: "",
      editCount: 0,
      host: this,
      plugins: void 0
    })));
  }
  get props() {
    return p(i(this, qt));
  }
  set props(n) {
    De(i(this, qt), n, !0);
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.docName = this._docName, this.props.editCount = this._editCount, this.props.host = this, this.props.plugins = this._plugins;
    const n = this.shadowRoot;
    if (!n)
      throw new Error("ShadowRoot not found");
    n.appendChild(Nl()), Li(xl, { target: n, props: this.props }), requestAnimationFrame(() => {
      this.layoutHack = Sl();
    });
  }
  disconnectedCallback() {
    Cl(this.layoutHack), this.layoutHack = null;
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set docName(n) {
    this._docName = n, this.props.docName = n;
  }
  set editCount(n) {
    this._editCount = n, this.props.editCount = n;
  }
  set plugins(n) {
    this._plugins = n, this.props.plugins = n;
  }
}
qt = new WeakMap();
const Al = ":root,:host{--my-internal-primary: var(--oscd-theme-primary, #2aa198);--my-internal-secondary: var(--oscd-theme-secondary, #6c71c4);--my-internal-base03: var(--oscd-theme-base03, light-dark(#002b36, #fdf6e3));--my-internal-base02: var(--oscd-theme-base02, light-dark(#073642, #eee8d5));--my-internal-base01: var(--oscd-theme-base01, light-dark(#586e75, #93a1a1));--my-internal-base00: var(--oscd-theme-base00, light-dark(#657b83, #839496));--my-internal-base0: var(--oscd-theme-base0, light-dark(#839496, #657b83));--my-internal-base1: var(--oscd-theme-base1, light-dark(#93a1a1, #586e75));--my-internal-base2: var(--oscd-theme-base2, light-dark(#eee8d5, #073642));--my-internal-base3: var(--oscd-theme-base3, light-dark(#fdf6e3, #002b36));--my-internal-yellow: var(--oscd-theme-yellow, #b58900);--my-internal-orange: var(--oscd-theme-orange, #cb4b16);--my-internal-red: var(--oscd-theme-red, #dc322f);--my-internal-magenta: var(--oscd-theme-magenta, #d33682);--my-internal-violet: var(--oscd-theme-violet, #6c71c4);--my-internal-blue: var(--oscd-theme-blue, #268bd2);--my-internal-cyan: var(--oscd-theme-cyan, #2aa198);--my-internal-green: var(--oscd-theme-green, #859900);--my-internal-error: var(--oscd-theme-error, var(--my-internal-red));--my-internal-warning: var(--oscd-theme-warning, var(--my-internal-yellow));--my-internal-text-font: var(--oscd-theme-text-font, \"Roboto\");--my-internal-text-font-mono: var(--oscd-theme-text-font-mono, \"Roboto Mono\");--my-internal-icon-font: var(--oscd-theme-icon-font, \"Material Symbols Outlined\");--my-internal-shape: var(--oscd-theme-shape, 8px);--my-internal-shape-none: 0;--my-internal-shape-extra-small: calc(.5 * var(--my-internal-shape));--my-internal-shape-small: var(--my-internal-shape);--my-internal-shape-medium: calc(1.5 * var(--my-internal-shape));--my-internal-shape-large: calc(2 * var(--my-internal-shape))}.page.svelte-1juuxfj{box-sizing:border-box;min-height:100%;padding:24px 28px 48px;font-family:var(--my-internal-text-font),system-ui,sans-serif;background:var(--my-internal-base3);color:var(--my-internal-base03);overflow:auto}h1.svelte-1juuxfj{margin:0 0 8px;font-size:1.6rem}h2.svelte-1juuxfj{margin:0 0 12px;font-size:1.15rem}.lead.svelte-1juuxfj{margin:0 0 28px;color:var(--my-internal-base01);max-width:52rem}section.svelte-1juuxfj{margin-bottom:32px}code.svelte-1juuxfj,.hex.svelte-1juuxfj{font-family:ui-monospace,Consolas,monospace;font-size:.82rem}.hex.svelte-1juuxfj{opacity:.85}.grey-band.svelte-1juuxfj{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;padding:16px;margin-bottom:8px}.grey-item.svelte-1juuxfj{display:flex;flex-direction:column;gap:6px}.swatch.svelte-1juuxfj{display:block;height:36px;border:1px solid currentColor}.note.svelte-1juuxfj{margin:0 0 12px;color:var(--my-internal-base01);max-width:52rem}.table-wrap.svelte-1juuxfj{overflow-x:auto}table.svelte-1juuxfj{width:100%;border-collapse:collapse;font-size:.9rem}th.svelte-1juuxfj,td.svelte-1juuxfj{border:1px solid var(--my-internal-base01);padding:8px 10px;text-align:left;vertical-align:middle}th.svelte-1juuxfj{background:var(--my-internal-base2);color:var(--my-internal-base03);font-weight:600}.btn.svelte-1juuxfj{padding:6px 14px;border:2px solid;border-radius:4px;font:inherit;cursor:default}.alerts.svelte-1juuxfj{display:grid;grid-template-columns:1fr 1fr;gap:12px}.alert.svelte-1juuxfj{display:flex;gap:12px;padding:12px 14px;border:2px solid}.bar.svelte-1juuxfj{width:6px;flex-shrink:0}.alert.svelte-1juuxfj p:where(.svelte-1juuxfj){margin:6px 0 0}.on.svelte-1juuxfj{opacity:.8;font-size:.82rem}.alert.svelte-1juuxfj code:where(.svelte-1juuxfj),.alert.svelte-1juuxfj .hex:where(.svelte-1juuxfj){margin-right:8px}.font-sample.svelte-1juuxfj{font-size:.95rem}.icon-sample.svelte-1juuxfj{display:inline-flex;gap:8px;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;white-space:nowrap;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased}.shape-preview.svelte-1juuxfj{display:flex;flex-wrap:wrap;align-items:center;gap:10px}.shape-box.svelte-1juuxfj{width:48px;height:48px;background:var(--my-internal-primary)}.shape-chip.svelte-1juuxfj{padding:4px 12px;background:var(--my-internal-base2);border:1px solid var(--my-internal-base01);font-size:.82rem}.shape-field.svelte-1juuxfj{padding:8px 12px;border:1px solid var(--my-internal-base01);background:var(--my-internal-base3);font-size:.82rem}.shape-btn.svelte-1juuxfj,.shape-fab.svelte-1juuxfj{border:none;font:inherit;cursor:default}.shape-btn.svelte-1juuxfj{padding:8px 16px;background:var(--my-internal-primary);color:var(--my-internal-base3)}.shape-card.svelte-1juuxfj,.shape-dialog.svelte-1juuxfj{display:flex;flex-direction:column;gap:4px;min-width:140px;padding:12px 14px;background:var(--my-internal-base2);color:var(--my-internal-base03);font-size:.82rem}.shape-dialog.svelte-1juuxfj{background:var(--my-internal-base3);border:1px solid var(--my-internal-base01)}.shape-fab.svelte-1juuxfj{width:48px;height:48px;background:var(--my-internal-secondary);color:var(--my-internal-base3);font-size:1.4rem;line-height:1}:host{min-height:0;height:100%}\n";
function Nl() {
  const e = document.createElement("style");
  return e.id = `${wl}-v${jl}-style`, e.textContent = Al, e;
}
export {
  Rl as default
};
