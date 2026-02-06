import svgPaths from "./svg-fv8vzdsefb";
import imgAbstractFintechVisualizationDarkGreenAndGoldTransparentVectorize from "figma:asset/4cb7f599cd41ab91655b2777ae51b43d2c9065da.png";

function Link() {
  return <div className="flex-[1_0_0] min-h-px min-w-px w-[47px]" data-name="Link" />;
}

function LinkMargin() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start justify-center left-[178px] pl-[32px] top-[28px]" data-name="Link:margin">
      <Link />
    </div>
  );
}

function LinkTrade() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[71px] top-0 w-[37px]" data-name="Link - Trade">
      <div className="flex flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal h-[40px] justify-center leading-[0] relative shrink-0 text-[#00ff6f] text-[20px] w-[52px]" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Mint</p>
      </div>
    </div>
  );
}

function LinkStake() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[158px] top-[10px]" data-name="Link - Stake">
      <div className="flex flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#00ff6f] text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Stake</p>
      </div>
    </div>
  );
}

function LinkGovern() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[254px] top-[10px]" data-name="Link - Govern">
      <div className="flex flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#00ff6f] text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Lend/Borrow</p>
      </div>
    </div>
  );
}

function LinkAnalytics() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[404px] top-[10px]" data-name="Link - Analytics">
      <div className="flex flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#00ff6f] text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Bridge</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[40px] relative shrink-0 w-[489px]" data-name="Container">
      <LinkTrade />
      <LinkStake />
      <LinkGovern />
      <LinkAnalytics />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex items-center left-[286px] top-[20px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10.1px] whitespace-nowrap">
        <p className="leading-[16px]">NETWORK</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="bg-[#05dd0c] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#05dd0c] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Canton Mainnet</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[-38px] top-0" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute h-[32px] left-[907px] top-[22px] w-[126px]" data-name="Margin">
      <Container3 />
    </div>
  );
}

function ButtonConnectWallet() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex gap-[8px] items-center px-[25px] py-[11px] relative rounded-[12px]" data-name="Button - Connect Wallet">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[16px]"></p>
      </div>
      <div className="flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Connect Wallet</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[80px] relative shrink-0 w-[1195.128px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute h-[40px] left-0 top-[20px] w-[57px]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 40">
            <path d={svgPaths.p1c152280} fill="var(--fill-0, #10F09C)" id="Vector" />
          </svg>
        </div>
        <LinkMargin />
        <Container1 />
        <Margin />
        <div className="absolute flex h-[46.521px] items-center justify-center left-[1033px] top-[17px] w-[186.128px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
          <div className="flex-none rotate-[0.16deg]">
            <ButtonConnectWallet />
          </div>
        </div>
      </div>
    </div>
  );
}

function Navigation({ className }: { className?: string }) {
  return (
    <div className={className || "absolute backdrop-blur-[6px] bg-[rgba(0,0,0,0.6)] content-stretch flex flex-col items-start left-[0.32px] px-[33px] py-px top-[12px] w-[1280px]"} data-name="Navigation">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none shadow-[0px_4px_30px_0px_rgba(0,0,0,0.5)]" />
      <Container />
    </div>
  );
}

function BodyPaints() {
  return <div className="absolute bg-[#020402] inset-[0_-0.32px_0_0.32px]" data-name="Body paints" />;
}

function HorizontalBorder() {
  return (
    <div className="absolute border-[rgba(16,185,129,0.5)] border-b border-solid h-[21px] left-[0.32px] top-[33.04px] w-[129.06px]" data-name="HorizontalBorder">
      <div className="-translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] h-[30px] justify-center leading-[0] left-0 not-italic text-[18px] text-white top-[10px] w-[130.661px]">
        <p className="leading-[29.25px] whitespace-pre-wrap">Canton Network</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="col-[1] h-[87.75px] relative row-[2] shrink-0 w-[414.41px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] h-[30px] justify-center leading-[0] left-0 not-italic text-[#ccd1d8] text-[18px] top-[14px] w-[367.653px]">
        <p className="leading-[29.25px] whitespace-pre-wrap">The first Institutional Stablecoin Powered by</p>
      </div>
      <HorizontalBorder />
      <div className="-translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] h-[30px] justify-center leading-[0] left-[129.06px] not-italic text-[#ccd1d8] text-[18px] top-[43.25px] w-[259.381px]">
        <p className="leading-[29.25px] whitespace-pre-wrap">. Mint mUSD seamlessly against</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] h-[30px] justify-center leading-[0] left-0 not-italic text-[#ccd1d8] text-[18px] top-[72.5px] w-[121.376px]">
        <p className="leading-[29.25px] whitespace-pre-wrap">verified assets.</p>
      </div>
    </div>
  );
}

