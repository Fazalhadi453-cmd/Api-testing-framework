# 🏗️ Architecture Documentation

## System Architecture

### Components

1. **Frontend Layer (HTML UI)**
   - User interface for manual testing
   - localStorage for data persistence
   - Fetch API for HTTP requests

2. **Automation Layer (Newman)**
   - CLI tool for running Postman collections
   - Generates HTML and JSON reports
   - Supports multiple reporters

3. **CI/CD Layer (GitHub Actions)**
   - Automated testing on every push
   - Environment setup and test execution
   - Report generation and artifact upload

### Data Flow
```
User → HTML UI → Browser Storage → Test Execution → Results Display
                        ↓
Developer → CLI Command → Newman → API Calls → Report Generation
                        ↓
Git Push → GitHub Actions → Auto Test → Deploy/Reject
```

### Technology Stack

- **Node.js** - Runtime environment
- **Newman** - Postman CLI runner
- **Express** - Web framework (optional)
- **GitHub Actions** - CI/CD automation