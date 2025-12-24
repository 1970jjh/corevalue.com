
import { LandingPageStyle, FeatureItem } from './types';

export const LANDING_PAGE_STYLES: LandingPageStyle[] = [
  {
    id: 'samsung',
    name: 'Samsung Galaxy',
    description: '깊은 블랙 배경에 선명한 홀로그래픽 그래픽과 엣지있는 폰트를 사용하여 압도적인 기술력을 표현합니다.',
    imageUrl: 'https://i.namu.wiki/i/jzfJVe-Y9EoaemTUmwjznLhlibVplM_BYWQoUfLiHjerF34DtMJX19tr-pvRj6x_bXFDKfOIo0wlQj_TEiMrqg.webp',
    sampleImages: ['https://i.namu.wiki/i/jzfJVe-Y9EoaemTUmwjznLhlibVplM_BYWQoUfLiHjerF34DtMJX19tr-pvRj6x_bXFDKfOIo0wlQj_TEiMrqg.webp'],
    promptModifier: 'Samsung Galaxy style: AMOLED black, vibrant holographic gradients.',
    mainColor: 'Pure Black'
  },
  {
    id: 'sk',
    name: 'SK Energy',
    description: '행복날개의 레드와 오렌지 컬러를 활용하여 에너제틱하고 따뜻하며 유연한 연결을 강조합니다.',
    imageUrl: 'https://design.co.kr/wp-content/uploads/2025/04/dr-1.jpg',
    sampleImages: ['https://design.co.kr/wp-content/uploads/2025/04/dr-1.jpg'],
    promptModifier: 'SK style: SK Red/Orange gradients, warm human-centric.',
    mainColor: 'SK Red'
  },
  {
    id: 'lg',
    name: 'LG Life',
    description: 'LG 레드 컬러와 미니멀한 화이트 공간을 조화롭게 배치하여 따뜻한 기술을 표현합니다.',
    imageUrl: 'https://static1.squarespace.com/static/54d0280ae4b0424c03ab6474/5a86f9c6652dea5036f872fb/65c23d313d049c319758f2d4/1707280815628/wedesignx_lge_brandimage_research_colab_v2.jpg?format=1500w',
    sampleImages: ['https://static1.squarespace.com/static/54d0280ae4b0424c03ab6474/5a86f9c6652dea5036f872fb/65c23d313d049c319758f2d4/1707280815628/wedesignx_lge_brandimage_research_colab_v2.jpg?format=1500w'],
    promptModifier: 'LG style: LG Red (#A50034), minimal white layout.',
    mainColor: 'LG Red'
  },
  {
    id: 'hanwha',
    name: 'Hanwha Energy',
    description: '트라이서클의 오렌지 에너지를 바탕으로 역동적이고 강력한 기술의 혁신을 보여줍니다.',
    imageUrl: 'https://mir-s3-cdn-cf.behance.net/projects/404/31faaf95228907.Y3JvcCwzMDcxLDI0MDIsMzE5LDA.png',
    sampleImages: ['https://mir-s3-cdn-cf.behance.net/projects/404/31faaf95228907.Y3JvcCwzMDcxLDI0MDIsMzE5LDA.png'],
    promptModifier: 'Hanwha style: Hanwha Orange (#F37321), dynamic diagonal lines.',
    mainColor: 'Hanwha Orange'
  },
  {
    id: 'world-map-wood',
    name: 'World Map Style',
    description: '세계지도를 모티브로 글로벌한 확장성과 탐험 정신을 시각화한 스타일입니다.',
    imageUrl: 'https://m.media-amazon.com/images/I/81b3pTXAgmL._AC_UF894,1000_QL80_.jpg',
    sampleImages: ['https://m.media-amazon.com/images/I/81b3pTXAgmL._AC_UF894,1000_QL80_.jpg'],
    promptModifier: 'World Map Motif: Wooden textures, teal background, global scope.',
    mainColor: 'Deep Teal'
  },
  {
    id: 'lotte',
    name: 'Lotte Style',
    description: '밝고 화사한 분위기와 친절한 레이아웃으로 고객 중심의 쇼핑 경험을 전달합니다.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsE303wr5TyIw-TMlM7PO0ERZGsMc5UW2yGw&s',
    sampleImages: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsE303wr5TyIw-TMlM7PO0ERZGsMc5UW2yGw&s'],
    promptModifier: 'Lotte: Clean white, red accents, premium mall vibe.',
    mainColor: 'Lotte Red'
  },
  {
    id: 'posco',
    name: 'POSCO Reliable',
    description: '철강의 견고함을 닮은 스틸 블루와 신뢰감 있는 레이아웃으로 기업의 단단한 가치를 전달합니다.',
    imageUrl: 'https://newsroom.posco.com/kr/wp-content/uploads/2024/07/20240719_kr_img_a01.jpg',
    sampleImages: ['https://newsroom.posco.com/kr/wp-content/uploads/2024/07/20240719_kr_img_a01.jpg'],
    promptModifier: 'POSCO: Steel blue tones, professional grid.',
    mainColor: 'Steel Blue'
  },
  {
    id: 'doosan',
    name: 'Doosan Structural',
    description: '블루, 그린, 연두의 3색 블록 컬러를 활용해 건설적이고 미래 지향적인 느낌을 줍니다.',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/60db9442be90886c5c389d79/1627828969806-6AX3B4P1UWJYBTRW80ZS/Thumbnail_Web.jpg',
    sampleImages: ['https://images.squarespace-cdn.com/content/v1/60db9442be90886c5c389d79/1627828969806-6AX3B4P1UWJYBTRW80ZS/Thumbnail_Web.jpg'],
    promptModifier: 'Doosan: Modular blocks, primary Construct colors.',
    mainColor: 'Doosan Blue'
  },
  {
    id: 'gs',
    name: 'GS Style',
    description: '친근한 오렌지, 그린, 블루 컬러와 실용적인 디자인으로 생활의 편리함을 보여줍니다.',
    imageUrl: 'https://cdn.sisajournal-e.com/news/photo/202411/407334_211774_457.jpg',
    sampleImages: ['https://cdn.sisajournal-e.com/news/photo/202411/407334_211774_457.jpg'],
    promptModifier: 'GS: Primary colors, friendly utility layout.',
    mainColor: 'GS Orange'
  },
  {
    id: 'hyundai',
    name: 'Hyundai Modern',
    description: '플루이딕 스컬프처 철학을 담은 유선형 디자인과 신뢰의 네이비로 미래 모빌리티를 표현합니다.',
    imageUrl: 'https://www.hyundaimotorgroup.com/image/upload/asset_library/MDA00000000000041536/b6ed1a3e55e8427ea37a816cd1ec6a03.jpg',
    sampleImages: ['https://www.hyundaimotorgroup.com/image/upload/asset_library/MDA00000000000041536/b6ed1a3e55e8427ea37a816cd1ec6a03.jpg'],
    promptModifier: 'Hyundai: Fluid navy lines, premium mobility look.',
    mainColor: 'Hyundai Navy'
  },
  {
    id: 'kakao',
    name: 'Kakao Friendly',
    description: '친숙한 옐로우와 둥근 인터페이스로 소통의 즐거움과 사용자 친화적인 감성을 전달합니다.',
    imageUrl: 'https://i.namu.wiki/i/N1_DKSuVEnTWf7J5e3ybDkAJrhEEIGjm8JlGWKvq5qwof18XE-RsIgQpNbG6d-qrkJ53T390tvSQw-evR29Sow.webp',
    sampleImages: ['https://i.namu.wiki/i/N1_DKSuVEnTWf7J5e3ybDkAJrhEEIGjm8JlGWKvq5qwof18XE-RsIgQpNbG6d-qrkJ53T390tvSQw-evR29Sow.webp'],
    promptModifier: 'Kakao: Yellow-centered, rounded components.',
    mainColor: 'Kakao Yellow'
  },
  {
    id: 'naver',
    name: 'Naver Portal',
    description: '정교한 그리드와 그린 컬러로 방대한 정보를 체계적이고 신뢰감 있게 보여줍니다.',
    imageUrl: 'https://dm3yrk3qb82fp.cloudfront.net/works/61dccad4-378a-43bd-87f9-b1180fe0e497.png',
    sampleImages: ['https://dm3yrk3qb82fp.cloudfront.net/works/61dccad4-378a-43bd-87f9-b1180fe0e497.png'],
    promptModifier: 'Naver: Naver Green (#03C75A), high-density portal grid.',
    mainColor: 'Naver Green'
  },
  {
    id: 'apple',
    name: 'Apple Style',
    description: '극도의 심플함, 거대한 고해상도 제품 이미지, 프리미엄 스크롤 감성이 특징입니다.',
    imageUrl: 'https://i.ytimg.com/vi/pJuRYqTdZL4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBCWZI2rYNrdVi0U3s44Oz-1QAynQ',
    sampleImages: ['https://i.ytimg.com/vi/pJuRYqTdZL4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBCWZI2rYNrdVi0U3s44Oz-1QAynQ'],
    promptModifier: 'Apple: San Francisco font, extreme whitespace, huge photos.',
    mainColor: 'White'
  },
  {
    id: 'nvidia',
    name: 'Nvidia Style',
    description: '시그니처 그린과 기하학적 패턴을 사용하여 고성능, 하드웨어 감성을 보여줍니다.',
    imageUrl: 'https://i.ytimg.com/vi/ZSOhG70gua8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDooDZbyEbLE18ckGPsye5u9lu2dQ',
    sampleImages: ['https://i.ytimg.com/vi/ZSOhG70gua8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDooDZbyEbLE18ckGPsye5u9lu2dQ'],
    promptModifier: 'Nvidia: Neon green, geometric circuit look.',
    mainColor: 'Lime Green'
  },
  {
    id: 'google',
    name: 'Google Material',
    description: 'Material Design 3 기반의 둥근 모서리와 파스텔 톤으로 친근하고 실용적입니다.',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1200/1*wA0vVncJOWTOCR-ISZ-Srg.jpeg',
    sampleImages: ['https://miro.medium.com/v2/resize:fit:1200/1*wA0vVncJOWTOCR-ISZ-Srg.jpeg'],
    promptModifier: 'Google: MD3 guidelines, modular, colorful.',
    mainColor: 'Google Blue'
  },
  {
    id: 'microsoft',
    name: 'Microsoft Fluent',
    description: 'Fluent Design의 아크릴 소재와 그리드 레이아웃으로 비즈니스 신뢰감을 줍니다.',
    imageUrl: 'https://static.dezeen.com/uploads/2025/10/microsoft-icons-rebrand-hero.jpg',
    sampleImages: ['https://static.dezeen.com/uploads/2025/10/microsoft-icons-rebrand-hero.jpg'],
    promptModifier: 'Microsoft: Acrylic blur, Fluent Design system.',
    mainColor: 'Microsoft Blue'
  },
  {
    id: 'meta',
    name: 'Meta Style',
    description: '블루 그라데이션과 유기적인 곡선을 활용하여 사람과 사람의 연결을 표현합니다.',
    imageUrl: 'https://typecast.ai/kr/learn/wp-content/uploads/2022/09/pile-3d-facebook-logos-1-scaled.jpg',
    sampleImages: ['https://typecast.ai/kr/learn/wp-content/uploads/2022/09/pile-3d-facebook-logos-1-scaled.jpg'],
    promptModifier: 'Meta: Fluid gradients, social connection vibe.',
    mainColor: 'Meta Blue'
  },
  {
    id: 'dynamic-glassmorphism',
    name: 'Dynamic Glass',
    description: '반투명 유리 카드 뒤에서 은은한 오로라가 움직이는 생동감 있는 스타일입니다.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJEKleasUUlGJQP8gB_N2qkNmJLznklPtkfQ&s',
    sampleImages: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJEKleasUUlGJQP8gB_N2qkNmJLznklPtkfQ&s'],
    promptModifier: 'Animated Glass: Translucent layers, moving background.',
    mainColor: 'Crystal'
  },
  {
    id: 'minimalism',
    name: 'Minimalism',
    description: '여백의 미를 살린 깔끔하고 세련된 스타일. 본질에 집중합니다.',
    imageUrl: 'https://media.admiddleeast.com/photos/67fb7bb626b6083d463d6064/master/w_1600%2Cc_limit/Featured%2520-%25201620%2520x%25201080%2520(1).png',
    sampleImages: ['https://media.admiddleeast.com/photos/67fb7bb626b6083d463d6064/master/w_1600%2Cc_limit/Featured%2520-%25201620%2520x%25201080%2520(1).png'],
    promptModifier: 'Minimalism: Monochrome, gridless but balanced.',
    mainColor: 'Gray Scale'
  },
  {
    id: 'bento',
    name: 'Bento Grid',
    description: '직관적인 박스 형태로 정보를 배치하여 구조적이고 모던한 느낌을 줍니다.',
    imageUrl: 'https://i.ytimg.com/vi/yJnKIEogUbM/maxresdefault.jpg',
    sampleImages: ['https://i.ytimg.com/vi/yJnKIEogUbM/maxresdefault.jpg'],
    promptModifier: 'Bento: Structured cards, modern layout.',
    mainColor: 'White'
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    description: '검정 배경에 형광 네온 컬러를 사용하여 미래지향적인 인상을 줍니다.',
    imageUrl: 'https://s3-alpha.figma.com/hub/file/5052592767/1c322000-ab9e-4333-a8f0-4fddf16c68dc-cover.png',
    sampleImages: ['https://s3-alpha.figma.com/hub/file/5052592767/1c322000-ab9e-4333-a8f0-4fddf16c68dc-cover.png'],
    promptModifier: 'Cyberpunk: Neon accents, high-tech glitch.',
    mainColor: 'Neon Pink'
  },
  {
    id: 'typography',
    name: 'Typography Focus',
    description: '과감하고 굵은 폰트를 사용하여 메시지를 강력하게 전달합니다.',
    imageUrl: 'https://htmlburger.com/blog/wp-content/uploads/2025/01/great_typography_website_examples.webp',
    sampleImages: ['https://htmlburger.com/blog/wp-content/uploads/2025/01/great_typography_website_examples.webp'],
    promptModifier: 'Typography: Huge bold headers, Swiss design.',
    mainColor: 'Black'
  },
  {
    id: 'brutalism',
    name: 'Brutalism',
    description: '거칠고 투박하며 파격적인 레이아웃으로 힙한 느낌을 강조합니다.',
    imageUrl: 'https://wpkoi.com/wp-content/uploads/2023/10/brutalism-pandita.webp',
    sampleImages: ['https://wpkoi.com/wp-content/uploads/2023/10/brutalism-pandita.webp'],
    promptModifier: 'Brutalism: Thick outlines, raw layout.',
    mainColor: 'Yellow'
  },
  {
    id: 'isometric',
    name: 'Isometric 3D',
    description: '3차원 입체 투시를 활용하여 트렌디하고 공간감을 살린 디자인입니다.',
    imageUrl: 'https://img.freepik.com/premium-vector/web-design-concept-3d-isometric-design-designer-team-creating-digital-content-site-elements-making-settings-homepages-vector-illustration-with-isometry-people-scene-web-graphic_9209-14622.jpg',
    sampleImages: ['https://img.freepik.com/premium-vector/web-design-concept-3d-isometric-design-designer-team-creating-digital-content-site-elements-making-settings-homepages-vector-illustration-with-isometry-people-scene-web-graphic_9209-14622.jpg'],
    promptModifier: 'Isometric: 3D illustrated look, pastel palette.',
    mainColor: 'Soft Blue'
  },
  {
    id: 'gamification',
    name: 'Gamification',
    description: '게임 요소(배지, 진행바)를 활용하여 사용자의 흥미를 유도합니다.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXiIsFLvrFYJBesXj9RjfdmpTdcEp9mfsfrw&s',
    sampleImages: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXiIsFLvrFYJBesXj9RjfdmpTdcEp9mfsfrw&s'],
    promptModifier: 'Gamified: Badges, progress status, vibrant rewards.',
    mainColor: 'Bright Purple'
  },
  {
    id: 'ai-digital',
    name: 'AI Digital',
    description: '신경망, 노드 연결 효과로 미래지향적인 지능형 느낌을 강조합니다.',
    imageUrl: 'https://www.thewebfactory.us/blogs/wp-content/uploads/2025/07/30-Best-Web-Design-Trends-Styles-for-2025-01-1024x538.jpg',
    sampleImages: ['https://www.thewebfactory.us/blogs/wp-content/uploads/2025/07/30-Best-Web-Design-Trends-Styles-for-2025-01-1024x538.jpg'],
    promptModifier: 'AI style: Circuit board lines, glowing nodes.',
    mainColor: 'Cyber Blue'
  },
  {
    id: 'noise-texture',
    name: 'Noise Texture',
    description: '필름 그레인 질감을 깔아 인쇄물 같은 고급스러운 감촉을 전달합니다.',
    imageUrl: 'https://mir-s3-cdn-cf.behance.net/projects/404/a4260a201176233.Y3JvcCw4MDgsNjMyLDAsMA.jpg',
    sampleImages: ['https://mir-s3-cdn-cf.behance.net/projects/404/a4260a201176233.Y3JvcCw4MDgsNjMyLDAsMA.jpg'],
    promptModifier: 'Noise: Analog grain, paper-like textures.',
    mainColor: 'Cream'
  },
  {
    id: 'glassmorphism-pure',
    name: 'Pure Glassmorphism',
    description: '반투명한 유리 질감을 활용하여 몽환적인 깊이감을 연출합니다.',
    imageUrl: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/30/posts/93333/image-upload/glassmorphism_app_ui.jpg',
    sampleImages: ['https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/30/posts/93333/image-upload/glassmorphism_app_ui.jpg'],
    promptModifier: 'Glassmorphism: Backdrop blur, crystal layers.',
    mainColor: 'Translucent White'
  },
  {
    id: 'neumorphism-pure',
    name: 'Neumorphism',
    description: '요소가 배경에서 부드럽게 튀어나온 듯한 소프트 UI 스타일입니다.',
    imageUrl: 'https://www.justinmind.com/wp-content/uploads/2020/04/neumorphism-ui-design.png',
    sampleImages: ['https://www.justinmind.com/wp-content/uploads/2020/04/neumorphism-ui-design.png'],
    promptModifier: 'Neumorphism: Soft shadows, rubber-like material.',
    mainColor: 'Soft Gray'
  },
  {
    id: 'parallax-hero',
    name: 'Parallax Motion',
    description: '배경과 요소가 다른 속도로 움직여 입체적인 몰입감을 제공합니다.',
    imageUrl: 'https://cdn.sanity.io/images/qyzm5ged/blog/955b34db393ce107f65417a16ccab6705df2b598-2138x1200.png',
    sampleImages: ['https://cdn.sanity.io/images/qyzm5ged/blog/955b34db393ce107f65417a16ccab6705df2b598-2138x1200.png'],
    promptModifier: 'Parallax: Depth through scroll movement.',
    mainColor: 'Deep Emerald'
  },
  {
    id: 'retro-future',
    name: 'Retro Future',
    description: '80-90년대의 상상력과 현대적인 감각을 결합한 힙한 스타일입니다.',
    imageUrl: 'https://media.istockphoto.com/id/1494986499/vector/landscape-with-human-looking-at-horizon-with-mountains-sci-fi-scene-on-far-plane-with-moonst.jpg?s=612x612&w=0&k=20&c=mrCinaGNIxTl5Fh0R-C08Ydua2toF1AbIl0oipT6m5U=',
    sampleImages: ['https://media.istockphoto.com/id/1494986499/vector/landscape-with-human-looking-at-horizon-with-mountains-sci-fi-scene-on-far-plane-with-moonst.jpg?s=612x612&w=0&k=20&c=mrCinaGNIxTl5Fh0R-C08Ydua2toF1AbIl0oipT6m5U='],
    promptModifier: 'Retro Futurism: Synthwave palette, grain.',
    mainColor: 'Violet'
  },
  {
    id: 'simulation',
    name: 'Simulation Lab',
    description: '컨트롤 패널을 연상시키는 전문적이고 기술적인 대시보드 스타일입니다.',
    imageUrl: 'https://iebmedia.com/wp-content/uploads/2020/12/Big-Data.jpg',
    sampleImages: ['https://iebmedia.com/wp-content/uploads/2020/12/Big-Data.jpg'],
    promptModifier: 'Simulation: Technical dashboard, HUD overlays.',
    mainColor: 'Slate'
  },
  {
    id: 'eco-green',
    name: 'Eco Sustainable',
    description: '지속 가능한 성장을 상징하는 자연의 녹색과 부드러운 여백.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/2378/2395/files/Top_5_Sustainable_Fashion_Companies_to_Embrace_Eco-Friendly_Style_480x480.jpg?v=1686084045',
    sampleImages: ['https://cdn.shopify.com/s/files/1/2378/2395/files/Top_5_Sustainable_Fashion_Companies_to_Embrace_Eco-Friendly_Style_480x480.jpg?v=1686084045'],
    promptModifier: 'Eco: Earth tones, organic curves.',
    mainColor: 'Forest Green'
  },
  {
    id: 'luxury-gold',
    name: 'Luxury Prestige',
    description: '블랙과 골드의 고귀한 대비로 압도적인 프리미엄을 상징합니다.',
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/007/159/167/non_2x/luxury-gold-and-black-background-with-golden-metal-texture-in-3d-abstract-style-illustration-from-about-modern-template-design-for-strong-feeling-and-technology-and-futurism-vector.jpg',
    sampleImages: ['https://static.vecteezy.com/system/resources/previews/007/159/167/non_2x/luxury-gold-and-black-background-with-golden-metal-texture-in-3d-abstract-style-illustration-from-about-modern-template-design-for-strong-feeling-and-technology-and-futurism-vector.jpg'],
    promptModifier: 'Luxury: Matte black and gold metallic accents.',
    mainColor: 'Gold'
  },
  {
    id: 'zen-serene',
    name: 'Zen Serene',
    description: '최소한의 요소로 평화로운 공간감을 창조하는 명상적 스타일.',
    imageUrl: 'https://static1.squarespace.com/static/688ca3c32f02bf6861be9c0c/68ac7e22ce20391d327db8bc/68af2de4aae2244843b138d4/1757980574120/Creating+Serene+Meditation+Luxury+Zen+Room+Design+Ideas.webp?format=1500w',
    sampleImages: ['https://static1.squarespace.com/static/688ca3c32f02bf6861be9c0c/68ac7e22ce20391d327db8bc/68af2de4aae2244843b138d4/1757980574120/Creating+Serene+Meditation+Luxury+Zen+Room+Design+Ideas.webp?format=1500w'],
    promptModifier: 'Zen: Serene minimalism, muted tones.',
    mainColor: 'Beige'
  },
  {
    id: 'hand-drawn-sketch',
    name: 'Creative Sketch',
    description: '따뜻한 아날로그 감성의 핸드 드로잉 스케치 스타일로 예술적인 분위기를 연출합니다.',
    imageUrl: 'https://img.freepik.com/premium-photo/wireframe-sketch-websites-homepage-focusing-layout-content-placement_1314467-90482.jpg?semt=ais_hybrid&w=740&q=80',
    sampleImages: ['https://img.freepik.com/premium-photo/wireframe-sketch-websites-homepage-focusing-layout-content-placement_1314467-90482.jpg?semt=ais_hybrid&w=740&q=80'],
    promptModifier: 'Sketch: Hand-drawn graphite strokes, paper textures.',
    mainColor: 'Graphite Gray'
  }
];

