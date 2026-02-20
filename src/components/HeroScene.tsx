"use client";

import { useRef, useMemo, useEffect, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTheme } from "next-themes";
import * as THREE from "three";

const NODE_COUNT_DESKTOP = 60;
const NODE_COUNT_MOBILE = 30;
const CONNECTION_DISTANCE = 2.5;
const PRIMARY_COLOR = new THREE.Color("#2dd4bf");
const DIM_COLOR_DARK = new THREE.Color("#0d3d56");
const DIM_COLOR_LIGHT = new THREE.Color("#a0d4e6");

function NeuralNetwork({ isMobile, isDark }: { isMobile: boolean; isDark: boolean }) {
  const dimColor = isDark ? DIM_COLOR_DARK : DIM_COLOR_LIGHT;
  const nodeCount = isMobile ? NODE_COUNT_MOBILE : NODE_COUNT_DESKTOP;
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const positions = useMemo(() => {
    const pos = new Float32Array(nodeCount * 3);
    for (let i = 0; i < nodeCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return pos;
  }, [nodeCount]);

  const velocities = useMemo(() => {
    const vel = new Float32Array(nodeCount * 3);
    for (let i = 0; i < nodeCount * 3; i++) {
      vel[i] = (Math.random() - 0.5) * 0.003;
    }
    return vel;
  }, [nodeCount]);

  const handlePointerMove = useCallback(
    (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    },
    []
  );

  useEffect(() => {
    window.addEventListener("mousemove", handlePointerMove);
    return () => window.removeEventListener("mousemove", handlePointerMove);
  }, [handlePointerMove]);

  useFrame((_state, delta) => {
    if (!pointsRef.current || !linesRef.current) return;

    const posArray = pointsRef.current.geometry.attributes.position
      .array as Float32Array;

    for (let i = 0; i < nodeCount; i++) {
      const i3 = i * 3;
      posArray[i3] += velocities[i3];
      posArray[i3 + 1] += velocities[i3 + 1];
      posArray[i3 + 2] += velocities[i3 + 2];

      const depth = (posArray[i3 + 2] + 2) / 4;
      posArray[i3] += mouseRef.current.x * depth * 0.002;
      posArray[i3 + 1] += mouseRef.current.y * depth * 0.002;

      for (let j = 0; j < 3; j++) {
        const limit = j === 2 ? 2 : j === 1 ? 3 : 4;
        if (posArray[i3 + j] > limit) posArray[i3 + j] = -limit;
        if (posArray[i3 + j] < -limit) posArray[i3 + j] = limit;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    const linePositions: number[] = [];
    const lineColors: number[] = [];

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = posArray[i * 3] - posArray[j * 3];
        const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
        const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONNECTION_DISTANCE) {
          const alpha = 1 - dist / CONNECTION_DISTANCE;
          linePositions.push(
            posArray[i * 3],
            posArray[i * 3 + 1],
            posArray[i * 3 + 2],
            posArray[j * 3],
            posArray[j * 3 + 1],
            posArray[j * 3 + 2]
          );
          const c = dimColor.clone().lerp(PRIMARY_COLOR, alpha * 0.6);
          lineColors.push(c.r, c.g, c.b, c.r, c.g, c.b);
        }
      }
    }

    const lineGeom = linesRef.current.geometry;
    lineGeom.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    lineGeom.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(lineColors, 3)
    );

    pointsRef.current.rotation.y += delta * 0.03;
    linesRef.current.rotation.y += delta * 0.03;
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color={PRIMARY_COLOR}
          transparent
          opacity={0.8}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.3}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

export default function HeroScene() {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;
  const { theme } = useTheme();
  const isDark = theme !== "light";

  return (
    <div className="absolute inset-0" style={{ zIndex: -5 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <NeuralNetwork isMobile={isMobile} isDark={isDark} />
      </Canvas>
    </div>
  );
}
