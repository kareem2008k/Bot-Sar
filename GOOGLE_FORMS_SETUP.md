# الطريقة السهلة لربط النموذج بـ Google Sheets

## الخطوات (5 دقائق فقط!):

### 1. إنشاء Google Form
1. اذهب إلى: https://forms.google.com
2. اضغط **Blank** لإنشاء نموذج جديد
3. أضف الحقول التالية بالترتيب:
   - **الاسم** (Short answer)
   - **رقم الجوال** (Short answer)
   - **نوع النشاط** (Multiple choice أو Dropdown)
     - صيدلية
     - مطعم
     - محل تجاري
     - عيادة
     - متجر إلكتروني
     - أخرى
   - **الرسالة** (Paragraph)

### 2. ربط النموذج بـ Google Sheets
1. في Google Form، اضغط على تبويب **Responses**
2. اضغط على أيقونة Google Sheets (الخضراء)
3. اختر **Create a new spreadsheet**
4. سيتم إنشاء شيت تلقائياً وربطه بالنموذج

### 3. الحصول على معرفات الحقول
1. افتح Google Form
2. اضغط **Send** ثم اختر تبويب **Link**
3. انسخ الرابط (سيكون بهذا الشكل):
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXXXXXXXXX/viewform
   ```
4. افتح الرابط في متصفح جديد
5. اضغط F12 لفتح Developer Tools
6. في تبويب **Elements**، ابحث عن كل حقل input
7. ستجد `name="entry.XXXXXXXX"` - هذا هو المعرف

**مثال:**
```html
<input type="text" name="entry.1234567890" ...>  <!-- حقل الاسم -->
<input type="text" name="entry.0987654321" ...>  <!-- حقل الجوال -->
```

### 4. تحديث الكود
افتح `src/components/Contact.jsx` وحدّث السطور التالية:

```javascript
// السطر 52: استبدل برابط النموذج الخاص بك
const googleFormUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';

// السطور 58-61: استبدل المعرفات
const fields = {
    'entry.YOUR_NAME_ID': formData.name,
    'entry.YOUR_PHONE_ID': formData.phone,
    'entry.YOUR_BUSINESS_ID': businessTypeLabels[formData.businessType],
    'entry.YOUR_MESSAGE_ID': formData.message
};
```

### 5. اختبار
1. شغل الموقع: `npm run dev`
2. املأ النموذج واضغط "إرسال الطلب"
3. تحقق من:
   - ✅ فتح واتساب
   - ✅ إضافة صف في Google Sheets

## ملاحظات:
- ✨ **لا يحتاج Apps Script**
- ✨ **لا يحتاج نشر أو deployment**
- ✨ **يعمل فوراً بعد التحديث**
- البيانات تُحفظ تلقائياً في الشيت المرتبط بالنموذج
