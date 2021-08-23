import Ion_Icons from "./Ion_Icons";

export default function Mobile_Background() {

  const icons = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"]

    return (
        <div class="fundo-mobile">
          {icons.map(icon => <Ion_Icons name={icon} />)}
        </div>
    );
}