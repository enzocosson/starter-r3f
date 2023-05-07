import React, { useRef } from "react";

import { OrbitControls, Cloud, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Scene from "../../Models/Scene/Scene";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.main}>
      <Canvas
        className={styles.webgl}
        camera={{
          fov: 64,
          position: [0, 0, 20],
        }}
      >
        <ambientLight color="#6dcdda" intensity={5} />
        <directionalLight
          color="#6dcdda"
          position={[0, 0, 15]}
          intensity={10}
        />
        <OrbitControls enableZoom={false} />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <Scene position={[0, 0, 0]} rotation={[0, 0, 0]} />
      </Canvas>
      <div className={styles.couverture}>
        {/* <img
          className={styles.background}
          src="./images/background.jpg"
          alt=""
        /> */}
        {/* <h1>React Three Fiber</h1> */}
      </div>
    </div>
  );
}

export default Home;
