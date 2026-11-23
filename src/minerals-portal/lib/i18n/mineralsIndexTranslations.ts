// MineralsIndex page translations - category titles, descriptions, deposit names
import type { Language } from './translations';

export type MineralsIndexCategory = {
  id: string;
  title: string;
  description: string;
  depositNames: Record<string, string>;
};

const en: MineralsIndexCategory[] = [
  { id: 'copper', title: 'Copper', description: 'World-class copper deposits including Mes Aynak, one of the largest undeveloped copper reserves globally.', depositNames: { 'Mes Aynak Deposit': 'Mes Aynak Deposit', 'Hajigak Complex': 'Hajigak Complex', 'Balkhab Deposit': 'Balkhab Deposit', 'Processing Operations': 'Processing Operations', 'Export Infrastructure': 'Export Infrastructure' }},
  { id: 'lithium', title: 'Lithium', description: "Potentially the world's largest lithium reserves, critical for electric vehicle batteries and energy storage.", depositNames: { 'Ghazni Pegmatites': 'Ghazni Pegmatites', 'Nuristan Deposits': 'Nuristan Deposits', 'Battery Processing': 'Battery Processing', 'EV Supply Chain': 'EV Supply Chain', 'Research Centers': 'Research Centers' }},
  { id: 'iron', title: 'Iron Ore', description: 'Hajigak iron deposit contains 22 billion tons of high-grade magnetite ore for steel production.', depositNames: { 'Hajigak Iron Mountain': 'Hajigak Iron Mountain', 'Steel Production': 'Steel Production', 'Magnetite Quality': 'Magnetite Quality', 'Infrastructure Steel': 'Infrastructure Steel', 'Employment Programs': 'Employment Programs' }},
  { id: 'gems', title: 'Gemstones', description: 'World-famous Panjshir emeralds, Badakhshan lapis lazuli, and exceptional rubies and sapphires.', depositNames: { 'Panjshir Emeralds': 'Panjshir Emeralds', 'Lapis Lazuli': 'Lapis Lazuli', 'Jegdalek Rubies': 'Jegdalek Rubies', 'Hindu Kush Sapphires': 'Hindu Kush Sapphires', 'Nuristan Tourmaline': 'Nuristan Tourmaline', 'Kunar Aquamarine': 'Kunar Aquamarine' }},
  { id: 'gold', title: 'Gold', description: 'Significant gold deposits across multiple provinces with established artisanal mining traditions.', depositNames: { 'Badakhshan Gold Belt': 'Badakhshan Gold Belt', 'Takhar Deposits': 'Takhar Deposits', 'Gold Refining': 'Gold Refining', 'Artisanal Mining': 'Artisanal Mining', 'Bullion Production': 'Bullion Production' }},
  { id: 'ree', title: 'Rare Earth Elements', description: 'Critical technology metals including neodymium and praseodymium essential for green energy.', depositNames: { 'Helmand REE': 'Helmand REE', 'Technology Metals': 'Technology Metals', 'Neodymium': 'Neodymium', 'Global Supply': 'Global Supply', 'Research Partnerships': 'Research Partnerships' }},
  { id: 'chromite', title: 'Chromite', description: 'High-quality chromite reserves for stainless steel production and export markets.', depositNames: { 'Chromite Reserves': 'Chromite Reserves', 'Export Operations': 'Export Operations', 'Stainless Steel': 'Stainless Steel' }},
  { id: 'marble', title: 'Marble', description: 'Premium architectural marble rivaling Italian quality with 75+ unique color varieties.', depositNames: { 'Premium White Marble': 'Premium White Marble', 'Herat Quarries': 'Herat Quarries', 'Architectural Stone': 'Architectural Stone' }},
  { id: 'coal', title: 'Coal', description: 'Metallurgical and thermal coal reserves supporting domestic energy and industrial needs.', depositNames: { 'Coal Basins': 'Coal Basins', 'Underground Operations': 'Underground Operations', 'Baghlan Province': 'Baghlan Province' }},
  { id: 'industrial', title: 'Industrial Minerals', description: 'High-purity talc, drilling barite, and salt deposits for industrial applications.', depositNames: { 'High-Purity Talc': 'High-Purity Talc', 'Drilling Barite': 'Drilling Barite', 'Salt Deposits': 'Salt Deposits' }},
];

