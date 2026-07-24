# React Portfolio

GitHub Pages로 배포하는 React 포트폴리오 프로젝트입니다.

**사이트 주소:** https://xian931231.github.io/

---

## 브랜치 역할

| 브랜치 | 역할 |
|---|---|
| `main` | React 소스 코드 수정 및 관리 |
| `gh-pages` | 빌드 결과가 자동으로 올라가는 배포 전용 브랜치 |

> `gh-pages` 브랜치는 직접 수정하지 않습니다. `npm run deploy` 명령이 자동으로 덮어씁니다.

---

## 최초 설치

```powershell
git switch main
npm.cmd install
```

> PowerShell에서 `npm` 실행이 차단되는 경우 `npm.cmd`를 사용합니다.

---

## 로컬 개발 서버 실행

```powershell
git switch main
npm.cmd start
```

브라우저에서 http://localhost:3000 을 열어 확인합니다.

---

## 수정 → 커밋 → 배포 순서

### 1. main 브랜치에서 소스 수정

소스 코드는 `src/` 폴더에서 수정합니다.

### 2. 변경 사항 커밋 및 푸시

```powershell
git add .
git commit -m "Update portfolio"
git push origin main
```

### 3. GitHub Pages 배포

```powershell
npm.cmd run deploy
```

이 명령은 내부적으로 다음 순서로 실행됩니다.

1. `npm run build` — React 운영 빌드 생성 (`build/` 폴더)
2. `gh-pages -d build` — `build/` 폴더를 `gh-pages` 브랜치에 업로드

배포가 완료되면 아래 주소에서 변경된 사이트를 확인할 수 있습니다.

https://xian931231.github.io/

---

## 라우팅 주소

현재 GitHub Pages 호환을 위해 `HashRouter`를 사용합니다.

- https://xian931231.github.io/#/
- https://xian931231.github.io/#/about
- https://xian931231.github.io/#/project
- https://xian931231.github.io/#/resume

---

## GitHub Pages 설정

GitHub 저장소 `Settings > Pages`가 다음과 같이 되어 있어야 합니다.

```
Source: Deploy from a branch
Branch: gh-pages
Folder: / (root)
```
