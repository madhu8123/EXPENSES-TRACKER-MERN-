import styled, {css} from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 90px;
  padding-top: 90px;
  box-shadow: 0 3px 6px 0 #555;
`;


const MenuContainer = styled.span`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 16px 24px;
  margin: 8px 0;
  justify-content: center;
  cursor: pointer;
  ${(props) =>
    props.isSelected
        ? css`
          opacity: 1;
        `
        : css`
          opacity: 0.5;
        `}
`;
const SideMenuComponent = (props) => {
    const onMenuClick = (activeMenu) => {
        props.changeTab(activeMenu)
    }
    
  
};

export default SideMenuComponent;