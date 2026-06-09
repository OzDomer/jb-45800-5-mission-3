import './About.css'

export default function About() {
    return (
        <div className="About">
            <h1>About</h1>
            <h2>The System</h2>
            <p>
                Dev Team Meeting Scheduler is a full-stack web application built for managing
                meetings across development teams in a tech company. Teams can schedule meetings
                with a room, description, and time range. Past meetings are highlighted in green,
                upcoming meetings in orange.
            </p>
            <h2>The Developer</h2>
            <p>
                Built by Oz Domer as part of the John Bryce full-stack development program.
                Stack: React + TypeScript on the frontend, Node.js + Express + Sequelize on the
                backend, with a MySQL database.
            </p>
        </div>
    )
}
