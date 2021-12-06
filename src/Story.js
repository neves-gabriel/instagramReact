export default function Story() {

    const users = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"]

    return (
        users.map(user =>   <div key={user} className="story">
                                <div className="imagem">
                                    <img src={`assets/img/${user}.svg`} alt={user} />
                                </div>
                                <div className="usuario">
                                    {user}
                                </div>
                            </div>
                ) 
        
    );
}