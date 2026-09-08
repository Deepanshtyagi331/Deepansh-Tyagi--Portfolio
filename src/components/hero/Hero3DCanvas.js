import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Interactive Floating Geometric Shape with Wireframe Overlay & Core
function FloatingGeometry({ prefersReducedMotion, variant = 'hero' }) {
  const outerMesh = useRef();
  const innerMesh = useRef();
  const wireframeMesh = useRef();

  useFrame((state, delta) => {
    if (prefersReducedMotion) return;

    // Smooth continuous rotation
    if (outerMesh.current) {
      outerMesh.current.rotation.x += delta * 0.15;
      outerMesh.current.rotation.y += delta * 0.2;
    }
    if (innerMesh.current) {
      innerMesh.current.rotation.x -= delta * 0.25;
      innerMesh.current.rotation.y -= delta * 0.15;
    }
    if (wireframeMesh.current) {
      wireframeMesh.current.rotation.x += delta * 0.08;
      wireframeMesh.current.rotation.y += delta * 0.12;
    }

    // Parallax reaction to mouse pointer coordinates
    const targetX = state.pointer.x * 0.45;
    const targetY = state.pointer.y * 0.45;

    if (outerMesh.current) {
      outerMesh.current.position.x = THREE.MathUtils.damp(
        outerMesh.current.position.x,
        targetX * 0.6,
        3,
        delta
      );
      outerMesh.current.position.y = THREE.MathUtils.damp(
        outerMesh.current.position.y,
        targetY * 0.6,
        3,
        delta
      );
    }
  });

  const renderGeometry = () => {
    switch (variant) {
      case 'about':
        return <icosahedronGeometry args={[1.5, 1]} />;
      case 'skills':
        return <torusGeometry args={[1.5, 0.38, 30, 100]} />;
      case 'projects':
        return <dodecahedronGeometry args={[1.5, 0]} />;
      case 'experience':
        return <torusKnotGeometry args={[1.4, 0.35, 100, 16, 3, 2]} />;
      case 'education':
        return <octahedronGeometry args={[1.6, 0]} />;
      case 'contact':
        return <icosahedronGeometry args={[1.5, 2]} />;
      case 'hero':
      default:
        return <torusKnotGeometry args={[1.5, 0.42, 128, 32, 2, 3]} />;
    }
  };

  return (
    <Float
      speed={prefersReducedMotion ? 0 : 2}
      rotationIntensity={prefersReducedMotion ? 0 : 0.8}
      floatIntensity={prefersReducedMotion ? 0 : 1.2}
    >
      <group ref={outerMesh} position={[0, 0, 0]}>
        {/* Outer Wireframe */}
        <mesh ref={wireframeMesh}>
          {renderGeometry()}
          <meshStandardMaterial
            color="#8b5cf6"
            wireframe
            roughness={0.2}
            metalness={0.8}
            emissive="#6366f1"
            emissiveIntensity={0.35}
            transparent
            opacity={0.7}
          />
        </mesh>

        {/* Inner Pulsing Distorted Energy Core */}
        <Sphere ref={innerMesh} args={[0.9, 64, 64]}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={prefersReducedMotion ? 0 : 0.35}
            speed={prefersReducedMotion ? 0 : 2}
            roughness={0.15}
            metalness={0.9}
            emissive="#a855f7"
            emissiveIntensity={0.4}
            transparent
            opacity={0.65}
          />
        </Sphere>

        {/* Secondary Delicate Outer Cage */}
        <mesh scale={1.85}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial
            color="#06b6d4"
            wireframe
            transparent
            opacity={0.15}
          />
        </mesh>
      </group>
    </Float>
  );
}

// Subtle 3D Starfield / Particle Cloud
function ParticleField({ count = 120, prefersReducedMotion }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color('#9333ea'),
      new THREE.Color('#3b82f6'),
      new THREE.Color('#06b6d4'),
      new THREE.Color('#c084fc')
    ];

    for (let i = 0; i < count; i++) {
      // Scatter in a 3D sphere volume
      const r = THREE.MathUtils.randFloat(2.5, 7.5);
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const color = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (prefersReducedMotion || !pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.04;
    pointsRef.current.rotation.x = THREE.MathUtils.damp(
      pointsRef.current.rotation.x,
      state.pointer.y * 0.15,
      2,
      delta
    );
    pointsRef.current.rotation.z = THREE.MathUtils.damp(
      pointsRef.current.rotation.z,
      state.pointer.x * 0.15,
      2,
      delta
    );
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

// Main 3D Hero Canvas Container
export default function Hero3DCanvas({ className = '', variant = 'hero' }) {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);
    window.addEventListener('resize', checkMobile);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (!hasMounted) {
    return <div className={`hero-3d-placeholder ${className}`} />;
  }

  return (
    <div
      className={`relative w-full h-full pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, isMobile ? 5.5 : 4.6], fov: 45 }}
          dpr={isMobile ? 1 : [1, 2]}
          gl={{
            antialias: !isMobile,
            powerPreference: 'high-performance',
            alpha: true
          }}
          style={{ width: '100%', height: '100%' }}
        >
          {/* Lighting */}
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
          <pointLight position={[-6, 4, -4]} intensity={2.5} color="#8b5cf6" />
          <pointLight position={[6, -4, 4]} intensity={2.2} color="#06b6d4" />
          <pointLight position={[0, 6, 2]} intensity={1.5} color="#ec4899" />

          {/* Interactive Hero Scene */}
          <FloatingGeometry prefersReducedMotion={prefersReducedMotion} variant={variant} />
          <ParticleField
            count={isMobile ? 50 : 130}
            prefersReducedMotion={prefersReducedMotion}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
