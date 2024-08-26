//CSS
import './NotFoundPage.css'
//REACT
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <section className="not-found-page-section">
            <div className="not-found-page-container">
                <h1>404 : <br /> PAGE <br /> NOT FOUND</h1>
            <Link to="/">
                <button className="return-btn">Return to Home</button>
            </Link>
            </div>
        </section>
    )
}

export default NotFoundPage;