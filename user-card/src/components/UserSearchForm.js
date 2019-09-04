import React from "react";

class UserSearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitItem = event => {
    event.preventDefault();

    event.target.reset();
  };

  render() {
    return (
      <form className="user-search-form" onSubmit={this.submitItem}>
        <input
          type="text"
          value={this.username}
          name="username"
          placeholder="enter the username"
          onChange={this.handleChanges}
        />

        <button> Search </button>
      </form>
    );
  }
}

export default UserSearchForm;
