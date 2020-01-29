import React from "react";
import { connect } from "react-redux";

class LoginForm extends React.Component {
  render() {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
        <div style={{ gridColumn: 1 }}>
          <font>ID</font>
          <input />
        </div>
      </div>
    );
  }
}

export default connect()(LoginForm);
