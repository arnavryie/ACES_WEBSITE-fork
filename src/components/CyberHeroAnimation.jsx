import { useRef, useEffect } from 'react';
import { Power } from 'lucide-react';
import * as THREE from 'three';

export default function CyberHeroAnimation({ onExploreClick }) {
  const mountRef = useRef(null);
  const tiltRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- 1. Three.js Scene Setup ---
    const scene = new THREE.Scene();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 32;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent canvas
    container.appendChild(renderer.domElement);

    // --- 2. Balanced Particle Field (Sweet spot between density and clarity) ---
    const particlesCount = 1200;
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 110;
      posArray[i + 1] = (Math.random() - 0.5) * 90;
      posArray[i + 2] = (Math.random() - 0.5) * 60;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Custom square texture for sharp red nodes
    const canvasPoint = document.createElement('canvas');
    canvasPoint.width = 16;
    canvasPoint.height = 16;
    const pctx = canvasPoint.getContext('2d');
    pctx.fillStyle = '#B22B2F';
    pctx.fillRect(2, 2, 12, 12);
    const particleTexture = new THREE.CanvasTexture(canvasPoint);

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.5,
      map: particleTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // --- 3. Dynamic Constellation Network Nodes & Interconnecting Lines ---
    const dynamicNodeCount = 75;
    const dynamicNodes = [];
    for (let i = 0; i < dynamicNodeCount; i++) {
      dynamicNodes.push({
        x: (Math.random() - 0.5) * 70,
        y: (Math.random() - 0.5) * 55,
        z: (Math.random() - 0.5) * 35,
        vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.05,
        vz: (Math.random() - 0.5) * 0.03,
      });
    }

    // Dynamic line segments buffer
    const maxConnections = 150;
    const dynamicLinesGeometry = new THREE.BufferGeometry();
    const dynamicLinePositions = new Float32Array(maxConnections * 6);
    dynamicLinesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(dynamicLinePositions, 3)
    );

    const dynamicLineMaterial = new THREE.LineBasicMaterial({
      color: 0xB22B2F,
      transparent: true,
      opacity: 0.28,
      linewidth: 1,
    });

    const dynamicLinesMesh = new THREE.LineSegments(dynamicLinesGeometry, dynamicLineMaterial);
    scene.add(dynamicLinesMesh);

    // --- 4. Long Geometric Crossing Rays (Balanced ~50 lines for aesthetic web) ---
    const rayCount = 55;
    const raysGeometry = new THREE.BufferGeometry();
    const rayPositions = [];

    for (let i = 0; i < rayCount; i++) {
      const startX = (Math.random() - 0.5) * 70;
      const startY = (Math.random() - 0.5) * 55;
      const startZ = (Math.random() - 0.5) * 40;

      const endX = (Math.random() - 0.5) * 70;
      const endY = (Math.random() - 0.5) * 55;
      const endZ = (Math.random() - 0.5) * 40;

      rayPositions.push(startX, startY, startZ, endX, endY, endZ);
    }

    raysGeometry.setAttribute('position', new THREE.Float32BufferAttribute(rayPositions, 3));

    const rayMaterial = new THREE.LineBasicMaterial({
      color: 0x887775,
      transparent: true,
      opacity: 0.25,
      linewidth: 1,
    });

    const raysMesh = new THREE.LineSegments(raysGeometry, rayMaterial);
    scene.add(raysMesh);

    // --- 5. Floating Cyber Square Cubes ---
    const cubeGroup = new THREE.Group();
    const cubeGeometry = new THREE.BoxGeometry(0.7, 0.7, 0.7);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xB22B2F, transparent: true, opacity: 0.7 });
    const goldCubeMaterial = new THREE.MeshBasicMaterial({ color: 0xD1A550, transparent: true, opacity: 0.8 });

    for (let i = 0; i < 18; i++) {
      const cube = new THREE.Mesh(cubeGeometry, i % 3 === 0 ? goldCubeMaterial : cubeMaterial);
      cube.position.set(
        (Math.random() - 0.5) * 65,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 30
      );
      const s = Math.random() * 0.9 + 0.3;
      cube.scale.set(s, s, 0.1);
      cubeGroup.add(cube);
    }
    scene.add(cubeGroup);

    // --- 6. Mouse Interaction & Animation Loop ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;

      // Update 3D card tilt
      if (tiltRef.current) {
        const xAxis = -mouseY * 10;
        const yAxis = mouseX * 10;
        tiltRef.current.style.transform = `perspective(1000px) rotateX(${xAxis}deg) rotateY(${yAxis}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Slow elegant 3D scene drift
      particlesMesh.rotation.y += 0.0006;
      particlesMesh.rotation.x += 0.0003;

      raysMesh.rotation.y += 0.0006;
      raysMesh.rotation.x += 0.0003;

      cubeGroup.rotation.y += 0.0006;
      cubeGroup.rotation.x += 0.0003;

      // Update dynamic constellation nodes
      let lineIndex = 0;
      const positions = dynamicLinesGeometry.attributes.position.array;

      for (let i = 0; i < dynamicNodes.length; i++) {
        const n1 = dynamicNodes[i];
        n1.x += n1.vx;
        n1.y += n1.vy;
        n1.z += n1.vz;

        if (n1.x < -35 || n1.x > 35) n1.vx *= -1;
        if (n1.y < -28 || n1.y > 28) n1.vy *= -1;
        if (n1.z < -20 || n1.z > 20) n1.vz *= -1;

        for (let j = i + 1; j < dynamicNodes.length; j++) {
          if (lineIndex >= maxConnections * 6) break;
          const n2 = dynamicNodes[j];
          const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y, n1.z - n2.z);

          if (dist < 15) {
            positions[lineIndex++] = n1.x;
            positions[lineIndex++] = n1.y;
            positions[lineIndex++] = n1.z;
            positions[lineIndex++] = n2.x;
            positions[lineIndex++] = n2.y;
            positions[lineIndex++] = n2.z;
          }
        }
      }

      // Zero out remaining lines
      for (let k = lineIndex; k < maxConnections * 6; k++) {
        positions[k] = 0;
      }
      dynamicLinesGeometry.attributes.position.needsUpdate = true;

      // Smooth camera parallax
      targetX = mouseX * 5;
      targetY = -mouseY * 5;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      dynamicLinesGeometry.dispose();
      dynamicLineMaterial.dispose();
      raysGeometry.dispose();
      rayMaterial.dispose();
      cubeGeometry.dispose();
      cubeMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden select-none bg-[#FFF4F2]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(90, 85, 80, 0.12) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(90, 85, 80, 0.12) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    >
      {/* Three.js 3D WebGL Canvas Container */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Ambient Warm Radial Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(209,165,80,0.12) 0%, rgba(178,43,47,0.06) 50%, transparent 80%)',
        }}
      />

      {/* Seamless Bottom Blend Gradient (Smooth transition into 2nd page #who-are-we) */}
      <div
        className="absolute bottom-0 left-0 w-full h-44 sm:h-64 pointer-events-none z-[3]"
        style={{
          background:
            'linear-gradient(to top, #FFF4F2 0%, rgba(255, 244, 242, 0.9) 35%, rgba(255, 244, 242, 0.4) 70%, transparent 100%)',
        }}
      />

      {/* Soft Top Blend Gradient (Smooth transition under navbar) */}
      <div
        className="absolute top-0 left-0 w-full h-24 sm:h-32 pointer-events-none z-[3]"
        style={{
          background: 'linear-gradient(to bottom, #FFF4F2 0%, rgba(255, 244, 242, 0.6) 50%, transparent 100%)',
        }}
      />

      {/* Central 3D Content (Grand, Bold, Glowing Style Matching Screenshot) */}
      <div
        ref={tiltRef}
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto space-y-5 transition-transform duration-100 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Top Technical Chip */}
        <div className="inline-flex items-center gap-2 border border-black/20 bg-[#161211]/90 backdrop-blur-md px-3.5 py-1 rounded-[3px] shadow-[0_0_15px_rgba(209,165,80,0.25)] transition-all hover:scale-105">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            SYS.INIT // ACES_NODE_01
          </span>
        </div>

        {/* Main Grand Glowing Title: ACES */}
        <div className="relative group">
          <h1
            className="font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-tight text-primary uppercase leading-none"
            style={{
              textShadow:
                '0 0 25px rgba(178, 43, 47, 0.45), 0 0 50px rgba(178, 43, 47, 0.2)',
            }}
          >
            ACES
          </h1>
        </div>

        {/* Technical Subtitle Bar */}
        <div className="w-full max-w-3xl mx-auto">
          <div className="inline-block bg-[#1f1918]/90 text-white border-l-4 border-primary px-6 py-2.5 rounded-[4px] shadow-lg backdrop-blur-md">
            <h2 className="font-mono text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.22em] text-[#f2eeeb] leading-relaxed">
              ASSOCIATION OF COMPUTER ENGINEERING STUDENTS
            </h2>
          </div>
        </div>

        {/* Action Button & Live Telemetry Coordinates */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
          {/* INITIALIZE Action Button */}
          <button
            type="button"
            onClick={onExploreClick}
            className="inline-flex items-center gap-2.5 border-2 border-primary bg-primary/10 hover:bg-primary text-primary hover:text-white font-mono font-bold text-xs sm:text-sm tracking-[0.2em] uppercase px-7 py-3 rounded-[4px] transition-all duration-300 shadow-[0_0_20px_rgba(178,43,47,0.25)] hover:shadow-[0_0_35px_rgba(178,43,47,0.65)] cursor-pointer group hover:scale-105 active:scale-95"
          >
            <Power className="w-4 h-4 text-primary group-hover:text-white transition-colors group-hover:rotate-90 duration-300" />
            <span>INITIALIZE</span>
          </button>

          {/* Telemetry Coordinates Badge */}
          <div className="inline-flex flex-col justify-center text-left bg-[#181312]/90 border border-black/20 px-4 py-2 rounded-[4px] font-mono text-[10px] sm:text-xs text-[#b8b0aa] shadow-md backdrop-blur-md">
            <div className="flex items-center gap-1.5">
              <span className="text-[#888]">COORD:</span>
              <span className="text-[#e2ded9] font-semibold">18.6256° N, 73.8122° E</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#888]">STATUS:</span>
              <span className="text-secondary font-bold flex items-center gap-1">
                ONLINE <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