const ps: MineralsIndexCategory[] = [
  { id: 'copper', title: 'مس', description: 'د نړیوال درجې مس ذخیرې شامل مس عینک، د نړۍ ترټولو لویو نا پراختیا شویو مس ذخیرو څخه یوه.', depositNames: { 'Mes Aynak Deposit': 'مس عینک ذخیره', 'Hajigak Complex': 'حاجیگک کمپلکس', 'Balkhab Deposit': 'بلخاب ذخیره', 'Processing Operations': 'پروسس عملیات', 'Export Infrastructure': 'صادراتي زیربنا' }},
  { id: 'lithium', title: 'لیتیم', description: 'احتمالي د نړۍ ترټولو لوی لیتیم ذخیرې، د برقی موټرو بټریو او انرژي ذخیرې لپاره حیاتي.', depositNames: { 'Ghazni Pegmatites': 'غزني پېغماتایټونه', 'Nuristan Deposits': 'نورستان ذخیرې', 'Battery Processing': 'د بټري پروسس', 'EV Supply Chain': 'د EV عرضه زنځیر', 'Research Centers': 'د تحقیق مرکزونه' }},
  { id: 'iron', title: 'د اوسپنې کان', description: 'د حاجیگک اوسپنې ذخیره د فولاد تولید لپاره ۲۲ میلیارده ټنه لوړ درجې مګنیټ کان لري.', depositNames: { 'Hajigak Iron Mountain': 'د حاجیگک اوسپنې غره', 'Steel Production': 'د فولاد تولید', 'Magnetite Quality': 'د مګنیټ کیفیت', 'Infrastructure Steel': 'د زیربنا فولاد', 'Employment Programs': 'د کارموندنې پروګرامونه' }},
  { id: 'gems', title: 'قیمتي ډبرې', description: 'نړیوال مشهور پنجشیر زمردونه، بدخشان لاجورد او استثنایي یاقوتونه او نیلمونه.', depositNames: { 'Panjshir Emeralds': 'پنجشیر زمردونه', 'Lapis Lazuli': 'لاجورد', 'Jegdalek Rubies': 'جګدالیک یاقوتونه', 'Hindu Kush Sapphires': 'هندوکش نیلمونه', 'Nuristan Tourmaline': 'نورستان ټورمالین', 'Kunar Aquamarine': 'کونار اکوامارین' }},
  { id: 'gold', title: 'سرو زرو', description: 'په ګڼو ولایتونو کې مهم سرو زرو ذخیرې د ټینګ شویو دودیز کان کیندنې سنتونو سره.', depositNames: { 'Badakhshan Gold Belt': 'بدخشان سرو زرو belt', 'Takhar Deposits': 'تخار ذخیرې', 'Gold Refining': 'د سرو زرو تصفیه', 'Artisanal Mining': 'دودیز کان کیندنه', 'Bullion Production': 'د شمش تولید' }},
  { id: 'ree', title: 'نادره ځمکې عناصر', description: 'د شینې انرژي لپاره حیاتي تخنالوژي فلزات شامل نیوډیمیم او پراسیوډیمیم.', depositNames: { 'Helmand REE': 'هلمند REE', 'Technology Metals': 'تخنالوژي فلزات', 'Neodymium': 'نیوډیمیم', 'Global Supply': 'نړیواله عرضه', 'Research Partnerships': 'د تحقیق شراکتونه' }},
  { id: 'chromite', title: 'کرومیت', description: 'د سټینلیس سټیل تولید او صادراتو بازارونو لپاره لوړ کیفیت کرومیت ذخیرې.', depositNames: { 'Chromite Reserves': 'کرومیت ذخیرې', 'Export Operations': 'صادرات عملیات', 'Stainless Steel': 'سټینلیس سټیل' }},
  { id: 'marble', title: 'مرمر', description: 'د ۷۵+ ځانګړو رنګونو سره د ایټالوي کیفیت سره سیالي کونکی پریمیم معمارۍ مرمر.', depositNames: { 'Premium White Marble': 'پریمیم سپین مرمر', 'Herat Quarries': 'د هرات کانونه', 'Architectural Stone': 'معمارۍ ډبره' }},
  { id: 'coal', title: 'ډبره سکور', description: 'د کورني انرژي او صنعتي اړتیاو لپاره ملاتړ کونکي میټالورجیکل او ترمال ډبره سکور ذخیرې.', depositNames: { 'Coal Basins': 'ډبره سکور حوضې', 'Underground Operations': 'زیر زمینه عملیات', 'Baghlan Province': 'بغلان ولایت' }},
  { id: 'industrial', title: 'صنعتي معادن', description: 'د صنعتي کارونو لپاره لوړ خالصیت ټالک، ډرلینګ باریټ او مالګه ذخیرې.', depositNames: { 'High-Purity Talc': 'لوړ خالصیت ټالک', 'Drilling Barite': 'ډرلینګ باریټ', 'Salt Deposits': 'مالګه ذخیرې' }},
];

