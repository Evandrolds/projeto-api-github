import styled from 'styled-components';
import { Tabs,TabList,Tab,TabPanel } from 'react-tabs';

export const ContainerTabs = styled(Tabs)`
font-size: 16px;
width:100%;
background-color: #1C1C1C;
margin-top: 10px;
`;
export const ContainerTabList = styled(TabList)`
display: flex;

list-style-type: none;
padding: 5px;
margin: 0;
color: white;

`;
ContainerTabList.tabsRole= 'TabList';
export const ContainerTab = styled(Tab)`
border-radius: 18px;
border: 1px solid black;
padding: 8px;
margin: 10px;
background-color: #363636;
cursor: pointer;
&:focus{
    outline: none;
}
&.is-selected{
    border: 1px solid #204e8a;
    border-radius: 18px;
}
`;
ContainerTab.tabsRole= 'Tab';
export const ContainerTabPanel = styled(TabPanel)`
padding: 16px;
border: 1px solid  	black;
box-shadow: 0 0 1em rgba(70,130,180,0.8);
display: none;
&.is-selected{
    display: block;
}
`;
ContainerTabPanel.tabsRole= 'TabPanel';

export const ContainerList = styled.div`
 display: flex;
 flex-wrap: wrap;
`;