function BrandingHeroBlock() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(1,_fit-content(100%))] grid-rows-[repeat(2,_fit-content(100%))] relative shrink-0 w-0" data-name="Branding Hero Block">
      <div className="col-[1] flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[60px] relative row-[1] self-start shrink-0 text-[60px] text-white tracking-[-1.2px] w-[414.41px] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="mb-0">Stable Yield</p>
        <p className="bg-clip-text bg-gradient-to-r from-[#8afda5] to-[#f59e0b]" style={{ WebkitTextFillColor: "transparent" }}>
          Minted Real.
        </p>
      </div>
      <Container6 />
    </div>
  );
}

function BrandingHeroBlockMargin() {
  return (
    <div className="col-[1] content-stretch flex flex-col items-start justify-self-stretch pb-[16px] relative row-[1] self-start shrink-0" data-name="Branding Hero Block:margin">
      <BrandingHeroBlock />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[16px] whitespace-nowrap">
          <p className="leading-[16px]"></p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(6,78,59,0.5)] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.36px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
        <p className="leading-[28px]">Audited Security</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap">
        <p className="mb-0">Contracts verified by Halborn and Certik. 100%</p>
        <p>on-chain transparency.</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="min-w-[308.4100341796875px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start min-w-[inherit] relative">
        <Heading1 />
        <Container9 />
      </div>
    </div>
  );
}

function InfoFeature() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,18,13,0.6)] col-[1] justify-self-stretch relative rounded-[16px] row-[3] self-start shrink-0" data-name="Info Feature">
      <div aria-hidden="true" className="absolute border border-[rgba(74,222,128,0.15)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.5)]" />
      <div className="content-stretch flex gap-[16px] items-start p-[25px] relative w-full">
        <OverlayBorder />
        <Container8 />
      </div>
    </div>
  );
}

function AbstractFintechVisualizationDarkGreenAndGoldTransparentVectorize() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px mix-blend-luminosity opacity-80 relative w-full" data-name="Abstract fintech visualization dark green and gold !transparent !vectorize">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAbstractFintechVisualizationDarkGreenAndGoldTransparentVectorize} />
    </div>
  );
}

function DecorativeImagePlaceholder() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,18,13,0.6)] col-[1] content-stretch flex flex-col h-[192px] items-start justify-center justify-self-stretch overflow-clip relative rounded-[16px] row-[4] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.5)] shrink-0" data-name="Decorative Image Placeholder">
      <AbstractFintechVisualizationDarkGreenAndGoldTransparentVectorize />
      <div className="absolute bg-gradient-to-t from-[#020402] inset-0 to-[rgba(2,4,2,0)]" data-name="Gradient" />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[13.3px] tracking-[-0.28px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">System Status</p>
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(16,185,129,0.1)] content-stretch flex flex-col items-start px-[9px] py-[3px] relative rounded-[4px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">OPERATIONAL</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="col-[1] relative row-[1] self-start shrink-0 w-[364.41px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Heading />
        <OverlayBorder1 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[11.8px] whitespace-nowrap">
        <p className="leading-[16px]">TOTAL VALUE LOCKED</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
        <p className="leading-[32px]">$142,893,210</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid','Noto_Sans:Black',sans-serif] justify-center leading-[0] relative shrink-0 text-[#34d399] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 900" }}>
        <p className="leading-[16px]"></p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Container">
      <Container17 />
      <div className="flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">2.4%</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Container16 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between pb-[13px] pr-[0.01px] relative w-full">
          <Container12 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[11.3px] whitespace-nowrap">
        <p className="leading-[16px]">CURRENT APY</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Bold',sans-serif] font-bold from-[#fde68a] justify-center leading-[0] not-italic relative shrink-0 text-[23.1px] to-[#f59e0b] whitespace-nowrap" style={{ WebkitTextFillColor: "transparent" }}>
        <p className="leading-[32px]">8.45%</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[11.1px] text-right whitespace-nowrap">
        <p className="leading-[16px]">mUSD SUPPLY</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[17.2px] text-right text-white whitespace-nowrap">
        <p className="leading-[28px]">54.2M</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between pb-[4px] relative w-full">
          <Container19 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="col-[1] relative row-[2] self-start shrink-0 w-[364.41px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <HorizontalBorder1 />
        <Container18 />
      </div>
    </div>
  );
}

