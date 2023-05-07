import { useGLTF } from "@react-three/drei";
// import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import "./Scene.module.scss";

export function Scene(props) {
  const { nodes, materials } = useGLTF("./models/crystal2.glb");
  const ref = useRef();
  // const tl = useRef();

  // useLayoutEffect(() => {
  //   tl.current = gsap.timeline({ paused: true });
  // Card movement and rotation
  // tl.current.to(ref.current.position, {
  //   duration: 0.5,
  //   x: 13,
  //   y: 0,
  //   z: 7,
  //   onUpdate: () => {
  //     ref.current.rotation.y += 0.05;
  //   },
  // });

  // Card rotation --------------------------------
  // tl.current.to(
  //   ref.current.rotation,
  //   {
  //     duration: 0.5,
  //     x: -1.57,
  //     y: 4.71,
  //     z: 0,

  //     onUpdate: () => {
  //       ref.current.rotation.y -= 0.05;
  //     },
  //   },
  //   0
  // );

  //   const handleScroll = () => {
  //     const scrollTop =
  //       window.pageYOffset || document.documentElement.scrollTop;
  //     const windowHeight = window.innerHeight;
  //     const documentHeight = document.documentElement.scrollHeight;
  //     const progress = scrollTop / (documentHeight - windowHeight);
  //     tl.current.seek(progress * tl.current.duration());
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const objectRef = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0;
    ref.current.rotation.y += 0.001;
  });

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={4}>
        <mesh
          ref={ref}
          geometry={nodes.defaultMaterial.geometry}
          material={materials["1001"]}
          rotation={[Math.PI / 2, 0, 0]}
          transparent={true}
          opacity={0.1}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/crystal2.glb");

export default Scene;
