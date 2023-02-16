import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../FirebaseConfig/firebase.js";
// import Swal from 'sweetalert2'

const Edit = () => {
    const [description, setDescription] = useState("")
    const [stock, setStock] = useState(0)

    const navigate = useNavigate();

    const { id } = useParams();

    const update = async (e) => {
        e.preventDefault();
        const product = doc(db, "3DProducts", id);
        const data = {
            description: description,
            stock: stock,
        };
        await updateDoc(product, data);
    };
    navigate("/");

    const getProductById = async (id) => {
        const product = getDoc(doc(db, "3DProducts", id));
        if (product.exists()) {
            setDescription(product.data().description);
            setStock(product.data().stock);
        } else {
            console.log("el producto no existe");
        }
    };
    useEffect(() => {
        getProductById();
    }, []);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>Edit Product</h1>
                    <form onSubmit={update}>
                        <div className='mb-3'>
                            <label className='form-label'>Description</label>
                            <input
                                type="text"
                                className='form-control'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Stock</label>
                            <input
                                type="number"
                                className='form-control'
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                            />
                        </div>
                        <button type='submit' className='btn btn-primary'>Editar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default Edit;