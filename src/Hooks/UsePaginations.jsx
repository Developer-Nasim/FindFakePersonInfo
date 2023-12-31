import { useCallback, useEffect,useState } from "react"
import { get, getDatabase, ref } from "firebase/database"

 
 
export default function UsePaginations(dbname,uid,showPerPage) {
 
    const [alldata,setAlldata] = useState()
    const [alldataKeys,setalldataKeys] = useState()
    const [Vkeys,setvkeys] = useState()
    const [showData,setshowData] = useState()
    const [currentItem,setcurrentItem] = useState()
    const [lastIndex,setlastIndex] = useState(0)

    const [loading,setloading] = useState(true)
    const [error,seterror] = useState(false)

    const CallData = useCallback( async () => {
        setloading(true)
        try {
            const db = getDatabase()
            const dbRef = ref(db,`${dbname}/${uid}`)
            const snap = await get(dbRef)
            setAlldata(Object.values(snap.val()).reverse())
            setalldataKeys(Object.keys(snap.val()).reverse())
            setcurrentItem(1)
            setloading(false) 
        } catch (error) {
            seterror(true)
        }
    },[dbname,uid,showPerPage])

    // Calling data from db
    useEffect(() => {
        CallData()
    },[dbname,uid,showPerPage])
    

    useEffect(() => {
        if (alldata && alldata.length > 0) { 
            const itms = [...alldata].splice(lastIndex, showPerPage)
            const kys = [...alldataKeys].splice(lastIndex, showPerPage)
            setshowData(itms) 
            setvkeys(kys) 
        }
    },[currentItem])


    const ChangeItemFromButton = (idx) => {
        setcurrentItem(idx+1) 
        setlastIndex(idx*showPerPage)
    }

    const NextPrev = (action) => {
        if (action == 'prev' && currentItem > 0) {
            setcurrentItem((p) => p-1)
            setlastIndex((p) => p-5)
        }else if(action == 'next' && Math.ceil(alldata.length/showPerPage) > currentItem-1){
            setcurrentItem((p) => p+1)
            setlastIndex((p) => p+5)
        }
    }

 

    const PaginationElements =(
        <>
            {alldata && alldata.length > showPerPage ?
                <ul className="pagination"> 
                    <li className={currentItem == 1 ? "page-item disabled" : "page-item"}><button className="page-link" type="button" onClick={() => NextPrev('prev')}> {"<"} </button></li>
                    { Array.from({length: Math.ceil(alldata.length/showPerPage)},(_,i) => i).map((itm,idx) => (
                        <li key={idx} className="page-item"><button className={currentItem == idx+1 ? "page-link active" : "page-link"} type="button" onClick={() => ChangeItemFromButton(idx)}>{idx+1}</button></li>
                    )) }
                    <li className={currentItem > (alldata.length/showPerPage) ? "page-item disabled" : "page-item"}><button className="page-link" type="button" onClick={() => NextPrev('next')}>{">"}</button></li>
                </ul>
            : ''}
        </>
    )
    return {loading,error,showData,PaginationElements,Vkeys}
}