function MarketCard() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,18,13,0.6)] col-[1] justify-self-stretch relative rounded-[16px] row-[2] self-start shrink-0" data-name="Market Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="gap-[16px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[repeat(2,_fit-content(100%))] p-[25px] relative w-full">
          <Container10 />
          <Container11 />
          <div className="absolute bg-gradient-to-b from-[rgba(74,222,128,0)] h-[40px] left-[25px] right-[-23px] to-[rgba(74,222,128,0)] top-[25px] via-1/2 via-[rgba(74,222,128,0.2)]" data-name="Gradient" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(74,222,128,0.15)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.5)]" />
    </div>
  );
}

function AsideLeftColumnContextStats() {
  return (
    <div className="absolute gap-[24px] grid grid-cols-[repeat(1,_minmax(0,_1fr))] grid-rows-[repeat(4,_minmax(0,_1fr))] inset-[96px_65.12%_48px_2.5%]" data-name="Aside - Left Column: Context & Stats (35">
      <BrandingHeroBlockMargin />
      <InfoFeature />
      <DecorativeImagePlaceholder />
      <MarketCard />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#34d399] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px overflow-clip py-[12px] relative rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(16,185,129,0.2),0px_4px_6px_-4px_rgba(16,185,129,0.2)]" data-name="Button">
      <div className="flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#022c22] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Mint mUSD</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px py-[12px] relative" data-name="Button">
      <div className="flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Redeem</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px py-[12px] relative" data-name="Button">
      <div className="flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Swap</p>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] relative rounded-bl-[8px] rounded-br-[8px] rounded-tl-[20.8px] rounded-tr-[20.8px] shrink-0 w-[759.59px]" data-name="Tabs">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center p-[4px] relative w-full">
        <Button />
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Label">
      <div className="flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Deposit Asset</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="leading-[0] not-italic relative self-stretch shrink-0 text-[14px] w-[176px]" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] h-[20px] justify-center left-0 text-[#9ca3af] top-[10px] w-[58.759px]">
        <p className="leading-[20px] whitespace-pre-wrap">{`Balance: `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center left-[58.38px] text-white top-[11px] w-[117.83px]">
        <p className="leading-[20px] whitespace-pre-wrap">24,500.00 USDC</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Label />
      <Paragraph />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[57px] overflow-clip right-[97px] top-[19px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[24px] whitespace-nowrap">
        <p className="leading-[normal]">0.00</p>
      </div>
    </div>
  );
}

function Container29() {
  return <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px" data-name="Container" />;
}

function Container28() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[57px] right-[97px] top-[17px]" data-name="Container">
      <Container29 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#050a07] h-[66px] relative rounded-[16px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container27 />
        <Container28 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid','Noto_Sans:Black',sans-serif] justify-center leading-[0] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 900" }}>
        <p className="leading-[12px]">$</p>
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#2775ca] content-stretch flex items-center justify-center overflow-clip relative rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[32px]" data-name="Background+Shadow">
      <Container31 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center left-0 pl-[16px] top-0" data-name="Container">
      <BackgroundShadow />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(6,78,59,0.3)] content-stretch flex flex-col items-center justify-center px-[12px] py-[4px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Max</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.01px] pr-[8px] relative shrink-0" data-name="Button:margin">
      <Button3 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.01px] pr-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d1d5db] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">USDC</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center pr-[8.01px] right-[2.49px] top-0" data-name="Container">
      <ButtonMargin />
      <Margin1 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <Container30 />
      <Container32 />
    </div>
  );
}

function ConvertFrom() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Convert From">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="Container">
      <div className="flex-[1_0_0] h-px min-h-px min-w-px relative" data-name="Horizontal Divider">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[16px]"></p>
        </div>
      </div>
    </div>
  );
}

function ButtonSwitchTransactionDirection() {
  return (
    <div className="bg-[#0a120d] content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button - Switch transaction direction">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container34 />
    </div>
  );
}

function ArrowDivider() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Arrow Divider">
      <Container33 />
      <ButtonSwitchTransactionDirection />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Label">
      <div className="flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Receive</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">1 USDC ≈ 0.9998 mUSD</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Container36 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#022c22] text-[14px] whitespace-nowrap">
        <p className="leading-[14px]">M</p>
      </div>
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-[#10b981] content-stretch flex items-center justify-center overflow-clip relative rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[32px]" data-name="Background+Shadow">
      <Container39 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center left-0 pl-[16px] top-0" data-name="Container">
      <BackgroundShadow1 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[24px] w-full">
        <p className="leading-[32px] whitespace-pre-wrap">0.00</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Container42 />
    </div>
  );
}

