import React from "react";
import "./LeftSideBar.css";
import LeftSideBarOption from "./LeftSideBarOption";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import Button from "@mui/material/Button";

function LeftSideBar() {
  return (
    <div className="leftSideBar">
      <TwitterIcon className="twitterIcon" />

      <LeftSideBarOption active Icon={HomeIcon} text="Home" />
      <LeftSideBarOption Icon={SearchIcon} text="Explore" />
      <LeftSideBarOption Icon={NotificationsNoneIcon} text="Notificatons" />
      <LeftSideBarOption Icon={EmailOutlinedIcon} text="Messages" />
      <LeftSideBarOption Icon={BookmarkBorderOutlinedIcon} text="Bookmarks" />
      <LeftSideBarOption Icon={ListAltOutlinedIcon} text="Lists" />
      <LeftSideBarOption Icon={PermIdentityOutlinedIcon} text="Profile" />
      <LeftSideBarOption Icon={MoreHorizOutlinedIcon} text="More" />

      {/* <button className="tweetBtn" fullWidth>
        Tweet{" "}
      </button> */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default LeftSideBar;