export const ADDITIONAL_FEATURES: FeatureItem[] = [
  {
    id: 'dark-mode',
    name: '다크모드/라이트모드 토글',
    description: '사용자의 환경에 따라 다크모드와 라이트모드를 자유롭게 전환할 수 있습니다.',
    category: 'Utility',
    promptModifier: 'Implement Dark Mode Toggle: Use Tailwind dark: variants and a stateful switch button.',
    previewImage: 'https://images.unsplash.com/photo-1515630278258-407f66498911?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'scrollytelling',
    name: 'Scrollytelling',
    description: '스크롤에 따라 텍스트가 떠오르거나 배경색이 바뀌는 몰입감 높은 효과입니다.',
    category: 'Motion',
    promptModifier: 'Implement Scrollytelling: Use Intersection Observer to trigger animations as the user scrolls.',
    previewImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'parallax-scrolling',
    name: 'Parallax Scrolling',
    description: '배경과 요소가 다른 속도로 움직여 깊이감을 주는 효과입니다.',
    category: 'Motion',
    promptModifier: 'Implement Parallax Scrolling: Create visual depth with relative scroll speeds.',
    previewImage: 'https://crocoblock.com/wp-content/uploads/2023/07/Parallax-Scrolling-Effect-Guide.png'
  },
  {
    id: 'custom-cursor',
    name: 'Custom Cursor',
    description: '디자인된 커서가 따라다니며 링크 위에서 반응합니다.',
    category: 'Interaction',
    promptModifier: 'Implement Custom Cursor: Replace default cursor with styled dot tracker.',
    previewImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3d-tilt',
    name: '3D Tilt Effect',
    description: '마우스 위치에 따라 카드가 입체적으로 기울어지는 효과입니다.',
    category: 'Interaction',
    promptModifier: 'Implement 3D Tilt Effect: rotateX/rotateY based on mousemove.',
    previewImage: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kinetic-typography',
    name: 'Kinetic Typography',
    description: '반응하여 움직이는 역동적인 텍스트 효과입니다.',
    category: 'Motion',
    promptModifier: 'Implement Kinetic Typography: Add scrolling text marquees.',
    previewImage: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'morphing-effects',
    name: 'Morphing Effects',
    description: '버튼이나 도형이 물 흐르듯 유기적으로 모양이 변하는 효과입니다.',
    category: 'Motion',
    promptModifier: 'Implement Morphing Effects: Use SVG morphing or CSS border-radius animations for fluid shapes.',
    previewImage: 'https://cdn.dribbble.com/users/1203599/screenshots/6253578/shape_morphing_2.gif'
  },
  {
    id: 'magnetic-buttons',
    name: 'Magnetic Buttons',
    description: '마우스를 버튼 근처로 가져가면 자석처럼 커서 쪽으로 따라오는 효과입니다.',
    category: 'Interaction',
    promptModifier: 'Implement Magnetic Buttons: Calculate distance from cursor and apply subtle translation transforms.',
    previewImage: 'https://cdn.dribbble.com/users/1615584/screenshots/15729177/media/6b9c9f7d4e5d6d4e8c1f9a8d9b1e9b2c.gif'
  },
  {
    id: 'skeleton-loading',
    name: 'Skeleton Loading',
    description: '데이터가 불러와지는 동안 은은하게 빛나는 뼈대 화면을 보여줍니다.',
    category: 'Utility',
    promptModifier: 'Implement Skeleton Loading: Create shimmering gray placeholders that match the final content layout.',
    previewImage: 'https://miro.medium.com/v2/resize:fit:1200/1*p3F0LpW7rEwQO_x2z5hXyg.png'
  },
  {
    id: 'horizontal-scroll',
    name: 'Horizontal Scroll',
    description: '섹션이 좌우로 흐르며 정보를 나열하는 방식입니다.',
    category: 'Motion',
    promptModifier: 'Implement Horizontal Scroll: Sticky container with transform: translateX based on scroll progress.',
    previewImage: 'https://media.licdn.com/dms/image/D4D12AQH8_0yRreA0SQ/article-cover_image-shrink_720_1280/0/1689239857945?e=2147483647&v=beta&t=j7NfE-13V6v_iE7nS_C_u-C5m9D2Q5Y8G8p6rQ5A8z8'
  }
];
