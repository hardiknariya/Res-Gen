import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
class  TechnicalSkills extends Component{
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
					 Skills Details
				</h1>
				<br/>
				<h3>SkillTitle1</h3>
				<TextField
					id="standard-basic"
					label="Skill Title"
					className="textbox"
					color="secondary"
					onChange = {handleChange('skillTitle1')}
					defaultValue = {data.skillTitle1}
				/>
				<br/>
				<h3>Sub Skills</h3>
				<br/>
				<TextareaAutosize  rowsMin={3} 
					id="standard-basic"s
					className="textarea1"
					color="secondary"
					onChange = {handleChange('skillDesc1')}
					defaultValue = {data.skillDesc1}
				 />
				
 
				<br/><br/>
				<h3>SkillTitle2</h3>
				<TextField
					id="standard-basic"
					label="Skill Title"
					className="textbox"
					color="secondary"
					onChange = {handleChange('skillTitle2')}
					defaultValue = {data.skillTitle2}
				/>
				<br/>
				<h3>Sub Skills</h3>
				<br/>
				<TextareaAutosize  rowsMin={3} 
					id="standard-basic"
					className="textarea1"
					color="secondary"
					onChange = {handleChange('skillDesc2')}
					defaultValue = {data.skillDesc2}
				 />
				<br/><br/>
				{data.step>1 ?<Button variant="contained" className="btnbox" color="secondary" onClick={this.backBtn}>Back</Button>:<Button variant="contained" className="btnbox" color="secondary" onClick={this.backBtn} disabled>Back</Button>}
				
				<Button variant="contained" className="btnbox1" color="secondary" onClick={this.continueBtn}>Continue</Button>

			</div>
		);
	}
}

export default TechnicalSkills;