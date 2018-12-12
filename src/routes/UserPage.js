import React from "react";
import { connect } from "dva";

const UserPage = props => {
  console.log(props);
  const { dispatch } = props;
  const { error, user } = props.user;
  let isFetching = props.loading.effects["user/fetch"];
  let data;

  if (error) {
    data = error;
  } else if (isFetching) {
    data = "Loading...";
  } else {
    data = user && user.data[0].name;
  }
  return (
    <div>
      <h1>{data}</h1>
      <button
        onClick={() => {
          dispatch({ type: "user/fetch" });
        }}
      >
        get user
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    loading: state.loading
  };
};

export default connect(mapStateToProps)(UserPage);
