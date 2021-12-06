import IonIcons from "./IonIcons";

const icons = ["heart-outline", "chatbubble-outline", "paper-plane-outline"]

const postsData = [
    {
        user: "meowed",
        contentType: "img",
        contentSrc: "assets/img/gato-telefone.svg",
        userLiked: "respondeai",
        numberLikes: "101.523"
    },
    {
        user: "barked",
        contentType: "img",
        contentSrc: "assets/img/dog.svg",
        userLiked: "adorable_animals",
        numberLikes: "99.159"
    },
    {
        user: "adorable_animals",
        contentType: "video",
        contentSrc: "assets/video/video.mp4",
        contentSrcAlt: "assets/video/video.ogv",
        userLiked: "barked",
        numberLikes: "77.852"
    }
]

function Post(props) {

    return (
            <div className="post">
                <div className="topo">
                    <div className="usuario">
                    <img src={`assets/img/${props.postData.user}.svg`} alt={props.postData.user} />
                        {props.postData.user}
                    </div>
                    <div className="acoes">
                        <IonIcons name="ellipsis-horizontal" />
                    </div>
                </div>

                {props.postData.contentType === "img" &&
                    <div className="conteudo">
                        <img src={props.postData.contentSrc} alt={props.postData.contentType} />
                    </div>
                }

                {props.postData.contentType === "video" &&
                    <div className="conteudo">
                        <video className="video" autoPlay muted loop >
                            <source src={props.postData.contentSrc} type="video/mp4"/>
                            <source src={props.postData.contentSrcAlt} type="video/ogg"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                }

                <div className="fundo">
                    <div className="acoes">
                    <div>
                        {icons.map(icon => <IonIcons key={icon} name={icon} />)}
                    </div>
                    <div>
                        <IonIcons name="bookmark-outline" />
                    </div>
                    </div>

                    <div className="curtidas">
                    <img src={`assets/img/${props.postData.userLiked}.svg`} alt={props.postData.userLiked} />
                    <div className="texto">
                        Curtido por <strong>{props.postData.userLiked}</strong> e <strong>outras {props.postData.numberLiked} pessoas</strong>
                    </div>
                    </div>
                </div>
            </div>
    );
}

export default function Posts() {
    return (
        <div className="posts">
            
            {postsData.map(postData => <Post key={postData.user} postData={postData} />)}

        </div>
    );
}