const fa: MineralsIndexCategory[] = [
  { id: 'copper', title: 'مس', description: 'ذخایر مس درجه جهانی شامل مس عینک، یکی از بزرگترین ذخایر مس توسعه نیافته جهان.', depositNames: { 'Mes Aynak Deposit': 'ذخیره مس عینک', 'Hajigak Complex': 'مجتمع حاجیگک', 'Balkhab Deposit': 'ذخیره بلخاب', 'Processing Operations': 'عملیات فرآوری', 'Export Infrastructure': 'زیرساخت صادرات' }},
  { id: 'lithium', title: 'لیتیوم', description: 'احتمالاً بزرگترین ذخایر لیتیوم جهان، حیاتی برای باتری خودروهای برقی و ذخیره انرژی.', depositNames: { 'Ghazni Pegmatites': 'پگماتیت‌های غزنی', 'Nuristan Deposits': 'ذخایر نورستان', 'Battery Processing': 'فرآوری باتری', 'EV Supply Chain': 'زنجیره عرضه EV', 'Research Centers': 'مراکز تحقیقاتی' }},
  { id: 'iron', title: 'سنگ آهن', description: 'ذخیره آهن حاجیگک شامل ۲۲ میلیارد تن سنگ آهن مگنتیت درجه بالا برای تولید فولاد.', depositNames: { 'Hajigak Iron Mountain': 'کوه آهن حاجیگک', 'Steel Production': 'تولید فولاد', 'Magnetite Quality': 'کیفیت مگنتیت', 'Infrastructure Steel': 'فولاد زیرساخت', 'Employment Programs': 'برنامه‌های اشتغال' }},
  { id: 'gems', title: 'جواهرات', description: 'زمردهای مشهور جهان پنجشیر، لاجورد بدخشان و یاقوت و یاقوت کبود استثنایی.', depositNames: { 'Panjshir Emeralds': 'زمردهای پنجشیر', 'Lapis Lazuli': 'لاجورد', 'Jegdalek Rubies': 'یاقوت‌های جگدلک', 'Hindu Kush Sapphires': 'یاقوت کبود هندوکش', 'Nuristan Tourmaline': 'تورمالین نورستان', 'Kunar Aquamarine': 'آکوامارین کنر' }},
  { id: 'gold', title: 'طلا', description: 'ذخایر قابل توجه طلا در چندین ولایت با سنت‌های تثبیت شده معدن‌کاری سنتی.', depositNames: { 'Badakhshan Gold Belt': 'کمربند طلای بدخشان', 'Takhar Deposits': 'ذخایر تخار', 'Gold Refining': 'پالایش طلا', 'Artisanal Mining': 'معدن‌کاری سنتی', 'Bullion Production': 'تولید شمش' }},
  { id: 'ree', title: 'عناصر خاکی نادر', description: 'فلزات فناوری حیاتی شامل نئودیمیم و پراسئودیمیم ضروری برای انرژی سبز.', depositNames: { 'Helmand REE': 'REE هلمند', 'Technology Metals': 'فلزات فناوری', 'Neodymium': 'نئودیمیم', 'Global Supply': 'عرضه جهانی', 'Research Partnerships': 'مشارکت‌های تحقیقاتی' }},
  { id: 'chromite', title: 'کرومیت', description: 'ذخایر کرومیت با کیفیت بالا برای تولید فولاد ضد زنگ و بازارهای صادراتی.', depositNames: { 'Chromite Reserves': 'ذخایر کرومیت', 'Export Operations': 'عملیات صادرات', 'Stainless Steel': 'فولاد ضد زنگ' }},
  { id: 'marble', title: 'مرمر', description: 'مرمر معماری پریمیوم با بیش از ۷۵ گونه رنگ منحصر به فرد رقیب کیفیت ایتالیایی.', depositNames: { 'Premium White Marble': 'مرمر سفید پریمیوم', 'Herat Quarries': 'معادن هرات', 'Architectural Stone': 'سنگ معماری' }},
  { id: 'coal', title: 'زغال سنگ', description: 'ذخایر زغال سنگ متالورژیکی و حرارتی برای انرژی داخلی و نیازهای صنعتی.', depositNames: { 'Coal Basins': 'حوضه‌های زغال سنگ', 'Underground Operations': 'عملیات زیرزمینی', 'Baghlan Province': 'ولایت بغلان' }},
  { id: 'industrial', title: 'مواد معدنی صنعتی', description: 'تالک با خلوص بالا، باریت حفاری و ذخایر نمک برای کاربردهای صنعتی.', depositNames: { 'High-Purity Talc': 'تالک با خلوص بالا', 'Drilling Barite': 'باریت حفاری', 'Salt Deposits': 'ذخایر نمک' }},
];

