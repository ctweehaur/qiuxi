// ==========================================================================
// 📚 《秋夕》课文词典与诗行数据集 (data.js) - 4行逐句对齐古诗词黄金版
// 格式：["字词", "拼音", "EN 英文", "BM 马来文", "古义/本义：...\n今义：...", "u (可选:专名下划线)"]
// 结构：共 4 个区块（1–4 对应七言绝句第一句至第四句），与 analysis.js 1–4 完全对齐
// ==========================================================================

const lessonTitle = "秋夕";
const sectionUnit = "句";

const lessonData = [
    // ===== 第一句（起句：勾勒深宫秋夜清冷孤寂的室内环境） =====
    ["银烛", "yín zhú", "silver-white candle", "lilin putih keperakan", "偏正名词：白色的精制蜡烛"],
    ["秋光", "qiū guāng", "autumn candlelight / autumn night light", "cahaya malam musim luruh", "偏正名词：秋夜里微弱的烛光（兼指秋夜月光）"],
    ["冷", "lěng", "chills / casts a cold gleam on", "menyebabkan kelihatan dingin", "古义：使……显得清冷（形容词使动用法，化视觉为触觉）\n今义：温度低，与“热”相对（形容词）"],
    ["画屏", "huà píng", "painted screen", "skrin penghadang yang berlukis indah", "偏正名词：绘有精美图画的屏风"],
    ["，", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 第二句（承句：以“小扇扑萤”细节动作反衬宫女的无聊与凄凉）

    ["轻罗", "qīng luó", "light silk gauze", "kain sutera nipis yang lembut", "古义：轻薄柔软的丝织品\n今义：罕用"],
    ["小扇", "xiǎo shàn", "small round silk fan", "kipas bulat kecil", "古义：团扇（入秋后团扇被弃置，古诗常借“秋扇见捐”暗喻失宠的宫女）\n今义：普通的扇子"],
    ["扑", "pū", "flitting / swatting lightly at", "menepuk-nepuk untuk menangkap", "动词：扑打、捕捉（以无聊的排遣动作反衬内心的孤寂落寞）"],
    ["流萤", "liú yíng", "flying fireflies", "kelip-kelip yang berterbangan", "偏正名词：飞动闪烁的萤火虫（深宫荒草丛生故多流萤，暗示宫女居处冷落）"],
    ["。", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 第三句（转句：夜深露重，石阶如水，一语双关衬心凉）

    ["天阶", "tiān jiē", "open-air palace steps", "tangga batu istana di ruang terbuka", "古义：宫殿露天的石阶（皇宫台阶如天庭般高远，故称天阶）\n今义：天上的阶梯"],
    ["夜色", "yè sè", "the night air / night scenery", "suasana malam yang lewat", "偏正名词：深沉的夜色"],
    ["凉", "liáng", "cool and chilly", "sejuk dan dingin", "形容词：寒凉、清冷（既写石阶肤觉之凉，亦写宫女内心之凄凉）"],
    ["如水", "rú shuǐ", "like cold water", "bagaikan air sejuk", "动宾/比喻短语：像秋水一样清凉浸人"],
    ["，", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 第四句（合句：坐看双星鹊桥相会，反衬终生幽闭的孤苦）

    ["坐", "zuò", "sitting idly / sitting for a long time", "duduk terpegun lama", "动词：闲坐、久坐（足见夜深难眠、百无聊赖）"],
    ["看", "kàn", "gazing up at", "memandang ke langit", "动词：仰望、注视"],
    ["牵牛", "qiān niú", "Altair (the Cowherd Star)", "Bintang Penggembala Lembu (Altair)", "星宿名：牵牛星（即牛郎星）", "u"],
    ["织女", "zhī nǚ", "Vega (the Weaver Girl Star)", "Bintang Gadis Penenun (Vega)", "星宿名：织女星（传说牛郎织女每年七夕鹊桥相会一次）", "u"],
    ["星", "xīng", "stars", "bintang", "名词：星辰（以天上双星尚有一年一度相会，反衬宫女长门孤寂、虚度青春）"],
    ["。", "", "", "", ""],

    ["\n", "", "", "", ""], // 👈 出处（自动右对齐落款）

    ["（〔", "", "", "", ""],
    ["唐", "táng", "Tang Dynasty", "Dinasti Tang", "朝代名，晚唐", "u"],
    ["〕", "", "", "", ""],
    ["杜牧", "dù mù", "Du Mu (803–852)", "Du Mu", "晚唐杰出诗人、散文家，字牧之，号樊川居士，与李商隐并称“小李杜”", "u"],
    ["《", "", "", "", ""],
    ["秋夕", "qiū xī", "An Autumn Evening (Qixi Night)", "Malam Musim Luruh", "七言宫词绝句（特指农历七月初七七夕之夜）"],
    ["》）", "", "", "", ""]
];
