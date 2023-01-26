import "./Styles/Header-Image.css"

const HeaderImage = ({title}) =>{
    return(
        <section className="hero hero-slide-1">
            <div className="hero-container">
                <article className="hero-container__text-box">
                    <h1>{title}</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nobis nulla voluptate sint sit, laboriosam, iure debitis nihil facere a praesentium. Vel illum maxime consequuntur placeat reprehenderit libero ullam maiores?
                    </p>
                    <button className="button-primary">Comprar</button>
                </article>
            </div>
        </section>
    )
}

export default HeaderImage