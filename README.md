# Cosmic Drift

تجربه‌ای سه‌بعدی و آرام برای سفر در کیهان، با React، TypeScript، Three.js و WebGL؛ بدون سرور، حساب کاربری یا API پولی.

## اجرای برنامه در ویندوز

1. نسخهٔ LTS از Node.js (نسخهٔ ۲۲٫۱۸ به بالا یا ۲۴) و Git را نصب کنید.
2. PowerShell را باز کنید:

```powershell
git clone https://github.com/shamssherwin77-lang/cosmic-drift.git
cd cosmic-drift
npm ci
npm run dev
```

آدرس نمایش‌داده‌شده در ترمینال را در Chrome، Edge یا Firefox باز کنید. شتاب‌دهی سخت‌افزاری مرورگر و WebGL باید فعال باشند.

```powershell
npm run build
npm run preview
```

فرمان اول TypeScript و خروجی تولیدی را بررسی می‌کند؛ فرمان دوم همان خروجی را برای بازبینی اجرا می‌کند. پوشهٔ `dist` روی هر میزبان فایل استاتیک قابل انتشار است. برای نصب نخست دسترسی به registry.npmjs.org لازم است. رندر و صدا به هیچ سرویس خارجی وابسته نیستند و پس از بارگذاری برنامه به‌صورت محلی کار می‌کنند.

## کنترل‌ها

- **Start journey:** شروع حرکت؛ **Pause / Resume** یا Space: توقف و ادامه.
- **پرواز دستی:** هدایت سفینه با WASD یا جهت‌ها. A/چپ به چپ، D/راست به راست، W/بالا به بالا و S/پایین به پایین می‌چرخاند. Roll خودکار وجود ندارد.
- درگ موس روی فضا: نگاه مستقل از مسیر سفینه؛ کشیدن به راست یعنی نگاه به راست و کشیدن به بالا یعنی نگاه به بالا. لغزندهٔ Cruise speed سرعت سفر را تنظیم می‌کند.
- روی موبایل پس از شروع، جوی‌استیک سمت چپ مسیر را کنترل می‌کند؛ انگشت دوم روی فضای آزاد، زاویهٔ نگاه را عوض می‌کند. با رهاکردن جوی‌استیک، فرمان خنثی و چرخش با اینرسی کوتاه متوقف می‌شود. لمس کوتاهِ فضا جهت را عوض نمی‌کند. حالت افقی توصیه می‌شود.
- در Settings، **Steering / mouse sensitivity** برای حساسیت هدایت دسکتاپ و نگاه با موس، **Touch sensitivity** برای هدایت و نگاه لمسی، و دو گزینهٔ **Invert mouse** برای معکوس‌کردن محورهای موس وجود دارند. وارونگی موس روی لمس اثر ندارد.
- هنگام بازبودن تنظیمات، ورودی هدایت متوقف می‌شود؛ پس از بستن منو کلید یا جوی‌استیک را دوباره بگیرید. خروج از پنجره، لغو لمس و تغییر جهت صفحه نیز ورودی را پاک می‌کنند. از ژیروسکوپ استفاده نمی‌شود.
- آیکن صدا در سمت راست: تنظیم مستقل موسیقی، موتور و محیط. موسیقی ضبط‌شدهٔ Kevin MacLeod با مجوز CC BY 3.0 همراه با اعتبار سازنده استفاده می‌شود؛ با زدن Start journey پخش آغاز می‌شود.
- تنظیمات: کیفیت Low / Medium / High، میزان حرکت خودکار دوربین، Reduced motion و نمایش کابین.
- روشنایی **Dark / Balanced / Cinematic** با پیش‌فرض Balanced و لغزندهٔ **Soft bloom** برای هالهٔ ملایم قابل تنظیم‌اند. Exposure با تغییر منطقه به‌تدریج تنظیم می‌شود. در Low و Medium، Bloom پس‌پردازشی غیرفعال است و هالهٔ سبک در shader ستاره‌ها اجرا می‌شود.
- دستگاه‌های دارای ورودی لمسی به‌طور پیش‌فرض با کیفیت Low و دسکتاپ با Medium شروع می‌شوند. می‌توانید کیفیت را دستی افزایش دهید؛ روی Android حالت افقی و Low پیشنهاد می‌شود.
- **Performance mode** بودجهٔ سبک و رزولوشن کمتر را فعال می‌کند؛ انتخاب کیفیت شما حفظ می‌شود تا با خاموش‌کردن آن برگردد. **Adaptive resolution** پیش‌فرض روشن است و با فاصلهٔ زمانی، رزولوشن رندر را متناسب با کندی فریم تنظیم می‌کند؛ رابط کاربری و جهت کنترل‌ها تغییر نمی‌کنند.
- آیکن تمام‌صفحه: ورود یا خروج؛ **H**: پنهان‌کردن رابط؛ **Escape**: نمایش رابط و بستن تنظیمات.

