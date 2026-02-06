import { useState } from "react";

/* ─── Shared Components ─── */

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative backdrop-blur-[6px] bg-[rgba(10,18,13,0.6)] rounded-[16px] ${className}`}>
      <div aria-hidden className="absolute inset-0 border border-[rgba(74,222,128,0.15)] rounded-[16px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.5)] pointer-events-none" />
      <div className="relative">{children}</div>
    </div>
  );
}

/* ─── Staking Interface ─── */

function StakingCard() {
  const [activeTab, setActiveTab] = useState<"stake" | "unstake">("stake");

  return (
    <GlassCard className="max-w-[560px] w-full mx-auto">
      <div className="p-8 flex flex-col gap-6">
        {/* Tabs */}
        <div className="flex gap-2">
          {(["stake", "unstake"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 rounded-[12px] text-[16px] font-['IBM_Plex_Sans',sans-serif] font-bold transition-all capitalize ${
                activeTab === tab
                  ? "bg-[rgba(255,255,255,0.9)] text-[#020402] shadow-[0px_4px_12px_rgba(0,0,0,0.3)]"
                  : "text-[#9ca3af] hover:text-white"
              }`}
            >
              {tab === "stake" ? "Stake" : "Unstake"}
            </button>
          ))}
        </div>

        {/* Amount input */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-[#6b7280] text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.5px]">
              Amount to Stake
            </span>
            <span className="text-[13px]">
              <span className="text-[#6b7280] font-['IBM_Plex_Sans',sans-serif]">Balance: </span>
              <span className="text-white font-['Inter',sans-serif]">12,450.00 mUSD</span>
              <button className="text-[#34d399] font-['IBM_Plex_Sans',sans-serif] font-bold ml-2 text-[11px] uppercase tracking-[0.5px]">
                Max
              </button>
            </span>
          </div>
          <div className="relative">
            <div className="bg-[#050a07] rounded-[16px] h-[66px] flex items-center px-4">
              <input
                type="text"
                placeholder="0.00"
                className="flex-1 bg-transparent text-[28px] font-['Inter',sans-serif] text-[#4b5563] placeholder-[#4b5563] outline-none"
              />
              <div className="flex items-center gap-2">
                <div className="w-[28px] h-[28px] rounded-full bg-[#10b981] flex items-center justify-center shadow-md">
                  <span className="text-[#022c22] text-[12px] font-bold">M</span>
                </div>
                <span className="text-[#d1d5db] text-[18px] font-['IBM_Plex_Sans',sans-serif] font-bold">mUSD</span>
              </div>
            </div>
            <div aria-hidden className="absolute inset-0 border border-[rgba(255,255,255,0.1)] rounded-[16px] pointer-events-none" />
          </div>
        </div>

        {/* Info boxes */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[rgba(0,0,0,0.3)] rounded-[12px] p-4 border border-[rgba(255,255,255,0.05)] text-center">
            <span className="text-[#6b7280] text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.5px] block mb-1">
              Est. APY
            </span>
            <span className="text-[#34d399] text-[24px] font-['Inter',sans-serif] font-bold">12.4%</span>
          </div>
          <div className="bg-[rgba(0,0,0,0.3)] rounded-[12px] p-4 border border-[rgba(255,255,255,0.05)] text-center">
            <span className="text-[#6b7280] text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.5px] block mb-1">
              Lock Period
            </span>
            <span className="text-white text-[24px] font-['Inter',sans-serif] font-bold">No Lock</span>
          </div>
        </div>

        {/* Confirm button */}
        <button
          className="w-full py-4 rounded-[12px] flex items-center justify-center gap-2 text-[#022c22] text-[18px] font-['IBM_Plex_Sans',sans-serif] font-bold transition-all hover:brightness-110"
          style={{ backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(200,200,200,0.8))" }}
        >
          Confirm Stake
          <i className="fas fa-arrow-right text-[#022c22] opacity-70 text-[16px]" />
        </button>
      </div>
    </GlassCard>
  );
}

/* ─── Bottom Stats ─── */

function BottomStats() {
  const stats = [
    { label: "MY STAKED", value: "$0.00", color: "text-white" },
    { label: "EARNED FEES", value: "+$0.00", color: "text-[#34d399]" },
    { label: "PROTOCOL TVL", value: "$42.8M", color: "text-white" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 max-w-[700px] w-full mx-auto">
      {stats.map((stat) => (
        <GlassCard key={stat.label}>
          <div className="p-6 text-center">
            <span className="text-[#6b7280] text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.5px] block mb-2">
              {stat.label}
            </span>
            <span className={`text-[28px] font-['Inter',sans-serif] font-bold ${stat.color}`}>
              {stat.value}
            </span>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}

/* ─── Page ─── */

export default function StakePage() {
  return (
    <div className="flex flex-col items-center gap-10 py-8">
      {/* Title */}
      <div className="text-center flex flex-col gap-3">
        <h1
          className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[48px] tracking-[-1px] bg-clip-text bg-gradient-to-r from-[#8afda5] to-[#f59e0b]"
          style={{ WebkitTextFillColor: "transparent" }}
        >
          Stake mUSD
        </h1>
        <p className="text-[#9ca3af] text-[18px] font-['IBM_Plex_Sans',sans-serif]">
          Earn protocol fees and emission rewards by locking your liquidity.
        </p>
      </div>

      <StakingCard />
      <BottomStats />
    </div>
  );
}
