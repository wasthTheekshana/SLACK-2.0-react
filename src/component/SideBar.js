import React from 'react';
import styled from "styled-components";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SideBarOption from "./SideBarOption";
function SideBar() {
    //2nd part
    return(
        <SideBarContainer>
        <SideBarHeader>
        {/*    left*/}
            <SideBarInfo>
                <h2>sjhgsa</h2>
                <h3>
                    <FiberManualRecordIcon/>
                    Theeksnhnana
                </h3>
            </SideBarInfo>
            <CreateIcon/>
        </SideBarHeader>

            <SideBarOption Icon={InsertCommentIcon} title="Threads"/>
            <SideBarOption Icon={InboxIcon} title="Mention & reaction"/>
            <SideBarOption Icon={DraftsIcon} title="Saved Item"/>
            <SideBarOption Icon={BookmarkBorderIcon} title="Channel Brower"/>
            <SideBarOption Icon={PeopleAltIcon} title="People"/>
            <SideBarOption Icon={AppsIcon} title="Apps"/>
            <SideBarOption Icon={FileCopyIcon} title="File Browers"/>
            <SideBarOption Icon={ExpandLessIcon} title="Show less"/>
            <hr/>
            <SideBarOption Icon={ExpandMoreIcon} title="Show more"/>
            <hr/>
            <SideBarOption Icon={AddIcon} addChanneloption title="Add Chennel"/>

        </SideBarContainer>
    );
}

export default SideBar;

const SideBarContainer = styled.div`
background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  
  >hr{
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SideBarHeader = styled.div`
display: flex;
  border-bottom: 1px solid #49274d;
  padding-bottom: 10px;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;
const SideBarInfo = styled.div`
  flex: 1;
  > h2{
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3{
    display: flex;
    font-size: 15px;
    font-weight: 400;
    align-items: center;
  }
  
  >h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;