const ar: MineralsIndexCategory[] = [
  { id: 'copper', title: 'النحاس', description: 'ودائع نحاس عالمية المستوى تشمل مس عينك، واحدة من أكبر احتياطيات النحاس غير المطورة عالميًا.', depositNames: { 'Mes Aynak Deposit': 'وديعة مس عينك', 'Hajigak Complex': 'مجمع حاجيگك', 'Balkhab Deposit': 'وديعة بلخاب', 'Processing Operations': 'عمليات المعالجة', 'Export Infrastructure': 'البنية التحتية للتصدير' }},
  { id: 'lithium', title: 'الليثيوم', description: 'احتماليًا أكبر احتياطيات الليثيوم في العالم، حيوية لبطاريات المركبات الكهربائية وتخزين الطاقة.', depositNames: { 'Ghazni Pegmatites': 'البيجماتيت الغزني', 'Nuristan Deposits': 'ودائع نورستان', 'Battery Processing': 'معالجة البطاريات', 'EV Supply Chain': 'سلسلة توريد EV', 'Research Centers': 'مراكز البحوث' }},
  { id: 'iron', title: 'خام الحديد', description: 'وديعة حديد حاجيگك تحتوي على ۲۲ مليار طن من خام الماغنتيت عالي الجودة لإنتاج الصلب.', depositNames: { 'Hajigak Iron Mountain': 'جبل حديد حاجيگك', 'Steel Production': 'إنتاج الصلب', 'Magnetite Quality': 'جودة الماغنتيت', 'Infrastructure Steel': 'صلب البنية التحتية', 'Employment Programs': 'برامج التوظيف' }},
  { id: 'gems', title: 'الأحجار الكريمة', description: 'زمرد بنجشير المشهور عالميًا، لازورد بدخشان وياقوت وياقوت أزرق استثنائي.', depositNames: { 'Panjshir Emeralds': 'زمرد بنشير', 'Lapis Lazuli': 'اللازورد', 'Jegdalek Rubies': 'ياقوت جگدلک', 'Hindu Kush Sapphires': 'ياقوت هندوكوش الأزرق', 'Nuristan Tourmaline': 'تورمالين نورستان', 'Kunar Aquamarine': 'أكوامارين كونار' }},
  { id: 'gold', title: 'الذهب', description: 'ودائع ذهب كبيرة عبر محافظات متعددة مع تقاليد تعدين حرفية راسخة.', depositNames: { 'Badakhshan Gold Belt': 'حزام ذهب بدخشان', 'Takhar Deposits': 'ودائع تخار', 'Gold Refining': 'تكرير الذهب', 'Artisanal Mining': 'التعدين الحرفي', 'Bullion Production': 'إنتاج السبائك' }},
  { id: 'ree', title: 'العناصر الأرضية النادرة', description: 'معادن تكنولوجية حرجة تشمل النيوديميوم والبراسيوديميوم ضرورية للطاقة الخضراء.', depositNames: { 'Helmand REE': 'REE هلمند', 'Technology Metals': 'معادن التكنولوجيا', 'Neodymium': 'النيوديميوم', 'Global Supply': 'العرض العالمي', 'Research Partnerships': 'شراكات البحوث' }},
  { id: 'chromite', title: 'الكروميت', description: 'احتياطيات كروميت عالية الجودة لإنتاج الفولاد المقاوم للصدأ وأسواق التصدير.', depositNames: { 'Chromite Reserves': 'احتياطيات الكروميت', 'Export Operations': 'عمليات التصدير', 'Stainless Steel': 'الفولاد المقاوم للصدأ' }},
  { id: 'marble', title: 'الرخام', description: 'رخام معماري فاخر بأكثر من ۷۵ لونًا فريدًا ينافس الجودة الإيطالية.', depositNames: { 'Premium White Marble': 'رخام أبيض فاخر', 'Herat Quarries': 'محاجر هرات', 'Architectural Stone': 'حجر معماري' }},
  { id: 'coal', title: 'الفحم', description: 'احتياطيات فحم معدني وحرارية لدعم الطاقة المحلية والاحتياجات الصناعية.', depositNames: { 'Coal Basins': 'أحواض الفحم', 'Underground Operations': 'العمليات تحت الأرض', 'Baghlan Province': 'ولاية بغلان' }},
  { id: 'industrial', title: 'المعادن الصناعية', description: 'تلك عالي النقاء وباريوم الحفر وودائع الملح للتطبيقات الصناعية.', depositNames: { 'High-Purity Talc': 'تلك عالي النقاء', 'Drilling Barite': 'باريوم الحفر', 'Salt Deposits': 'ودائع الملح' }},
];

