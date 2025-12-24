
export interface LandingPageStyle {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  sampleImages: string[];
  promptModifier: string;
  composition?: string;
  mainColor?: string;
  subColor?: string;
  uiuxTips?: string;
}

export interface FeatureItem {
  id: string;
  name: string;
  description: string;
  category: 'Motion' | 'Interaction' | 'Utility';
  promptModifier: string;
  previewImage?: string;
}

export interface UploadedFile {
  name: string;
  mimeType: string;
  data: string; // Base64 encoded string
}

export interface UserRequirements {
  companyName: string;
  homepageUrl?: string;
  logoUrl?: string;
  customStyleFiles: UploadedFile[];
  companyIntro: string;
  companyIntroFiles: UploadedFile[];
  missionIntro: string;
  missionIntroFiles: UploadedFile[];
  coreValueIntro: string;
  coreValueIntroFiles: UploadedFile[];
  workWayIntro: string;
  workWayIntroFiles: UploadedFile[];
  talentIntro: string;
  talentIntroFiles: UploadedFile[];
  guestbookRating: string; // 문의처 대신 추가
  guestbookComment: string; // 문의처 대신 추가
  guestbookFiles: UploadedFile[]; // 추가
  otherRequests: string;
  otherRequestsFiles: UploadedFile[];
  headerNavItems: string;
  uploadedFiles: UploadedFile[];
  selectedFeatureIds: string[];
}

export enum AppStep {
  API_KEY_INPUT,
  SELECT_STYLE,
  SELECT_FEATURES,
  INPUT_DETAILS,
  GENERATING,
  PREVIEW,
}

export interface GeneratedResult {
  code: string;
  explanation?: string;
}
