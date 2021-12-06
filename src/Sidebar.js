const sugestionsData = [
  {
      imageSrc: "assets/img/bad.vibes.memes.svg",
      name: "bad.vibes.memes",
      actionButtonText: "Segue você"
  },
  {
      imageSrc: "assets/img/chibirdart.svg",
      name: "chibirdart",
      actionButtonText: "Segue você"
  },
  {
      imageSrc: "assets/img/razoesparaacreditar.svg",
      name: "razoesparaacreditar",
      actionButtonText: "Novo no Instagram"
  },
  {
      imageSrc: "assets/img/smallcutecats.svg",
      name: "smallcutecats",
      actionButtonText: "Segue você"
  }
]

function Sugestion(props) {

  return (
      <div className="sugestao">
          <div className="usuario">
              <img src={props.profile.imageSrc} alt={props.profile.name} />
              <div className="texto">
                  <div className="nome">{props.profile.name}</div>
                  <div className="razao">{props.profile.actionButtonText}</div>
              </div>
          </div>

          <div className="seguir">Seguir</div>
      </div>
  );
}

export default function Sidebar() {
  return (
      <div className="sidebar">
          <div className="usuario">
              <img src="assets/img/catanacomics.svg" alt="catanacomics" />
              <div className="texto">
                  <strong>catanacomics</strong>
                  Catana
              </div>
          </div>

          <div className="sugestoes">
              <div className="titulo">
                  Sugestões para você
                  <div>Ver tudo</div>
              </div>

              {sugestionsData.map(sugestion => <Sugestion key={sugestion.name} profile={sugestion}/>)}

          </div>

          <div className="links">
              Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div className="copyright">
              © 2021 INSTAGRAM DO FACEBOOK
          </div>
      </div>
  );
}