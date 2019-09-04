import React from "react";
import styled from 'styled-components';

const TheH2 = styled.h2`
    font-size: 3rem;
`;

const TheH3 = styled.h3`
    font-size: 1.5rem;
    color: white;
`;

const TheP = styled.p`
    font-size: 1rem;
    color: white;
`;

class UserCard extends React.Component {
  constructor() {
    super();

    this.state = {
      usercard: [],
      userfollowers: []
    };
  }

  fetchUserData = () => {
    fetch("https://api.github.com/users/nicholasinterest1")
      .then(response => {
        return response.json();
      })
      .then(userData => {
        console.log(userData);
        this.setState({ usercard: userData });

        console.log(this.state.usercard);
      })

      .catch(error => {
        console.log("This is not the request you are looking for!");
      });
  };

  fetchUserFollowers = () => {
    fetch("https://api.github.com/users/nicholasinterest1/followers")
      .then(response => {
        return response.json();
      })
      .then(userFollowers => {
        console.log(userFollowers);
        this.setState({ userfollowers: userFollowers });

        console.log(this.state.userfollowers);
      })

      .catch(error => {
        console.log("This is not the request you are looking for!");
      });
  };

  componentDidMount() {
    this.fetchUserData();
    this.fetchUserFollowers();
  }

  render() {
    return (
      <>
        <div className="user-card">
          <TheH2> GitHub User Info</TheH2>
          <TheH3> {this.state.usercard.name}</TheH3>
          <TheP> username: {this.state.usercard.login} </TheP>
          <img
            width="500px"
            alt="user-avatar"
            src={this.state.usercard.avatar_url}
          />
        </div>

        <div className="followers">
          <TheH2> List of Followers</TheH2>

          {this.state.userfollowers.map(follower => {
            return (
              <div className="follower" key={follower.login.length}>
                <img
                  width="30px"
                  alt="user-follower-avatar"
                  src={follower.avatar_url}
                />{" "}
                <span>{follower.login}</span>
                <span>{follower.following}</span>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default UserCard;
