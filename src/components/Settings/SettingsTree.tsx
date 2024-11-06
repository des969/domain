import React, { FC } from 'react';
import styled from 'styled-components';
import Tree from '../Tree';
import { TreeViewBaseItem } from '@mui/x-tree-view/models';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
type TreeItemType = {
  id: string;
  label: string;
  icon?: any;
  link?: string;
};

const itemsSettings: TreeViewBaseItem<TreeItemType>[] = [
  {
    id: '/settings',
    label: 'Настройки',
    children: [
      {
        id: '/settings/organisations/',
        label: 'Организации',
        icon: <GroupsIcon />,
        link: '/settings/organizations',
      },
      {
        id: '/settings/persons/',
        label: 'Персоны',
        icon: <PersonIcon />,
        link: '/settings/organizations',
      },
    ],
  },
];

interface $Props {
  onSelect: any;
}

const SettingsTree: FC<$Props> = (props) => {
  return <Tree onSelect={props.onSelect} items={itemsSettings} />;
};

export default SettingsTree;