function Container40() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
        <Container41 />
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#050a07] opacity-90 relative rounded-[16px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[57px] pr-[97px] py-[17px] relative w-full">
          <Container40 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">
        <p className="leading-[28px]">mUSD</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center pr-[16px] right-[1.02px] top-0" data-name="Container">
      <Container44 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Input1 />
      <Container43 />
    </div>
  );
}

function ConvertTo() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Convert To">
      <Container35 />
      <Container37 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Exchange Rate</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[151.22999572753906px] relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d1d5db] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">1 USDC = 1.00 mUSD</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-[661.59px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Container46 />
        <Container47 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Network Fee</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d1d5db] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">$0.005</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-[661.59px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Container49 />
        <Container50 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Expected Output</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">0.00 mUSD</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 w-[661.59px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative w-full">
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function TransactionDetails() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,18,13,0.6)] relative rounded-[12px] shrink-0 w-full" data-name="Transaction Details">
      <div aria-hidden="true" className="absolute border border-[rgba(74,222,128,0.15)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.5)]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative w-full">
        <Container45 />
        <Container48 />
        <Container51 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-center opacity-70 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid','Noto_Sans:Black',sans-serif] justify-center leading-[0] relative shrink-0 text-[#022c22] text-[18px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 900" }}>
        <p className="leading-[18px]"></p>
      </div>
    </div>
  );
}

function ActionButton() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center py-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Action Button" style={{ backgroundImage: "linear-gradient(135deg, rgb(74, 222, 128) 0%, rgb(22, 101, 52) 100%)" }}>
      <div className="flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#022c22] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28px]">Connect Wallet to Mint</p>
      </div>
      <Container54 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] relative rounded-bl-[20.8px] rounded-br-[20.8px] shrink-0 w-[759.59px]" data-name="Overlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start p-[32px] relative w-full">
        <div className="absolute bg-[rgba(2,44,34,0.3)] blur-[50px] bottom-[15.03px] right-[107.68px] rounded-[9999px] size-[600px]" data-name="Overlay+Blur" />
        <div className="absolute bg-[rgba(20,83,45,0.2)] blur-[60px] left-[-430.09px] rounded-[9999px] size-[500px] top-[-15.96px]" data-name="Overlay+Blur" />
        <ConvertFrom />
        <ArrowDivider />
        <ConvertTo />
        <TransactionDetails />
        <ActionButton />
      </div>
    </div>
  );
}

function MintInterfaceCard() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,18,13,0.6)] relative rounded-[24px] shrink-0 w-full" data-name="Mint Interface Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start p-[5px] relative w-full">
          <Tabs />
          <Overlay />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(74,222,128,0.15)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(6,78,59,0.2)]" />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[14px] tracking-[-0.36px] whitespace-nowrap">
        <p className="leading-[20px]"></p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-[719.59px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <Container55 />
        <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-white tracking-[-0.36px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
          <p className="leading-[28px]">Recent Activity</p>
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="relative shrink-0 w-[178.63px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-px py-[8px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[11.1px] whitespace-nowrap">
          <p className="leading-[16px]">TX HASH</p>
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="relative shrink-0 w-[182.3px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-px py-[8px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[10.9px] whitespace-nowrap">
          <p className="leading-[16px]">ACTION</p>
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="relative shrink-0 w-[196.08px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-px py-[8px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[9.4px] whitespace-nowrap">
          <p className="leading-[16px]">AMOUNT</p>
        </div>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="relative shrink-0 w-[162.59px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-px py-[8px] relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[11.6px] text-right whitespace-nowrap">
          <p className="leading-[16px]">TIME</p>
        </div>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Header → Row">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
    </div>
  );
}

