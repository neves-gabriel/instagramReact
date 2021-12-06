import Navbar from './Navbar';
import Posts from './Posts';
import Sidebar from './Sidebar';
import Stories from './Stories';
import MobileBackground from './MobileBackground';

export default function App() {
    return (
        <div>
			<Navbar />
            <div className="corpo">
                <div className="esquerda">
                    <Stories />
                    <Posts />
                </div>
                <Sidebar />
            </div>
			<MobileBackground />
		</div>
    );
}