
import React, { useState } from 'react';

interface ApiKeyInputProps {
  initialApiKey: string;
  onSubmit: (apiKey: string) => void;
}

const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ initialApiKey, onSubmit }) => {
  const [apiKey, setApiKey] = useState(initialApiKey);
  const [showKey, setShowKey] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      onSubmit(apiKey.trim());
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16">
      <div className="mb-16 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-14 h-14 bg-black border-4 border-black flex items-center justify-center font-black text-white text-3xl shadow-brutalist">0</div>
          <h2 className="text-5xl font-black text-black uppercase italic leading-none">API KEY 설정</h2>
        </div>
        <p className="text-xl font-bold text-gray-700 bg-white border-2 border-black inline-block px-8 py-2 shadow-brutalist-hover">
          Google Gemini API 키를 입력해주세요
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white border-4 border-black p-10 mb-12 shadow-brutalist-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-deep-purple transform translate-x-16 -translate-y-16 rotate-45 border-b-4 border-black"></div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🔑</span>
              <label className="text-2xl font-black text-black uppercase tracking-tighter">
                Gemini API Key
              </label>
            </div>

            <div className="relative">
              <input
                type={showKey ? 'text' : 'password'}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full bg-gray-50 border-4 border-black px-6 py-4 pr-24 text-black font-mono text-lg focus:bg-white focus:outline-none shadow-brutalist-hover"
                required
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-gray-200 border-2 border-black font-black text-xs uppercase hover:bg-gray-300"
              >
                {showKey ? 'HIDE' : 'SHOW'}
              </button>
            </div>
          </div>

          <div className="bg-yellow-100 border-4 border-black p-6 mb-8">
            <h3 className="font-black text-lg mb-3 uppercase">API 키 발급 방법</h3>
            <ol className="list-decimal list-inside space-y-2 font-bold text-gray-700">
              <li>
                <a
                  href="https://aistudio.google.com/apikey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-main-blue underline decoration-2 hover:text-blue-800"
                >
                  Google AI Studio
                </a>
                에 접속합니다
              </li>
              <li>Google 계정으로 로그인합니다</li>
              <li>"Create API Key" 버튼을 클릭합니다</li>
              <li>생성된 API 키를 복사하여 위에 붙여넣습니다</li>
            </ol>
          </div>

          <div className="bg-gray-100 border-4 border-black p-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔒</span>
              <div>
                <h4 className="font-black text-lg uppercase mb-2">보안 안내</h4>
                <p className="font-bold text-gray-600 text-sm">
                  입력하신 API 키는 브라우저에만 저장되며, 서버로 전송되지 않습니다.
                  <br />
                  API 키는 오직 Gemini API 호출에만 사용됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={!apiKey.trim()}
            className="px-16 py-6 bg-main-blue text-white font-black text-2xl border-4 border-black shadow-brutalist-lg hover:bg-blue-700 transition-all uppercase tracking-widest active:translate-y-1 active:shadow-brutalist disabled:opacity-50 disabled:cursor-not-allowed"
          >
            START →
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApiKeyInput;
