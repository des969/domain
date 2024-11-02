import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Tooltip from '@mui/material/Tooltip';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
const MainWindow = () => {

  const [treeMode ,setTreeMode] = useState('')
  return (
    <WindowWrapper>
      <SideBar>
        <Tooltip placement="right" title="Настройки">
        <IconWrapper onClick={()=>{
          setTreeMode('settings')
        }}>
          <MenuIcon fontSize="large" />
          </IconWrapper>
        </Tooltip>

        <Tooltip placement="right" title="Системы документации">
          <IconWrapper margin={5}>
            <RoomPreferencesIcon fontSize="large" />
          </IconWrapper>
        </Tooltip>

        <Tooltip placement="right" title="Документы">
        <IconWrapper>
          <FileCopyIcon fontSize="large" />
          </IconWrapper>
        </Tooltip>
      </SideBar>
      <Selector>
        <SimpleTreeView>
          <TreeItem itemId="settings" label="Настройки">
            <TreeItem itemId="organisations" label="Организации" />
            <TreeItem itemId="persons" label="Персоны" />
          </TreeItem>
        </SimpleTreeView>
      </Selector>
      <ContentWindow>3</ContentWindow>
    </WindowWrapper>
  );
};

const SideBar = styled.div`
  width: 50px;
  height: 100%;
  background: #455a64;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    cursor: pointer;
  }
`;
const Selector = styled.div`
  width: 300px;
  height: 100%;
  background: #fff;
`;
const ContentWindow = styled.div`
  width: calc(100% - 300px - 50px);
  height: 100%;
  background: #fbc02d;
`;
const WindowWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
const IconWrapper = styled.div<{ margin?: number }>`
  margin-bottom: ${props => (props.margin  || 0) + 'px'};
`;
export default MainWindow;
