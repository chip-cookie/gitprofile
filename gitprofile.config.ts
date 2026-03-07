// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'chip-cookie', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: '깃허브 프로젝트',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: '내 프로젝트',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'ESG-AI-Agent',
          description:
            'ESG Insight Agent는 건설사를 위한 ESG 업무 자동화 AI 시스템으로.',
          imageUrl: '/ESG Insight Agent.png',
          link: 'https://example.com',
        },
        {
          title: 'Carbon Strategic OS',
          description:
            'AI 기반 탄소 배출 관리 및 전략적 의사결정 지원 플랫폼 서비스 구현.',
          imageUrl: '/ESG Carbon Dashboard (Carbon Strategic OS).png',
          link: 'https://example.com',
        },
        {
          title: 'F1-LLM Chatbot',
          description:
            ' F1 레이스 데이터를 기반으로 질문에 답변하는 RAG(Retrieval-Augmented Generation) 시스템입니다. PDF 문서에서 정보를 추출하여 벡터 인덱스를 생성하고, OpenAI의 GPT 모델을 사용하여 답변 생성.',
          imageUrl: '/f1-LLM chat bot.PNG',
          link: 'https://example.com',
        }
      ],
    },
  },
  seo: { title: 'chip-cookie의 포트폴리오', description: '', imageURL: '' },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '010-8372-2115',
    email: 'ybw6677@naver.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'JavaScript',
    'RAG',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'MariaDB',
    'Git',
    'Docker',
    'git Action',
    'GCP',
    'Claude',
    'Tailwind css',
    'chat GPT',
    'Gemini',
    'Antigravity',
    'Cursor',

  ],
  experiences: [
    {
      company: '두드림 줄눈',
      position: '업무지원',
      from: '2024년 3월',
      to: '2024년 9월',
    }
  ],
  certifications: [
    {
      name: 'CSWA',
      body: 'SolidWorks',
      year: '2023년 11월',
      link: 'https://www.solidworks.com/ko',
    },
  ],
  educations: [
    {
      institution: '경운대학교 ',
      degree: '에너지소재공학 학사',
      from: '2018',
      to: '2024',
    },
    {
      institution: '대전 고등학교',
      degree: '인문계 졸업',
      from: '2015',
      to: '2018',
    },
  ],
  publications: [
    {
      title: '논문 또는 출판물 제목',
      conferenceName: '',
      journalName: '저널 이름',
      authors: '홍길동, 김철수',
      link: 'https://example.com',
      description:
        '논문이나 출판물에 대한 상세한 한글 설명과 요약을 이 곳에 작성합니다.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `<a 
      class="text-primary" href="https://github.com/chip-cookie/gitprofile"
      target="_blank"
      rel="noreferrer"
    >Made with GitProfile and ❤️ by chip-cookie</a>`,

  enablePWA: true,
};

export default CONFIG;
