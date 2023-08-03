# nextjs-static13

[Deploying: Static Exports | Next.js](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
に従って、Next.js v13 を静的にビルドしてみるテスト。

## 手順

- 普通のNext.jsプロジェクトを作った。
  - `pnpx create-next-app@latest --no-src-dir --import-alias '@/*' --ts --tailwind --eslint --app --use-pnpm static13`
  - lauout.tsxとpage.tsxとglobal.cssをいじった。
  - tailwindのタイポグラフィやDaisyUIのテーマなど入れた(オプション)。
- `pnpm dev` で動作を確認した。
- `pnpm build && pnpm start` で動作確認。
- next.config.js に `output: 'export'` 書いた。
- `pnpm build && pnpm start` で `Error: "next start" does not work with "output: export" configuration. Use "npx serve@latest out" instead.` と怒られる。
- ので `pnpx serve@latest out` を実行し(`pnpm serve` にした) <http://localhost:3000> で確認。

## TODO

- Actions で GitHub Pages に出す。
  - そのためには basePath の処理が要る。

## メモ

### nextconfig の output オプションに指定できる値

- `undefined` - デフォルトのビルド出力。.next/ ディレクトリ以下に出力される。本番モードの`next start` (または`npm run start`)、またはVercelのようなホスティングプロバイダで動作する。
- `'standalone'` - .next/standalone/ ディレクトリに スタンドアロンビルドとして出力される。必要なファイル/依存関係のみを含む(public/と.next/static/に注意)。Dockerコンテナでセルフホストする場合に便利。(ここ参照: [next\.config\.js Options: output \| Next\.js](https://nextjs.org/docs/pages/api-reference/next-config-js/output#automatically-copying-traced-files))
- `'export'` - 静的なHTML/CSS/JSのみを含む。**out/ ディレクトリ** に出力される。Node.jsサーバーなしでセルフホストする場合に便利。

### next/imageが basePath を考慮してくれない

`next/link`はbasePath入れてくれるのになんで?

- [next.config.js Options: basePath | Next.js](https://nextjs.org/docs/app/api-reference/next-config-js/basePath#images) - 「basePath付け加えろ」って書いてある。
- [reactjs - How does Next.js basePath works for images? - Stack Overflow](https://stackoverflow.com/questions/65930789/how-does-next-js-basepath-works-for-images) - 解決方法

`next.config.js`はcjsとみなされるので、export の仕方に注意。

### basePath つきで Static Expoertしたものをserveで試すとき

[.env.production](.env.production) に

```
NEXTCONFIG_BASEPATH="/nextjs-static13"
```

と書いてあるので、このまま `pnpm build` した場合 out/ の下が <http://localhost:3000/nextjs-static13> にならないといけない。

[serve](https://github.com/vercel/serve#readme) は basePath を設定する機能があるわけではないので、以下のようにして試す。

```bash
mkdir -p tmp
ln -sf ../out tmp/nextjs-static13
serve tmp
# http://localhost:3000/nextjs-static13 をブラウザで開く
```

### .env\* はすでに存在している環境変数を上書きしない

`.env*`の評価順も同様
