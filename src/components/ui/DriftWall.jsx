import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, memo } from 'react';
import './DriftWall.css';

const DEFAULT_DEMO_IMAGES = [
  {
    id: "demo-1",
    title: "HackACES Flagship Inauguration",
    category: "Hackathons",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80",
    year: "2025",
    location: "DIT Auditorium"
  },
  {
    id: "demo-2",
    title: "Deep Learning & AI Masterclass",
    category: "Workshops",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80",
    year: "2025",
    location: "Computer Lab 3"
  },
  {
    id: "demo-3",
    title: "ACES Dev Core Code Review",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    year: "2026",
    location: "ACES Tech Hub"
  },
  {
    id: "demo-4",
    title: "Cultural Phoenix Night",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80",
    year: "2025",
    location: "Open Air Theatre"
  },
  {
    id: "demo-5",
    title: "Executive Leadership Summit",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1473649035226-1175be587dfd?w=800&auto=format&fit=crop&q=80",
    year: "2026",
    location: "Conference Room B"
  },
  {
    id: "demo-6",
    title: "Web3 & Smart Contract Bootcamp",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80",
    year: "2025",
    location: "Seminar Hall 1"
  },
  {
    id: "demo-7",
    title: "Hackathon Pitching & Finals",
    category: "Hackathons",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop&q=80",
    year: "2025",
    location: "Main Stage"
  },
  {
    id: "demo-8",
    title: "Robotics & Embedded Systems Expo",
    category: "Workshops",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80",
    year: "2026",
    location: "Robotics Lab"
  },
  {
    id: "demo-9",
    title: "National Coding Championship Grand Finale",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
    year: "2026",
    location: "Central Computing Center"
  },
  {
    id: "demo-10",
    title: "Alumni Network & Career Panel",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80",
    year: "2025",
    location: "DIT Seminar Hall"
  },
  {
    id: "demo-11",
    title: "Annual TechXpo Showcase Day",
    category: "Hackathons",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80",
    year: "2026",
    location: "ACES Exhibition Arena"
  },
  {
    id: "demo-12",
    title: "Cyber Security CTF Challenge",
    category: "Workshops",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    year: "2025",
    location: "Lab 7 & 8"
  }
];

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const trackFactor = (index, variance) => {
  const pseudo = ((index * 0.6180339887 + 0.35) % 1) * 2 - 1;
  return 1 + variance * pseudo;
};

