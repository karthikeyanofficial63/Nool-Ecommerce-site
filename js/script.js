/* ==========================================================================
   Nool — Handloom cotton storefront
   App script: product data, rendering, cart, search, checkout
   ========================================================================== */

const IMG = {
  towel: "assets/images/towel.jpg",
  lungi: "assets/images/lungi.jpg",
  saree: "assets/images/saree.jpg",
  kerchief: "assets/images/kerchief.jpg",
  bed: "assets/images/bed.jpg",
  bag: "assets/images/bag.jpg",
  runner: "assets/images/runner.jpg",
  roll: "assets/images/roll.jpg"
};
document.getElementById('spotmain').src = IMG.saree;
document.getElementById('spotback').src = IMG.towel;
const P = [{
    id: 1,
    n: 'Handloom bath towel',
    c: 'Home',
    p: 450,
    rating: 4.6,
    revs: 212,
    d: 'Thick cotton that softens with every wash.',
    s: ['#28336c', '#c88a1c'],
    bg: '#e3e6f3',
    t: 'towel',
    k: ['towel', 'bath', 'cotton', 'handloom', 'gift']
  },
  {
    id: 2,
    n: 'Checked lungi',
    c: 'Wear',
    p: 390,
    rating: 4.4,
    revs: 96,
    d: 'Lightweight 4-metre lungi in a classic check.',
    s: ['#a2301f', '#28336c'],
    bg: '#f2ddd6',
    t: 'lungi',
    k: ['lungi', 'checked', 'cotton', 'men', 'dhoti']
  },
  {
    id: 3,
    n: 'Kanchi cotton saree',
    c: 'Wear',
    p: 2400,
    was: 2800,
    rating: 4.8,
    revs: 154,
    d: 'Contrast border, soft body, 6.3 metres.',
    s: ['#3c6b52', '#c88a1c'],
    bg: '#dfe9e2',
    t: 'saree',
    k: ['saree', 'sari', 'kanchi', 'cotton', 'wedding', 'festive', 'women']
  },
  {
    id: 4,
    n: 'Cotton kerchief set (3)',
    c: 'Accessories',
    p: 299,
    rating: 4.3,
    revs: 58,
    d: 'Pack of three in indigo, madder and turmeric.',
    s: ['#c88a1c', '#28336c'],
    bg: '#f3e6cb',
    t: 'kerchief',
    k: ['kerchief', 'handkerchief', 'pocket square', 'cotton', 'gift', 'set']
  },
  {
    id: 5,
    n: 'Double bedspread',
    c: 'Home',
    p: 1650,
    was: 1950,
    rating: 4.7,
    revs: 131,
    d: 'Woven bedspread, fits queen beds. Colourfast dye.',
    s: ['#28336c', '#a2301f'],
    bg: '#e3e6f3',
    t: 'bed',
    k: ['bedspread', 'bedsheet', 'bed cover', 'cotton', 'home', 'queen']
  },
  {
    id: 6,
    n: 'Market tote bag',
    c: 'Accessories',
    p: 520,
    was: 650,
    rating: 4.5,
    revs: 87,
    d: 'Sturdy woven tote with an inner pocket.',
    s: ['#a2301f', '#c88a1c'],
    bg: '#f2ddd6',
    t: 'bag',
    k: ['bag', 'tote', 'market bag', 'shopping bag', 'cotton', 'eco']
  },
  {
    id: 7,
    n: 'Table runner',
    c: 'Home',
    p: 680,
    rating: 4.4,
    revs: 45,
    d: '180 cm runner with a hand-knotted fringe.',
    s: ['#3c6b52', '#c88a1c'],
    bg: '#dfe9e2',
    t: 'runner',
    k: ['runner', 'table', 'dining', 'home decor', 'cotton']
  },
  {
    id: 8,
    n: 'Shirt fabric (2.5 m)',
    c: 'Wear',
    p: 990,
    rating: 4.6,
    revs: 73,
    d: 'Breathable khadi-weight cotton for tailoring.',
    s: ['#28336c', '#c88a1c'],
    bg: '#e3e6f3',
    t: 'roll',
    k: ['fabric', 'shirt', 'cloth', 'khadi', 'cotton', 'tailoring', 'material']
  }
];
const ICON = {
  towel: (a, b, u) => `<svg viewBox="0 0 100 100"><defs><pattern id="h${u}" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse"><rect width="8" height="8" fill="${a}"/><line x1="0" y1="0" x2="0" y2="8" stroke="${b}" stroke-width="1.4" opacity=".35"/></pattern></defs><rect x="14" y="30" width="72" height="52" rx="4" fill="url(#h${u})"/><rect x="14" y="30" width="72" height="10" fill="${b}"/><rect x="14" y="66" width="72" height="6" fill="#fff" opacity=".45"/><rect x="20" y="18" width="60" height="10" rx="3" fill="${a}" opacity=".85"/><rect x="26" y="8" width="48" height="9" rx="3" fill="${a}" opacity=".6"/></svg>`,
  lungi: (a, b) => `<svg viewBox="0 0 100 100"><rect x="16" y="10" width="68" height="80" fill="${a}"/>${[22,34,46,58,70,82].map(y=>`<rect x="16" y="${y}" width="68" height="4" fill="${b}"/>`).join('')}<rect x="16" y="10" width="68" height="80" fill="none" stroke="#fff" stroke-opacity=".2" stroke-width="2"/></svg>`,
  saree: (a, b) => `<svg viewBox="0 0 100 100"><path d="M30 8 Q20 50 34 92 L52 92 Q40 50 48 8 Z" fill="${a}"/><path d="M52 8 Q66 50 84 82 L72 90 Q52 52 44 10 Z" fill="${a}" opacity=".85"/><rect x="30" y="8" width="18" height="6" fill="${b}"/><rect x="27" y="84" width="10" height="8" fill="${b}"/><rect x="66" y="72" width="10" height="14" fill="${b}" transform="rotate(28 71 79)"/></svg>`,
  kerchief: (a, b) => `<svg viewBox="0 0 100 100"><rect x="18" y="34" width="46" height="46" rx="3" fill="${a}" transform="rotate(-8 41 57)"/><rect x="30" y="26" width="46" height="46" rx="3" fill="${b}" transform="rotate(6 53 49)"/><rect x="40" y="40" width="46" height="46" rx="3" fill="${a}" opacity=".55"/></svg>`,
  bed: (a, b) => `<svg viewBox="0 0 100 100"><rect x="14" y="16" width="8" height="60" rx="2" fill="${a}"/><rect x="14" y="38" width="72" height="38" rx="6" fill="${a}"/>${[46,54,62,70].map(y=>`<rect x="14" y="${y}" width="72" height="3" fill="${b}"/>`).join('')}<rect x="20" y="30" width="30" height="14" rx="4" fill="#fff" opacity=".85"/></svg>`,
  bag: (a, b) => `<svg viewBox="0 0 100 100"><path d="M32 30 Q32 12 50 12 Q68 12 68 30" fill="none" stroke="${a}" stroke-width="6"/><rect x="18" y="30" width="64" height="56" rx="6" fill="${a}"/><rect x="18" y="30" width="64" height="12" fill="${b}"/></svg>`,
  runner: (a, b) => `<svg viewBox="0 0 100 100"><rect x="8" y="42" width="84" height="18" fill="${a}"/><rect x="8" y="48" width="84" height="4" fill="${b}"/>${[8,14,20,26].map(x=>`<rect x="${x}" y="60" width="2" height="8" fill="${a}"/><rect x="${x+66}" y="60" width="2" height="8" fill="${a}"/>`).join('')}</svg>`,
  roll: (a, b) => `<svg viewBox="0 0 100 100"><ellipse cx="30" cy="50" rx="14" ry="34" fill="${b}"/><rect x="30" y="16" width="46" height="68" fill="${a}"/><ellipse cx="76" cy="50" rx="10" ry="34" fill="${a}" opacity=".7"/></svg>`
};
const st = x => ICON[x.t](x.s[0], x.s[1], x.id);
const photo = x => IMG[x.t] ? `<img src="${IMG[x.t]}" alt="${x.n}" loading="lazy" style="width:100%;height:100%;object-fit:cover;border-radius:inherit">` : st(x);
const stars = r => {
  const f = Math.round(r);
  return '★'.repeat(f) + '☆'.repeat(5 - f)
};
const INFO = {
  looms: {
    t: 'Our looms',
    b: '<p>We work with about 40 family-run looms around Karur and Erode. Each piece is woven to order, not pulled from a warehouse — during festival season that can add a couple of extra days before dispatch.</p>'
  },
  journal: {
    t: 'Journal',
    b: '<p>Notes on weaves, natural dyes and the people behind them. We are just getting this started — the first post is on its way.</p>'
  },
  contact: {
    t: 'Contact',
    b: '<p>Write to us at <b>hello@noolstore.example</b> or call <b>+91 98765 43210</b>, Monday to Saturday, 10am to 6pm IST.</p>'
  },
  shipping: {
    t: 'Shipping',
    b: '<p>We ship across India. Orders are dispatched within 2 working days and usually arrive in 4–6 days. Delivery is free above Rs 999; a flat Rs 60 applies below that.</p>'
  },
  returns: {
    t: 'Returns',
    b: '<p>Not right for you? Send it back within 7 days of delivery, unused and in its original packaging, for a full refund. Contact us with your order number to start a return.</p>'
  },
  care: {
    t: 'Care guide',
    b: '<p>Wash separately in cold water for the first two washes, since natural dyes can bleed slightly. Line dry in shade to protect the colour, and avoid bleach or harsh detergents.</p>'
  }
};
const openInfo = k => {
  const i = INFO[k];
  if (!i) return;
  $('infotitle').textContent = i.t;
  $('infobody').innerHTML = i.b;
  document.body.classList.add('infoopen')
};
const closeInfo = () => document.body.classList.remove('infoopen');
const $ = id => document.getElementById(id),
  rs = n => 'Rs ' + n.toLocaleString('en-IN');
