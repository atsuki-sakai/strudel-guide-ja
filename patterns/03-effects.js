// 03 エフェクトとシグナル
// 「_$:」の _ を消すとパートが増えます。数字を変えて音の変化を聞いてみましょう。
setcpm(110/4)

// ドラム
$: sound("bd*4, [- sd]*2").bank("RolandTR909")

// gain：ハイハットに強弱をつける
$: sound("hh*16").bank("RolandTR909").gain("[.25 1]*4")

// lpf + sine：フィルターがゆっくり開いたり閉じたりするベース
$: note("<[c2 c3]*4 [bb1 bb2]*4 [ab1 ab2]*4 [g1 g2]*4>")
  .sound("sawtooth").lpf(sine.range(200, 2000).slow(4))

// vowel：母音フィルターをかけた和音
_$: note("<[c3,eb3,g3] [bb2,d3,f3] [ab2,c3,eb3] [g2,bb2,d3]>")
  .sound("sawtooth").vowel("<a e i o>").gain(0.5)

// delay + room：ディレイとリバーブで広がりを出す
_$: n("<0 [2 4] 3 [- 1]>*2").scale("C4:minor").sound("gm_electric_guitar_muted")
  .delay(".5:.125:.5").room(0.6)
