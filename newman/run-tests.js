const newman = require('newman');
const path = require('path');
const fs = require('fs');

const reportsDir = path.join(__dirname, '../reports');
if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
}

const collectionPath = path.join(__dirname, 'collections/test-suite.json');
const timestamp = new Date().toISOString().replace(/:/g, '-').split('.')[0];

console.log('\n🚀 Starting API Test Execution...\n');
console.log('Student: Fazal Hadi (CU-4301-2023)');

newman.run({
    collection: collectionPath,
    reporters: ['cli', 'htmlextra', 'json'],
    reporter: {
        htmlextra: {
            export: path.join(reportsDir, `test-report-${timestamp}.html`)
        },
        json: {
            export: path.join(reportsDir, `test-report-${timestamp}.json`)
        }
    }
}, function (err, summary) {
    if (err) {
        console.error('Error:', err);
        process.exit(1);
    }
    
    console.log('\n✅ Tests completed!');
    console.log('📄 Check reports/ folder for HTML and JSON reports\n');
    process.exit(0);
});