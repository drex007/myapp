import React from 'react';
import {Paper,TextField}  from '@material-ui/core';




export default class SearchBar extends React.Component {
   state = {
       searchTerm: '',
   }
   handlechange =(event) =>{this.setState({searchTerm: event.target.value})};
   handleSubmit = (event) => {
       const {searchTerm} = this.state;

       const { onFormSubmit } = this.props;
       
       onFormSubmit(searchTerm);

       event.preventDefault();
   }
   
    render() {
        return (
           <Paper elevation={6} style ={{padding:'15px'}}>
               <form onSubmit={this.handleSubmit}>
                   <TextField fullWidth label='Search.....' onChange={this.handlechange} />
               </form>
           </Paper>
        )
    }

}
