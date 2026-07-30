/* 小岛待办事务所 —— 动森风待办皮肤
   移植自单页展示站「小岛待办事务所 · 6 套风格小窗口」：
   - 8 套主题中枫糖仓库 / 草莓奶油 / 葡萄庄园为废案，仅保留 5 套；
   - 单窗口 + 皮肤设置切换主题（skin.json 的 theme 下拉）；
   - 任务清单 = 皮肤设置的 tasks（todolist 类型，存皮肤文件夹 settings.json），
     全部主题共用一份；皮肤经 skin_set_setting 写回，管理器「皮肤设置」页
     可编辑同一份数据，双向实时同步。 */

const THEMES = {
  mint: {
    label: '薄荷小岛',
    icon: '<svg viewBox="0 0 48 48" fill="none"><ellipse cx="24" cy="35" rx="17" ry="6" fill="#7fd9cc"/><ellipse cx="24" cy="34" rx="13" ry="4.5" fill="#f5dc9a"/><path d="M23 33 Q21 23 26 16" stroke="#b08155" stroke-width="3.2" stroke-linecap="round"/><path d="M26 17 Q17 10 9 14 Q18 15 25 19Z" fill="#3fbf8f"/><path d="M26 17 Q35 9 42 14 Q34 15 27 19Z" fill="#4fcc9c"/><path d="M26 17 Q24 8 29 5 Q30 13 27 18Z" fill="#46c496"/></svg>',
    title: '小岛日常', sub: '今天也要元气满满',
    emptyText: '全部完成啦，去海边散散步吧！',
    placeholder: '记一件岛上小事…',
    scene: `<defs>
      <linearGradient id="gm1" gradientUnits="userSpaceOnUse" x1="0" y1="66" x2="0" y2="84"><stop offset="0" stop-color="#a7e0cc"/><stop offset="1" stop-color="#a7e0cc" stop-opacity="0"/></linearGradient>
      <linearGradient id="gm2" gradientUnits="userSpaceOnUse" x1="0" y1="66" x2="0" y2="84"><stop offset="0" stop-color="#8cd3ba"/><stop offset="1" stop-color="#8cd3ba" stop-opacity="0"/></linearGradient>
      </defs>
      <path d="M0 66 Q70 52 140 62 T300 60 T420 58 L420 84 L0 84Z" fill="url(#gm1)"/>
      <path d="M0 74 Q90 62 180 70 T420 68 L420 84 L0 84Z" fill="url(#gm2)"/>
      <g class="a-spin">
        <g stroke="#ffd45e" stroke-width="3.5" stroke-linecap="round">
          <line x1="250" y1="4" x2="250" y2="11"/><line x1="250" y1="41" x2="250" y2="48"/>
          <line x1="228" y1="26" x2="235" y2="26"/><line x1="265" y1="26" x2="272" y2="26"/>
          <line x1="234" y1="10" x2="239" y2="15"/><line x1="261" y1="37" x2="266" y2="42"/>
          <line x1="266" y1="10" x2="261" y2="15"/><line x1="239" y1="37" x2="234" y2="42"/>
        </g>
      </g>
      <circle cx="250" cy="26" r="12" fill="#ffd45e"/><circle cx="250" cy="26" r="8" fill="#ffe08a"/>
      <g class="a-drift">
        <ellipse cx="112" cy="20" rx="24" ry="11" fill="#ffffff"/>
        <ellipse cx="94" cy="24" rx="15" ry="8.5" fill="#ffffff"/>
        <ellipse cx="131" cy="25" rx="14" ry="7.5" fill="#ffffff"/>
      </g>
      <g class="a-drift" style="animation-delay:1.5s;animation-duration:10s" opacity=".9">
        <ellipse cx="185" cy="12" rx="16" ry="8" fill="#ffffff"/>
        <ellipse cx="198" cy="15" rx="11" ry="6" fill="#ffffff"/>
      </g>
      <g class="a-sway" style="transform-origin:50% 100%">
        <path d="M60 84 Q56 60 64 44" stroke="#b08155" stroke-width="6.5" fill="none" stroke-linecap="round"/>
        <path d="M64 45 Q46 33 28 42 Q47 44 63 50Z" fill="#3fbf8f"/>
        <path d="M64 45 Q84 31 102 42 Q84 45 66 50Z" fill="#4fcc9c"/>
        <path d="M64 45 Q61 27 72 20 Q73 37 68 48Z" fill="#46c496"/>
        <circle cx="59" cy="49" r="3.8" fill="#8a6a4a"/>
        <circle cx="68" cy="51" r="3.8" fill="#77572f"/>
      </g>
      <g stroke="#5cb894" stroke-width="2.5" stroke-linecap="round" fill="none">
        <path d="M282 80 q2 -6 4 0 M288 80 q2 -8 4 0"/>
        <path d="M312 80 q2 -6 4 0 M317 80 q2 -7 4 0"/>
      </g>
      <g transform="translate(298,72)"><circle r="5.5" fill="#ffffff"/><circle r="2.4" fill="#ff9ec4"/></g>
      <g transform="translate(322,75)"><circle r="4.5" fill="#ffffff"/><circle r="2" fill="#ffd45e"/></g>`,
  },

  sea: {
    label: '海浪假日',
    icon: '<svg viewBox="0 0 48 48" fill="none"><path d="M24 9 Q38 17 37 31 L36 33 Q24 40 12 33 L11 31 Q10 17 24 9Z" fill="#ffd9bd" stroke="#f0a06a" stroke-width="2.5" stroke-linejoin="round"/><path d="M24 12 L24 35 M17 14 L20 34 M31 14 L28 34" stroke="#f0a06a" stroke-width="2.5" stroke-linecap="round"/><path d="M16 36 Q24 41 32 36 L31 39.5 Q24 43.5 17 39.5Z" fill="#f0a06a"/></svg>',
    title: '海风假期', sub: '浪花今天也很温柔',
    emptyText: '任务清空，来杯冰柠檬水吧！',
    placeholder: '添加一件海边小事…',
    scene: `<g class="a-spin" style="animation-duration:38s">
        <g stroke="#ffd45e" stroke-width="3.5" stroke-linecap="round">
          <line x1="64" y1="6" x2="64" y2="13"/><line x1="64" y1="41" x2="64" y2="48"/>
          <line x1="42" y1="28" x2="49" y2="28"/><line x1="79" y1="28" x2="86" y2="28"/>
          <line x1="48" y1="12" x2="53" y2="17"/><line x1="75" y1="39" x2="80" y2="44"/>
          <line x1="80" y1="12" x2="75" y2="17"/><line x1="53" y1="39" x2="48" y2="44"/>
        </g>
      </g>
      <circle cx="64" cy="28" r="12" fill="#ffd45e"/><circle cx="64" cy="28" r="8" fill="#ffe08a"/>
      <g class="a-drift" opacity=".95">
        <ellipse cx="168" cy="16" rx="19" ry="9" fill="#ffffff"/>
        <ellipse cx="183" cy="19" rx="12" ry="6.5" fill="#ffffff"/>
      </g>
      <path d="M216 26 q5 -5 10 0 q5 -5 10 0" stroke="#3f87ad" stroke-width="2.6" fill="none" stroke-linecap="round"/>
      <path d="M250 16 q4 -4 8 0 q4 -4 8 0" stroke="#3f87ad" stroke-width="2.3" fill="none" stroke-linecap="round" opacity=".75"/>
      <defs>
        <linearGradient id="gs1" gradientUnits="userSpaceOnUse" x1="0" y1="62" x2="0" y2="84"><stop offset="0" stop-color="#8fd2ee"/><stop offset="1" stop-color="#8fd2ee" stop-opacity="0"/></linearGradient>
        <linearGradient id="gs2" gradientUnits="userSpaceOnUse" x1="0" y1="64" x2="0" y2="84"><stop offset="0" stop-color="#57bade"/><stop offset="1" stop-color="#57bade" stop-opacity="0"/></linearGradient>
        <linearGradient id="gs3" gradientUnits="userSpaceOnUse" x1="0" y1="68" x2="0" y2="84"><stop offset="0" stop-color="#2f9cc8"/><stop offset="1" stop-color="#2f9cc8" stop-opacity="0"/></linearGradient>
      </defs>
      <path d="M0 60 Q35 52 70 60 T140 60 T210 60 T280 60 T350 60 T420 60 L420 84 L0 84Z" fill="url(#gs1)"/>
      <path d="M0 68 Q35 61 70 68 T140 68 T210 68 T280 68 T350 68 T420 68 L420 84 L0 84Z" fill="url(#gs2)"/>
      <path d="M0 77 Q45 71 90 77 T180 77 T270 77 T360 77 T450 77 L420 84 L0 84Z" fill="url(#gs3)"/>
      <g fill="#ffffff" opacity=".85">
        <circle cx="35" cy="56" r="2.6"/><circle cx="105" cy="56" r="2.2"/><circle cx="175" cy="56" r="2.6"/><circle cx="245" cy="56" r="2.2"/>
      </g>
      <g class="a-bob">
        <line x1="244" y1="28" x2="244" y2="56" stroke="#8a6a4a" stroke-width="3.2" stroke-linecap="round"/>
        <path d="M248 32 L248 54 L264 54 Z" fill="#ffffff"/>
        <path d="M240 37 L240 54 L228 54 Z" fill="#ffd9e6"/>
        <path d="M224 56 L266 56 L258 68 L232 68 Z" fill="#ff8c66"/>
      </g>`,
  },

  forest: {
    label: '森林咖啡',
    icon: '<svg viewBox="0 0 48 48" fill="none"><ellipse cx="23" cy="37.5" rx="15" ry="3.5" fill="#cfe3b4"/><rect x="12" y="17" width="21" height="17" rx="5" fill="#ffffff" stroke="#a8c48e" stroke-width="2.5"/><ellipse cx="22.5" cy="17" rx="10.5" ry="3.2" fill="#7a5238"/><path d="M33 21 q7 3 0 9" stroke="#a8c48e" stroke-width="2.8" stroke-linecap="round"/><path d="M19 12 q2.5 -3 0 -6 M26 12 q2.5 -3 0 -6" stroke="#a8c48e" stroke-width="2.2" stroke-linecap="round"/></svg>',
    title: '森林咖啡', sub: '磨豆声是最好的背景音',
    emptyText: '都做完了，听听林间的鸟鸣～',
    placeholder: '写下一件森林小事…',
    scene: `<defs>
        <linearGradient id="gf1" gradientUnits="userSpaceOnUse" x1="0" y1="62" x2="0" y2="84"><stop offset="0" stop-color="#c3e3a6"/><stop offset="1" stop-color="#c3e3a6" stop-opacity="0"/></linearGradient>
        <linearGradient id="gf2" gradientUnits="userSpaceOnUse" x1="0" y1="64" x2="0" y2="84"><stop offset="0" stop-color="#a5d58b"/><stop offset="1" stop-color="#a5d58b" stop-opacity="0"/></linearGradient>
      </defs>
      <path d="M0 58 Q100 42 200 54 T420 50 L420 84 L0 84Z" fill="url(#gf1)"/>
      <path d="M0 68 Q110 56 220 64 T420 62 L420 84 L0 84Z" fill="url(#gf2)"/>
      <g stroke-linejoin="round">
        <rect x="79" y="70" width="10" height="14" rx="4" fill="#8a6a4a"/>
        <path d="M84 12 L106 40 L62 40 Z" fill="#55a561" stroke="#55a561" stroke-width="5"/>
        <path d="M84 26 L110 56 L58 56 Z" fill="#4a9a58" stroke="#4a9a58" stroke-width="5"/>
        <path d="M84 42 L114 72 L54 72 Z" fill="#3f8a50" stroke="#3f8a50" stroke-width="5"/>
      </g>
      <g>
        <rect x="134" y="72" width="9" height="11" rx="4" fill="#fff3dd"/>
        <path d="M126 74 Q138 56 150 74 Z" fill="#e05a5a" stroke="#e05a5a" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="134" cy="67" r="2" fill="#ffffff"/><circle cx="143" cy="64" r="2.2" fill="#ffffff"/><circle cx="140" cy="71" r="1.6" fill="#ffffff"/>
        <rect x="160" y="76" width="6" height="8" rx="3" fill="#fff3dd"/>
        <path d="M155 77 Q163 66 171 77 Z" fill="#e05a5a" stroke="#e05a5a" stroke-width="2.5" stroke-linejoin="round"/>
        <circle cx="163" cy="72" r="1.4" fill="#ffffff"/>
      </g>
      <g transform="translate(-18,0)">
        <rect x="255" y="66" width="34" height="18" rx="6" fill="#a9805a"/>
        <ellipse cx="272" cy="66" rx="17" ry="4.5" fill="#c49a6a"/>
        <rect x="263" y="50" width="19" height="15" rx="5" fill="#ffffff"/>
        <ellipse cx="272.5" cy="50" rx="9.5" ry="3" fill="#7a5238"/>
        <path d="M282 54 q7 3 0 8" stroke="#ffffff" stroke-width="3.2" fill="none" stroke-linecap="round"/>
        <path class="a-rise" d="M268 44 q3 -4 0 -8 q-3 -4 0 -8" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path class="a-rise" style="animation-delay:1.3s" d="M277 44 q3 -4 0 -8 q-3 -4 0 -8" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      </g>
      <g stroke="#5da24f" stroke-width="2.5" stroke-linecap="round" fill="none">
        <path d="M36 80 q2 -6 4 0 M41 80 q2 -8 4 0"/>
        <path d="M195 80 q2 -6 4 0 M200 80 q2 -8 4 0"/>
        <path d="M322 80 q2 -6 4 0 M327 80 q2 -7 4 0"/>
        <path d="M366 80 q2 -6 4 0 M371 80 q2 -7 4 0"/>
      </g>`,
  },

  night: {
    label: '星夜营地',
    icon: '<svg viewBox="0 0 48 48" fill="none"><path d="M24 9 L41 37 L7 37 Z" fill="#f2a65a" stroke="#f2a65a" stroke-width="2.5" stroke-linejoin="round"/><path d="M24 19 L33 37 L15 37 Z" fill="#c96f2c"/><path d="M38 8 L39 11 L42 12 L39 13 L37 13 L34 12 L37 11 Z" fill="#ffd964"/></svg>',
    title: '星夜营地', sub: '篝火旁的声音很轻',
    emptyText: '都做完啦，躺着数星星吧！',
    placeholder: '睡前还有一件事…',
    scene: `<defs>
        <linearGradient id="mn1" gradientUnits="userSpaceOnUse" x1="0" y1="46" x2="0" y2="80"><stop offset="0" stop-color="#221c48"/><stop offset="1" stop-color="#221c48" stop-opacity="0"/></linearGradient>
        <linearGradient id="mn2" gradientUnits="userSpaceOnUse" x1="0" y1="44" x2="0" y2="80"><stop offset="0" stop-color="#2a2354"/><stop offset="1" stop-color="#2a2354" stop-opacity="0"/></linearGradient>
        <linearGradient id="gn1" gradientUnits="userSpaceOnUse" x1="0" y1="68" x2="0" y2="84"><stop offset="0" stop-color="#332b5e"/><stop offset="1" stop-color="#332b5e" stop-opacity="0"/></linearGradient>
      </defs>
      <path d="M-8 80 L64 30 L126 80 Z" fill="url(#mn1)"/>
      <path d="M78 80 L160 26 L244 80 Z" fill="url(#mn2)"/>
      <path d="M210 80 L292 36 L374 80 Z" fill="url(#mn1)"/>
      <path d="M0 74 Q210 64 420 74 L420 84 L0 84Z" fill="url(#gn1)"/>
      <mask id="mooncut"><rect x="0" y="0" width="420" height="84" fill="#ffffff"/><circle cx="67" cy="22" r="10.5" fill="#000000"/></mask>
      <circle cx="60" cy="26" r="12" fill="#ffd964" mask="url(#mooncut)"/>
      <g transform="translate(120,16)"><path class="a-twk" d="M0 -7 L1.8 -1.8 L7 0 L1.8 1.8 L0 7 L-1.8 1.8 L-7 0 L-1.8 -1.8Z" fill="#ffe9a8"/></g>
      <g transform="translate(170,32) scale(.7)"><path class="a-twk" style="animation-delay:.6s" d="M0 -7 L1.8 -1.8 L7 0 L1.8 1.8 L0 7 L-1.8 1.8 L-7 0 L-1.8 -1.8Z" fill="#ffe9a8"/></g>
      <g transform="translate(215,12) scale(.9)"><path class="a-twk" style="animation-delay:1.2s" d="M0 -7 L1.8 -1.8 L7 0 L1.8 1.8 L0 7 L-1.8 1.8 L-7 0 L-1.8 -1.8Z" fill="#ffe9a8"/></g>
      <g transform="translate(256,28) scale(.6)"><path class="a-twk" style="animation-delay:1.8s" d="M0 -7 L1.8 -1.8 L7 0 L1.8 1.8 L0 7 L-1.8 1.8 L-7 0 L-1.8 -1.8Z" fill="#ffe9a8"/></g>
      <g transform="translate(98,42) scale(.8)"><path class="a-twk" style="animation-delay:.3s" d="M0 -7 L1.8 -1.8 L7 0 L1.8 1.8 L0 7 L-1.8 1.8 L-7 0 L-1.8 -1.8Z" fill="#ffe9a8"/></g>
      <circle cx="140" cy="40" r="1.6" fill="#ffe9a8" opacity=".7"/>
      <circle cx="190" cy="18" r="1.4" fill="#ffe9a8" opacity=".6"/>
      <circle cx="238" cy="46" r="1.5" fill="#ffe9a8" opacity=".7"/>
      <circle cx="30" cy="46" r="1.4" fill="#ffe9a8" opacity=".6"/>
      <g transform="translate(318,0)">
        <ellipse cx="0" cy="79" rx="34" ry="4" fill="#241e4a"/>
        <path d="M0 46 L30 79 L-30 79 Z" fill="#f2a65a" stroke="#f2a65a" stroke-width="3" stroke-linejoin="round"/>
        <path d="M0 60 L13 79 L-13 79 Z" fill="#c96f2c"/>
      </g>
      <g>
        <ellipse cx="216" cy="79" rx="20" ry="3.5" fill="#241e4a"/>
        <rect x="203" y="75" width="26" height="6.5" rx="3.2" fill="#7a5238" transform="rotate(-10 216 78)"/>
        <rect x="203" y="75" width="26" height="6.5" rx="3.2" fill="#8a5f40" transform="rotate(10 216 78)"/>
        <path class="a-flick" d="M216 54 Q228 67 216 78 Q204 67 216 54Z" fill="#ff9a3c"/>
        <path class="a-flick" style="animation-delay:.3s" d="M216 62 Q222 70 216 77 Q210 70 216 62Z" fill="#ffd964"/>
      </g>
      <circle class="a-twk" style="animation-delay:.9s" cx="120" cy="62" r="2" fill="#ffe27a"/>
      <circle class="a-twk" style="animation-delay:1.6s" cx="368" cy="60" r="2" fill="#ffe27a"/>
      <circle class="a-twk" style="animation-delay:.2s" cx="52" cy="64" r="2" fill="#ffe27a"/>`,
  },

  oasis: {
    label: '沙漠绿洲',
    icon: '<svg viewBox="0 0 48 48" fill="none"><ellipse cx="24" cy="38" rx="15" ry="4" fill="#f2d68f"/><rect x="19" y="14" width="10" height="25" rx="5" fill="#5da24f"/><path d="M19 24 q-9 0 -9 -9" stroke="#5da24f" stroke-width="5.5" fill="none" stroke-linecap="round"/><path d="M29 28 q9 0 9 -8" stroke="#5da24f" stroke-width="5.5" fill="none" stroke-linecap="round"/><circle cx="24" cy="12" r="3.4" fill="#ff9ec4"/></svg>',
    title: '沙漠绿洲', sub: '泉水边最适合歇脚',
    emptyText: '都做完了，去泡泡脚吧！',
    placeholder: '记一件沙漠小事…',
    scene: `<defs>
        <linearGradient id="go1" gradientUnits="userSpaceOnUse" x1="0" y1="62" x2="0" y2="84"><stop offset="0" stop-color="#f2d68f"/><stop offset="1" stop-color="#f2d68f" stop-opacity="0"/></linearGradient>
        <linearGradient id="go2" gradientUnits="userSpaceOnUse" x1="0" y1="66" x2="0" y2="84"><stop offset="0" stop-color="#eac87e"/><stop offset="1" stop-color="#eac87e" stop-opacity="0"/></linearGradient>
      </defs>
      <g class="a-spin" style="animation-duration:34s">
        <g stroke="#ffc95e" stroke-width="3.5" stroke-linecap="round">
          <line x1="185" y1="4" x2="185" y2="11"/><line x1="185" y1="39" x2="185" y2="46"/>
          <line x1="164" y1="24" x2="171" y2="24"/><line x1="199" y1="24" x2="206" y2="24"/>
          <line x1="170" y1="9" x2="175" y2="14"/><line x1="195" y1="34" x2="200" y2="39"/>
          <line x1="200" y1="9" x2="195" y2="14"/><line x1="175" y1="34" x2="170" y2="39"/>
        </g>
      </g>
      <circle cx="185" cy="24" r="12" fill="#ffc95e"/><circle cx="185" cy="24" r="8" fill="#ffdd8a"/>
      <g class="a-drift" opacity=".85">
        <ellipse cx="250" cy="14" rx="16" ry="8" fill="#ffffff"/>
        <ellipse cx="262" cy="17" rx="10" ry="5.5" fill="#ffffff"/>
      </g>
      <path d="M0 64 Q80 50 160 60 T420 56 L420 84 L0 84Z" fill="url(#go1)"/>
      <path d="M0 72 Q100 62 210 68 T420 66 L420 84 L0 84Z" fill="url(#go2)"/>
      <rect x="64" y="42" width="13" height="42" rx="6.5" fill="#5da24f"/>
      <path d="M64 56 q-13 0 -13 -13" stroke="#5da24f" stroke-width="7.5" fill="none" stroke-linecap="round"/>
      <path d="M77 62 q13 0 13 -11" stroke="#5da24f" stroke-width="7.5" fill="none" stroke-linecap="round"/>
      <circle cx="70" cy="40" r="4" fill="#ff9ec4"/>
      <rect x="132" y="62" width="9" height="22" rx="4.5" fill="#6fba5c"/>
      <ellipse cx="240" cy="74" rx="26" ry="6" fill="#6fcbd8"/>
      <ellipse cx="240" cy="73" rx="17" ry="4" fill="#a0e0e8"/>
      <path d="M264 74 Q262 62 267 54" stroke="#b08155" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M267 54 Q258 48 250 51 Q258 52 266 57Z" fill="#3fbf8f"/>
      <path d="M267 54 Q276 47 284 51 Q276 52 268 57Z" fill="#4fcc9c"/>`,
  },
};

