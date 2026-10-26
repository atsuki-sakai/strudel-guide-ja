// 02 音程：音名・和音・スケール
// 「_$:」の _ を消すとパートが増えます。
setcpm(90/4)

// 和音：Cm → A♭ → B♭ → Gm（1 サイクルに 1 つ）
$: note("<[c3,eb3,g3] [ab2,c3,eb3] [bb2,d3,f3] [g2,bb2,d3]>").sound("piano")

// ベース：和音のいちばん下の音
_$: note("<c2 ab1 bb1 g1>").sound("gm_acoustic_bass")

// メロディ：C マイナースケールの「何番目の音か」を数字で書く
// 数字を好きに変えても、スケールの外の音にはなりません
_$: n("0 2 4 <6 7> 4 2 <0 1> -").scale("C4:minor").sound("gm_xylophone")
