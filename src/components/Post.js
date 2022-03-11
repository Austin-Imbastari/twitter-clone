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

function Post({ displayName, username, verified, text, avatar, image }) {
    return (
        <PostContainer>
            <AvatarContainer>
                <Avatar src={avatar} />
            </AvatarContainer>
            <BodyContainer>
                <HeaderContainer>
                    <PostHeaderText>
                        <h3>
                            {displayName}
                            {verified ? (
                                <VerifiedIcon
                                    className='verified-badge'
                                    fontSize='small'
                                />
                            ) : (
                                " "
                            )}
                            <span>@{username}</span>
                        </h3>
                    </PostHeaderText>
                    <HeaderDescription>
                        <p>{text.tweetMessage}</p>
                    </HeaderDescription>
                </HeaderContainer>
                {image.tweetImage ? (
                    <img src={image.tweetImage} alt='img' />
                ) : (
                    ""
                )}

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
    border-bottom: 1px solid #7c7a7a;
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
