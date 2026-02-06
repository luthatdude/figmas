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

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex px-[9px] py-[2px] rounded-[4px] border bg-[rgba(16,185,129,0.1)] border-[rgba(16,185,129,0.2)] text-[#34d399] text-[12px] font-['IBM_Plex_Sans',sans-serif]">
      {children}
    </span>
  );
}

function IconCircle({ icon }: { icon: string }) {
  return (
    <div className="relative w-[40px] h-[40px] rounded-full bg-[rgba(6,78,59,0.5)] flex items-center justify-center shrink-0">
      <div aria-hidden className="absolute inset-0 border border-[rgba(16,185,129,0.2)] rounded-full pointer-events-none" />
      <i className={`fas ${icon} text-[#34d399] text-[16px]`} />
    </div>
  );
}

/* ─── Stats Cards ─── */

function StatsOverview() {
  const stats = [
    { label: "TOTAL STAKED", value: "$89,421,890", icon: "fa-layer-group", change: "+3.2%", up: true },
    { label: "STAKING APY", value: "12.8%", icon: "fa-percentage", isGold: true },
    { label: "YOUR STAKED", value: "15,420 mUSD", icon: "fa-user", change: null },
    { label: "UNCLAIMED REWARDS", value: "234.56 mUSD", icon: "fa-gift", change: null },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <GlassCard key={stat.label}>
          <div className="p-[25px] flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[#6b7280] text-[11px] font-['Inter',sans-serif] uppercase">{stat.label}</span>
              <IconCircle icon={stat.icon} />
            </div>
            <span
              className={`text-[24px] font-['Inter',sans-serif] font-bold ${
                stat.isGold
                  ? "bg-clip-text bg-gradient-to-r from-[#fde68a] to-[#f59e0b]"
                  : "text-white"
              }`}
              style={stat.isGold ? { WebkitTextFillColor: "transparent" } : undefined}
            >
              {stat.value}
            </span>
            {stat.change && (
              <div className="flex items-center gap-1">
                <i className={`fas fa-caret-${stat.up ? "up" : "down"} text-[#34d399] text-[12px]`} />
                <span className="text-[#34d399] text-[14px] font-['IBM_Plex_Sans',sans-serif] font-bold">{stat.change}</span>
              </div>
            )}
          </div>
        </GlassCard>
      ))}
    </div>
  );
}

/* ─── Staking Interface ─── */

