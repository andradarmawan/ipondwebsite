import React, { useState, useEffect } from "react";
import GaugeChart from 'react-gauge-chart';
import { getDatabase, ref, onValue } from "firebase/database";
import { db } from "../../firebase";



function Gauge() {
    const [pHValue, setPHValue] = useState("");

    useEffect(() => {
        const phref = ref(db, "/Data_MyIpond/Data_RealTime/PH_AIR")
        const unsubscribeph = onValue(phref, (snapshot) => {
            const data = snapshot.val(); 
            setPHValue(data);
        });

    return () => {
        unsubscribeph();
    }
      }, []);

    // Mengonfigurasi GaugeChart untuk menampilkan pH
    return (
        <div style={{ width: "100%" }}>
            <GaugeChart 
                id="ph-gauge" 
                nrOfLevels={14} 
                percent={pHValue / 14} // Konversi nilai pH ke proporsi
                formatTextValue={() => `${pHValue}`}
                colors={["#FF0000", "#FFFF00", "#00FF00"]} 
                needleColor="#345243"
                textColor="#345243"
            />
        </div>
    );
}

export default Gauge;
