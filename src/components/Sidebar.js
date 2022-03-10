import React from "react";
// Mui Icons
import TwitterIcon from "@mui/icons-material/Twitter";
import CottageSharpIcon from "@mui/icons-material/CottageSharp";
import AutoFixHighSharpIcon from "@mui/icons-material/AutoFixHighSharp";
import LocalFireDepartmentSharpIcon from "@mui/icons-material/LocalFireDepartmentSharp";
import ForumSharpIcon from "@mui/icons-material/ForumSharp";
import BookmarkSharpIcon from "@mui/icons-material/BookmarkSharp";
import PlaylistAddCircleSharpIcon from "@mui/icons-material/PlaylistAddCircleSharp";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
// Mui Component
import Button from "@mui/material/Button";

//Styles
import styled from "styled-components";

import SidebarOption from "./SidebarOption";

function Sidebar() {
    return (
        <SidebarContainer>
            <TwitterIcon className='twitter-icon' />
            <SidebarOption active Icon={CottageSharpIcon} text='Home' />
            <SidebarOption Icon={AutoFixHighSharpIcon} text='Explore' />
            <SidebarOption
                Icon={LocalFireDepartmentSharpIcon}
                text='Notifications'
            />{" "}
            <SidebarOption Icon={ForumSharpIcon} text='Messages' />
            <SidebarOption Icon={BookmarkSharpIcon} text='Bookmarks' />
            <SidebarOption Icon={PlaylistAddCircleSharpIcon} text='Lists' />
            <SidebarOption Icon={PersonIcon} text='Profile' />
            <SidebarOption Icon={MoreHorizSharpIcon} text='More' />
            <Button className='sidebar-btn' fullWidth={true} variant='outlined'>
                Tweet
            </Button>
        </SidebarContainer>
    );
}

const SidebarContainer = styled.div`
    /* border: 1px solid red; */
    flex: 0.3;
    border-right: 1px solid #7c7a7a;

    /* padding: 0px 20px 0px 20px; */
    /* margin-top: 20px; */

    .twitter-icon {
        color: #ff5d73;
        font-size: 30px;
    }
    .sidebar-btn {
        background: #000;
        width: 200px;
        border: none !important;
        color: #ffffff;
        border-radius: 30px;
        font-weight: 900;
        margin-top: 20px;
        height: 50px;
        text-transform: inherit;
    }
    .sidebar-btn:hover {
        background: #ff5d73;
        border-radius: 30px;
        color: #fff;
        /* opacity: 0.6; */
    }
    .MuiSvgIcon-root {
        margin: 20px 20px 20px 20px;
    }
`;

export default Sidebar;