const matchQ = (x, words) => {
  if (!words.length) return true;
  const hay = (x.n + ' ' + x.d + ' ' + x.c + ' ' + (x.k || []).join(' ')).toLowerCase();
  return words.every(w => hay.includes(w));
};
let cart = {},
  cat = 'All',
  sort = 'f',
  step = 'cart';
try {
  cart = JSON.parse(localStorage.getItem('nool-cart-v2') || '{}')
} catch (e) {}
const save = () => {
  try {
    localStorage.setItem('nool-cart-v2', JSON.stringify(cart))
  } catch (e) {}
};
const count = () => Object.values(cart).reduce((a, b) => a + b, 0);
const sub = () => P.reduce((t, x) => t + (cart[x.id] || 0) * x.p, 0);

function card(x) {
  return `<article class="item"><div class="sw" style="background:${x.bg}">${x.was?`<span class="saletag">-${Math.round((1-x.p/x.was)*100)}%</span>`:''}${photo(x)}</div>
 <span class="stars">${stars(x.rating)}</span><h3>${x.n}</h3><p class="revs">${x.rating} (${x.revs} reviews)</p>
 <div class="priceline"><span class="price">${rs(x.p)}</span>${x.was?`<span class="was">${rs(x.was)}</span>`:''}</div>
 <button class="add" data-a="${x.id}">Add to bag</button></article>`;
}