const $ = (sel, el = document) => el.querySelector(sel);

const winEl = $('#win');
const tagEl = $('#tag');
const sceneEl = $('#scene');
const avatarEl = $('#avatar');
const titleEl = $('#title');
const subEl = $('#sub');
const dateEl = $('#date');
const fillEl = $('#fill');
const labelEl = $('#plabel');
const listEl = $('#list');
const formEl = $('#form');
const inputEl = $('#input');
const remainEl = $('#remain');
const clearBtn = $('#clear');

/* 日期牌：皮肤 7×24 常驻，不能只算一次——由 tickClock 每秒顺带检查，
   跨过 0 点（缓存的日期变了）时重算日期牌 */
let dateKey = '';
function renderDate() {
  const now = new Date();
  const key = now.toDateString();
  if (key === dateKey) return;
  dateKey = key;
  const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][now.getDay()];
  dateEl.innerHTML = `<b>${now.getMonth() + 1}月${now.getDate()}日</b><i>${week}</i>`;
}

/* 交互元素（按钮/输入框/列表）不触发窗口拖动：
   桥接层对 .drag-region 内任意左键按下都会发起拖动，这里阻断冒泡 */
for (const el of [listEl, formEl, clearBtn]) {
  el.addEventListener('pointerdown', (e) => e.stopPropagation());
}