const zh: MineralsIndexCategory[] = [
  { id: 'copper', title: '铜', description: '世界级铜矿床，包括Mes Aynak，全球最大的未开发铜储量之一。', depositNames: { 'Mes Aynak Deposit': 'Mes Aynak铜矿', 'Hajigak Complex': 'Hajigak综合体', 'Balkhab Deposit': 'Balkhab矿床', 'Processing Operations': '加工运营', 'Export Infrastructure': '出口基础设施' }},
  { id: 'lithium', title: '锂', description: '可能是世界上最大的锂储量，对电动汽车电池和储能至关重要。', depositNames: { 'Ghazni Pegmatites': '加兹尼伟晶岩', 'Nuristan Deposits': '努里斯坦矿床', 'Battery Processing': '电池加工', 'EV Supply Chain': '电动汽车供应链', 'Research Centers': '研究中心' }},
  { id: 'iron', title: '铁矿石', description: 'Hajigak铁矿含有220亿吨高品位磁铁矿，用于钢铁生产。', depositNames: { 'Hajigak Iron Mountain': 'Hajigak铁山', 'Steel Production': '钢铁生产', 'Magnetite Quality': '磁铁矿质量', 'Infrastructure Steel': '基础设施用钢', 'Employment Programs': '就业项目' }},
  { id: 'gems', title: '宝石', description: '世界著名的潘杰希尔祖母绿、巴达赫尚青金石以及优质红宝石和蓝宝石。', depositNames: { 'Panjshir Emeralds': '潘杰希尔祖母绿', 'Lapis Lazuli': '青金石', 'Jegdalek Rubies': 'Jegdalek红宝石', 'Hindu Kush Sapphires': '兴都库什蓝宝石', 'Nuristan Tourmaline': '努里斯坦碧玺', 'Kunar Aquamarine': '库纳尔海蓝宝石' }},
  { id: 'gold', title: '金', description: '多个省份拥有重要金矿，并建立了传统手工采矿传统。', depositNames: { 'Badakhshan Gold Belt': '巴达赫尚金矿带', 'Takhar Deposits': '塔哈尔矿床', 'Gold Refining': '金精炼', 'Artisanal Mining': '手工采矿', 'Bullion Production': '金条生产' }},
  { id: 'ree', title: '稀土元素', description: '关键技术金属，包括对绿色能源至关重要的钕和镨。', depositNames: { 'Helmand REE': '赫尔曼德稀土', 'Technology Metals': '技术金属', 'Neodymium': '钕', 'Global Supply': '全球供应', 'Research Partnerships': '研究合作' }},
  { id: 'chromite', title: '铬铁矿', description: '用于不锈钢生产和出口市场的高质量铬铁矿储量。', depositNames: { 'Chromite Reserves': '铬铁矿储量', 'Export Operations': '出口运营', 'Stainless Steel': '不锈钢' }},
  { id: 'marble', title: '大理石', description: '75多种独特颜色的优质建筑大理石，媲美意大利品质。', depositNames: { 'Premium White Marble': '优质白色大理石', 'Herat Quarries': '赫拉特采石场', 'Architectural Stone': '建筑石材' }},
  { id: 'coal', title: '煤炭', description: '冶金和动力煤储量，支持国内能源和工业需求。', depositNames: { 'Coal Basins': '煤盆地', 'Underground Operations': '地下运营', 'Baghlan Province': '巴格兰省' }},
  { id: 'industrial', title: '工业矿产', description: '高纯度滑石、钻井重晶石和盐矿床，用于工业应用。', depositNames: { 'High-Purity Talc': '高纯度滑石', 'Drilling Barite': '钻井重晶石', 'Salt Deposits': '盐矿床' }},
];

