
import React, { useState, useRef } from 'react';
import { LandingPageStyle, UserRequirements, UploadedFile } from '../types';

interface DetailsFormProps {
  selectedStyle: LandingPageStyle;
  initialData: UserRequirements;
  onSubmit: (data: UserRequirements) => void;
  onBack: () => void;
}

const DetailsForm: React.FC<DetailsFormProps> = ({ selectedStyle, initialData, onSubmit, onBack }) => {
  const [formData, setFormData] = useState<UserRequirements>(initialData);
  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const readFileAsBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve((reader.result as string).split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof UserRequirements) => {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files) as File[];
    const processed: UploadedFile[] = [];
    for (const f of newFiles) {
      const base64 = await readFileAsBase64(f);
      processed.push({ name: f.name, mimeType: f.type, data: base64 });
    }
    setFormData(prev => ({
      ...prev,
      [fieldName]: [...(prev[fieldName] as UploadedFile[]), ...processed]
    }));
  };

  const Section = ({ title, subtitle, name, fileFieldName, placeholder, isRequired = false, children }: any) => (
    <div className="bg-white border-4 border-black p-8 mb-10 shadow-brutalist relative">
      <div className="absolute -top-4 -left-4 bg-black text-white px-3 py-1 font-black text-xs uppercase shadow-brutalist-hover">SECTION</div>
      <label className="block text-2xl font-black text-black mb-2 uppercase tracking-tighter leading-none italic">
        {title} {isRequired && <span className="text-red-600">*</span>}
      </label>
      {subtitle && <p className="text-sm font-bold text-gray-500 mb-6 italic">{subtitle}</p>}
      
      {children ? children : (
        <textarea
          name={name}
          value={(formData as any)[name]}
          onChange={handleChange}
          rows={5}
          placeholder={placeholder}
          className="w-full bg-gray-50 border-4 border-black px-6 py-4 text-black font-bold focus:bg-white focus:outline-none transition-all placeholder:text-gray-400 mb-4"
          required={isRequired}
        />
      )}

      {fileFieldName && (
        <div className="flex flex-col gap-2">
          <div 
            onClick={() => fileInputRefs.current[fileFieldName]?.click()}
            className="inline-flex items-center gap-2 cursor-pointer bg-white border-2 border-black px-4 py-2 text-xs font-black uppercase hover:bg-gray-100 shadow-brutalist-hover w-fit transition-all active:translate-y-1 active:shadow-none"
          >
            <input 
              type="file" 
              multiple 
              accept="image/*,.pdf"
              ref={el => { fileInputRefs.current[fileFieldName] = el; }} 
              onChange={(e) => handleFileUpload(e, fileFieldName)} 
              className="hidden" 
            />
            <span className="flex items-center gap-2">📁 파일 첨부 (PDF/이미지)</span>
          </div>
          
          {(formData[fileFieldName as keyof UserRequirements] as UploadedFile[]).length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {(formData[fileFieldName as keyof UserRequirements] as UploadedFile[]).map((f, i) => (
                <span key={i} className="text-[10px] bg-black text-white font-black px-2 py-1 border border-black shadow-brutalist-hover uppercase tracking-tighter flex items-center gap-1">
                  {f.name.endsWith('.pdf') ? '📄' : '🖼️'} {f.name}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16">
      <div className="mb-16 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-14 h-14 bg-yellow-400 border-4 border-black flex items-center justify-center font-black text-black text-3xl shadow-brutalist">3</div>
          <h2 className="text-5xl font-black text-black uppercase italic leading-none">상세 내용 입력 [FINISH]</h2>
        </div>
        <p className="text-xl font-bold text-gray-700 bg-white border-2 border-black inline-block px-8 py-2 shadow-brutalist-hover">
          기업의 핵심가치와 일하는 방식에 대한 구체적인 정보를 입력해주세요.
        </p>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }}>
        <div className="bg-white border-4 border-black p-10 mb-12 shadow-brutalist-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-main-blue transform translate-x-16 -translate-y-16 rotate-45 border-b-4 border-black"></div>
          <h3 className="text-3xl font-black text-black mb-10 uppercase italic decoration-main-blue underline decoration-8 underline-offset-8">A) 기업 기본 정보</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <label className="block text-lg font-black text-black mb-3 uppercase">회사명 (필수) <span className="text-red-600">*</span></label>
              <input 
                type="text" name="companyName" value={formData.companyName} onChange={handleChange} 
                className="w-full bg-gray-50 border-4 border-black px-6 py-4 text-black font-black focus:bg-white focus:outline-none shadow-brutalist-hover" required 
              />
            </div>
            <div>
              <label className="block text-lg font-black text-black mb-3 uppercase">홈페이지 링크 (선택)</label>
              <input 
                type="text" name="homepageUrl" value={formData.homepageUrl} onChange={handleChange} 
                className="w-full bg-gray-50 border-4 border-black px-6 py-4 text-black font-black focus:bg-white focus:outline-none shadow-brutalist-hover" 
              />
            </div>
          </div>
        </div>

        <Section title="B) 회사 소개" name="companyIntro" fileFieldName="companyIntroFiles" placeholder="비전, 역사, 주요 사업..." />
        <Section title="C) 미션" name="missionIntro" fileFieldName="missionIntroFiles" placeholder="존재 이유와 사명..." />
        <Section title="D) 핵심가치" name="coreValueIntro" fileFieldName="coreValueIntroFiles" placeholder="신뢰, 도전, 혁신..." />
        <Section title="E) Work Way" name="workWayIntro" fileFieldName="workWayIntroFiles" placeholder="일하는 방식, 협업 문화..." />
        <Section title="F) 인재상" name="talentIntro" fileFieldName="talentIntroFiles" placeholder="선호하는 동료의 모습..." />
        
        {/* Guestbook Section */}
        <Section 
          title="G) 방명록" 
          subtitle="사용자의 소중한 의견을 담을 섹션을 구성합니다." 
          fileFieldName="guestbookFiles"
        >
          <div className="space-y-6 mb-6">
            <div>
              <label className="block text-lg font-black text-black mb-4 uppercase tracking-tight italic italic">사이트 사용에 대한 점수를 준다면? (1~10점)</label>
              <div className="flex gap-2 flex-wrap">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setFormData(p => ({ ...p, guestbookRating: val.toString() }))}
                    className={`w-12 h-12 border-4 border-black font-black transition-all text-xl ${formData.guestbookRating === val.toString() ? 'bg-main-blue text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-1' : 'bg-white text-black hover:bg-gray-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'}`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-lg font-black text-black mb-4 uppercase tracking-tight italic">사용 소감을 남겨주세요</label>
              <textarea
                name="guestbookComment"
                value={formData.guestbookComment}
                onChange={handleChange}
                rows={4}
                placeholder="예: 우리 회사의 가치를 한눈에 볼 수 있어 너무 좋습니다! 디자인이 혁신적이네요."
                className="w-full bg-gray-50 border-4 border-black px-6 py-4 text-black font-bold focus:bg-white focus:outline-none transition-all placeholder:text-gray-400"
              />
            </div>
          </div>
        </Section>

        <Section title="H) 추가 요청사항" name="otherRequests" fileFieldName="otherRequestsFiles" placeholder="디자인 톤앤매너 등 자유롭게 작성..." />

        <div className="bg-white border-4 border-black p-10 mb-16 shadow-brutalist relative">
          <div className="absolute -top-4 -left-4 bg-deep-purple text-white px-3 py-1 font-black text-xs uppercase shadow-brutalist-hover">GLOBAL STORAGE</div>
          <label className="block text-2xl font-black text-black mb-6 uppercase italic tracking-tighter leading-none">I) 기타 전체 참고자료 업로드 (최대 20개)</label>
          <div 
            onClick={() => fileInputRefs.current['refs']?.click()}
            className="border-4 border-dashed border-black bg-gray-50 p-12 text-center hover:bg-main-blue/5 cursor-pointer transition-all group"
          >
            <input type="file" multiple ref={el => { fileInputRefs.current['refs'] = el; }} onChange={(e) => handleFileUpload(e, 'uploadedFiles')} className="hidden" />
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">📂</div>
            <p className="font-black text-gray-700 uppercase">참고 자료를 업로드하세요</p>
          </div>
        </div>

        <div className="bg-yellow-100 border-4 border-black p-8 mb-20 shadow-brutalist relative">
          <div className="absolute -top-4 -left-4 bg-black text-white px-3 py-1 font-black text-xs uppercase shadow-brutalist-hover">NAVIGATION</div>
          <label className="block text-lg font-black text-black mb-4 uppercase">상단 메뉴 구성 (쉼표로 구분)</label>
          <input 
            type="text" name="headerNavItems" value={formData.headerNavItems} onChange={handleChange} 
            className="w-full bg-white border-4 border-black px-6 py-4 text-black font-black focus:outline-none shadow-brutalist-hover" 
          />
        </div>

        <div className="flex flex-col md:flex-row gap-8 sticky bottom-10 z-40 p-2">
          <button type="button" onClick={onBack} className="flex-1 py-6 bg-white border-4 border-black text-black font-black text-xl shadow-brutalist-lg hover:bg-gray-50 transition-all uppercase tracking-widest active:translate-y-1 active:shadow-brutalist">GO BACK</button>
          <button type="submit" className="flex-[2] py-6 bg-main-blue text-white font-black text-2xl border-4 border-black shadow-brutalist-lg hover:bg-blue-700 transition-all uppercase tracking-widest active:translate-y-1 active:shadow-brutalist">GENERATE LANDING PAGE</button>
        </div>
      </form>
    </div>
  );
};

export default DetailsForm;
