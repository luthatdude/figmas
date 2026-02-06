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

function Badge({ children, variant = "green" }: { children: React.ReactNode; variant?: "green" | "orange" | "blue" }) {
  const colors = {
    green: "bg-[rgba(16,185,129,0.1)] border-[rgba(16,185,129,0.2)] text-[#34d399]",
    orange: "bg-[rgba(249,115,22,0.1)] border-[rgba(249,115,22,0.2)] text-[#fb923c]",
    blue: "bg-[rgba(59,130,246,0.1)] border-[rgba(59,130,246,0.2)] text-[#60a5fa]",
  }[variant];
  return (
    <span className={`inline-flex px-[9px] py-[2px] rounded-[4px] border text-[12px] font-['IBM_Plex_Sans',sans-serif] ${colors}`}>
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

/* ─── Stats ─── */

function StatsOverview() {
  const stats = [
    { label: "TOTAL SUPPLIED", value: "$67.4M", icon: "fa-arrow-up", change: "+1.8%", up: true },
    { label: "TOTAL BORROWED", value: "$42.1M", icon: "fa-arrow-down" },
    { label: "AVAILABLE LIQUIDITY", value: "$25.3M", icon: "fa-water" },
    { label: "UTILIZATION RATE", value: "62.5%", icon: "fa-chart-pie", isGold: true },
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

/* ─── Lend/Borrow Interface ─── */

function LendBorrowInterface() {
  const [activeTab, setActiveTab] = useState<"supply" | "borrow">("supply");

  return (
    <div className="relative backdrop-blur-[6px] bg-[rgba(10,18,13,0.6)] rounded-[24px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 border border-[rgba(74,222,128,0.15)] rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(6,78,59,0.2)] pointer-events-none" />

      {/* Tabs */}
      <div className="bg-[rgba(0,0,0,0.4)] rounded-t-[20px] p-1 flex">
        {(["supply", "borrow"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 rounded-[12px] text-[16px] font-['IBM_Plex_Sans',sans-serif] font-bold transition-all capitalize ${
              activeTab === tab
                ? "bg-[#34d399] text-[#022c22] shadow-[0px_10px_15px_-3px_rgba(16,185,129,0.2)]"
                : "text-[#9ca3af] hover:text-white"
            }`}
          >
            {tab === "supply" ? "Supply" : "Borrow"}
          </button>
        ))}
      </div>

      {/* Form */}
      <div className="relative p-8 flex flex-col gap-8">
        <div className="absolute bottom-4 right-[100px] w-[500px] h-[500px] bg-[rgba(2,44,34,0.3)] rounded-full blur-[50px] pointer-events-none" />

        {/* Asset selector */}
        <div className="flex flex-col gap-3 relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-[#9ca3af] text-[14px] font-['IBM_Plex_Sans',sans-serif] font-medium">
              {activeTab === "supply" ? "Supply Asset" : "Borrow Asset"}
            </span>
            <span className="text-[14px]">
              <span className="text-[#9ca3af] font-['IBM_Plex_Sans',sans-serif]">Wallet: </span>
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

        {/* Details */}
        <GlassCard className="rounded-[12px]">
          <div className="p-[17px] flex flex-col gap-2">
            {(activeTab === "supply"
              ? [
                  { label: "Supply APY", value: "4.2%", highlight: true },
                  { label: "Distribution APR", value: "1.8%", highlight: true },
                  { label: "Collateral Factor", value: "85%", highlight: false },
                  { label: "You are supplying", value: "0.00 USDC", highlight: false },
                ]
              : [
                  { label: "Borrow APR", value: "6.8%", highlight: false },
                  { label: "Your Collateral", value: "$15,420.00", highlight: false },
                  { label: "Borrow Limit", value: "$13,107.00", highlight: false },
                  { label: "Health Factor", value: "2.45", highlight: true },
                ]
            ).map((item) => (
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
          Connect Wallet to {activeTab === "supply" ? "Supply" : "Borrow"}
          <i className="fas fa-arrow-right text-[#022c22] opacity-70 text-[18px]" />
        </button>
      </div>
    </div>
  );
}

/* ─── Markets Table ─── */

function MarketsTable() {
  const markets = [
    { asset: "USDC", icon: "$", iconBg: "#2775ca", supplied: "$32.1M", supplyApy: "4.2%", borrowed: "$18.4M", borrowApr: "6.8%", liquidity: "$13.7M" },
    { asset: "mUSD", icon: "M", iconBg: "#10b981", supplied: "$18.6M", supplyApy: "5.1%", borrowed: "$12.8M", borrowApr: "7.4%", liquidity: "$5.8M" },
    { asset: "WETH", icon: "Ξ", iconBg: "#627eea", supplied: "$12.4M", supplyApy: "2.8%", borrowed: "$8.2M", borrowApr: "5.2%", liquidity: "$4.2M" },
    { asset: "WBTC", icon: "₿", iconBg: "#f7931a", supplied: "$4.3M", supplyApy: "1.5%", borrowed: "$2.7M", borrowApr: "4.1%", liquidity: "$1.6M" },
  ];

  return (
    <GlassCard>
      <div className="p-[25px] flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <i className="fas fa-chart-bar text-[#34d399] text-[14px]" />
          <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[18px] text-white tracking-[-0.36px]">
            Markets
          </h3>
        </div>

        <div className="w-full overflow-x-auto">
          {/* Header */}
          <div className="flex border-b border-[rgba(255,255,255,0.05)] pb-2 min-w-[700px]">
            {["ASSET", "TOTAL SUPPLIED", "SUPPLY APY", "TOTAL BORROWED", "BORROW APR", "LIQUIDITY"].map((h, i) => (
              <div key={h} className={`${i === 0 ? "w-[120px]" : "flex-1"} text-[#6b7280] text-[11px] font-['Inter',sans-serif] font-bold ${i >= 4 ? "text-right" : ""}`}>
                {h}
              </div>
            ))}
          </div>

          {/* Rows */}
          {markets.map((m) => (
            <div key={m.asset} className="flex items-center py-3 border-b border-[rgba(255,255,255,0.05)] last:border-0 min-w-[700px] hover:bg-[rgba(255,255,255,0.02)] transition-colors">
              <div className="w-[120px] flex items-center gap-3">
                <div
                  className="w-[32px] h-[32px] rounded-full flex items-center justify-center shadow-md text-white text-[12px] font-bold"
                  style={{ backgroundColor: m.iconBg }}
                >
                  {m.icon}
                </div>
                <span className="text-white text-[14px] font-['IBM_Plex_Sans',sans-serif] font-bold">{m.asset}</span>
              </div>
              <div className="flex-1 text-[#d1d5db] text-[14px] font-['Inter',sans-serif]">{m.supplied}</div>
              <div className="flex-1 text-[#34d399] text-[14px] font-['Inter',sans-serif]">{m.supplyApy}</div>
              <div className="flex-1 text-[#d1d5db] text-[14px] font-['Inter',sans-serif]">{m.borrowed}</div>
              <div className="flex-1 text-[#fb923c] text-[14px] font-['Inter',sans-serif] text-right">{m.borrowApr}</div>
              <div className="flex-1 text-[#d1d5db] text-[14px] font-['Inter',sans-serif] text-right">{m.liquidity}</div>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

/* ─── Your Positions ─── */

function YourPositions() {
  return (
    <GlassCard>
      <div className="p-[25px] flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <i className="fas fa-wallet text-[#34d399] text-[14px]" />
          <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[18px] text-white tracking-[-0.36px]">
            Your Positions
          </h3>
        </div>

        {/* Health factor bar */}
        <div className="bg-[rgba(0,0,0,0.3)] rounded-[12px] p-4 border border-[rgba(255,255,255,0.05)]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[#6b7280] text-[12px] font-['Inter',sans-serif] uppercase">Health Factor</span>
            <span className="text-[#34d399] text-[20px] font-['Inter',sans-serif] font-bold">2.45</span>
          </div>
          <div className="w-full h-[6px] bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
            <div className="h-full w-[75%] rounded-full" style={{ backgroundImage: "linear-gradient(90deg, #34d399, #fde68a)" }} />
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-[#6b7280] text-[10px] font-['Inter',sans-serif]">Liquidation</span>
            <span className="text-[#6b7280] text-[10px] font-['Inter',sans-serif]">Safe</span>
          </div>
        </div>

        {/* Positions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Supplied */}
          <div className="bg-[rgba(0,0,0,0.3)] rounded-[12px] p-4 border border-[rgba(255,255,255,0.05)]">
            <span className="text-[#6b7280] text-[11px] font-['Inter',sans-serif] uppercase block mb-2">Supplied</span>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-[20px] h-[20px] rounded-full bg-[#2775ca] flex items-center justify-center text-white text-[8px] font-bold">$</div>
              <span className="text-white text-[16px] font-['Inter',sans-serif] font-bold">15,420 USDC</span>
            </div>
            <span className="text-[#34d399] text-[13px] font-['Inter',sans-serif]">Earning 4.2% APY</span>
          </div>

          {/* Borrowed */}
          <div className="bg-[rgba(0,0,0,0.3)] rounded-[12px] p-4 border border-[rgba(255,255,255,0.05)]">
            <span className="text-[#6b7280] text-[11px] font-['Inter',sans-serif] uppercase block mb-2">Borrowed</span>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-[20px] h-[20px] rounded-full bg-[#10b981] flex items-center justify-center text-[#022c22] text-[8px] font-bold">M</div>
              <span className="text-white text-[16px] font-['Inter',sans-serif] font-bold">8,200 mUSD</span>
            </div>
            <span className="text-[#fb923c] text-[13px] font-['Inter',sans-serif]">Paying 7.4% APR</span>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

/* ─── Page ─── */

export default function LendBorrowPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Page header */}
      <div className="flex flex-col gap-2">
        <h1 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[40px] text-white tracking-[-0.8px]">
          Lend & Borrow
        </h1>
        <p className="text-[#9ca3af] text-[18px] font-['IBM_Plex_Sans',sans-serif]">
          Supply assets to earn interest, or borrow against your collateral at competitive rates.
        </p>
      </div>

      <StatsOverview />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_35%] gap-6">
        <LendBorrowInterface />
        <YourPositions />
      </div>

      <MarketsTable />
    </div>
  );
}
