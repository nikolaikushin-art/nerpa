// @ts-nocheck
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Line, Html, Stars } from "@react-three/drei";
import * as THREE from "three";

const AFGHANISTAN_CENTER: [number, number] = [67.7, 33.9];

function latLngToVec3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

const tradePartners = [
  { name: "China", lat: 35.86, lng: 104.19, color: "#ff6b6b", trade: "$2.1B", type: "Major" },
  { name: "India", lat: 20.59, lng: 78.96, color: "#ffa726", trade: "$1.8B", type: "Major" },
  { name: "Pakistan", lat: 30.37, lng: 69.34, color: "#66bb6a", trade: "$1.5B", type: "Major" },
  { name: "Iran", lat: 32.42, lng: 53.69, color: "#ab47bc", trade: "$1.2B", type: "Major" },
  { name: "Turkey", lat: 38.96, lng: 35.24, color: "#ef5350", trade: "$900M", type: "Growth" },
  { name: "UAE", lat: 23.42, lng: 53.84, color: "#42a5f5", trade: "$1.4B", type: "Major" },
  { name: "Germany", lat: 51.16, lng: 10.45, color: "#26c6da", trade: "$600M", type: "Growth" },
  { name: "USA", lat: 37.09, lng: -95.71, color: "#5c6bc0", trade: "$500M", type: "Growth" },
  { name: "Russia", lat: 61.52, lng: 105.31, color: "#78909c", trade: "$400M", type: "Emerging" },
  { name: "Japan", lat: 36.2, lng: 138.25, color: "#ec407a", trade: "$350M", type: "Emerging" },
  { name: "S. Korea", lat: 35.9, lng: 127.76, color: "#7e57c2", trade: "$300M", type: "Emerging" },
  { name: "Kazakhstan", lat: 48.01, lng: 66.92, color: "#26a69a", trade: "$250M", type: "Emerging" },
  { name: "Saudi Arabia", lat: 23.88, lng: 45.08, color: "#ffd54f", trade: "$450M", type: "Growth" },
  { name: "UK", lat: 55.37, lng: -3.43, color: "#90caf9", trade: "$320M", type: "Growth" },
  { name: "Italy", lat: 41.87, lng: 12.56, color: "#a5d6a7", trade: "$280M", type: "Emerging" },
  { name: "Uzbekistan", lat: 41.38, lng: 64.58, color: "#80deea", trade: "$380M", type: "Growth" },
];

function GlowingArc({ from, to, color }: { from: [number, number]; to: [number, number]; color: string }) {
  const points = useMemo(() => {
    const start = latLngToVec3(from[0], from[1], 2.02);
    const end = latLngToVec3(to[0], to[1], 2.02);
    const dist = start.distanceTo(end);
    const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(2 + dist * 0.35);
    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
    return curve.getPoints(64);
  }, [from, to]);

  return (
    <Line
      points={points}
      color={color}
      lineWidth={2}
      transparent
      opacity={0.7}
    />
  );
}

function FlowingParticle({ from, to, color, speed }: { from: [number, number]; to: [number, number]; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const trailRef = useRef<THREE.Mesh>(null);
  const curve = useMemo(() => {
    const start = latLngToVec3(from[0], from[1], 2.02);
    const end = latLngToVec3(to[0], to[1], 2.02);
    const dist = start.distanceTo(end);
    const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(2 + dist * 0.35);
    return new THREE.QuadraticBezierCurve3(start, mid, end);
  }, [from, to]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = (clock.getElapsedTime() * speed) % 1;
    const pos = curve.getPoint(t);
    meshRef.current.position.copy(pos);
    // Trail slightly behind
    if (trailRef.current) {
      const t2 = ((clock.getElapsedTime() * speed) - 0.03) % 1;
      const pos2 = curve.getPoint(Math.max(0, t2));
      trailRef.current.position.copy(pos2);
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.04, 12, 12]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh ref={trailRef}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshBasicMaterial color={color} transparent opacity={0.4} />
      </mesh>
    </>
  );
}

function AfghanistanMarker() {
  const pos = latLngToVec3(AFGHANISTAN_CENTER[1], AFGHANISTAN_CENTER[0], 2.03);
  const ringRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ringRef.current) {
      const scale = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.3;
      ringRef.current.scale.set(scale, scale, scale);
    }
    if (outerRingRef.current) {
      const scale = 1.2 + Math.sin(clock.getElapsedTime() * 1.5 + 1) * 0.4;
      outerRingRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group position={pos}>
      {/* Core marker */}
      <mesh>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.8} />
      </mesh>
      {/* Inner pulse ring */}
      <mesh ref={ringRef}>
        <ringGeometry args={[0.1, 0.14, 32]} />
        <meshBasicMaterial color="#f59e0b" transparent opacity={0.6} side={THREE.DoubleSide} />
      </mesh>
      {/* Outer pulse ring */}
      <mesh ref={outerRingRef}>
        <ringGeometry args={[0.16, 0.19, 32]} />
        <meshBasicMaterial color="#fbbf24" transparent opacity={0.25} side={THREE.DoubleSide} />
      </mesh>
      <Html distanceFactor={7} position={[0, 0.2, 0]}>
        <div className="bg-card/95 backdrop-blur-md px-4 py-2 rounded-xl border border-primary/40 whitespace-nowrap text-center shadow-xl" style={{ transform: "translateX(-50%)" }}>
          <p className="text-primary font-bold text-sm">🇦🇫 Afghanistan</p>
          <p className="text-muted-foreground text-[10px]">NERPA Trade Hub</p>
          <p className="text-primary/70 text-[9px]">$12.8B Total Trade Volume</p>
        </div>
      </Html>
    </group>
  );
}

