import React from "react";
//Styles
import styled from "styled-components";

function SidebarOption({ text, Icon, active }) {
    return (
        <SidebarOptionContainer bg={active}>
            <Icon />
            <h2>{text}</h2>
        </SidebarOptionContainer>
    );
}

const SidebarOptionContainer = styled.div`
    /* #494949 */
    /* #7C7A7A */
    /* #FF5D73 */
    cursor: pointer;
    width: 200px;
    display: flex;
    align-items: center;
    transition: all 0.2s ease-in-out;

    h2 {
        font-weight: 800;
        font-size: 20px;
        margin-right: 20px;
        color: ${({ bg }) => (bg ? "#FF5D73" : "")};
    }

    .MuiSvgIcon-root {
        /* margin: 20px 20px 20px 20px; */
        color: ${({ bg }) => (bg ? "#FF5D73" : "")};
    }
    &:hover {
        background: #000;
        border-radius: 30px;
        .MuiSvgIcon-root {
            color: #fff;
        }
        h2 {
            color: #ffffff;
        }
    }
`;

export default SidebarOption;
