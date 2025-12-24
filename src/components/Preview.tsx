
import React, { useEffect, useRef, useState } from 'react';

interface PreviewProps {
  htmlCode: string;
  onReset: () => void;
  onEdit: () => void;
  companyName: string;
}

const Preview: React.FC<PreviewProps> = ({ htmlCode, onReset, onEdit, companyName }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  useEffect(() => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(htmlCode);
        doc.close();
      }
    }
  }, [htmlCode]);

  const handleDownload = () => {
    const now = new Date();
    const timestamp = now.getFullYear() + 
                      String(now.getMonth() + 1).padStart(2, '0') + 
                      String(now.getDate()).padStart(2, '0') + 
                      String(now.getHours()).padStart(2, '0');
    
    // 파일명 형식: (회사명)_년월일시.html
    const cleanCompanyName = companyName.replace(/[^a-z0-9가-힣]/gi, '_').toLowerCase();
    const filename = `${cleanCompanyName || 'landing_page'}_${timestamp}.html`;
    
    const blob = new Blob([htmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full h-screen flex flex-col bg-gray-200 overflow-hidden font-sans">
      <header className="flex-none flex items-center justify-between px-8 py-4 bg-white border-b-8 border-black h-24 z-30 shadow-[0px_8px_0px_0px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-6">
          <button onClick={onEdit} className="bg-white border-4 border-black px-6 py-2 font-black text-sm uppercase shadow-brutalist hover:bg-gray-50 active:translate-y-1 active:shadow-brutalist-hover flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            EDIT PAGE
          </button>
          <div className="flex border-4 border-black bg-white shadow-brutalist p-1">
            <button onClick={() => setDevice('desktop')} className={`px-4 py-2 font-black text-xs uppercase transition-colors ${device === 'desktop' ? 'bg-main-blue text-white' : 'hover:bg-gray-100'}`}>DESKTOP</button>
            <button onClick={() => setDevice('tablet')} className={`px-4 py-2 font-black text-xs border-l-4 border-black uppercase transition-colors ${device === 'tablet' ? 'bg-main-blue text-white' : 'hover:bg-gray-100'}`}>TABLET</button>
            <button onClick={() => setDevice('mobile')} className={`px-4 py-2 font-black text-xs border-l-4 border-black uppercase transition-colors ${device === 'mobile' ? 'bg-main-blue text-white' : 'hover:bg-gray-100'}`}>MOBILE</button>
          </div>
        </div>

        <h1 className="text-2xl font-black bg-white border-4 border-black px-6 py-2 shadow-brutalist-hover uppercase italic">
          JJ Creative <span className="text-main-blue">WITH AI</span>
        </h1>

        <div className="flex gap-4">
          <button onClick={onReset} className="font-black text-sm uppercase underline decoration-main-blue decoration-4 underline-offset-4 hover:text-main-blue transition-colors">BACK HOME</button>
          <button onClick={handleDownload} className="px-8 py-3 bg-green-500 text-white border-4 border-black font-black text-sm uppercase shadow-brutalist hover:bg-green-600 active:translate-y-1 active:shadow-brutalist-hover tracking-widest">
            DOWNLOAD HTML
          </button>
        </div>
      </header>

      <div className="flex-1 bg-gray-100 flex justify-center items-center p-12 overflow-hidden">
        <div className={`${device === 'mobile' ? 'max-w-[375px]' : device === 'tablet' ? 'max-w-[768px]' : 'max-w-full'} w-full h-full bg-white border-8 border-black shadow-brutalist-lg transition-all duration-500 overflow-hidden relative`}>
          <iframe ref={iframeRef} className="w-full h-full border-0" sandbox="allow-scripts allow-same-origin" title="Landing Page Preview" />
        </div>
      </div>
    </div>
  );
};

export default Preview;
