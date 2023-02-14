import {useState} from "react";
import {useNavigate} from "react-router-dom"
import {collection, addDoc} from "firebase/firestore"
import {db} from "../FirebaseConfig/firebase.js"

const Create =() =>{
    const [description, setDescription] = useState("")
    const [stock, setStock] = useState(0)

    const navigate = useNavigate()
    const productsCollection = collection(db,"3DProducts")

    const store = async(e) =>{
        await addDoc(productsCollection,{
            description:description,
            stock:stock
        })
        navigate("/")
    }
    return(
        <div>renderizar</div>
    )
}

export default Create