import { useEffect } from "react"
import { api } from "../axios"
import toast from "react-hot-toast"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "../Redux/userSlice"

const HomePage = () => {

    const dispatch = useDispatch()
    const { name, email, username } = useSelector(store => store.user)

    const handleClick = async () => {
        try {
            const res = await api.get("/users/products")
            console.log(res.data)
        } catch (err) {
            return toast.error(err.response?.data.message || err.message)
        }
    }

    useEffect(() => {
        handleClick()
    }, [])

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("access_token")
        dispatch(logoutUser())
        navigate("/login")
    }

    return <div>
        <div>{name} {email} {username}</div>
        <button onClick={handleLogout}>LogOut</button>
    </div>
}

export default HomePage
