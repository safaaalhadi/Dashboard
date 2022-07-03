import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Row } from "reactstrap";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function ViewUser() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const state = useSelector((state) => state.allMembers);
  const member = state.find((e) => e.memberId === id);
  //   setData(member);
  useEffect(() => {
    setData(member);
    console.log(member);
  }, [state]);
  // function Handlerender(){
  //     const member = state.filter((e)=> e.memberId === id);

  // }

  return (
    <>
      {!data ? (
        <CircularProgress color="inherit" />
      ) : (
        <div className="content" style={{ paddingLeft: "30px" }}>
          <Row className="m-0">
            <div className="col-sm-4 mb-1 mt-40" key={data.memberId}>
              <div className="card view  p-3">
                <p>
                  Name: {data.firstName} {data.lastName}
                </p>
                <p>
                  {" "}
                  <b style={{ color: "#eb8324" }}>memberId</b> :{data.memberId}
                </p>
                <p>
                  {" "}
                  <b style={{ color: "#eb8324" }}>generatedId </b>:{data.generatedId}
                </p>
                <p>
                  <b style={{ color: "#eb8324" }}>specification </b> :{data.specification}
                </p>
                <p>
                  <b style={{ color: "#eb8324" }}>duration </b>:{data.duration}
                </p>
                <p>
                  <b style={{ color: "#eb8324" }}>projects</b> :{data.projects}
                </p>
                <p>
                  <b style={{ color: "#eb8324" }}>address</b> :{data.address}
                </p>
                <p>
                  <b style={{ color: "#eb8324" }}> kpi</b> :{data.kpi}
                </p>
                <p>
                  <b style={{ color: "#eb8324" }}>hardSkills</b> :{data.hardSkills}
                </p>
                <p>
                  <b style={{ color: "#eb8324" }}>softSkills </b> :{data.softSkills}
                </p>
                <p>
                  <b style={{ color: "#eb8324" }}>supervisor</b> :{data.supervisor}
                </p>
                <p>
                  <b style={{ color: "#eb8324" }}>startDate </b>:{data.startDate}
                </p>
                <p>
                  <b style={{ color: "#eb8324" }}>endDate </b>:{data.endDate}
                </p>
                <p>
                  <b style={{ color: "#eb8324" }}>isIntern </b>:{data.isIntern}
                </p>
                <p>
                  <b style={{ color: "#eb8324" }}>isEmployee </b>:{data.isEmployee}
                </p>
              </div>
            </div>
          </Row>
        </div>
      )}
    </>
  );
}
