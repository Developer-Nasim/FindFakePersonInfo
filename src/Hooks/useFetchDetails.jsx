import { get, getDatabase, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useFetchDetails(key,dbname,uid) {
    const [data, setData] = useState(null)
    useEffect(()=>{

        async function GettingDatas() {
            try {
                const db = getDatabase()
                const dbRef = ref(db,`${dbname}/${uid}/${key}`)
                const snapshot = await get(dbRef)
                setData(snapshot.val()) 
            } catch (error) {
                console.error(error)
            }
            
        }
        GettingDatas()

    },[key,dbname,uid])

    return {data}

}