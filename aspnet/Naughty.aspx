<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Naughty.aspx.vb" Inherits="Naughty" ClientIDMode="Static" %>
<!DOCTYPE html>
<html lang="en">
<head runat="server">
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>The Naughty Show — Token‑Powered Daily Streams</title>
  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    /* Optional: smooth gradient animation */
    @keyframes gradientMove { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
    .glass { backdrop-filter: blur(10px); background: rgba(10, 6, 20, 0.5); border-color: rgba(216, 180, 254, 0.25); }
    .neon-b { box-shadow: 0 0 30px rgba(236, 72, 153, 0.25); }
  </style>
</head>
<body class="bg-[#0b0716] text-gray-200">
  <form id="form1" runat="server">

    <!-- Modal 18+ overlay (server-side Panel) -->
    <asp:Panel ID="AgeModal" runat="server" CssClass="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div class="w-full max-w-md mx-auto p-8 rounded-2xl border border-fuchsia-500/30 glass text-center">
        <h2 class="text-3xl font-extrabold text-pink-400 mb-3">18+ Only</h2>
        <p class="text-pink-200 mb-6">Please confirm you are 18 or older to continue.</p>
        <asp:Button ID="BtnConfirmAge" runat="server" Text="Yes, I'm 18 or over" CssClass="px-6 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-semibold transform transition hover:scale-105"
          OnClick="BtnConfirmAge_Click" UseSubmitBehavior="false" />
      </div>
    </asp:Panel>

    <!-- Hero with background video -->
  <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <!-- Video background -->
      <video id="HeroVideo" runat="server" class="absolute inset-0 w-full h-full object-cover" autoplay muted loop playsinline poster="images/hero-poster.jpg">
        <asp:Literal ID="HeroSources" runat="server"></asp:Literal>
      </video>
      <!-- Dark gradient overlay for readability -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>
      <!-- Animated color wash (subtle) -->
      <div class="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-fuchsia-700/20 to-purple-900/30 bg-[length:300%_300%] animate-[gradientMove_18s_ease_infinite]"></div>

      <div class="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 class="text-4xl md:text-6xl font-extrabold text-pink-300 drop-shadow mb-4">
          The Naughty Show – The First Token‑Powered Daily Stream on PumpFun
        </h1>
        <p class="text-lg md:text-xl text-pink-200">Join the show, fuel the token, grow the community.</p>
        <div class="mt-5 inline-block px-6 py-2 rounded-xl bg-black/50 border border-purple-700 font-mono text-2xl text-pink-400 shadow-inner">SOON</div>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#howto" class="px-6 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 text-white shadow-md transition transform hover:scale-105">Buy Token</a>
          <a href="#community" class="px-6 py-3 rounded-xl border border-pink-500 text-pink-300 hover:bg-pink-500 hover:text-white transition transform hover:scale-105">Join Community</a>
        </div>
      </div>

      <!-- Hero controls overlay -->
      <div class="absolute z-10 bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
        <button type="button" id="btnPrev" class="px-3 py-2 rounded-lg bg-black/50 border border-purple-700 text-pink-200 hover:bg-black/70">Prev</button>
        <button type="button" id="btnNext" class="px-3 py-2 rounded-lg bg-black/50 border border-purple-700 text-pink-200 hover:bg-black/70">Next</button>
        <button type="button" id="btnMute" class="px-3 py-2 rounded-lg bg-black/50 border border-purple-700 text-pink-200 hover:bg-black/70">Unmute</button>
        <button type="button" id="btnAuto" class="px-3 py-2 rounded-lg bg-black/50 border border-purple-700 text-pink-200 hover:bg-black/70">Autoplay: On</button>
      </div>
    </section>

    <!-- Live Statistics -->
    <section id="stats" class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-pink-300 mb-8 text-center">Live Statistics</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="glass neon-b rounded-xl border p-6 text-center">
            <div class="text-sm text-pink-200/80">Price</div>
            <div id="price" class="mt-2 text-xl font-bold text-pink-300">Coming Soon</div>
          </div>
          <div class="glass neon-b rounded-xl border p-6 text-center">
            <div class="text-sm text-pink-200/80">Market Cap</div>
            <div id="marketCap" class="mt-2 text-xl font-bold text-pink-300">Coming Soon</div>
          </div>
          <div class="glass neon-b rounded-xl border p-6 text-center">
            <div class="text-sm text-pink-200/80">Total Liquidity</div>
            <div id="totalLiquidity" class="mt-2 text-xl font-bold text-pink-300">Coming Soon</div>
          </div>
          <div class="glass neon-b rounded-xl border p-6 text-center">
            <div class="text-sm text-pink-200/80">Trading Volume</div>
            <div id="tradingVolume" class="mt-2 text-xl font-bold text-pink-300">Coming Soon</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section id="gallery" class="py-16 px-4 bg-[#0a0518]">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-bold text-pink-300">Gallery</h2>
          <p class="text-pink-200">All media are 18+, SFW only.</p>
        </div>
        <div class="grid gap-6 md:grid-cols-3">
          <asp:Repeater ID="GalleryRepeater" runat="server">
            <ItemTemplate>
              <img src="<%# Container.DataItem %>" class="w-full h-64 object-cover rounded-xl border border-purple-700/60 hover:scale-105 transition transform" alt="Gallery image" />
            </ItemTemplate>
          </asp:Repeater>
        </div>
      </div>
    </section>

    <!-- How to Buy -->
    <section id="howto" class="py-16 px-4 bg-[#100924]">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-pink-300 mb-8">How to Buy $NAUGHTY</h2>
        <div class="grid md:grid-cols-3 gap-6 mb-8">
          <div class="glass neon-b rounded-xl border p-6 text-left">
            <span class="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-sm font-bold mb-3 shadow">1 • Create Wallet</span>
            <h3 class="font-bold text-pink-300 mb-2">Download Phantom</h3>
            <p class="text-pink-200/90">Or any Solana wallet, and back up your seed securely.</p>
          </div>
          <div class="glass neon-b rounded-xl border p-6 text-left">
            <span class="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-sm font-bold mb-3 shadow">2 • Get SOL</span>
            <h3 class="font-bold text-pink-300 mb-2">Fund Your Wallet</h3>
            <p class="text-pink-200/90">Purchase SOL on an exchange and send it to your wallet.</p>
          </div>
          <div class="glass neon-b rounded-xl border p-6 text-left">
            <span class="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-sm font-bold mb-3 shadow">3 • Buy $NAUGHTY</span>
            <h3 class="font-bold text-pink-300 mb-2">Swap SOL → $NAUGHTY</h3>
            <p class="text-pink-200/90">Use PumpFun or a supported DEX to swap safely.</p>
          </div>
        </div>
        <a href="#" class="inline-block px-7 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md transform transition hover:scale-105">Buy $NAUGHTY</a>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="py-16 px-4 bg-[#0a0518]">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-pink-300 mb-6">About the Project</h2>
        <p class="text-pink-200 max-w-2xl mx-auto mb-3">Daily hot‑tub style streams with rotating models and guests.</p>
        <p class="text-pink-200 max-w-2xl mx-auto mb-3">Every show brings visibility and momentum to our token.</p>
        <p class="text-pink-200 max-w-2xl mx-auto mb-8">Fees are reinvested to produce bigger shows and grow community.</p>
        <div class="flex flex-wrap justify-center items-center gap-2 text-sm">
          <span class="px-4 py-2 rounded-full bg-purple-800/60 text-pink-200 border border-pink-500/50">Show</span>
          <span class="text-pink-400">→</span>
          <span class="px-4 py-2 rounded-full bg-purple-800/60 text-pink-200 border border-pink-500/50">Token Launch</span>
          <span class="text-pink-400">→</span>
          <span class="px-4 py-2 rounded-full bg-purple-800/60 text-pink-200 border border-pink-500/50">Community Growth</span>
          <span class="text-pink-400">→</span>
          <span class="px-4 py-2 rounded-full bg-purple-800/60 text-pink-200 border border-pink-500/50">More Shows</span>
        </div>
      </div>
    </section>

    <!-- Roadmap -->
    <section id="roadmap" class="py-16 px-4 bg-[#0d071f]">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-pink-300 mb-10">Roadmap</h2>
        <div class="grid md:grid-cols-4 gap-6">
          <div class="bg-black/40 rounded-xl border border-purple-700/60 p-6 backdrop-blur-md">
            <span class="block text-xl font-bold text-pink-400 mb-2">Day 1</span>
            <p class="text-pink-200/90 text-sm">First jacuzzi stream.</p>
          </div>
          <div class="bg-black/40 rounded-xl border border-purple-700/60 p-6 backdrop-blur-md">
            <span class="block text-xl font-bold text-pink-400 mb-2">Week 1</span>
            <p class="text-pink-200/90 text-sm">Daily shows with rotation of models.</p>
          </div>
          <div class="bg-black/40 rounded-xl border border-purple-700/60 p-6 backdrop-blur-md">
            <span class="block text-xl font-bold text-pink-400 mb-2">Month 1</span>
            <p class="text-pink-200/90 text-sm">Collaborations with other streamers.</p>
          </div>
          <div class="bg-black/40 rounded-xl border border-purple-700/60 p-6 backdrop-blur-md">
            <span class="block text-xl font-bold text-pink-400 mb-2">Phase 2</span>
            <p class="text-pink-200/90 text-sm">Expansion into a curated adult app (SFW previews).</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer id="community" class="py-12 px-4 bg-black border-t border-purple-900/40 text-center">
      <p class="text-pink-200 mb-3">Entertainment only. No explicit adult content.</p>
      <p class="text-pink-200 mb-3">© The Naughty Show 2025. All Rights Reserved.</p>
      <div class="flex justify-center gap-4 text-pink-300 text-sm">
        <a href="#howto" class="hover:text-pink-400">Buy Token</a>
        <span>|</span>
        <a href="#community" class="hover:text-pink-400">Community</a>
      </div>
    </footer>

    <!-- Client-side scripts: hero controls and optional future stats fetching -->
    <script>
      (function(){
        const video = document.getElementById('HeroVideo');
        const btnPrev = document.getElementById('btnPrev');
        const btnNext = document.getElementById('btnNext');
        const btnMute = document.getElementById('btnMute');
        const btnAuto = document.getElementById('btnAuto');

        // Fade helper
        function fadeSwap(setter){
          video.style.transition = 'opacity 400ms ease';
          video.style.opacity = '0';
          setTimeout(()=>{
            setter();
            // reload to apply new source
            video.load();
            video.play().catch(()=>{});
            video.style.opacity = '1';
          }, 400);
        }

        // Extract available hero indices from data attribute if rendered by server
        const availableAttr = video.getAttribute('data-available');
        let available = [];
        if (availableAttr) {
          available = availableAttr.split(',').map(s=>parseInt(s,10)).filter(n=>!Number.isNaN(n)).sort((a,b)=>a-b);
        }
        let current = parseInt(video.getAttribute('data-current')||'-1',10);

        function setHero(i){
          current = i;
          fadeSwap(()=>{
            // set single MP4 source based on convention
            const src = `videos/hero${current}.mp4`;
            // Rebuild sources minimal
            video.innerHTML = `<source src="${src}" type="video/mp4" />`;
          });
        }

        function nextHero(){
          if (!available.length) return;
          const idx = available.indexOf(current);
          const next = available[(idx+1) % available.length];
          setHero(next);
        }
        function prevHero(){
          if (!available.length) return;
          const idx = available.indexOf(current);
          const prev = available[(idx-1+available.length) % available.length];
          setHero(prev);
        }

        let auto = true; let timer = null;
        function startAuto(){
          stopAuto();
          timer = setInterval(nextHero, 15000);
          btnAuto.textContent = 'Autoplay: On';
        }
        function stopAuto(){ if (timer) { clearInterval(timer); timer = null; } btnAuto.textContent = 'Autoplay: Off'; }
        function toggleAuto(){ auto = !auto; if (auto) startAuto(); else stopAuto(); }

        btnNext.addEventListener('click', nextHero);
        btnPrev.addEventListener('click', prevHero);
        btnMute.addEventListener('click', ()=>{
          video.muted = !video.muted;
          btnMute.textContent = video.muted ? 'Unmute' : 'Mute';
        });
        btnAuto.addEventListener('click', toggleAuto);

        // If no server-provided list (e.g., static hosting), try to probe hero1..hero11 quickly
        if (!available.length) {
          const probes = [];
          for (let i=11;i>=1;i--) {
            const url = `videos/hero${i}.mp4`;
            probes.push(fetch(url, { method: 'HEAD' }).then(r=> r.ok ? i : null).catch(()=>null));
          }
          Promise.all(probes).then(list=>{
            available = list.filter(Boolean).sort((a,b)=>a-b);
            if (available.length){
              current = available[available.length-1];
              setHero(current);
              startAuto();
            }
          });
        } else {
          // Server provided
          if (current === -1 && available.length){ current = available[available.length-1]; }
          startAuto();
        }
      })();

      // Placeholder for future stats fetch
      // fetch('https://api.dexscreener.com/latest/dex/pairs/solana/PAIR').then(r=>r.json()).then(data=>{
      //   document.getElementById('price').textContent = data.price ?? '—'
      // })
    </script>
  </form>
</body>
</html>
