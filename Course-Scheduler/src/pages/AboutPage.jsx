import Card from 'react-bootstrap/Card';
import "../assets/About.css";

function AboutPage({version}) {
    const currentDate = new Date()
    const dateFormat = {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'}
    const formattedDate = currentDate.toLocaleDateString('en-US', dateFormat);

    return (
        <div className="card" style={{margin: "1.5rem 23rem", textAlign: "left"}}>
            <div className="card-body">
                <h2 className="card-title">About</h2>
                <p className="card-text">
                    The Aurora CS Course Scheduler shows the CS Developer Track catalog,
                    tracks which courses you have completed, and shows which courses you
                    are eligible to take next.
                </p>
                <info className="card-text" class="info-row">
                    <span className="info-label">Author(s)</span>
                    <span className="info-value">Dominic Higham</span>
                </info>
                <info className="card-text" class="info-row">
                    <span className="info-label">Date</span>
                    <span className="info-value">{formattedDate}</span>
                </info>
                <info className="card-text" class="info-row">
                    <span className="info-label">Version</span>
                    <span className="info-value">{version}</span>
                </info>
            </div>
        </div>
    )
}

export default AboutPage;