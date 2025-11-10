# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

このプロジェクトは、Next.js 16 (App Router)、TypeScript、Supabase、shadcn/uiを使用したWebアプリケーションです。

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router)
- **言語**: TypeScript
- **パッケージマネージャー**: pnpm
- **スタイリング**: Tailwind CSS v4
- **UIコンポーネント**: shadcn/ui (New York style) + Radix UI
- **バックエンド/認証**: Supabase (SSR対応)
- **フォーム管理**: React Hook Form + Zod
- **日付処理**: date-fns
- **アイコン**: lucide-react

## 開発コマンド

### 基本コマンド

```bash
# 開発サーバーの起動
pnpm dev

# プロダクションビルド
pnpm build

# プロダクションサーバーの起動
pnpm start

# リント実行
pnpm lint
```

### shadcn/ui コンポーネント追加

```bash
# 新しいコンポーネントを追加
pnpm dlx shadcn@latest add [component-name]
```

## プロジェクト構造

```
discalendarv4/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # ルートレイアウト
│   ├── page.tsx             # ホームページ
│   ├── globals.css          # グローバルスタイル
│   ├── login/               # ログインページ
│   │   ├── page.tsx
│   │   └── actions.ts       # Server Actions (認証処理)
│   ├── error/               # エラーページ
│   └── instrument/          # 計測ページ
├── src/
│   └── middleware.ts        # Supabaseセッション管理ミドルウェア
├── components/
│   └── ui/                  # shadcn/uiコンポーネント
├── lib/
│   └── utils.ts             # ユーティリティ関数 (cn helper)
├── hooks/                   # カスタムReactフック
│   └── use-mobile.ts
└── utils/
    └── supabase/            # Supabase関連ユーティリティ
        ├── client.ts        # ブラウザ用クライアント
        ├── server.ts        # サーバーコンポーネント用クライアント
        └── middleware.ts    # ミドルウェア用ヘルパー
```

## アーキテクチャパターン

### Supabase クライアントの使い分け

Supabaseクライアントは実行環境によって適切なものを使用します:

1. **Server Components**: `utils/supabase/server.ts`
   - `createClient()` を使用
   - クッキーベースのセッション管理

2. **Client Components**: `utils/supabase/client.ts`
   - ブラウザ環境で使用
   - `createBrowserClient()` を使用

3. **Middleware**: `utils/supabase/middleware.ts`
   - セッション更新とリフレッシュ
   - 全リクエストで自動実行 (静的ファイルを除く)

### Server Actions

認証やデータ変更は Server Actions を使用します ([app/login/actions.ts:1-47](app/login/actions.ts#L1-L47))。

- ファイルの先頭に `'use server'` ディレクティブを追加
- `revalidatePath()` でキャッシュを無効化
- `redirect()` で適切なページへリダイレクト

### パスエイリアス

`@/*` は プロジェクトルートを指します ([tsconfig.json:21-23](tsconfig.json#L21-L23)):

```typescript
import { createClient } from '@/utils/supabase/server'
import { Button } from '@/components/ui/button'
```

## スタイリング規約

### Tailwind CSS

- Tailwind CSS v4を使用
- `cn()` ユーティリティで条件付きクラスを結合 ([lib/utils.ts:1](lib/utils.ts#L1))

```typescript
import { cn } from '@/lib/utils'

<div className={cn("base-class", condition && "conditional-class")} />
```

### shadcn/ui コンポーネント

- New Yorkスタイルを使用
- CSS変数でテーマをカスタマイズ ([app/globals.css:1-90](app/globals.css#L1-L90))
- コンポーネントは `components/ui/` に配置

## 環境変数

Supabase接続に必要な環境変数:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

## 認証フロー

1. ユーザーがログインフォームを送信
2. Server Action ([app/login/actions.ts:8-26](app/login/actions.ts#L8-L26)) が実行
3. Supabaseで認証処理
4. 成功時: ホームページへリダイレクト
5. エラー時: エラーページへリダイレクト
6. Middleware ([src/middleware.ts:4-6](src/middleware.ts#L4-L6)) が全リクエストでセッションを更新

## フォーム処理

React Hook Form + Zodを使用してフォームバリデーションを実装:

1. Zodスキーマでバリデーションルールを定義
2. `@hookform/resolvers` でスキーマを統合
3. `useForm` フックでフォーム状態を管理
4. Server Actionsまたはクライアントサイドでの送信処理

## 開発時の注意事項

### Server ComponentsとClient Components

- デフォルトはServer Components
- `'use client'` ディレクティブでClient Componentsを明示
- イベントハンドラやフックを使う場合はClient Components
- Supabaseクライアントは環境に応じて使い分け

### ミドルウェア

[src/middleware.ts:8-19](src/middleware.ts#L8-19) で定義されたパターンに一致する全リクエストで実行:

- 静的ファイル (`_next/static`, `_next/image`) は除外
- 画像ファイル (svg, png, jpg等) は除外
- ファビコンは除外

### 型安全性

- TypeScript strictモードを有効化
- Server Actionsの入力は適切にバリデーション
- Zodスキーマで実行時の型検証を実施

## 推奨される開発手順

1. 新機能の実装前にContext7 MCPで最新のドキュメントを確認
2. 適切なコンポーネントの場所を決定 (Server/Client)
3. 必要に応じてshadcn/uiコンポーネントを追加
4. TypeScriptの型定義を明確に
5. Server Actionsを使用してデータ変更
6. 実装後は適切な日本語のコミットメッセージでGitコミット
