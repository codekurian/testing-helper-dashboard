import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel,
  Box,
  SelectChangeEvent
} from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [environment, setEnvironment] = useState('dev');

  const handleEnvironmentChange = (event: SelectChangeEvent<string>) => {
    setEnvironment(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Testing Helper Dashboard
          </Typography>
          <FormControl sx={{ minWidth: 120, backgroundColor: 'white', borderRadius: 1 }}>
            <InputLabel id="environment-select-label">Environment</InputLabel>
            <Select
              labelId="environment-select-label"
              value={environment}
              label="Environment"
              onChange={handleEnvironmentChange}
            >
              <MenuItem value="dev">Development</MenuItem>
              <MenuItem value="qa">QA</MenuItem>
              <MenuItem value="staging">Staging</MenuItem>
              <MenuItem value="prod">Production</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout; 