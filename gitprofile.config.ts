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
          title: '프로젝트 이름',
          description:
            '어떤 프로젝트인지 자세한 설명을 여기에 한글로 작성합니다.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: '프로젝트 이름',
          description:
            '프로젝트 관련 추가 설명을 이곳에 작성할 수 있습니다.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
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
    phone: '',
    email: '',
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
      company: 'OO 회사',
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
    {
      title: '발표한 출판물 제목',
      conferenceName: '컨퍼런스 이름',
      journalName: '',
      authors: '홍길동, 박영희',
      link: 'https://example.com',
      description:
        '작성한 출판물에 대한 상세한 한글 설명과 요약을 이 곳에 작성합니다.',
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
