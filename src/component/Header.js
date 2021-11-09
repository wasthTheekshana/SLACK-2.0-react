import React from 'react';
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
//header.styled.js
function Header() {
    return (
        <HeaderContainer>
            {/*HeaderLeft*/}
            <HeadereLeft>
                <HeaderAvatar
                />
                <AccessTimeIcon/>
            </HeadereLeft>
            {/*HeaderSearch*/}
            <HeaderSearch>
                <SearchIcon/>
                <input placeholder="Search"/>
            </HeaderSearch>
            {/*Header right*/}
            <HeadereRight>
            <HelpOutlineIcon/>
            </HeadereRight>
        </HeaderContainer>
    );
}

export default Header;
const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  display: flex;
  padding: 0 50px;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;

const HeadereLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeadereRight = styled.div`
flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
      margin-left: auto;
    margin-right: 20px;
  }
  
`;