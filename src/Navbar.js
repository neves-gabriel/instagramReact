import IonIcons from "./IonIcons";

const icons = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"]

export default function Navbar() {

    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <IonIcons name="logo-instagram" />
                    <div className="separador"></div>
                    <img src="assets/img/logo.png" alt="logo-instagram" />
                </div>

                <div className="instagram-mobile">
                    <IonIcons name="logo-instagram" />
                    <img src="assets/img/logo.png" alt="logo-instagram" />
                    <IonIcons name="paper-plane-outline" />
                </div>
        
                <div className="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
        
                <div className="icones">
                    {icons.map(icon => <IonIcons key={icon} name={icon} />)}
                </div>
            </div>
        </div>
    );
}