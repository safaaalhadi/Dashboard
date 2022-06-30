import React,{useState} from "react";
import style from "./Home.module.css";
import {useSelector} from "react-redux";
import Footer from "../Footer/Footer";

const Home = () => {
  const [filter , setFilter] = useState([]);
  const [search, setSearch] = useState('');
  const state = useSelector(state => state.allMembers);

   
    const handleChange = (text) =>{
      let method=[];
      if(text.length > 0){
        method = state.filter((users)=>{
          const value = new RegExp(`${search}`,'gi');
          return users.firstName.match(value) || users.lastName.match(value) || users.memberId.match(value);
        })
      }
      setFilter(method);
      setSearch(text);
    }
    const onFilterHandle = (text)=>{
      setSearch(text);
      setFilter([]);
  
    }
  return ( 
  // <div className={style.content}>
  //   <div className={style.app}>
  //             <div className={style.appTwo}>
  //             <div className={style.mar}>
  //                     <img className={style.imgTwo} src={require('../img/focal X - Halftone Pattern.svg').default} height="396.57px" alt=""/>
  //                  </div>
  //                <div className={style.top}>
  //                <p className={style.paragraph}>Search By Name Or Certificate ID Number</p>
  //                 <div className={style.box}>
  //                     <input  type="search" placeholder="Search For Employee's Or Intern's" value={search} onChange={(e) => handleChange(e.target.value)}/>
  //                     <i><img src={require('../img/search.svg').default}/></i>
  //                 </div>
  //                </div>
          //        <div>
          //        {filter && filter.map((e,i)=>
          //         <>
          //         <div className={style.Filt}>
          //         <div className={style.filter} onClick={()=>onFilterHandle(e.firstName)} key={i}>{e.firstName }  {e.lastName}</div>
          //         </div>
          //           </>
          //           )}
          // </div>
  //             </div>
  //         </div>

  //         <Footer />

  //   </div>
  <div className={style.contenar}>
    <div className={style.content}>
      <div className={style.pattren}>
        <img src={require('../images/pattren.svg').default} alt="logo"/>
      </div>
      <p className={style.logo}>
        <img src={require('../images/logo.svg').default} alt="logo"/>
      </p>
      <p className={style.paragraph}>Search By Name Or Certificate ID Number</p>
      <div>
        <div className={style.input}>
          <input type="search" placeholder="Search For Employee's Or Intern's" value={search} onChange={(e) => handleChange(e.target.value)} className="input" />
          <p>|</p>
          <span><img src={require('../images/search.svg').default}/></span>
        </div>
       
      </div>
      <div>
                 {filter && filter.map((e,i)=>
                  <>
                  <div className={style.Filt}>
                  <div className={style.filter} onClick={()=>onFilterHandle(e.firstName)} key={i}>{e.firstName }  {e.lastName}</div>
                  </div>
                    </>
                    )}
          </div>
    </div>
    <Footer />
  </div>
    );
};

export default Home;
