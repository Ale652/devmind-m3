import React from "react";
import Bio from "./Bio.jsx";

class BadgeNew extends React.Component {
    render() {
        return (
            <div
        style={{
          border: "1px solid black",
          width: "820px",
          borderRadius: "8px",
          padding: "8px",
          display: "flex",
          height: "250px",
        }}
      >
        <div style={{ width: "75%" }}>
          <h4>{this.props.firstName}</h4>
          <h5>{this.props.lastName}</h5>
          
        </div>
        <Bio birthDate = {this.props.birthDate}
             smallDescription = {this.props.smallDescription}
             hobbies = {this.props.hobbies}
          />
        <img src={this.props.avatarImage} height="64px" />

      </div>
        )
    }
}

export default BadgeNew;