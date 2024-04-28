import React, { useState, useEffect } from "react";
import GaugeChart from 'react-gauge-chart';
import { getDatabase, ref, onValue } from "firebase/database";
import { db } from "../../firebase";

function GaugeC() {
    const [turbidity, setTurbidity] = useState(0);

    useEffect(() => {
        // Mendengarkan perubahan pada path suhu di Firebase
        const turbidityref = ref(db, "/Data_MyIpond/Data_RealTime/KEKERUHAN_AIR")
        const unsubscribetur = onValue(turbidityref, (snapshot) => {
            const data = snapshot.val(); 
            setTurbidity(data);
        });

    return () => {
        unsubscribetur();
    }
    }, []);

    // Konfigurasi GaugeChart untuk menampilkan kekeruhan
    return (
        <div style={{ width: "100%" }}>
            <GaugeChart 
                id="turbidity-gauge" 
                nrOfLevels={10}
                percent={turbidity / 3000} // Ubah rentang sesuai kebutuhan
                formatTextValue={() => `${turbidity} NTU`}
                colors={["#00FF00", "#FFFF00", "#FF0000"]}
                needleColor="#345243"
                textColor="#345243"
            />
        </div>
    );
}

export default GaugeC;
