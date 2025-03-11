import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  LinearProgress,
} from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2, backgroundColor: '#121212' }}>
      <Grid container spacing={3}>
        {/* Total Sales Card */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#1e1e1e' }}>
            <Typography variant="h6" color="white">Total Sales</Typography>
            <Typography variant="h4" color="cyan">¥ 126,560</Typography>
            <Typography variant="body2" color="green">WoW Change 12% ▲</Typography>
            <Typography variant="body2" color="red">DoD Change 12% ▼</Typography>
            <Typography variant="body2" color="white">Daily Sales ¥ 12,423</Typography>
          </Paper>
        </Grid>

        {/* Payments Card */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#1e1e1e' }}>
            <Typography variant="h6" color="white">Payments</Typography>
            <Typography variant="h4" color="cyan">6560</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {/* Simulate Graph with Dummy Data */}
              <Box sx={{ width: '100%', height: 30, backgroundColor: '#3f51b5', borderRadius: 1 }} />
              <Typography variant="body2" color="white">Conversion Rate 60%</Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Visits Card */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#1e1e1e' }}>
            <Typography variant="h6" color="white">Visits</Typography>
            <Typography variant="h4" color="cyan">8846</Typography>
            <Typography variant="body2" color="white">Daily Sales 1234</Typography>
          </Paper>
        </Grid>

        {/* Operational Effect Card */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#1e1e1e' }}>
            <Typography variant="h6" color="white">Operational Effect</Typography>
            <Typography variant="h4" color="cyan">8846</Typography>
            <LinearProgress variant="determinate" value={85} sx={{ height: 10, backgroundColor: '#3e3e3e' }} />
            <Typography variant="body2" color="white">WoW Change 12% ▲</Typography>
            <Typography variant="body2" color="red">DoD Change 12% ▼</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;