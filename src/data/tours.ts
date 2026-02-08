/**
 * 行程資料 - 九州秋之旅
 * 圖片使用 Unsplash 日本／九州風景（可之後替換為 public/images/ 本機圖片）
 */
export interface TourDateGroup {
  month: string;
  dates: number[];
}

export interface Tour {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  image: string;
  dateGroups: TourDateGroup[];
  detailLink?: string;
}

/** 每日行程（用於下方行程明細區塊） */
export interface ItineraryDay {
  day: number;
  date: string;       // 例如 "10/24"
  title: string;      // 當日主題
  content: string[];   // 段落條列
  image: string;
}

export const siteConfig = {
  siteName: "九州秋之旅",
  navItems: [
    { label: "行程總覽", href: "#tours" },
    { label: "每日行程", href: "#itinerary" },
    { label: "聯絡我們", href: "#footer" },
  ],
  heroTitle: "Kyushu Autumn 2026",
  heroTitleZh: "2026 九州秋之旅 — 秋色限定",
  heroDescription: "深秋限定路線：六日漫遊九州，從福岡的屋台風情到阿蘇的金色草原與高千穗峽的靜謐瀑布，品味秋日色彩與在地風味。",
  footer: {
    tel: "02-2509-8567",
    fax: "02-2509-8577",
    email: "info@example.com",
    address: "台北市中山區天祥路59號6樓",
  },
};

/** 主行程卡片（單一產品：九州秋之旅 6 日） */
export const tours: Tour[] = [
  {
    id: "kyushu-autumn-2026",
    title: "2026 九州秋之旅｜6 日",
    subtitle: "福岡・熊本・阿蘇・高千穗｜博多屋台・太宰府・草千里・高千穗峽划船・熊本城",
    price: "歡迎洽詢",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
    // note: images can be replaced with /images/*.jpg in public/
    dateGroups: [
      { month: "Oct.", dates: [24, 25, 26, 27, 28, 29] },
    ],
    detailLink: "#itinerary",
  },
];

/** 每日行程明細（來自附件文案） */
export const itineraryDays: ItineraryDay[] = [
  {
    day: 1,
    date: "10/24",
    title: "抵達熊本 → 直奔福岡（博多）",
    image: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=800",
    content: [
      "10:45 抵達熊本機場。",
      "交通：從機場搭乘「機場接駁巴士（利木津巴士）」前往熊本車站，轉乘新幹線（只需 40 分鐘）抵達博多車站。",
      "博多舊市區（櫛田神社、東長寺）。",
      "博多屋台體驗：在「中洲」或「天神」一帶的屋台（路邊攤）品嚐博多拉麵與烤雞肉串。",
      "住宿：福岡",
    ],
  },
  {
    day: 2,
    date: "10/25",
    title: "福岡景點及購物",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800",
    content: [
      "太宰府天滿宮：參觀日本學問之神的神社，品嚐梅枝餅。",
      "天神地區購物：福岡的核心商圈，包含天神地下街、各大百貨公司。",
      "住宿：福岡",
    ],
  },
  {
    day: 3,
    date: "10/26",
    title: "包車：糸島",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800",
    content: [
      "包車前往糸島，享受海線風光與景點。",
      "住宿：福岡",
    ],
  },
  {
    day: 4,
    date: "10/27",
    title: "包車：進擊的巨人、阿蘇奇景（草千里與活火山口）",
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800",
    content: [
      "犬山看進擊的巨人雕像。",
      "阿蘇中岳火山口：感受地球的呼吸（若當天因噴發警戒管制，可改去「阿蘇火口博物館」）。",
      "上色見熊野座神社、草千里之濱。10 月底的草原會轉為金黃色，非常漂亮。",
      "住宿：阿蘇",
    ],
  },
  {
    day: 5,
    date: "10/28",
    title: "高千穗峽探索",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    content: [
      "上午：高千穗峽划船。這是此行重點！在深邃的峽谷中划船，近距離看「真名井瀑布」。",
      "下午：阿蘇農場樂園、熊本城、熊本熊廣場。",
    ],
  },
  {
    day: 6,
    date: "10/29",
    title: "最後巡禮 → 熊本機場",
    image: "https://images.unsplash.com/photo-1578645510442-eccf4ad0fd52?w=800",
    content: [
      "09:45 前往機場：搭乘接駁車前往機場。",
      "11:45 飛機離開。",
    ],
  },
];
