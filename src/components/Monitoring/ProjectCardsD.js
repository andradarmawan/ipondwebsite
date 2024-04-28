import React from "react";
import Card from "react-bootstrap/Card";
import HistoryChart from "./HistoryChart";

function ProjectCardsD() {
    return (
        <Card className="project-card-view">
            <Card.Body>
                <Card.Title>History Data</Card.Title>
                {/* Menggunakan komponen GaugeC untuk menampilkan data kekeruhan */}
                <HistoryChart/>
            </Card.Body>
        </Card>
    );
}

export default ProjectCardsD;
