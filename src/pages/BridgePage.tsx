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
    { label: "BRIDGE VOLUME (24H)", value: "$8.4M", icon: "fa-exchange-alt", change: "+12.5%", up: true },
    { label: "TOTAL BRIDGED", value: "$312.7M", icon: "fa-globe" },
    { label: "SUPPORTED CHAINS", value: "6", icon: "fa-link" },
    { label: "AVG BRIDGE TIME", value: "~45s", icon: "fa-clock", isGold: true },
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

/* ─── Chain Selector ─── */

const chains = [
  { name: "Canton", color: "#10b981", icon: "C" },
  { name: "Ethereum", color: "#627eea", icon: "Ξ" },
  { name: "Arbitrum", color: "#28a0f0", icon: "A" },
  { name: "Optimism", color: "#ff0420", icon: "O" },
  { name: "Polygon", color: "#8247e5", icon: "P" },
  { name: "Base", color: "#0052ff", icon: "B" },
];

function ChainButton({ chain, selected, onClick }: { chain: typeof chains[0]; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-3 rounded-[12px] transition-all border ${
        selected
          ? "bg-[rgba(6,78,59,0.3)] border-[rgba(74,222,128,0.3)]"
          : "bg-[rgba(0,0,0,0.2)] border-[rgba(255,255,255,0.05)] hover:border-[rgba(74,222,128,0.15)]"
      }`}
    >
      <div
        className="w-[24px] h-[24px] rounded-full flex items-center justify-center text-white text-[10px] font-bold"
        style={{ backgroundColor: chain.color }}
      >
        {chain.icon}
      </div>
      <span className={`text-[14px] font-['IBM_Plex_Sans',sans-serif] ${selected ? "text-white font-bold" : "text-[#9ca3af]"}`}>
        {chain.name}
      </span>
    </button>
  );
}

/* ─── Bridge Interface ─── */

function BridgeInterface() {
  const [fromChain, setFromChain] = useState(0); // Canton
  const [toChain, setToChain] = useState(1); // Ethereum

  const swapChains = () => {
    const tmp = fromChain;
    setFromChain(toChain);
    setToChain(tmp);
  };

  return (
    <div className="relative backdrop-blur-[6px] bg-[rgba(10,18,13,0.6)] rounded-[24px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 border border-[rgba(74,222,128,0.15)] rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(6,78,59,0.2)] pointer-events-none" />

      {/* Header */}
      <div className="bg-[rgba(0,0,0,0.4)] rounded-t-[20px] p-4 flex items-center justify-between">
        <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[18px] text-white tracking-[-0.36px]">
          Bridge Assets
        </h3>
        <Badge>FAST MODE</Badge>
      </div>

      <div className="relative p-8 flex flex-col gap-6">
        <div className="absolute bottom-4 right-[100px] w-[500px] h-[500px] bg-[rgba(2,44,34,0.3)] rounded-full blur-[50px] pointer-events-none" />

        {/* From chain */}
        <div className="flex flex-col gap-3 relative z-10">
          <span className="text-[#9ca3af] text-[14px] font-['IBM_Plex_Sans',sans-serif] font-medium">From</span>
          <div className="flex flex-wrap gap-2">
            {chains.map((chain, i) => (
              <ChainButton key={chain.name} chain={chain} selected={fromChain === i} onClick={() => setFromChain(i)} />
            ))}
          </div>
        </div>

        {/* Amount input */}
        <div className="flex flex-col gap-3 relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-[#9ca3af] text-[14px] font-['IBM_Plex_Sans',sans-serif] font-medium">Amount</span>
            <span className="text-[14px]">
              <span className="text-[#9ca3af] font-['IBM_Plex_Sans',sans-serif]">Balance: </span>
              <span className="text-white font-['Inter',sans-serif]">54,200.00 mUSD</span>
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
              <span className="text-[#d1d5db] text-[18px] font-['IBM_Plex_Sans',sans-serif] font-bold">mUSD</span>
            </div>
            <div aria-hidden className="absolute inset-0 border border-[rgba(255,255,255,0.1)] rounded-[16px] pointer-events-none" />
          </div>
        </div>

        {/* Swap direction */}
        <div className="relative flex items-center justify-center z-10">
          <div className="absolute inset-x-0 top-1/2 border-t border-[rgba(255,255,255,0.05)]" />
          <button
            onClick={swapChains}
            className="relative bg-[#0a120d] w-[40px] h-[40px] rounded-full flex items-center justify-center border border-[rgba(255,255,255,0.1)] hover:border-[rgba(74,222,128,0.3)] transition-colors"
          >
            <i className="fas fa-exchange-alt text-[#9ca3af] text-[16px] rotate-90" />
          </button>
        </div>

        {/* To chain */}
        <div className="flex flex-col gap-3 relative z-10">
          <span className="text-[#9ca3af] text-[14px] font-['IBM_Plex_Sans',sans-serif] font-medium">To</span>
          <div className="flex flex-wrap gap-2">
            {chains.map((chain, i) => (
              <ChainButton key={chain.name} chain={chain} selected={toChain === i} onClick={() => setToChain(i)} />
            ))}
          </div>
        </div>

        {/* Bridge details */}
        <GlassCard className="rounded-[12px]">
          <div className="p-[17px] flex flex-col gap-2">
            {[
              { label: "Route", value: `${chains[fromChain].name} → ${chains[toChain].name}` },
              { label: "Estimated Time", value: "~45 seconds", highlight: true },
              { label: "Bridge Fee", value: "0.05%", highlight: false },
              { label: "You will receive", value: "0.00 mUSD", highlight: true },
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
          Connect Wallet to Bridge
          <i className="fas fa-arrow-right text-[#022c22] opacity-70 text-[18px]" />
        </button>
      </div>
    </div>
  );
}

/* ─── Supported Chains ─── */

function SupportedChains() {
  return (
    <GlassCard>
      <div className="p-[25px] flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <i className="fas fa-network-wired text-[#34d399] text-[14px]" />
          <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[18px] text-white tracking-[-0.36px]">
            Supported Chains
          </h3>
        </div>

        <div className="flex flex-col gap-3">
          {chains.map((chain) => (
            <div
              key={chain.name}
              className="flex items-center justify-between bg-[rgba(0,0,0,0.3)] rounded-[12px] p-4 border border-[rgba(255,255,255,0.05)] hover:border-[rgba(74,222,128,0.15)] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-[32px] h-[32px] rounded-full flex items-center justify-center text-white text-[12px] font-bold"
                  style={{ backgroundColor: chain.color }}
                >
                  {chain.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[14px] font-['IBM_Plex_Sans',sans-serif] font-bold">{chain.name}</span>
                  <span className="text-[#6b7280] text-[12px] font-['Inter',sans-serif]">
                    {chain.name === "Canton" ? "Native · Primary" : "EVM Compatible"}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-[6px] h-[6px] rounded-full bg-[#05dd0c]" />
                <span className="text-[#05dd0c] text-[12px] font-['Inter',sans-serif]">Online</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

/* ─── Recent Bridges ─── */

function RecentBridges() {
  const bridges = [
    { hash: "0x4b...7d2", from: "Canton", to: "Ethereum", amount: "25,000 mUSD", status: "COMPLETED", time: "5 mins ago" },
    { hash: "0x8e...3a1", from: "Ethereum", to: "Canton", amount: "10,000 mUSD", status: "PENDING", time: "2 mins ago" },
    { hash: "0x1f...9c5", from: "Canton", to: "Arbitrum", amount: "50,000 mUSD", status: "COMPLETED", time: "22 mins ago" },
  ];

  return (
    <GlassCard>
      <div className="p-[25px] flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <i className="fas fa-history text-[#34d399] text-[14px]" />
          <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[18px] text-white tracking-[-0.36px]">
            Recent Bridges
          </h3>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="flex border-b border-[rgba(255,255,255,0.05)] pb-2 min-w-[600px]">
            {["TX HASH", "ROUTE", "AMOUNT", "STATUS", "TIME"].map((h, i) => (
              <div key={h} className={`flex-1 text-[#6b7280] text-[11px] font-['Inter',sans-serif] font-bold ${i === 4 ? "text-right" : ""}`}>
                {h}
              </div>
            ))}
          </div>
          {bridges.map((b, i) => (
            <div key={i} className="flex items-center py-3 border-b border-[rgba(255,255,255,0.05)] last:border-0 min-w-[600px]">
              <div className="flex-1 text-[#34d399] text-[14px] font-['Inter',sans-serif] opacity-80">{b.hash}</div>
              <div className="flex-1 text-[#d1d5db] text-[14px] font-['IBM_Plex_Sans',sans-serif]">
                {b.from} → {b.to}
              </div>
              <div className="flex-1 text-[#d1d5db] text-[14px] font-['Inter',sans-serif]">{b.amount}</div>
              <div className="flex-1">
                <Badge variant={b.status === "COMPLETED" ? "green" : "orange"}>{b.status}</Badge>
              </div>
              <div className="flex-1 text-[#6b7280] text-[14px] font-['IBM_Plex_Sans',sans-serif] text-right">{b.time}</div>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

/* ─── Page ─── */

export default function BridgePage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Page header */}
      <div className="flex flex-col gap-2">
        <h1 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[40px] text-white tracking-[-0.8px]">
          Bridge
        </h1>
        <p className="text-[#9ca3af] text-[18px] font-['IBM_Plex_Sans',sans-serif]">
          Transfer mUSD across chains seamlessly. Powered by Canton Network interoperability.
        </p>
      </div>

      <StatsOverview />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_35%] gap-6">
        <BridgeInterface />
        <SupportedChains />
      </div>

      <RecentBridges />
    </div>
  );
}
