function Footer(){

    return (
        <>

        <footer className="footer mt-auto py-3 bg-body-tertiary">
            <div className="container">
                <span className="text-body-secondary">Creado por Andrés Garita. {new Date().getFullYear()}. Ver código fuente de esta página <a target="_blank" href="https://gitlab.com/andresgarita/genpass">aquí</a></span>
            </div>
        </footer>
        
        </>
        )
}

export default Footer;