import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"
import { db } from "../FirebaseConfig/firebase.js"

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { async } from '@firebase/util'

const MySwal = withReactContent(Swal)

const Show = ()=>{

// 1 configurar los hooks

const [products, setProducts] = useState([])

// 2 referenciar a la db de firestore

const productsCollection = collection (db, "3DProducts")

// 3 funcion para mostrar todos los documentos

const getProducts = async () =>{
    const data = await getDocs (productsCollection)
    //console.log(data.docs)
    setProducts(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
}

// 4 funcion para eliminar un documento

const deleteProducts = async(id) =>{
    const productDoc = doc(db,"3DProducts", id )
    await deleteDoc (productDoc)
    getProducts()
}

// 5 funcion para la confirmacion de sweet alert

const confirmDelete = (id) => {
    Swal.fire({
        title: '¿Estas seguro?',
        text: "Esto no se podra revertir",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
            deleteProducts(id) //llamamos a la funcion eliminar cuando se confirma que quiere eliminar
          Swal.fire(
            'Borrado!',
            'Tus productos fueron borrados',
            'success'
          )
        }
      })
      
}

// 6 use useEffect

useEffect(()=>{
    getProducts()
},[])

// devolver la vista

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='d-grid gap-2'>
                        <Link to="/create" className="btn btn-secondary mt-2 mb-2"> CREAR </Link>
                    </div>
                    <table className="table table-dark table hover">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Stock</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product)=>{
                                <tr key={product.id}>
                                    <td>{product.description}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <Link to={`/edit/${product.id}`} className="btn btn-light"><i className="fa-solid fa-pencil"></i> </Link>  
                                    <button onClick={()=>{confirmDelete(product.id)}} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                                    </td>

                                </tr>

                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    )
}

export default Show