## جزئیات فنی و محدودیت‌ها

تا ۶۰٬۲۰۰ ستاره در سه میدان سه‌بعدی نزدیک/میانی/دور با BufferGeometry، خوشه‌ها و نوار کهکشانی، ابرهای حجمی ray-marched با نویز سه‌بعدی، سیاره و کابین نورپردازی‌شده رندر می‌شوند. تعداد ستاره، نمونه‌های حجم، رزولوشن و Bloom با کیفیت تغییر می‌کنند. نور و جذب ابرها تقریبی‌اند؛ شبیه‌سازی فیزیکی کامل یا میلیون‌ها ستارهٔ مجزا نیست. سرعت و فاصله‌ها هنری‌اند و مقیاس نجومی واقعی ندارند. برای سیستم‌های ضعیف Low را انتخاب کنید؛ Reduced motion حرکت خودکار زاویهٔ دوربین را حذف و سرعت عبور را کم می‌کند. صدای محیط از نوسان‌سازهای اصلی و بدون ضرب تند ساخته شده است.

هیچ دشمن، امتیاز، مأموریت یا محدودیت زمانی وجود ندارد. پروژه هیچ داده‌ای از کاربر ذخیره نمی‌کند.

## تست کنترل‌ها

با Node.js 24 یا 22.18+:

```powershell
npm ci
npm test
npx playwright install chromium
npm run test:browser
npm run build
```

تست‌های محاسباتی جهت محورها، نرخ فریم ۱۵/۳۰/۶۰/۱۲۰، اینرسی، محدودیت زاویه، توقف، حساسیت، وارونگی موس و تعویض حالت را بررسی می‌کنند. تست‌های مرورگر، ورودی دسکتاپ و لمس چندانگشتی با CDP، رهاسازی/لغو/capture، جداسازی منوها، پاک‌سازی listenerها، چیدمان افقی و شروع WebGL را پوشش می‌دهند. تست‌ها سرور موقت را روی پورت ۵۱۷۴ اجرا و سپس متوقف می‌کنند. برای استفاده از Chromium نصب‌شده، متغیر `CHROMIUM_PATH` را به فایل اجرایی آن تنظیم کنید. این تست‌ها جای آزمایش روی دستگاه واقعی Android را نمی‌گیرند.

## آماده‌سازی GitHub Pages

```powershell
npm run build -- --base=/cosmic-drift/
```

محتویات `dist` باید در ریشهٔ شاخهٔ `gh-pages` منتشر شوند. Merge شدن کد در `main` به‌تنهایی شاخهٔ خروجی فعلی Pages را به‌روز نمی‌کند. نسخهٔ اصلاح کنترل‌ها پیش از انتشار عمومی باید بررسی شود.


## ارتقای گرافیکی ۲٫۰

معماری، بودجهٔ کیفیت و محدودیت‌های تست در [یادداشت گرافیک](docs/graphics-2.md) آمده است. سیستم هدایت در `src/controls.ts` مستقل مانده و در این ارتقا تغییر نکرده است. هیچ مدل، تصویر پس‌زمینه، فونت اینترنتی یا سرویس خارجی برای رندر لازم نیست.


## کابین بسته و روانی سفر

نسخهٔ جدید دیوارهٔ چپ/راست، سقف، کف، دیوارهٔ عقب، قاب پنجره و سه نمایشگر فیزیکی دارد. بسته به کیفیت، چهار تا شش جرم اصلی، دو تا سه قمر، یک حلقه و خوشهٔ سنگی instanced در هر منطقه دیده می‌شوند. تنظیم نور سحابی روی کابین باقی مانده است.

جزئیات، محدودیت‌ها و اندازه‌گیری مقایسه‌ای در [گزارش کابین و عملکرد](docs/flight-deck-performance.md) آمده‌اند. برای تست سریع، پیش‌نمایش مستقل در مسیر `/cosmic-drift/previews/flight-deck/` آماده می‌شود؛ انتشار آن برنامهٔ ریشه یا پیش‌نمایش قبلی را جایگزین نمی‌کند.

## Light Jump

دکمهٔ **Light Jump** در نوار اصلی یا کلید **J** یک سفر سینمایی حدود ۱۰ ثانیه‌ای به منطقه‌ای متفاوت آغاز می‌کند. در طول پرش، هدایت دستی موقتاً قفل است؛ Pause/Resume و تنظیم کیفیت و صدا کار می‌کنند. پس از رسیدن، حالت و سرعت درخواستی قبلی بازمی‌گردند. روی گوشی دکمه را لمس کنید؛ Reduced Motion افکت آرام‌تری دارد. صدا تنها با فعال‌کردن صدای برنامه پخش می‌شود.

