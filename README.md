# khomma-dev
Next.jsで作成された、個人の技術ブログです。

## 環境構築

1. GitHubからソースを取得

```
https://github.com/khomma0312/my-tech-blog.git
```

2. ローカルサーバーを起動する

```
cd my-tech-blog
npm run dev
```

3. ローカル環境にアクセス

以下URLでアクセスが可能。
http://localhost:3000


## 記事の投稿方法

コンテンツ管理は`markdown`ディレクトリ配下で行っており、形式はマークダウンを想定している。

そのため、`markdown`ディレクトリ内に、`.md`ファイルを作成し、マークダウン形式で書くことで記事の入稿が可能。
`.md`拡張子以外は除外されるので注意。

## 使用技術、ライブラリ
- Next.js
- TailwindCSS
- shadcn/ui
- Storybook
- Vitest
- msw
- marked
- react-icons
- highlight.js
- html-react-parser
- gray-matter
- dompurify
- jsdom

## ディレクトリ構造

```
.
├── __mocks__
├── app
├── components
│   ├── layouts
│   ├── posts
│   ├── shared
│   ├── ui
│   └── zenn
├── features
│   ├── posts
│   └── zenn
├── lib
├── markdown
├── public
├── styles
├── types
└── utils
```

- `__mocks__`: 開発環境で使うためのモックデータ、モックモジュール。開発環境のZenn一覧ページで記事一覧を取得するAPIや、Vitestの際に使用するfsモジュールのモックなどが入っている。
- `app`: 実際にUI上に公開されるページ群
- `components`: ページで使用する各コンポーネントや、ページ。配下のディレクトリ構造は、以下のようになっている。
  - `layouts`: サイト全体のレイアウト関連のコンポーネント。ヘッダー、フッターや、サイトやZennの記事一覧表示で使用する共通レイアウトを格納。
  - `posts`, `zenn`など: /posts, /zennなどそのページでのみ必要なコンポーネント。
  - `shared`: 全体で共通のコンポーネント。
  - `ui`: shadcn/uiのコンポーネント。
- `features`: 各画面で必要なAPIリクエストや、markdownファイルの読み取りなどロジック関連。こちらもページ単位でディレクトリを切る。
- `lib`: ライブラリの初期化やラッパー関数など。
- `markdown`: 記事として入稿するマークダウンファイル。
- `public`: 画像やフォントなどの静的アセット群。
- `styles`: CSSファイル。（基本はTailwind CSSでスタイリングしているがグローバルCSSや、一部CSS Modulesを使用している）
- `types`: 型定義ファイル。
- `utils`: 特定のコンポーネントやページに依存しない共有ロジック。