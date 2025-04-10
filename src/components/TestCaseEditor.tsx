import React, { useState, ChangeEvent } from 'react';
import { 
  Paper, 
  Typography, 
  TextField, 
  Button, 
  Box, 
  Grid,
  Alert,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import DescriptionIcon from '@mui/icons-material/Description';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface TestDataField {
  key: string;
  value: string;
  hasError: boolean;
}

interface FileToUpdate {
  path: string;
  type: 'json' | 'java' | 'feature';
}

const TestCaseEditor: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [testData, setTestData] = useState<TestDataField[]>([
    { key: 'username', value: 'testuser', hasError: false },
    { key: 'password', value: 'wrongpassword', hasError: true }
  ]);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Mock files that will be updated
  const filesToUpdate: FileToUpdate[] = [
    { path: 'src/test/resources/data/test-data.json', type: 'json' },
    { path: 'src/test/java/com/example/steps/LoginSteps.java', type: 'java' },
    { path: 'src/test/resources/features/login.feature', type: 'feature' }
  ];

  const handleFieldChange = (index: number, field: 'key' | 'value', newValue: string) => {
    const updatedData = [...testData];
    updatedData[index] = {
      ...updatedData[index],
      [field]: newValue,
      hasError: field === 'value' && index === 1 // Simulating error for password field
    };
    setTestData(updatedData);
  };

  const handleAddField = () => {
    setTestData([...testData, { key: '', value: '', hasError: false }]);
  };

  const handleRemoveField = (index: number) => {
    const updatedData = [...testData];
    updatedData.splice(index, 1);
    setTestData(updatedData);
  };

  const handleSave = () => {
    // Here we would make an API call to save the changes
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  const handleCreatePR = () => {
    // Here we would make an API call to create a PR
    console.log('Creating PR with changes...');
    navigate('/');
  };

  const handleRunTest = () => {
    // Here we would make an API call to run the test
    console.log('Running test...');
  };

  const handleBackToList = () => {
    navigate('/');
  };

  const getFileTypeColor = (type: string) => {
    switch (type) {
      case 'json': return 'info';
      case 'java': return 'primary';
      case 'feature': return 'success';
      default: return 'default';
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Button 
          startIcon={<ArrowBackIcon />}
          onClick={handleBackToList}
          sx={{ mr: 2 }}
        >
          Back to List
        </Button>
        <Typography variant="h5" component="h1">
          Edit Test Case {id}
        </Typography>
      </Box>
      
      {showSuccess && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Changes saved successfully!
        </Alert>
      )}

      <Paper sx={{ mb: 3, p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Files to Update
        </Typography>
        <List dense>
          {filesToUpdate.map((file, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary={file.path} />
              <Chip 
                label={file.type.toUpperCase()} 
                size="small" 
                color={getFileTypeColor(file.type)}
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Paper sx={{ mb: 2, p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Test Data
        </Typography>
        
        {testData.map((field, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={5}>
                <TextField
                  fullWidth
                  label="Key"
                  value={field.key}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleFieldChange(index, 'key', e.target.value)}
                  variant="outlined"
                  size="small"
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  fullWidth
                  label="Value"
                  value={field.value}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleFieldChange(index, 'value', e.target.value)}
                  variant="outlined"
                  size="small"
                  error={field.hasError}
                  helperText={field.hasError ? 'Invalid format' : ''}
                />
              </Grid>
              <Grid item xs={2}>
                <Button 
                  variant="outlined" 
                  color="error" 
                  onClick={() => handleRemoveField(index)}
                  size="small"
                >
                  Remove
                </Button>
              </Grid>
            </Grid>
          </Box>
        ))}
        
        <Button 
          variant="outlined" 
          onClick={handleAddField}
          sx={{ mt: 1 }}
        >
          Add Field
        </Button>
      </Paper>

      <Divider sx={{ my: 3 }} />

      <Grid container spacing={2}>
        <Grid item>
          <Button 
            variant="contained" 
            color="primary"
            onClick={handleSave}
          >
            Save Changes
          </Button>
        </Grid>
        <Grid item>
          <Button 
            variant="contained" 
            color="secondary"
            onClick={handleCreatePR}
          >
            Create PR
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