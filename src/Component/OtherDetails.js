import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
class OtherDetails extends Component {
  continueBtn = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  backBtn = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { data, handleChange } = this.props;
    return (
      <div className="form-container">
        <br />
        <LinearProgress
          variant="determinate"
          color="secondary"
          value={data.step * 20}
        />
        <br />
        <h1>Other Details</h1>
        <br />
        <h3>Certificate</h3>
        <TextField
          id="standard-basic"
          label="Certificate Title"
          className="textbox"
          color="secondary"
          onChange={handleChange("certificateTitle1")}
          defaultValue={data.certificateTitle1}
        />
        <TextField
          id="standard-basic"
          label="Certificate Id"
          className="textbox"
          color="secondary"
          onChange={handleChange("certificateId1")}
          defaultValue={data.certifiteId1}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Certificate Title"
          className="textbox"
          color="secondary"
          onChange={handleChange("certificateTitle2")}
          defaultValue={data.certificateTitle2}
        />
        <TextField
          id="standard-basic"
          label="Certificate Id"
          className="textbox"
          color="secondary"
          onChange={handleChange("certificateId2")}
          defaultValue={data.certifiteId2}
        />

        <br />
        <TextField
          id="standard-basic"
          label="Certificate Title"
          className="textbox"
          color="secondary"
          onChange={handleChange("certificateTitle3")}
          defaultValue={data.certificateTitle3}
        />
        <TextField
          id="standard-basic"
          label="Certificate Id"
          className="textbox"
          color="secondary"
          onChange={handleChange("certificateId3")}
          defaultValue={data.certifiteId3}
        />
        <br />
        <br />
        <h3>Area of Interest</h3>
        <br />
        <TextareaAutosize
          rowsMin={3}
          id="standard-basic"
          s
          className="textarea1"
          color="secondary"
          onChange={handleChange("interestDesc1")}
          defaultValue={data.interestDesc1}
        />
        <br />
        <br />
        <h3>Hobbies</h3>
        <br />
        <TextareaAutosize
          rowsMin={3}
          id="standard-basic"
          s
          className="textarea1"
          color="secondary"
          onChange={handleChange("hobbyDesc1")}
          defaultValue={data.hobbyDesc1}
        />
        <br />
        <br />
        <h3>Strength</h3>
        <br />
        <TextareaAutosize
          rowsMin={3}
          id="standard-basic"
          s
          className="textarea1"
          color="secondary"
          onChange={handleChange("strenghDesc1")}
          defaultValue={data.strenghDesc1}
        />
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

export default OtherDetails;
