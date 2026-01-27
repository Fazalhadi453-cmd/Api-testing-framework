/**
 * Project Setup Script
 * API Testing Automation Framework
 * By: Fazal Hadi (CU-4301-2023)
 */

const fs = require('fs');
const path = require('path');

console.log('\n🚀 Setting up API Testing Automation Framework...\n');
console.log('=' .repeat(60));
console.log('👨‍🎓 Student: Fazal Hadi (CU-4301-2023)');
console.log('📚 Course: Software Verification & Validation');
console.log('👩‍🏫 Instructor: Ms. Manahil Ather');
console.log('=' .repeat(60));
console.log('\n');

// Directories to create
const directories = [
    'reports',
    'logs',
    'newman/collections',
    'config',
    'scripts',
    '.github/workflows'
];

// Create directories
console.log('📁 Creating project directories...\n');
directories.forEach(dir => {
    const dirPath = path.join(__dirname, '..', dir);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`   ✅ Created: ${dir}`);
    } else {
        console.log(`   ℹ️  Already exists: ${dir}`);
    }
});

// Create .gitkeep files in empty directories
console.log('\n📄 Creating .gitkeep files...\n');
['reports', 'logs'].forEach(dir => {
    const gitkeepPath = path.join(__dirname, '..', dir, '.gitkeep');
    if (!fs.existsSync(gitkeepPath)) {
        fs.writeFileSync(gitkeepPath, '');
        console.log(`   ✅ Created: ${dir}/.gitkeep`);
    }
});

// Create .env file if it doesn't exist
const envPath = path.join(__dirname, '..', '.env');
const envExamplePath = path.join(__dirname, '..', '.env.example');

if (!fs.existsSync(envPath) && fs.existsSync(envExamplePath)) {
    fs.copyFileSync(envExamplePath, envPath);
    console.log('\n   ✅ Created .env file from .env.example');
    console.log('   ⚠️  Please update .env with your configuration');
}

// Summary
console.log('\n' + '=' .repeat(60));
console.log('✨ Setup Complete!');
console.log('=' .repeat(60));
console.log('\n📝 Next Steps:\n');
console.log('   1. Install dependencies: npm install');
console.log('   2. Run tests: npm run newman');
console.log('   3. View reports in: reports/');
console.log('   4. Open index.html in browser for UI');
console.log('\n💡 For CI/CD:');
console.log('   - Push to GitHub to trigger automated tests');
console.log('   - Check Actions tab for test results\n');
console.log('=' .repeat(60));
console.log('\n🎉 Happy Testing!\n');