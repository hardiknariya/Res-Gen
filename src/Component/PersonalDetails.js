import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";

class PersonalDetails extends Component {
  continueBtn = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  backBtn = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { data, handleChange, handleChangeFile } = this.props;
    return (
      <div className="form-container">
        <br />
        <LinearProgress
          variant="determinate"
          color="secondary"
          value={data.step * 20}
        />
        <br />
        <h1>Personal Details</h1>
        <TextField
          id="standard-basic"
          label="First Name"
          className="textbox"
          color="secondary"
          onChange={handleChange("firstName")}
          defaultValue={data.firstName}
        />
        <TextField
          label="Middle Name"
          className="textbox"
          color="secondary"
          onChange={handleChange("middleName")}
          defaultValue={data.middleName}
        />
        <TextField
          label="Last Name"
          className="textbox"
          color="secondary"
          onChange={handleChange("lastName")}
          defaultValue={data.lastName}
        />
        <br />
        <TextField
          label="Email"
          className="textbox"
          color="secondary"
          onChange={handleChange("email")}
          defaultValue={data.email}
        />
        <TextField
          label="Mobile No"
          className="textbox"
          type="Number"
          color="secondary"
          onChange={handleChange("mobile")}
          defaultValue={data.mobile}
        />

        <TextField
          id="date"
          label="Birthday"
          format="dd/mm/yyyy"
          onChange={handleChange("date")}
          defaultValue={data.date}
          className="textbox"
          color="secondary"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <br />
        <TextField
          label="Adresss Line1"
          className="textbox"
          color="secondary"
          onChange={handleChange("add1")}
          defaultValue={data.add1}
        />
        <TextField
          label="Adress Line2"
          className="textbox"
          color="secondary"
          onChange={handleChange("add2")}
          defaultValue={data.add2}
        />
        <TextField
          label="City"
          className="textbox"
          color="secondary"
          onChange={handleChange("city")}
          defaultValue={data.city}
        />
        <TextField
          label="State"
          className="textbox"
          color="secondary"
          onChange={handleChange("state1")}
          defaultValue={data.state1}
        />

        <TextField
          label="Pincode"
          className="textbox"
          color="secondary"
          onChange={handleChange("pincode")}
          defaultValue={data.pincode}
        />
        <br />
        <TextField
          label="Religion"
          className="textbox"
          color="secondary"
          onChange={handleChange("religion")}
          defaultValue={data.religion}
        />
        <TextField
          label="Nationality"
          className="textbox"
          color="secondary"
          onChange={handleChange("nationality")}
          defaultValue={data.nationality}
        />
        <TextField
          label="Language Known"
          className="textbox"
          color="secondary"
          onChange={handleChange("language")}
          defaultValue={data.language}
        />
        <br />
        <br />
        <FormControl component="fieldset" className="gender">
          <FormLabel component="legend">Marital Status</FormLabel>
          <RadioGroup
            aria-label="maritalStatus"
            name="maritalStatus"
            value={data.maritalStatus}
            onChange={handleChange("maritalStatus")}
          >
            <FormControlLabel
              value="married"
              control={<Radio />}
              label="married"
            />
            <FormControlLabel
              value="Unmarried"
              control={<Radio />}
              label="Unmarried"
            />
          </RadioGroup>
        </FormControl>

        <br />
        <br />
        <FormControl component="fieldset" className="gender">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={data.gender}
            onChange={handleChange("gender")}
          >
            <FormControlLabel
              value="Female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <br />

        <br />
        <br />
        {data.step > 1 ? (
          <Button
            variant="contained"
            className="btnbox"
            color="secondary"
            onClick={this.backBtn}
          >
            Back
          </Button>
        ) : (
          <Button
            variant="contained"
            className="btnbox"
            color="secondary"
            onClick={this.backBtn}
            disabled
          >
            Back
          </Button>
        )}

        <Button
          variant="contained"
          className="btnbox1"
          color="secondary"
          onClick={this.continueBtn}
        >
          Continue
        </Button>
      </div>
    );
  }
}

export default PersonalDetails;
