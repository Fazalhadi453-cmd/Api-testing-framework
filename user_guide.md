# 📖 User Guide

## Getting Started

### For QA Engineers

#### Manual Testing
1. Open `index.html` in browser
2. Go to "Test Builder" tab
3. Fill in test details
4. Click "Save Test"
5. Go to "My Tests" and click "Run"
6. View results in "Results" tab

#### Automated Testing
```bash
npm run newman
```

View reports in `reports/` folder.

### For Developers

#### Adding New Tests
1. Edit `newman/collections/test-suite.json`
2. Add new test item
3. Run `npm run newman` to verify

#### Running Tests Before Commit
```bash
npm run newman
# Only commit if all tests pass
```

### For DevOps Engineers

#### CI/CD Integration
Tests run automatically on:
- Every push to main branch
- Every pull request
- Daily at 2 PM (scheduled)

#### Viewing CI/CD Results
1. Go to GitHub repository
2. Click "Actions" tab
3. View test results
4. Download report artifacts

## Troubleshooting

### Issue: Tests failing
- Check API endpoint is accessible
- Verify expected status codes
- Check internet connection

### Issue: Reports not generating
- Ensure `reports/` folder exists
- Run `npm run setup` to create folders