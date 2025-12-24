
import React, { useState, useEffect, useRef } from 'react';
import { LANDING_PAGE_STYLES } from '../constants';
import { LandingPageStyle, UploadedFile } from '../types';

interface StyleSelectorProps {
  initialData: { logoUrl?: string; homepageUrl?: string; customFiles: UploadedFile[] };
  onSelect: (style: LandingPageStyle, customAssets: { logoUrl?: string; homepageUrl?: string; customStyleFiles: UploadedFile[] }) => void;
}

const StyleSelector: React.FC<StyleSelectorProps> = ({ initialData, onSelect }) => {
  const [previewStyle, setPreviewStyle] = useState<LandingPageStyle | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Custom Style State
  const [logoUrl, setLogoUrl] = useState(initialData.logoUrl || '');
  const [homepageUrl, setHomepageUrl] = useState(initialData.homepageUrl || '');
  const [customStyleFiles, setCustomStyleFiles] = useState<UploadedFile[]>(initialData.customFiles || []);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (previewStyle) {
      setCurrentImageIndex(0);
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % previewStyle.sampleImages.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [previewStyle]);

  const handleConfirmSelect = () => {
    if (previewStyle) {
      onSelect(previewStyle, { logoUrl, homepageUrl, customStyleFiles });
      setPreviewStyle(null);
    }
  };

  const readFileAsBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve((reader.result as string).split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files) as File[];
    if (customStyleFiles.length + newFiles.length > 10) {
      alert('커스텀 스타일 이미지는 최대 10개까지 가능합니다.');
      return;
    }
    const processed: UploadedFile[] = [];
    for (const f of newFiles) {
      const base64 = await readFileAsBase64(f);
      processed.push({ name: f.name, mimeType: f.type, data: base64 });
    }
    setCustomStyleFiles(prev => [...prev, ...processed]);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/600x400/000/FFF?text=Image+Unavailable";
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 relative">
      {/* Introduction Header */}
      <div className="mb-16 text-center">
        <h2 className="text-5xl md:text-6xl font-black text-black mb-6 leading-none uppercase italic">
          우리 회사 핵심가치 내재화 <br/> <span className="text-main-blue">3단계 AI 제작 프로세스</span>
        </h2>
        <div className="bg-white border-4 border-black p-6 shadow-brutalist inline-block">
           <p className="text-xl font-bold text-gray-800">
             기업의 가치를 시각화하고 구성원의 공감을 이끌어내는 맞춤형 페이지
           </p>
        </div>
      </div>

      {/* Usage Guide Section */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-3xl font-black uppercase tracking-tighter italic">App Usage Guide / 사용 방법</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white border-4 border-black p-6 shadow-brutalist hover:shadow-brutalist-lg transition-all">
              <div className="w-10 h-10 bg-main-blue text-white flex items-center justify-center font-black text-xl border-2 border-black mb-4">1</div>
              <h4 className="font-black text-lg mb-2 uppercase tracking-tighter italic">1) 브랜드 스타일 정의</h4>
              <p className="text-sm font-bold text-gray-600 leading-snug">기업의 로고, 홈페이지 URL, 디자인 가이드를 업로드하고 36가지 테마 중 하나를 선택하여 기본 뼈대를 구성합니다.</p>
           </div>
           <div className="bg-white border-4 border-black p-6 shadow-brutalist hover:shadow-brutalist-lg transition-all">
              <div className="w-10 h-10 bg-deep-purple text-white flex items-center justify-center font-black text-xl border-2 border-black mb-4">2</div>
              <h4 className="font-black text-lg mb-2 uppercase tracking-tighter italic">2) 인터랙티브 기능 선택</h4>
              <p className="text-sm font-bold text-gray-600 leading-snug">다크모드 토글, 스크롤 애니메이션, 마우스 효과 등 구성원의 몰입을 돕는 인터랙션 요소를 자유롭게 추가합니다.</p>
           </div>
           <div className="bg-white border-4 border-black p-6 shadow-brutalist hover:shadow-brutalist-lg transition-all">
              <div className="w-10 h-10 bg-yellow-400 text-black flex items-center justify-center font-black text-xl border-2 border-black mb-4">3</div>
              <h4 className="font-black text-lg mb-2 uppercase tracking-tighter italic">3) 상세 가치 입력 및 생성</h4>
              <p className="text-sm font-bold text-gray-600 leading-snug">회사의 미션, 비전, 핵심가치 등을 텍스트로 입력하면 AI가 맥락을 분석하여 고퀄리티 페이지를 자동 완성합니다.</p>
           </div>
        </div>
      </div>

      {/* Result & Usage Info Section */}
      <div className="mb-20 bg-black text-white p-8 border-4 border-black shadow-brutalist relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h3 className="text-3xl font-black mb-4 uppercase italic">Final Output: <span className="text-main-blue">결과물 및 활용 방안</span></h3>
            <ul className="space-y-3 text-lg font-bold">
              <li className="flex items-start gap-2"><span className="text-main-blue">✔</span> 모든 리소스가 포함된 <span className="underline decoration-main-blue decoration-4 underline-offset-4 italic">단일 HTML 파일</span>이 즉시 제공됩니다.</li>
              <li className="flex items-start gap-2"><span className="text-main-blue">✔</span> 사내 인트라넷, 슬랙/메신저 공유, 신규 입사자 교육용 페이지로 즉시 활용 가능합니다.</li>
              <li className="flex items-start gap-2"><span className="text-main-blue">✔</span> 구성원들이 언제든 접속하여 기업 가치를 되새길 수 있는 '가치 전용 포털' 역할을 수행합니다.</li>
            </ul>
          </div>
          <div className="flex-none bg-main-blue border-4 border-white px-8 py-4 rotate-3 shadow-brutalist-hover font-black text-2xl uppercase italic">
            VALUE IN ACTION
          </div>
        </div>
      </div>

      {/* 1. Custom Style Input Section */}
      <div className="mb-20 bg-white border-4 border-black p-8 shadow-brutalist-lg relative">
        <div className="absolute -top-4 -left-4 bg-black text-white px-4 py-2 font-black uppercase text-sm shadow-brutalist-hover z-10">Step 01.1</div>
        <div className="flex items-center gap-4 mb-8 mt-2">
          <h3 className="text-3xl font-black uppercase tracking-tighter italic">브랜드 커스텀 스타일 설정</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div>
            <label className="block text-lg font-black mb-3 uppercase tracking-tight italic">회사 홈페이지 링크 (선택)</label>
            <input 
              type="text"
              value={homepageUrl}
              onChange={(e) => setHomepageUrl(e.target.value)}
              placeholder="https://company.com"
              className="w-full bg-gray-50 border-4 border-black px-4 py-4 text-black font-bold focus:bg-white focus:outline-none shadow-brutalist-hover transition-all"
            />
          </div>
          <div>
            <label className="block text-lg font-black mb-3 uppercase tracking-tight italic">로고 이미지 URL (선택)</label>
            <input 
              type="text"
              value={logoUrl}
              onChange={(e) => setLogoUrl(e.target.value)}
              placeholder="https://company.com/logo.png"
              className="w-full bg-gray-50 border-4 border-black px-4 py-4 text-black font-bold focus:bg-white focus:outline-none shadow-brutalist-hover transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-lg font-black mb-4 uppercase tracking-tight italic">디자인 참고 이미지 업로드 (최대 10개)</label>
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-4 border-dashed border-black bg-gray-50 p-10 hover:bg-yellow-50 cursor-pointer transition-all text-center relative group"
          >
            <input type="file" multiple ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📁</div>
            <p className="font-black text-gray-700 uppercase tracking-tighter">클릭하여 기업 전용 컬러, 서체, 디자인 가이드 이미지를 업로드하세요</p>
            {customStyleFiles.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                {customStyleFiles.map((f, i) => (
                  <span key={i} className="text-xs bg-main-blue text-white font-black px-3 py-1 border-2 border-black shadow-brutalist-hover uppercase tracking-tighter">{f.name}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. Design Style Selection Section */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-10 relative">
          <div className="absolute -top-12 -left-4 bg-deep-purple text-white px-4 py-2 font-black uppercase text-sm shadow-brutalist-hover z-10">Step 01.2</div>
          <h3 className="text-3xl font-black uppercase tracking-tighter italic">기본 디자인 테마 선택 (36개)</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {LANDING_PAGE_STYLES.map((style) => (
            <div
              key={style.id}
              onClick={() => setPreviewStyle(style)}
              className="group cursor-pointer bg-white border-4 border-black overflow-hidden hover:shadow-brutalist-lg transition-all transform hover:-translate-y-2 active:translate-y-0 active:shadow-brutalist shadow-brutalist"
            >
              <div className="h-48 overflow-hidden relative border-b-4 border-black">
                <img 
                  src={style.imageUrl} 
                  alt={style.name} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" 
                  onError={handleImageError} 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 font-black text-[10px] uppercase shadow-brutalist-hover">PREVIEW</div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-black text-xl mb-2 uppercase leading-tight tracking-tighter">{style.name}</h3>
                <p className="text-sm text-gray-600 font-bold line-clamp-2 italic leading-snug">{style.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL POPUP */}
      {previewStyle && (
        <div 
          className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          onClick={() => setPreviewStyle(null)}
        >
           <div 
             className="bg-white border-8 border-black max-w-6xl w-full max-h-[90vh] flex flex-col shadow-[20px_20px_0px_0px_rgba(37,99,235,1)] overflow-hidden animate-scale-up"
             onClick={(e) => e.stopPropagation()}
           >
              {/* Header */}
              <div className="bg-black text-white px-6 py-5 flex items-center justify-between flex-none border-b-4 border-black">
                <div className="font-black text-xl uppercase tracking-widest italic flex items-center gap-3">
                  <span className="w-5 h-5 bg-main-blue animate-pulse"></span>
                  {previewStyle.name} 스타일 분석 리포트
                </div>
                <button onClick={() => setPreviewStyle(null)} className="font-black text-xl hover:text-red-500 transition-colors uppercase border-2 border-white px-4 py-1 hover:bg-white hover:border-black">[닫기 X]</button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto flex flex-col md:flex-row">
                 {/* Visual Preview Section */}
                 <div className="w-full md:w-3/5 min-h-[350px] md:h-full bg-gray-100 relative overflow-hidden flex items-center justify-center p-6 md:p-10 border-b-8 md:border-b-0 md:border-r-8 border-black">
                    <img 
                      src={previewStyle.sampleImages[currentImageIndex] || previewStyle.imageUrl} 
                      className="w-full h-full object-cover border-4 border-black shadow-brutalist-lg" 
                      onError={handleImageError} 
                      referrerPolicy="no-referrer"
                    />
                 </div>

                 {/* Information Section */}
                 <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col bg-white">
                    <h2 className="text-5xl font-black text-black mb-4 uppercase italic leading-none">{previewStyle.name}</h2>
                    <p className="text-xl font-bold text-gray-700 mb-8 leading-relaxed italic border-l-8 border-main-blue pl-6">{previewStyle.description}</p>
                    
                    <div className="mt-auto grid grid-cols-1 gap-4">
                       <button 
                         onClick={handleConfirmSelect} 
                         className="w-full py-6 bg-main-blue text-white font-black text-2xl border-4 border-black shadow-brutalist hover:bg-blue-700 transition-all uppercase tracking-widest active:translate-y-2 active:shadow-none"
                       >
                         이 스타일로 시작하기
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default StyleSelector;
