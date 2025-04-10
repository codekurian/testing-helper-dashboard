# Testing Helper Dashboard

A modern web application for managing and fixing Cucumber Selenium test cases. This dashboard provides a user-friendly interface to modify step definitions and test data, create pull requests, and rerun tests.

## Features

- View test execution history
- Edit test data with key-value pairs
- Test rerun capability
- Automatic PR creation
- Error highlighting for failed tests
- File change tracking

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
  │   ├── Layout.tsx         # Main layout with navigation
  │   ├── TestExecutionList.tsx  # Landing page with test execution history
  │   └── TestCaseEditor.tsx # Editor for modifying test data
  ├── App.tsx                # Main application with routing
  └── index.tsx              # Entry point
public/
  ├── index.html             # HTML template
  ├── manifest.json          # Web app manifest
  └── favicon.ico            # Favicon
```

## Code Summary

### App.tsx
The main application component that sets up routing and the theme provider. It defines the application's routes and wraps everything in a consistent theme.

### Layout.tsx
Provides the main layout structure for the application, including the app bar with the title. This component wraps all pages and provides consistent navigation.

### TestExecutionList.tsx
The landing page that displays a table of test executions. It shows test names, status (pass/fail), execution time, and timestamp. Failed tests have a "Fix Test" button that navigates to the editor.

### TestCaseEditor.tsx
The main editor component that allows users to:
- View files that will be updated
- Edit test data in a key-value format
- Add and remove test data fields
- Save changes
- Create pull requests
- Run tests
- Navigate back to the list

### index.tsx
The entry point of the application that renders the App component into the DOM.

## Usage

1. The landing page shows a list of all executed test cases
2. Failed tests are highlighted with a "Fix Test" button
3. Clicking "Fix Test" opens the editor where you can:
   - See which files will be updated
   - Modify test data
   - Run the test
   - Save changes
   - Create a PR with your changes

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

MIT 