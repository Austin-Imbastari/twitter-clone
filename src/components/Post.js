import React from "react";
// styles
import styled from "styled-components";
// Mui Icons
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LoopIcon from "@mui/icons-material/Loop";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

function Post({ displayName, userName, verified, text, avatar }) {
    return (
        <PostContainer>
            <AvatarContainer>
                <Avatar src='https://images.unsplash.com/photo-1645894096014-51dddfdd027a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80' />
            </AvatarContainer>
            <BodyContainer>
                <HeaderContainer>
                    <PostHeaderText>
                        <h3>
                            Imba
                            <VerifiedIcon
                                className='verified-badge'
                                fontSize='small'
                            />
                            <span>@fvckimba</span>
                        </h3>
                    </PostHeaderText>
                    <HeaderDescription>
                        <p>fuck you</p>
                    </HeaderDescription>
                </HeaderContainer>
                <img
                    src='https://64.media.tumblr.com/3cb3291506344ea504d3c1b343a22c13/f5e0cb19725eebcd-56/s540x810/6f1fb7e276403f12961724fe8f5367dd3beda037.jpg'
                    alt=''
                />
                <PostFooter>
                    <ChatBubbleOutlineIcon />
                    <LoopIcon />
                    <FavoriteBorderIcon />
                    <PublishIcon />
                </PostFooter>
            </BodyContainer>
        </PostContainer>
    );
}

const PostContainer = styled.div`
    /* border: 1px solid red; */
    border-bottom: 1px solid #e6ecf0;
    display: flex;
    align-items: flex-start;
    padding-bottom: 10px;
`;
const AvatarContainer = styled.div`
    /* border: 2px solid green; */
    display: flex;
    align-items: center;
    min-height: 80px;
    padding: 15px;
`;
const BodyContainer = styled.div`
    /* border: 5px solid hotpink; */
    padding: 5px;
    img {
        border-radius: 20px;
        width: 100%;
    }
`;
const HeaderContainer = styled.div`
    /* border: 3px solid purple; */
`;

const PostHeaderText = styled.div`
    /* border: 4px solid red; */
    display: flex;
    align-items: center;

    h3 {
        font-size: 1rem;
        margin-bottom: 5px;
    }

    .verified-badge {
        font-size: 14px !important;
        margin-left: 2px;
        color: #ff5d73;
    }

    span {
        color: #687076;
        font-size: 1rem;
        opacity: 0.6;
        padding-left: 5px;
    }
`;
const HeaderDescription = styled.div`
    /* border: 3px solid orange; */
    margin-bottom: 10px;
    font-size: 1rem;
`;

const PostFooter = styled.div`
    /* border: 3px solid red; */
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    padding: 5px;
`;

export default Post;
