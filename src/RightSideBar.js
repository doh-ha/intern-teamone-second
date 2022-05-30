import React from "react";
import "./RightSideBar.css";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
function RightSideBar() {
  const people = [
    {
      key: 1,
      name: "퍼비",
      id: "@efubjjang",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRn2EiE6Ihsy9mPufplNhRjqGmybCslL7Hm0emKtdzA&s",
    },
  ];

  const trend = [
    {
      key: 0,
      trending: "Trending in South Korea",
      topic: "축제",
      tweet: "1886",
    },
  ];
  return (
    <div className="trendBar">
      <div className="trendBar__input">
        <SearchIcon />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="trendBar__container">
        <h2>Trends for you</h2>
        {people.map((who) => {
          return (
            <div className="profile__container" key={who.key}>
              <div className="profile__right">
                <div className="profile__img">
                  <img className="profile__img__al" src={who.profile} />
                </div>

                <div className="profile__info">
                  <div className="profile__name">{who.name}</div>
                  <div className="profile__id">{who.id}</div>
                </div>
              </div>
              <button className="follow__button">Follow</button>
            </div>
          );
        })}
        <div className="more__text">Show more</div>
      </div>
      <div className="right__container">
        <h2>Who to follow</h2>
        <div>
          {trend.map((myTrend) => {
            return (
              <div className="trending" key={myTrend.key}>
                <div className="trending__header">
                  <div className="trending__subtext">{myTrend.trending}</div>
                  <MoreHorizIcon />
                </div>
                <div className="trending__text">{myTrend.topic}</div>
                <div className="trending__subtext__tweet">
                  {myTrend.tweet} Tweets
                </div>
              </div>
            );
          })}
        </div>
        <div className="more__text">Show more</div>
      </div>
    </div>
  );
}

export default RightSideBar;
