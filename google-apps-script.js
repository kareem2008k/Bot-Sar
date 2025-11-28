// Google Apps Script لتسجيل بيانات النموذج في Google Sheets
// رابط الشيت: https://docs.google.com/spreadsheets/d/1bEy2UxUsAk1Wuu1bXeasfKCuQBi3_9oNre60TAG-CBs/edit

function doPost(e) {
    try {
        // معرف الشيت
        const SHEET_ID = '1bEy2UxUsAk1Wuu1bXeasfKCuQBi3_9oNre60TAG-CBs';
        const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

        // قراءة البيانات
        let data;
        if (e.postData && e.postData.contents) {
            data = JSON.parse(e.postData.contents);
        } else {
            data = e.parameter;
        }

        // إضافة صف جديد بالبيانات
        sheet.appendRow([
            data.timestamp || new Date().toLocaleString('ar-EG', { timeZone: 'Africa/Cairo' }),
            data.name || '',
            data.phone || '',
            data.businessType || '',
            data.message || ''
        ]);

        return ContentService.createTextOutput(JSON.stringify({
            'status': 'success',
            'message': 'تم حفظ البيانات بنجاح'
        })).setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        return ContentService.createTextOutput(JSON.stringify({
            'status': 'error',
            'message': error.toString()
        })).setMimeType(ContentService.MimeType.JSON);
    }
}

function doGet(e) {
    return ContentService.createTextOutput('Service is running');
}