مقصد seed و چیدمان تازه دارد و فقط تغییر یک برچسب نیست. جزئیات و محدودیت‌های تست در [راهنمای Light Jump](docs/light-jump.md) آمده‌اند. پیش‌نمایش مستقل در زیرمسیر `/cosmic-drift/previews/light-jump/` آماده می‌شود.

### Continuous universe

Based on `feat/light-jump` (`b75dad7`). Flight now streams a deterministic 3D
neighborhood of 27 planetary systems, with a fixed GPU resource pool. Sector
coordinates determine their seed, palette, orientation, planets, rings and moons;
returning after eviction recreates the same landmarks. Region selections and Light
Jump continue to change the atmosphere without moving or replacing planets.
Bodies fade only at the streaming horizon (10,000–13,000 world units) or inside
surfaces. The decorative GPU star field and nebula retain their existing wrapping.

WASD/arrows and the touch joystick retain their bindings. Ship pitch can complete
full loops to reach above and below. The existing speed slider now ranges from
0–1200: zero smoothly brakes, and higher targets accelerate with the existing
frame-independent damping. The speed display reports actual velocity; the slider
sets the target. Pause remains an immediate simulation freeze. Travel coordinates
persist during the current session and are reproducible after sector unloading;
reloading starts a new journey at the original position.

Validation: `npm test`, `npm run build`, and
`CHROMIUM_PATH=/usr/bin/chromium npm run test:browser`.

### Sound mixer and recorded music

Open **Audio settings** (the speaker icon) to mix engine/Light Jump, space
ambience and music separately. Each layer has its own toggle and volume.
The music library uses human-composed recordings by **Kevin MacLeod**:
Meditation Impromptu 01, Floating Cities, Jellyfish in Space and Soaring.
These editions are free to use **with attribution under CC BY 3.0**; composer,
source and license links appear in the panel. See [the credits and provenance](docs/music-license.md).

The selected recording streams from the site's own MP3 files; only two persistent
players are used for crossfading. Pause/mute stops the recording after a fade and
resume preserves its position. Load failures are visible and retryable. Mixer
preferences remain local; sound waits for Start journey after reload. Preferences from
the old procedural tracks migrate to the corresponding real recordings.

### Exterior and richer system travel

A low-profile exterior hull, swept wings, rear deck, fins and navigation strips
are attached to the ship and visible through the side/rear observation windows.
Passenger free-look does not rotate the exterior; Show cockpit hides both interior
and exterior geometry. The model uses six material batches and no downloaded assets.

The universe streams 27 deterministic systems with 8–12 planets, eight moons,
a primary star/corona, a planetary ring and an instanced asteroid belt per system.
Distant systems have a fixed pool of 343 stellar beacons that match the positions
and colors of the real stars encountered on approach. Sectors are 14,000 game
units apart. Near, low and distant sphere geometry is reused; GPU object pools
remain bounded as travel continues. Returning recreates the same system.

Cruise speed is displayed in **game units per second (u/s)**, not km/s. Distances,
stellar sizes and transit times are deliberately compressed for relaxed exploration.
The navigation caption shows the current passage and a next
system in the ship's forward direction, with its distance in game units.


### Cinematic ship finish

Ship surfaces now use PBR metal/paint finishes with brushed microstructure,
panel seams and restrained edge wear. A shared, filtered environment provides
reflection lighting; the closest system star supplies the directional key light.
The instrument glow contributes local cabin lighting. Canopy glass has lightweight
environment reflections, while the navigation screen has a slow radar sweep.
Wings include beveled armor, fasteners, vents, hull markings and rounded engine
housings. Stellar surfaces have granulation and limb shading.

Desktop **High** quality enables a 1024px directional shadow map and stronger glass
reflections; **Cinematic** lighting is the brightest presentation preset. Low and
Medium retain the material treatment without the shadow-map pass. Devices without
floating-point render-target support fall back to direct ship lighting. Reflection
lighting is a generated environment, not ray-traced or screen-space scene reflection.
The cinematic resource test verifies quality switching and complete GPU cleanup.

### Minimal flight interface

The centered Start journey button enters manual flight and starts the selected
recorded music in the same user gesture. Before starting, only entry and fullscreen
are exposed. A persistent bottom speed slider, left joystick and right-side action
rail replace the flight deck. Music and graphics open individual settings overlays.
There is no mode selector, region picker or automatic region timer. Jump selects
a real neighboring system in the flight direction, relocates under its transition
veil, and derives the atmosphere from the destination coordinates.

### Deep Silence singularity

One fixed system in Deep Silence hosts the sole supermassive black hole, with curved-ray
accretion disks, background lensing and warm ship lighting. A hazardous Jump
requires an explicit Continue/Cancel decision; entry points away from the hole
so the pilot can discover it by turning. Distance-based amber/red warnings,
optional transit stabilization and a dark proximity soundscape accompany close
exploration. See [encounter behavior and graphics details](docs/singularity.md).
