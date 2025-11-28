# إعداد Google Sheets لاستقبال بيانات النموذج

## الخطوات المطلوبة:

### 1. إعداد Google Sheet
- افتح الشيت: https://docs.google.com/spreadsheets/d/1bEy2UxUsAk1Wuu1bXeasfKCuQBi3_9oNre60TAG-CBs/edit
- تأكد من وجود الأعمدة التالية في الصف الأول:
  - التاريخ والوقت
  - الاسم
  - رقم الجوال
  - نوع النشاط
  - الرسالة

### 2. إنشاء Google Apps Script
1. في Google Sheets، اذهب إلى: **Extensions** > **Apps Script**
2. احذف الكود الموجود والصق الكود من ملف `google-apps-script.js`
3. احفظ المشروع باسم "BotSar Form Handler"

### 3. نشر السكريبت كـ Web App
1. اضغط على **Deploy** > **New deployment**
2. اختر **Web app** كنوع النشر
3. في الإعدادات:
   - **Description**: BotSar Contact Form
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. اضغط **Deploy**
5. انسخ رابط الـ **Web app URL** (سيكون بهذا الشكل):
   ```
   https://script.google.com/macros/s/AKfycbz.../exec
   ```

### 4. تحديث الكود في الموقع
1. افتح ملف `src/components/Contact.jsx`
2. ابحث عن السطر:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzYOUR_DEPLOYMENT_ID/exec';
   ```
3. استبدل الرابط بالرابط الذي نسخته من الخطوة السابقة

### 5. اختبار النظام
1. شغل الموقع: `npm run dev`
2. املأ نموذج "احجز استشارة مجانية"
3. اضغط "إرسال الطلب"
4. تحقق من:
   - فتح واتساب مع الرسالة
   - إضافة صف جديد في Google Sheets

## ملاحظات مهمة:
- البيانات ستُرسل إلى واتساب و Google Sheets في نفس الوقت
- إذا فشل الإرسال إلى Sheets، سيستمر إرسال واتساب بشكل طبيعي
- التوقيت المسجل سيكون بتوقيت القاهرة (Africa/Cairo)
