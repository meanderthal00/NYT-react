import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';

const SignIn = (props)=> {

	return (
		<div className="container">
			<div className="row">
				<div className="col s9 offset-s2">
				<div className="card blue-grey darken-1">
				<div className="card-content white-text">
				<span className="card-title"><h1><center>Search Articles</center></h1></span>
				<Link to = "/signup" >Go to sign up</Link>
					<form>
						<div className="row">
						<div className="input-field col s10 offset-2">
						
						<input id="topic" type="text" className="validate"   placeholder = 'Enter Topic to search'/>
						<label for="topic">Topic </label>
						</div>
						</div>

						<div className="row">
						<div className="input-field col s10 offset-2">
						
						<input id="start_yr" type="text" className="validate"   placeholder = 'Starting Year'/>
						<label for="start-yr">Starting Year </label>
						</div>
						</div>
						<div className="row">
						<div className="input-field col s10 offset-2">
						
						<input id="end_yr" type="text" className="validate"   placeholder = 'Ending Year'/>
						<label for="topic">Ending Year </label>
						</div>
						</div>
						<div className="row">
						<div className="input-field col s12 offset-4">
						<button className="btn waves effect waves-light" type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Submit</button>
						</div>
						</div>
					</form>
					</div>
					</div>
				</div>	
			</div>
		</div>
	);

}

export default SignIn;