import React, { useState, ChangeEvent } from 'react';
import { 
  Paper, 
  Typography, 
  TextField, 
  Button, 
  Box, 
  Grid,
  Tabs,
  Tab,
  Alert
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const TestCaseEditor: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const [stepDefinition, setStepDefinition] = useState(`@Given("I am on the login page")
public void iAmOnTheLoginPage() {
    driver.get("https://example.com/login");
}`);
  const [testData, setTestData] = useState(`{
  "username": "testuser",
  "password": "wrongpassword"
}`);
  const [errorField, setErrorField] = useState('password');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSave = () => {
    // Here we would make an API call to save the changes and create a PR
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate('/');
    }, 2000);
  };

  const handleRunTest = () => {
    // Here we would make an API call to run the test
    console.log('Running test...');
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Edit Test Case {id}
      </Typography>
      
      {showSuccess && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Changes saved successfully! Creating PR...
        </Alert>
      )}

      <Paper sx={{ mb: 2 }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Step Definition" />
          <Tab label="Test Data" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <TextField
            fullWidth
            multiline
            rows={10}
            value={stepDefinition}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setStepDefinition(e.target.value)}
            variant="outlined"
          />
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <TextField
            fullWidth
            multiline
            rows={10}
            value={testData}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTestData(e.target.value)}
            variant="outlined"
            error={errorField === 'password'}
            helperText={errorField === 'password' ? 'Invalid password format' : ''}
          />
        </TabPanel>
      </Paper>

      <Grid container spacing={2}>
        <Grid item>
          <Button 
            variant="contained" 
            color="primary"
            onClick={handleSave}
          >
            Save Changes & Create PR
          </Button>
        </Grid>
        <Grid item>
          <Button 
            variant="outlined" 
            color="primary"
            onClick={handleRunTest}
          >
            Run Test
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TestCaseEditor; 