function Data() {
  return (
    <div className="opacity-80 relative shrink-0 w-[178.63px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-px py-[12.5px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">0x7a...9f2</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-[rgba(16,185,129,0.1)] content-stretch flex items-start px-[9px] py-[2px] relative rounded-[4px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">MINT mUSD</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="relative shrink-0 w-[182.3px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-px py-[12.5px] relative w-full">
        <OverlayBorder2 />
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="relative shrink-0 w-[196.08px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-px py-[12.5px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d1d5db] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">$45,000.00</p>
        </div>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="relative shrink-0 w-[162.59px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-px py-[12.5px] relative w-full">
        <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">2 mins ago</p>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <Data />
      <Data1 />
      <Data2 />
      <Data3 />
    </div>
  );
}

function Data4() {
  return (
    <div className="opacity-80 relative shrink-0 w-[178.63px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-px py-[12.5px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">0x3c...1b4</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="bg-[rgba(249,115,22,0.1)] content-stretch flex items-start px-[9px] py-[2px] relative rounded-[4px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(249,115,22,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fb923c] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">REDEEM</p>
      </div>
    </div>
  );
}

function Data5() {
  return (
    <div className="relative shrink-0 w-[182.3px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-px py-[12.5px] relative w-full">
        <OverlayBorder3 />
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="relative shrink-0 w-[196.08px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-px py-[12.5px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d1d5db] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">$1,250.00</p>
        </div>
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="relative shrink-0 w-[162.59px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-px py-[12.5px] relative w-full">
        <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[20px]">15 mins ago</p>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <Data4 />
      <Data5 />
      <Data6 />
      <Data7 />
    </div>
  );
}

function Data8() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-80 px-px py-[12px] relative shrink-0 w-[178.63px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">0x9d...2e1</p>
      </div>
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="bg-[rgba(16,185,129,0.1)] content-stretch flex items-start px-[9px] py-[2px] relative rounded-[4px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(16,185,129,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#34d399] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">MINT mUSD</p>
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="content-stretch flex flex-col items-start px-px py-[12px] relative shrink-0 w-[182.3px]" data-name="Data">
      <OverlayBorder4 />
    </div>
  );
}

function Data10() {
  return (
    <div className="content-stretch flex flex-col items-start px-px py-[12px] relative shrink-0 w-[196.08px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d1d5db] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">$100,000.00</p>
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="content-stretch flex flex-col items-end px-px py-[12px] relative shrink-0 w-[162.59px]" data-name="Data">
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">1 hr ago</p>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] relative shrink-0 w-full" data-name="Row">
      <Data8 />
      <Data9 />
      <Data10 />
      <Data11 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] pb-px relative shrink-0 w-full" data-name="Body">
      <Row />
      <Row1 />
      <Row2 />
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 w-[719.59px]" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto pb-px relative w-full">
        <HeaderRow />
        <Body />
      </div>
    </div>
  );
}

function RecentActivityTableMockup() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(10,18,13,0.6)] relative rounded-[16px] shrink-0 w-full" data-name="Recent Activity Table Mockup">
      <div aria-hidden="true" className="absolute border border-[rgba(74,222,128,0.15)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.5)]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative w-full">
        <Heading2 />
        <Table />
      </div>
    </div>
  );
}

function SectionRightColumnInteractionInterface() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[952px] items-start left-[478.41px] top-[96px] w-[769.59px]" data-name="Section - Right Column: Interaction Interface (65">
      <MintInterfaceCard />
      <RecentActivityTableMockup />
    </div>
  );
}

function MainLayout() {
  return (
    <div className="h-[1096px] max-w-[1280px] relative shrink-0 w-full" data-name="Main Layout">
      <AsideLeftColumnContextStats />
      <SectionRightColumnInteractionInterface />
      <div className="absolute inset-[491.04px_-0.32px_-95.04px_0.32px] opacity-3" data-name="Grid Pattern" style={{ backgroundImage: "linear-gradient(rgb(74, 222, 128) 2.5%, rgba(74, 222, 128, 0) 2.5%), linear-gradient(90deg, rgb(74, 222, 128) 2.5%, rgba(74, 222, 128, 0) 2.5%)" }} />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">© 2026 Minted</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Font_Awesome_5_Brands:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]"></p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Font_Awesome_5_Brands:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]"></p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Font_Awesome_5_Brands:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]"></p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]"></p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Container">
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex h-[92px] items-center justify-between left-0 max-w-[1280px] px-[16px] py-[32px] top-px w-[1280px]" data-name="Container">
      <Container57 />
      <Container58 />
    </div>
  );
}

function FooterLogicForCantonLegal() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] h-[76px] relative shrink-0 w-full" data-name="Footer logic for Canton/Legal">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Container56 />
    </div>
  );
}

function AiToDesign() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 min-h-[800px] right-0 top-0" data-name="ai.to.design">
      <Navigation />
      <BodyPaints />
      <MainLayout />
      <FooterLogicForCantonLegal />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <AiToDesign />
    </div>
  );
}