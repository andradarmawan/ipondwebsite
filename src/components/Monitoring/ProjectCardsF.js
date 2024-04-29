import React from "react";
import Card from "react-bootstrap/Card";
import HistoryChartC from "./HistoryChartC";

function ProjectCardsF() {
    return (
        <Card className="project-card-view-history">
            <Card.Body>
                <Card.Title>History Data</Card.Title>
                {/* Menggunakan komponen GaugeC untuk menampilkan data kekeruhan */}
                <HistoryChartC/>
            </Card.Body>
        </Card>
    );
}

export default ProjectCardsF;
