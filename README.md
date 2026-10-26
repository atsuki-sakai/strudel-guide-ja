# Strudel 入門ガイド（日本語）

ブラウザだけで音楽をライブコーディングできる **[Strudel](https://strudel.cc)** の、日本語の入門ガイドです。
インストール不要で、5 分後には自分で書いたコードで音を鳴らせます。

> [!NOTE]
> これは有志による**非公式**のガイドです。公式ドキュメント（英語）は <https://strudel.cc/learn/> にあります。
> 内容は 2026 年 10 月時点の Strudel をもとにしています。

> [!WARNING]
> 最初はパソコンの音量を**小さめ**にしてから再生してください。急に大きな音が出ることがあります。

---

## 目次

1. [Strudel とは](#1-strudel-とは)
2. [5 分クイックスタート](#2-5-分クイックスタート)
3. [使える環境（ブラウザ版・ローカル版）](#3-使える環境)
4. [画面の見方](#4-画面の見方)
5. [キーボードショートカット](#5-キーボードショートカット)
6. [基本の考え方：サイクルとパターン](#6-基本の考え方サイクルとパターン)
7. [音を鳴らす：sound と bank](#7-音を鳴らすsound-と-bank)
8. [ミニ記法：リズムの書き方](#8-ミニ記法リズムの書き方)
9. [テンポを変える](#9-テンポを変える)
10. [音程を鳴らす：note・n・scale](#10-音程を鳴らすnotenscale)
11. [複数のパートを同時に鳴らす](#11-複数のパートを同時に鳴らす)
12. [エフェクト](#12-エフェクト)
13. [シグナルで値を自動で動かす](#13-シグナルで値を自動で動かす)
14. [パターンを変形する](#14-パターンを変形する)
15. [パターンを目で見る](#15-パターンを目で見る)
16. [1 曲つくってみる](#16-1-曲つくってみる)
17. [保存・共有・書き出し](#17-保存共有書き出し)
18. [自分のサンプルを使う](#18-自分のサンプルを使う)
19. [困ったとき](#19-困ったとき)
20. [記号チートシート](#20-記号チートシート)
21. [次のステップ](#21-次のステップ)
22. [このガイドについて](#22-このガイドについて)

---

## 1. Strudel とは

Strudel は、Web ブラウザの中でコードを書いて音楽を演奏する**ライブコーディング**の環境です。
Haskell で書かれたライブコーディング言語 [TidalCycles](https://tidalcycles.org) を JavaScript に移植したもので、
無料・オープンソース（AGPL-3.0）で公開されています。作った音楽はあなたのものです。

**できること**

- ドラム・ベース・メロディなどのパターンを短いコードで書いて、すぐに鳴らす
- 演奏を止めずにコードを書き換えて、音楽をその場で変えていく（これが「ライブコーディング」）
- フィルター・リバーブ・ディレイなどのエフェクトをかける
- 作った曲を URL で共有する、WAV ファイルに書き出す
- MIDI / OSC で外部のシンセや DAW を鳴らす（このガイドでは扱いません）

**DAW との違い**

Logic や Ableton Live などの DAW は「タイムラインの上に音を並べていく」道具です。
Strudel は「繰り返すパターンを書き、それを変形していく」道具です。
発想がかなり違うので、最初から DAW のように曲を順番に組み立てようとせず、
**短いループを鳴らしながら少しずつ書き換えて遊ぶ**のがおすすめです。

---

## 2. 5 分クイックスタート

1. ブラウザ（Chrome / Edge / Firefox / Safari）で <https://strudel.cc> を開きます。
2. 左側のエディタに最初からコードが入っています。画面上部の **play** を押します。
   → ドラムが鳴り始めます。
3. エディタの中身をすべて消して、次の 1 行を書きます。

   ```js
   sound("bd hh sd hh")
   ```

4. エディタをクリックしてから `Ctrl + Enter` を押します（画面上部の **update** でも同じです）。
   → キック・ハイハット・スネア・ハイハットが繰り返し鳴ります。
5. `sd` を `cp` に書き換えて、もう一度 `Ctrl + Enter`。
   → **演奏が止まらないまま**音が変わります。これがライブコーディングです。
6. `Ctrl + .`（Ctrl キーとピリオド）で止めます。

> [!TIP]
> Mac でも `Ctrl` は **control キー**です（⌘ command キーではありません）。
> `option + Enter`（実行）と `option + .`（停止）でも同じ操作ができます。

---

## 3. 使える環境

### A. ブラウザ版（おすすめ）

<https://strudel.cc> を開くだけで使えます。書いたコードはブラウザの中に自動で保存されます。

- 最新の開発版は <https://warm.strudel.cc> です。新機能をいち早く試せますが、不安定なことがあります。

### B. ローカル版（自分のパソコンで動かす）

公式リポジトリを動かすと、strudel.cc と同じ画面を自分のパソコンで起動できます。
コードを改造したい人や、最新の開発中の機能を試したい人向けです。

**必要なもの**: [git](https://git-scm.com/)、[Node.js](https://nodejs.org/) 18 以上（22 を推奨）、[pnpm](https://pnpm.io/)

```bash
git clone https://codeberg.org/uzu/strudel.git
cd strudel

# pnpm がまだ無い場合（Node.js 22 に同梱の corepack を使う方法）
corepack enable

pnpm i     # 依存パッケージをインストール
pnpm dev   # 開発サーバーを起動
```

起動したらブラウザで <http://localhost:4321/> を開きます。
止めるときは、ターミナルで `Ctrl + C` を押します。

> [!NOTE]
> 公式リポジトリは GitHub から [Codeberg](https://codeberg.org/uzu/strudel) に移っています。
> 古い記事に載っている `github.com/tidalcycles/strudel` は使わないでください。
> また、音源（サンプル）はローカル版でもインターネットから読み込まれます。

### C. エディタの拡張機能（上級者向け）

コミュニティ製の実験的な拡張機能があります。

- VS Code: [Strudel VS](https://marketplace.visualstudio.com/items?itemName=cmillsdev.strudelvs)
- Neovim: [strudel.nvim](https://github.com/gruvw/strudel.nvim)

---

## 4. 画面の見方

画面は大きく 3 つに分かれています。

| 場所 | 役割 |
| --- | --- |
| 左：エディタ | コードを書く場所。再生中は、いま鳴っている音の部分がコード上で光ります |
| 上：ヘッダー | 再生・反映・共有などのボタン |
| 右：パネル | 音色の一覧、関数のリファレンス、設定など。閉じているときは右端の `<` で開けます |

### ヘッダーのボタン

| ボタン | 働き |
| --- | --- |
| **play** / **stop** | 再生と停止 |
| **update** | 書き換えたコードを反映する（`Ctrl + Enter` と同じ） |
| **share** | いまのコードを含んだ URL をクリップボードにコピーする。その URL を開いた人は同じコードで再生できる |
| **learn** | 公式チュートリアル（英語）を開く |

左上の **strudel ロゴ**をクリックすると、エディタだけを表示する「Zen モード」になります。

### パネルのタブ

| タブ | 内容 |
| --- | --- |
| **welcome** | 最初の案内 |
| **patterns** | 自分のパターンの一覧。`new`（新規）、`duplicate`（複製）、`delete`（削除）、`import` / `export`（ファイルに保存・読み込み） |
| **sounds** | 使える音色の一覧。`samples`、`drum-machines`、`Synths`、`Wavetables`、`User`（自分で読み込んだ音）、`import-sounds` で切り替えられ、名前をクリックすると試聴できる |
| **reference** | すべての関数の説明（英語） |
| **export** | 曲を WAV ファイルに書き出す |
| **console** | ログとエラーの表示。うまく鳴らないときはまずここを見る |
| **settings** | テーマ、フォント、文字サイズ、キーバインド（Vim / Emacs など）、出力デバイスなどの設定 |

---

## 5. キーボードショートカット

| 操作 | Windows / Linux | Mac |
| --- | --- | --- |
| 実行・反映 | `Ctrl + Enter` または `Alt + Enter` | `control + return` または `option + return` |
| 停止 | `Ctrl + .` または `Alt + .` | `control + .` または `option + .` |
| 選択行をコメントにする・戻す | `Ctrl + /` | `⌘ + /` |
| 元に戻す | `Ctrl + Z` | `⌘ + Z` |

> [!TIP]
> 行の先頭に `//` を付けると、その行は無視されます（コメント）。
> パートを一時的に止めたいときに便利です。

---

## 6. 基本の考え方：サイクルとパターン

### サイクル

Strudel の時間の単位は**サイクル（cycle）**です。初期設定では **1 サイクル = 2 秒** です。
書いたパターンは 1 サイクルの中に均等に詰め込まれ、それがずっと繰り返されます。

```js
sound("bd hh sd hh")
```

上のコードは「2 秒の中に 4 つの音を均等に並べる」という意味なので、0.5 秒ごとに音が鳴ります。

```js
sound("bd hh sd hh bd hh sd hh")
```

音を 8 つに増やすと、同じ 2 秒に詰め込まれるので**速く**なります。
「音を増やすと速くなる」のが Strudel の大事な特徴です。

### コードの読み方

```js
note("c e g").sound("piano").room(0.5) // ピアノで「ド・ミ・ソ」
```

- `note(...)`、`sound(...)`、`room(...)` は**関数**です。カッコの中に値を渡します。
- 関数を `.`（ドット）でつなげることを**チェーン**と呼びます。ギターのエフェクターを順番につなぐイメージです。
- ダブルクォート `"..."` で囲んだ部分は**ミニ記法**（リズムを書くための小さな言語）として読まれます。
  シングルクォート `'...'` で囲むと、ミニ記法としては読まれない、ただの文字列になります。
- `//` から行末までは**コメント**です。演奏には影響しません。

### 関数の順番に注意

```js
note("c e g b").sound("piano")
```

これは 4 つの音が鳴ります。ところが、順番を逆にして `sound("piano").note("c e g b")` と書くと、最初の 1 音しか鳴りません。
**最初に書いた関数のリズムが、パターン全体のリズムになる**からです。
リズムを決めたいもの（ここでは `note`）を先に書きましょう。

---

## 7. 音を鳴らす：sound と bank

### sound で音を出す

```js
sound("casio")
```

`sound` は短く `s` とも書けます（`s("casio")` も同じ意味）。
最初から使える音の例: `insect` `wind` `jazz` `metal` `east` `crow` `casio` `space` `numbers`

> [!NOTE]
> 初めて使う音は読み込みに少し時間がかかるため、最初の 1 回だけ音が遅れたり鳴らなかったりします。

### サンプル番号を選ぶ

1 つの音の名前には、複数の音声ファイル（**サンプル**）が入っています。`:番号` で選べます。番号を省略すると `:0` になります。

```js
sound("casio casio:1 casio:2 numbers:3")
```

`n` を使うと、番号だけを別に書けるので読みやすくなります。

```js
n("0 1 [4 2] 3").sound("jazz")
```

### ドラムの音の名前

| 名前 | 意味 |
| --- | --- |
| `bd` | **b**ass **d**rum（キック、バスドラム） |
| `sd` | **s**nare **d**rum（スネア） |
| `rim` | **rim**shot（リムショット） |
| `cp` | **c**la**p**（クラップ、手拍子） |
| `hh` | **h**i**h**at（クローズドハイハット） |
| `oh` | **o**pen **h**ihat（オープンハイハット） |
| `lt` / `mt` / `ht` | **l**ow / **m**iddle / **h**igh **t**om（タム） |
| `rd` | **r**i**d**e（ライドシンバル） |
| `cr` | **cr**ash（クラッシュシンバル） |

```js
sound("bd hh sd oh")
```

### bank でドラムマシンを切り替える

`bank` で、実在する有名なドラムマシンの音に切り替えられます。

```js
sound("bd hh sd oh").bank("RolandTR909")
```

| bank 名 | 特徴 |
| --- | --- |
| `RolandTR808` | ヒップホップやトラップでおなじみの太い低音 |
| `RolandTR909` | ハウス・テクノの定番 |
| `RolandTR707` | 80 年代ポップスの音 |
| `AkaiLinn` | 80 年代のサンプリングドラム |
| `RhythmAce` | 60〜70 年代のリズムマシン |
| `ViscoSpaceDrum` | 個性的なビンテージの音 |

`tr909` のような短い名前でも指定できます。ほかにもたくさんあるので、パネルの **sounds → drum-machines** で探してみてください。

```js
sound("bd*2, - cp, hh*4").bank("tr808")
```

---

## 8. ミニ記法：リズムの書き方

`"..."` の中に書く**ミニ記法**は、Strudel でいちばん大事な部分です。
ここで紹介する記号は、ドラムにもメロディにも、エフェクトの値にも同じように使えます。

### 8.1 並べる：スペース

スペースで区切った要素が、1 サイクルの中に均等に並びます。

```js
sound("bd hh sd hh")
```

### 8.2 休符：`-` または `~`

```js
sound("bd - sd -")
```

### 8.3 グループ：`[ ]`

`[ ]` の中身は、**1 マス分の時間**に詰め込まれます。1 拍を細かく分けたいときに使います。

```js
sound("bd [hh hh] sd [hh bd]")
```

いくらでも入れ子にできます。

```js
sound("bd [[rim rim] hh] bd cp")
```

### 8.4 速くする：`*`

`*2` で、その要素をそのマスの中で 2 回鳴らします（2 倍速）。グループにも使えます。

```js
sound("bd hh*2 sd hh*3")
```

```js
sound("bd [hh rim]*2 bd [hh rim]*1.5")
```

### 8.5 遅くする：`/`

`/2` で、そのパターンを 2 サイクルかけて 1 周させます。

```js
note("[c e g b]/2").sound("piano")
```

### 8.6 サイクルごとに 1 つずつ：`< >`

`< >` の中身は、**1 サイクルに 1 つずつ**順番に鳴ります。
下の例は、1 サイクル目が `sd`、2 サイクル目が `cp`、3 サイクル目がまた `sd`…と交互になります。

```js
sound("bd <sd cp>")
```

`<a b c>` は `[a b c]/3` と同じ意味です。
`< >` の便利な点は、**要素を増やしても減らしてもテンポが変わらない**ことです。`*8` と組み合わせると、要素を足し引きしてもテンポが一定の 8 ステップになります。

```js
sound("<bd hh sd hh bd bd sd oh>*8")
```

### 8.7 同時に鳴らす：`,`

`,` で区切ると、それぞれのパターンが**同時に**鳴ります。

```js
sound("bd*2, hh*4, - cp")
```

### 8.8 長くする：`@`

`@3` は「3 マス分の長さ」という意味です。

```js
note("c@3 e").sound("piano")
```

### 8.9 繰り返す：`!`

`!3` は「同じものを 3 マス分並べる」という意味です。

```js
note("c!3 e").sound("piano")
```

> [!TIP]
> `*`、`!`、`@` の違い
> - `c*3 e` … `c` のマスの中で `c` を 3 回鳴らす（マスは 2 つ）
> - `c!3 e` … `c` を 3 マス並べる（マスは 4 つ）
> - `c@3 e` … `c` を 3 マス分の長さで 1 回鳴らす（`c` が全体の 3/4）

### 8.10 ランダム：`?` と `|`

`?` を付けると、その音が 50% の確率で鳴らなくなります。`?0.2` のように確率も指定できます。

```js
sound("hh*16?, bd*4")
```

`|` で区切ると、サイクルごとにどれか 1 つがランダムに選ばれます。

```js
sound("bd*2 | hh*4 | cp*3")
```

### 8.11 ユークリッドリズム：`(数, 分割数)`

`bd(3,8)` は「8 マスの中に `bd` を 3 つ、なるべく均等に置く」という意味です。世界中の民族音楽によく出てくるリズムが簡単に作れます。

```js
sound("bd(3,8), hh*8, - cp")
```

### 8.12 複数行で書く：バッククォート

`` ` ``（バッククォート）で囲むと、パターンを複数行に分けて書けます。
次の例は、16 ステップのリズムマシンをまねた書き方です。

```js
setcpm(90/4)
sound(`
[-  -  oh - ] [-  -  -  - ] [-  -  -  - ] [-  -  -  - ],
[hh hh -  - ] [hh -  hh - ] [hh -  hh - ] [hh -  hh - ],
[-  -  -  - ] [cp -  -  - ] [-  -  -  - ] [cp -  -  - ],
[bd -  -  - ] [-  -  -  bd] [-  -  bd - ] [-  -  -  bd]
`)
```

---

## 9. テンポを変える

テンポは `setcpm`（cycles per minute＝1 分あたりのサイクル数）で決めます。初期値は 30（1 サイクル 2 秒）です。

**1 サイクルを 4 拍（4/4 拍子の 1 小節）と考えるなら、`setcpm(BPM/4)` と書けば BPM で指定できます。**

```js
setcpm(120/4) // BPM 120
sound("bd*4, [- cp]*2, [- hh]*4").bank("RolandTR909")
```

1 秒あたりのサイクル数で指定する `setcps` もあります。`setcps(0.5)` は `setcpm(30)` と同じです。

```js
setcps(0.5)
sound("bd sd")
```

### 定番リズムの例

```js
// ロックの基本ビート
setcpm(100/4)
sound("[bd sd]*2, hh*8").bank("RolandTR505")
```

```js
// ハウスの定番
setcpm(124/4)
sound("bd*4, [- cp]*2, [- hh]*4").bank("RolandTR909")
```

ロックとハウスのパターンがとても似ていることに注目してください。同じ形のリズムが、ジャンルをまたいで使われています。

---

## 10. 音程を鳴らす：note・n・scale

### 10.1 note：音名で書く

`note` で音の高さを指定します。

```js
note("c e g b").sound("piano")
```

| 音名 | c | d | e | f | g | a | b |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ドレミ | ド | レ | ミ | ファ | ソ | ラ | シ |

- **シャープ（♯）** は `#`、**フラット（♭）** は `b` を付けます。例: `c#`、`eb`、`bb`
- **オクターブ**は後ろに数字を付けます。数字が大きいほど高くなります。省略すると `3` になります。

```js
note("c2 e3 g4 b5").sound("piano")
```

```js
note("db eb gb ab bb").sound("piano") // 黒鍵
```

### 10.2 note：数字で書く

数字を書くと MIDI ノート番号として扱われます。`60` が真ん中のド（`c4`）で、1 増えるごとに半音上がります。

```js
note("48 52 55 59").sound("piano")
```

### 10.3 音色を変える

`sound` に楽器名を書くと音色が変わります。`sound` を省略すると、シンプルなシンセの音になります。

| 種類 | 例 |
| --- | --- |
| ピアノ | `piano` |
| General MIDI の楽器 | `gm_acoustic_bass`、`gm_electric_guitar_muted`、`gm_voice_oohs`、`gm_xylophone`、`gm_synth_strings_1` など |
| シンセの基本波形 | `sawtooth`（ノコギリ波）、`square`（矩形波）、`triangle`（三角波）、`sine`（サイン波） |

```js
note("36 43, 52 59 62 64").sound("gm_electric_guitar_muted")
```

ミニ記法は `sound` の中でも使えます。

```js
note("48 67 63 [62, 58]").sound("piano, gm_electric_guitar_muted") // 2 つの音色を重ねる
```

### 10.4 和音（コード）

`[ ]` の中を `,` で区切ると、同時に鳴る和音になります。

```js
note("<[c3,eb3,g3] [ab2,c3,eb3] [bb2,d3,f3] [g2,b2,d3]>").sound("piano")
```

### 10.5 scale：音を外さずにメロディを作る

音名で正しい音を選ぶのは大変です。`n` と `scale` を使うと、**数字で書いても必ずスケール（音階）の中の音になる**ので、音を外しません。

```js
n("0 2 4 <[6,8] [7,9]>").scale("C:minor").sound("piano")
```

`n` の数字は「スケールの何番目の音か」を表します。`0` が主音（スケールの最初の音）です。マイナスの数字も使えます。

| スケールの例 | 雰囲気 |
| --- | --- |
| `C:major` | 明るい（ハ長調） |
| `A2:minor` | 暗い・切ない（イ短調。`2` はオクターブ） |
| `D:dorian` | ちょっとおしゃれなマイナー |
| `G:mixolydian` | ブルージーなメジャー |
| `A2:minor:pentatonic` | どの音を弾いても合う 5 音のマイナー |
| `F:major:pentatonic` | 民謡っぽい 5 音のメジャー |

スケールもパターンで切り替えられます。

```js
n("0 2 4 6 4 2").scale("<C:major A2:minor>").sound("piano")
```

### 10.6 note と n の違い

- `note` … 音の高さそのもの（`c3`、`60` など）
- `n` … 「何番目か」を表す番号。`scale` と組み合わせると「スケールの何番目の音か」、サンプルと組み合わせると「何番目のサンプルか」になる

`s` と `sound` は同じものですが、`n` と `note` は**別のもの**です。

### 10.7 ベースラインの例

```js
note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>").sound("gm_synth_bass_1").lpf(800)
```

---

## 11. 複数のパートを同時に鳴らす

### `$:` で並べる

行の先頭に `$:` を付けると、それぞれが独立したパートとして**同時に**鳴ります。

```js
$: sound("bd*4, [- cp]*2, [- hh]*4").bank("RolandTR909")
$: note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>").sound("gm_synth_bass_1").lpf(800)
```

### ミュートとソロ

| 書き方 | 効果 |
| --- | --- |
| `_$:` | そのパートを**ミュート**（鳴らさない） |
| `S$:` | そのパートだけを**ソロ**で鳴らす |

```js
$: sound("bd*4").bank("RolandTR909")
_$: sound("[- hh]*4").bank("RolandTR909") // ← ミュート中。_ を消して Ctrl + Enter すると鳴る
```

### stack でまとめる

`stack` を使っても、複数のパターンを同時に鳴らせます。

```js
stack(
  sound("bd*4, [- cp]*2"),
  note("c3 eb3 g3 bb3").sound("piano")
)
```

---

## 12. エフェクト

エフェクトは、パターンの後ろに `.` でつなげて使います。値にもミニ記法が使えるので、エフェクトのかかり具合をリズムに合わせて変えられます。

| 関数 | 効果 | 値の目安 |
| --- | --- | --- |
| `lpf` | ローパスフィルター。指定した周波数より高い音を削る（こもった音になる） | 100〜10000（Hz） |
| `hpf` | ハイパスフィルター。指定した周波数より低い音を削る（軽い音になる） | 100〜5000（Hz） |
| `vowel` | 「あいうえお」のような母音の響きにする | `"a"` `"e"` `"i"` `"o"` `"u"` |
| `gain` | 音量 | 0〜1 くらい（上げすぎると音が割れる） |
| `attack` / `decay` / `sustain` / `release` | 音の立ち上がりと消え方（ADSR） | 秒数、sustain は 0〜1 |
| `delay` | やまびこ（ディレイ） | 0〜1 |
| `room` | 部屋の響き（リバーブ） | 0〜1 くらい |
| `pan` | 左右の位置 | 0（左）〜 1（右） |
| `speed` | 再生速度（サンプルの音の高さも変わる）。マイナスで逆再生 | `2` で 2 倍速、`-1` で逆再生 |

### lpf：ローパスフィルター

数字を小さくすると、ドアを閉めたクラブの外で聞いているようなこもった音に、大きくすると明るい音になります。

```js
note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>").sound("sawtooth").lpf("200 1000 200 1000")
```

### hpf：ハイパスフィルター

```js
sound("bd*4, hh*8").bank("RolandTR909").hpf("<100 2000>")
```

### vowel：母音フィルター

```js
note("<[c3,g3,e4] [bb2,f3,d4] [a2,f3,c4] [bb2,g3,eb4]>").sound("sawtooth").vowel("<a e i o>")
```

### gain：音量で強弱をつける

```js
$: sound("hh*16").gain("[.25 1]*4")
$: sound("bd*4, [- sd]*2")
```

`.gain(...)` を消すと、のっぺりしたリズムになるのがわかります。`.25` は `0.25` を短く書いたものです。

### ADSR：音の形を変える

```js
note("c3 bb2 f3 eb3").sound("sawtooth").lpf(600)
  .attack(.1)  // 音が最大になるまでの時間
  .decay(.1)   // sustain の音量まで下がるまでの時間
  .sustain(.25) // 鳴らし続けている間の音量（0〜1）
  .release(.2) // 音が終わってから消えるまでの時間
```

`.adsr("attack:decay:sustain:release")` とまとめても書けます。

```js
note("c3 bb2 f3 eb3").sound("sawtooth").lpf(600).adsr(".1:.1:.5:.2")
```

### delay：ディレイ

`delay("音量:間隔:フィードバック")` の形で細かく指定できます。フィードバックが小さいほど早く消えます。

```js
sound("bd rim").bank("RolandTR707").delay(".5:.125:.6")
```

### room：リバーブ

```js
n("<4 [3@3 4] [<2 0> ~@16] ~>").scale("D4:minor").sound("gm_accordion:2").room(2)
```

### pan：左右の位置

```js
sound("numbers:1 numbers:2 numbers:3 numbers:4").pan("0 0.3 .6 1")
```

### speed：再生速度・逆再生

```js
sound("bd rim [- bd] rim").speed("<1 2 -1 -2>").room(.2)
```

---

## 13. シグナルで値を自動で動かす

エフェクトの値を、波の形にそってなめらかに動かせます。シンセのツマミを自動で回すイメージです。

| シグナル | 動き方 |
| --- | --- |
| `sine` | なめらかに上下する（サイン波） |
| `saw` | 少しずつ上がって、一気に下がる（ノコギリ波） |
| `square` | 0 と 1 を行ったり来たり |
| `tri` | 一定の速さで上がって下がる（三角波） |
| `rand` | ランダム |
| `perlin` | なめらかなランダム |

シグナルは 0〜1 の間を動きます。

```js
sound("hh*16").gain(sine)
```

`range(最小, 最大)` で動く範囲を変えられます。

```js
sound("hh*16").lpf(saw.range(500, 4000))
```

`slow` を付けると、ゆっくり動きます。下の例では、フィルターが 4 サイクル（8 秒）かけて 1 往復します。

```js
note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>").sound("sawtooth").lpf(sine.range(100, 2000).slow(4))
```

---

## 14. パターンを変形する

Strudel（TidalCycles）ならではの、パターンそのものを変形する関数です。

| 関数 | 働き |
| --- | --- |
| `fast(n)` / `slow(n)` | パターン全体を n 倍速く / 遅くする（ミニ記法の `*` と `/` と同じ） |
| `rev()` | パターンを逆順にする |
| `jux(関数)` | 左はそのまま、右には関数をかけたものを鳴らす |
| `add(値)` | 音の高さ（数値）を足す |
| `ply(n)` | 1 つ 1 つの音を n 回ずつ鳴らす |
| `off(時間, 関数)` | パターンをコピーして時間をずらし、関数をかけて重ねる |

### fast と slow

```js
sound("bd*2, - rim, hh*4").slow(2)
```

```js
sound("bd*2, - rim, hh*4").fast("<1 [2 4]>")
```

### rev：逆にする

```js
n("0 1 [4 3] 2 0 2 [- 3] 4").sound("jazz").rev()
```

### jux：左右で別のパターン

左からは元のパターン、右からは `rev`（逆順）にしたものが鳴ります。ヘッドホンで聞くとよくわかります。

```js
n("0 1 [4 3] 2 0 2 [- 3] 4").sound("jazz").jux(rev)
```

### add：音程をずらす

```js
n("0 2 4 6".add("<0 1 2 1>")).scale("C:minor").sound("piano")
```

`add` は何回でも重ねられます。`"0,4"` を足すと、元の音と、スケール上で 4 つ上の音が同時に鳴ります（ハモり）。

```js
n("0 2 4 6".add("<0 1 2 1>").add("0,4")).scale("C:minor").sound("piano")
```

### ply：1 音ずつ繰り返す

```js
sound("hh hh, bd rim [- cp] rim").ply("<1 2 1 3>").bank("RolandTR707")
```

> [!IMPORTANT]
> `bank` と組み合わせるときは、**`ply` を `bank` より前に**書いてください。
> 2026 年 10 月時点の Strudel では、`.bank(...).ply(...)` の順に書くと
> `sound RolandTR707_RolandTR707_bd not found!` のようなエラーになり、一部の音が鳴りません。

### off：ずらして重ねる

`.off(1/8, x => x.add(4))` は、「元のパターン（`x`）を 1/8 サイクル遅らせて、4 つ上の音にしたものを重ねる」という意味です。

```js
n("0 [4 <3 2>] <2 3> [- 1]".off(1/8, x => x.add(4))).scale("<C5:minor Db5:mixolydian>/2").sound("triangle").room(.5).decay(.1)
```

ドラムにも使えます。

```js
sound("bd sd [rim bd] sd, [- hh]*4").bank("CasioRZ1").off(1/8, x => x.speed(1.5).gain(.25))
```

---

## 15. パターンを目で見る

再生中のパターンを図で表示できます。関数名の前に `_` を付けるとコードの中に、付けないとページの背景に表示されます。

| 関数 | 表示 |
| --- | --- |
| `punchcard()` / `_punchcard()` | 音の並びをピアノロール風に表示（後からかけた変形も反映される） |
| `pianoroll()` / `_pianoroll()` | ピアノロール |
| `scope()` / `_scope()` | 波形（オシロスコープ） |
| `color("色")` | 表示する色を変える |

```js
note("c a f e").color("cyan")._punchcard()
```

```js
note("<[c2 c3]*4 [bb1 bb2]*4>").sound("sawtooth").lpf(800)._scope()
```

---

## 16. 1 曲つくってみる

ここまでの内容を使って、パートを 1 つずつ足しながら短い曲を作ります。
各ステップのコードを、前のステップのコードの**下に書き足して** `Ctrl + Enter` を押してください。

### ステップ 1：テンポとドラム

```js
setcpm(110/4)
$: sound("bd*4, [- cp]*2, [- hh]*4").bank("RolandTR909")
```

### ステップ 2：細かいハイハット

`?` でランダムに音を抜いて、人間っぽい揺らぎを出します。

```js
$: sound("hh*16?").bank("RolandTR909").gain(0.4)
```

### ステップ 3：ベース

コード進行は「Cm → A♭ → E♭ → B♭」の 4 小節です。ベースはオクターブを行き来させます。

```js
$: note("<[c2 c3]*4 [ab1 ab2]*4 [eb2 eb3]*4 [bb1 bb2]*4>")
  .sound("gm_synth_bass_1").lpf(800)
```

### ステップ 4：和音（コード）

ノコギリ波の和音に、ゆっくり動くフィルターとリバーブをかけます。

```js
$: note("<[c3,eb3,g3] [c3,eb3,ab3] [bb2,eb3,g3] [bb2,d3,f3]>")
  .sound("sawtooth").lpf(sine.range(400, 1500).slow(8))
  .attack(0.1).release(0.5).gain(0.3).room(0.6)
```

### ステップ 5：メロディ

スケールを使うので、数字を変えても音は外れません。好きな数字に書き換えてみてください。

```js
$: n("<[0 2 4 2] [5 4 2 -] [2 4 6 4] [1 - -1 -]>")
  .scale("C4:minor").sound("gm_xylophone")
  .delay(0.3).room(0.5)
```

### 完成形

```js
// はじめての曲（C マイナー / BPM 110）
setcpm(110/4)

// ドラム
$: sound("bd*4, [- cp]*2, [- hh]*4").bank("RolandTR909")

// 細かいハイハット（ランダムに抜ける）
$: sound("hh*16?").bank("RolandTR909").gain(0.4)

// ベース
$: note("<[c2 c3]*4 [ab1 ab2]*4 [eb2 eb3]*4 [bb1 bb2]*4>")
  .sound("gm_synth_bass_1").lpf(800)

// 和音
$: note("<[c3,eb3,g3] [c3,eb3,ab3] [bb2,eb3,g3] [bb2,d3,f3]>")
  .sound("sawtooth").lpf(sine.range(400, 1500).slow(8))
  .attack(0.1).release(0.5).gain(0.3).room(0.6)

// メロディ
$: n("<[0 2 4 2] [5 4 2 -] [2 4 6 4] [1 - -1 -]>")
  .scale("C4:minor").sound("gm_xylophone")
  .delay(0.3).room(0.5)
```

**▶ [この曲を strudel.cc で開く](https://strudel.cc/#Ly8g44Gv44GY44KB44Gm44Gu5puy77yIQyDjg57jgqTjg4rjg7wgLyBCUE0gMTEw77yJCnNldGNwbSgxMTAvNCkKCi8vIOODieODqeODoAokOiBzb3VuZCgiYmQqNCwgWy0gY3BdKjIsIFstIGhoXSo0IikuYmFuaygiUm9sYW5kVFI5MDkiKQoKLy8g57Sw44GL44GE44OP44Kk44OP44OD44OI77yI44Op44Oz44OA44Og44Gr5oqc44GR44KL77yJCiQ6IHNvdW5kKCJoaCoxNj8iKS5iYW5rKCJSb2xhbmRUUjkwOSIpLmdhaW4oMC40KQoKLy8g44OZ44O844K5CiQ6IG5vdGUoIjxbYzIgYzNdKjQgW2FiMSBhYjJdKjQgW2ViMiBlYjNdKjQgW2JiMSBiYjJdKjQ%2BIikKICAuc291bmQoImdtX3N5bnRoX2Jhc3NfMSIpLmxwZig4MDApCgovLyDlkozpn7MKJDogbm90ZSgiPFtjMyxlYjMsZzNdIFtjMyxlYjMsYWIzXSBbYmIyLGViMyxnM10gW2JiMixkMyxmM10%2BIikKICAuc291bmQoInNhd3Rvb3RoIikubHBmKHNpbmUucmFuZ2UoNDAwLCAxNTAwKS5zbG93KDgpKQogIC5hdHRhY2soMC4xKS5yZWxlYXNlKDAuNSkuZ2FpbigwLjMpLnJvb20oMC42KQoKLy8g44Oh44Ot44OH44KjCiQ6IG4oIjxbMCAyIDQgMl0gWzUgNCAyIC1dIFsyIDQgNiA0XSBbMSAtIC0xIC1dPiIpCiAgLnNjYWxlKCJDNDptaW5vciIpLnNvdW5kKCJnbV94eWxvcGhvbmUiKQogIC5kZWxheSgwLjMpLnJvb20oMC41KQ%3D%3D)**

### 演奏してみよう

完成したら、鳴らしたまま次のことを試してみてください。これがライブコーディングの演奏です。

1. ドラム以外の `$:` を `_$:` にしてミュートし、ドラムだけにする
2. 1 パートずつ `_` を消して、音を重ねていく
3. メロディに `.jux(rev)` を足してみる
4. ベースの `lpf(800)` を `lpf(300)` にして、こもらせてから少しずつ数字を上げる
5. `setcpm(110/4)` を `setcpm(128/4)` にしてテンポを上げる

---

## 17. 保存・共有・書き出し

### 自動保存

`Ctrl + Enter`（または update）でコードを実行するたびに、コードは**ブラウザの中に自動で保存**されます。
次に strudel.cc を開くと、前回のコードが読み込まれます。

- 保存されたコードは **patterns** タブに一覧で表示されます。`new` で新しいパターンを作れます。
- 保存先はそのブラウザの中だけです。ブラウザのデータを消したり、別のパソコンで開いたりすると見られません。
  大事なものは **patterns** タブの `export` でファイルに保存しておきましょう。

### 共有

**share** を押すと、コードを含んだ URL がクリップボードにコピーされます。
その URL を開いた人は、まったく同じコードで再生できます。

### 音声ファイルに書き出す

**export** タブで WAV ファイルに書き出せます。

| 項目 | 意味 |
| --- | --- |
| File name | ファイル名 |
| Start cycle / End cycle | 書き出す範囲（サイクル数）。BPM 120・4 拍 = 1 サイクルなら、1 サイクル = 2 秒 |
| Sample rate | サンプルレート（通常は 48000 のままで OK） |

ほかにも、OBS などの録画・録音ソフトでブラウザの音を録音する方法があります。

---

## 18. 自分のサンプルを使う

### パソコンのフォルダから読み込む

パネルの **sounds → import-sounds** を開き、「import sounds folder」ボタンから音声ファイルの入ったフォルダを選びます。
読み込んだ音はブラウザの中に保存され、外部にアップロードされることはありません。

たとえば次のようなフォルダを選ぶと、**sounds → User** に `swoop` と `smash` という 2 つの音が追加されます。
**サブフォルダの名前が音の名前**になり、中のファイルは**アルファベット順に 0, 1, 2…** と番号が付きます。

```text
samples
├─ swoop
│  ├─ swooplong.wav    → swoop:0
│  ├─ swoopshort.wav   → swoop:1
│  └─ swooptight.wav   → swoop:2
└─ smash
   ├─ smashhigh.wav    → smash:0
   └─ smashlow.wav     → smash:1
```

読み込んだあとは、`sound("swoop:0 swoop:1 smash:1")` のように普通の音と同じように使えます。

### インターネット上のサンプルを読み込む

`samples` 関数で、GitHub などに置かれたサンプル集を読み込めます。
`github:ユーザー名/リポジトリ名` の形で指定します。

```js
samples('github:tidalcycles/dirt-samples')
n("0 2 4 6").sound("arpy")
```

上の例では、TidalCycles の定番サンプル集「Dirt-Samples」を読み込み、その中の `arpy` という音を鳴らしています。

---

## 19. 困ったとき

### 音が出ない

- ページのどこかを一度クリックしてから再生してください。ブラウザは、ユーザーが操作するまで音を出さない仕組みになっています。
- ブラウザのタブや OS の音量がミュートになっていないか確認してください。
- 初めて使う音は読み込みに時間がかかります。数秒待ってみてください。
- **console** タブにエラーが出ていないか確認してください。

### エラーが出る

よくある原因は次のとおりです。

| 症状・メッセージ | 原因と対処 |
| --- | --- |
| `sound ○○ not found! Is it loaded?` | 音の名前が間違っている。**sounds** タブで正しい名前を確認する |
| `sound RolandTR909_RolandTR909_bd not found!` のように bank 名が 2 回続く | `.bank(...)` のあとに `.ply(...)` を書いている。`.ply(...)` を `.bank(...)` より前に書く（[14 章](#ply1-音ずつ繰り返す)） |
| `SyntaxError` | カッコ `( )`・クォート `" "` の閉じ忘れや、`.` の付け忘れ |
| `○○ is not a function` | 関数名のつづりが間違っている。**reference** タブで確認する |

### 思ったように鳴らない

| 症状 | 原因と対処 |
| --- | --- |
| 最初の 1 音しか鳴らない | 関数の順番が逆になっている。`sound("piano").note("c e g")` ではなく `note("c e g").sound("piano")` と書く（[6 章](#関数の順番に注意)） |
| 音を足したらテンポが変わった | 要素が増えると 1 サイクルに詰め込まれて速くなる。`<...>*8` の形を使うとテンポが変わらない（[8.6](#86-サイクルごとに-1-つずつ-)） |
| 音が割れる・大きすぎる | `gain` を下げる。パートを重ねすぎていないか確認する |
| ミニ記法が効かない | `'...'`（シングルクォート）ではなく `"..."`（ダブルクォート）で書く |

---

## 20. 記号チートシート

| 記号 | 意味 | 例 |
| --- | --- | --- |
| スペース | 1 サイクルの中に均等に並べる | `"bd sd"` |
| `-` / `~` | 休符 | `"bd - sd -"` |
| `[ ]` | グループ（1 マスに詰め込む） | `"bd [hh hh]"` |
| `< >` | 1 サイクルに 1 つずつ順番に | `"bd <sd cp>"` |
| `,` | 同時に鳴らす | `"bd*2, hh*4"` |
| `*n` | n 倍速くする | `"hh*8"` |
| `/n` | n 倍遅くする | `"[c e g]/2"` |
| `!n` | n マス分繰り返す | `"c!3 e"` |
| `@n` | n マス分の長さにする | `"c@3 e"` |
| `:n` | サンプル番号やパラメータの区切り | `"casio:2"`、`adsr(".1:.1:.5:.2")` |
| `?` | 50% の確率で鳴らさない（`?0.2` で確率指定） | `"hh*16?"` |
| `\|` | サイクルごとにランダムで 1 つ選ぶ | `"bd*2 \| cp*3"` |
| `(k,n)` | ユークリッドリズム（n マスに k 個） | `"bd(3,8)"` |
| `"..."` | ミニ記法のパターン（1 行） | `sound("bd sd")` |
| `` `...` `` | ミニ記法のパターン（複数行） | ``sound(`bd sd`)`` |
| `'...'` | ただの文字列（ミニ記法として読まれない） | `samples('github:...')` |
| `$:` | パートを追加する | `$: sound("bd*4")` |
| `_$:` | そのパートをミュート | `_$: sound("hh*8")` |
| `S$:` | そのパートだけソロ | `S$: sound("bd*4")` |
| `//` | コメント（その行の残りを無視） | `// メモ` |

---

## 21. 次のステップ

- **公式ワークショップ**（英語・ブラウザ上で試しながら学べる）: <https://strudel.cc/workshop/getting-started/>
- **公式ドキュメント**（英語）: <https://strudel.cc/learn/>
- **レシピ集**（よく使うテクニック）: <https://strudel.cc/recipes/recipes/>
- **関数の一覧**: strudel.cc の右パネルの **reference** タブ
- **作品の例**: strudel.cc の **patterns** タブで、ほかの人のパターンを開いて読んでみる
- **コミュニティ**（英語）: [Discord](https://discord.com/invite/HGEdXmRkzT)
- **練習用のコード**: このリポジトリの [`patterns/`](patterns/) フォルダ（下の表）

| ファイル | 内容 | strudel.cc で開く |
| --- | --- | --- |
| [01-drums.js](patterns/01-drums.js) | ミニ記法でドラムを組む | [▶ 開く](https://strudel.cc/#Ly8gMDEg44OJ44Op44Og77ya44Of44OL6KiY5rOV44Gn44Oq44K644Og44KS57WE44KACi8vIOS9v%2BOBhOaWue%2B8mkN0cmwgKyBFbnRlciDjgaflho3nlJ%2FjgIFDdHJsICsgLiDjgaflgZzmraLjgIIKLy8g44CMXyQ644CN44GuIF8g44KS5raI44GX44GmIEN0cmwgKyBFbnRlciDjgZnjgovjgajjgZ3jga7jg5Hjg7zjg4jjgYzps7TjgorjgIFfIOOCkuS7mOOBkeOCi%2BOBqOatouOBvuOCiuOBvuOBmeOAggpzZXRjcG0oMTIwLzQpCgovLyA0IOOBpOaJk%2BOBoeOBruOCreODg%2BOCrwokOiBzb3VuZCgiYmQqNCIpLmJhbmsoIlJvbGFuZFRSOTA5IikKCi8vIDLjg7s0IOaLjeebruOBruOCr%2BODqeODg%2BODlwokOiBzb3VuZCgiWy0gY3BdKjIiKS5iYW5rKCJSb2xhbmRUUjkwOSIpCgovLyDoo4%2Fmi43jga7jgqrjg7zjg5fjg7Pjg4%2FjgqTjg4%2Fjg4Pjg4gKXyQ6IHNvdW5kKCJbLSBvaF0qNCIpLmJhbmsoIlJvbGFuZFRSOTA5IikuZ2FpbigwLjYpCgovLyAxNiDliIbjga7jg4%2FjgqTjg4%2Fjg4Pjg4jvvIg%2FIOOBp%2BODqeODs%2BODgOODoOOBq%2BaKnOOBkeOCi%2B%2B8iQpfJDogc291bmQoImhoKjE2PyIpLmJhbmsoIlJvbGFuZFRSOTA5IikuZ2FpbigwLjQpCgovLyDjg6bjg7zjgq%2Fjg6rjg4Pjg4njg6rjgrrjg6Djga7jg6rjg6Djgrfjg6fjg4Pjg4jvvIg4IOODnuOCueOBqyAzIOOBpO%2B8iQpfJDogc291bmQoInJpbSgzLDgpIikuYmFuaygiUm9sYW5kVFI5MDkiKQoKLy8gNCDjgrXjgqTjgq%2Fjg6vjgasgMSDlm57jgaDjgZHlhaXjgovjg5XjgqPjg6sKXyQ6IHNvdW5kKCI8LSAtIC0gW3NkIHNkIHNkIHNkXT4iKS5iYW5rKCJSb2xhbmRUUjkwOSIp) |
| [02-notes.js](patterns/02-notes.js) | 音名・スケール・和音 | [▶ 開く](https://strudel.cc/#Ly8gMDIg6Z%2Bz56iL77ya6Z%2Bz5ZCN44O75ZKM6Z%2Bz44O744K544Kx44O844OrCi8vIOOAjF8kOuOAjeOBriBfIOOCkua2iOOBmeOBqOODkeODvOODiOOBjOWil%2BOBiOOBvuOBmeOAggpzZXRjcG0oOTAvNCkKCi8vIOWSjOmfs%2B%2B8mkNtIOKGkiBB4pmtIOKGkiBC4pmtIOKGkiBHbe%2B8iDEg44K144Kk44Kv44Or44GrIDEg44Gk77yJCiQ6IG5vdGUoIjxbYzMsZWIzLGczXSBbYWIyLGMzLGViM10gW2JiMixkMyxmM10gW2cyLGJiMixkM10%2BIikuc291bmQoInBpYW5vIikKCi8vIOODmeODvOOCue%2B8muWSjOmfs%2BOBruOBhOOBoeOBsOOCk%2BS4i%2BOBrumfswpfJDogbm90ZSgiPGMyIGFiMSBiYjEgZzE%2BIikuc291bmQoImdtX2Fjb3VzdGljX2Jhc3MiKQoKLy8g44Oh44Ot44OH44Kj77yaQyDjg57jgqTjg4rjg7zjgrnjgrHjg7zjg6vjga7jgIzkvZXnlarnm67jga7pn7PjgYvjgI3jgpLmlbDlrZfjgafmm7jjgY8KLy8g5pWw5a2X44KS5aW944GN44Gr5aSJ44GI44Gm44KC44CB44K544Kx44O844Or44Gu5aSW44Gu6Z%2Bz44Gr44Gv44Gq44KK44G%2B44Gb44KTCl8kOiBuKCIwIDIgNCA8NiA3PiA0IDIgPDAgMT4gLSIpLnNjYWxlKCJDNDptaW5vciIpLnNvdW5kKCJnbV94eWxvcGhvbmUiKQ%3D%3D) |
| [03-effects.js](patterns/03-effects.js) | フィルター・リバーブ・ディレイとシグナル | [▶ 開く](https://strudel.cc/#Ly8gMDMg44Ko44OV44Kn44Kv44OI44Go44K344Kw44OK44OrCi8vIOOAjF8kOuOAjeOBriBfIOOCkua2iOOBmeOBqOODkeODvOODiOOBjOWil%2BOBiOOBvuOBmeOAguaVsOWtl%2BOCkuWkieOBiOOBpumfs%2BOBruWkieWMluOCkuiBnuOBhOOBpuOBv%2BOBvuOBl%2BOCh%2BOBhuOAggpzZXRjcG0oMTEwLzQpCgovLyDjg4njg6njg6AKJDogc291bmQoImJkKjQsIFstIHNkXSoyIikuYmFuaygiUm9sYW5kVFI5MDkiKQoKLy8gZ2Fpbu%2B8muODj%2BOCpOODj%2BODg%2BODiOOBq%2BW8t%2BW8seOCkuOBpOOBkeOCiwokOiBzb3VuZCgiaGgqMTYiKS5iYW5rKCJSb2xhbmRUUjkwOSIpLmdhaW4oIlsuMjUgMV0qNCIpCgovLyBscGYgKyBzaW5l77ya44OV44Kj44Or44K%2F44O844GM44KG44Gj44GP44KK6ZaL44GE44Gf44KK6ZaJ44GY44Gf44KK44GZ44KL44OZ44O844K5CiQ6IG5vdGUoIjxbYzIgYzNdKjQgW2JiMSBiYjJdKjQgW2FiMSBhYjJdKjQgW2cxIGcyXSo0PiIpCiAgLnNvdW5kKCJzYXd0b290aCIpLmxwZihzaW5lLnJhbmdlKDIwMCwgMjAwMCkuc2xvdyg0KSkKCi8vIHZvd2Vs77ya5q%2BN6Z%2Bz44OV44Kj44Or44K%2F44O844KS44GL44GR44Gf5ZKM6Z%2BzCl8kOiBub3RlKCI8W2MzLGViMyxnM10gW2JiMixkMyxmM10gW2FiMixjMyxlYjNdIFtnMixiYjIsZDNdPiIpCiAgLnNvdW5kKCJzYXd0b290aCIpLnZvd2VsKCI8YSBlIGkgbz4iKS5nYWluKDAuNSkKCi8vIGRlbGF5ICsgcm9vbe%2B8muODh%2BOCo%2BODrOOCpOOBqOODquODkOODvOODluOBp%2BW6g%2BOBjOOCiuOCkuWHuuOBmQpfJDogbigiPDAgWzIgNF0gMyBbLSAxXT4qMiIpLnNjYWxlKCJDNDptaW5vciIpLnNvdW5kKCJnbV9lbGVjdHJpY19ndWl0YXJfbXV0ZWQiKQogIC5kZWxheSgiLjU6LjEyNTouNSIpLnJvb20oMC42KQ%3D%3D) |
| [04-transform.js](patterns/04-transform.js) | rev・jux・off などの変形 | [▶ 開く](https://strudel.cc/#Ly8gMDQg44OR44K%2F44O844Oz44Gu5aSJ5b2i77yacmV2IC8ganV4IC8gYWRkIC8gcGx5IC8gb2ZmCi8vIOOAjF8kOuOAjeOBriBfIOOCkua2iOOBmeOBqOODkeODvOODiOOBjOWil%2BOBiOOBvuOBmeOAguODmOODg%2BODieODm%2BODs%2BOBp%2BiBnuOBj%2BOBqCBqdXgg44Gu5bem5Y%2Bz44Gu6YGV44GE44GM44KI44GP44KP44GL44KK44G%2B44GZ44CCCnNldGNwbSgxMDAvNCkKCi8vIOODieODqeODoAokOiBzb3VuZCgiYmQqMiwgWy0gY3BdKjIiKS5iYW5rKCJSb2xhbmRUUjcwNyIpCgovLyBqdXgocmV2Ke%2B8muW3puOBr%2BOBneOBruOBvuOBvuOAgeWPs%2BOBr%2BmAhumghuOBqwokOiBuKCIwIDEgWzQgM10gMiAwIDIgWy0gM10gNCIpLnNvdW5kKCJqYXp6IikuanV4KHJldikKCi8vIGFkZO%2B8muODoeODreODh%2BOCo%2BOCkuOCteOCpOOCr%2BODq%2BOBlOOBqOOBqyAxIOOBpOOBmuOBpOOBmuOCieOBmQpfJDogbigiMCAyIDQgNiIuYWRkKCI8MCAxIDIgMT4iKSkuc2NhbGUoIkM6bWlub3IiKS5zb3VuZCgicGlhbm8iKQoKLy8gcGx577yaMSDpn7PjgZrjgaTnubDjgorov5TjgZnlm57mlbDjgpLjgrXjgqTjgq%2Fjg6vjgZTjgajjgavlpInjgYjjgosKLy8g77yIYmFuayDjgajkvb%2FjgYbjgajjgY3jga8gcGx5IOOCkuWFiOOBq%2BabuOOBj%2BOAgumAhuOBq%2BOBmeOCi%2BOBqOOCqOODqeODvOOBq%2BOBquOCi%2BOBn%2BOCge%2B8iQpfJDogc291bmQoImhoIGhoIHJpbSBoaCIpLnBseSgiPDEgMiAxIDM%2BIikuYmFuaygiUm9sYW5kVFI3MDciKQoKLy8gb2Zm77yaMS84IOOCteOCpOOCr%2BODq%2BmBheOCieOBm%2BOBpiA0IOOBpOS4iuOBrumfs%2BOBq%2BOBl%2BOBn%2BOCs%2BODlOODvOOCkumHjeOBreOCiwpfJDogbigiMCBbNCA8MyAyPl0gPDIgMz4gWy0gMV0iLm9mZigxLzgsIHggPT4geC5hZGQoNCkpKQogIC5zY2FsZSgiQzU6bWlub3IiKS5zb3VuZCgidHJpYW5nbGUiKS5kZWNheSguMSkucm9vbSguNSk%3D) |
| [05-first-song.js](patterns/05-first-song.js) | 16 章で作った曲 | [▶ 開く](https://strudel.cc/#Ly8g44Gv44GY44KB44Gm44Gu5puy77yIQyDjg57jgqTjg4rjg7wgLyBCUE0gMTEw77yJCnNldGNwbSgxMTAvNCkKCi8vIOODieODqeODoAokOiBzb3VuZCgiYmQqNCwgWy0gY3BdKjIsIFstIGhoXSo0IikuYmFuaygiUm9sYW5kVFI5MDkiKQoKLy8g57Sw44GL44GE44OP44Kk44OP44OD44OI77yI44Op44Oz44OA44Og44Gr5oqc44GR44KL77yJCiQ6IHNvdW5kKCJoaCoxNj8iKS5iYW5rKCJSb2xhbmRUUjkwOSIpLmdhaW4oMC40KQoKLy8g44OZ44O844K5CiQ6IG5vdGUoIjxbYzIgYzNdKjQgW2FiMSBhYjJdKjQgW2ViMiBlYjNdKjQgW2JiMSBiYjJdKjQ%2BIikKICAuc291bmQoImdtX3N5bnRoX2Jhc3NfMSIpLmxwZig4MDApCgovLyDlkozpn7MKJDogbm90ZSgiPFtjMyxlYjMsZzNdIFtjMyxlYjMsYWIzXSBbYmIyLGViMyxnM10gW2JiMixkMyxmM10%2BIikKICAuc291bmQoInNhd3Rvb3RoIikubHBmKHNpbmUucmFuZ2UoNDAwLCAxNTAwKS5zbG93KDgpKQogIC5hdHRhY2soMC4xKS5yZWxlYXNlKDAuNSkuZ2FpbigwLjMpLnJvb20oMC42KQoKLy8g44Oh44Ot44OH44KjCiQ6IG4oIjxbMCAyIDQgMl0gWzUgNCAyIC1dIFsyIDQgNiA0XSBbMSAtIC0xIC1dPiIpCiAgLnNjYWxlKCJDNDptaW5vciIpLnNvdW5kKCJnbV94eWxvcGhvbmUiKQogIC5kZWxheSgwLjMpLnJvb20oMC41KQ%3D%3D) |

---

## 22. このガイドについて

- 有志による**非公式**のガイドです。Strudel 本体やその開発者とは関係ありません。
- 説明は公式ドキュメントと公式ワークショップ（どちらも AGPL-3.0）をもとにしています。一部のコード例は公式ワークショップの例を利用・改変しています。
- AI（Claude）の支援を受けて作成しました。このページの Strudel のコード例は、すべて Strudel 公式リポジトリ（2026 年 10 月時点の main ブランチ）をローカルで動かし、エラーなく動くことを確認しています。
- 間違いや分かりにくいところがあれば、Issue で教えてください。

Strudel は [TidalCycles](https://tidalcycles.org) のコミュニティによって作られている、無料のオープンソースソフトウェアです。
気に入ったら [Open Collective](https://opencollective.com/tidalcycles) での寄付も検討してみてください。
