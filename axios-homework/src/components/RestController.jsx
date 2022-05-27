// import React from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

class RestController extends React.Component {
	constructor(props) {
		super(props);
		this.state = {post: []};
        this.open = false;
	}
	
     handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.open=false;
      };

      
       action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={this.handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={this.handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				title: 'New title added',
				body: 'New body added. Hello body.',
				userId: 2
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
				return response.json()
			}).then(json => {
				this.setState({
                    post:json
				});
                this.open = true;
			});
	}
	render() {                            
		return (
			<div>
                <div>
                    <p><b>New Resource created in the server as shown below</b></p>
                    <p>Id : {this.state.post.id}</p>
                    <p>Title : {this.state.post.title}</p>
                    <p>Body : {this.state.post.body}</p>
                    <p>UserId : {this.state.post.userId}</p>
                </div>
                <div>
        
                <Snackbar
                    open={this.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    message="Post added"
                    action={this.action}
                />
    </div>
			</div>
            
		)
	}
}

export default RestController;