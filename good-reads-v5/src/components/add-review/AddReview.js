import { addReview } from "../redux/actions/actions";

const AddReview = (props) => {
 
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");
    const [publishedTimestamp, setPublishedTimestamp] = useState("");
    const [book_id, setBook_id] = useState("");
    const [reader_id, setReader_id] = useState("");
    const [id, setId] = useState("");
    const dispatch = useDispatch();
  
    const addNewReview = () => {
      fetch("http://localhost:8080/addReview", {
        method: "POST",
        body: JSON.stringify({
            comment: comment,
            rating: rating,
            publishedTimestamp: type,
            book_id: publishedDate,
            reader_id: author_id,
            id : 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
  
      dispatch(addReview(comment,rating,publishedTimestamp,book_id,reader_id,id)); 

    };
  
  
    return (
      <Box
        id="AddReviewComponent"
        style={{
          width: "100%",
          padding: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            height: "240px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
        
          <Grid container direction={"column"} spacing={5} style={{width: '200px'}}>
            <Box style={{ fontSize: 20, fontWeight: "bold" }}>
              {" "}
              Create a comment:
            </Box>
  
  
            <TextField id="filled-basic" label="Comment" variant="outlined" onChange={(event) => setComment(event.target.value)} />
  
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} onChange={(event) => setRating(event.target.value)} />
  
            <TextField id="filled-basic" label="Published Timestap" variant="outlined" onChange={(event) => setPublishedTimestamp(event.target.value)} />
  
            <TextField id="filled-basic" label="Book Id" variant="outlined" onChange={(event) => setBook_id(event.target.value)} />

            <TextField id="filled-basic" label="Reader Id" variant="outlined" onChange={(event) => setReader_id(event.target.value)} />

  
            <Button onClick={addNewReview} variant="text">
              {" "}
              Add Review
            </Button>
          </Grid>    
        </Box>
        {/* <BooksList /> */}
      </Box>
    );
  };
  
  export default AddReview;