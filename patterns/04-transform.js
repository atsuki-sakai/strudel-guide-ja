// 04 パターンの変形：rev / jux / add / ply / off
// 「_$:」の _ を消すとパートが増えます。ヘッドホンで聞くと jux の左右の違いがよくわかります。
setcpm(100/4)

// ドラム
$: sound("bd*2, [- cp]*2").bank("RolandTR707")

// jux(rev)：左はそのまま、右は逆順に
$: n("0 1 [4 3] 2 0 2 [- 3] 4").sound("jazz").jux(rev)

// add：メロディをサイクルごとに 1 つずつずらす
_$: n("0 2 4 6".add("<0 1 2 1>")).scale("C:minor").sound("piano")

// ply：1 音ずつ繰り返す回数をサイクルごとに変える
// （bank と使うときは ply を先に書く。逆にするとエラーになるため）
_$: sound("hh hh rim hh").ply("<1 2 1 3>").bank("RolandTR707")

// off：1/8 サイクル遅らせて 4 つ上の音にしたコピーを重ねる
_$: n("0 [4 <3 2>] <2 3> [- 1]".off(1/8, x => x.add(4)))
  .scale("C5:minor").sound("triangle").decay(.1).room(.5)
