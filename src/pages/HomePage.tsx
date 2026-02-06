import { useState } from "react";
import imgAbstract from "figma:asset/4cb7f599cd41ab91655b2777ae51b43d2c9065da.png";

/* ─── Reusable Components ─── */

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative backdrop-blur-[6px] bg-[rgba(10,18,13,0.6)] rounded-[16px] ${className}`}>
      <div aria-hidden className="absolute inset-0 border border-[rgba(74,222,128,0.15)] rounded-[16px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.5)] pointer-events-none" />
      <div className="relative">{children}</div>
    </div>
  );
}

function Badge({ children, variant = "green" }: { children: React.ReactNode; variant?: "green" | "orange" }) {
  const colors = variant === "green"
    ? "bg-[rgba(16,185,129,0.1)] border-[rgba(16,185,129,0.2)] text-[#34d399]"
    : "bg-[rgba(249,115,22,0.1)] border-[rgba(249,115,22,0.2)] text-[#fb923c]";
  return (
    <span className={`inline-flex px-[9px] py-[2px] rounded-[4px] border text-[12px] font-['IBM_Plex_Sans',sans-serif] ${colors}`}>
      {children}
    </span>
  );
}

/* ─── Left Column ─── */

function BrandingHero() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[60px] leading-[60px] text-white tracking-[-1.2px]">
        <span className="block">Stable Yield</span>
        <span
          className="block bg-clip-text bg-gradient-to-r from-[#8afda5] to-[#f59e0b]"
          style={{ WebkitTextFillColor: "transparent" }}
        >
          Minted Real.
        </span>
      </h1>
      <div className="text-[#ccd1d8] text-[18px] font-['IBM_Plex_Sans',sans-serif] leading-[29px]">
        <p>
          The first Institutional Stablecoin Powered by{" "}
          <span className="text-white border-b border-[rgba(16,185,129,0.5)] pb-px">Canton Network</span>.
          Mint mUSD seamlessly against
        </p>
        <p>verified assets.</p>
      </div>
    </div>
  );
}

function InfoFeature() {
  return (
    <GlassCard>
      <div className="flex gap-4 items-start p-[25px]">
        <div className="relative w-[40px] h-[40px] rounded-full bg-[rgba(6,78,59,0.5)] flex items-center justify-center shrink-0">
          <div aria-hidden className="absolute inset-0 border border-[rgba(16,185,129,0.2)] rounded-full pointer-events-none" />
          <i className="fas fa-shield-alt text-[#34d399] text-[16px]" />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[18px] text-white tracking-[-0.36px]">
            Audited Security
          </h4>
          <p className="text-[#9ca3af] text-[14px] font-['IBM_Plex_Sans',sans-serif] leading-[20px]">
            Contracts verified by Halborn and Certik. 100%<br />on-chain transparency.
          </p>
        </div>
      </div>
    </GlassCard>
  );
}

function DecorativeImage() {
  return (
    <div className="relative backdrop-blur-[6px] bg-[rgba(10,18,13,0.6)] rounded-[16px] h-[192px] overflow-hidden shadow-[0px_4px_30px_0px_rgba(0,0,0,0.5)]">
      <img
        src={imgAbstract}
        alt=""
        className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020402] to-transparent" />
    </div>
  );
}

function MarketCard() {
  return (
    <GlassCard>
      <div className="p-[25px] flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-[#9ca3af] text-[13px] font-['Inter',sans-serif] uppercase tracking-[-0.28px]">
            System Status
          </span>
          <Badge>OPERATIONAL</Badge>
        </div>

        {/* TVL row */}
        <div className="border-b border-[rgba(255,255,255,0.05)] pb-4 flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-[#6b7280] text-[12px] font-['Inter',sans-serif]">TOTAL VALUE LOCKED</span>
            <span className="text-white text-[24px] font-['Inter',sans-serif] font-bold">$142,893,210</span>
          </div>
          <div className="flex items-center gap-1">
            <i className="fas fa-caret-up text-[#34d399] text-[12px]" />
            <span className="text-[#34d399] text-[14px] font-['IBM_Plex_Sans',sans-serif] font-bold">2.4%</span>
          </div>
        </div>

        {/* APY + Supply row */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-[#6b7280] text-[11px] font-['Inter',sans-serif]">CURRENT APY</span>
            <span
              className="text-[23px] font-['Inter',sans-serif] font-bold bg-clip-text bg-gradient-to-r from-[#fde68a] to-[#f59e0b]"
              style={{ WebkitTextFillColor: "transparent" }}
            >
              8.45%
            </span>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <span className="text-[#6b7280] text-[11px] font-['Inter',sans-serif] text-right">mUSD SUPPLY</span>
            <span className="text-white text-[17px] font-['Inter',sans-serif] font-bold">54.2M</span>
          </div>
        </div>

        {/* Gradient accent */}
        <div className="absolute top-[25px] left-[25px] right-[-23px] h-[40px] bg-gradient-to-b from-transparent via-[rgba(74,222,128,0.2)] to-transparent pointer-events-none" />
      </div>
    </GlassCard>
  );
}

/* ─── Right Column — Mint Interface ─── */

function MintInterface() {
  const [activeTab, setActiveTab] = useState<"mint" | "redeem" | "swap">("mint");

  return (
    <div className="relative backdrop-blur-[6px] bg-[rgba(10,18,13,0.6)] rounded-[24px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 border border-[rgba(74,222,128,0.15)] rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(6,78,59,0.2)] pointer-events-none" />

      {/* Tabs */}
      <div className="bg-[rgba(0,0,0,0.4)] rounded-t-[20px] p-1 flex">
        {(["mint", "redeem", "swap"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 rounded-[12px] text-[16px] font-['IBM_Plex_Sans',sans-serif] font-bold transition-all capitalize ${
              activeTab === tab
                ? "bg-[#34d399] text-[#022c22] shadow-[0px_10px_15px_-3px_rgba(16,185,129,0.2)]"
                : "text-[#9ca3af] hover:text-white"
            }`}
          >
            {tab === "mint" ? "Mint mUSD" : tab === "redeem" ? "Redeem" : "Swap"}
          </button>
        ))}
      </div>

      {/* Form area */}
      <div className="relative p-8 flex flex-col gap-8">
        {/* Background blur effects */}
        <div className="absolute bottom-4 right-[100px] w-[600px] h-[600px] bg-[rgba(2,44,34,0.3)] rounded-full blur-[50px] pointer-events-none" />
        <div className="absolute top-[-16px] left-[-430px] w-[500px] h-[500px] bg-[rgba(20,83,45,0.2)] rounded-full blur-[60px] pointer-events-none" />

        {/* From field */}
        <div className="flex flex-col gap-3 relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-[#9ca3af] text-[14px] font-['IBM_Plex_Sans',sans-serif] font-medium">
              Deposit Asset
            </span>
            <span className="text-[14px]">
              <span className="text-[#9ca3af] font-['IBM_Plex_Sans',sans-serif]">Balance: </span>
              <span className="text-white font-['Inter',sans-serif]">24,500.00 USDC</span>
            </span>
          </div>
          <div className="relative">
            <div className="bg-[#050a07] rounded-[16px] h-[66px] flex items-center px-4">
              <div className="w-[32px] h-[32px] rounded-full bg-[#2775ca] flex items-center justify-center shadow-md mr-3">
                <span className="text-white text-[12px] font-bold">$</span>
              </div>
              <input
                type="text"
                placeholder="0.00"
                className="flex-1 bg-transparent text-[24px] font-['Inter',sans-serif] text-[#4b5563] placeholder-[#4b5563] outline-none"
              />
              <button className="bg-[rgba(6,78,59,0.3)] text-[#34d399] text-[12px] font-['IBM_Plex_Sans',sans-serif] font-bold uppercase tracking-[0.6px] px-3 py-1 rounded-[8px] mr-2">
                Max
              </button>
              <span className="text-[#d1d5db] text-[18px] font-['IBM_Plex_Sans',sans-serif] font-bold">USDC</span>
            </div>
            <div aria-hidden className="absolute inset-0 border border-[rgba(255,255,255,0.1)] rounded-[16px] pointer-events-none" />
          </div>
        </div>

        {/* Arrow divider */}
        <div className="relative flex items-center justify-center z-10">
          <div className="absolute inset-x-0 top-1/2 border-t border-[rgba(255,255,255,0.05)]" />
          <div className="relative bg-[#0a120d] w-[40px] h-[40px] rounded-full flex items-center justify-center border border-[rgba(255,255,255,0.1)]">
            <i className="fas fa-arrow-down text-[#9ca3af] text-[16px]" />
          </div>
        </div>

        {/* To field */}
        <div className="flex flex-col gap-3 relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-[#9ca3af] text-[14px] font-['IBM_Plex_Sans',sans-serif] font-medium">Receive</span>
            <span className="text-[#9ca3af] text-[14px] font-['IBM_Plex_Sans',sans-serif]">1 USDC ≈ 0.9998 mUSD</span>
          </div>
          <div className="relative">
            <div className="bg-[#050a07] rounded-[16px] opacity-90 flex items-center px-4 py-[17px]">
              <div className="w-[32px] h-[32px] rounded-full bg-[#10b981] flex items-center justify-center shadow-md mr-3">
                <span className="text-[#022c22] text-[14px] font-bold">M</span>
              </div>
              <span className="flex-1 text-[#34d399] text-[24px] font-['Inter',sans-serif]">0.00</span>
              <span className="text-white text-[18px] font-['IBM_Plex_Sans',sans-serif] font-bold">mUSD</span>
            </div>
            <div aria-hidden className="absolute inset-0 border border-[rgba(255,255,255,0.1)] rounded-[16px] pointer-events-none" />
          </div>
        </div>

        {/* Transaction details */}
        <GlassCard className="rounded-[12px]">
          <div className="p-[17px] flex flex-col gap-2">
            {[
              { label: "Exchange Rate", value: "1 USDC = 1.00 mUSD", highlight: false },
              { label: "Network Fee", value: "$0.005", highlight: false },
              { label: "Expected Output", value: "0.00 mUSD", highlight: true },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-[#6b7280] text-[14px] font-['IBM_Plex_Sans',sans-serif]">{item.label}</span>
                <span className={`text-[14px] font-['Inter',sans-serif] ${item.highlight ? "text-[#34d399]" : "text-[#d1d5db]"}`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Action button */}
        <button
          className="relative z-10 w-full py-4 rounded-[12px] flex items-center justify-center gap-2 text-[#022c22] text-[18px] font-['IBM_Plex_Sans',sans-serif] font-bold transition-all hover:brightness-110"
          style={{ backgroundImage: "linear-gradient(135deg, #4ade80, #166534)" }}
        >
          Connect Wallet to Mint
          <i className="fas fa-arrow-right text-[#022c22] opacity-70 text-[18px]" />
        </button>
      </div>
    </div>
  );
}

/* ─── Recent Activity ─── */

function RecentActivity() {
  const transactions = [
    { hash: "0x7a...9f2", action: "MINT mUSD", actionVariant: "green" as const, amount: "$45,000.00", time: "2 mins ago" },
    { hash: "0x3c...1b4", action: "REDEEM", actionVariant: "orange" as const, amount: "$1,250.00", time: "15 mins ago" },
    { hash: "0x9d...2e1", action: "MINT mUSD", actionVariant: "green" as const, amount: "$100,000.00", time: "1 hr ago" },
  ];

  return (
    <GlassCard>
      <div className="p-[25px] flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <i className="fas fa-clock text-[#34d399] text-[14px]" />
          <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[18px] text-white tracking-[-0.36px]">
            Recent Activity
          </h3>
        </div>

        {/* Table */}
        <div className="w-full">
          {/* Header */}
          <div className="flex border-b border-[rgba(255,255,255,0.05)] pb-2">
            {["TX HASH", "ACTION", "AMOUNT", "TIME"].map((h, i) => (
              <div key={h} className={`flex-1 text-[#6b7280] text-[11px] font-['Inter',sans-serif] font-bold ${i === 3 ? "text-right" : ""}`}>
                {h}
              </div>
            ))}
          </div>
          {/* Rows */}
          {transactions.map((tx, i) => (
            <div key={i} className="flex items-center py-3 border-b border-[rgba(255,255,255,0.05)] last:border-0">
              <div className="flex-1 text-[#34d399] text-[14px] font-['Inter',sans-serif] opacity-80">{tx.hash}</div>
              <div className="flex-1"><Badge variant={tx.actionVariant}>{tx.action}</Badge></div>
              <div className="flex-1 text-[#d1d5db] text-[14px] font-['Inter',sans-serif]">{tx.amount}</div>
              <div className="flex-1 text-[#6b7280] text-[14px] font-['IBM_Plex_Sans',sans-serif] text-right">{tx.time}</div>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

/* ─── Page Layout ─── */

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-6 items-start">
      {/* Left Column */}
      <div className="flex flex-col gap-6">
        <BrandingHero />
        <InfoFeature />
        <DecorativeImage />
        <MarketCard />
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-6">
        <MintInterface />
        <RecentActivity />
      </div>
    </div>
  );
}