function shop() {
  $('cats').innerHTML = ['All', 'Home', 'Wear', 'Accessories'].map(c => `<button class="tab" aria-pressed="${c===cat}" data-c="${c}">${c}</button>`).join('');
  const q = $('q').value.trim().toLowerCase();
  const words = q.split(/\s+/).filter(Boolean);
  let l = P.filter(x => (cat === 'All' || x.c === cat) && matchQ(x, words));
  if (sort === 'l') l.sort((a, b) => a.p - b.p);
  if (sort === 'h') l.sort((a, b) => b.p - a.p);
  $('count').textContent = l.length + ' products';
  $('grid').innerHTML = l.length ? l.map(card).join('') : '<p class="empty">No products match your search. Try a different word or clear the category.</p>';
  $('n').textContent = count();
}

function panel() {
  const ids = P.filter(x => cart[x.id]);
  let h = '';
  if (step === 'done') {
    h = `<h2>Order placed <button class="ghost" data-x>Close</button></h2><p><b id="who"></b>, your order <b id="oid"></b> is confirmed. Pay ${rs(window.paid)} in cash when it arrives in 4–6 days.</p><button class="btn" data-x>Keep browsing</button>`
  } else if (step === 'pay') {
    h = `<h2>Delivery details <button class="ghost" data-b>Back</button></h2><form id="f"><label>Full name<input name="n" required autocomplete="name"></label><label>Mobile number<input name="p" required inputmode="numeric" pattern="[0-9]{10}" title="10 digit mobile number" autocomplete="tel"></label><label>Address with pincode<textarea name="a" rows="3" required minlength="12" autocomplete="street-address"></textarea></label><p style="color:var(--mute);font-size:.9rem">Payment: cash on delivery</p><div class="total"><span>Total</span><span>${rs(sub()+(sub()>=999?0:60))}</span></div><button class="btn">Place order</button></form>`
  } else if (!ids.length) {
    h = `<h2>Your bag <button class="ghost" data-x>Close</button></h2><p class="empty" style="padding:0">Your bag is empty. Add a towel or lungi to get started.</p>`
  } else {
    h = `<h2>Your bag <button class="ghost" data-x>Close</button></h2>` + ids.map(x => `<div class="linerow"><i style="background:${x.bg}">${photo(x)}</i><div><b>${x.n}</b><br><span style="color:var(--mute);font-size:.9rem">${rs(x.p)}</span></div><div class="qty"><button data-m="${x.id}" aria-label="Remove one ${x.n}">−</button>${cart[x.id]}<button data-a="${x.id}" aria-label="Add one ${x.n}">+</button></div></div>`).join('') + `<p style="color:var(--mute);font-size:.9rem;margin-top:.8rem">Delivery: ${sub()>=999?'free':'Rs 60 (free above Rs 999)'}</p><div class="total"><span>Subtotal</span><span>${rs(sub())}</span></div><button class="btn" data-go>Checkout</button>`
  }
  $('panel').innerHTML = h;
}

