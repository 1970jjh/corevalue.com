
import React, { useState, useEffect, useRef } from 'react';
import { ADDITIONAL_FEATURES } from '../constants';
import { FeatureItem } from '../types';

interface FeatureSelectorProps {
  initialSelected: string[];
  onNext: (selectedFeatures: string[]) => void;
  onBack: () => void;
}

// --- Live Demo Components ---

const DarkModeDemo = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={`w-full h-80 rounded-lg border-4 border-black transition-colors duration-500 flex flex-col items-center justify-center gap-6 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="text-center">
        <h4 className="text-2xl font-black uppercase mb-2">{isDark ? 'DARK MODE ON' : 'LIGHT MODE ON'}</h4>
        <p className="text-sm font-bold opacity-60">클릭하여 테마를 전환해보세요</p>
      </div>
      <button 
        onClick={() => setIsDark(!isDark)}
        className={`w-20 h-10 rounded-full border-4 border-black relative transition-colors ${isDark ? 'bg-main-blue' : 'bg-gray-200'}`}
      >
        <div className={`absolute top-1 w-6 h-6 rounded-full border-2 border-black transition-all ${isDark ? 'right-1 bg-white' : 'left-1 bg-black'}`}></div>
      </button>
      <div className="grid grid-cols-2 gap-4 w-64 mt-4">
        <div className={`h-12 border-2 border-current opacity-20 rounded ${isDark ? 'bg-white/10' : 'bg-black/5'}`}></div>
        <div className={`h-12 border-2 border-current opacity-20 rounded ${isDark ? 'bg-white/10' : 'bg-black/5'}`}></div>
      </div>
    </div>
  );
};

const ScrollytellingDemo = () => (
  <div className="w-full h-80 bg-white border-4 border-black rounded-lg overflow-y-auto p-10 flex flex-col items-center gap-32 scroll-smooth">
    <div className="text-center py-20">
      <p className="text-gray-400 font-black animate-bounce">↓ 아래로 스크롤 하세요</p>
    </div>
    <div className="transition-all duration-700 opacity-100 hover:scale-110">
      <h3 className="text-4xl font-black uppercase leading-none text-center">우리는<br/><span className="text-main-blue">도전</span>합니다</h3>
    </div>
    <div className="transition-all duration-700">
      <h3 className="text-4xl font-black uppercase leading-none text-center">우리는<br/><span className="text-deep-purple">혁신</span>합니다</h3>
    </div>
    <div className="transition-all duration-700 mb-20">
      <h3 className="text-4xl font-black uppercase leading-none text-center">우리는<br/><span className="text-yellow-500">성장</span>합니다</h3>
    </div>
    <div className="bg-black text-white px-6 py-3 font-black uppercase shadow-brutalist">Mission Accomplished</div>
  </div>
);

const ParallaxDemo = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  return (
    <div 
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setOffset({ x: (e.clientX - rect.left - rect.width/2)/20, y: (e.clientY - rect.top - rect.height/2)/20 });
      }}
      className="w-full h-80 bg-indigo-900 border-4 border-black rounded-lg relative overflow-hidden flex items-center justify-center cursor-move"
    >
      <div style={{ transform: `translate(${offset.x * 0.5}px, ${offset.y * 0.5}px)` }} className="absolute w-64 h-64 bg-indigo-800 rounded-full blur-3xl opacity-50"></div>
      <div style={{ transform: `translate(${offset.x * 2}px, ${offset.y * 2}px)` }} className="z-10 text-white text-6xl">🚀</div>
      <div style={{ transform: `translate(${-offset.x * 3}px, ${-offset.y * 3}px)` }} className="z-20 text-white text-3xl absolute top-10 left-10">✨</div>
      <div style={{ transform: `translate(${offset.x * 4}px, ${offset.y * 4}px)` }} className="z-20 text-white text-2xl absolute bottom-10 right-20">☄️</div>
      <p className="absolute bottom-4 text-white/30 text-[10px] font-black uppercase tracking-widest">마우스를 움직여 깊이감을 느껴보세요</p>
    </div>
  );
};

const TiltDemo = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  return (
    <div 
      className="w-full h-80 flex items-center justify-center bg-gray-100 border-4 border-black rounded-lg perspective-1000"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientY - rect.top - rect.height/2) / 10;
        const y = -(e.clientX - rect.left - rect.width/2) / 10;
        setRotate({ x, y });
      }}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
    >
      <div 
        style={{ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}
        className="w-48 h-64 bg-white border-4 border-black shadow-brutalist flex flex-col p-6 transition-transform duration-200 ease-out backface-hidden"
      >
        <div className="w-10 h-10 bg-main-blue mb-4"></div>
        <div className="h-4 bg-gray-200 w-full mb-2"></div>
        <div className="h-4 bg-gray-200 w-3/4 mb-auto"></div>
        <div className="mt-auto h-10 bg-black w-full flex items-center justify-center text-white font-black text-xs uppercase">3D CARD</div>
      </div>
      <style>{`.perspective-1000 { perspective: 1000px; }`}</style>
    </div>
  );
};

const KineticDemo = () => (
  <div className="w-full h-80 bg-white border-4 border-black rounded-lg flex flex-col justify-center overflow-hidden">
    <div className="flex whitespace-nowrap animate-marquee mb-4">
      <span className="text-6xl font-black uppercase italic mr-10 text-main-blue">JJ CREATIVE LAB •</span>
      <span className="text-6xl font-black uppercase italic mr-10 text-main-blue">JJ CREATIVE LAB •</span>
    </div>
    <div className="flex whitespace-nowrap animate-marquee-reverse">
      <span className="text-6xl font-black uppercase italic mr-10 stroke-text outline-black text-transparent border-black">CORE VALUES •</span>
      <span className="text-6xl font-black uppercase italic mr-10 stroke-text outline-black text-transparent border-black">CORE VALUES •</span>
    </div>
    <style>{`
      @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      @keyframes marquee-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
      .animate-marquee { animation: marquee 10s linear infinite; }
      .animate-marquee-reverse { animation: marquee-reverse 10s linear infinite; }
      .stroke-text { -webkit-text-stroke: 2px black; }
    `}</style>
  </div>
);

const HorizontalScrollDemo = () => (
  <div className="w-full h-80 bg-gray-50 border-4 border-black rounded-lg overflow-x-auto overflow-y-hidden flex items-center p-10 gap-10 snap-x">
    {[1, 2, 3, 4, 5].map(i => (
      <div key={i} className="min-w-[200px] h-48 bg-white border-4 border-black shadow-brutalist flex flex-col items-center justify-center snap-center">
        <span className="text-5xl mb-4">{['💡', '🔥', '🚀', '🌈', '💎'][i-1]}</span>
        <span className="font-black uppercase text-xs">Section 0{i}</span>
      </div>
    ))}
    <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase text-gray-400">옆으로 넘겨보세요 →</p>
  </div>
);

const MorphingDemo = () => (
  <div className="flex items-center justify-center w-full h-80 bg-black rounded-lg overflow-hidden border-4 border-black shadow-inner">
    <div className="w-40 h-40 bg-main-blue animate-[morph_4s_ease-in-out_infinite] border-4 border-white shadow-2xl"></div>
    <style>{`
      @keyframes morph {
        0%, 100% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; transform: rotate(0deg) scale(1); }
        34% { border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%; transform: rotate(120deg) scale(1.1); }
        67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; transform: rotate(240deg) scale(0.9); }
      }
    `}</style>
  </div>
);

const MagneticDemo = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    if (distance < 150) setPos({ x: distanceX * 0.45, y: distanceY * 0.45 });
    else setPos({ x: 0, y: 0 });
  };
  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={() => setPos({ x: 0, y: 0 })} className="flex flex-col items-center justify-center w-full h-80 bg-gray-50 rounded-lg border-4 border-black relative cursor-crosshair overflow-hidden">
      <div style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }} className="px-10 py-6 bg-main-blue text-white font-black text-xl border-4 border-black shadow-brutalist pointer-events-none transition-transform duration-100">
        PULL ME! 🧲
      </div>
    </div>
  );
};

const CustomCursorDemo = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div onMouseMove={(e) => { const rect = e.currentTarget.getBoundingClientRect(); setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top }); }} className="w-full h-80 bg-black rounded-lg relative overflow-hidden cursor-none flex flex-col items-center justify-center">
      <div style={{ left: pos.x, top: pos.y }} className={`absolute w-12 h-12 border-4 border-main-blue rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 mix-blend-screen z-50 flex items-center justify-center ${isHovering ? 'scale-[2.5] bg-main-blue/40 border-white' : 'scale-100'}`}><div className="w-1 h-1 bg-white rounded-full"></div></div>
      <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="px-8 py-4 border-4 border-white text-white font-black text-xl uppercase hover:bg-white hover:text-black transition-all">TOUCH THE LIGHT 🔦</div>
    </div>
  );
};

const SkeletonDemo = () => (
  <div className="w-full h-80 bg-white rounded-lg p-8 flex flex-col gap-6 border-4 border-black shadow-brutalist overflow-hidden">
    <div className="flex gap-6 items-center">
      <div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse"></div>
      <div className="flex flex-col gap-3 flex-1">
        <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse"></div>
        <div className="h-4 bg-gray-100 rounded w-1/3 animate-pulse"></div>
      </div>
    </div>
    <div className="h-40 bg-gray-200 rounded w-full animate-pulse relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
    </div>
    <style>{`@keyframes shimmer { 100% { transform: translateX(100%); } }`}</style>
  </div>
);

// --- End of Demo Components ---

const FeatureCard: React.FC<{ 
  feature: FeatureItem; 
  isSelected: boolean; 
  onToggle: (id: string) => void;
  onShowDetail: (feature: FeatureItem) => void;
}> = ({ feature, isSelected, onToggle, onShowDetail }) => (
  <div 
    className={`group border-4 border-black transition-all flex flex-col h-full relative ${isSelected ? 'bg-main-blue text-white shadow-brutalist-lg -translate-y-2' : 'bg-white text-black shadow-brutalist hover:shadow-brutalist-lg'}`}
  >
    <div className="p-6 pb-0 flex justify-between items-start">
      <div className="flex flex-col gap-1">
        <span className={`text-[10px] font-black uppercase px-2 py-0.5 border-2 border-black inline-block w-fit ${isSelected ? 'bg-white text-black' : 'bg-yellow-300'}`}>
          {feature.category}
        </span>
        <h3 className="font-black text-2xl uppercase tracking-tighter leading-tight mt-1">{feature.name}</h3>
      </div>
      <button 
        onClick={(e) => { e.stopPropagation(); onToggle(feature.id); }}
        className={`w-12 h-12 border-4 border-black flex items-center justify-center transition-all ${isSelected ? 'bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'bg-gray-100 hover:bg-main-blue/10'}`}
      >
        {isSelected && <span className="text-black font-black text-2xl">✔</span>}
      </button>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <p className={`text-sm font-bold italic mb-6 leading-snug flex-1 ${isSelected ? 'text-blue-100' : 'text-gray-600'}`}>
        {feature.description}
      </p>
      <button 
        onClick={(e) => { e.stopPropagation(); onShowDetail(feature); }}
        className={`w-full py-4 border-4 border-black font-black text-lg uppercase transition-all flex items-center justify-center gap-2 mb-2 ${isSelected ? 'bg-white text-black shadow-brutalist-hover' : 'bg-black text-white shadow-brutalist hover:bg-main-blue'}`}
      >
        <span>👀 LIVE DEMO 확인</span>
      </button>
    </div>
  </div>
);

