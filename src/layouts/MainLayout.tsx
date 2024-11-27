import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Tooltip from '@mui/material/Tooltip';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MenuIcon from '@mui/icons-material/Menu';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import { useNavigate, useLocation } from 'react-router-dom';
import SettingsTree from '../components/Settings/SettingsTree';
interface Props {
  children?: ReactNode;
}
const MainLayout: FC<Props> = ({children}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onSelectTree = (url: string) => {
    
    navigate(url)
  };
  return (
    <WindowWrapper>
      <SideBar>
        <Tooltip placement="right" title="Настройки">
          <IconWrapper
            selected={location.pathname.includes('settings')}
            onClick={() => {
              navigate('/settings');
            }}
          >
            <MenuIcon fontSize="large" />
          </IconWrapper>
        </Tooltip>

        <Tooltip placement="right" title="Системы документации">
          <IconWrapper
            selected={location.pathname.includes('sysdocs')}
            onClick={() => {
              navigate('/sysdocs');
            }}
          >
            <RoomPreferencesIcon fontSize="large" />
          </IconWrapper>
        </Tooltip>

        <Tooltip placement="right" title="Документы">
          <IconWrapper
            selected={location.pathname.includes('documents')}
            onClick={() => {
              navigate('/documents');
            }}
          >
            <FileCopyIcon fontSize="large" />
          </IconWrapper>
        </Tooltip>
      </SideBar>
      <Selector>
        {location.pathname.includes('settings') && (
          <SettingsTree onSelect={onSelectTree} />
        )}
      </Selector>
      <ContentWindow>
        {children}
      </ContentWindow>
    </WindowWrapper>
  );
};

const WindowWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
const Selector = styled.div`
  width: 300px;
  height: 100%;
  background: #fff;
`;
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
const ContentWindow = styled.div`
  width: calc(100% - 300px - 50px);
  height: 100%;
  background: #fff;
  padding-left:20px;
  padding-top:10px;
`;
const IconWrapper = styled.div<{ selected?: boolean }>`
  border-radius: 5px;
  width: 100%;
  display: flex;
  justify-content: center;
  ${(props) =>
    props.selected &&
    `
    background: #6a7b83;
    
  `}
`;
export default MainLayout;
