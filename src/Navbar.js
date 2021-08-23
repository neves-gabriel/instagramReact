import Ion_Icons from "./Ion_Icons";

export default function Navbar() {

    const icons = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"]

    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <Ion_Icons name="logo-instagram" />
                    <div class="separador"></div>
                    <img src="assets/img/logo.png" />
                </div>

                <div class="logo-mobile">
                </div>

                <div class="instagram-mobile">
                    <Ion_Icons name="logo-instagram" />
                    <img src="assets/img/logo.png" />
                </div>
        
                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
        
                <div class="icones">
                    {icons.map(icon => <Ion_Icons name={icon} />)}
                </div>

                <div class="icones-mobile">
                    <Ion_Icons name="paper-plane-outline" />
                </div>
            </div>
        </div>
    );
}