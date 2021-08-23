import Ion_Icons from "./Ion_Icons";

export default function Post_Video(props) {

    const icons = ["heart-outline", "chatbubble-outline", "paper-plane-outline"]

    return (
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                    <img src={`assets/img/${props.user}.svg`} />
                        {props.user}
                    </div>
                    <div class="acoes">
                        <Ion_Icons name="ellipsis-horizontal" />
                    </div>
                </div>

                <div class="conteudo">
                    <video class="video" autoPlay muted loop >
                        <source src={`assets/video/${props.conteudo}.mp4`} type="video/mp4"/>
                        <source src={`assets/video/${props.conteudo}.ogv`} type="video/ogg"/>
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div class="fundo">
                    <div class="acoes">
                    <div>
                        {icons.map(icon => <Ion_Icons name={icon} />)}
                    </div>
                    <div>
                        <Ion_Icons name="bookmark-outline" />
                    </div>
                    </div>

                    <div class="curtidas">
                    <img src={`assets/img/${props.userLiked}.svg`} />
                    <div class="texto">
                        Curtido por <strong>{props.userLiked}</strong> e <strong>outras {props.numberLiked} pessoas</strong>
                    </div>
                    </div>
                </div>
            </div>
    );
}