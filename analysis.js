// ==========================================================================
// 📖 《秋夕》深度文本赏析数据库 (analysis.js) - 第一句至第四句标准对齐版
// ==========================================================================



const U_TAG = (text) => `<span class="proper-noun">${text}</span>`;

const GRAMMAR_TAG = (type, text) => 
    `<span style="display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.22); padding:2px 8px; margin:2px 4px 2px 0; border-radius:5px; font-size:12px; font-weight:800; vertical-align:top;">${type}：${text}</span>`;

const ANCIENT_MODERN_TAG = (word, ancient, modern) => 
    `<div style="display:inline-flex; flex-direction:column; background:var(--notebook-bg); border:1px solid rgba(43,76,101,0.22); padding:5px 10px; margin:3px 6px 3px 0; border-radius:6px; font-size:12px; line-height:1.55; vertical-align:middle;">` +
        `<div style="color:var(--primary-color); font-weight:800;">🔹 【${word}】古义：${ancient}</div>` +
        `<div style="color:var(--text-muted); font-weight:600; border-top:1px dashed var(--input-border); margin-top:2px; padding-top:2px;">🔸 【${word}】今义：${modern}</div>` +
    `</div>`;

const lessonTeacherAnalysis = {
    overview: "<strong>【全诗白话译文】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:6px; line-height:1.95;'>" +
        "秋夜里白色蜡烛发出微弱的光，照在绘有精美图画的屏风上，泛起一层清冷的寒光；失宠的宫女手持轻薄丝绢制成的小团扇，独自在庭院里扑打着飞来飞去的萤火虫。夜色渐深，宫殿露天石阶上的寒意像秋水一般清凉浸人，她却依旧呆坐在石阶上，痴痴地仰望着天上鹊桥相会的" + U_TAG("牵牛星") + "和" + U_TAG("织女星") + "。" +
        "</span><br><br>" +
        "<strong>【创作背景与艺术特色（“小李杜”杜牧的宫词绝唱）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:4px;'>《秋夕》是晚" + U_TAG("唐") + "杰出诗人" + U_TAG("杜牧") + "（803–852，字牧之，号樊川居士，与李商隐并称“小李杜”）最负盛名的七言宫词绝句（收录于马来西亚《中二华文》第八单元第1课）。全诗描摹了一位<strong>失宠宫女在农历七月初七“七夕”之夜的孤独生活与凄凉心境</strong>。诗人在短短二十八字中展现出极高的艺术造诣：全诗不着一个“怨”字或“愁”字，而是通过<strong>冷画屏（初夜室内之幽冷）→ 扑流萤（庭院排遣之无聊）→ 凉如水（深夜石阶之寒彻）→ 看双星（仰望星空之孤苦）</strong>四个层层递进的特写镜头，将深宫女子的幽怨与对自由爱情的渴望表现得婉转含蓄、余味无穷。</span>",

    paragraphs: {
        1: "<strong>【第一句赏析：银烛秋光冷画屏——一“冷”字定下深宫凄清基调】</strong>" +
           "<div style='margin-top:8px; padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
               "<div style='color:var(--text-color); font-weight:800;'>" +
                   "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                   "[银烛][秋光][冷][画屏]，" +
               "</div>" +
               "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                   "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                   "秋夜里[白色的蜡烛]✓发出[微弱的烛光]✓，照在[绘有精美图画的屏风]✓上，[泛着一层清冷的寒光]✓，" +
               "</div>" +
               "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                   ANCIENT_MODERN_TAG("冷（冷画屏）", "使……显得清冷（形容词使动用法）", "温度低（形容词）") +
                   GRAMMAR_TAG("千古炼字（“冷”字通感）", "化视觉为触觉！烛光本应温暖，但在孤寂的秋夜深宫里，连照在画屏上的光都显得寒气袭人") +
               "</div>" +
           "</div>",

        2: "<strong>【第二句赏析：轻罗小扇扑流萤——以无聊戏举反衬长夜孤寂】</strong>" +
           "<div style='margin-top:8px; padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
               "<div style='color:var(--text-color); font-weight:800;'>" +
                   "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                   "[轻罗][小扇]扑[流萤]。" +
               "</div>" +
               "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                   "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                   "宫女手执[轻薄丝绢制成的]✓[小团扇]✓，百无聊赖地扑打着[飞动闪烁的萤火虫]✓。" +
               "</div>" +
               "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                   ANCIENT_MODERN_TAG("小扇", "团扇（入秋弃置，化用“秋扇见捐”暗喻失宠宫女）", "小扇子") +
                   GRAMMAR_TAG("意象暗示与反衬", "“流萤”生于腐草，暗示冷宫庭院荒芜；“扑流萤”看似天真欢快，实则借无聊动作排遣难耐的寂寞") +
               "</div>" +
           "</div>",

        3: "<strong>【第三句赏析：天阶夜色凉如水——夜深露重，身凉兼心凉】</strong>" +
           "<div style='margin-top:8px; padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
               "<div style='color:var(--text-color); font-weight:800;'>" +
                   "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                   "[天阶]夜色[凉如水]，" +
               "</div>" +
               "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                   "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                   "夜色渐深，[宫殿露天石阶]✓上的寒意[像秋水一般清凉浸人]✓，" +
               "</div>" +
               "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                   ANCIENT_MODERN_TAG("天阶", "皇宫里露天的石阶", "天上的台阶") +
                   GRAMMAR_TAG("比喻兼双关", "“凉如水”既写深夜石阶冰凉彻骨的肤觉，更双关宫女内心如秋水般凄凉无依的处境") +
               "</div>" +
           "</div>",

        4: "<strong>【第四句赏析：坐看牵牛织女星——双星鹊桥相会，反衬孤苦一生】</strong>" +
           "<div style='margin-top:8px; padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
               "<div style='color:var(--text-color); font-weight:800;'>" +
                   "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                   "[坐看]" + U_TAG("牵牛") + U_TAG("织女") + "星。" +
               "</div>" +
               "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                   "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                   "她却依然[独自久坐在石阶上仰望]✓天上七夕相会的" + U_TAG("牵牛星") + "与" + U_TAG("织女星") + "。" +
               "</div>" +
               "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                   ANCIENT_MODERN_TAG("牵牛织女星", "传说每年农历七月初七渡鹊桥相会的双星", "天鹰座主星与天琴座主星") +
                   GRAMMAR_TAG("核心考点（以乐景反衬哀情）", "天上双星尚有一年一度的七夕重逢，而人间深宫女子却终生幽闭、永无佳期，含蓄蕴藉地将哀怨推向巅峰") +
               "</div>" +
           "</div>"
    }
};
