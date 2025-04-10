import React from 'react';
import { 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Button,
  Chip
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface TestCase {
  id: string;
  name: string;
  status: 'PASS' | 'FAIL';
  executionTime: string;
  timestamp: string;
  errorMessage?: string;
}

const mockTestCases: TestCase[] = [
  {
    id: '1',
    name: 'Login Test',
    status: 'FAIL',
    executionTime: '2.5s',
    timestamp: '2024-03-20 10:30:00',
    errorMessage: 'Element not found: username field'
  },
  {
    id: '2',
    name: 'Search Product',
    status: 'PASS',
    executionTime: '1.8s',
    timestamp: '2024-03-20 10:29:00'
  }
];

const TestExecutionList: React.FC = () => {
  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    return status === 'PASS' ? 'success' : 'error';
  };

  const handleFixTest = (testId: string) => {
    navigate(`/test-case/${testId}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Test Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Execution Time</TableCell>
            <TableCell>Timestamp</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockTestCases.map((testCase) => (
            <TableRow key={testCase.id}>
              <TableCell>{testCase.name}</TableCell>
              <TableCell>
                <Chip 
                  label={testCase.status} 
                  color={getStatusColor(testCase.status)}
                  size="small"
                />
              </TableCell>
              <TableCell>{testCase.executionTime}</TableCell>
              <TableCell>{testCase.timestamp}</TableCell>
              <TableCell>
                {testCase.status === 'FAIL' && (
                  <Button 
                    variant="contained" 
                    color="primary"
                    onClick={() => handleFixTest(testCase.id)}
                  >
                    Fix Test
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TestExecutionList; 