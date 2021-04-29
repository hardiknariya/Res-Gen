import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
class AcademicProfile extends Component {
	continueBtn = e => {
		e.preventDefault();
		this.props.nextStep();
	}
	backBtn = e => {
		e.preventDefault();
		this.props.prevStep();
	}
	render() {
		const { data, handleChange } = this.props;
		return (
			<div className="form-container">
				<br />
				<LinearProgress variant="determinate" color="secondary" value={data.step * 20} />
				<br />
				<h1>
					Academic Profile
				</h1>
				<br />
				<h3>
					Higher Course
				</h3>
				<TextField
					id="standard-basic"
					label="Your Degree"
					className="textbox"
					color="secondary"
					onChange={handleChange('course1')}
					defaultValue={data.course1}
				/>
				<TextField
					label="College Name"
					className="textbox"
					color="secondary"
					onChange={handleChange("collegeName")}
					defaultValue={data.collegeName}
				/>
				<TextField
					label="University"
					className="textbox"
					color="secondary"
					onChange={handleChange('university')}
					defaultValue={data.university}

				/>
				<TextField
					label="Percentage"
					className="textbox"
					color="secondary"
					onChange={handleChange('percentage1')}
					defaultValue={data.percentage1}

				/>
				<TextField
					label="Year of passing"
					className="textbox"
					color="secondary"
					onChange={handleChange('year1')}
					defaultValue={data.year1}

				/>

				<br /><br />
				<h3>12 th standard</h3>
				<TextField
					label="schoolName"
					className="textbox"
					color="secondary"
					onChange={handleChange('schoolName1')}
					defaultValue={data.schoolName1}

				/>
				<TextField
					label="Board"
					className="textbox"
					color="secondary"
					onChange={handleChange('board1')}
					defaultValue={data.board1}

				/>
				<TextField
					label="Percentage"
					className="textbox"
					color="secondary"
					onChange={handleChange('percentage2')}
					defaultValue={data.percentage2}

				/>
				<TextField
					label="Year of passing"
					className="textbox"
					color="secondary"
					onChange={handleChange('year2')}
					defaultValue={data.year2}

				/>



				<br /><br />
				<h3>10 th standard</h3>
				<TextField
					label="schoolName"
					className="textbox"
					color="secondary"
					onChange={handleChange('schoolName2')}
					defaultValue={data.schoolName2}

				/>
				<TextField
					label="Board"
					className="textbox"
					color="secondary"
					onChange={handleChange('board2')}
					defaultValue={data.board2}

				/>
				<TextField
					label="Percentage"
					className="textbox"
					color="secondary"
					onChange={handleChange('percentage3')}
					defaultValue={data.percentage3}

				/>
				<TextField
					label="Year of passing"
					className="textbox"
					color="secondary"
					onChange={handleChange('year3')}
					defaultValue={data.year3}

				/>
				<br /><br />
				{data.step > 1 ? <Button variant="contained" className="btnbox" color="secondary" onClick={this.backBtn}>Back</Button> : <Button variant="contained" className="btnbox" color="secondary" onClick={this.backBtn} disabled>Back</Button>}

				<Button variant="contained" className="btnbox1" color="secondary" onClick={this.continueBtn}>Continue</Button>

			</div>
		);
	}
}

export default AcademicProfile;