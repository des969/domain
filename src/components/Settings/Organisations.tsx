import * as React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DB from '../../main/db';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
const Organisations: React.FC = () => {
  const [items, setItems] = React.useState([]);
  const [addingRow, setAddRow] = React.useState(false);
  const [organisation, setOrganisation] = React.useState();
  const [note, setNote] = React.useState();


  const refreshTable = () =>{
    DB.getAll('organisations', (res: any) => {
      setItems(res);
    });
  } 
  //todo get Organisation data from db
  React.useEffect(() => {
    // db.addItem('organisations', {
    //   "организация":"ООО Системы управления",
    //   "примечание": "Это где я работаю"
    // })
    refreshTable()
  }, []);

  console.log('items', items);
 



  const columns:GridColDef[] = [
    {
      field:'id', headerName:'ID' 
    },
    {
      field:'организация', headerName:'Организация' 
    },
    {
      field:'примечание', headerName:'Примечание' 
    }
  ]


  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <SearchField>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            fullWidth
            placeholder="Поиск по текстовым полям с ограничением выборки"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </SearchField>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <Button size="small" >
            Удалить записи
          </Button>
          <Button size="small" >
            {addingRow ? 'Сохранить' : 'Добавить запись'}
          </Button>
        </Stack>
      </Grid>
      {addingRow && (
        <Grid size={12}>
          <Table style={{ width: '100%' }} aria-label="simple table">
            <TableBody>
              <TableCell align="center">
                <TextField
                  style={{ width: '100%' }}
                  id="org"
                  label="Организация"
                  value={organisation}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setOrganisation(event.target.value);
                  }}
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  style={{ width: '100%' }}
                  id="note"
                  label="Примечание"
                  value={note}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setNote(event.target.value);
                  }}
                />
              </TableCell>
            </TableBody>
          </Table>
        </Grid>
      )}
      <Grid size={12}>
        <DataGrid
          rows={items}
          columns={columns}
          
         
          checkboxSelection
          sx={{ border: 0 , width:'100%' }}
        />
      </Grid>
    </Grid>
  );
};

const SearchField = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  background: #ccc;
  border-radius: 5px;
`;

export default Organisations;