let themeKey = 'mint';
let todos = [];

/* 数据：任务清单 = 皮肤设置 tasks（todolist 类型，存皮肤文件夹 settings.json），
   与管理器「皮肤设置」页共用同一份。皮肤侧改动经 skin_set_setting 写回（皮肤
   专用接口，身份取窗口 label，只能写自己 schema 声明的 key）。 */
function loadTodos() {
  const s = (window.__DESK_PP__ && window.__DESK_PP__.settings) || {};
  todos = (Array.isArray(s.tasks) ? s.tasks : [])
    .map((it) => ({ text: String((it && it.text) || ''), done: !!(it && it.done) }))
    .filter((t) => t.text.trim() !== '');
}

const save = () => {
  // 桥未注入（纯浏览器调试）时不抛错，只提示并跳过写盘
  if (!window.__DESK_PP__) {
    console.warn('任务未保存：桥接口 __DESK_PP__ 未注入（可能在纯浏览器中调试）');
    return;
  }
  window.__DESK_PP__.invoke('skin_set_setting', {
    key: 'tasks',
    value: todos.map((t) => ({ text: t.text, done: t.done })),
  }).catch((err) => console.error('保存任务失败:', err));
};

/* 一次性迁移：旧版清单在 localStorage（island-todo-<主题>，每主题一份）。
   有数据则以它为准写入设置文件；写盘成功才删 localStorage，失败下次启动重试。 */
