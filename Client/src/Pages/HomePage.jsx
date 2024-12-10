import { api } from "../axios"

const HomePage = () => {

    const handleClick = async () => {
        console.log(await api.get("/users/login"))
    }

    return <div>
        <button onClick={handleClick}>Click</button>
    </div>
}

export default HomePage