function dropdown() {
  const raw = $('q').value.trim(),
    drop = $('qdrop');
  if (!raw) {
    drop.classList.remove('show');
    drop.innerHTML = '';
    return;
  }
  const words = raw.toLowerCase().split(/\s+/).filter(Boolean);
  const m = P.filter(x => matchQ(x, words)).slice(0, 6);
  drop.innerHTML = m.length ? m.map(x => `<div class="qitem" data-go="${x.id}" role="option"><i style="background:${x.bg}">${photo(x)}</i><b>${x.n}</b></div>`).join('') : '<div class="qempty">No products match your search.</div>';
  drop.classList.add('show');
}
const show = o => {
  document.body.classList.toggle('open', o);
  if (o) panel()
};
document.addEventListener('click', e => {
  const t = e.target.closest('button');
  if (!t) return;
  if (t.dataset.c) {
    cat = t.dataset.c;
    shop();
    document.getElementById('shop').scrollIntoView({
      behavior: 'smooth'
    });
    document.querySelector('header').classList.remove('navopen')
  }
  if (t.id === 'menutoggle') {
    const h = document.querySelector('header'),
      open = !h.classList.contains('navopen');
    h.classList.toggle('navopen', open);
    t.setAttribute('aria-expanded', open)
  }
  if (t.dataset.a) {
    cart[t.dataset.a] = (cart[t.dataset.a] || 0) + 1;
    save();
    shop();
    if (document.body.classList.contains('open')) panel();
    else {
      const l = $('open');
      l.style.background = 'var(--accent)';
      setTimeout(() => l.style.background = '', 500)
    }
  }
  if (t.dataset.m) {
    const i = t.dataset.m;
    cart[i]--;
    if (cart[i] < 1) delete cart[i];
    save();
    shop();
    panel()
  }
  if (t.dataset.go) {
    step = 'pay';
    panel()
  }
  if (t.dataset.b !== undefined) {
    step = 'cart';
    panel()
  }
  if (t.dataset.x !== undefined) {
    step = 'cart';
    show(false)
  }
  if (t.id === 'open') {
    step = 'cart';
    show(true)
  }
  if (t.dataset.info) {
    openInfo(t.dataset.info)
  }
  if (t.id === 'infoclose') {
    closeInfo()
  }
});
$('infoveil').onclick = closeInfo;
$('veil').onclick = () => show(false);
$('qdrop').addEventListener('click', e => {
  const item = e.target.closest('.qitem');
  if (!item) return;
  $('qdrop').classList.remove('show');
  cat = 'All';
  shop();
  document.getElementById('shop').scrollIntoView({
    behavior: 'smooth'
  });
});
document.addEventListener('click', e => {
  if (!e.target.closest('.hsearch')) $('qdrop').classList.remove('show')
});
document.querySelectorAll('.mobnav a').forEach(a => a.onclick = () => document.querySelector('header').classList.remove('navopen'));
document.querySelectorAll('.hnav a, .mobnav a').forEach(a => a.addEventListener('click', e => {
  const id = a.getAttribute('href').slice(1),
    target = document.getElementById(id);
  if (target) {
    e.preventDefault();
    target.scrollIntoView({
      behavior: 'smooth'
    });
    document.querySelector('header').classList.remove('navopen')
  }
}));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    show(false);
    closeInfo();
    $('qdrop').classList.remove('show')
  }
});
$('q').oninput = () => {
  shop();
  dropdown()
};
$('q').addEventListener('focus', () => {
  if ($('q').value.trim()) dropdown()
});
$('q').addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    $('qdrop').classList.remove('show');
    shop();
    document.getElementById('shop').scrollIntoView({
      behavior: 'smooth'
    });
    $('q').blur()
  }
});
$('sort').onchange = e => {
  sort = e.target.value;
  shop()
};
document.addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  if (e.target.id === 'nform') {
    e.target.reset();
    alert('Subscribed! Watch your inbox for the 10% code.');
    return;
  }
  window.paid = sub() + (sub() >= 999 ? 0 : 60);
  cart = {};
  save();
  step = 'done';
  shop();
  panel();
  $('who').textContent = f.get('n');
  $('oid').textContent = '#N' + Date.now().toString().slice(-6)
});
shop();