import React, { useState } from 'react';
import { RouterProvider ,useNavigate,BrowserRouter , Route, Routes} from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Tooltip from '@mui/material/Tooltip';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import Tree from '../../components/Tree';
import { TreeViewBaseItem } from '@mui/x-tree-view/models';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import routes from "../../router/routes"
type TreeItemType = {
  id: string;
  label: string;
  icon?: any;
  link?:string;
};

const itemsSettings: TreeViewBaseItem<TreeItemType>[] = [
  {
    id: '',
    label: 'Настройки',
    children: [
      { id: 'organisations', label: 'Организации', icon: <GroupsIcon />,link:'/settings/organizations' },
      { id: 'persons', label: 'Персоны', icon: <PersonIcon />,link:'/settings/organizations' },
    ],
  },
];

const MainWindow = () => {
  const [treeMode, setTreeMode] = useState('');
  const navigate = useNavigate();
  const onSelect = (props:any) =>{
    const url = `/${treeMode}/`+props

 
   navigate(url);
  }
  return (
    <WindowWrapper>
      <SideBar>
        <Tooltip placement="right" title="Настройки">
          <IconWrapper
            onClick={() => {
              setTreeMode('settings');
            }}
          >
            <MenuIcon fontSize="large" />
          </IconWrapper>
        </Tooltip>

        <Tooltip placement="right" title="Системы документации">
          <IconWrapper
            margin={5}
            onClick={() => {
              setTreeMode('sysdocs');
            }}
          >
            <RoomPreferencesIcon fontSize="large" />
          </IconWrapper>
        </Tooltip>

        <Tooltip placement="right" title="Документы">
          <IconWrapper
            onClick={() => {
              setTreeMode('docs');
            }}
          >
            <FileCopyIcon fontSize="large" />
          </IconWrapper>
        </Tooltip>
      </SideBar>
      <Selector>
        {treeMode === 'settings' && <Tree onSelect={onSelect} items={itemsSettings} />}
        {treeMode === 'sysdocs' && <Tree items={itemsSettings} />}
        {treeMode === 'docs' && <Tree items={itemsSettings} />}
      </Selector>
      <ContentWindow>
        <Routes>
          <Route path="/index.html" element={<div>Hello world!</div>}/>
          <Route path="/settings/organisations" element={<div>organizations</div>}/>
          <Route path="/settings/persons" element={<div>persons</div>}/>
         
        </Routes>
      </ContentWindow>
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
  background: #fff;
`;
const WindowWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
const IconWrapper = styled.div<{ margin?: number }>`
  margin-bottom: ${(props) => (props.margin || 0) + 'px'};
`;
export default MainWindow;
