import IonIcons from "./IonIcons";

const icons = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"]

export default function MobileBackground() {

    return (
        <div className="fundo-mobile">
          {icons.map(icon => <IonIcons key={icon} name={icon} />)}
        </div>
    );
}