function migrateLegacyTodos() {
  const prefix = 'island-todo-';
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith(prefix)) keys.push(k);
  }
  if (!keys.length) return false;

  const pick = keys.includes(prefix + themeKey) ? prefix + themeKey : keys[0];
  let data = null;
  try { data = JSON.parse(localStorage.getItem(pick)); } catch (e) { /* ignore */ }
  const items = (Array.isArray(data) ? data : [])
    .map((d) => ({ text: String((d && (d.text ?? d.t)) || ''), done: !!(d && d.done) }))
    .filter((t) => t.text.trim() !== '');

  // 桥未注入（纯浏览器调试）时不抛错：提示后保留 localStorage，仅展示旧数据
  if (!window.__DESK_PP__) {
    console.warn('旧任务未迁移：桥接口 __DESK_PP__ 未注入（可能在纯浏览器中调试）');
  } else {
    window.__DESK_PP__.invoke('skin_set_setting', { key: 'tasks', value: items })
      .then(() => keys.forEach((k) => localStorage.removeItem(k)))
      .catch(() => { /* 下次启动重试 */ });
  }

  if (!items.length) return false;
  todos = items;
  return true;
}

function render() {
  const cfg = THEMES[themeKey];
  listEl.innerHTML = '';
  if (todos.length === 0) {
    listEl.innerHTML = `<li class="empty"><span class="big">${cfg.icon}</span>${cfg.emptyText}</li>`;
  } else {
    todos.forEach((todo, idx) => {
      const li = document.createElement('li');
      li.className = 'todo-item' + (todo.done ? ' done' : '');
      li.dataset.idx = idx;
      li.innerHTML = `
        <button class="checkbox" type="button" aria-label="完成"><span class="tick">✓</span></button>
        <span class="todo-text"></span>
        <button class="del" type="button" aria-label="删除">✕</button>`;
      $('.todo-text', li).textContent = todo.text;
      listEl.appendChild(li);
    });
  }
  const done = todos.filter((t) => t.done).length;
  labelEl.textContent = `${done}/${todos.length}`;
  fillEl.style.width = todos.length ? (done / todos.length * 100) + '%' : '0%';
  remainEl.innerHTML = `还剩 <b>${todos.length - done}</b> 件事`;
  clearBtn.disabled = done === 0;
}

