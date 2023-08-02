# nextjs-static13

[Deploying: Static Exports | Next.js](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
に従って、Next.js v13 を静的にビルドしてみるテスト。

## 手順

- 普通のNext.jsプロジェクトを作る
  - `pnpx create-next-app@latest --no-src-dir --import-alias '@/*' --ts --tailwind --eslint --app --use-pnpm static13`
  - lauout.tsxとpage.tsxとglobal.cssをいじる。
  - tailwindのタイポグラフィやDaisyUIのテーマなど入れる(オプション)。
- `pnpm dev` で動作を確認する。
- `pnpm build && pnpm start` で動作確認する。
- next.config.js に `output: 'export'` 書く。
- `pnpm build && pnpm start` で `Error: "next start" does not work with "output: export" configuration. Use "npx serve@latest out" instead.` と怒られる。
- ので `pnpx serve@latest out` を実行し(`pnpm serve`にした) <http://localhost:3000> で確認する

## メモ: nextconfig の output オプションに指定できる値

- `undefined` - デフォルトのビルド出力。.next/ ディレクトリ以下に出力される。本番モードの`next start` (または`npm run start`)、またはVercelのようなホスティングプロバイダで動作する。
- `'standalone'` - .next/standalone/ ディレクトリに スタンドアロンビルドとして出力される。必要なファイル/依存関係のみを含む(public/と.next/static/に注意)。Dockerコンテナでセルフホストする場合に便利。
- `'export'` - 静的なHTML/CSS/JSのみを含む。out/ディレクトリに出力される。Node.jsサーバーなしでセルフホストする場合に便利。
