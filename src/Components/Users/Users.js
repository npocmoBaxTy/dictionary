import {useState,useEffect} from "react";
import axios from "./../../api/axios";

const Users = () => {
    const [users,setUsers] = useState()

    useEffect(()=> {
        let isMounted = true
        const controller = new AbortController()

        const getUsers = async () => {
            try {
                const res = await axios.get('/users',{
                    signal:controller.signal
                })
                console.log(res.data)
                isMounted && setUsers(res.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        getUsers()

        return () => {
            isMounted = false
            controller.abort()
        }
    },[])

    return (
        <article>
            <h2>Users List</h2>
            {
                users?.length
                ? (
                    <ul>
                        {
                            users.map((user,i)=> {
                                return (
                                    <li key={i}>
                                        {user?.username}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    )
                    : <p>No users!</p>
            }
        </article>
    )
}

export default Users