/* 事件：勾选 / 删除（事件委托） */
listEl.addEventListener('click', (e) => {
  const li = e.target.closest('.todo-item');
  if (!li) return;
  const idx = Number(li.dataset.idx);
  const todo = todos[idx];
  if (!todo) return;
  if (e.target.closest('.checkbox')) {
    todo.done = !todo.done;
    save(); render();
  } else if (e.target.closest('.del')) {
    todos.splice(idx, 1);
    save(); render();
  }
});

/* 添加 */
formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = inputEl.value.trim();
  if (!text) {
    inputEl.animate(
      [{ transform: 'translateX(0)' }, { transform: 'translateX(-7px)' }, { transform: 'translateX(7px)' }, { transform: 'translateX(0)' }],
      { duration: 220, easing: 'ease-in-out' }
    );
    return;
  }
  todos.unshift({ text, done: false });
  inputEl.value = '';
  save(); render();
  listEl.scrollTop = 0;
});

/* 清空已完成 */
clearBtn.addEventListener('click', () => {
  todos = todos.filter((t) => !t.done);
  save(); render();
});

/* 主题切换：变量类 + 场景 + 文案 + 头像；清单全主题共用一份（皮肤设置 tasks） */
function applyTheme(key) {
  themeKey = THEMES[key] ? key : 'mint';
  const cfg = THEMES[themeKey];
  winEl.className = `window drag-region t-${themeKey}`;
  sceneEl.innerHTML = cfg.scene;
  avatarEl.innerHTML = cfg.icon;
  titleEl.textContent = cfg.title;
  subEl.textContent = cfg.sub;
  inputEl.placeholder = cfg.placeholder;
  if (!migrateLegacyTodos()) loadTodos();
  render();
}

