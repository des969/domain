import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Grid2 } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const BoxStyles = {
  p: 2,
  bgcolor: 'background.default',
  gap: 2,
};

const Settings: React.FC = () => {
  const [host, setHost] = React.useState(localStorage.getItem('host'));
  const [user, setUser] = React.useState(localStorage.getItem('user'));
  const [password, setPassword] = React.useState(
    localStorage.getItem('password'),
  );
  const [connection, setConnection] = React.useState(false);



  const connect = ()=>{
    
    window.electron.ipcRenderer.sendMessage('mongodb-connect', 
      host,
      user,
      password,
    );
  }

  const connectMongoDBHandler = () =>{
    connect()
    
  }


  React.useEffect(() => {
    window.electron.ipcRenderer.on('mongodb-connect',(connection)=>{
      console.log('args', connection);
      if(connection===true){
        setConnection(true)
      }else{
        setConnection(false)
      }
    })
    
    
    connect()


  }, []);

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={12}>
        <Paper>
          <Box sx={BoxStyles}>
            <Typography variant="h6">
              Mongo DB настройка соединения с базой{' '}
            </Typography>
          </Box>
          <Box
            sx={{
              p: 2,
              bgcolor: 'background.default',
              gap: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <TextField
              onChange={(e) => {
                setHost(e.target.value);
                localStorage.setItem('host', e.target.value);
                setConnection(false)
              }}
              value={host}
              id="host"
              label="Адрес сервера:порт"
              variant="standard"
            />
            <TextField
              onChange={(e) => {
                setUser(e.target.value);
                localStorage.setItem('user', e.target.value);
                setConnection(false)
              }}
              value={user}
              id="user"
              label="Имя пользователя"
              variant="standard"
            />
            <TextField
              onChange={(e) => {
                setPassword(e.target.value);
                localStorage.setItem('password', e.target.value);
                setConnection(false)
              }}
              value={password}
              id="password"
              label="Пароль"
              variant="standard"
            />
          </Box>
          <Box sx={BoxStyles}>
            <Button disabled={connection} onClick={connectMongoDBHandler} color="primary" variant="contained">
              Соединиться
            </Button>
          </Box>
        </Paper>
      </Grid2>
    </Grid2>
  );
};

export default Settings;
