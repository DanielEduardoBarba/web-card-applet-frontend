
const location = "web-card-user"


export function getUserObj(){
    const _=  localStorage.getItem(location)
        let _user =""
        if( _ ) _user = JSON.parse(_)
        return _user
}

export function setUserObj( obj){
    const _ = JSON.stringify(obj)
    localStorage.setItem(location, _ )
}