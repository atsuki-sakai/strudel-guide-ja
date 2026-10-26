// 01 ドラム：ミニ記法でリズムを組む
// 使い方：Ctrl + Enter で再生、Ctrl + . で停止。
// 「_$:」の _ を消して Ctrl + Enter するとそのパートが鳴り、_ を付けると止まります。
setcpm(120/4)

// 4 つ打ちのキック
$: sound("bd*4").bank("RolandTR909")

// 2・4 拍目のクラップ
$: sound("[- cp]*2").bank("RolandTR909")

// 裏拍のオープンハイハット
_$: sound("[- oh]*4").bank("RolandTR909").gain(0.6)

// 16 分のハイハット（? でランダムに抜ける）
_$: sound("hh*16?").bank("RolandTR909").gain(0.4)

// ユークリッドリズムのリムショット（8 マスに 3 つ）
_$: sound("rim(3,8)").bank("RolandTR909")

// 4 サイクルに 1 回だけ入るフィル
_$: sound("<- - - [sd sd sd sd]>").bank("RolandTR909")
