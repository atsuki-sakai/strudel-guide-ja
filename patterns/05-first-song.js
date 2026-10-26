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
