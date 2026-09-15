import React, { useState } from 'react';
import { Sparkles, RefreshCw, Mic } from 'lucide-react';

export const CreativeIntelligenceCollage: React.FC = () => {
  const [autoSync, setAutoSync] = useState(true);
  const [progress, setProgress] = useState(78);

  return (
    <section className="relative w-full max-w-[1728px] mx-auto py-12 md:py-24 px-4 overflow-hidden select-none">
      
      {/* --- DESKTOP / TABLET COLLAGE (MD and up) --- */}
      <div className="hidden md:flex relative min-h-[920px] lg:min-h-[1280px] w-full items-center justify-center">
        
        {/* Central Typography Anchor */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0">
          <h2 className="text-[72px] sm:text-[96px] md:text-[120px] lg:text-[144px] font-bold text-[#1B1B1B] tracking-[-0.04em] leading-[0.92] text-center">
            Creative<br />Intelligence
          </h2>
        </div>

        {/* --- FLOATING ARTIFACTS --- */}

        {/* 1. Top-Left: Card with Image and Glass Progress Overlay */}
        <div
          className="absolute z-10 rounded-[28px] md:rounded-[36px] overflow-hidden bg-white/20 backdrop-blur-2xl border border-white/50 shadow-2xl transition-transform hover:-translate-y-1 duration-300"
          style={{
            top: '4%',
            left: '6%',
            width: 'clamp(240px, 26vw, 360px)',
            height: 'clamp(190px, 20vw, 270px)'
          }}
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGxwLNMP2KVAWtuqvWXiFZkBm5YgSXjM45PkkRPvB3NsuAPX4Nse6nAySmOSPxXiaWvlTk0fB0Pagx0EkNf1L8x3CFyxgAWpQbdP2z4ZXhaiVorAeLCKBcI2qvs9oG9HqdMdiJrUYvBgL1Dr8nKNzygffqFMIlgWyshucf41s65I_hV3kCGtjFYShml4zOn9O6MuvVW54WVcjP7bBLEAYguBfutmc0Yq73HP9-yBiY6b98be0hC6KYAZFesHH3FkL4Gx0Yks2fyrpu"
            alt="Color abstract asset"
            className="w-full h-full object-cover"
          />
          {/* Glass Overlay Bar */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-3 sm:p-4 shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] sm:text-[11px] font-bold text-[#1B1B1B] uppercase tracking-wider">
                Processing
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#1B1B1B]">
                {progress}%
              </span>
            </div>
            <div
              className="w-full bg-black/15 rounded-full h-1.5 cursor-pointer"
              onClick={() => setProgress((p) => (p >= 95 ? 65 : p + 8))}
              title="Click to advance processing"
            >
              <div
                className="bg-[#181818] h-1.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* 2. Top-Right: Tall Card with Sparkle Badge */}
        <div
          className="absolute z-10 rounded-[28px] md:rounded-[36px] overflow-hidden bg-white/20 backdrop-blur-2xl border border-white/50 shadow-2xl transition-transform hover:-translate-y-1 duration-300"
          style={{
            top: '6%',
            right: '8%',
            width: 'clamp(210px, 22vw, 300px)',
            height: 'clamp(260px, 26vw, 340px)'
          }}
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRI6ZfedfqJ42Kz8fkZTlqC5CbQ5Q_0kVkLxIu7Xh8-ABjTl2K4v_yJEBQE1wi3AZMYD9IMvFxFOJyc86piFVAfQ0g6nyc1fRoYl7wB1_YDB3zlrCqOGtEow28qlTRV6LL9s1-rRPvAYojJgQhjJ9ERQ7Jf-IhHeg0bAcA4QWd3YKyDnVxSjTGeJ--ir7xqCghMtZPJ5OjvBwWSTiw7xPHbFrwOa_f5RTQGV6WOEWxuC-xwV7Ayb1q0kBzYF_oQHCxP3Dn3PL-aewa"
            alt="Teal emerald gradient asset"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/50 backdrop-blur-md border border-white/60 flex items-center justify-center shadow-md">
            <Sparkles className="w-4 h-4 text-[#1B1B1B]" />
          </div>
        </div>

        {/* 3. Mid-Left: Floating Glass UI with Auto-Sync Switch */}
        <div
          className="absolute z-20 rounded-[24px] overflow-hidden bg-white/55 backdrop-blur-3xl border border-white/70 shadow-[0_16px_40px_rgba(0,0,0,0.08)] flex flex-col p-4 sm:p-5 transition-transform hover:scale-[1.02] duration-300"
          style={{
            top: '38%',
            left: '4%',
            width: 'clamp(210px, 19vw, 270px)'
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-[12px] font-semibold text-[#1B1B1B]">Auto-Sync</span>
            <button
              onClick={() => setAutoSync(!autoSync)}
              className={`w-10 h-6 rounded-full transition-colors duration-200 relative cursor-pointer ${
                autoSync ? 'bg-[#181818]' : 'bg-[#D9D7D0]'
              }`}
            >
              <div
                className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                  autoSync ? 'right-1' : 'left-1'
                }`}
              />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF416C] to-[#FF4B2B] flex items-center justify-center shadow-md shrink-0">
              <RefreshCw className={`w-4 h-4 text-white ${autoSync ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }} />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-[#1B1B1B]">Creative Cloud</span>
              <span className="text-[12px] text-[#7E7A73]">
                {autoSync ? 'Connected' : 'Paused'}
              </span>
            </div>
          </div>
        </div>

        {/* 4. Mid-Right: Image with "Content Guidelines" Pill */}
        <div
          className="absolute z-10 rounded-[28px] md:rounded-[36px] overflow-hidden bg-white/20 backdrop-blur-2xl border border-white/50 shadow-2xl transition-transform hover:-translate-y-1 duration-300"
          style={{
            top: '44%',
            right: '5%',
            width: 'clamp(230px, 24vw, 340px)',
            height: 'clamp(180px, 18vw, 240px)'
          }}
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRd7pAyBrUx31zx6klyDiCWD04EiIaiDfNYNdGO8HozSTYH3bTc4IhWoBbOh4CpW4jAmMk2H_ecdJwzZL71ta4NvHIyMqapKo2BK36h0hn674xlIS0FoLhl6jQwDTwu_Idk9ZLj6MN8k5s-VrWMSox9J5YNpnlpqVlAVnzCXtAeDkwyvNWzXtGXt76wUk85CfXUmdE9Vi6RxqxkyBORzc1__OdpVEqiYNrMD1dKFJIU7gC874F--k_Kf5C1_yMSnhoytWkS9XWPwsm"
            alt="Content guidelines asset"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-white/60 backdrop-blur-xl px-3.5 py-1.5 rounded-full border border-white/70 shadow-md flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
            <span className="text-[10px] font-bold text-[#1B1B1B] uppercase tracking-wider">
              Content Guidelines
            </span>
          </div>
        </div>

        {/* 5. Bottom-Left: Large Image with "Brand Voice" */}
        <div
          className="absolute z-10 rounded-[28px] md:rounded-[36px] overflow-hidden bg-white/20 backdrop-blur-2xl border border-white/50 shadow-2xl transition-transform hover:-translate-y-1 duration-300"
          style={{
            top: '68%',
            left: '11%',
            width: 'clamp(250px, 27vw, 390px)',
            height: 'clamp(190px, 20vw, 270px)'
          }}
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJHfj4_xGj0yuLj8FKt6X72bCIskF-kJl3LA3T3_1-Qfv6mfKwCLXqKuU41nv1J3p_M1VLaKyUwt7jymaxu9IqrMBeOZwhDvKB2NclDw7qctzcy_CAPxlD6DRpxJ5uMf6G4nCRrvnMp59n2r2y9HaRxoemHYv9Vm4p_TMdRUwKitMvWXTR13rOY5umPLmIVd6L5RMbQMm1ZFC8-WMQdUrzWugK5J4Eh0Ph9XOn2e4G84KG4Az4KXAh3-n2Y52A1ycQ8Ow3OGXHosuz"
            alt="Brand voice visual asset"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white/60 backdrop-blur-xl px-3.5 py-1.5 rounded-full border border-white/70 shadow-md flex items-center gap-2">
            <Mic className="w-3.5 h-3.5 text-[#1B1B1B]" />
            <span className="text-[10px] font-bold text-[#1B1B1B] uppercase tracking-wider">
              Brand Voice
            </span>
          </div>
        </div>

        {/* 6. Bottom-Right: Wide Image */}
        <div
          className="absolute z-10 rounded-[28px] md:rounded-[36px] overflow-hidden bg-white/20 backdrop-blur-2xl border border-white/50 shadow-2xl transition-transform hover:-translate-y-1 duration-300"
          style={{
            top: '72%',
            right: '12%',
            width: 'clamp(240px, 26vw, 380px)',
            height: 'clamp(180px, 18vw, 250px)'
          }}
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbheL8VQt2V3qxmEXBukkZcNptuzepd42MEKEg9-qDVlpepWCcPZIR5s9MzcSFv4FH-6IuiF9uWjjxSWg2IQ-A_CdbSU7IbdGFdbRPcFqz1DyoSSA1w-kOaLoqdLsFYVQuBBDENJ0aa2OHfgIFFJ1Y7GClriULppWYz7d7fGuv-GPC_YjW-mQfwtuP1rbtxhAb-IzFfX6o7nj41jI_XdcVGj6on-6bwuQl_W5NMa4g3MvEW_sVCeo4Tgf1W3QkrnYFQKfSyl3ScLps"
            alt="Teal geometric flow asset"
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        {/* 7. Floating Comment Profile Pill */}
        <div
          className="absolute z-30 bg-white/75 backdrop-blur-3xl border border-white/80 rounded-full flex items-center gap-3.5 p-2 pr-5 shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-transform hover:scale-105 duration-300"
          style={{
            top: '84%',
            left: '42%'
          }}
        >
          <div className="w-10 h-10 rounded-full bg-[#E9E8E4] overflow-hidden shadow-sm border border-white/80 shrink-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxUZpAK7kBAK1H5Anlz-i_nh19XyaGUt1hLDC6ZASnuBK2vRcwFDP46vx7HodMWCGvWJVA3aKLfp00pDRGNPsH0LVYvOGBSQ1KJIx2wTCxFcEJMNlnv9DHJKT0wyVelxRunXJN3d41Z2MPDK4poxQF_iybQaYL4ebVjC52RWnq9U6Y-VA7k5seZ7Z4c1n3nq7ply6CwSNm8-OH_B6wae1-h-Zmn2y3jh9urDyal2zhahuy408MHHCcPTmA9TNKUOA7WEsjuEy1iMvC"
              alt="Alex Morgan"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-[#1B1B1B] leading-none mb-0.5">Alex Morgan</span>
            <span className="text-[13px] text-[#1B1B1B]/85 font-medium leading-none">Game changing asset!</span>
          </div>
        </div>

      </div>

      {/* --- MOBILE COLLAGE (Below MD) --- */}
      <div className="flex flex-col items-center gap-8 md:hidden">
        {/* Title */}
        <h2 className="text-[44px] font-bold text-[#1B1B1B] tracking-[-0.04em] leading-[0.95] text-center my-4">
          Creative<br />Intelligence
        </h2>

        {/* Auto-Sync & Progress Controls */}
        <div className="w-full max-w-sm flex flex-col gap-4">
          <div className="rounded-[24px] bg-white/70 backdrop-blur-2xl border border-white/80 shadow-lg p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[12px] font-semibold text-[#1B1B1B]">Auto-Sync</span>
              <button
                onClick={() => setAutoSync(!autoSync)}
                className={`w-10 h-6 rounded-full transition-colors duration-200 relative cursor-pointer ${
                  autoSync ? 'bg-[#181818]' : 'bg-[#D9D7D0]'
                }`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                    autoSync ? 'right-1' : 'left-1'
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FF416C] to-[#FF4B2B] flex items-center justify-center shadow-sm shrink-0">
                <RefreshCw className={`w-4 h-4 text-white ${autoSync ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1B1B1B]">Creative Cloud</p>
                <p className="text-[11px] text-[#7E7A73]">{autoSync ? 'Connected' : 'Paused'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Artifacts Stack */}
        <div className="w-full max-w-sm space-y-5">
          {/* Card 1 */}
          <div className="rounded-[28px] overflow-hidden bg-white/40 border border-white/60 shadow-xl relative h-[220px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGxwLNMP2KVAWtuqvWXiFZkBm5YgSXjM45PkkRPvB3NsuAPX4Nse6nAySmOSPxXiaWvlTk0fB0Pagx0EkNf1L8x3CFyxgAWpQbdP2z4ZXhaiVorAeLCKBcI2qvs9oG9HqdMdiJrUYvBgL1Dr8nKNzygffqFMIlgWyshucf41s65I_hV3kCGtjFYShml4zOn9O6MuvVW54WVcjP7bBLEAYguBfutmc0Yq73HP9-yBiY6b98be0hC6KYAZFesHH3FkL4Gx0Yks2fyrpu"
              alt="Asset 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 right-3 bg-white/60 backdrop-blur-md rounded-xl p-3 border border-white/60">
              <div className="flex justify-between text-[11px] font-bold mb-1">
                <span>Processing</span>
                <span>{progress}%</span>
              </div>
              <div
                className="w-full bg-black/10 rounded-full h-1.5 cursor-pointer"
                onClick={() => setProgress((p) => (p >= 95 ? 65 : p + 8))}
              >
                <div className="bg-black h-1.5 rounded-full" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-[28px] overflow-hidden bg-white/40 border border-white/60 shadow-xl relative h-[200px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRd7pAyBrUx31zx6klyDiCWD04EiIaiDfNYNdGO8HozSTYH3bTc4IhWoBbOh4CpW4jAmMk2H_ecdJwzZL71ta4NvHIyMqapKo2BK36h0hn674xlIS0FoLhl6jQwDTwu_Idk9ZLj6MN8k5s-VrWMSox9J5YNpnlpqVlAVnzCXtAeDkwyvNWzXtGXt76wUk85CfXUmdE9Vi6RxqxkyBORzc1__OdpVEqiYNrMD1dKFJIU7gC874F--k_Kf5C1_yMSnhoytWkS9XWPwsm"
              alt="Asset 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-white/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/60 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Content Guidelines</span>
            </div>
          </div>

          {/* Feedback comment */}
          <div className="bg-white/80 backdrop-blur-xl border border-white/90 rounded-2xl p-3.5 flex items-center gap-3 shadow-md">
            <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-black/10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxUZpAK7kBAK1H5Anlz-i_nh19XyaGUt1hLDC6ZASnuBK2vRcwFDP46vx7HodMWCGvWJVA3aKLfp00pDRGNPsH0LVYvOGBSQ1KJIx2wTCxFcEJMNlnv9DHJKT0wyVelxRunXJN3d41Z2MPDK4poxQF_iybQaYL4ebVjC52RWnq9U6Y-VA7k5seZ7Z4c1n3nq7ply6CwSNm8-OH_B6wae1-h-Zmn2y3jh9urDyal2zhahuy408MHHCcPTmA9TNKUOA7WEsjuEy1iMvC"
                alt="Alex Morgan"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[11px] font-bold text-[#1B1B1B]">Alex Morgan</p>
              <p className="text-[12px] text-[#1B1B1B]/80 font-medium">Game changing asset!</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