const FeatureSelector: React.FC<FeatureSelectorProps> = ({ initialSelected, onNext, onBack }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(initialSelected);
  const [detailFeature, setDetailFeature] = useState<FeatureItem | null>(null);

  const toggle = (id: string) => setSelectedIds(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);

  const renderDemo = (featureId: string) => {
    switch (featureId) {
      case 'dark-mode': return <DarkModeDemo />;
      case 'scrollytelling': return <ScrollytellingDemo />;
      case 'parallax-scrolling': return <ParallaxDemo />;
      case '3d-tilt': return <TiltDemo />;
      case 'kinetic-typography': return <KineticDemo />;
      case 'horizontal-scroll': return <HorizontalScrollDemo />;
      case 'morphing-effects': return <MorphingDemo />;
      case 'magnetic-buttons': return <MagneticDemo />;
      case 'custom-cursor': return <CustomCursorDemo />;
      case 'skeleton-loading': return <SkeletonDemo />;
      default: return <div className="p-10 text-center font-black uppercase text-gray-400">Demo Not Available</div>;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-6">
           <div className="w-14 h-14 bg-deep-purple border-4 border-black flex items-center justify-center font-black text-white text-3xl shadow-brutalist">2</div>
           <h2 className="text-5xl font-black mb-2 uppercase italic leading-none">인터랙티브 기능 선택 [STEP 02]</h2>
        </div>
        <div className="bg-white border-4 border-black px-10 py-5 shadow-brutalist inline-block">
          <p className="text-xl font-bold text-gray-800 italic">사용자의 몰입감을 극대화할 수 있는 10가지 프리미엄 인터랙션을 확인하고 선택하세요.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-40">
        {ADDITIONAL_FEATURES.map(f => (
          <FeatureCard key={f.id} feature={f} isSelected={selectedIds.includes(f.id)} onToggle={toggle} onShowDetail={setDetailFeature} />
        ))}
      </div>

      {detailFeature && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-xl animate-fade-in" onClick={() => setDetailFeature(null)}>
          <div className="bg-white border-[10px] border-black max-w-5xl w-full flex flex-col shadow-[25px_25px_0px_0px_rgba(37,99,235,1)] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="bg-black text-white px-10 py-6 flex justify-between items-center border-b-8 border-black">
               <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  <h2 className="text-3xl font-black uppercase italic tracking-tighter">LIVE CODE SIMULATION</h2>
               </div>
               <button onClick={() => setDetailFeature(null)} className="font-black text-2xl hover:text-red-500 transition-colors border-4 border-white px-6 py-2 hover:bg-white hover:text-black hover:border-black">[CLOSE X]</button>
            </div>
            <div className="flex flex-col md:flex-row min-h-[500px]">
               <div className="w-full md:w-3/5 bg-gray-200 border-b-8 md:border-b-0 md:border-r-8 border-black p-10 flex items-center justify-center relative">
                  <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 font-black text-xs uppercase shadow-brutalist z-10">Live Environment</div>
                  <div className="w-full max-w-md scale-110 md:scale-125">{renderDemo(detailFeature.id)}</div>
               </div>
               <div className="w-full md:w-2/5 p-12 flex flex-col justify-center bg-white">
                  <span className="text-main-blue font-black uppercase tracking-widest text-sm mb-2">{detailFeature.category}</span>
                  <h3 className="text-5xl font-black mb-6 uppercase italic leading-none">{detailFeature.name}</h3>
                  <div className="h-3 w-24 bg-main-blue mb-10"></div>
                  <p className="text-2xl font-bold text-gray-800 italic leading-snug mb-10">"{detailFeature.description}"</p>
                  <div className="bg-gray-50 border-4 border-black p-8 shadow-brutalist mb-12">
                    <h4 className="text-xs font-black uppercase text-gray-400 mb-4 tracking-widest">💡 How it works in AI</h4>
                    <p className="text-sm font-bold text-gray-700 leading-relaxed italic">{detailFeature.promptModifier}</p>
                  </div>
                  <div className="flex gap-6">
                    <button onClick={() => { if (!selectedIds.includes(detailFeature.id)) toggle(detailFeature.id); setDetailFeature(null); }} className={`flex-[3] py-6 font-black text-2xl border-4 border-black shadow-brutalist uppercase tracking-tighter transition-all active:translate-y-2 active:shadow-none ${selectedIds.includes(detailFeature.id) ? 'bg-gray-100 text-gray-400' : 'bg-main-blue text-white hover:bg-blue-700'}`}>
                      {selectedIds.includes(detailFeature.id) ? '이미 선택됨' : '기능 추가하기'}
                    </button>
                    <button onClick={() => setDetailFeature(null)} className="flex-1 py-6 bg-white text-black font-black text-lg border-4 border-black shadow-brutalist hover:bg-gray-100 transition-colors uppercase">취소</button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 p-8 bg-white border-t-[10px] border-black flex flex-col md:flex-row justify-between items-center z-50 shadow-[0px_-20px_40px_rgba(0,0,0,0.1)]">
        <div className="mb-6 md:mb-0">
          <div className="bg-yellow-300 border-4 border-black px-12 py-4 rotate-[-1deg] shadow-brutalist flex items-center gap-6">
            <span className="text-4xl font-black uppercase italic tracking-tighter">{selectedIds.length} <span className="text-xl">SELECTED</span></span>
          </div>
        </div>
        <div className="flex gap-6 w-full md:w-auto">
          <button onClick={onBack} className="flex-1 md:flex-none px-12 py-6 bg-white text-black font-black text-xl border-4 border-black shadow-brutalist uppercase hover:bg-gray-50 transition-all active:translate-y-1">PREVIOUS STEP</button>
          <button onClick={() => onNext(selectedIds)} className="flex-[2] md:flex-none px-24 py-6 bg-main-blue text-white font-black text-3xl border-4 border-black shadow-brutalist-lg uppercase hover:bg-blue-700 transition-all active:translate-y-2 tracking-widest">NEXT: INPUT DETAILS</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureSelector;
