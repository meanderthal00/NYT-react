import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';

const SignIn = (props)=> {

	return (
		<div className="container">
			<div className="row">
			
				<div className="card">
				<div className="col-4 offset-4">				
				<span className="card-title"><h1><center>Search Articles</center></h1></span>
				</div>
				
				<div className="row">
				<div className="col-6 offset-6">
				<Link to = "/signup" >Go to sign up</Link>
				</div>
				
					<div className="card-body">

						<form>
						
						
						<input id="topic" type="text" className="validate"   placeholder = 'Enter Topic to search'/>
						<label for="topic">Topic </label>
					

						
						
						<input id="start_yr" type="text" className="validate"   placeholder = 'Starting Year'/>
						<label for="start-yr">Starting Year </label>
						
						
						<input id="end_yr" type="text" className="validate"   placeholder = 'Ending Year'/>
						<label for="topic">Ending Year </label>
						
						
						
						<button className="btn waves effect waves-light" type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Submit</button>
						
					</form>



					
					 </div>
				</div>
					
					</div>
					</div>
					</div>
				
			
		
	);
}

export default SignIn;