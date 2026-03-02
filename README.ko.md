# GitProfile - 한글 사용 설명서

<p align="center">
  <h4 align="center">GitHub 사용자라면 누구나 쉽게 만드는 자동 포트폴리오 빌더!</h4>
</p>

**GitProfile**은 GitHub 아이디만 입력하면 자동으로 멋진 포트폴리오 웹사이트를 생성해주는 도구입니다. 코딩 경험이 없어도 몇 분 만에 나만의 포트폴리오를 만들고, GitHub Pages를 통해 무료로 웹에 공개할 수 있습니다.

---

## 📋 목차

- [설치 및 실행](#-설치-및-실행)
  - [로컬 환경에서 실행하기](#로컬-환경에서-실행하기)
  - [GitHub Pages에 배포하기 (권장)](#github-pages에-배포하기-권장)
- [내 정보로 꾸미기 (커스터마이징)](#-내-정보로-꾸미기-커스터마이징)
  - [GitHub 사용자명 설정](#github-사용자명-설정)
  - [테마 설정](#테마-설정)
  - [소셜 링크](#소셜-링크)
  - [기술 스택](#기술-스택)
  - [경력 사항](#경력-사항)
  - [학력 사항](#학력-사항)
  - [자격증 / 수료증](#자격증--수료증)
  - [프로젝트](#프로젝트)
  - [블로그 포스트](#블로그-포스트)
- [Google Analytics](#google-analytics)

---

## 🛠 설치 및 실행

### 로컬 환경에서 실행하기

내 컴퓨터에서 직접 실행하여 결과를 확인하는 방법입니다.

**사전 준비:** [Node.js](https://nodejs.org)가 설치되어 있어야 합니다.

1. **패키지 설치** (처음 한 번만 실행하면 됩니다.)

   ```bash
   npm install
   ```

2. **개발 서버 실행**

   ```bash
   npm run dev
   ```

3. 브라우저에서 아래 주소로 접속합니다.

   ```
   http://localhost:5173/gitprofile/
   ```

> 파일을 수정하고 저장하면 브라우저에 즉시 반영됩니다!

---

### GitHub Pages에 배포하기 (권장)

GitHub에서 내 포트폴리오를 무료로 공개하는 방법입니다.

1. **이 저장소를 Fork** 합니다.
2. **저장소 이름을 변경** 합니다.
   - `내아이디.github.io` 형식으로 바꾸면 → `https://내아이디.github.io` 에서 확인 가능
   - `portfolio` 등 다른 이름으로 바꾸면 → `https://내아이디.github.io/portfolio` 에서 확인 가능
3. 저장소의 **Actions 탭**으로 이동하여 **Workflows를 활성화** 합니다.
4. `gitprofile.config.ts` 파일에서 `base` 값을 변경합니다.
   - `내아이디.github.io` 저장소라면: `base: '/'`
   - `portfolio` 등 다른 저장소라면: `base: '/portfolio/'`
5. 변경 사항을 **commit** 하면 자동으로 배포됩니다. (Actions 탭에서 진행 상황을 확인할 수 있습니다.)

---

## 🎨 내 정보로 꾸미기 (커스터마이징)

모든 설정은 **`gitprofile.config.ts`** 파일 하나에서 관리합니다.

### GitHub 사용자명 설정

**가장 중요한 설정입니다.** 이 값을 내 GitHub 아이디로 바꾸면 프로필 사진, 자기소개 등이 자동으로 불러와집니다.

```ts
// gitprofile.config.ts
const CONFIG = {
  github: {
    username: 'chip-cookie', // ← 여기를 내 GitHub 아이디로 변경
  },
};
```

---

### 테마 설정

총 37가지 테마 중 원하는 것을 기본값으로 지정할 수 있습니다.

```ts
themeConfig: {
  defaultTheme: 'nord', // 기본 테마 (예: 'light', 'dark', 'synthwave', 'retro' 등)
  disableSwitch: false, // true로 설정하면 테마 전환 버튼이 숨겨짐
},
```

**사용 가능한 테마 목록:**
`light`, `dark`, `cupcake`, `bumblebee`, `emerald`, `corporate`, `synthwave`, `retro`, `cyberpunk`, `valentine`, `halloween`, `garden`, `forest`, `aqua`, `lofi`, `pastel`, `fantasy`, `wireframe`, `black`, `luxury`, `dracula`, `nord`, `sunset` 등

---

### 소셜 링크

사용하는 소셜 서비스 계정 정보를 입력합니다. 비워두면 해당 아이콘이 숨겨집니다.

```ts
social: {
  linkedin: '내-링크드인-아이디',
  x: '내-트위터-아이디',
  instagram: '내-인스타그램-아이디',
  github: '', // GitHub는 위의 username에서 자동으로 가져옵니다
  youtube: '', // 예: 'pewdiepie'
  medium: '내-미디엄-아이디',
  dev: '내-dev.to-아이디',
  email: 'my@email.com',
  website: 'https://my-website.com',
  // ... 그 외 다수
},
```

---

### 기술 스택

내가 보유한 기술을 배열 형태로 입력합니다. 비워두면 섹션 전체가 숨겨집니다.

```ts
skills: ['JavaScript', 'React.js', 'Python', 'Git', 'Docker'],
```

---

### 경력 사항

업무 경력을 입력합니다. 비워두면 섹션 전체가 숨겨집니다.

```ts
experiences: [
  {
    company: '회사 이름',
    position: '직책 / 직무',
    from: '2022년 3월',
    to: '현재',
    companyLink: 'https://회사홈페이지.com',
  },
],
```

---

### 학력 사항

학력 정보를 입력합니다. 비워두면 섹션 전체가 숨겨집니다.

```ts
educations: [
  {
    institution: '대학교 이름',
    degree: '컴퓨터공학과 학사',
    from: '2018',
    to: '2022',
  },
],
```

---

### 자격증 / 수료증

보유 자격증이나 수료증을 입력합니다. 비워두면 섹션 전체가 숨겨집니다.

```ts
certifications: [
  {
    name: '정보처리기사',
    body: '한국산업인력공단',
    year: '2022년 6월',
    link: 'https://example.com',
  },
],
```

---

### 프로젝트

#### GitHub 프로젝트 (자동)

내 GitHub 저장소를 별점순 또는 최신순으로 자동으로 보여줍니다.

```ts
projects: {
  github: {
    display: true,
    mode: 'automatic', // 'automatic' 또는 'manual'
    automatic: {
      sortBy: 'stars', // 'stars' 또는 'updated'
      limit: 8,        // 보여줄 최대 프로젝트 수
    },
  },
},
```

#### GitHub 프로젝트 (수동 선택)

특정 저장소만 직접 지정하여 보여줄 수 있습니다.

```ts
projects: {
  github: {
    mode: 'manual',
    manual: {
      projects: ['chip-cookie/my-project1', 'chip-cookie/my-project2'],
    },
  },
},
```

#### 외부 프로젝트

GitHub 외의 다른 플랫폼이나 개인 서버에 있는 프로젝트를 소개할 수 있습니다.

```ts
projects: {
  external: {
    header: '나의 프로젝트',
    projects: [
      {
        title: '프로젝트 이름',
        description: '프로젝트 설명을 입력하세요.',
        imageUrl: 'https://이미지URL.jpg',
        link: 'https://프로젝트링크.com',
      },
    ],
  },
},
```

---

### 블로그 포스트

Medium 또는 dev.to 계정이 있으면 최근 블로그 글을 자동으로 불러올 수 있습니다.

```ts
blog: {
  source: 'dev', // 'medium' 또는 'dev'
  username: '내-블로그-아이디',
  limit: 3, // 표시할 글 수 (최대 10)
},
```

---

## Google Analytics

방문자 통계를 확인하려면 Google Analytics ID를 입력합니다. 사용하지 않으려면 비워두세요.

```ts
googleAnalytics: {
  id: 'G-XXXXXXXXXX', // GA4 태그 ID
},
```

---

## 💡 자주 묻는 질문

**Q. 사이트가 제대로 안 보여요.**
A. `gitprofile.config.ts`의 `base` 값이 올바른지 확인하세요. GitHub Pages 설정에서 **Source**가 **GitHub Actions**로 설정되어 있는지도 확인하세요. (Settings → Pages → Build and deployment)

**Q. 변경 사항이 반영이 안 돼요.**
A. `main` 브랜치에 commit 후 GitHub Actions 탭에서 배포 진행 상황을 확인해보세요.

---

> 이 프로젝트의 원본은 [arifszn/gitprofile](https://github.com/arifszn/gitprofile)입니다.
