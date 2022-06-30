import React,{useEffect, useState} from "react";
import {Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Users(){
    let history = useNavigate();
const [member,setMember] = useState([]);
const state = useSelector((state) => state.allMembers);
console.log("state", state);

    useEffect(()=>{
         setMember(state)
        
    },[]);
    function Edit (id){
       history("/edit/" + id);
    }
const render = member.map((user) =>{
    return (
        <div className="col-sm-4 mb-1 mt-40" key={user.id} >
                                        <div  className="card view  p-3">
                                           <p> <b style={{color:'#eb8324'}}>memberId</b> :{user.memberId}</p>
                                           <p> <b style={{color:'#eb8324'}}>generatedId </b>:{user.generatedId}</p>
                                           <p> <b style={{color:'#eb8324'}}>firstName </b>:{user.firstName}</p>
                                           <p><b style={{color:'#eb8324'}}>lastName </b> :{user.lastName}</p>
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
                                           {/* <p><b style={{color:'#eb8324'}}>isIntern </b>:{user.isIntern}</p> 
                                           <p><b style={{color:'#eb8324'}}>isEmployee </b>:{user.isEmployee}</p>  */}
                                      
                                        <button className="buttons" onClick={()=>{
                                            Edit(user.memberId)
                                        }}>Edit</button>

                                        </div>
                                    </div>
    )
})

    return(
        <>
            <div className="content" style={{paddingLeft:'30px' }}>
                <Row className="m-0">
                    {render}
                </Row>
            </div>
        </>
    )
}