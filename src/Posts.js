import Post from "./Post";
import Post_Video from "./Post_Video";

export default function Posts() {
    return (
        <div class="posts">
            <Post user="meowed" conteudo="gato-telefone" userLiked="respondeai" numberLiked="101.523" />
            <Post user="barked" conteudo="dog" userLiked="adorable_animals" numberLiked="99.159" />
            <Post_Video user="adorable_animals" conteudo="video" userLiked="barked" numberLiked="77.852" />
        </div>
    );
}