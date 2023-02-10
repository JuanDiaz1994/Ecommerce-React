import "./Styles/Header-Image.css"

const HeaderImage = ({title}) =>{
    return(
        <section className="header">
            <div className="header__wallpaper">
                <article className="header__container">
                    <h1 className="header__title">{title}</h1>
                    
                    <button className="button-primary">Comprar</button>
                </article>
            </div>
        </section>
    )
}

export default HeaderImage