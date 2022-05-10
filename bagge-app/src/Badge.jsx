import Bio from "./Bio.jsx";

const Badge = (props) => {
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
          <h4>{props.firstName}</h4>
          <h5>{props.lastName}</h5>
          
        </div>
        <Bio birthDate = {props.birthDate}
             smallDescription = {props.smallDescription}
             hobbies = {props.hobbies}
          />
        <img src={props.avatarImage} height="64px" />

      </div>
    );
  };


  export default Badge;
