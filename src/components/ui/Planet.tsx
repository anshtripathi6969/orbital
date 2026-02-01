"use client";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Ring } from "@react-three/drei";
import * as THREE from "three";

interface PlanetProps {
    color: string;
    hasRings?: boolean;
}

export default function Planet({ color, hasRings = false }: PlanetProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const ringRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.2;
        }
        if (ringRef.current) {
            ringRef.current.rotation.z += delta * 0.05;
        }
    });

    return (
        <group rotation={[0.2, 0, 0]}>
            <Sphere ref={meshRef} args={[1.5, 64, 64]}>
                <meshStandardMaterial
                    color={color}
                    roughness={0.7}
                    metalness={0.2}
                />
            </Sphere>
            {hasRings && (
                <Ring ref={ringRef} args={[2.2, 3, 64]} rotation={[Math.PI / 2.5, 0, 0]}>
                    <meshStandardMaterial color="#A8A29E" opacity={0.6} transparent side={THREE.DoubleSide} />
                </Ring>
            )}
            <ambientLight intensity={0.2} />
            <directionalLight position={[2, 2, 5]} intensity={2} />
        </group>
    );
}
