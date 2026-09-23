var Si = Object.defineProperty;
var cr = (e) => {
  throw TypeError(e);
};
var Ti = (e, t, n) => t in e ? Si(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var re = (e, t, n) => Ti(e, typeof t != "symbol" ? t + "" : t, n), In = (e, t, n) => t.has(e) || cr("Cannot " + n);
var o = (e, t, n) => (In(e, t, "read from private field"), n ? n.call(e) : t.get(e)), E = (e, t, n) => t.has(e) ? cr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), m = (e, t, n, r) => (In(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), S = (e, t, n) => (In(e, t, "access private method"), n);
const j = Symbol("uninitialized"), ki = "http://www.w3.org/1999/xhtml", Cr = !1;
var En = Array.isArray, Ai = Array.prototype.indexOf, un = Array.prototype.includes, wn = Array.from, Rr = Object.defineProperty, jt = Object.getOwnPropertyDescriptor, Ii = Object.getOwnPropertyDescriptors, Ci = Object.prototype, Ri = Array.prototype, Mr = Object.getPrototypeOf, dr = Object.isExtensible;
const Mi = () => {
};
function Li(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Lr() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const V = 2, Gt = 4, bn = 8, Dr = 1 << 24, we = 16, _e = 32, je = 64, On = 128, Xn = 256, ve = 512, B = 1024, F = 2048, Ne = 4096, X = 8192, oe = 16384, At = 32768, Pn = 1 << 25, Nt = 65536, cn = 1 << 17, Di = 1 << 18, It = 1 << 19, Oi = 1 << 20, Pe = 1 << 25, lt = 65536, dn = 1 << 21, _t = 1 << 22, qe = 1 << 23, Bt = Symbol("$state"), Or = Symbol("component"), Pi = Symbol(""), ln = Symbol("attributes"), Fn = Symbol("class"), Fi = Symbol("style"), Mt = Symbol("text"), Qt = new class extends Error {
  constructor() {
    super(...arguments);
    re(this, "name", "StaleReactionError");
    re(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
var kr;
const ji = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!((kr = globalThis.document) != null && kr.contentType) && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
function Bi() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Hi() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ui() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Pr(e) {
  return e === this.v;
}
function Vi(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Fr(e) {
  return !Vi(e, this.v);
}
function Gi() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function qi(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function zi(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Yi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ki(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Zi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ji() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Wi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Xi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Qi() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
let xn = !1, $i = !1;
function es() {
  xn = !0;
}
let H = null;
function St(e) {
  H = e;
}
function $t(e, t = !1, n) {
  H = {
    p: H,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      T
    ),
    l: xn && !t ? { s: null, u: null, $: [] } : null
  };
}
function en(e) {
  var t = (
    /** @type {ComponentContext} */
    H
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      ii(r);
  }
  return t.i = !0, H = t.p, jr(e);
}
function jr(e = {}) {
  return Rr(e, Or, { value: !0 }), e;
}
function tn() {
  return !xn || H !== null && H.l === null;
}
let dt = [];
function ts() {
  var e = dt;
  dt = [], Li(e);
}
function We(e) {
  if (dt.length === 0) {
    var t = dt;
    queueMicrotask(() => {
      t === dt && ts();
    });
  }
  dt.push(e);
}
const ns = -7169;
function L(e, t) {
  e.f = e.f & ns | t;
}
function Qn(e) {
  e.f & ve || e.deps === null ? L(e, B) : L(e, Ne);
}
function Br(e) {
  if (e !== null)
    for (const t of e)
      !(t.f & V) || !(t.f & lt) || (t.f ^= lt, Br(
        /** @type {Derived} */
        t.deps
      ));
}
function Hr(e, t, n) {
  e.f & F ? t.add(e) : e.f & Ne && n.add(e), Br(e.deps), L(e, B);
}
function Nn(e) {
  var t = x, n = T;
  pe(null), Re(null);
  try {
    return e();
  } finally {
    pe(t), Re(n);
  }
}
function rs(e, t, n, r) {
  const i = tn() ? $n : Vr;
  var s = e.filter((h) => !h.settled), l = t.map(i);
  if (n.length === 0 && s.length === 0) {
    r(l);
    return;
  }
  var a = (
    /** @type {Effect} */
    T
  ), u = is(), f = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function p(h) {
    if (!(a.f & oe)) {
      u();
      try {
        r([...l, ...h]);
      } catch (v) {
        Ae(v, a);
      }
      hn();
    }
  }
  var d = Ur();
  if (n.length === 0) {
    f.then(() => p([])).finally(d);
    return;
  }
  function c() {
    Promise.all(n.map((h) => /* @__PURE__ */ ss(h))).then(p).catch((h) => Ae(h, a)).finally(d);
  }
  f ? f.then(() => {
    u(), c(), hn();
  }) : c();
}
function is() {
  var e = (
    /** @type {Effect} */
    T
  ), t = x, n = H, r = (
    /** @type {Batch} */
    y
  );
  return function(s = !0) {
    Re(e), pe(t), St(n), s && !(e.f & oe) && (r == null || r.activate(), r == null || r.apply());
  };
}
function hn(e = !0) {
  Re(null), pe(null), St(null), e && (y == null || y.deactivate());
}
function Ur() {
  var e = (
    /** @type {Effect} */
    T
  ), t = e.b, n = (
    /** @type {Batch} */
    y
  ), r = !!(t != null && t.is_rendered());
  return t == null || t.update_pending_count(1, n), n.increment(r, e), () => {
    t == null || t.update_pending_count(-1, n), n.decrement(r, e);
  };
}
// @__NO_SIDE_EFFECTS__
function $n(e) {
  var t = V | F;
  return T !== null && (T.f |= It), {
    ctx: H,
    deps: null,
    effects: null,
    equals: Pr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      j
    ),
    wv: 0,
    parent: T,
    ac: null
  };
}
const Lt = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function ss(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    T
  );
  r === null && Gi();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = ot(
    /** @type {V} */
    j
  ), l = !x, a = /* @__PURE__ */ new Set();
  return ws(() => {
    var h, v;
    var u = (
      /** @type {Effect} */
      T
    ), f = Lr();
    i = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, (g) => {
        g !== Qt && f.reject(g);
      }).finally(hn);
    } catch (g) {
      f.reject(g), hn();
    }
    var p = (
      /** @type {Batch} */
      y
    );
    if (l) {
      if (u.f & At)
        var d = Ur();
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        (h = r.b) != null && h.is_rendered()
      )
        (v = p.async_deriveds.get(u)) == null || v.reject(Lt);
      else
        for (const g of a.values())
          g.reject(Lt);
      a.add(f), p.async_deriveds.set(u, f);
    }
    const c = (g, k = void 0) => {
      d == null || d(), a.delete(f), k !== Lt && (p.activate(), k ? (s.f |= qe, Tt(s, k)) : (s.f & qe && (s.f ^= qe), Tt(s, g)), p.deactivate());
    };
    f.promise.then(c, (g) => c(null, g || "unknown"));
  }), ri(() => {
    for (const u of a)
      u.reject(Lt);
  }), new Promise((u) => {
    function f(p) {
      function d() {
        p === i ? u(s) : f(i);
      }
      p.then(d, d);
    }
    f(i);
  });
}
// @__NO_SIDE_EFFECTS__
function ge(e) {
  const t = /* @__PURE__ */ $n(e);
  return fi(t), t;
}
// @__NO_SIDE_EFFECTS__
function Vr(e) {
  const t = /* @__PURE__ */ $n(e);
  return t.equals = Fr, t;
}
function ls(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      te(
        /** @type {Effect} */
        t[n]
      );
  }
}
function er(e) {
  var t, n = T, r = e.parent;
  if (!Ye && r !== null && e.v !== j && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  r.f & (oe | X))
    return Bi(), e.v;
  Re(r);
  try {
    e.f &= ~lt, ls(e), t = hi(e);
  } finally {
    Re(n);
  }
  return t;
}
function Gr(e) {
  var t = er(e);
  if (!e.equals(t) && (e.wv = ci(), (!(y != null && y.is_fork) || e.deps === null) && (y !== null ? (y.capture(e, t, !0), Ht == null || Ht.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    L(e, B);
    return;
  }
  Ye || (G !== null ? (rr() || y != null && y.is_fork) && G.set(e, t) : Qn(e));
}
function as(e) {
  var t;
  if (e.effects !== null)
    for (const n of e.effects)
      (n.teardown || n.ac) && ((t = n.teardown) == null || t.call(n), n.ac !== null && Nn(() => {
        n.ac.abort(Qt), n.ac = null;
      }), n.fn !== null && (n.teardown = Mi), zt(n, 0), sr(n));
}
function qr(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && t.fn !== null && kt(t);
}
let Cn = null, ut = null, y = null, Ht = null, G = null, jn = null, Rn = !1, ht = null, an = null;
var hr = 0;
let os = 1;
var pt, Ve, $e, gt, mt, yt, Le, Et, Q, Kt, De, ye, Se, wt, et, I, Bn, Dt, Hn, zr, Yr, ct, fs, Ot;
const gn = class gn {
  constructor() {
    E(this, I);
    re(this, "id", os++);
    /** True as soon as `#process` was called */
    E(this, pt, !1);
    re(this, "linked", !0);
    /** @type {Batch | null} */
    E(this, Ve, null);
    /** @type {Batch | null} */
    E(this, $e, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    re(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    re(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    re(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, gt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    E(this, mt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    E(this, yt, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    E(this, Le, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    E(this, Et, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    E(this, Q, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    E(this, Kt, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    E(this, De, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    E(this, ye, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    E(this, Se, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    E(this, wt, /* @__PURE__ */ new Set());
    re(this, "is_fork", !1);
    E(this, et, !1);
    ut === null ? Cn = ut = this : (m(ut, $e, this), m(this, Ve, ut)), ut = this;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    o(this, Se).has(t) || o(this, Se).set(t, { d: [], m: [] }), o(this, wt).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = o(this, Se).get(t);
    if (r) {
      o(this, Se).delete(t);
      for (var i of r.d)
        L(i, F), n(i);
      for (i of r.m)
        L(i, Ne), n(i);
    }
    o(this, wt).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, n, r = !1) {
    t.v !== j && !this.previous.has(t) && this.previous.set(t, t.v), t.f & qe || (this.current.set(t, [n, r]), G == null || G.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    y = this;
  }
  deactivate() {
    y = null, G = null;
  }
  flush() {
    try {
      Rn = !0, y = this, S(this, I, Dt).call(this);
    } finally {
      hr = 0, jn = null, ht = null, an = null, Rn = !1, y = null, G = null, Ie.clear();
    }
  }
  discard() {
    var t;
    for (const n of o(this, mt)) n(this);
    o(this, mt).clear();
    for (const n of this.async_deriveds.values())
      n.reject(Lt);
    S(this, I, Ot).call(this), (t = o(this, Et)) == null || t.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    o(this, Kt).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, n) {
    if (m(this, yt, o(this, yt) + 1), t) {
      let r = o(this, Le).get(n) ?? 0;
      o(this, Le).set(n, r + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, n) {
    if (m(this, yt, o(this, yt) - 1), t) {
      let r = o(this, Le).get(n) ?? 0;
      r === 1 ? o(this, Le).delete(n) : o(this, Le).set(n, r - 1);
    }
    o(this, et) || (m(this, et, !0), We(() => {
      m(this, et, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, n) {
    for (const r of t)
      o(this, De).add(r);
    for (const r of n)
      o(this, ye).add(r);
    t.clear(), n.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    o(this, gt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    o(this, mt).add(t);
  }
  settled() {
    return (o(this, Et) ?? m(this, Et, Lr())).promise;
  }
  static ensure() {
    if (y === null) {
      const t = y = new gn();
      Rn || We(() => {
        o(t, pt) || t.flush();
      });
    }
    return y;
  }
  apply() {
    {
      G = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    var i;
    if (jn = t, (i = t.b) != null && i.is_pending && t.f & (Gt | bn | Dr) && !(t.f & At)) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (ht !== null && n === T && (x === null || !(x.f & V)))
        return;
      if (r & (je | _e)) {
        if (!(r & B))
          return;
        n.f ^= B;
      }
    }
    o(this, Q).push(n);
  }
};
pt = new WeakMap(), Ve = new WeakMap(), $e = new WeakMap(), gt = new WeakMap(), mt = new WeakMap(), yt = new WeakMap(), Le = new WeakMap(), Et = new WeakMap(), Q = new WeakMap(), Kt = new WeakMap(), De = new WeakMap(), ye = new WeakMap(), Se = new WeakMap(), wt = new WeakMap(), et = new WeakMap(), I = new WeakSet(), Bn = function() {
  if (this.is_fork) return !0;
  for (const r of o(this, Le).keys()) {
    for (var t = r, n = !1; t.parent !== null; ) {
      if (o(this, Se).has(t)) {
        n = !0;
        break;
      }
      t = t.parent;
    }
    if (!n)
      return !0;
  }
  return !1;
}, Dt = function() {
  var u, f, p, d;
  m(this, pt, !0), hr++ > 1e3 && (S(this, I, Ot).call(this), us());
  for (const c of o(this, De))
    o(this, ye).delete(c), L(c, F), this.schedule(c);
  for (const c of o(this, ye))
    L(c, Ne), this.schedule(c);
  const t = o(this, Q);
  m(this, Q, []), this.apply();
  var n = ht = [], r = [], i = an = [];
  for (const c of t)
    try {
      S(this, I, Hn).call(this, c, n, r);
    } catch (h) {
      throw Jr(c), S(this, I, Bn).call(this) || this.discard(), h;
    }
  if (y = null, i.length > 0) {
    var s = gn.ensure();
    for (const c of i)
      s.schedule(c);
  }
  if (ht = null, an = null, S(this, I, Bn).call(this)) {
    S(this, I, ct).call(this, r), S(this, I, ct).call(this, n);
    for (const [c, h] of o(this, Se))
      Zr(c, h);
    i.length > 0 && /** @type {unknown} */
    S(u = y, I, Dt).call(u);
    return;
  }
  const l = S(this, I, zr).call(this);
  if (l) {
    S(this, I, ct).call(this, r), S(this, I, ct).call(this, n), S(f = l, I, Yr).call(f, this);
    return;
  }
  o(this, De).clear(), o(this, ye).clear();
  for (const c of o(this, gt)) c(this);
  o(this, gt).clear(), Ht = this, vr(r), vr(n), Ht = null, (p = o(this, Et)) == null || p.resolve();
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    y
  );
  if (o(this, yt) === 0 && (o(this, Q).length === 0 || a !== null) && S(this, I, Ot).call(this), o(this, Q).length > 0)
    if (a !== null) {
      const c = a;
      o(c, Q).push(...o(this, Q).filter((h) => !o(c, Q).includes(h)));
    } else
      a = this;
  a !== null && (Ie.clear(), S(d = a, I, Dt).call(d));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Hn = function(t, n, r) {
  t.f ^= B;
  for (var i = t.first; i !== null; ) {
    var s = i.f, l = (s & (_e | je)) !== 0, a = l && (s & B) !== 0, u = a || (s & X) !== 0 || o(this, Se).has(i);
    if (!u && i.fn !== null) {
      l ? i.f ^= B : s & Gt ? n.push(i) : rn(i) && (s & we && o(this, ye).add(i), kt(i));
      var f = i.first;
      if (f !== null) {
        i = f;
        continue;
      }
    }
    for (; i !== null; ) {
      var p = i.next;
      if (p !== null) {
        i = p;
        break;
      }
      i = i.parent;
    }
  }
}, zr = function() {
  for (var t = o(this, Ve); t !== null; ) {
    if (!t.is_fork) {
      for (const [n, [, r]] of this.current)
        if (t.current.has(n) && !r)
          return t;
    }
    t = o(t, Ve);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
Yr = function(t) {
  var r;
  for (const [i, s] of t.current)
    !this.previous.has(i) && t.previous.has(i) && this.previous.set(i, t.previous.get(i)), this.current.set(i, s);
  for (const [i, s] of t.async_deriveds) {
    const l = this.async_deriveds.get(i);
    l && s.promise.then(l.resolve).catch(l.reject);
  }
  t.async_deriveds.clear(), this.transfer_effects(o(t, De), o(t, ye));
  const n = (i) => {
    var s = i.reactions;
    if (s !== null && !(i.f & V && !(i.f & (F | Ne))))
      for (const u of s) {
        var l = u.f;
        if (l & V)
          n(
            /** @type {Derived} */
            u
          );
        else {
          var a = (
            /** @type {Effect} */
            u
          );
          l & (_t | we) && !this.async_deriveds.has(a) && (o(this, ye).delete(a), L(a, F), this.schedule(a));
        }
      }
  };
  for (const i of this.current.keys())
    n(i);
  this.oncommit(() => t.discard()), S(r = t, I, Ot).call(r), y = this, S(this, I, Dt).call(this);
}, /**
 * @param {Effect[]} effects
 */
ct = function(t) {
  for (var n = 0; n < t.length; n += 1)
    Hr(t[n], o(this, De), o(this, ye));
}, fs = function() {
  var d;
  for (let c = Cn; c !== null; c = o(c, $e)) {
    var t = c.id < this.id, n = [];
    for (const [h, [v, g]] of this.current) {
      if (c.current.has(h)) {
        var r = (
          /** @type {[any, boolean]} */
          c.current.get(h)[0]
        );
        if (t && v !== r)
          c.current.set(h, [v, g]);
        else
          continue;
      }
      n.push(h);
    }
    if (t)
      for (const [h, v] of this.async_deriveds) {
        const g = c.async_deriveds.get(h);
        g && v.promise.then(g.resolve).catch(g.reject);
      }
    var i = [...c.current.keys()].filter(
      (h) => !/** @type {[any, boolean]} */
      c.current.get(h)[1]
    );
    if (!(!o(c, pt) || i.length === 0)) {
      var s = i.filter((h) => !this.current.has(h));
      if (s.length === 0)
        t && c.discard();
      else if (n.length > 0) {
        if (t)
          for (const h of o(this, wt))
            c.unskip_effect(h, (v) => {
              var g;
              v.f & (we | _t) ? c.schedule(v) : S(g = c, I, ct).call(g, [v]);
            });
        c.activate();
        var l = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
        for (var u of n)
          Kr(u, s, l, a);
        a = /* @__PURE__ */ new Map();
        var f = [...c.current].filter(([h, v]) => {
          const g = this.current.get(h);
          return g ? g[0] !== v[0] || g[1] !== v[1] : !0;
        }).map(([h]) => h);
        if (f.length > 0)
          for (const h of o(this, Kt))
            !(h.f & (oe | X | cn)) && tr(h, f, a) && (h.f & (_t | we) ? (L(h, F), c.schedule(h)) : o(c, De).add(h));
        if (o(c, Q).length > 0 && !o(c, et)) {
          c.apply();
          for (var p of o(c, Q))
            S(d = c, I, Hn).call(d, p, [], []);
          m(c, Q, []);
        }
        c.deactivate();
      }
    }
  }
}, Ot = function() {
  if (this.linked) {
    var t = o(this, Ve), n = o(this, $e);
    t === null ? Cn = n : m(t, $e, n), n === null ? ut = t : m(n, Ve, t), this.linked = !1;
  }
};
let at = gn;
function us() {
  try {
    Zi();
  } catch (e) {
    Ae(e, jn);
  }
}
let me = null;
function vr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (!(r.f & (oe | X)) && rn(r) && (me = /* @__PURE__ */ new Set(), kt(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && li(r), (me == null ? void 0 : me.size) > 0)) {
        Ie.clear();
        for (const i of me) {
          if (i.f & (oe | X)) continue;
          const s = [i];
          let l = i.parent;
          for (; l !== null; )
            me.has(l) && (me.delete(l), s.push(l)), l = l.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const u = s[a];
            u.f & (oe | X) || kt(u);
          }
        }
        me.clear();
      }
    }
    me = null;
  }
}
function Kr(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      s & V ? Kr(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : s & (_t | we) && !(s & F) && tr(i, t, r) && (L(i, F), nr(
        /** @type {Effect} */
        i
      ));
    }
}
function tr(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (un.call(t, i))
        return !0;
      if (i.f & V && tr(
        /** @type {Derived} */
        i,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function nr(e) {
  y.schedule(e);
}
function Zr(e, t) {
  if (!(e.f & _e && e.f & B)) {
    e.f & F ? t.d.push(e) : e.f & Ne && t.m.push(e), L(e, B);
    for (var n = e.first; n !== null; )
      Zr(n, t), n = n.next;
  }
}
function Jr(e) {
  L(e, B);
  for (var t = e.first; t !== null; )
    Jr(t), t = t.next;
}
let vn = /* @__PURE__ */ new Set();
const Ie = /* @__PURE__ */ new Map();
let Wr = !1;
function ot(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Pr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function $(e, t) {
  const n = ot(e);
  return fi(n), n;
}
// @__NO_SIDE_EFFECTS__
function cs(e, t = !1, n = !0) {
  var i;
  const r = ot(e);
  return t || (r.equals = Fr), xn && n && H !== null && H.l !== null && ((i = H.l).s ?? (i.s = [])).push(r), r;
}
function O(e, t, n = !1) {
  x !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!xe || x.f & cn) && tn() && x.f & (V | we | _t | cn) && (Ce === null || !Ce.has(e)) && Xi();
  let r = n ? vt(t) : t;
  return Tt(e, r, an);
}
function Tt(e, t, n = null) {
  if (!e.equals(t)) {
    Ye ? Ie.set(e, t) : Ie.has(e) || Ie.set(e, e.v);
    var r = at.ensure();
    if (r.capture(e, t), e.f & V) {
      const i = (
        /** @type {Derived} */
        e
      );
      e.f & F && er(i), G === null && Qn(i);
    }
    e.wv = ci(), Xr(e, F, n), tn() && T !== null && T.f & B && !(T.f & (_e | je)) && (ue === null ? Ss([e]) : ue.push(e)), !r.is_fork && vn.size > 0 && !Wr && ds();
  }
  return t;
}
function ds() {
  Wr = !1;
  for (const e of vn) {
    e.f & B && L(e, Ne);
    let t;
    try {
      t = rn(e);
    } catch {
      t = !0;
    }
    t && kt(e);
  }
  vn.clear();
}
function Ut(e) {
  O(e, e.v + 1);
}
function Xr(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = tn(), s = r.length, l = 0; l < s; l++) {
      var a = r[l], u = a.f;
      if (!(!i && a === T)) {
        var f = (u & F) === 0;
        if (f && L(a, t), u & cn)
          vn.add(
            /** @type {Effect} */
            a
          );
        else if (u & V) {
          var p = (
            /** @type {Derived} */
            a
          );
          G == null || G.delete(p), u & lt || (u & ve && (T === null || !(T.f & dn)) && (a.f |= lt), Xr(p, Ne, n));
        } else if (f) {
          var d = (
            /** @type {Effect} */
            a
          );
          u & we && me !== null && me.add(d), n !== null ? n.push(d) : nr(d);
        }
      }
    }
}
function vt(e) {
  if (typeof e != "object" || e === null || Bt in e || Or in e)
    return e;
  const t = Mr(e);
  if (t !== Ci && t !== Ri)
    return e;
  var n = /* @__PURE__ */ new Map(), r = En(e), i = /* @__PURE__ */ $(0), s = st, l = (a) => {
    if (st === s)
      return a();
    var u = x, f = st;
    pe(null), yr(s);
    var p = a();
    return pe(u), yr(f), p;
  };
  return r && n.set("length", /* @__PURE__ */ $(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, u, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Ji();
        var p = n.get(u);
        return p === void 0 ? l(() => {
          var d = /* @__PURE__ */ $(f.value);
          return n.set(u, d), d;
        }) : O(p, f.value, !0), !0;
      },
      deleteProperty(a, u) {
        var f = n.get(u);
        if (f === void 0) {
          if (u in a) {
            const p = l(() => /* @__PURE__ */ $(j));
            n.set(u, p), Ut(i);
          }
        } else
          O(f, j), Ut(i);
        return !0;
      },
      get(a, u, f) {
        var h;
        if (u === Bt)
          return e;
        var p = n.get(u), d = u in a;
        if (p === void 0 && (!d || (h = jt(a, u)) != null && h.writable) && (p = l(() => {
          var v = vt(d ? a[u] : j), g = /* @__PURE__ */ $(v);
          return g;
        }), n.set(u, p)), p !== void 0) {
          var c = _(p);
          return c === j ? void 0 : c;
        }
        return Reflect.get(a, u, f);
      },
      getOwnPropertyDescriptor(a, u) {
        var f = Reflect.getOwnPropertyDescriptor(a, u);
        if (f && "value" in f) {
          var p = n.get(u);
          p && (f.value = _(p));
        } else if (f === void 0) {
          var d = n.get(u), c = d == null ? void 0 : d.v;
          if (d !== void 0 && c !== j)
            return {
              enumerable: !0,
              configurable: !0,
              value: c,
              writable: !0
            };
        }
        return f;
      },
      has(a, u) {
        var c;
        if (u === Bt)
          return !0;
        var f = n.get(u), p = f !== void 0 && f.v !== j || Reflect.has(a, u);
        if (f !== void 0 || T !== null && (!p || (c = jt(a, u)) != null && c.writable)) {
          f === void 0 && (f = l(() => {
            var h = p ? vt(a[u]) : j, v = /* @__PURE__ */ $(h);
            return v;
          }), n.set(u, f));
          var d = _(f);
          if (d === j)
            return !1;
        }
        return p;
      },
      set(a, u, f, p) {
        var D;
        var d = n.get(u), c = u in a;
        if (r && u === "length")
          for (var h = f; h < /** @type {Source<number>} */
          d.v; h += 1) {
            var v = n.get(h + "");
            v !== void 0 ? O(v, j) : h in a && (v = l(() => /* @__PURE__ */ $(j)), n.set(h + "", v));
          }
        if (d === void 0)
          (!c || (D = jt(a, u)) != null && D.writable) && (d = l(() => /* @__PURE__ */ $(void 0)), O(d, vt(f)), n.set(u, d));
        else {
          c = d.v !== j;
          var g = l(() => vt(f));
          O(d, g);
        }
        var k = Reflect.getOwnPropertyDescriptor(a, u);
        if (k != null && k.set && k.set.call(p, f), !c) {
          if (r && typeof u == "string") {
            var b = (
              /** @type {Source<number>} */
              n.get("length")
            ), N = Number(u);
            Number.isInteger(N) && N >= b.v && O(b, N + 1);
          }
          Ut(i);
        }
        return !0;
      },
      ownKeys(a) {
        _(i);
        var u = Reflect.ownKeys(a).filter((d) => {
          var c = n.get(d);
          return c === void 0 || c.v !== j;
        });
        for (var [f, p] of n)
          p.v !== j && !(f in a) && u.push(f);
        return u;
      },
      setPrototypeOf() {
        Wi();
      }
    }
  );
}
function _r(e) {
  try {
    if (e !== null && typeof e == "object" && Bt in e)
      return e[Bt];
  } catch {
  }
  return e;
}
function Qr(e, t) {
  return Object.is(_r(e), _r(t));
}
var pr, $r, ei, ti;
function hs() {
  if (pr === void 0) {
    pr = window, $r = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    ei = jt(t, "firstChild").get, ti = jt(t, "nextSibling").get, dr(e) && (e[Fn] = void 0, e[ln] = null, e[Fi] = void 0, e.__e = void 0), dr(n) && (n[Mt] = void 0);
  }
}
function ze(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
  return (
    /** @type {TemplateNode | null} */
    ei.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function nn(e) {
  return (
    /** @type {TemplateNode | null} */
    ti.call(e)
  );
}
function M(e, t) {
  return /* @__PURE__ */ qt(e);
}
function vs(e, t = !1) {
  {
    var n = /* @__PURE__ */ qt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ nn(n) : n;
  }
}
function W(e, t = !1) {
  return /* @__PURE__ */ qt(e);
}
function C(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ nn(r);
  return r;
}
function _s(e) {
  e.textContent = "";
}
function ni() {
  return !1;
}
function ps(e, t, n) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    n ? document.createElement(e, { is: n }) : document.createElement(e)
  );
}
function gs(e) {
  var t = T;
  if (t === null)
    return x.f |= qe, e;
  if (!(t.f & At) && !(t.f & Gt))
    throw e;
  Ae(e, t);
}
function Ae(e, t) {
  if (!(t !== null && t.f & oe)) {
    for (; t !== null; ) {
      if (t.f & On && !(t.f & (oe | Pn))) {
        if (!(t.f & At))
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
}
function ms(e) {
  T === null && (x === null && Ki(), Yi()), Ye && zi();
}
function ys(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Ke(e, t) {
  var n = T;
  n !== null && n.f & X && (e |= X);
  var r = {
    ctx: H,
    deps: null,
    nodes: null,
    f: e | F | ve,
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
  var i = r;
  if (e & Gt)
    ht !== null ? ht.push(r) : at.ensure().schedule(r);
  else if (t !== null) {
    try {
      kt(r);
    } catch (l) {
      throw te(r), l;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    !(i.f & It) && (i = i.first, e & we && e & Nt && i !== null && (i.f |= Nt));
  }
  if (i !== null && (i.parent = n, n !== null && ys(i, n), x !== null && x.f & V && !(e & je))) {
    var s = (
      /** @type {Derived} */
      x
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return r;
}
function rr() {
  return x !== null && !xe;
}
function ri(e) {
  const t = Ke(bn, null);
  return L(t, B), t.teardown = e, t;
}
function gr(e) {
  ms();
  var t = (
    /** @type {Effect} */
    T.f
  ), n = !x && (t & _e) !== 0 && H !== null && !H.i;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      H
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return ii(e);
}
function ii(e) {
  return Ke(Gt | Oi, e);
}
function Es(e) {
  at.ensure();
  const t = Ke(je | It, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? it(t, () => {
      te(t), r(void 0);
    }) : (te(t), r(void 0));
  });
}
function ws(e) {
  return Ke(_t | It, e);
}
function bs(e, t = 0) {
  return Ke(bn | t, e);
}
function be(e, t = [], n = [], r = []) {
  rs(r, t, n, (i) => {
    Ke(bn, () => {
      e(...i.map(_));
    });
  });
}
function ir(e, t = 0) {
  var n = Ke(we | t, e);
  return n;
}
function he(e) {
  return Ke(_e | It, e);
}
function si(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ye, r = x;
    mr(!0), pe(null);
    try {
      t.call(null);
    } catch (i) {
      Ae(i, e.parent);
    } finally {
      mr(n), pe(r);
    }
  }
}
function sr(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Nn(() => {
      i.abort(Qt);
    });
    var r = n.next;
    n.f & je ? n.parent = null : te(n, t), n = r;
  }
}
function xs(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & _e || te(t), t = n;
  }
}
function te(e, t = !0) {
  var n = !1;
  (t || e.f & Di) && e.nodes !== null && e.nodes.end !== null && (Ns(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), e.f |= Pn, sr(e, t && !n), zt(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  si(e), e.f ^= Pn, e.f |= oe;
  var i = e.parent;
  i !== null && i.first !== null && li(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Ns(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ nn(e);
    e.remove(), e = n;
  }
}
function li(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function it(e, t, n = !0) {
  var r = [];
  e.f |= Xn, ai(e, r, !0);
  var i = () => {
    n && te(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var l = () => --s || i();
    for (var a of r)
      a.out(l);
  } else
    i();
}
function ai(e, t, n) {
  if (!(e.f & X)) {
    e.f ^= X;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var i = e.first; i !== null; ) {
      var s = i.next;
      if (!(i.f & je)) {
        var l = (i.f & Nt) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & _e) !== 0 && (e.f & we) !== 0;
        ai(i, t, l ? n : !1);
      }
      i = s;
    }
  }
}
function _n(e) {
  e.f &= ~Xn, oi(e, !0);
}
function oi(e, t) {
  if (!(e.f & Xn) && e.f & X) {
    e.f ^= X, e.f & B || (L(e, F), at.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & Nt) !== 0 || (n.f & _e) !== 0;
      oi(n, i ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const l of s)
        (l.is_global || t) && l.in();
  }
}
function lr(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ nn(n);
      t.append(n), n = i;
    }
}
let on = !1, Ye = !1;
function mr(e) {
  Ye = e;
}
let x = null, xe = !1;
function pe(e) {
  x = e;
}
let T = null;
function Re(e) {
  T = e;
}
let Ce = null;
function fi(e) {
  x !== null && (Ce ?? (Ce = /* @__PURE__ */ new Set())).add(e);
}
let ee = null, ae = 0, ue = null;
function Ss(e) {
  ue = e;
}
let ui = 1, Xe = 0, st = Xe;
function yr(e) {
  st = e;
}
function ci() {
  return ++ui;
}
function rn(e) {
  var t = e.f;
  if (t & F)
    return !0;
  if (t & V && (e.f &= ~lt), t & Ne) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (rn(
        /** @type {Derived} */
        s
      ) && Gr(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    t & ve && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    G === null && L(e, B);
  }
  return !1;
}
function di(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(Ce !== null && Ce.has(e)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      s.f & V ? di(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? L(s, F) : s.f & B && L(s, Ne), nr(
        /** @type {Effect} */
        s
      ));
    }
}
function hi(e) {
  var t = ee, n = ae, r = ue, i = x, s = Ce, l = H, a = xe, u = st, f = e.f;
  ee = /** @type {null | Value[]} */
  null, ae = 0, ue = null, x = f & (_e | je) ? null : e, Ce = null, St(e.ctx), xe = !1, st = ++Xe, e.ac !== null && (Nn(() => {
    e.ac.abort(Qt);
  }), e.ac = null);
  try {
    e.f |= dn;
    var p = (
      /** @type {Function} */
      e.fn
    ), d = p();
    e.f |= At;
    var c = Er(e);
    if (tn() && ue !== null && !xe && c !== null && !(e.f & (V | Ne | F)))
      for (var h = 0; h < /** @type {Source[]} */
      ue.length; h++)
        di(
          ue[h],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Xe++, i.deps !== null)
        for (let v = 0; v < n; v += 1)
          i.deps[v].rv = Xe;
      if (t !== null)
        for (const v of t)
          v.rv = Xe;
      ue !== null && (r === null ? r = ue : r.push(.../** @type {Source[]} */
      ue));
    }
    return e.f & qe && (e.f ^= qe), d;
  } catch (v) {
    return Er(e), gs(v);
  } finally {
    e.f ^= dn, ee = t, ae = n, ue = r, x = i, Ce = s, St(l), xe = a, st = u;
  }
}
function Er(e) {
  var i;
  var t = e.deps, n = y == null ? void 0 : y.is_fork;
  if (ee !== null) {
    var r;
    if (n || zt(e, ae), t !== null && ae > 0)
      for (t.length = ae + ee.length, r = 0; r < ee.length; r++)
        t[ae + r] = ee[r];
    else
      e.deps = t = ee;
    if (rr() && e.f & ve)
      for (r = ae; r < t.length; r++)
        ((i = t[r]).reactions ?? (i.reactions = [])).push(e);
  } else !n && t !== null && ae < t.length && (zt(e, ae), t.length = ae);
  return t;
}
function Ts(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Ai.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && t.f & V && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ee === null || !un.call(ee, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    s.f & ve && (s.f ^= ve, s.f &= ~lt), s.v !== j && Qn(s), s.ac !== null && Nn(() => {
      s.ac.abort(Qt), s.ac = null, L(s, F);
    }), as(s), zt(s, 0);
  }
}
function zt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Ts(e, n[r]);
}
function kt(e) {
  var t = e.f;
  if (!(t & oe)) {
    L(e, B);
    var n = T, r = on;
    T = e, on = (t & (_e | je)) === 0;
    try {
      t & (we | Dr) ? xs(e) : sr(e), si(e);
      var i = hi(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = ui;
      var s;
      Cr && $i && e.f & F && e.deps;
    } finally {
      on = r, T = n;
    }
  }
}
function _(e) {
  var t = e.f, n = (t & V) !== 0;
  if (x !== null && !xe) {
    var r = T !== null && (T.f & oe) !== 0;
    if (!r && (Ce === null || !Ce.has(e))) {
      var i = x.deps;
      if (x.f & dn)
        e.rv < Xe && (e.rv = Xe, ee === null && i !== null && i[ae] === e ? ae++ : ee === null ? ee = [e] : ee.push(e));
      else {
        x.deps ?? (x.deps = []), un.call(x.deps, e) || x.deps.push(e);
        var s = e.reactions;
        s === null ? e.reactions = [x] : un.call(s, x) || s.push(x);
      }
    }
  }
  if (Ye && Ie.has(e))
    return Ie.get(e);
  if (n) {
    var l = (
      /** @type {Derived} */
      e
    );
    if (Ye) {
      var a = l.v;
      return (!(l.f & B) && l.reactions !== null || _i(l)) && (a = er(l)), Ie.set(l, a), a;
    }
    var u = (l.f & ve) === 0 && !xe && x !== null && (on || (x.f & ve) !== 0), f = (l.f & At) === 0;
    rn(l) && (u && (l.f |= ve), Gr(l)), u && !f && (qr(l), vi(l));
  }
  if (G != null && G.has(e))
    return G.get(e);
  if (e.f & qe)
    throw e.v;
  return e.v;
}
function vi(e) {
  if (e.f |= ve, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), t.f & V && !(t.f & ve) && (qr(
        /** @type {Derived} */
        t
      ), vi(
        /** @type {Derived} */
        t
      ));
}
function _i(e) {
  if (e.v === j) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Ie.has(t) || t.f & V && _i(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ks(e) {
  var t = xe;
  try {
    return xe = !0, e();
  } finally {
    xe = t;
  }
}
const Qe = Symbol("events"), pi = /* @__PURE__ */ new Set(), Un = /* @__PURE__ */ new Set();
function Fe(e, t, n) {
  (t[Qe] ?? (t[Qe] = {}))[e] = n;
}
function Sn(e) {
  for (var t = 0; t < e.length; t++)
    pi.add(e[t]);
  for (var n of Un)
    n(e);
}
let Mn = null, Ln = !1;
function wr(e) {
  var g, k;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((g = e.composedPath) == null ? void 0 : g.call(e)) || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Mn = e, Ln || (Ln = !0, setTimeout(() => {
    Ln = !1, Mn = null;
  }));
  var l = 0, a = Mn === e && e[Qe];
  if (a) {
    var u = i.indexOf(a);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Qe] = t;
      return;
    }
    var f = i.indexOf(t);
    if (f === -1)
      return;
    u <= f && (l = u);
  }
  if (s = /** @type {Element} */
  i[l] || e.target, s !== t) {
    Rr(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var p = x, d = T;
    pe(null), Re(null);
    try {
      for (var c, h = []; s !== null && s !== t; ) {
        try {
          var v = (k = s[Qe]) == null ? void 0 : k[r];
          v != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && v.call(s, e);
        } catch (b) {
          c ? h.push(b) : c = b;
        }
        if (e.cancelBubble) break;
        l++, s = l < i.length ? (
          /** @type {Element} */
          i[l]
        ) : null;
      }
      if (c) {
        for (let b of h)
          queueMicrotask(() => {
            throw b;
          });
        throw c;
      }
    } finally {
      e[Qe] = t, delete e.currentTarget, pe(p), Re(d);
    }
  }
}
var Ar;
const Dn = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  ((Ar = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : Ar.trustedTypes) && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function As(e) {
  return (
    /** @type {string} */
    (Dn == null ? void 0 : Dn.createHTML(e)) ?? e
  );
}
function Is(e) {
  var t = ps("template");
  return t.innerHTML = As(e.replaceAll("<!>", "<!---->")), t.content;
}
function Vn(e, t) {
  var n = (
    /** @type {Effect} */
    T
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function K(e, t) {
  var n = (t & 1) !== 0, r = (t & 2) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = Is(s ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ qt(i)));
    var l = (
      /** @type {TemplateNode} */
      r || $r ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ qt(l)
      ), u = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      Vn(a, u);
    } else
      Vn(l, l);
    return l;
  };
}
function Cs(e = "") {
  {
    var t = ze(e + "");
    return Vn(t, t), t;
  }
}
function z(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Rs = ["touchstart", "touchmove"];
function Ms(e) {
  return Rs.includes(e);
}
function Ls(e) {
  let t = 0, n = ot(0), r;
  return () => {
    rr() && (_(n), bs(() => (t === 0 && (r = ks(() => e(() => Ut(n)))), t += 1, () => {
      We(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, Ut(n));
      });
    })));
  };
}
var Ds = Nt | It;
function Os(e, t, n, r) {
  new Ps(e, t, n, r);
}
var ce, Wn, de, tt, Z, ie, J, se, Te, nt, Ge, bt, Zt, Jt, Oe, mn, R, Fs, js, Gn, Bs, qn, Pt, fn, zn, Yn;
class Ps {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, n, r, i) {
    E(this, R);
    /** @type {Boundary | null} */
    re(this, "parent");
    re(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    re(this, "transform_error");
    /** @type {TemplateNode} */
    E(this, ce);
    /** @type {TemplateNode | null} */
    E(this, Wn, null);
    /** @type {BoundaryProps} */
    E(this, de);
    /** @type {((anchor: Node) => void)} */
    E(this, tt);
    /** @type {Effect} */
    E(this, Z);
    /** @type {Effect | null} */
    E(this, ie, null);
    /** @type {Effect | null} */
    E(this, J, null);
    /** @type {Effect | null} */
    E(this, se, null);
    /** @type {DocumentFragment | null} */
    E(this, Te, null);
    E(this, nt, 0);
    E(this, Ge, 0);
    E(this, bt, !1);
    /** @type {Set<Effect>} */
    E(this, Zt, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    E(this, Jt, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    E(this, Oe, null);
    E(this, mn, Ls(() => (m(this, Oe, ot(o(this, nt))), () => {
      m(this, Oe, null);
    })));
    var s;
    m(this, ce, t), m(this, de, n), m(this, tt, (l) => {
      var a = (
        /** @type {Effect} */
        T
      );
      a.b = this, a.f |= On, r(l);
    }), this.parent = /** @type {Effect} */
    T.b, this.transform_error = i ?? ((s = this.parent) == null ? void 0 : s.transform_error) ?? ((l) => l), m(this, Z, ir(() => {
      S(this, R, qn).call(this);
    }, Ds));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Hr(t, o(this, Zt), o(this, Jt));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!o(this, de).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, n) {
    S(this, R, zn).call(this, t, n), m(this, nt, o(this, nt) + t), !(!o(this, Oe) || o(this, bt)) && (m(this, bt, !0), We(() => {
      m(this, bt, !1), o(this, Oe) && Tt(o(this, Oe), o(this, nt));
    }));
  }
  get_effect_pending() {
    return o(this, mn).call(this), _(
      /** @type {Source<number>} */
      o(this, Oe)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!o(this, de).onerror && !o(this, de).failed)
      throw t;
    y != null && y.is_fork ? (o(this, ie) && y.skip_effect(o(this, ie)), o(this, J) && y.skip_effect(o(this, J)), o(this, se) && y.skip_effect(o(this, se)), y.oncommit(() => {
      S(this, R, Yn).call(this, t);
    })) : S(this, R, Yn).call(this, t);
  }
}
ce = new WeakMap(), Wn = new WeakMap(), de = new WeakMap(), tt = new WeakMap(), Z = new WeakMap(), ie = new WeakMap(), J = new WeakMap(), se = new WeakMap(), Te = new WeakMap(), nt = new WeakMap(), Ge = new WeakMap(), bt = new WeakMap(), Zt = new WeakMap(), Jt = new WeakMap(), Oe = new WeakMap(), mn = new WeakMap(), R = new WeakSet(), Fs = function() {
  try {
    m(this, ie, he(() => o(this, tt).call(this, o(this, ce))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
js = function(t) {
  const n = o(this, de).failed, { reset: r, invoke_onerror: i } = S(this, R, Gn).call(this, t);
  We(i), n && m(this, se, he(() => {
    n(
      o(this, ce),
      () => t,
      () => r
    );
  }));
}, /**
 * Creates the `reset` function for a failed boundary, along with a function
 * that invokes `onerror` with it (if provided)
 * @param {unknown} error
 * @returns {{ reset: () => void, invoke_onerror: () => void }}
 */
Gn = function(t) {
  var n = !1, r = !1;
  const i = () => {
    if (n) {
      Ui();
      return;
    }
    n = !0, r && Qi(), o(this, se) !== null && it(o(this, se), () => {
      m(this, se, null);
    }), S(this, R, fn).call(this, () => {
      S(this, R, qn).call(this);
    });
  };
  return { reset: i, invoke_onerror: () => {
    var l, a;
    try {
      r = !0, (a = (l = o(this, de)).onerror) == null || a.call(l, t, i), r = !1;
    } catch (u) {
      Ae(u, o(this, Z) && o(this, Z).parent);
    }
  } };
}, Bs = function() {
  const t = o(this, de).pending;
  t && (this.is_pending = !0, m(this, J, he(() => t(o(this, ce)))), We(() => {
    var n = m(this, Te, document.createDocumentFragment()), r = ze(), i = !1;
    if (n.append(r), m(this, ie, S(this, R, fn).call(this, () => {
      try {
        return he(() => o(this, tt).call(this, r));
      } catch (s) {
        try {
          this.error(s), i = !0;
        } catch (l) {
          Ae(l, o(this, Z).parent);
        }
        return null;
      }
    })), o(this, ie) === null) {
      m(this, Te, null), i && S(this, R, Pt).call(
        this,
        /** @type {Batch} */
        y
      );
      return;
    }
    o(this, Ge) === 0 && (o(this, ce).before(n), m(this, Te, null), it(
      /** @type {Effect} */
      o(this, J),
      () => {
        m(this, J, null);
      }
    ), S(this, R, Pt).call(
      this,
      /** @type {Batch} */
      y
    ));
  }));
}, qn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), m(this, Ge, 0), m(this, nt, 0), m(this, ie, he(() => {
      o(this, tt).call(this, o(this, ce));
    })), o(this, Ge) > 0) {
      var t = m(this, Te, document.createDocumentFragment());
      lr(o(this, ie), t);
      const n = (
        /** @type {(anchor: Node) => void} */
        o(this, de).pending
      );
      m(this, J, he(() => n(o(this, ce))));
    } else
      S(this, R, Pt).call(
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
Pt = function(t) {
  this.is_pending = !1, t.transfer_effects(o(this, Zt), o(this, Jt));
}, /**
 * @template T
 * @param {() => T} fn
 */
fn = function(t) {
  var n = T, r = x, i = H;
  Re(o(this, Z)), pe(o(this, Z)), St(o(this, Z).ctx);
  try {
    return at.ensure(), t();
  } finally {
    Re(n), pe(r), St(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
zn = function(t, n) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && S(r = this.parent, R, zn).call(r, t, n);
    return;
  }
  m(this, Ge, o(this, Ge) + t), o(this, Ge) === 0 && (S(this, R, Pt).call(this, n), o(this, J) && it(o(this, J), () => {
    m(this, J, null);
  }), o(this, Te) && (o(this, ce).before(o(this, Te)), m(this, Te, null)));
}, /**
 * @param {unknown} error
 */
Yn = function(t) {
  o(this, ie) && (te(o(this, ie)), m(this, ie, null)), o(this, J) && (te(o(this, J)), m(this, J, null)), o(this, se) && (te(o(this, se)), m(this, se, null));
  let n = o(this, de).failed;
  const r = (i) => {
    const { reset: s, invoke_onerror: l } = S(this, R, Gn).call(this, i);
    l(), n && m(this, se, S(this, R, fn).call(this, () => {
      try {
        return he(() => {
          var a = (
            /** @type {Effect} */
            T
          );
          a.b = this, a.f |= On, n(
            o(this, ce),
            () => i,
            () => s
          );
        });
      } catch (a) {
        return Ae(
          a,
          /** @type {Effect} */
          o(this, Z).parent
        ), null;
      }
    }));
  };
  We(() => {
    var i;
    try {
      i = this.transform_error(t);
    } catch (s) {
      Ae(s, o(this, Z) && o(this, Z).parent);
      return;
    }
    i !== null && typeof i == "object" && typeof /** @type {any} */
    i.then == "function" ? i.then(
      r,
      /** @param {unknown} e */
      (s) => Ae(s, o(this, Z) && o(this, Z).parent)
    ) : r(i);
  });
};
function q(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== /** @type {any} */
  (e[Mt] ?? (e[Mt] = e.nodeValue)) && (e[Mt] = n, e.nodeValue = `${n}`);
}
function Hs(e, t) {
  return Us(e, t);
}
const sn = /* @__PURE__ */ new Map();
function Us(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: l = !0, transformError: a }) {
  hs();
  var u = void 0, f = Es(() => {
    var p = n ?? t.appendChild(ze());
    Os(
      /** @type {TemplateNode} */
      p,
      {
        pending: () => {
        }
      },
      (h) => {
        $t({});
        var v = (
          /** @type {ComponentContext} */
          H
        );
        s && (v.c = s), i && (r.$$events = i), u = e(h, r) || jr(), en();
      },
      a
    );
    var d = /* @__PURE__ */ new Set(), c = (h) => {
      for (var v = 0; v < h.length; v++) {
        var g = h[v];
        if (!d.has(g)) {
          d.add(g);
          var k = Ms(g);
          for (const D of [t, document]) {
            var b = sn.get(D);
            b === void 0 && (b = /* @__PURE__ */ new Map(), sn.set(D, b));
            var N = b.get(g);
            N === void 0 ? (D.addEventListener(g, wr, { passive: k }), b.set(g, 1)) : b.set(g, N + 1);
          }
        }
      }
    };
    return c(wn(pi)), Un.add(c), () => {
      var k;
      for (var h of d)
        for (const b of [t, document]) {
          var v = (
            /** @type {Map<string, number>} */
            sn.get(b)
          ), g = (
            /** @type {number} */
            v.get(h)
          );
          --g == 0 ? (b.removeEventListener(h, wr), v.delete(h), v.size === 0 && sn.delete(b)) : v.set(h, g);
        }
      Un.delete(c), p !== n && ((k = p.parentNode) == null || k.removeChild(p));
    };
  });
  return Vs.set(u, f), u;
}
let Vs = /* @__PURE__ */ new WeakMap();
var Ee, ke, le, rt, Wt, Xt, yn;
class Gs {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    re(this, "anchor");
    /** @type {Map<Batch, Key>} */
    E(this, Ee, /* @__PURE__ */ new Map());
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
    E(this, ke, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    E(this, le, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    E(this, rt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    E(this, Wt, !0);
    /**
     * @param {Batch} batch
     */
    E(this, Xt, (t) => {
      if (o(this, Ee).has(t)) {
        var n = (
          /** @type {Key} */
          o(this, Ee).get(t)
        ), r = o(this, ke).get(n);
        if (r)
          _n(r), o(this, rt).delete(n);
        else {
          var i = o(this, le).get(n);
          i && (_n(i.effect), o(this, ke).set(n, i.effect), o(this, le).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, l] of o(this, Ee)) {
          if (o(this, Ee).delete(s), s === t)
            break;
          const a = o(this, le).get(l);
          a && (te(a.effect), o(this, le).delete(l));
        }
        for (const [s, l] of o(this, ke)) {
          if (s === n || o(this, rt).has(s)) continue;
          const a = () => {
            if (Array.from(o(this, Ee).values()).includes(s)) {
              var f = document.createDocumentFragment();
              lr(l, f), f.append(ze()), o(this, le).set(s, { effect: l, fragment: f });
            } else
              te(l);
            o(this, rt).delete(s), o(this, ke).delete(s);
          };
          o(this, Wt) || !r ? (o(this, rt).add(s), it(l, a, !1)) : a();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    E(this, yn, (t) => {
      o(this, Ee).delete(t);
      const n = Array.from(o(this, Ee).values());
      for (const [r, i] of o(this, le))
        n.includes(r) || (te(i.effect), o(this, le).delete(r));
    });
    this.anchor = t, m(this, Wt, n);
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
    ), i = ni();
    if (n && !o(this, ke).has(t) && !o(this, le).has(t))
      if (i) {
        var s = document.createDocumentFragment(), l = ze();
        s.append(l), o(this, le).set(t, {
          effect: he(() => n(l)),
          fragment: s
        });
      } else
        o(this, ke).set(
          t,
          he(() => n(this.anchor))
        );
    if (o(this, Ee).set(r, t), i) {
      for (const [a, u] of o(this, ke))
        a === t ? r.unskip_effect(u) : r.skip_effect(u);
      for (const [a, u] of o(this, le))
        a === t ? r.unskip_effect(u.effect) : r.skip_effect(u.effect);
      r.oncommit(o(this, Xt)), r.ondiscard(o(this, yn));
    } else
      o(this, Xt).call(this, r);
  }
}
Ee = new WeakMap(), ke = new WeakMap(), le = new WeakMap(), rt = new WeakMap(), Wt = new WeakMap(), Xt = new WeakMap(), yn = new WeakMap();
function pn(e, t, n = !1) {
  var r = new Gs(e), i = n ? Nt : 0;
  function s(l, a) {
    r.ensure(l, a);
  }
  ir(() => {
    var l = !1;
    t((a, u = 0) => {
      l = !0, s(u, a);
    }), l || s(-1, null);
  }, i);
}
function qs(e, t) {
  return t;
}
function zs(e, t, n) {
  for (var r = [], i = t.length, s, l = t.length, a = 0; a < i; a++) {
    let d = t[a];
    it(
      d,
      () => {
        if (s) {
          if (s.pending.delete(d), s.done.add(d), s.pending.size === 0) {
            var c = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Kn(e, wn(s.done)), c.delete(s), c.size === 0 && (e.outrogroups = null);
          }
        } else
          l -= 1;
      },
      !1
    );
  }
  if (l === 0) {
    var u = r.length === 0 && n !== null && e.pending.size === 0;
    if (u) {
      var f = (
        /** @type {Element} */
        n
      ), p = (
        /** @type {Element} */
        f.parentNode
      );
      _s(p), p.append(f), e.items.clear();
    }
    Kn(e, t, !u);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function Kn(e, t, n = !0) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const l of e.pending.values())
      for (const a of l)
        r.add(
          /** @type {EachItem} */
          e.items.get(a).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    if (r != null && r.has(s)) {
      s.f |= Pe;
      const l = document.createDocumentFragment();
      lr(s, l);
    } else
      te(t[i], n);
  }
}
var br;
function ar(e, t, n, r, i, s = null) {
  var l = e, a = /* @__PURE__ */ new Map();
  {
    var u = (
      /** @type {Element} */
      e
    );
    l = u.appendChild(ze());
  }
  var f = null, p = /* @__PURE__ */ Vr(() => {
    var N = n();
    return (
      /** @type {V[]} */
      En(N) ? N : N == null ? [] : wn(N)
    );
  }), d, c = /* @__PURE__ */ new Map(), h = !0;
  function v(N) {
    b.effect.f & oe || (b.pending.delete(N), b.fallback = f, Ys(b, d, l, t, r), f !== null && (d.length === 0 ? f.f & Pe ? (f.f ^= Pe, Ft(f, null, l)) : _n(f) : it(f, () => {
      f = null;
    })));
  }
  function g(N) {
    b.pending.delete(N);
  }
  var k = ir(() => {
    d = /** @type {V[]} */
    _(p);
    for (var N = d.length, D = /* @__PURE__ */ new Set(), U = (
      /** @type {Batch} */
      y
    ), ne = ni(), Y = 0; Y < N; Y += 1) {
      var fe = d[Y], w = r(fe, Y), A = h ? null : a.get(w);
      A ? (A.v && Tt(A.v, fe), A.i && Tt(A.i, Y), ne && U.unskip_effect(A.e)) : (A = Ks(
        a,
        h ? l : br ?? (br = ze()),
        fe,
        w,
        Y,
        i,
        t,
        n
      ), h || (A.e.f |= Pe), a.set(w, A)), D.add(w);
    }
    if (N === 0 && s && !f && (h ? f = he(() => s(l)) : (f = he(() => s(br ?? (br = ze()))), f.f |= Pe)), N > D.size && qi(), !h)
      if (c.set(U, D), ne) {
        for (const [Me, Be] of a)
          D.has(Me) || U.skip_effect(Be.e);
        U.oncommit(v), U.ondiscard(g);
      } else
        v(U);
    _(p);
  }), b = { effect: k, items: a, pending: c, outrogroups: null, fallback: f };
  h = !1;
}
function Rt(e) {
  for (; e !== null && !(e.f & _e); )
    e = e.next;
  return e;
}
function Ys(e, t, n, r, i) {
  var w;
  var s = t.length, l = e.items, a = Rt(e.effect.first), u, f = null, p = [], d = [], c, h, v, g;
  for (g = 0; g < s; g += 1) {
    if (c = t[g], h = i(c, g), v = /** @type {EachItem} */
    l.get(h).e, e.outrogroups !== null)
      for (const A of e.outrogroups)
        A.pending.delete(v), A.done.delete(v);
    if (v.f & X && _n(v), v.f & Pe)
      if (v.f ^= Pe, v === a)
        Ft(v, null, n);
      else {
        var k = f ? f.next : a;
        v === e.effect.last && (e.effect.last = v.prev), v.prev && (v.prev.next = v.next), v.next && (v.next.prev = v.prev), Ue(e, f, v), Ue(e, v, k), Ft(v, k, n), f = v, p = [], d = [], a = Rt(f.next);
        continue;
      }
    if (v !== a) {
      if (u !== void 0 && u.has(v)) {
        if (p.length < d.length) {
          var b = d[0], N;
          f = b.prev;
          var D = p[0], U = p[p.length - 1];
          for (N = 0; N < p.length; N += 1)
            Ft(p[N], b, n);
          for (N = 0; N < d.length; N += 1)
            u.delete(d[N]);
          Ue(e, D.prev, U.next), Ue(e, f, D), Ue(e, U, b), a = b, f = U, g -= 1, p = [], d = [];
        } else
          u.delete(v), Ft(v, a, n), Ue(e, v.prev, v.next), Ue(e, v, f === null ? e.effect.first : f.next), Ue(e, f, v), f = v;
        continue;
      }
      for (p = [], d = []; a !== null && a !== v; )
        (u ?? (u = /* @__PURE__ */ new Set())).add(a), d.push(a), a = Rt(a.next);
      if (a === null)
        continue;
    }
    v.f & Pe || p.push(v), f = v, a = Rt(v.next);
  }
  if (e.outrogroups !== null) {
    for (const A of e.outrogroups)
      A.pending.size === 0 && (Kn(e, wn(A.done)), (w = e.outrogroups) == null || w.delete(A));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || u !== void 0) {
    var ne = [];
    if (u !== void 0)
      for (v of u)
        v.f & X || ne.push(v);
    for (; a !== null; )
      !(a.f & X) && a !== e.fallback && ne.push(a), a = Rt(a.next);
    var Y = ne.length;
    if (Y > 0) {
      var fe = s === 0 ? n : null;
      zs(e, ne, fe);
    }
  }
}
function Ks(e, t, n, r, i, s, l, a) {
  var u = l & 1 ? l & 16 ? ot(n) : /* @__PURE__ */ cs(n, !1, !1) : null, f = l & 2 ? ot(i) : null;
  return {
    v: u,
    i: f,
    e: he(() => (s(t, u ?? n, f ?? i, a), () => {
      e.delete(r);
    }))
  };
}
function Ft(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, s = t && !(t.f & Pe) ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ nn(r)
      );
      if (s.before(r), r === i)
        return;
      r = l;
    }
}
function Ue(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
const xr = [...` 	
\r\f \v\uFEFF`];
function Zs(e, t, n) {
  var r = "" + e;
  if (n) {
    for (var i of Object.keys(n))
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, l = 0; (l = r.indexOf(i, l)) >= 0; ) {
          var a = l + s;
          (l === 0 || xr.includes(r[l - 1])) && (a === r.length || xr.includes(r[a])) ? r = (l === 0 ? "" : r.substring(0, l)) + r.substring(a + 1) : l = a;
        }
  }
  return r === "" ? null : r;
}
function gi(e, t, n, r, i, s) {
  var l = (
    /** @type {any} */
    e[Fn]
  );
  if (l !== n || l === void 0) {
    var a = Zs(n, r, s);
    a == null ? e.removeAttribute("class") : e.className = a, e[Fn] = n;
  } else if (s && i !== s)
    for (var u in s) {
      var f = !!s[u];
      (i == null || f !== !!i[u]) && e.classList.toggle(u, f);
    }
  return s;
}
function Js(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Ws(e, t) {
  var n = e.__defaultValue, r = e.multiple, i = r ? n ?? [] : null;
  if (!(r && !En(i))) {
    e.selectedIndex;
    for (var s of e.options) {
      var l = Zn(s);
      Js(
        s,
        r ? (
          /** @type {any[]} */
          i.includes(l)
        ) : Qr(l, n)
      );
    }
  }
}
function mi(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!En(t))
      return Hi();
    for (var r of e.options)
      r.selected = t.includes(Zn(r));
    return;
  }
  for (r of e.options) {
    var i = Zn(r);
    if (Qr(i, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Xs(e) {
  var t = new MutationObserver((n) => {
    n.every(Qs) || ("__defaultValue" in e && Ws(e), "__value" in e && mi(e, e.__value));
  });
  t.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), ri(() => {
    t.disconnect();
  });
}
function Zn(e) {
  return "__value" in e ? e.__value : e.value;
}
function Qs(e) {
  if (
    /** @type {Element} */
    e.target.closest("selectedcontent") !== null
  )
    return !0;
  if (e.type === "childList") {
    var t = [...e.addedNodes, ...e.removedNodes];
    return t.length > 0 && t.every((n) => n.nodeName === "SELECTEDCONTENT");
  }
  return !1;
}
const $s = Symbol("is custom element"), el = Symbol("is html"), tl = ji ? "progress" : "PROGRESS";
function yi(e, t) {
  var n = or(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== tl) || (e.value = t ?? "");
}
function Ei(e, t) {
  var n = or(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Vt(e, t, n, r) {
  var i = or(e);
  i[t] !== (i[t] = n) && (t === "loading" && (e[Pi] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && nl(e).has(t) ? e[t] = n : e.setAttribute(t, n));
}
function or(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[ln] ?? (e[ln] = {
      [$s]: e.nodeName.includes("-"),
      [el]: e.namespaceURI === ki
    })
  );
}
var Nr = /* @__PURE__ */ new Map();
function nl(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Nr.get(t);
  if (n) return n;
  Nr.set(t, n = /* @__PURE__ */ new Set());
  for (var r, i = e, s = Element.prototype; s !== i; ) {
    r = Ii(i);
    for (var l in r)
      r[l].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      l !== "innerHTML" && l !== "textContent" && l !== "innerText" && n.add(l);
    i = Mr(i);
  }
  return n;
}
function rl(e, t, n, r) {
  var i = (
    /** @type {V} */
    r
  ), s = !0, l = () => (s && (s = !1, i = /** @type {V} */
  r), i), a;
  a = /** @type {V} */
  e[t], a === void 0 && r !== void 0 && (a = l());
  var u;
  return u = () => {
    var f = (
      /** @type {V} */
      e[t]
    );
    return f === void 0 ? l() : (s = !0, f);
  }, u;
}
const il = "5";
var Ir;
typeof window < "u" && ((Ir = window.__svelte ?? (window.__svelte = {})).v ?? (Ir.v = /* @__PURE__ */ new Set())).add(il);
var sl = /* @__PURE__ */ K('<span class="linked-badge"> </span>'), ll = /* @__PURE__ */ K('<tr role="radio" tabindex="0"><td class="select-column"><input type="radio" name="extref"/></td><td><strong> </strong></td><td> </td><td><span class="source-path"> </span> <!></td><td><span class="service-badge"> </span></td></tr>'), al = /* @__PURE__ */ K('<tr><td colspan="5" class="table-empty">No ExtRefs found in this IED.</td></tr>'), ol = /* @__PURE__ */ K('<article class="panel"><div class="panel-heading"><div><h2>ExtRefs</h2></div> <span class="panel-count"> </span></div> <div class="table-wrap"><table><thead><tr><th class="select-column"><span class="sr-only">Selection</span></th><th>intAddr</th><th>Receiver</th><th>Source</th><th>Service</th></tr></thead><tbody></tbody></table></div></article>');
function fl(e, t) {
  $t(t, !0);
  function n(d) {
    var c;
    return ((c = t.mappings.find((h) => h.sourceId === d.id)) == null ? void 0 : c.targetLogicalNode) ?? "";
  }
  function r(d, c) {
    d.key !== "Enter" && d.key !== " " || (d.preventDefault(), t.onselect(c));
  }
  var i = ol(), s = M(i), l = C(M(s), 2), a = W(l, !0), u = C(s, 2), f = M(u), p = C(M(f));
  ar(
    p,
    21,
    () => t.rows,
    (d) => d.id,
    (d, c) => {
      var h = ll();
      let v;
      var g = M(h), k = M(g), b = C(g), N = M(b), D = W(N, !0), U = C(b), ne = W(U, !0), Y = C(U), fe = M(Y), w = W(fe, !0), A = C(fe, 2);
      {
        var Me = (Ze) => {
          var Ct = sl(), kn = W(Ct);
          be((An) => q(kn, `→ ${An ?? ""}`), [() => n(_(c))]), z(Ze, Ct);
        }, Be = /* @__PURE__ */ ge(() => n(_(c)));
        pn(A, (Ze) => {
          _(Be) && Ze(Me);
        });
      }
      var He = C(Y), ft = M(He), Tn = W(ft, !0);
      be(() => {
        Vt(h, "aria-checked", t.selectedId === _(c).id), v = gi(h, 1, "", null, v, { selected: t.selectedId === _(c).id }), yi(k, _(c).id), Ei(k, t.selectedId === _(c).id), Vt(k, "aria-label", `Select ExtRef ${_(c).intAddr}`), q(D, _(c).intAddr), q(ne, _(c).receiver), q(w, _(c).source), q(Tn, _(c).serviceType);
      }), Fe("click", h, () => t.onselect(_(c).id)), Fe("keydown", h, (Ze) => r(Ze, _(c).id)), Fe("change", k, () => t.onselect(_(c).id)), z(d, h);
    },
    (d) => {
      var c = al();
      z(d, c);
    }
  ), be(() => q(a, t.rows.length)), z(e, i), en();
}
Sn(["click", "keydown", "change"]);
var ul = /* @__PURE__ */ K("<option> </option>"), cl = /* @__PURE__ */ K('<span class="ied-meta"> <!></span>'), dl = /* @__PURE__ */ K('<section class="toolbar" aria-label="IED selection"><label for="ied-select">IED</label> <select id="ied-select"></select> <!> <span class="count"> </span></section>');
function hl(e, t) {
  $t(t, !0);
  var n = dl(), r = C(M(n), 2);
  ar(r, 21, () => t.ieds, qs, (f, p) => {
    var d = ul(), c = W(d, !0), h = {};
    be(() => {
      q(c, _(p).name), h !== (h = _(p).name) && (d.value = (d.__value = h) ?? "");
    }), z(f, d);
  });
  var i;
  Xs(r);
  var s = C(r, 2);
  {
    var l = (f) => {
      var p = cl(), d = M(p), c = C(d);
      {
        var h = (v) => {
          var g = Cs();
          be(() => q(g, `· ${t.selectedIed.type ?? ""}`)), z(v, g);
        };
        pn(c, (v) => {
          t.selectedIed.type && v(h);
        });
      }
      be(() => q(d, `${(t.selectedIed.manufacturer || "Unknown manufacturer") ?? ""} `)), z(f, p);
    };
    pn(s, (f) => {
      t.selectedIed && f(l);
    });
  }
  var a = C(s, 2), u = W(a);
  be(() => {
    i !== (i = t.selectedName) && (r.value = (r.__value = i) ?? "", mi(r, i)), q(u, `${t.extRefCount ?? ""} ExtRefs · ${t.logicalNodeCount ?? ""} LN/LN0`);
  }), Fe("change", r, (f) => t.onselect(f.currentTarget.value)), z(e, n), en();
}
Sn(["change"]);
var vl = /* @__PURE__ */ K('<tr role="radio" tabindex="0"><td class="select-column"><input type="radio" name="logical-node"/></td><td><strong> </strong></td><td> </td><td><code> </code></td><td><span class="do-list"> </span></td></tr>'), _l = /* @__PURE__ */ K('<tr><td colspan="5" class="table-empty">No logical nodes found.</td></tr>'), pl = /* @__PURE__ */ K('<article class="panel"><div class="panel-heading"><div><h2>Logical Nodes</h2></div> <span class="panel-count"> </span></div> <div class="table-wrap"><table><thead><tr><th class="select-column"><span class="sr-only">Selection</span></th><th>Logical Device</th><th>LN / LN0</th><th>lnType</th><th>Data Objects</th></tr></thead><tbody></tbody></table></div></article>');
function gl(e, t) {
  $t(t, !0);
  function n(d) {
    return d.dataObjects.length ? d.dataObjects.join(", ") : "No data object definition found";
  }
  function r(d, c) {
    d.key !== "Enter" && d.key !== " " || (d.preventDefault(), t.onselect(c));
  }
  var i = pl(), s = M(i), l = C(M(s), 2), a = W(l, !0), u = C(s, 2), f = M(u), p = C(M(f));
  ar(
    p,
    21,
    () => t.rows,
    (d) => d.id,
    (d, c) => {
      var h = vl();
      let v;
      var g = M(h), k = M(g), b = C(g), N = M(b), D = W(N, !0), U = C(b), ne = W(U, !0), Y = C(U), fe = M(Y), w = W(fe, !0), A = C(Y), Me = M(A), Be = W(Me, !0);
      be(
        (He, ft) => {
          Vt(h, "aria-checked", t.selectedId === _(c).id), v = gi(h, 1, "", null, v, { selected: t.selectedId === _(c).id }), yi(k, _(c).id), Ei(k, t.selectedId === _(c).id), Vt(k, "aria-label", `Select ${_(c).name}`), q(D, _(c).ldInst), q(ne, _(c).name), q(w, _(c).lnType), Vt(Me, "title", He), q(Be, ft);
        },
        [
          () => n(_(c)),
          () => n(_(c))
        ]
      ), Fe("click", h, () => t.onselect(_(c).id)), Fe("keydown", h, (He) => r(He, _(c).id)), Fe("change", k, () => t.onselect(_(c).id)), z(d, h);
    },
    (d) => {
      var c = _l();
      z(d, c);
    }
  ), be(() => q(a, t.rows.length)), z(e, i), en();
}
Sn(["click", "keydown", "change"]);
var ml = /* @__PURE__ */ K('<div class="link-action"><button class="connect-button" type="button" title="Connect the selected ExtRef to the selected logical node"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10.6 13.4a1 1 0 0 1 0-1.4l1.4-1.4a1 1 0 0 1 1.4 1.4L12 13.4a1 1 0 0 1-1.4 0Z"></path><path d="m8.5 15.5-1 1a3.5 3.5 0 0 1-5-5l3-3a3.5 3.5 0 0 1 5 0 1 1 0 0 1-1.4 1.4 1.5 1.5 0 0 0-2.2 0l-3 3a1.5 1.5 0 0 0 2.2 2.2l1-1a1 1 0 1 1 1.4 1.4Zm7-7 1-1a3.5 3.5 0 0 1 5 5l-3 3a3.5 3.5 0 0 1-5 0 1 1 0 0 1 1.4-1.4 1.5 1.5 0 0 0 2.2 0l3-3a1.5 1.5 0 0 0-2.2-2.2l-1 1a1 1 0 1 1-1.4-1.4Z"></path></svg> <span>Connect</span></button> <button class="disconnect-button" type="button" title="Disconnect the selected ExtRef mapping"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 15.5 7.5 16.5a3.5 3.5 0 0 1-5-5l3-3a3.5 3.5 0 0 1 4.1-.6 1 1 0 1 1-1 1.8 1.5 1.5 0 0 0-1.7.2l-3 3a1.5 1.5 0 0 0 2.2 2.2l1-1a1 1 0 1 1 1.4 1.4Zm7-7 1-1a3.5 3.5 0 0 1 5 5l-3 3a3.5 3.5 0 0 1-4.1.6 1 1 0 0 1 1-1.8 1.5 1.5 0 0 0 1.7-.2l3-3a1.5 1.5 0 0 0-2.2-2.2l-1 1a1 1 0 0 1-1.4-1.4ZM4.3 3.3a1 1 0 0 1 1.4 0l15 15a1 1 0 0 1-1.4 1.4l-15-15a1 1 0 0 1 0-1.4Z"></path></svg> <span>Disconnect</span></button></div>');
function yl(e, t) {
  var n = ml(), r = M(n), i = C(r, 2);
  be(() => {
    r.disabled = !t.canConnect, i.disabled = !t.canDisconnect;
  }), Fe("click", r, function(...s) {
    var l;
    (l = t.onconnect) == null || l.apply(this, s);
  }), Fe("click", i, function(...s) {
    var l;
    (l = t.ondisconnect) == null || l.apply(this, s);
  }), z(e, n);
}
Sn(["click"]);
es();
var El = /* @__PURE__ */ K(`<header class="hero"><div><p class="eyebrow">SCL SIGNAL MAPPING</p> <h1>IED Signal Mapper</h1> <p class="intro">Select ExtRefs from an IED and map them to logical nodes in its data
      model.</p></div></header>`);
function wl(e) {
  var t = El();
  z(e, t);
}
function bl(e) {
  return Yt(e, "IED").map((t) => ({
    element: t,
    name: P(t, "name", "Unbenanntes IED"),
    manufacturer: P(t, "manufacturer"),
    type: P(t, "type")
  }));
}
function xl(e) {
  return Yt(e, "ExtRef").map((t, n) => {
    const r = Jn(t, ["LN", "LN0"]), i = Jn(t, ["LDevice"]), s = [
      P(i, "inst"),
      wi(r)
    ].filter(Boolean).join(" / "), l = [
      P(t, "srcIEDName"),
      P(t, "srcLDInst"),
      Tl(t, "src"),
      P(t, "doName"),
      P(t, "daName")
    ].filter(Boolean).join(" / ");
    return {
      element: t,
      id: `${s}:${P(t, "intAddr")}:${n}`,
      intAddr: P(t, "intAddr", "-"),
      serviceType: P(t, "serviceType", "-"),
      receiver: s || "-",
      source: l || "Not connected"
    };
  });
}
function Nl(e, t) {
  const n = Yt(e, "LNodeType");
  return Yt(t, ["LN0", "LN"]).map((r, i) => {
    const s = Jn(r, ["LDevice"]), l = P(s, "inst", "-"), a = wi(r) || "-", u = P(r, "lnType", "-"), f = n.find(
      (d) => d.getAttribute("id") === u
    ), p = f ? Sl(f, "DO").map(
      (d) => P(d, "name")
    ) : [];
    return {
      element: r,
      id: `${l}:${a}:${i}`,
      ldInst: l,
      name: a,
      lnType: u,
      dataObjects: p
    };
  });
}
function Yt(e, t) {
  const n = new Set(Array.isArray(t) ? t : [t]);
  return Array.from(e.getElementsByTagName("*")).filter(
    (r) => n.has(r.localName)
  );
}
function Sl(e, t) {
  return Array.from(e.children).filter(
    (n) => n.localName === t
  );
}
function Jn(e, t) {
  let n = e.parentElement;
  for (; n; ) {
    if (t.includes(n.localName)) return n;
    n = n.parentElement;
  }
  return null;
}
function wi(e) {
  return e ? `${P(e, "prefix")}${P(e, "lnClass")}${P(e, "inst")}` : "";
}
function Tl(e, t) {
  return `${P(e, `${t}Prefix`)}${P(e, `${t}LNClass`)}${P(e, `${t}LNInst`)}`;
}
function P(e, t, n = "") {
  return (e == null ? void 0 : e.getAttribute(t)) || n;
}
const bi = "weidmueller:extref-ln-links";
function fr(e) {
  const t = ur(e);
  if (!(t != null && t.textContent)) return [];
  try {
    const n = JSON.parse(t.textContent);
    return Array.isArray(n) ? n : [];
  } catch {
    return [];
  }
}
function kl(e, t, n, r) {
  const i = fr(e).filter(
    (u) => u.sourceId !== n.id
  );
  i.push({
    sourceId: n.id,
    sourceIed: t,
    sourceExtRef: n.intAddr,
    targetIed: t,
    targetLogicalNode: `${r.ldInst} / ${r.name}`,
    targetLnType: r.lnType
  });
  const s = JSON.stringify(i, null, 2), l = ur(e);
  if (l) return { element: l, textContent: s };
  const a = e.createElementNS(
    e.documentElement.namespaceURI,
    "Private"
  );
  return a.setAttribute("type", bi), a.textContent = s, {
    parent: e.documentElement,
    node: a,
    reference: e.documentElement.firstChild
  };
}
function Al(e, t) {
  const n = ur(e);
  if (!n) return null;
  const r = fr(e).filter(
    (i) => i.sourceId !== t
  );
  return r.length === 0 ? { node: n } : {
    element: n,
    textContent: JSON.stringify(r, null, 2)
  };
}
function ur(e) {
  return Yt(e.documentElement, "Private").find(
    (t) => t.getAttribute("type") === bi
  );
}
function Sr(e, t, n) {
  return e.dispatchEvent(
    new CustomEvent("oscd-edit-v2", {
      bubbles: !0,
      composed: !0,
      detail: {
        edit: t,
        title: n,
        createHistoryEntry: !0
      }
    })
  );
}
var Il = /* @__PURE__ */ K('<section class="empty-state"><span class="empty-icon">SCL</span> <h2>No document open</h2> <p>Open an SCL document in COMPAS to analyze its IEDs.</p></section>'), Cl = /* @__PURE__ */ K('<section class="empty-state"><span class="empty-icon">IED</span> <h2>No IEDs found</h2> <p>The current document does not contain any IED elements.</p></section>'), Rl = /* @__PURE__ */ K('<!> <section class="mapping-grid"><!> <!> <!></section> <footer class="status-bar" aria-live="polite"><span class="status-dot"></span> <span> </span> <span class="link-count"> </span></footer>', 1), Ml = /* @__PURE__ */ K('<main class="plugin-shell"><!> <!></main>');
function Ll(e, t) {
  $t(t, !0);
  let n = rl(t, "editCount", 3, 0), r = /* @__PURE__ */ $(""), i = /* @__PURE__ */ $(""), s = /* @__PURE__ */ $(""), l = /* @__PURE__ */ $(0), a = /* @__PURE__ */ $("");
  const u = /* @__PURE__ */ ge(() => (n(), _(l), t.doc ? bl(t.doc) : [])), f = /* @__PURE__ */ ge(() => _(u).find((w) => w.name === _(r))), p = /* @__PURE__ */ ge(() => _(f) ? xl(_(f).element) : []), d = /* @__PURE__ */ ge(() => t.doc && _(f) ? Nl(t.doc, _(f).element) : []), c = /* @__PURE__ */ ge(() => (n(), _(l), t.doc ? fr(t.doc) : [])), h = /* @__PURE__ */ ge(() => _(p).find((w) => w.id === _(i))), v = /* @__PURE__ */ ge(() => _(d).find((w) => w.id === _(s))), g = /* @__PURE__ */ ge(() => _(c).find((w) => w.sourceId === _(i)));
  gr(() => {
    var w;
    _(u).some((A) => A.name === _(r)) || O(r, ((w = _(u)[0]) == null ? void 0 : w.name) ?? "", !0);
  }), gr(() => {
    _(p).some((w) => w.id === _(i)) || O(i, ""), _(d).some((w) => w.id === _(s)) || O(s, "");
  });
  function k() {
    if (!t.doc || !t.host || !_(f) || !_(h) || !_(v)) {
      O(a, "Select an ExtRef on the left and a logical node on the right.");
      return;
    }
    const w = kl(t.doc, _(f).name, _(h), _(v));
    Sr(t.host, w, `Connect ExtRef ${_(h).intAddr} to ${_(v).name}`), O(l, _(l) + 1), O(a, `Connected to ${_(v).ldInst} / ${_(v).name}.`);
  }
  function b() {
    if (!t.doc || !t.host || !_(h) || !_(g)) {
      O(a, "The selected ExtRef has no stored mapping.");
      return;
    }
    const w = Al(t.doc, _(h).id);
    w && (Sr(t.host, w, `Disconnect mapping for ExtRef ${_(h).intAddr}`), O(l, _(l) + 1), O(a, `Disconnected ${_(h).intAddr}.`));
  }
  var N = Ml(), D = M(N);
  wl(D);
  var U = C(D, 2);
  {
    var ne = (w) => {
      var A = Il();
      z(w, A);
    }, Y = (w) => {
      var A = Cl();
      z(w, A);
    }, fe = (w) => {
      var A = Rl(), Me = vs(A);
      hl(Me, {
        get ieds() {
          return _(u);
        },
        get selectedIed() {
          return _(f);
        },
        get selectedName() {
          return _(r);
        },
        get extRefCount() {
          return _(p).length;
        },
        get logicalNodeCount() {
          return _(d).length;
        },
        onselect: (Je) => O(r, Je, !0)
      });
      var Be = C(Me, 2), He = M(Be);
      fl(He, {
        get rows() {
          return _(p);
        },
        get mappings() {
          return _(c);
        },
        get selectedId() {
          return _(i);
        },
        onselect: (Je) => O(i, Je, !0)
      });
      var ft = C(He, 2);
      {
        let Je = /* @__PURE__ */ ge(() => !!(_(h) && _(v))), Ni = /* @__PURE__ */ ge(() => !!_(g));
        yl(ft, {
          get canConnect() {
            return _(Je);
          },
          get canDisconnect() {
            return _(Ni);
          },
          onconnect: k,
          ondisconnect: b
        });
      }
      var Tn = C(ft, 2);
      gl(Tn, {
        get rows() {
          return _(d);
        },
        get selectedId() {
          return _(s);
        },
        onselect: (Je) => O(s, Je, !0)
      });
      var Ze = C(Be, 2), Ct = C(M(Ze), 2), kn = W(Ct, !0), An = C(Ct, 2), xi = W(An);
      be(() => {
        q(kn, _(a) || "Ready. Mappings are stored in the Private section."), q(xi, `${_(c).length ?? ""} stored`);
      }), z(w, A);
    };
    pn(U, (w) => {
      t.doc ? _(u).length === 0 ? w(Y, 1) : w(fe, -1) : w(ne);
    });
  }
  z(e, N), en();
}
const Dl = "ied-signal-mapper", Ol = "0.0.1", Tr = {
  name: Dl,
  version: Ol
};
var xt;
class Hl extends HTMLElement {
  constructor() {
    super();
    E(this, xt);
    m(this, xt, /* @__PURE__ */ $(vt({ doc: void 0, docName: "", editCount: 0, host: this })));
  }
  get props() {
    return _(o(this, xt));
  }
  set props(n) {
    O(o(this, xt), n, !0);
  }
  connectedCallback() {
    if (this.shadowRoot) return;
    const n = this.attachShadow({ mode: "open" });
    n.appendChild(Fl()), this.app = Hs(Ll, { target: n, props: this.props });
  }
  content() {
    return this;
  }
  set doc(n) {
    this.props.doc = n;
  }
  set editCount(n) {
    this.props.editCount = n;
  }
  set docName(n) {
    this.props.docName = n;
  }
}
xt = new WeakMap();
const Pl = "*,:root,:host{--wm-internal-primary: var(--oscd-theme-primary, var(--oscd-primary, #2aa198));--wm-internal-secondary: var(--oscd-theme-secondary, var(--oscd-secondary, #6c71c4));--wm-internal-error: var(--oscd-theme-error, var(--oscd-error, #dc322f));--wm-internal-warning: var(--oscd-theme-warning, var(--oscd-warning, #b58900));--wm-internal-base03: var(--oscd-theme-base03, var(--oscd-base03, light-dark(#002b36, #fdf6e3)));--wm-internal-base02: var(--oscd-theme-base02, var(--oscd-base02, light-dark(#073642, #eee8d5)));--wm-internal-base01: var(--oscd-theme-base01, var(--oscd-base01, light-dark(#586e75, #93a1a1)));--wm-internal-base00: var(--oscd-theme-base00, var(--oscd-base00, light-dark(#657b83, #839496)));--wm-internal-base0: var(--oscd-theme-base0, var(--oscd-base0, light-dark(#839496, #657b83)));--wm-internal-base1: var(--oscd-theme-base1, var(--oscd-base1, light-dark(#93a1a1, #586e75)));--wm-internal-base2: var(--oscd-theme-base2, var(--oscd-base2, light-dark(#eee8d5, #073642)));--wm-internal-base3: var(--oscd-theme-base3, var(--oscd-base3, light-dark(#fdf6e3, #002b36)));--wm-internal-yellow: var(--oscd-theme-yellow, var(--oscd-yellow, #b58900));--wm-internal-orange: var(--oscd-theme-orange, var(--oscd-orange, #cb4b16));--wm-internal-red: var(--oscd-theme-red, var(--oscd-red, #dc322f));--wm-internal-magenta: var(--oscd-theme-magenta, var(--oscd-magenta, #d33682));--wm-internal-violet: var(--oscd-theme-violet, var(--oscd-violet, #6c71c4));--wm-internal-blue: var(--oscd-theme-blue, var(--oscd-blue, #268bd2));--wm-internal-cyan: var(--oscd-theme-cyan, var(--oscd-cyan, #2aa198));--wm-internal-green: var(--oscd-theme-green, var(--oscd-green, #859900));--wm-internal-text-font: var(--oscd-theme-text-font, var(--oscd-text-font, \"Roboto\"));--wm-internal-text-font-mono: var(--oscd-theme-text-font-mono, var(--oscd-text-font-mono, \"Roboto Mono\"));--wm-internal-icon-font: var(--oscd-theme-icon-font, \"Material Symbols Outlined\");--wm-internal-shape: var(--oscd-theme-shape, var(--oscd-shape, 8px));--wm-internal-shape-none: 0;--wm-internal-shape-extra-small: calc(.5 * var(--wm-internal-shape));--wm-internal-shape-small: var(--wm-internal-shape);--wm-internal-shape-medium: calc(1.5 * var(--wm-internal-shape));--wm-internal-shape-large: calc(2 * var(--wm-internal-shape))}@container style(--oscd-warning: initial) and style(--primary: #330000) and style(--oscd-primary: var(--cyan)) and style(--oscd-base03: #002b36){*{--wm-internal-primary: #330000;--wm-internal-secondary: #990000;--wm-internal-base03: #5a473e;--wm-internal-base02: #665247;--wm-internal-base01: #735c50;--wm-internal-base00: #806659;--wm-internal-base0: #b2a59f;--wm-internal-base1: #ccc1bc;--wm-internal-base2: #e6deda;--wm-internal-base3: #faf8f7}}@container style(--oscd-warning: initial) and style(--primary: #330000) and style(--oscd-primary: var(--cyan)) and style(--oscd-base03: #fdf6e3){*{--wm-internal-primary: #ffecec;--wm-internal-secondary: #ee8585;--wm-internal-base03: #faf8f7;--wm-internal-base02: #e6deda;--wm-internal-base01: #ccc1bc;--wm-internal-base00: #b2a59f;--wm-internal-base0: #806659;--wm-internal-base1: #735c50;--wm-internal-base2: #665247;--wm-internal-base3: #5a473e}}@container style(--oscd-warning: initial) and style(--primary: #004552) and style(--oscd-primary: var(--cyan)) and style(--oscd-base03: #002b36){*{--wm-internal-primary: #004552}}@container style(--oscd-warning: initial) and style(--primary: #004552) and style(--oscd-primary: var(--cyan)) and style(--oscd-base03: #fdf6e3){*{--wm-internal-primary: #81c3cf}}:root,:host{--mdc-theme-primary: var(--wm-internal-primary);--mdc-theme-surface: var(--wm-internal-base3);--mdc-theme-on-surface: var(--wm-internal-base03);--mdc-shape-none: var(--wm-internal-shape-none);--mdc-shape-extra-small: var(--wm-internal-shape-extra-small);--mdc-shape-small: var(--wm-internal-shape-small);--mdc-shape-medium: var(--wm-internal-shape-medium);--mdc-shape-large: var(--wm-internal-shape-large);--mdc-icon-font: var(--wm-internal-icon-font)}.mdc-text-field--outlined,.mdc-select--outlined,.mdc-select--outlined .mdc-select__anchor{border-radius:var(--wm-internal-shape-small)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:color-mix(in srgb,var(--wm-internal-base02) 60%,transparent)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:color-mix(in srgb,var(--wm-internal-base02) 87%,transparent)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:color-mix(in srgb,var(--wm-internal-base02) 54%,transparent)}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:color-mix(in srgb,var(--wm-internal-base02) 87%,transparent)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:color-mix(in srgb,var(--wm-internal-base02) 54%,transparent)}.mdc-menu .mdc-deprecated-list{color:color-mix(in srgb,var(--wm-internal-base02) 87%,transparent)}.oscd-icons,.material-icons,.material-icons-outlined,.material-symbols-outlined,.mdc-text-field__icon,.mdc-select__icon{font-family:var(--wm-internal-icon-font);font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased}a{color:var(--wm-internal-blue);text-decoration:none}a:hover{text-decoration:underline}a:visited{color:var(--wm-internal-secondary)}label{display:block}button{height:32px;opacity:1;border:none;border-radius:var(--wm-internal-shape-extra-small);gap:6px;padding:0 8px;cursor:pointer}button:disabled{opacity:.5;cursor:not-allowed}h1,.wm-typo-h1{font-family:var(--wm-internal-text-font),system-ui,sans-serif;font-size:20px;font-weight:500;line-height:24px;letter-spacing:normal;font-style:normal}h2,.wm-typo-h2{font-family:var(--wm-internal-text-font),system-ui,sans-serif;font-size:16px;font-weight:500;line-height:22px;letter-spacing:normal;font-style:normal}h3,.wm-typo-h3{font-family:var(--wm-internal-text-font),system-ui,sans-serif;font-size:18px;font-weight:500;line-height:24px;letter-spacing:normal;font-style:normal}.wm-typo-body{font-family:var(--wm-internal-text-font),system-ui,sans-serif;font-size:14px;font-weight:400;line-height:22px;letter-spacing:normal;font-style:normal}.wm-typo-16-regular{font-family:var(--wm-internal-text-font),system-ui,sans-serif;font-size:16px;font-weight:400;line-height:22px;letter-spacing:normal;font-style:normal}.wm-typo-16-bold{font-family:var(--wm-internal-text-font),system-ui,sans-serif;font-size:16px;font-weight:500;line-height:22px;letter-spacing:normal;font-style:normal}.wm-typo-14-bold{font-family:var(--wm-internal-text-font),system-ui,sans-serif;font-size:14px;font-weight:500;line-height:20px;letter-spacing:normal;font-style:normal}.wm-typo-caption{font-family:var(--wm-internal-text-font),system-ui,sans-serif;font-size:12px;font-weight:400;line-height:16px;letter-spacing:normal;font-style:normal}.wm-typo-label,.wm-typo-tag{font-family:var(--wm-internal-text-font),system-ui,sans-serif;font-size:12px;font-weight:500;line-height:16px;letter-spacing:normal;font-style:normal}button,.wm-typo-button{font-family:var(--wm-internal-text-font),system-ui,sans-serif;font-size:14px;font-weight:500;line-height:20px;letter-spacing:normal;font-style:normal}.wm-font-oscd{font-family:var(--wm-internal-text-font),system-ui,sans-serif}*{box-sizing:border-box}:root,:host{min-height:0;height:100%}.plugin-shell{height:100%;display:flex;flex-direction:column;padding:28px;color:var(--wm-internal-base03);background:linear-gradient(120deg,color-mix(in srgb,var(--wm-internal-primary) 10%,transparent),transparent 38%),var(--wm-internal-base3)}.hero{display:flex;align-items:flex-start;justify-content:space-between;gap:24px;margin-bottom:24px}.eyebrow{margin:0 0 5px;color:var(--wm-internal-primary);font-size:.7rem;font-weight:800;letter-spacing:.16em}h1,h2,p{margin-top:0}h1{margin-bottom:7px;font-size:clamp(1.75rem,3vw,2.5rem);line-height:1;letter-spacing:-.04em}.intro{max-width:660px;margin-bottom:0;color:var(--wm-internal-base01);font-size:.95rem}.toolbar{display:flex;align-items:center;gap:12px;padding:13px 16px;border:1px solid var(--wm-internal-base2);border-radius:10px 10px 0 0;background:var(--wm-internal-base3)}.toolbar label{font-size:.75rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase}select{min-width:210px;padding:8px 34px 8px 11px;border:1px solid var(--wm-internal-base0);border-radius:5px;color:var(--wm-internal-base03);background:var(--wm-internal-base3);font:inherit;font-weight:700}select:focus-visible,input:focus-visible,button:focus-visible{outline:3px solid color-mix(in srgb,var(--wm-internal-primary) 25%,transparent);outline-offset:2px}.ied-meta,.count{color:var(--wm-internal-base01)}.count{margin-left:auto;font-size:.78rem;font-variant-numeric:tabular-nums}.mapping-grid{flex:1;display:grid;grid-template-columns:minmax(0,1fr) 150px minmax(0,1fr);align-items:stretch;min-height:500px}.panel{min-width:0;border:1px solid var(--wm-internal-base2);border-top:0;background:var(--wm-internal-base3);display:flex;flex-direction:column;min-height:0}.panel:first-child{border-radius:0 0 0 10px}.panel:last-child{border-radius:0 0 10px}.panel-heading{display:flex;align-items:center;justify-content:space-between;padding:17px 18px;border-bottom:1px solid var(--wm-internal-base2)}.panel-heading>div{display:flex;align-items:center;gap:10px}.panel-heading h2{margin:0;font-size:1rem}.panel-count{min-width:28px;padding:4px 8px;border-radius:999px;color:var(--wm-internal-primary);background:color-mix(in srgb,var(--wm-internal-primary) 12%,transparent);font-size:.7rem;font-weight:800;text-align:center}.table-wrap{overflow:auto}table{width:100%;border-collapse:collapse;font-size:.78rem}th{position:sticky;z-index:1;top:0;padding:10px 9px;color:var(--wm-internal-base01);background:var(--wm-internal-base3);font-size:.67rem;letter-spacing:.045em;text-align:left;text-transform:uppercase}td{max-width:220px;padding:11px 9px;border-top:1px solid var(--wm-internal-base2);vertical-align:top}tbody tr{cursor:pointer;transition:background .12s ease}tbody tr:hover,tbody tr.selected,tbody tr:focus-visible{background:color-mix(in srgb,var(--wm-internal-primary) 8%,transparent)}tbody tr:focus-visible{outline:2px solid var(--wm-internal-primary);outline-offset:-2px}tbody tr.selected td:first-child{box-shadow:inset 3px 0 var(--wm-internal-primary)}.select-column{width:35px;text-align:center}input[type=radio]{accent-color:var(--wm-internal-primary)}.source-path,.linked-badge,.do-list{display:block}.source-path,.do-list{overflow:hidden;color:var(--wm-internal-base01);text-overflow:ellipsis;white-space:nowrap}.linked-badge{margin-top:5px;color:var(--wm-internal-primary);font-size:.68rem;font-weight:800}.service-badge,code{padding:3px 6px;border-radius:4px;color:var(--wm-internal-base02);background:var(--wm-internal-base2);font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:.7rem}.link-action{display:grid;align-content:center;gap:10px;place-items:center;border-bottom:1px solid var(--wm-internal-base2);background:var(--wm-internal-base2)}.link-action button{display:inline-flex;align-items:center;justify-content:center;gap:8px;width:128px;min-height:42px;padding:10px 12px;border:0;border-radius:8px;color:var(--wm-internal-base3);background:var(--wm-internal-primary);box-shadow:0 8px 18px color-mix(in srgb,var(--wm-internal-primary) 28%,transparent);cursor:pointer}.link-action button span{font-size:.72rem;font-weight:800}.link-action button svg{width:17px;height:17px;flex:0 0 auto;fill:currentColor}.link-action button:disabled{color:var(--wm-internal-base00);background:var(--wm-internal-base2);box-shadow:none;cursor:not-allowed}.link-action .disconnect-button{min-height:42px;color:var(--wm-internal-base02);border:1px solid var(--wm-internal-base1);background:var(--wm-internal-base3);box-shadow:none}.link-action .disconnect-button:not(:disabled):hover{color:color-mix(in srgb,var(--wm-internal-error) 52%,var(--wm-internal-base03));border-color:color-mix(in srgb,var(--wm-internal-error) 53%,var(--wm-internal-base0));background:color-mix(in srgb,var(--wm-internal-error) 8%,var(--wm-internal-base3))}.link-action .disconnect-button:disabled{color:color-mix(in srgb,var(--wm-internal-base00) 43%,var(--wm-internal-base0));border-color:transparent;background:var(--wm-internal-base2)}.status-bar{display:flex;align-items:center;gap:8px;margin-top:14px;color:var(--wm-internal-base01);font-size:.76rem}.status-dot{width:7px;height:7px;border-radius:50%;background:var(--wm-internal-primary);box-shadow:0 0 0 4px color-mix(in srgb,var(--wm-internal-primary) 14%,transparent)}.link-count{margin-left:auto;font-weight:800}.empty-state{display:grid;min-height:420px;padding:48px;place-items:center;align-content:center;border:1px dashed var(--wm-internal-base1);border-radius:10px;text-align:center}.empty-state h2{margin:16px 0 6px}.empty-state p{color:var(--wm-internal-base01)}.empty-icon{display:grid;width:62px;height:62px;border-radius:50%;color:var(--wm-internal-primary);background:color-mix(in srgb,var(--wm-internal-primary) 12%,transparent);font-size:.75rem;font-weight:900;place-items:center}.table-empty{padding:40px 16px;color:var(--wm-internal-base00);text-align:center}.sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}@media (max-width: 1050px){.mapping-grid{grid-template-columns:1fr}.panel,.panel:first-child,.panel:last-child{border:1px solid var(--wm-internal-base2);border-radius:8px}.link-action{min-height:80px;border:0;background:transparent}.link-action button{width:auto;min-height:42px;padding:10px 18px}}@media (max-width: 680px){.plugin-shell{padding:16px}.hero,.toolbar{align-items:stretch;flex-direction:column}.count,.link-count{margin-left:0}select{width:100%}.status-bar{align-items:flex-start;flex-wrap:wrap}}\n";
function Fl() {
  const e = document.createElement("style");
  return e.id = `${Tr.name}-v${Tr.version}-style`, e.textContent = Pl, e;
}
export {
  Hl as default
};
