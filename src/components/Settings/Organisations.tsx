import * as React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid2';
const Organisations: React.FC = () => {


//todo get Organisation data from db







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
      </Grid>

        <Grid size={12}>
                
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
