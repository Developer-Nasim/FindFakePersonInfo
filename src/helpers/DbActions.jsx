import {getDatabase, ref, set,push, get} from 'firebase/database'  

export async function StoreData(uid,datas,dbname,infoDB=false) { 
    try {
        const db = getDatabase()
        const dbRefs = ref(db, `${dbname}/${uid}`)
        const newDataRef = await push(dbRefs);
        await set(newDataRef,{
            ...datas
        })

        
        if (infoDB) {  
            const info_dbRefs = ref(db, `links/${uid}/${datas.link_key}`)
            const snapshot = await get(info_dbRefs);
            const val = snapshot.val()
            if (snapshot.exists()) {
                const l_dbRefs = ref(db, `links/${uid}/${datas.link_key}`)
                await set(l_dbRefs,{
                    ...val,
                    info_key:newDataRef.key
                })
            }
  

        }


    } catch (error) {
        console.log(error)
    }
}

export async function GetDetails(uid,key,dbname) {
    try {
        const db = getDatabase()
        const dbRefs = ref(db, `${dbname}/${uid}/${key}`)
        const snap = await get(dbRefs);
        return snap.val()
    } catch (error) {
        console.log(error)
    } 
}