/* 场景栏标签 = 当前时间（12/24 小时制由皮肤设置 clock_format 决定），
   每秒校准一次，分钟未变不重写 */
function clockText() {
  const s = (window.__DESK_PP__ && window.__DESK_PP__.settings) || {};
  const d = new Date();
  const m = String(d.getMinutes()).padStart(2, '0');
  if (s.clock_format === '12h') {
    const h = d.getHours();
    return `${h < 12 ? 'AM' : 'PM'} ${h % 12 || 12}:${m}`;
  }
  return `${String(d.getHours()).padStart(2, '0')}:${m}`;
}
function tickClock() {
  const t = clockText();
  if (tagEl.textContent !== t) tagEl.textContent = t;
  renderDate(); // 跨 0 点换日期牌（内部有缓存，日期未变时不重写）
}

/* 皮肤设置：初始值 + 实时变更 */
function themeFromSettings() {
  const s = (window.__DESK_PP__ && window.__DESK_PP__.settings) || {};
  return THEMES[s.theme] ? s.theme : 'mint';
}

document.addEventListener('desk-setting-changed', (e) => {
  if (!e.detail) return;
  if (e.detail.key === 'theme') applyTheme(themeFromSettings());
  else if (e.detail.key === 'clock_format') tickClock();
  // 管理器「皮肤设置」页改了清单 → 实时重读
  else if (e.detail.key === 'tasks') { loadTodos(); render(); }
});

tickClock();
setInterval(tickClock, 1000);
applyTheme(themeFromSettings());
