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

/* ─── Form Card ─── */

function LendBorrowForm() {
  const [_activeTab] = useState<"supply" | "borrow">("supply");

  return (
    <GlassCard>
      <div className="p-8 flex flex-col gap-6">
        {/* Vault ID */}
        <div className="flex items-center justify-end">
          <span className="text-[#6b7280] text-[12px] font-['Inter',sans-serif]">
            ID: 0x4d...0f21
          </span>
        </div>

        {/* Deposit Collateral */}
        <div className="flex flex-col gap-3">
          <span className="text-[#6b7280] text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.5px]">
            Deposit Collateral (mCanton)
          </span>
          <div className="relative">
            <div className="bg-[#050a07] rounded-[16px] h-[66px] flex items-center px-4">
              <input
                type="text"
                placeholder="0.00"
                className="flex-1 bg-transparent text-[28px] font-['Inter',sans-serif] text-[#4b5563] placeholder-[#4b5563] outline-none"
              />
              <div className="flex items-center gap-2">
                <div className="w-[28px] h-[28px] rounded-full bg-[#10b981] flex items-center justify-center shadow-md">
                  <span className="text-[#022c22] text-[10px] font-bold">€ +</span>
                </div>
                <span className="text-[#d1d5db] text-[18px] font-['IBM_Plex_Sans',sans-serif] font-bold">mCAN</span>
              </div>
            </div>
            <div aria-hidden className="absolute inset-0 border border-[rgba(255,255,255,0.1)] rounded-[16px] pointer-events-none" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#6b7280] text-[12px] font-['Inter',sans-serif]">
              MARKET PRICE: <span className="text-[#d1d5db]">$1.02</span>
            </span>
            <span className="text-[#6b7280] text-[12px] font-['Inter',sans-serif]">
              BALANCE: <span className="text-[#d1d5db]">5,200.00</span>
            </span>
          </div>
        </div>

        {/* Borrow Amount */}
        <div className="flex flex-col gap-3">
          <span className="text-[#6b7280] text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.5px]">
            Borrow Amount (mUSD)
          </span>
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
          <div className="flex items-center justify-between">
            <span className="text-[#6b7280] text-[12px] font-['Inter',sans-serif]">
              INTEREST RATE: <span className="text-[#d1d5db]">0.96</span>
            </span>
            <span className="text-[#6b7280] text-[12px] font-['Inter',sans-serif]">
              MAX: <span className="text-[#d1d5db]">5,444 MUSD</span>
            </span>
          </div>
        </div>

        {/* Action button */}
        <button
          className="w-full py-4 rounded-[12px] flex items-center justify-center gap-2 text-[#022c22] text-[18px] font-['IBM_Plex_Sans',sans-serif] font-bold tracking-[1px] uppercase transition-all hover:brightness-110"
          style={{ backgroundImage: "linear-gradient(135deg, #4ade80, #166534)" }}
        >
          Supply / Borrow
        </button>
      </div>
    </GlassCard>
  );
}

/* ─── Right Sidebar ─── */

function VaultHealth() {
  return (
    <GlassCard>
      <div className="p-6 flex flex-col gap-4">
        <span className="text-[#6b7280] text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.5px]">
          Vault Health
        </span>

        <div className="flex items-center justify-between">
          <span className="text-[#9ca3af] text-[14px] font-['IBM_Plex_Sans',sans-serif] font-bold">
            Collateral Ratio
          </span>
          <span className="text-[#34d399] text-[32px] font-['Inter',sans-serif] font-bold">
            0.0%
          </span>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.05)] pt-3 flex items-center justify-between">
          <span className="text-[#6b7280] text-[12px] font-['Inter',sans-serif]">
            MIN RATIO: <span className="text-[#d1d5db]">150%</span>
          </span>
          <span className="text-[#6b7280] text-[12px] font-['Inter',sans-serif]">
            LIQUIDATION: <span className="text-[#d1d5db]">110%</span>
          </span>
        </div>
      </div>
    </GlassCard>
  );
}

function MarketStats() {
  return (
    <GlassCard>
      <div className="p-6 flex flex-col gap-4">
        <span className="text-[#6b7280] text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.5px]">
          Market Stats
        </span>

        <div className="flex flex-col gap-3">
          {[
            { label: "Stability Fee", value: "0.00 mUSD", highlight: false },
            { label: "Liquidation Fee", value: "13.0%", highlight: true },
            { label: "Current Price", value: "$1.0224", highlight: true },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <span className="text-[#9ca3af] text-[14px] font-['IBM_Plex_Sans',sans-serif]">{item.label}</span>
              <span className={`text-[14px] font-['Inter',sans-serif] font-bold ${item.highlight ? "text-[#34d399]" : "text-[#d1d5db]"}`}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

function SecurityNotice() {
  return (
    <GlassCard>
      <div className="p-6 flex flex-col items-center gap-3 text-center">
        <div className="relative w-[40px] h-[40px] rounded-full bg-[rgba(6,78,59,0.5)] flex items-center justify-center">
          <div aria-hidden className="absolute inset-0 border border-[rgba(16,185,129,0.2)] rounded-full pointer-events-none" />
          <i className="fas fa-shield-alt text-[#34d399] text-[16px]" />
        </div>
        <p className="text-[#6b7280] text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.5px] leading-[18px]">
          All loans are over-collateralized and secured by the Canton Network protocol architecture.
        </p>
      </div>
    </GlassCard>
  );
}

/* ─── Footer ─── */

function PageFooter() {
  return (
    <div className="flex items-center justify-between mt-8 pt-6 border-t border-[rgba(255,255,255,0.05)]">
      <div className="flex items-center gap-2">
        <span className="text-[#6b7280] text-[12px] font-['Inter',sans-serif] uppercase tracking-[0.5px]">
          Status: Operational
        </span>
        <div className="w-[6px] h-[6px] rounded-full bg-[#05dd0c]" />
      </div>
      <div className="flex items-center gap-6">
        {["Docs", "Audit", "GitHub"].map((link) => (
          <a key={link} href="#" className="text-[#6b7280] text-[12px] font-['Inter',sans-serif] uppercase tracking-[0.5px] hover:text-[#34d399] transition-colors">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─── Page ─── */

export default function LendBorrowPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Page header */}
      <div className="flex flex-col gap-2">
        <h1 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[48px] text-white tracking-[-1px]">
          Lend and{" "}
          <span
            className="bg-clip-text bg-gradient-to-r from-[#8afda5] to-[#f59e0b]"
            style={{ WebkitTextFillColor: "transparent" }}
          >
            Borrow
          </span>
        </h1>
        <p className="text-[#9ca3af] text-[16px] font-['IBM_Plex_Sans',sans-serif] leading-[24px]">
          Deposit collateral to mint mUSD. Maintain a collateral ratio above<br />
          150% to avoid liquidation.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
        <LendBorrowForm />
        <div className="flex flex-col gap-4">
          <VaultHealth />
          <MarketStats />
          <SecurityNotice />
        </div>
      </div>

      <PageFooter />
    </div>
  );
}
