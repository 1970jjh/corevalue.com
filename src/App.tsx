
import React, { useState, useCallback } from 'react';
import { AppStep, LandingPageStyle, UserRequirements } from './types';
import ApiKeyInput from './components/ApiKeyInput';
import StyleSelector from './components/StyleSelector';
import FeatureSelector from './components/FeatureSelector';
import DetailsForm from './components/DetailsForm';
import Preview from './components/Preview';
import { generateLandingPage } from './services/geminiService';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>(AppStep.API_KEY_INPUT);
  const [apiKey, setApiKey] = useState<string>('');
  const [selectedStyle, setSelectedStyle] = useState<LandingPageStyle | null>(null);
  const [selectedFeatureIds, setSelectedFeatureIds] = useState<string[]>([]);
  const [generatedCode, setGeneratedCode] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Persistent Form State
  const [requirements, setRequirements] = useState<UserRequirements>({
    companyName: '',
    homepageUrl: '',
    logoUrl: '',
    customStyleFiles: [],
    companyIntro: '',
    companyIntroFiles: [],
    missionIntro: '',
    missionIntroFiles: [],
    coreValueIntro: '',
    coreValueIntroFiles: [],
    workWayIntro: '',
    workWayIntroFiles: [],
    talentIntro: '',
    talentIntroFiles: [],
    guestbookRating: '10',
    guestbookComment: '',
    guestbookFiles: [],
    otherRequests: '',
    otherRequestsFiles: [],
    headerNavItems: '홈, 미션, 핵심가치, Work Way, 인재상, 방명록',
    uploadedFiles: [],
    selectedFeatureIds: [],
  });

  const handleApiKeySubmit = (key: string) => {
    setApiKey(key);
    setStep(AppStep.SELECT_STYLE);
  };

  const handleStyleSelect = (style: LandingPageStyle, customAssets?: { logoUrl?: string; homepageUrl?: string; customStyleFiles: any[] }) => {
    setSelectedStyle(style);
    if (customAssets) {
      setRequirements(prev => ({
        ...prev,
        logoUrl: customAssets.logoUrl || prev.logoUrl,
        homepageUrl: customAssets.homepageUrl || prev.homepageUrl,
        customStyleFiles: customAssets.customStyleFiles,
      }));
    }
    setStep(AppStep.SELECT_FEATURES);
  };

  const handleFeaturesSelect = (features: string[]) => {
    setSelectedFeatureIds(features);
    setStep(AppStep.INPUT_DETAILS);
  };

  const handleDetailsSubmit = useCallback(async (data: UserRequirements) => {
    if (!selectedStyle || !apiKey) return;

    setRequirements(data);
    setStep(AppStep.GENERATING);
    setIsGenerating(true);
    setError(null);

    const finalRequirements: UserRequirements = {
      ...data,
      selectedFeatureIds: selectedFeatureIds,
    };

    try {
      const code = await generateLandingPage(selectedStyle, finalRequirements, apiKey);
      setGeneratedCode(code);
      setStep(AppStep.PREVIEW);
    } catch (err) {
      console.error(err);
      setError('랜딩 페이지 생성 중 오류가 발생했습니다. API 키를 확인하고 다시 시도해주세요.');
      setStep(AppStep.INPUT_DETAILS);
    } finally {
      setIsGenerating(false);
    }
  }, [selectedStyle, selectedFeatureIds, apiKey]);

  const handleReset = () => {
    if (confirm('모든 입력 내용이 초기화됩니다. 홈으로 돌아가시겠습니까?')) {
      setStep(AppStep.SELECT_STYLE);
      setSelectedStyle(null);
      setSelectedFeatureIds([]);
      setGeneratedCode('');
      setError(null);
      setRequirements({
        companyName: '',
        homepageUrl: '',
        logoUrl: '',
        customStyleFiles: [],
        companyIntro: '',
        companyIntroFiles: [],
        missionIntro: '',
        missionIntroFiles: [],
        coreValueIntro: '',
        coreValueIntroFiles: [],
        workWayIntro: '',
        workWayIntroFiles: [],
        talentIntro: '',
        talentIntroFiles: [],
        guestbookRating: '10',
        guestbookComment: '',
        guestbookFiles: [],
        otherRequests: '',
        otherRequestsFiles: [],
        headerNavItems: '홈, 미션, 핵심가치, Work Way, 인재상, 방명록',
        uploadedFiles: [],
        selectedFeatureIds: [],
      });
    }
  };

  const getStepNumber = () => {
    switch (step) {
      case AppStep.SELECT_STYLE: return '1';
      case AppStep.SELECT_FEATURES: return '2';
      case AppStep.INPUT_DETAILS: return '3';
      case AppStep.GENERATING: return '4';
      default: return '0';
    }
  };

  if (step === AppStep.PREVIEW && generatedCode) {
    return (
      <Preview
        htmlCode={generatedCode}
        onReset={handleReset}
        onEdit={() => setStep(AppStep.INPUT_DETAILS)}
        companyName={requirements.companyName}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-black font-sans flex flex-col selection:bg-main-blue selection:text-white">
      <header className="border-b-4 border-black bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
          <div className="flex items-center gap-2 cursor-pointer z-20" onClick={() => step !== AppStep.API_KEY_INPUT && handleReset()}>
            <div className="w-10 h-10 bg-black border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_white]">
              <span className="text-white text-xs font-black">AI</span>
            </div>
            <span className="font-black text-xl tracking-tight hidden sm:block uppercase">핵심가치 내재화 AI</span>
          </div>

          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center whitespace-nowrap z-10">
             <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-black uppercase">
               JJ Creative <span className="text-main-blue">WITH AI</span>
             </h1>
          </div>

          <div className="z-20 flex items-center gap-4">
            {step !== AppStep.API_KEY_INPUT && (
              <div className="px-3 py-1 border-2 border-black bg-yellow-400 font-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Step {getStepNumber()} / 4
              </div>
            )}
            {step !== AppStep.API_KEY_INPUT && apiKey && (
              <div className="px-3 py-1 border-2 border-black bg-green-400 font-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                🔑 API 연결됨
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 pb-12 w-full">
        {step === AppStep.API_KEY_INPUT && (
          <div className="animate-fade-in-up">
            <ApiKeyInput
              initialApiKey={apiKey}
              onSubmit={handleApiKeySubmit}
            />
          </div>
        )}

        {step === AppStep.SELECT_STYLE && (
          <div className="animate-fade-in-up">
            <StyleSelector
              initialData={{ logoUrl: requirements.logoUrl, homepageUrl: requirements.homepageUrl, customFiles: requirements.customStyleFiles }}
              onSelect={handleStyleSelect}
            />
          </div>
        )}

        {step === AppStep.SELECT_FEATURES && (
          <div className="animate-fade-in-up">
            <FeatureSelector
              initialSelected={selectedFeatureIds}
              onNext={handleFeaturesSelect}
              onBack={() => setStep(AppStep.SELECT_STYLE)}
            />
          </div>
        )}

        {step === AppStep.INPUT_DETAILS && selectedStyle && (
          <div className="animate-fade-in-up">
            <DetailsForm
              selectedStyle={selectedStyle}
              initialData={requirements}
              onSubmit={handleDetailsSubmit}
              onBack={() => setStep(AppStep.SELECT_FEATURES)}
            />
          </div>
        )}

        {step === AppStep.GENERATING && (
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 animate-fade-in">
            <div className="relative w-32 h-32 mb-12">
              <div className="absolute inset-0 border-8 border-black shadow-brutalist bg-white animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-4xl animate-bounce">⚡</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase leading-none">
              기업의 가치를 <br/> 디자인하고 있습니다
            </h2>
            <p className="text-gray-700 max-w-md mx-auto mb-8 text-xl font-bold italic">
              AI가 3단계 제작 프로세스에 따라 <br/> 맞춤형 랜딩페이지를 구축 중입니다.
            </p>
          </div>
        )}
      </main>

      <footer className="py-8 text-center border-t-4 border-black bg-white mt-auto">
        <p className="text-black text-sm font-black uppercase tracking-widest">
          &copy; {new Date().getFullYear()} JJ Creative 교육연구소. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
};

export default App;
