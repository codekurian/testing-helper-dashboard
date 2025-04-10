# Testing Helper Dashboard

A modern web application for managing and fixing Cucumber Selenium test cases. This dashboard provides a user-friendly interface to modify step definitions and test data, create pull requests, and rerun tests.

## Features

- View test execution history
- Edit step definitions and test data
- Environment selection (Dev, QA, Staging, Prod)
- Test rerun capability
- Automatic PR creation
- Error highlighting for failed tests

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd testing-helper-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
src/
  ├── components/
  │   ├── Layout.tsx
  │   ├── TestExecutionList.tsx
  │   └── TestCaseEditor.tsx
  ├── App.tsx
  └── index.tsx
```

## Usage

1. The landing page shows a list of all executed test cases
2. Failed tests are highlighted with a "Fix Test" button
3. Clicking "Fix Test" opens the editor where you can:
   - Modify step definitions
   - Update test data
   - Run the test
   - Create a PR with your changes

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

MIT 