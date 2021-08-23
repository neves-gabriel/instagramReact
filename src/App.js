import Navbar from './Navbar';
import Posts from './Posts';
import Sidebar from './Sidebar';
import Stories from './Stories';
import Mobile_Background from './Mobile_Background';

export default function App() {
    return (
        <div>
			<Navbar />
            <div class="corpo">
                <div class="esquerda">
                    <Stories />
                    <Posts />
                </div>
                <Sidebar />
            </div>
			<Mobile_Background />
		</div>
    );
}