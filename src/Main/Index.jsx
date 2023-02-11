import {PeliculasGrid} from "../CardGrid/Index"
import "./Main.css"


export function Main () {
    return(
        <section className='main'>
            <div>
                <h1 className="main__title">Productos</h1>
                <section>
                    <PeliculasGrid/>
                </section>
            </div>
        </section>
    )
}

export default Main