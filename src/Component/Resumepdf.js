import React, { Component } from "react";

import ReactToPrint, { PrintContextConsumer } from "react-to-print";

import Button from "@material-ui/core/Button";
import QRCode from "react-qr-code";

class ComponentToPrint extends React.PureComponent {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <>
        <div className="resume">
          <div className="resume_left">
            <div className="resume_item">
              <div className="title">
                <p className="bold">
                  {data.firstName} {data.lastName}
                </p>
              </div>
              <ul>
                <li>
                  <div className="data">
                    {data.add1}, <br /> {data.add2}, <br />
                    {data.city}, <br />
                    {data.state1}, <br /> {data.pincode}
                  </div>
                </li>
                <li>
                  <div className="data">{data.mobile}</div>
                </li>
                <li>
                  <div className="data">{data.email}</div>
                </li>
              </ul>
            </div>
            <div className="resume_item">
              <div className="title">
                <p className="bold">Skills</p>
              </div>
              <ul>
                <li>
                  <div className="data">
                    {data.skillTitle1} <br />
                    <br /> {data.skillDesc1} <br />
                    <br />
                    {data.skillTitle2} <br />
                    <br />
                    {data.skillDesc2} <br />
                  </div>
                </li>
              </ul>
            </div>
            <div className="resume_item">
              <div className="title">
                <p className="bold">Project</p>
              </div>
              <ul>
                <li>
                  <div className="data">
                    {data.projectTitle1} <br />
                    <br /> &nbsp; {data.projectDesc1} <br />
                    <br />
                    {data.projectTitle2} <br />
                    <br /> &nbsp;{data.projectDesc2} <br />
                  </div>
                </li>
              </ul>
            </div>
            <div className="resume_item">
              <div className="title">
                <p className="bold">Certificate</p>
              </div>
              <ul>
                <li>
                  <div className="data">
                    {data.certificateId1}&nbsp;&nbsp; {data.certificateTitle1}{" "}
                    <br />
                    <br />
                    {data.certificateId2}&nbsp;&nbsp; {data.certificateTitle2}{" "}
                    <br />
                    <br />
                    {data.certificateId3}&nbsp;&nbsp; {data.certificateTitle3}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="resume_right">
            <div className="resume_item resume_about">
              {/* <div className="resume_profile">
		       <img src='' alt="profile_pic" />
		     </div> */}

              <div className="title">
                <QRCode
                  value="https://wa.me/{data.mobile}"
                  size={50}
                  level={"H"}
                  includeMargin={true}
                />
                <p className="bold">About us</p>
              </div>
              <p>
                I would like to be a part of an organization where I could use
                and enhance my Knowledge and talent for the development of both
                the organization and myself
              </p>
            </div>
            <div className="resume_item resume_work">
              <div className="title">
                <p className="bold">Education</p>
              </div>

              <table border="1">
                <thead>
                  <th>Course</th>
                  <th>school</th>
                  <th>percentage</th>
                  <th>year</th>
                </thead>
                <tbody>
                  <tr>
                    <td>{data.course1}</td>
                    <td>{data.collegeName}</td>
                    <td>{data.university}</td>
                    <td>{data.year1}</td>
                  </tr>
                  <tr>
                    <td>{data.board1}</td>
                    <td>{data.schoolName1}</td>
                    <td>{data.percentage2}</td>
                    <td>{data.year2}</td>
                  </tr>
                  <tr>
                    <td>{data.board2}</td>
                    <td>{data.schoolName2}</td>
                    <td>{data.percentage3}</td>
                    <td>{data.year3}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="resume_item resume_education">
              <div className="title">
                <p className="bold">Interest</p>
              </div>
              <ul>
                <li>
                  <div className="info">
                    <p>{data.interestDesc1}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_education">
              <div className="title">
                <p className="bold">hobby</p>
              </div>
              <ul>
                <li>
                  <div className="info">
                    <p>{data.hobbyDesc1}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_education">
              <div className="title">
                <p className="bold">Strengh</p>
              </div>
              <ul>
                <li>
                  <div className="info">
                    <p>{data.strenghDesc1}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

class Resumepdf extends Component {
  render() {
    var { data, handleChange } = this.props;
    console.log(data);
    return (
      <div>
        <ComponentToPrint ref={(el) => (this.componentRef = el)} data={data} />
        <ReactToPrint content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <Button
                variant="contained"
                color="secondary"
                style={{ marginLeft: "20em" }}
                onClick={handlePrint}
              >
                Download Resume
              </Button>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
      </div>
    );
  }
}

export default Resumepdf;