const DriftWall = ({
  items = DEFAULT_DEMO_IMAGES,
  columns = 5,
  rows = 3,
  orientation = 'horizontal',
  tileWidth = 340,
  tileHeight = 190,
  gap = 20,
  radius = 14,
  tilt = 6,
  turn = -3,
  roll = 0,
  perspective = 1200,
  depth = 60,
  speed = 40,
  direction = 'right', // 'right' | 'left' | 'up' | 'down'
  variance = 0.3,
  parallax = 0.3,
  pauseOnHover = true,
  lift = 44,
  dim = 1,
  grayscale = false,
  className = '',
  style,
  onItemClick
}) => {
  const containerRef = useRef(null);
  const planeRef = useRef(null);
  const trackRefs = useRef([]);
  const rafRef = useRef(null);
  const offsetsRef = useRef([]);
  const velocitiesRef = useRef([]);
  const hoveredTrackRef = useRef(-1);
  const wallHoveredRef = useRef(false);
  const pointerRef = useRef({ x: 0, y: 0 });
  const pointerDampedRef = useRef({ x: 0, y: 0 });
  const lastTsRef = useRef(null);
  const [containerDimensions, setContainerDimensions] = useState({ width: 1400, height: 600 });
  const [activeId, setActiveId] = useState(null);
  const activeIdRef = useRef(null);
  const [reduced, setReduced] = useState(false);

  const isHorizontal = orientation === 'horizontal' || direction === 'left' || direction === 'right';
  const trackCount = isHorizontal ? rows : columns;

  const validItems = useMemo(() => {
    return items && items.length > 0 ? items : DEFAULT_DEMO_IMAGES;
  }, [items]);

  useEffect(() => {
    setReduced(prefersReducedMotion());
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = e => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setContainerDimensions({
        width: entry.contentRect.width || 1400,
        height: entry.contentRect.height || 600
      });
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Distribute items across tracks, repeating if necessary so each track has a generous base length
  const trackItems = useMemo(() => {
    const distributed = Array.from({ length: trackCount }, () => []);
    validItems.forEach((item, i) => distributed[i % trackCount].push(item));

    // Ensure each track has at least 6 items for smooth endless looping
    return distributed.map((trackList, t) => {
      let list = trackList.length ? trackList : validItems.slice(0, 1);
      while (list.length < 6) {
        list = [...list, ...list];
      }
      return list;
    });
  }, [validItems, trackCount]);

  const trackMeta = useMemo(() => {
    if (isHorizontal) {
      const unit = tileWidth + gap;
      return trackItems.map(row => {
        const copyWidth = Math.max(unit, row.length * unit);
        // Seamless looping: cover container width + one unitLength with minimum redundant DOM nodes
        const neededWidth = containerDimensions.width * 1.4 + copyWidth;
        const copies = Math.max(2, Math.min(3, Math.ceil(neededWidth / copyWidth)));
        return { unitLength: copyWidth, copies };
      });
    } else {
      const unit = tileHeight + gap;
      return trackItems.map(col => {
        const copyHeight = Math.max(unit, col.length * unit);
        const neededHeight = containerDimensions.height * 1.4 + copyHeight;
        const copies = Math.max(2, Math.min(3, Math.ceil(neededHeight / copyHeight)));
        return { unitLength: copyHeight, copies };
      });
    }
  }, [isHorizontal, trackItems, tileWidth, tileHeight, gap, containerDimensions]);

  const baseVelocities = useMemo(() => {
    // If direction === 'right', images drift from left to right (positive velocity)
    let dirSign = 1;
    if (isHorizontal) {
      dirSign = direction === 'left' ? -1 : 1;
    } else {
      dirSign = direction === 'up' ? -1 : 1;
    }

    return trackItems.map((_, i) => {
      return speed * trackFactor(i, variance) * dirSign;
    });
  }, [isHorizontal, trackItems, speed, direction, variance]);

  useEffect(() => {
    offsetsRef.current = trackMeta.map((meta, i) => meta.unitLength * ((i * 0.33) % 1));
    velocitiesRef.current = trackItems.map(() => 0);
  }, [trackMeta, trackItems]);

  const applyPlaneTransform = useCallback(
    (px, py) => {
      const plane = planeRef.current;
      if (!plane) return;
      plane.style.transform =
        `translate(-50%, -50%) scale(1.0) ` +
        `rotateX(${tilt + py}deg) rotateY(${turn + px}deg) rotateZ(${roll}deg) ` +
        `translateZ(${-depth}px)`;
    },
    [tilt, turn, roll, depth]
  );

  useEffect(() => {
    const animate = ts => {
      if (lastTsRef.current === null) lastTsRef.current = ts;
      const dt = Math.min(0.05, Math.max(0, ts - lastTsRef.current) / 1000);
      lastTsRef.current = ts;
      const maxTilt = parallax * 6;
      const targetX = pointerRef.current.x * maxTilt;
      const targetY = -pointerRef.current.y * maxTilt;
      const damp = 1 - Math.exp(-dt / 0.12);
      pointerDampedRef.current.x += (targetX - pointerDampedRef.current.x) * damp;
      pointerDampedRef.current.y += (targetY - pointerDampedRef.current.y) * damp;
      applyPlaneTransform(pointerDampedRef.current.x, pointerDampedRef.current.y);

      if (!reduced) {
        for (let i = 0; i < trackRefs.current.length; i++) {
          const meta = trackMeta[i];
          if (!meta) continue;
          const paused = wallHoveredRef.current && pauseOnHover;
          const factor = paused || hoveredTrackRef.current === i ? 0 : 1;
          const target = baseVelocities[i] * factor;
          const ease = 1 - Math.exp(-dt / (target === 0 ? 0.16 : 0.28));
          velocitiesRef.current[i] += (target - velocitiesRef.current[i]) * ease;

          let next = (offsetsRef.current[i] ?? 0) + velocitiesRef.current[i] * dt;
          next = ((next % meta.unitLength) + meta.unitLength) % meta.unitLength;
          offsetsRef.current[i] = next;

          const el = trackRefs.current[i];
          if (el) {
            if (isHorizontal) {
              el.style.transform = `translate3d(${next - meta.unitLength}px, 0, 0)`;
            } else {
              el.style.transform = `translate3d(0, ${next - meta.unitLength}px, 0)`;
            }
          }
        }
      } else {
        for (let i = 0; i < trackRefs.current.length; i++) {
          const el = trackRefs.current[i];
          const meta = trackMeta[i];
          if (el && meta) {
            const offset = (offsetsRef.current[i] ?? 0) - meta.unitLength;
            if (isHorizontal) {
              el.style.transform = `translate3d(${offset}px, 0, 0)`;
            } else {
              el.style.transform = `translate3d(0, ${offset}px, 0)`;
            }
          }
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
    };
  }, [isHorizontal, baseVelocities, trackMeta, pauseOnHover, parallax, reduced, applyPlaneTransform]);

  const activate = useCallback((id, index) => {
    activeIdRef.current = id;
    hoveredTrackRef.current = index;
    setActiveId(id);
  }, []);

  const release = useCallback(() => {
    activeIdRef.current = null;
    hoveredTrackRef.current = -1;
    setActiveId(null);
  }, []);

  const handlePointerMove = useCallback(
    e => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      if (parallax > 0 && !reduced) {
        pointerRef.current = {
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5
        };
      }
      const hit = document.elementFromPoint(e.clientX, e.clientY);
      const tile = hit && hit.closest ? hit.closest('[data-tile-id]') : null;
      if (!tile) return;
      const id = tile.dataset.tileId;
      if (id === activeIdRef.current) return;
      activeIdRef.current = id;
      hoveredTrackRef.current = Number(tile.dataset.track);
      setActiveId(id);
    },
    [parallax, reduced]
  );

  const handlePointerLeaveWall = useCallback(() => {
    wallHoveredRef.current = false;
    pointerRef.current = { x: 0, y: 0 };
    release();
  }, [release]);

  const cssVars = useMemo(
    () => ({
      '--dw-tile-w': `${tileWidth}px`,
      '--dw-tile-h': `${tileHeight}px`,
      '--dw-gap': `${gap}px`,
      '--dw-radius': `${radius}px`,
      '--dw-perspective': `${perspective}px`,
      '--dw-lift': `${lift}px`,
      '--dw-dim': dim,
      '--dw-gray': grayscale ? 1 : 0,
      ...style
    }),
    [tileWidth, tileHeight, gap, radius, perspective, lift, dim, grayscale, style]
  );

  const rootClass = [
    'drift-wall',
    isHorizontal ? 'drift-wall--horizontal' : 'drift-wall--vertical',
    reduced ? 'drift-wall--reduced' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={containerRef}
      className={rootClass}
      style={cssVars}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => {
        wallHoveredRef.current = true;
      }}
      onPointerLeave={handlePointerLeaveWall}
      role="group"
      aria-label="Horizontal drifting gallery"
    >
      <div ref={planeRef} className="drift-wall__plane">
        {trackItems.map((trackList, t) => {
          const meta = trackMeta[t];
          const copies = Array.from({ length: meta?.copies || 2 });
          return (
            <div className={isHorizontal ? 'drift-wall__row' : 'drift-wall__col'} key={`track-${t}`}>
              <div className="drift-wall__track" ref={el => (trackRefs.current[t] = el)}>
                {copies.map((_, copyIndex) =>
                  trackList.map((item, itemIndex) => (
                    <DriftTile
                      key={`${t}-${copyIndex}-${itemIndex}`}
                      item={item}
                      id={`${t}-${copyIndex}-${itemIndex}`}
                      trackIndex={t}
                      itemIndex={itemIndex}
                      copyIndex={copyIndex}
                      activeId={activeId}
                      activate={activate}
                      release={release}
                      onItemClick={onItemClick}
                    />
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const DriftTile = memo(function DriftTile({
  item,
  id,
  trackIndex,
  itemIndex,
  copyIndex,
  activeId,
  activate,
  release,
  onItemClick
}) {
  const [loaded, setLoaded] = useState(false);
  const cat = item.category || 'Event';
  const title = item.title || 'ACES Moment';

  // PRIORITY: thumbWebp -> thumb -> imageWebp -> image -> url
  const webpSrc = item.thumbWebp;
  const fallbackSrc = item.thumb || item.image || item.url;
  // First copy's first 8 items per row are in initial viewport on page load
  const isPriority = copyIndex === 0 && itemIndex < 8;

  const inner = (
    <span className="drift-wall__inner">
      {/* Sleek Skeleton Pulse while image downloads */}
      {!loaded && <span className="drift-wall__skeleton" />}

      {/* Picture tag with WebP + fallback */}
      <picture className="w-full h-full">
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <img
          src={fallbackSrc}
          alt={title}
          loading={isPriority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={isPriority ? "high" : "low"}
          draggable={false}
          className={`drift-wall__img ${loaded ? 'is-loaded' : ''}`}
          onLoad={() => setLoaded(true)}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </picture>

      {/* Fallback Graphic Card if Image fails to load */}
      <span className="drift-wall__fallback-card">
        <span className="drift-wall__fallback-icon">📸</span>
        <span className="drift-wall__fallback-cat">{cat}</span>
        <span className="drift-wall__fallback-title">{title}</span>
      </span>

      {/* Bottom Title Bar Overlay */}
      <span className="drift-wall__badge-bar">
        <span className="drift-wall__badge-tag">{cat}</span>
        <span className="drift-wall__badge-title">{title}</span>
      </span>
    </span>
  );

  const commonProps = {
    className: `drift-wall__tile${activeId === id ? ' is-active' : ''}`,
    'data-tile-id': id,
    'data-track': trackIndex,
    onFocus: () => activate(id, trackIndex),
    onBlur: release,
    onClick: () => {
      if (onItemClick) {
        onItemClick(item, itemIndex);
      }
    }
  };

  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer noopener" {...commonProps}>
        {inner}
      </a>
    );
  }

  return (
    <div tabIndex={0} role="button" aria-label={title} {...commonProps}>
      {inner}
    </div>
  );
});

export default DriftWall;
