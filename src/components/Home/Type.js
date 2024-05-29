import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Tujuan Komprehensif Anda ",
          "Untuk Memonitoring Kualitas Air Tambak Ikan Nila Melalui pH, Kekeruhan, dan Suhu",
          "Membantu Kamu Mendapatkan Informasi yang Akurat melalui My I-Pond🙌🏻.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
}

export default Type;
