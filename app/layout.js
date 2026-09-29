import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Oasis Lodge | Coastal accommodation in Margate, KZN South Coast",
  description:
    "Oasis Lodge at Lawrence Rocks, Margate. Air-conditioned rooms, self-catering units and family suites with a pool, braai areas, free Wi-Fi, secure parking, events and conferencing, and the Oasis Rooftop Car Wash.",
  icons: {
    icon: "data:image/png;base64,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",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05668D",
};

const css = `
:root{
  --teal:#00A896;--sea:#028090;--deep:#05668D;--abyss:#03344A;--night:#021F2D;
  --ink:#0E2F3F;--muted:#4F6B78;
  --sand:#F4EBDD;--sand-deep:#E6D3B5;--shell:#FBF7F1;--foam:#F3F9F8;
  --sun:#FFC857;--coral:#EE8F6B;
  --line:rgba(5,102,141,.13);
  --shadow:0 24px 48px -28px rgba(3,52,74,.45);
  --font:var(--font-jakarta),"Plus Jakarta Sans",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;scroll-padding-top:96px;-webkit-text-size-adjust:100%}
body{font-family:var(--font);color:var(--ink);background:var(--foam);line-height:1.65;-webkit-font-smoothing:antialiased;overflow-x:hidden}
svg{display:block;max-width:100%}
svg text{font-family:var(--font)}
a{color:inherit;text-decoration:none}
button{font:inherit;cursor:pointer;border:0;background:none;color:inherit}
:focus-visible{outline:3px solid var(--sun);outline-offset:3px;border-radius:10px}
.wrap{width:min(1180px,100% - 40px);margin-inline:auto}
.skip{position:absolute;left:-9999px;top:10px;z-index:100;padding:10px 16px;border-radius:10px;background:#fff;font-weight:700}
.skip:focus{left:10px}

/* scroll-driven progress line (CSS scroll timeline where supported) */
.progress{position:fixed;top:0;left:0;right:0;height:3px;z-index:80;background:linear-gradient(90deg,var(--teal),var(--sun));transform-origin:0 50%;transform:scaleX(0);pointer-events:none}
@supports (animation-timeline: scroll()){
  .progress{animation:grow linear both;animation-timeline:scroll(root)}
}
@keyframes grow{to{transform:scaleX(1)}}

/* buttons */
.btn{position:relative;overflow:hidden;isolation:isolate;display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:15px 24px;border-radius:999px;font-weight:700;font-size:.97rem;line-height:1;white-space:nowrap;transition:transform .25s,box-shadow .25s,background .25s}
.btn:hover{transform:translateY(-2px)}
.btn:active{transform:translateY(0)}
.btn-primary{background:linear-gradient(135deg,var(--teal),var(--deep));color:#fff;box-shadow:0 14px 28px -14px rgba(2,128,144,.9)}
.btn-primary::after{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(110deg,transparent 30%,rgba(255,255,255,.45) 50%,transparent 70%);transform:translateX(-130%);animation:shimmer 5s ease-in-out infinite}
@keyframes shimmer{0%,62%{transform:translateX(-130%)}100%{transform:translateX(130%)}}
.btn-ghost{background:rgba(255,255,255,.75);color:var(--deep);border:1px solid var(--line)}
.btn-light{background:#fff;color:var(--deep)}
.btn-sun{background:var(--sun);color:var(--abyss)}
.btn-glass{background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.22)}
.ripple{position:absolute;border-radius:50%;transform:scale(0);background:rgba(255,255,255,.5);animation:ripple .65s ease-out forwards;pointer-events:none}
.btn-ghost .ripple,.btn-light .ripple{background:rgba(0,168,150,.25)}
@keyframes ripple{to{transform:scale(3.2);opacity:0}}

/* nav */
.nav{position:fixed;left:0;right:0;top:0;z-index:60;padding:14px 0;pointer-events:none}
.nav .wrap{pointer-events:auto}
.nav-inner{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:9px 10px 9px 14px;border-radius:999px;background:rgba(255,255,255,.62);-webkit-backdrop-filter:blur(18px) saturate(1.5);backdrop-filter:blur(18px) saturate(1.5);border:1px solid rgba(255,255,255,.75);box-shadow:0 14px 34px -22px rgba(3,52,74,.55);transition:background .3s}
.nav.scrolled .nav-inner{background:rgba(255,255,255,.82)}
.brand{display:flex;align-items:center;gap:10px;font-weight:800;font-size:1.1rem;letter-spacing:-.02em;color:var(--abyss)}
.nav-links{display:flex;gap:2px;list-style:none}
.nav-links a{display:block;padding:9px 14px;border-radius:999px;font-weight:600;font-size:.93rem;color:var(--muted);transition:background .2s,color .2s}
.nav-links a:hover,.nav-links a[aria-current="true"]{background:rgba(0,168,150,.12);color:var(--deep)}
.nav-cta{display:flex;align-items:center;gap:8px}
.nav-cta .btn{padding:12px 20px}
.menu-btn{display:none;width:44px;height:44px;border-radius:50%;align-items:center;justify-content:center;background:rgba(5,102,141,.08);color:var(--deep)}

/* hero */
.hero{position:relative;overflow:hidden;padding:clamp(128px,15vw,168px) 0 clamp(150px,15vw,200px);background:linear-gradient(180deg,#E3F5F2 0%,#F1F9F7 55%,#F8F1E6 100%)}
.ambient{position:absolute;inset:0;overflow:hidden;pointer-events:none}
.blob{position:absolute;border-radius:50%;filter:blur(50px);will-change:transform}
.b1{width:540px;height:540px;background:radial-gradient(circle,rgba(0,168,150,.75),transparent 68%);top:-180px;left:-140px;animation:drift1 22s ease-in-out infinite alternate}
.b2{width:440px;height:440px;background:radial-gradient(circle,rgba(255,200,87,.7),transparent 68%);top:30px;right:-90px;animation:drift2 26s ease-in-out infinite alternate}
.b3{width:600px;height:600px;background:radial-gradient(circle,rgba(2,128,144,.45),transparent 68%);bottom:-300px;left:28%;animation:drift3 30s ease-in-out infinite alternate}
.b4{width:280px;height:280px;background:radial-gradient(circle,rgba(238,143,107,.4),transparent 68%);top:48%;left:46%;animation:drift1 24s ease-in-out infinite alternate-reverse}
@keyframes drift1{to{transform:translate(120px,80px) scale(1.15)}}
@keyframes drift2{to{transform:translate(-150px,120px) scale(.9)}}
@keyframes drift3{to{transform:translate(-110px,-70px) scale(1.1)}}
.mesh{position:absolute;inset:0;background-image:radial-gradient(rgba(5,102,141,.14) 1px,transparent 1.2px);background-size:26px 26px;-webkit-mask-image:linear-gradient(180deg,#000,transparent 75%);mask-image:linear-gradient(180deg,#000,transparent 75%)}
.hero-grid{position:relative;z-index:2;display:grid;grid-template-columns:1.12fr .88fr;gap:clamp(36px,6vw,84px);align-items:center}
.hero-where{display:inline-flex;align-items:center;gap:8px;padding:8px 16px 8px 10px;border-radius:999px;background:rgba(255,255,255,.72);border:1px solid rgba(255,255,255,.9);color:var(--sea);font-weight:600;font-size:.9rem;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}
.hero h1{margin-top:22px;font-size:clamp(2.8rem,6.6vw,5.4rem);line-height:.98;letter-spacing:-.045em;font-weight:800;max-width:11ch;background:linear-gradient(120deg,var(--abyss) 20%,var(--sea) 100%);-webkit-background-clip:text;background-clip:text;color:transparent;padding-bottom:.06em}
.hero-sub{margin-top:22px;font-size:clamp(1.05rem,1.5vw,1.18rem);color:var(--muted);max-width:35rem}
.hero-actions{margin-top:32px;display:flex;flex-wrap:wrap;gap:12px}
.quick{margin-top:34px;display:flex;flex-wrap:wrap;gap:12px}
.quick a{display:flex;align-items:center;gap:12px;padding:10px 18px 10px 10px;border-radius:18px;background:rgba(255,255,255,.72);border:1px solid rgba(255,255,255,.95);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 12px 30px -24px rgba(3,52,74,.6);transition:transform .25s}
.quick a:hover{transform:translateY(-2px)}
.qi{flex:none;width:40px;height:40px;border-radius:12px;display:grid;place-items:center;background:linear-gradient(135deg,var(--teal),var(--sea));color:#fff}
.qi.wa{background:linear-gradient(135deg,#2BB673,#128C7E)}
.quick small{display:block;font-size:.76rem;color:var(--muted);font-weight:600;line-height:1.3}
.quick strong{font-size:1rem;color:var(--abyss);line-height:1.3}
.rise{animation:rise 1s cubic-bezier(.2,.7,.2,1) both}
.d1{animation-delay:.08s}.d2{animation-delay:.18s}.d3{animation-delay:.3s}.d4{animation-delay:.42s}.d5{animation-delay:.55s}
@keyframes rise{from{opacity:0;transform:translateY(26px)}}

.postcard-wrap{position:relative}
.postcard{background:#fff;padding:12px 12px 6px;border-radius:28px;box-shadow:0 44px 80px -40px rgba(3,52,74,.6);transform:rotate(2.5deg);transition:transform .7s cubic-bezier(.2,.7,.2,1)}
.postcard:hover{transform:rotate(0deg)}
.postcard svg{width:100%;height:auto;border-radius:18px}
.postcard figcaption{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:12px 8px 8px;font-size:.88rem;color:var(--muted)}
.postcard figcaption strong{display:block;color:var(--abyss);font-size:.95rem}
.stamp{flex:none;width:46px;height:54px;border:2px dashed var(--sand-deep);border-radius:6px;display:grid;place-items:center}
.float-chip{position:absolute;left:-30px;bottom:92px;display:flex;align-items:center;gap:10px;padding:12px 16px;border-radius:16px;background:rgba(255,255,255,.88);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);box-shadow:var(--shadow);font-weight:700;font-size:.88rem;color:var(--abyss);animation:bob 6s ease-in-out infinite}
.float-chip span{width:34px;height:34px;border-radius:10px;display:grid;place-items:center;background:rgba(0,168,150,.12);color:var(--sea)}
@keyframes bob{50%{transform:translateY(-9px)}}
.pc-glow{transform-box:fill-box;transform-origin:center;animation:glow 5s ease-in-out infinite}
@keyframes glow{50%{transform:scale(1.12);opacity:.8}}
.pc-waves{animation:pcw 7s linear infinite}
.pc-waves.slow{animation-duration:11s}
@keyframes pcw{to{transform:translateX(-120px)}}
.pc-clouds{animation:clouds 18s ease-in-out infinite alternate}
@keyframes clouds{to{transform:translateX(36px)}}
.pc-palm{transform-box:view-box;transform-origin:92px 520px;animation:sway 7s ease-in-out infinite}
@keyframes sway{50%{transform:rotate(1.6deg)}}

.hero-waves{position:absolute;left:0;right:0;bottom:-1px;height:130px;z-index:1;overflow:hidden;pointer-events:none}
.hero-waves svg{position:absolute;left:0;bottom:0;width:200%;height:100%}
.wave-a{opacity:.25;animation:wave 22s linear infinite}
.wave-b{opacity:.45;animation:wave 14s linear infinite reverse}
.wave-c{animation:wave 30s linear infinite}
@keyframes wave{to{transform:translateX(-50%)}}

/* sections */
.section{position:relative;padding:clamp(76px,10vw,128px) 0}
.section-head{max-width:640px;margin-bottom:clamp(36px,5vw,56px)}
.section-head h2{font-size:clamp(2rem,4.2vw,3.1rem);line-height:1.08;letter-spacing:-.035em;font-weight:800;color:var(--abyss)}
.section-head p{margin-top:14px;color:var(--muted);font-size:1.08rem}
.js .reveal{opacity:0;transform:translateY(30px);transition:opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)}
.js .reveal.in{opacity:1;transform:none}

/* amenities */
.amen{background:linear-gradient(180deg,var(--shell) 0%,var(--sand) 100%)}
.amen-grid{display:grid;grid-template-columns:1.15fr 1fr;gap:22px}
.pool{position:relative;overflow:hidden;min-height:440px;padding:32px;border-radius:30px;display:flex;flex-direction:column;justify-content:space-between;color:#fff;background:linear-gradient(160deg,#00A896 0%,#028090 52%,#05668D 100%);isolation:isolate}
.pool::before{content:"";position:absolute;width:420px;height:420px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.35),transparent 65%);top:-120px;right:-80px;z-index:-1;animation:drift2 18s ease-in-out infinite alternate}
.pool-water{position:absolute;inset:0;z-index:-1;opacity:.4}
.pool-water svg{width:100%;height:100%}
.pool-badge{width:62px;height:62px;border-radius:20px;background:rgba(255,255,255,.18);display:grid;place-items:center;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}
.pool h3{font-size:clamp(1.7rem,3vw,2.3rem);letter-spacing:-.03em;line-height:1.08}
.pool p{margin-top:10px;max-width:30rem;color:rgba(255,255,255,.9)}
.amen-list{display:grid;gap:22px}
.amen-item{display:flex;gap:18px;align-items:flex-start;padding:26px;border-radius:22px;background:#fff;border:1px solid var(--line)}
.ai{flex:none;width:52px;height:52px;border-radius:16px;display:grid;place-items:center;color:#fff;background:linear-gradient(135deg,var(--teal),var(--sea))}
.ai.warm{background:linear-gradient(135deg,#F4B266,var(--coral))}
.ai.deep{background:linear-gradient(135deg,var(--deep),var(--abyss))}
.amen-item h3{font-size:1.12rem;letter-spacing:-.01em;color:var(--abyss)}
.amen-item p{color:var(--muted);margin-top:4px;font-size:.96rem}
.carwash{position:relative;overflow:hidden;margin-top:22px;display:grid;grid-template-columns:auto 1fr auto;gap:24px;align-items:center;padding:30px 34px;border-radius:30px;background:var(--abyss);color:#fff}
.carwash > *:not(.bubbles){position:relative;z-index:1}
.carwash .ai{width:66px;height:66px;border-radius:20px;background:rgba(255,255,255,.1)}
.carwash h3{font-size:1.45rem;letter-spacing:-.02em}
.carwash p{color:rgba(255,255,255,.78);margin-top:4px;max-width:42rem}
.bubbles{position:absolute;inset:0;pointer-events:none;overflow:hidden}
.bubbles i{position:absolute;bottom:-24px;border-radius:50%;border:1.5px solid rgba(255,255,255,.35);background:radial-gradient(circle at 30% 30%,rgba(255,255,255,.35),transparent 60%);animation:bubble linear infinite}
@keyframes bubble{to{transform:translateY(-240px) translateX(12px);opacity:0}}

/* accommodations */
.accom{background:var(--foam)}
.rooms{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.room{display:flex;flex-direction:column;background:#fff;border-radius:26px;overflow:hidden;border:1px solid var(--line);transition:transform .35s,box-shadow .35s}
.room:hover{transform:translateY(-5px);box-shadow:var(--shadow)}
.room-art{position:relative;height:176px;display:grid;place-items:center;color:#fff;overflow:hidden}
.room-art.a{background:linear-gradient(135deg,#00A896,#028090)}
.room-art.b{background:linear-gradient(135deg,#028090,#05668D)}
.room-art.c{background:linear-gradient(135deg,#05668D,#03344A)}
.room-art::before{content:"";position:absolute;width:140px;height:140px;border-radius:50%;background:radial-gradient(circle,rgba(255,200,87,.55),transparent 65%);top:-40px;right:-30px}
.room-ico{position:relative;width:76px;height:76px;border-radius:24px;display:grid;place-items:center;background:rgba(255,255,255,.18);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}
.room-wave{position:absolute;left:0;right:0;bottom:-1px;width:100%;height:30px}
.room-body{display:flex;flex-direction:column;flex:1;padding:22px 24px 26px}
.room h3{font-size:1.3rem;letter-spacing:-.02em;color:var(--abyss)}
.room p{margin-top:8px;color:var(--muted)}
.tags{margin:16px 0 22px;display:flex;flex-wrap:wrap;gap:8px;list-style:none}
.tags li{font-size:.8rem;font-weight:600;padding:6px 12px;border-radius:999px;background:var(--foam);color:var(--sea)}
.room-link{margin-top:auto;display:inline-flex;align-items:center;gap:8px;font-weight:700;color:var(--deep)}
.room-link:hover{color:var(--teal)}
.comforts{margin-top:24px;padding:22px 28px;border-radius:24px;background:#fff;border:1px solid var(--line);display:flex;flex-wrap:wrap;align-items:center;gap:14px 30px}
.comforts h3{font-size:1rem;font-weight:800;color:var(--abyss);margin-right:8px}
.comfort{display:flex;align-items:center;gap:10px;font-weight:600;font-size:.95rem}
.comfort span{width:38px;height:38px;border-radius:12px;display:grid;place-items:center;background:rgba(0,168,150,.1);color:var(--sea)}

/* events */
.events{background:var(--shell)}
.events-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:clamp(36px,6vw,84px);align-items:start}
.events-copy{position:sticky;top:120px}
.events-copy h2{font-size:clamp(2rem,4.2vw,3.1rem);line-height:1.08;letter-spacing:-.035em;font-weight:800;color:var(--abyss)}
.events-copy p{color:var(--muted);font-size:1.08rem;margin-top:14px}
.events-copy .row{margin-top:28px;display:flex;flex-wrap:wrap;gap:12px}
.event-list{list-style:none;display:grid;gap:16px}
.event{display:grid;grid-template-columns:auto 1fr;gap:20px;padding:26px 28px;border-radius:22px;background:#fff;border:1px solid var(--line);transition:border-color .3s,transform .3s}
.event:hover{border-color:rgba(0,168,150,.5);transform:translateX(6px)}
.ei{width:56px;height:56px;border-radius:50%;display:grid;place-items:center;background:var(--sand);color:var(--deep)}
.event h3{font-size:1.18rem;letter-spacing:-.01em;color:var(--abyss)}
.event p{color:var(--muted);margin-top:4px}

/* contact */
.contact{background:var(--foam)}
.contact-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:22px;align-items:stretch}
.contact-card{display:flex;flex-direction:column;gap:22px;padding:34px;border-radius:30px;background:#fff;border:1px solid var(--line)}
.c-row{display:flex;gap:16px;align-items:flex-start}
.c-row .ai{width:48px;height:48px;border-radius:14px}
.c-row small{display:block;color:var(--muted);font-size:.82rem;font-weight:600}
.c-row strong,.c-row a{font-size:1.06rem;font-weight:700;color:var(--abyss);line-height:1.45}
.c-row a:hover{color:var(--sea)}
.c-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:auto;padding-top:6px}
.map{position:relative;min-height:400px;border-radius:30px;overflow:hidden;background:#F2E7D5;border:1px solid var(--line)}
.map svg{position:absolute;inset:0;width:100%;height:100%}
.map-note{position:absolute;left:16px;top:16px;padding:8px 14px;border-radius:999px;background:rgba(255,255,255,.88);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);font-size:.82rem;font-weight:700;color:var(--sea)}
.map .btn{position:absolute;right:16px;bottom:16px}
.pulse{transform-box:fill-box;transform-origin:center;animation:pulse 2.4s ease-out infinite}
@keyframes pulse{0%{transform:scale(.4);opacity:.75}100%{transform:scale(2.6);opacity:0}}

/* game */
.play{background:radial-gradient(ellipse at 50% 0%,#05668D 0%,#03344A 55%,#021F2D 100%);color:#fff;overflow:hidden}
.play .section-head h2{color:#fff}
.play .section-head p{color:rgba(255,255,255,.72)}
.play-grid{display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:28px;align-items:start}
.arcade{padding:18px;border-radius:34px;background:linear-gradient(160deg,#0A5A78,#022A3C);border:1px solid rgba(255,255,255,.12);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 40px 80px -40px rgba(0,0,0,.7)}
.hud{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;max-width:456px;margin:0 auto 14px}
.hud div{padding:10px 8px;border-radius:14px;background:rgba(0,0,0,.24);text-align:center}
.hud small{display:block;font-size:.72rem;font-weight:600;color:rgba(255,255,255,.6)}
.hud strong{display:block;font-size:1.2rem;line-height:1.3;color:var(--sun);font-variant-numeric:tabular-nums}
.lives{display:flex;justify-content:center;gap:5px;height:1.56rem;align-items:center}
.lives i{width:11px;height:11px;border-radius:50%;background:var(--sun);box-shadow:0 0 8px rgba(255,200,87,.7)}
.lives i.off{background:rgba(255,255,255,.15);box-shadow:none}
.screen{position:relative;max-width:456px;margin-inline:auto;border-radius:18px;overflow:hidden;background:var(--night);box-shadow:inset 0 0 0 2px rgba(0,168,150,.35)}
.screen canvas{display:block;width:100%;height:auto;aspect-ratio:19/21;touch-action:none}
.overlay{position:absolute;inset:0;display:grid;place-items:center;padding:24px;text-align:center;background:rgba(2,31,45,.72);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);transition:opacity .3s}
.overlay.hide{opacity:0;pointer-events:none}
.overlay h3{font-size:1.9rem;letter-spacing:-.03em}
.overlay p{margin:6px auto 18px;max-width:26ch;color:rgba(255,255,255,.82)}
.controls{display:flex;justify-content:center;gap:10px;margin-top:14px}
.dpad{display:none;grid-template-columns:repeat(3,62px);grid-template-rows:repeat(2,62px);gap:8px;justify-content:center;margin-top:16px}
.dpad button{display:grid;place-items:center;border-radius:18px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);color:#fff;touch-action:manipulation;-webkit-user-select:none;user-select:none}
.dpad button:active{background:rgba(0,168,150,.55)}
.dpad .up{grid-column:2;grid-row:1}.dpad .left{grid-column:1;grid-row:2}.dpad .down{grid-column:2;grid-row:2}.dpad .right{grid-column:3;grid-row:2}
.how{padding:26px;border-radius:26px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1)}
.how h3{font-size:1.1rem}
.how ul{list-style:none;display:grid;gap:16px;margin-top:16px}
.how li{display:flex;gap:12px;color:rgba(255,255,255,.8);font-size:.93rem;line-height:1.55}
.how li b{flex:none;width:36px;height:36px;border-radius:11px;display:grid;place-items:center;background:rgba(255,255,255,.1);font-size:1.05rem}
kbd{font-family:inherit;font-size:.8rem;font-weight:700;padding:1px 7px;border-radius:6px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.2)}

/* footer */
.footer{background:var(--night);color:rgba(255,255,255,.72);padding:56px 0 32px;font-size:.95rem}
.footer-grid{display:flex;flex-wrap:wrap;justify-content:space-between;gap:32px}
.footer .brand{color:#fff}
.footer p{margin-top:12px;max-width:30ch}
.footer ul{list-style:none;display:grid;gap:8px}
.footer a:hover{color:#fff}
.footer-bottom{margin-top:40px;padding-top:22px;border-top:1px solid rgba(255,255,255,.1);display:flex;flex-wrap:wrap;justify-content:space-between;gap:10px;font-size:.84rem;color:rgba(255,255,255,.5)}


/* logos */
.badge{display:block;border-radius:50%;flex:none;-webkit-user-select:none;user-select:none}
.brand .badge{filter:drop-shadow(0 4px 8px rgba(3,52,74,.25))}
.footer-logo{display:inline-block}
.footer-logo img{display:block;width:170px;height:auto}
.footer-grid{align-items:flex-start}

/* responsive */
@media (max-width:980px){
  .menu-btn{display:inline-flex}
  .nav-links{position:absolute;top:calc(100% + 10px);left:0;right:0;flex-direction:column;padding:10px;border-radius:24px;background:rgba(255,255,255,.95);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,.9);box-shadow:var(--shadow);opacity:0;transform:translateY(-8px);pointer-events:none;transition:opacity .25s,transform .25s}
  .nav-links.open{opacity:1;transform:none;pointer-events:auto}
  .nav-links a{padding:14px 16px;font-size:1rem}
  .hero-grid,.amen-grid,.events-grid,.contact-grid,.play-grid{grid-template-columns:1fr}
  .postcard-wrap{max-width:460px;margin-inline:auto;width:100%}
  .float-chip{left:-8px}
  .rooms{grid-template-columns:1fr 1fr}
  .events-copy{position:static}
}
@media (max-width:900px),(pointer:coarse){.dpad{display:grid}}
@media (max-width:640px){
  .wrap{width:min(1180px,100% - 28px)}
  .rooms{grid-template-columns:1fr}
  .carwash{grid-template-columns:1fr;padding:28px}
  .pool{min-height:360px;padding:26px}
  .contact-card{padding:26px}
  .hud strong{font-size:1rem}
  .arcade{padding:12px;border-radius:26px}
  .nav-cta .btn{padding:11px 16px;font-size:.9rem}
  .brand{font-size:1rem}
}
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important}
  html{scroll-behavior:auto}
  .js .reveal{opacity:1;transform:none}
}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en-ZA" className={jakarta.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <style dangerouslySetInnerHTML={{ __html: css }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
