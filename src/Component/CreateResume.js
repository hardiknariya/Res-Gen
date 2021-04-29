import React, { Component } from "react";

import Resumepdf from "./Resumepdf";
import PersonalDetails from "./PersonalDetails";
import AcademicProfile from "./AcademicProfile";
import ProjectDetails from "./ProjectDetails";
import TechnicalSkills from "./TechnicalSkills";
import OtherDetails from "./OtherDetails";
class CreateResume extends Component {
  state = {
    step: 1,
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobile: "",
    date: "",
    add1: "",
    add2: "",
    city: "",
    state1: "",
    pincode: "",
    religion: "",
    nationality: "",
    language: "",
    maritalStatus: "",
    gender: "",
    image: "",
    course1: "",
    collegeName: "",
    university: "",
    percentage1: "",
    year1: "",
    schoolName1: "",
    board1: "",
    percentage2: "",
    year2: "",
    schoolName2: "",
    board2: "",
    percentage3: "",
    year3: "",
    projectTitle1: "",
    projectDesc1: "",
    projectTitle2: "",
    projectDesc2: "",
    skillTitle1: "",
    skillDesc1: "",
    skillTitle2: "",
    skillDesc2: "",
    certificateTitle1: "",
    certificateId1: "",
    certificateTitle2: "",
    certificateId2: "",
    certificateTitle3: "",
    certificateId3: "",
    interestDesc1: "",
    hobbyDesc1: "",
    strenghDesc1: "",
  };

  //Proceed to next step

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };
  handleChangeFile = (input) => (e) => {
    this.setState({
      [input]: e.target.files[0],
    });
  };

  submitPost = (e) => {
    if (!this.state.title || !this.state.content) {
      alert("All fields are required!");
      e.preventDefault();
    }
  };

  render() {
    const { step } = this.state;
    switch (step) {
      case 1:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleChangeFile={this.handleChangeFile}
            data={this.state}
          />
        );
      case 2:
        return (
          <AcademicProfile
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            data={this.state}
          />
        );
      case 3:
        return (
          <ProjectDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            data={this.state}
          />
        );
      case 4:
        return (
          <TechnicalSkills
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            data={this.state}
          />
        );
      case 5:
        return (
          <OtherDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            data={this.state}
          />
        );
      case 6:
        return (
          <Resumepdf
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            data={this.state}
          />
        );
    }
  }
}

export default CreateResume;
