import { useEffect, useContext } from "react"
import Spinner from "../layout/assets/Spinner"
import UserItem from "./UserItem"
import GithubContext from "../../context/github/GithubContext"

export default function UserResults() {
    const {users, loading, fetchUsers} = useContext(GithubContext) 

    useEffect(() => {
      fetchUsers()
    }, [])

 
  
    if(!loading) {

        return (
          <div className="grid grid-conls-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
              {users.map((user) => (
                   <UserItem key={user.id} user={user} /> 
              ))}
          </div>
        )
    } else {
        return  <Spinner /> 
    }
}