function StakingInterface() {
  const [activeTab, setActiveTab] = useState<"stake" | "unstake">("stake");

  return (
    <div className="relative backdrop-blur-[6px] bg-[rgba(10,18,13,0.6)] rounded-[24px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 border border-[rgba(74,222,128,0.15)] rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(6,78,59,0.2)] pointer-events-none" />

      {/* Tabs */}
      <div className="bg-[rgba(0,0,0,0.4)] rounded-t-[20px] p-1 flex">
        {(["stake", "unstake"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 rounded-[12px] text-[16px] font-['IBM_Plex_Sans',sans-serif] font-bold transition-all capitalize ${
              activeTab === tab
                ? "bg-[#34d399] text-[#022c22] shadow-[0px_10px_15px_-3px_rgba(16,185,129,0.2)]"
                : "text-[#9ca3af] hover:text-white"
            }`}
          >
            {tab === "stake" ? "Stake mUSD" : "Unstake"}
          </button>
        ))}
      </div>

      {/* Form */}
      <div className="relative p-8 flex flex-col gap-8">
        <div className="absolute bottom-4 right-[100px] w-[500px] h-[500px] bg-[rgba(2,44,34,0.3)] rounded-full blur-[50px] pointer-events-none" />

        {/* Amount input */}
        <div className="flex flex-col gap-3 relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-[#9ca3af] text-[14px] font-['IBM_Plex_Sans',sans-serif] font-medium">
              {activeTab === "stake" ? "Amount to Stake" : "Amount to Unstake"}
            </span>
            <span className="text-[14px]">
              <span className="text-[#9ca3af] font-['IBM_Plex_Sans',sans-serif]">Available: </span>
              <span className="text-white font-['Inter',sans-serif]">
                {activeTab === "stake" ? "38,580.00 mUSD" : "15,420.00 smUSD"}
              </span>
            </span>
          </div>
          <div className="relative">
            <div className="bg-[#050a07] rounded-[16px] h-[66px] flex items-center px-4">
              <div className="w-[32px] h-[32px] rounded-full bg-[#10b981] flex items-center justify-center shadow-md mr-3">
                <span className="text-[#022c22] text-[14px] font-bold">M</span>
              </div>
              <input
                type="text"
                placeholder="0.00"
                className="flex-1 bg-transparent text-[24px] font-['Inter',sans-serif] text-[#4b5563] placeholder-[#4b5563] outline-none"
              />
              <button className="bg-[rgba(6,78,59,0.3)] text-[#34d399] text-[12px] font-['IBM_Plex_Sans',sans-serif] font-bold uppercase tracking-[0.6px] px-3 py-1 rounded-[8px] mr-2">
                Max
              </button>
              <span className="text-[#d1d5db] text-[18px] font-['IBM_Plex_Sans',sans-serif] font-bold">
                {activeTab === "stake" ? "mUSD" : "smUSD"}
              </span>
            </div>
            <div aria-hidden className="absolute inset-0 border border-[rgba(255,255,255,0.1)] rounded-[16px] pointer-events-none" />
          </div>
        </div>

        {/* Staking details */}
        <GlassCard className="rounded-[12px]">
          <div className="p-[17px] flex flex-col gap-2">
            {[
              { label: "Lock Period", value: "7 days" },
              { label: "Current APY", value: "12.8%", highlight: true },
              { label: "Estimated Daily Rewards", value: "0.00 mUSD", highlight: true },
              { label: "Cooldown Period", value: "48 hours" },
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
          Connect Wallet to {activeTab === "stake" ? "Stake" : "Unstake"}
          <i className="fas fa-arrow-right text-[#022c22] opacity-70 text-[18px]" />
        </button>
      </div>
    </div>
  );
}

/* ─── Staking Tiers ─── */

function StakingTiers() {
  const tiers = [
    { name: "Bronze", requirement: "1,000+ mUSD", apy: "8.45%", benefits: "Base rewards" },
    { name: "Silver", requirement: "10,000+ mUSD", apy: "10.2%", benefits: "1.2x boost + fee discount" },
    { name: "Gold", requirement: "50,000+ mUSD", apy: "12.8%", benefits: "1.5x boost + governance" },
    { name: "Platinum", requirement: "100,000+ mUSD", apy: "15.4%", benefits: "2x boost + priority access" },
  ];

  return (
    <GlassCard>
      <div className="p-[25px] flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <i className="fas fa-trophy text-[#34d399] text-[14px]" />
          <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[18px] text-white tracking-[-0.36px]">
            Staking Tiers
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="bg-[rgba(0,0,0,0.3)] rounded-[12px] p-4 border border-[rgba(255,255,255,0.05)] hover:border-[rgba(74,222,128,0.3)] transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white text-[16px] font-['IBM_Plex_Sans',sans-serif] font-bold">{tier.name}</span>
                <span
                  className="text-[16px] font-['Inter',sans-serif] font-bold bg-clip-text bg-gradient-to-r from-[#fde68a] to-[#f59e0b]"
                  style={{ WebkitTextFillColor: "transparent" }}
                >
                  {tier.apy}
                </span>
              </div>
              <p className="text-[#6b7280] text-[12px] font-['Inter',sans-serif] mb-1">{tier.requirement}</p>
              <p className="text-[#9ca3af] text-[13px] font-['IBM_Plex_Sans',sans-serif]">{tier.benefits}</p>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

/* ─── Staking History ─── */

function StakingHistory() {
  const history = [
    { date: "Feb 5, 2026", action: "STAKE", amount: "5,000 mUSD", status: "Active", apy: "12.8%" },
    { date: "Jan 28, 2026", action: "CLAIM", amount: "234.56 mUSD", status: "Completed", apy: "—" },
    { date: "Jan 15, 2026", action: "STAKE", amount: "10,420 mUSD", status: "Active", apy: "12.8%" },
  ];

  return (
    <GlassCard>
      <div className="p-[25px] flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <i className="fas fa-history text-[#34d399] text-[14px]" />
          <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[18px] text-white tracking-[-0.36px]">
            Staking History
          </h3>
        </div>

        <div className="w-full">
          <div className="flex border-b border-[rgba(255,255,255,0.05)] pb-2">
            {["DATE", "ACTION", "AMOUNT", "APY", "STATUS"].map((h, i) => (
              <div key={h} className={`flex-1 text-[#6b7280] text-[11px] font-['Inter',sans-serif] font-bold ${i === 4 ? "text-right" : ""}`}>
                {h}
              </div>
            ))}
          </div>
          {history.map((item, i) => (
            <div key={i} className="flex items-center py-3 border-b border-[rgba(255,255,255,0.05)] last:border-0">
              <div className="flex-1 text-[#9ca3af] text-[14px] font-['IBM_Plex_Sans',sans-serif]">{item.date}</div>
              <div className="flex-1"><Badge>{item.action}</Badge></div>
              <div className="flex-1 text-[#d1d5db] text-[14px] font-['Inter',sans-serif]">{item.amount}</div>
              <div className="flex-1 text-[#34d399] text-[14px] font-['Inter',sans-serif]">{item.apy}</div>
              <div className="flex-1 text-[#6b7280] text-[14px] font-['IBM_Plex_Sans',sans-serif] text-right">{item.status}</div>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

/* ─── Page ─── */

export default function StakePage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Page header */}
      <div className="flex flex-col gap-2">
        <h1 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[40px] text-white tracking-[-0.8px]">
          Stake mUSD
        </h1>
        <p className="text-[#9ca3af] text-[18px] font-['IBM_Plex_Sans',sans-serif]">
          Earn yield by staking your mUSD. Higher tiers unlock boosted rewards.
        </p>
      </div>

      <StatsOverview />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_40%] gap-6">
        <StakingInterface />
        <StakingTiers />
      </div>

      <StakingHistory />
    </div>
  );
}
