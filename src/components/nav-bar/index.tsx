import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AdbIcon from '@mui/icons-material/Adb';
import {NavLink} from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Typography variant="h6" component="div" sx={{ p: 2 }}>
            <NavLink to='/users'>Users</NavLink>
          </Typography>
          <Typography variant="h6" component="div" sx={{ p: 2 }}>
            <NavLink to='/orders'>Orders</NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}