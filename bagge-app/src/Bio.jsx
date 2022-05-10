const Bio  = (props) => {
    return (
      <div
        style={{
          border: "1px solid black",
          width: "520px",
          borderRadius: "8px",
          padding: "8px",
          display: "flex",
          height: "230px",
          position: "relative"
        }}
      >
        <div style={{ width: "75%" }}>
          <h4>Birth date : {props.birthDate}</h4>
          <h4>Description : {props.smallDescription}</h4>
          <h4>Hobbies : {JSON.parse(props.hobbies).join(", ")}</h4>
          <h4>Programmer: {props.hobbies.includes('Java')?"TRUE":"FALSE"}</h4>
        </div>
      </div>
    );
  };

  export default Bio;