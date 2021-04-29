import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
class  ProjectDetails extends Component{
	continueBtn = e=>{
		e.preventDefault();
		this.props.nextStep();
	}
	backBtn = e=>{
		e.preventDefault();
		this.props.prevStep();
	}
	render(){
		const {data, handleChange} = this.props;
		return(
			<div className="form-container">
			<br/>
				<LinearProgress variant="determinate" color="secondary" value={data.step*20} />
				<br/>
				<h1>
					 Project Work
				</h1>
				<br/>
				<h3>Project1</h3>
				<TextField
					id="standard-basic"
					label="Project Title"
					className="textbox"
					color="secondary"
					onChange = {handleChange('projectTitle1')}
					defaultValue = {data.projectTitle1}
				/>
				<br/>
				<h3>Description</h3>
				<br/>
				<TextareaAutosize  rowsMin={3} 
					id="standard-basic"s
					className="textarea1"
					color="secondary"
					onChange = {handleChange('projectDesc1')}
					defaultValue = {data.projectDesc1}
				 />
				
 
				<br/><br/>
				<h3>Project2</h3>
				<TextField
					id="standard-basic"
					label="Project Title"
					className="textbox"
					color="secondary"
					onChange = {handleChange('projectTitle2')}
					defaultValue = {data.projectTitle2}
				/>
				<br/>
				<h3>Description</h3>
				<br/>
				<TextareaAutosize  rowsMin={3} 
					id="standard-basic"s
					className="textarea1"
					color="secondary"
					onChange = {handleChange('projectDesc2')}
					defaultValue = {data.projectDesc2}
				 />
				<br/><br/>
				{data.step>1 ?<Button variant="contained" className="btnbox" color="secondary" onClick={this.backBtn}>Back</Button>:<Button variant="contained" className="btnbox" color="secondary" onClick={this.backBtn} disabled>Back</Button>}
				
				<Button variant="contained" className="btnbox1" color="secondary" onClick={this.continueBtn}>Continue</Button>

			</div>
		);
	}
}

export default ProjectDetails;