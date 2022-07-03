import React,{useState,useEffect}from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Row } from "reactstrap";
import CircularProgress from "@material-ui/core/CircularProgress";



export default function ViewUser(){
    const {id} = useParams();
    const [data,setData] = useState([]);
    const state = useSelector(state => state.allMembers);
    // const member = state.filter((e)=> e.memberId === id);
    // console.log(member);
    // useEffect(()=>{
    //     setData(member);
    // },[member])
    // function Handlerender(){
    //     const member = state.filter((e)=> e.memberId === id);

    // }
    const render = data.map((user)=>{
        return(
            <div className="col-sm-4 mb-1 mt-40" key={user.memberId} >
            <div  className="card view  p-3">
                <p>Name: {user.firstName} {user.lastName}</p>
               <p> <b style={{color:'#eb8324'}}>memberId</b> :{user.memberId}</p>
               <p> <b style={{color:'#eb8324'}}>generatedId </b>:{user.generatedId}</p>
               <p><b style={{color:'#eb8324'}}>specification </b>  :{user.specification}</p>
               <p><b style={{color:'#eb8324'}}>duration </b>:{user.duration}</p>
               <p><b style={{color:'#eb8324'}}>projects</b> :{user.projects}</p>
               <p><b style={{color:'#eb8324'}}>address</b> :{user.address}</p>
               <p><b style={{color:'#eb8324'}}> kpi</b> :{user.kpi}</p>
               <p><b style={{color:'#eb8324'}}>hardSkills</b> :{user.hardSkills}</p>
               <p><b style={{color:'#eb8324'}}>softSkills </b> :{user.softSkills}</p>
               <p><b style={{color:'#eb8324'}}>supervisor</b> :{user.supervisor}</p>
               <p><b style={{color:'#eb8324'}}>startDate </b>:{user.startDate}</p>
               <p><b style={{color:'#eb8324'}}>endDate </b>:{user.endDate}</p> 
               <p><b style={{color:'#eb8324'}}>isIntern </b>:{user.isIntern}</p> 
               <p><b style={{color:'#eb8324'}}>isEmployee </b>:{user.isEmployee}</p> 
            

            </div>
        </div>
        )
    })
    return(
        <>
            {
           data.length <1 ? <CircularProgress color="inherit"/> : <div className="content" style={{paddingLeft:'30px' }}>
              <Row className="m-0">
              {render}
              </Row>
          </div>
          }

        </>
    )
}