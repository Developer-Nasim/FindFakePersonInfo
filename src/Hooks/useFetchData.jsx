import {get, getDatabase, onValue, orderByKey, query, ref} from 'firebase/database' 
import { useAuth } from "../Contexts/AuthContext";
import { useEffect, useState } from 'react'
export default function useFetchData(dbname) {
    const [loading,setLoading] = useState(true)
    const [error,seterror] = useState(false)
    const [links,setLinks] = useState(null)
    const [VKeys,setVKeys] = useState(null)
    const {curentUser} = useAuth()

    useEffect(() => {
        async function GetDatas() {
                const db = getDatabase()
                const linksRef = await ref(db,`${dbname}/${curentUser.uid}`)
                const lquery = query(linksRef, orderByKey())
            try {
                setLoading(true)
                seterror(false)
                const snapshot = await get(lquery)
                setLoading(false)
                const vals = snapshot.val();
                if (snapshot.exists()) {
                    setLinks([...Object.values(vals).reverse()])
                    setVKeys([...Object.keys(vals).reverse()])
                } 
            } catch (error) {
                console.log('en error',error)
                setLoading(false)
                seterror(true)
            }
        }
        GetDatas()
    },[dbname])
    return {loading,error,links,VKeys}
}