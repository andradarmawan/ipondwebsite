import React, { useState, useEffect } from "react";
import GaugeChart from 'react-gauge-chart';
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase";

function GaugeB() {
    const [temperature, setTemperature] = useState(0);

    useEffect(() => {
        // Mendengarkan perubahan pada path suhu di Firebase
        const suhuref = ref(db, "/Data_MyIpond/Data_RealTime/SUHU_AIR")
        const unsubscribesuhu = onValue(suhuref, (snapshot) => {
            const data = snapshot.val(); 
            setTemperature(data);
        });

    return () => {
        unsubscribesuhu();
    }
    }, []);

    // Konfigurasi GaugeChart untuk menampilkan suhu
    return (
        <div style={{ width: "100%" }}>
            <GaugeChart 
                id="temperature-gauge" 
                nrOfLevels={10} 
                percent={temperature / 100} // Ubah rentang sesuai kebutuhan
                formatTextValue={() => `${temperature}°C`}
                colors={["#00FF00", "#FFFF00", "#FF0000"]}
                needleColor="#CCF2B9"
                textColor="#345243"
            />
        </div>
    );
}

export default GaugeB;
