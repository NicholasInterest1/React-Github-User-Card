import React from "react";

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
          <h2> GitHub User Info</h2>
          <p> username: {this.state.usercard.login} </p>
          <h3> {this.state.usercard.name}</h3>
          <img
            width="200px"
            alt="user-avatar"
            src={this.state.usercard.avatar_url}
          />
        </div>

        <div className="followers">
          <h2> List of Followers</h2>

          {this.state.userfollowers.map(follower => {
            return (
              <div className="follower" key={follower.login}>
                <img
                  width="25px"
                  alt="user-follower-avatar"
                  src={follower.avatar_url}
                />{" "}
                <span>{follower.login}</span>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default UserCard;
