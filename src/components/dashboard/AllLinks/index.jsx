import { useEffect } from "react";
import { useAuth } from "../../../Contexts/AuthContext";
import useFetchData from "../../../Hooks/useFetchData";
import Button from "../../../components/Button/Button";
import TimeFormate from "../../../helpers/TimeFormate";
import UsePaginations from "../../../Hooks/UsePaginations";
import style from './style.module.css' 


function SingleLink({title,url,createdat,clicked,linkid}) {
  return(
    <div className={style.linkList}>
      <div> 
        <h5 className="text-truncate">{title}</h5>
        <i className="text-break">{url}</i>
        <span>Created {createdat}</span>
        {!clicked && <div className="mt-2 badge rounded-pill bg-warning text-dark">No Clicked Yet!</div>} 
      </div>
      {clicked && <Button redTheme href={`/dashboard/linkdetails/${linkid}`}>View</Button>} 
    </div>
  )
}

function PlaceholderSingleLink() {
  return(
    <div className={`${style.linkList}`}>
      <div style={{width:"100%"}}>
        <h5 style={{width:"100%"}} className="text-truncate placeholder"></h5>
        <i className="placeholder"> </i>
        <span className="placeholder"></span>
      </div>
      <Button className="placeholder">View</Button> 
    </div>
  )
}

export default function AllLinks() {
  const {curentUser} = useAuth()
  // const {loading,error,links,VKeys} = useFetchData('links')
  const {loading,error,showData,PaginationElements,Vkeys} = UsePaginations('links',curentUser.uid,5)
  
    return (
        <div className={style.AllLinks}>
          <h4>All Links </h4>
          <div className={style.linkLists}>
   
            {loading ? 
            <>
              <PlaceholderSingleLink/> 
              <PlaceholderSingleLink/>
            </> : !error && showData && showData.length > 0 ? 
            showData.map((item,idx) => {
              return item.info_key ? 
                <SingleLink key={idx} title={item.title} url={window.location.origin+item.created_url} createdat={TimeFormate(item.created_at ? item.created_at : 1703524455878 )} clicked={true} linkid={Vkeys[idx]+"?"+item.info_key}/> 
              : 
                <SingleLink key={idx} title={item.title} url={window.location.origin+item.created_url} createdat={TimeFormate(item.created_at ? item.created_at : 1703524455878 )} clicked={false} linkid={Vkeys[idx]}/>
            }) : 
              <h4 className="text-center mt-5 pb-5">No Links here...</h4> 
            } 
            {PaginationElements}
          </div>
        </div>
    )
    
}