const ru: MineralsIndexCategory[] = [
  { id: 'copper', title: 'Медь', description: 'Месторождения меди мирового класса, включая Мес Айнак — одно из крупнейших неразработанных медных месторождений в мире.', depositNames: { 'Mes Aynak Deposit': 'Медное месторождение Мес Айнак', 'Hajigak Complex': 'Комплекс Хаджигак', 'Balkhab Deposit': 'Месторождение Балхаб', 'Processing Operations': 'Перерабатывающие операции', 'Export Infrastructure': 'Экспортная инфраструктура' }},
  { id: 'lithium', title: 'Литий', description: 'Возможно, крупнейшие в мире запасы лития, критически важные для батарей электромобилей и хранения энергии.', depositNames: { 'Ghazni Pegmatites': 'Пегматиты Газни', 'Nuristan Deposits': 'Месторождения Нуристана', 'Battery Processing': 'Переработка батарей', 'EV Supply Chain': 'Цепочка поставок EV', 'Research Centers': 'Исследовательские центры' }},
  { id: 'iron', title: 'Железная руда', description: 'Железорудное месторождение Хаджигак содержит ۲۲ млрд тонн высококачественной магнетитовой руды для производства стали.', depositNames: { 'Hajigak Iron Mountain': 'Железная гора Хаджигак', 'Steel Production': 'Производство стали', 'Magnetite Quality': 'Качество магнетита', 'Infrastructure Steel': 'Сталь для инфраструктуры', 'Employment Programs': 'Программы занятости' }},
  { id: 'gems', title: 'Драгоценные камни', description: 'Всемирно известные изумруды Панджшера, лазурит Бадахшана и исключительные рубины и сапфиры.', depositNames: { 'Panjshir Emeralds': 'Изумруды Панджшера', 'Lapis Lazuli': 'Лазурит', 'Jegdalek Rubies': 'Рубины Джегдалека', 'Hindu Kush Sapphires': 'Сапфиры Гиндукуша', 'Nuristan Tourmaline': 'Турмалин Нуристана', 'Kunar Aquamarine': 'Аквамарин Кунара' }},
  { id: 'gold', title: 'Золото', description: 'Значительные золотые месторождения в нескольких провинциях с устоявшимися традициями кустарной добычи.', depositNames: { 'Badakhshan Gold Belt': 'Золотой пояс Бадахшана', 'Takhar Deposits': 'Месторождения Тахара', 'Gold Refining': 'Рафинирование золота', 'Artisanal Mining': 'Кустарная добыча', 'Bullion Production': 'Производство слитков' }},
  { id: 'ree', title: 'Редкоземельные элементы', description: 'Критические технологические металлы, включая неодим и празеодим, необходимые для зелёной энергетики.', depositNames: { 'Helmand REE': 'REE Гильменда', 'Technology Metals': 'Технологические металлы', 'Neodymium': 'Неодим', 'Global Supply': 'Глобальные поставки', 'Research Partnerships': 'Исследовательские партнёрства' }},
  { id: 'chromite', title: 'Хромит', description: 'Высококачественные запасы хромита для производства нержавеющей стали и экспортных рынков.', depositNames: { 'Chromite Reserves': 'Запасы хромита', 'Export Operations': 'Экспортные операции', 'Stainless Steel': 'Нержавеющая сталь' }},
  { id: 'marble', title: 'Мрамор', description: 'Премиальный архитектурный мрамор с более чем ۷۵ уникальными цветовыми разновидностями, конкурирующий с итальянским качеством.', depositNames: { 'Premium White Marble': 'Премиальный белый мрамор', 'Herat Quarries': 'Карьеры Герата', 'Architectural Stone': 'Архитектурный камень' }},
  { id: 'coal', title: 'Уголь', description: 'Металлургические и тепловые угольные запасы для внутренней энергетики и промышленных нужд.', depositNames: { 'Coal Basins': 'Угольные бассейны', 'Underground Operations': 'Подземные операции', 'Baghlan Province': 'Провинция Баглан' }},
  { id: 'industrial', title: 'Промышленные минералы', description: 'Высокочистый тальк, буровой барит и солевые месторождения для промышленного применения.', depositNames: { 'High-Purity Talc': 'Высокочистый тальк', 'Drilling Barite': 'Буровой барит', 'Salt Deposits': 'Солевые месторождения' }},
];

export const mineralsIndexCategoryTranslations: Record<Language, MineralsIndexCategory[]> = {
  en, ps, fa, ar, zh, ru,
};

export const mineralsIndexMoreDeposits: Record<Language, string> = {
  en: 'more deposits',
  ps: 'نورې ذخیرې',
  fa: 'ذخایر بیشتر',
  ar: 'ودائع أخرى',
  zh: '更多矿床',
  ru: 'месторождений ещё',
};

export const mineralsIndexStrategicResources: Record<Language, string> = {
  en: 'Strategic Resources',
  ps: 'ستراتیژیک سرچینې',
  fa: 'منابع استراتژیک',
  ar: 'الموارد الاستراتيجية',
  zh: '战略资源',
  ru: 'Стратегические ресурсы',
};
