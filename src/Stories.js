import Story from "./Story";
import IonIcons from "./IonIcons";

export default function Stories() {
    return (
        <div className="stories">
            <Story />
            <div className="setinha">
                <IonIcons name="chevron-forward-circle" />
            </div>
          </div>
    );
}