function PartnerMarkers() {
  return (
    <>
      {tradePartners.map((partner) => {
        const pos = latLngToVec3(partner.lat, partner.lng, 2.025);
        return (
          <group key={partner.name} position={pos}>
            <mesh>
              <sphereGeometry args={[0.03, 12, 12]} />
              <meshStandardMaterial color={partner.color} emissive={partner.color} emissiveIntensity={0.5} />
            </mesh>
            <Html distanceFactor={10} position={[0, 0.12, 0]}>
              <div className="bg-card/85 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-border/40 whitespace-nowrap text-center pointer-events-none shadow-lg" style={{ transform: "translateX(-50%)" }}>
                <p className="text-foreground font-semibold text-[10px]">{partner.name}</p>
                <p style={{ color: partner.color }} className="text-[9px] font-bold">{partner.trade}</p>
                <p className="text-muted-foreground text-[7px]">{partner.type}</p>
              </div>
            </Html>
          </group>
        );
      })}
    </>
  );
}

function GridLines() {
  const lines = useMemo(() => {
    const result: THREE.Vector3[][] = [];
    // Latitude lines
    for (let lat = -60; lat <= 80; lat += 30) {
      const pts: THREE.Vector3[] = [];
      for (let lng = -180; lng <= 180; lng += 5) {
        pts.push(latLngToVec3(lat, lng, 2.015));
      }
      result.push(pts);
    }
    // Longitude lines
    for (let lng = -180; lng < 180; lng += 30) {
      const pts: THREE.Vector3[] = [];
      for (let lat = -90; lat <= 90; lat += 5) {
        pts.push(latLngToVec3(lat, lng, 2.015));
      }
      result.push(pts);
    }
    return result;
  }, []);

  return (
    <>
      {lines.map((pts, i) => (
        <Line key={i} points={pts} color="#334155" lineWidth={0.5} transparent opacity={0.15} />
      ))}
    </>
  );
}

function GlobeModel() {
  const globeRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.0008;
    }
  });

  return (
    <group ref={globeRef}>
      <Stars radius={120} depth={60} count={3000} factor={5} saturation={0.1} />
      
      {/* Main globe */}
      <Sphere args={[2, 96, 96]}>
        <meshPhongMaterial
          color="#0f1b2e"
          emissive="#071525"
          specular="#4a6785"
          shininess={30}
          transparent
          opacity={0.97}
        />
      </Sphere>

      {/* Subtle continent hints via wireframe */}
      <Sphere args={[2.005, 48, 48]}>
        <meshBasicMaterial color="#1e3a5f" wireframe transparent opacity={0.06} />
      </Sphere>

      {/* Grid lines */}
      <GridLines />

      {/* Inner atmosphere */}
      <Sphere args={[2.08, 48, 48]}>
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.03} side={THREE.BackSide} />
      </Sphere>

      {/* Outer atmosphere glow */}
      <Sphere args={[2.2, 48, 48]}>
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.02} side={THREE.BackSide} />
      </Sphere>

      {/* Second glow layer */}
      <Sphere args={[2.35, 32, 32]}>
        <meshBasicMaterial color="#2563eb" transparent opacity={0.01} side={THREE.BackSide} />
      </Sphere>

      <AfghanistanMarker />
      <PartnerMarkers />

      {/* Trade route arcs */}
      {tradePartners.map((partner) => (
        <GlowingArc
          key={partner.name}
          from={[AFGHANISTAN_CENTER[1], AFGHANISTAN_CENTER[0]]}
          to={[partner.lat, partner.lng]}
          color={partner.color}
        />
      ))}

      {/* Flowing particles */}
      {tradePartners.map((partner, i) => (
        <FlowingParticle
          key={`particle-${partner.name}`}
          from={[AFGHANISTAN_CENTER[1], AFGHANISTAN_CENTER[0]]}
          to={[partner.lat, partner.lng]}
          color={partner.color}
          speed={0.12 + i * 0.015}
        />
      ))}

      {/* Enhanced lighting */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 3, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-3, -2, -4]} intensity={0.3} color="#93c5fd" />
      <pointLight position={[0, 5, 0]} intensity={0.4} color="#f59e0b" distance={15} />
      <pointLight position={[-5, -3, -5]} intensity={0.25} color="#3b82f6" distance={20} />
    </group>
  );
}

export const GlobeView = () => {
  return (
    <div className="w-full h-full min-h-[500px] relative">
      <Canvas
        camera={{ position: [0, 1.5, 5.5], fov: 42 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <GlobeModel />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={3.5}
          maxDistance={12}
          autoRotate
          autoRotateSpeed={0.4}
          dampingFactor={0.08}
          enableDamping
        />
      </Canvas>

      {/* Stats overlay */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-card/80 backdrop-blur-md rounded-xl border border-border/40 p-3 shadow-xl">
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Trade Partners</p>
          <p className="text-2xl font-bold text-primary">{tradePartners.length}</p>
          <p className="text-[10px] text-muted-foreground">Countries Connected</p>
        </div>
      </div>

      {/* Trade partners legend */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <div className="flex flex-wrap gap-1.5 justify-center">
          {tradePartners.map((p) => (
            <div key={p.name} className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-card/70 backdrop-blur-sm border border-border/30">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
              <span className="text-[8px] text-muted-foreground">{p.name}</span>
              <span className="text-[8px] font-bold" style={{ color: p.color }}>{p.trade}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
