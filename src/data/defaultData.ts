import { ProfileData, GameProject, ExperienceItem, EducationItem, SkillCategory } from '../types/portfolio';

export const initialProfile: ProfileData = {
  name: 'Muhammad Saqib Raza',
  title: 'Senior Unity / Game Developer & XR Architect (Desktop · AR · VR · MR)',
  titleUrdu: 'سینئر یونٹی اور گیم ڈیولپر / ایکس آر آرکیٹیکٹ (ڈیسک ٹاپ، اے آر، وی آر، ایم آر)',
  tagline: '7+ years architecting high-octane 3D gameplay, immersive XR (Desktop, AR, VR, MR), and locked 60/90 FPS titles across Google Play Store, App Store & VR Headsets.',
  bio: 'Accomplished Senior Unity / Game Developer and Game Producer with over 7 years of hands-on professional experience delivering top-tier games and immersive XR simulations across Desktop, AR, VR, MR, Android, iOS, and WebGL. Proven track record leading multi-disciplinary teams (Game Producer for ImmersAnatomy at Simfusion), authoring educational PhD research AR systems (MathQuest), and engineering high-impact commercial titles across Shooting, Simulation, Adventure, and Hyper-Casual genres. Currently pursuing MS in Computer Games Development from Air University, Islamabad.',
  bioUrdu: 'السلام علیکم! میں محمد ثاقب رضا ہوں — سینئر یونٹی، گیم ڈیولپر اور ایکس آر آرکیٹیکٹ۔ میرے پاس ڈیسک ٹاپ، اے آر (AR)، وی آر (VR)، ایم آر (MR) اور موبائل پلیٹ فارمز پر 7 سال سے زائد کا پیشہ ورانہ تجربہ ہے۔ میں نے سمفیوژن کے تحت ImmersAnatomy جیسے کثیر پلیٹ فارم میڈیکل پروجیکٹس اور پی ایچ ڈی ریسرچ اے آر ایپس کو کامیابی سے پروڈیوس اور ڈویلپ کیا ہے۔',
  email: 'saqibraza182@gmail.com',
  phone: '+92 0302 8908664',
  location: 'Islamabad, Pakistan',
  availability: 'Available for Senior Roles, Technical Lead, XR Architect & Studio Contracts',
  yearsExperience: '7+',
  gamesShipped: '20+',
  fpsTarget: '60/90 FPS',
  downloadsReach: '15M+',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com/in/saqibraztoor',
  portraitUrl: '/assets/aistudio/image_db232aad.png',
  currentPursuit: 'MS in Computer Games Development (Air University, Islamabad)',
};

export const initialProjects: GameProject[] = [
  {
    id: 'immers-anatomy-xr',
    title: 'ImmersAnatomy: Complete Human Anatomy XR',
    genre: 'Medical XR Simulation (AR, VR, MR, Desktop & Mobile)',
    category: 'AR, VR & XR',
    year: '2024–2025',
    studio: 'Simfusion',
    role: 'Game Producer & Lead XR Architect',
    platforms: ['AR', 'VR (Meta Quest / SteamVR)', 'Desktop (PC/Mac)', 'Android', 'iOS', 'Tablet'],
    summary: 'Comprehensive multi-platform human anatomy simulation allowing medical students and surgeons to dissect, inspect, and interact with photorealistic 3D anatomical systems across headsets, desktop workstations, and mobile devices.',
    description: 'Served as Game Producer and Lead XR Architect at Simfusion. Led the engineering of cross-platform spatial interaction frameworks, multi-user synchronous organ inspection, custom volumetric slicing shaders, and AR plane-anchored anatomy models with seamless cloud state sync.',
    imageUrl: '/src/assets/images/immers_anatomy_xr_1792694285288.jpg',
    technologies: ['Unity 3D', 'XR Interaction Toolkit', 'AR Foundation (ARCore/ARKit)', 'OpenXR', 'C#', 'Volumetric Shaders', 'Desktop Optimization', 'Cloud Sync'],
    playStoreMetrics: {
      rating: '4.9 ★',
      downloads: 'Cross-Platform Medical Institutional Adoption',
      performanceTarget: 'Locked 90 FPS on VR / 60 FPS Mobile',
      buildSize: 'Modular Asset Delivery (Addressables)',
    },
    featured: true,
    caseStudy: {
      challenge: 'Rendering dense 400,000+ polygon anatomical meshes with real-time multi-layer organ dissection across both low-end mobile AR tablets and standalone VR headsets without frame stutter.',
      solution: 'Architected a custom compute-based mesh slicing algorithm paired with Level-of-Detail (LOD) cascades, GPU-instanced skeletal structures, and strict memory budgets tailored per platform target.',
      engineArchitecture: [
        'Multi-Platform Core: Unified C# codebase powering VR, AR mobile, Tablet, and Desktop builds',
        'Volumetric Dissection: Real-time cap geometry generation for sliced organ cross-sections',
        'Spatial Tracking: Hand tracking gestures in VR and surface-anchoring plane detection in AR',
        'Production Leadership: Coordinated cross-functional teams of 3D medical artists, doctors, and developers'
      ],
      optimizationMetrics: [
        'Solid 90 FPS locked on Meta Quest 2/3 and 60 FPS on iOS/Android tablets',
        'Zero vertex flickering during real-time multi-angle cross-sectional slicing',
        'Adopted across medical universities and clinical training simulations'
      ]
    }
  },
  {
    id: 'mathquest-ar-research',
    title: 'MathQuest AR: Spatial Geometry Lab',
    genre: 'Augmented Reality Educational Application (PhD Research Project)',
    category: 'AR, VR & XR',
    year: '2024–2025',
    studio: 'PhD Research Collaboration / Academic Initiative',
    role: 'Lead AR Engineer & Technical Researcher',
    platforms: ['Android (ARCore)', 'iOS (ARKit)', 'Tablet'],
    summary: 'Augmented reality educational gamified ecosystem developed for a PhD research initiative, transforming abstract mathematical geometry, spatial vectors, and 3D polyhedra into interactive classroom holograms.',
    description: 'Designed spatial math manipulation mechanics enabling students to touch, rotate, dissect, and assemble 3D solids in physical space. Implemented automated interaction telemetry logging for empirical learning retention analysis and pedagogical verification.',
    imageUrl: '/src/assets/images/mathquest_ar_edu_1792694288645.jpg',
    technologies: ['Unity 3D', 'AR Foundation', 'ARCore', 'ARKit', 'C#', 'Mathematical Visualizer', 'Data Telemetry'],
    playStoreMetrics: {
      rating: 'Research Grade',
      downloads: 'PhD Validation Deployment (500+ Students Tested)',
      performanceTarget: 'Smooth 60 FPS AR Tracking',
      buildSize: 'Sub-65 MB Lightweight Package',
    },
    featured: true,
    caseStudy: {
      challenge: 'Maintaining jitter-free spatial tracking of complex polyhedra and math text formulas under varied classroom lighting conditions and low-contrast school desks.',
      solution: 'Employed hybrid feature-point tracking with complementary sensor fusion, automated surface plane filtering, and dynamic contrast adaptive outline shaders.',
      engineArchitecture: [
        'AR Surface Engine: Dynamic plane detection with ambient lighting compensation',
        'Formula Engine: Real-time LaTeX-to-3D mesh procedural formula generation',
        'Interactive Gestures: Dual-finger pinch-to-scale, rotate, and exploded-view breakdown',
        'Pedagogical Analytics: Millisecond-level interaction duration and quiz accuracy logging'
      ],
      optimizationMetrics: [
        '+44% increase in student geometric spatial comprehension during trial testing',
        'Zero tracking drift across standard classroom desk test sessions',
        'Documented and cited in upcoming academic research publications'
      ]
    }
  },
  {
    id: 'vr-tactical-training',
    title: 'Tactical VR Combat & Marksmanship Simulator',
    genre: '6-DOF Virtual Reality Tactical Combat & Range Training',
    category: 'AR, VR & XR',
    year: '2023–2024',
    studio: 'Tactical Sim Labs / Ideofuzion',
    role: 'Senior VR Game Developer',
    platforms: ['Meta Quest 2/3/Pro', 'SteamVR', 'PC VR (Desktop)'],
    summary: 'High-fidelity tactical marksmanship and situational combat simulator with 6-DOF physics-based firearm manipulation, haptic feedback, and dynamic range target drills.',
    description: 'Architected two-handed weapon stabilization, physical slide racking, magazine insertion physics, and spatial recoil simulation. Built responsive holographic target courses with millimeter-accurate hit tracking and low-latency audio spatials.',
    imageUrl: '/src/assets/images/vr_shooting_training_1792694285727.jpg',
    technologies: ['Unity 3D', 'OpenXR', 'Meta XR Core SDK', 'PhysX 6-DOF', 'Custom Haptics', 'Spatial Audio (HRTF)'],
    playStoreMetrics: {
      rating: 'Military & Enthusiast Grade',
      performanceTarget: 'Rock-solid 90 FPS (Meta Quest native)',
      buildSize: 'Optimized Standalone Package',
    },
    featured: true,
    caseStudy: {
      challenge: 'Preventing VR motion sickness and micro-stutters during rapid multi-directional weapon reloads and room-scale tracking locomotion.',
      solution: 'Implemented aggressive single-pass instanced stereo rendering, fixed foveated rendering profiles, and custom kinematic hand collision filters.',
      engineArchitecture: [
        '6-DOF Physics Rig: Realistic magazine release, slide pull, and physical safety switches',
        'Spatial HRTF Audio: Distance-attenuated supersonic bullet cracks and indoor acoustics',
        'Foveated Rendering: GPU shading concentration at focal eye centers',
        'Drill Analytics: Split-second target acquisition, shot grouping, and reload timing telemetry'
      ],
      optimizationMetrics: [
        'Sub-12ms motion-to-photon latency achieved on standalone Quest 2 & 3',
        'Constant 90 FPS locked with zero dropped frames during smoke/particle bursts',
        'High realism score given by veteran marksmanship instructors'
      ]
    }
  },
  {
    id: 'sniper-tactical-ops',
    title: 'Sniper Combat 3D: Tactical Ops',
    genre: 'First-Person Tactical Shooter (Play Store)',
    category: 'Shooting & Action',
    year: '2024',
    studio: 'Geo Tech / Ideofuzion',
    role: 'Lead Gameplay Engineer',
    platforms: ['Google Play Store', 'iOS App Store'],
    summary: 'High-stakes urban sniper combat game featuring realistic ballistic drop, wind deflection physics, thermal optic shaders, and intelligent patrol AI.',
    description: 'Spearheaded core gameplay engineering and sniper weapon mechanics in Unity 3D. Designed proprietary ballistic trajectory calculations, dynamic kill-cam slow motion, and custom shader graph scope zoom filters without frame drops on mid-range Android devices.',
    imageUrl: '/src/assets/images/game_tactical_sniper_1792693207771.jpg',
    technologies: ['Unity 3D', 'C#', 'Shader Graph', 'NavMesh AI', 'Unity Profiler', 'AdMob', 'In-App Purchases'],
    playStoreMetrics: {
      rating: '4.6 ★',
      downloads: '5,000,000+',
      performanceTarget: 'Solid 60 FPS on Snapdragon 680+',
      buildSize: 'Sub-85 MB Optimized',
    },
    featured: true,
    caseStudy: {
      challenge: 'High-polygon urban environments and multiple enemy ragdolls caused GPU draw calls to exceed 400, resulting in thermal throttling and frame drops on low-end mobile devices.',
      solution: 'Re-architected render pipeline with static batching, occlusion culling masks, custom unlit baked lightmaps, and custom object pooling for bullet impacts and enemy ragdoll states.',
      engineArchitecture: [
        'Ballistics Engine: Custom quadratic raycasting model accounting for gravity drop and muzzle velocity',
        'State Machine: Hierarchical AI patrol, alert, cover-seeking, and search state trees',
        'Shader Optics: Single-pass render texture scope simulation with chromatic aberration',
        'Monetization: Interstitial mediation and rewarded video integration yielding high eCPM'
      ],
      optimizationMetrics: [
        'Reduced draw calls from 420 down to 75 per frame',
        'Locked 60 FPS maintained across 94% of supported Android devices',
        'Achieved 5M+ organic installs on Google Play Store'
      ]
    }
  },
  {
    id: 'cricket-ai-commentary',
    title: 'Cricket Clash: AI Stadium Edition',
    genre: 'Next-Gen Sports Simulation & AI Audio',
    category: 'Simulation & Sports',
    year: '2024–2025',
    studio: 'PixelPaddle Studio / Air University Research',
    role: 'Physics & Audio Systems Architect',
    platforms: ['Google Play Store', 'WebGL', 'Desktop'],
    summary: 'Immersive 3D cricket simulation featuring AI-driven dynamic commentary synchronized with in-game ball physics and packed floodlit stadiums.',
    description: 'Architected the ball-bat collision physics and integrated an LLM commentary engine with pre-generated TTS audio cue triggers. Engineered realistic bowler animation blends, fielder trajectory prediction, and procedural crowd atmosphere loops.',
    imageUrl: '/src/assets/images/game_cricket_stadium_1792693209044.jpg',
    technologies: ['Unity 3D', 'C#', 'LLM-in-Unity', 'Custom Physics', 'Audio Mixer', 'DOTween', 'Firebase'],
    playStoreMetrics: {
      rating: '4.8 ★',
      downloads: '1,200,000+',
      performanceTarget: 'Smooth 60 FPS gameplay',
      buildSize: '110 MB HD Textures',
    },
    featured: true,
    caseStudy: {
      challenge: 'Syncing real-time audio commentary with sudden dynamic match events (wickets, edges, sixes) without awkward pauses or repetitive sound queues.',
      solution: 'Developed an event-driven commentary dispatcher using queued audio buffers and pitch-modulated crowd sound layers that react dynamically to field states.',
      engineArchitecture: [
        'Bat-Ball Physics: Continuous collision detection with sweet-spot rebound elasticity tensors',
        'AI Commentary Engine: Context-aware event classifier dispatching audio priority stems',
        'Animation Controller: Multi-layer Mecanim state machines with inverse kinematics for bat grips',
        'Post-Match Generator: Automated game summary reports highlighting player milestones'
      ],
      optimizationMetrics: [
        'Zero collision pass-through bugs even at 150 km/h delivery speeds',
        'Average user play session time increased by +34%',
        'Over 1.2M matches played across regional tournaments'
      ]
    }
  },
  {
    id: 'apex-horizon-drift',
    title: 'Apex Horizon: Extreme Driving Sim',
    genre: 'Open-World Highway Vehicle Simulation',
    category: 'Simulation & Sports',
    year: '2023–2024',
    studio: 'Codora / Plasma IT Solutions',
    role: 'Lead Vehicle Dynamics Programmer',
    platforms: ['Google Play Store', 'iOS', 'Android TV', 'Desktop'],
    summary: 'High-octane highway drifting and vehicle physics simulator featuring real-time reflections, custom transmission gears, and scenic coastal tracks.',
    description: 'Designed realistic vehicle dynamics with custom wheel collider slip curves, turbo boost nitro VFX, and responsive steering UI with tilt, wheel, and button controls. Integrated analytics and personalized car customization tuning garage.',
    imageUrl: '/src/assets/images/game_driving_sim_1792693209346.jpg',
    technologies: ['Unity URP', 'C#', 'Custom Wheel Physics', 'Particle Systems', 'Post-Processing', 'AppLovin'],
    playStoreMetrics: {
      rating: '4.5 ★',
      downloads: '3,800,000+',
      performanceTarget: '60 FPS with HDR Glow',
      buildSize: '95 MB',
    },
    featured: true,
    caseStudy: {
      challenge: 'Simulating high-speed vehicle drifting without standard Unity wheel collider instability or flipping glitches on asphalt transitions.',
      solution: 'Constructed custom sub-stepped physics model calculating longitudinal and lateral tire friction forces with dynamic downforce calculation.',
      engineArchitecture: [
        'Vehicle Physics: Sub-stepped PhysX wheel calculations for smooth drift transitions',
        'Shader & Post: Optimized Bloom, Motion Blur, and real-time planar reflection probes',
        'Level Streaming: Addressables-based chunk streaming for infinite coastal highway roads',
        'Audio Design: Granular engine RPM sound synthesis and tire screech audio'
      ],
      optimizationMetrics: [
        'Memory footprint capped under 350 MB RAM on mobile devices',
        'Maintained steady 60 FPS with HDR bloom effects enabled',
        '3.8M+ downloads with 4.5+ average Play Store rating'
      ]
    }
  },
  {
    id: 'luna-playable-pipeline',
    title: 'Playable Ad Pipeline & Dungeon Runner',
    genre: '3D Action Platformer & Interactive Playable Ads',
    category: 'Playable Ads & Casual',
    year: '2024–2025',
    studio: 'Ideofuzion (Pvt.) Ltd.',
    role: 'Playable Ads Lead Engineer',
    platforms: ['WebGL', 'Luna Playworks', 'AppLovin', 'Mintegral', 'Google Ads'],
    summary: 'Automated ultra-compact 3D interactive playable ads pipeline achieving strict sub-5MB build caps with instant click-to-play conversion.',
    description: 'Engineered complete pipeline using Unity + Luna Playworks SDK for major ad networks. Resolved tricky WebGL color space inconsistencies, drag input latencies, and custom packaging scripts to achieve viral retention metrics.',
    imageUrl: '/src/assets/images/game_hyper_action_1792693208927.jpg',
    technologies: ['Unity WebGL', 'Luna Playworks SDK', 'C# / TypeScript', 'Node.js Packaging', 'Texture Compression'],
    playStoreMetrics: {
      performanceTarget: 'Instant <1.5s WebGL Boot',
      buildSize: 'Strict Sub-5 MB Cap',
    },
    featured: true,
    caseStudy: {
      challenge: 'Ad networks strictly reject playable ad files larger than 5MB, while complex 3D character rigs and animations usually consume 15MB+ uncompressed.',
      solution: 'Developed custom ASTC/ETC2 texture compression workflows, automated Node.js bundling scripts, and mesh simplification algorithms.',
      engineArchitecture: [
        'Luna Pipeline: Strict Luna Playworks SDK integration and automated packaging',
        'Asset Compression: Crunch compression on normal maps and audio downsampling to 22kHz mono',
        'Input Layer: High-responsiveness touch/drag gestures tailored for one-thumb ad engagement',
        'Tracking Hooks: Real-time install attribution triggers sent to ad network endpoints'
      ],
      optimizationMetrics: [
        '100% adherence to 5MB file size limit across 30+ campaign variations',
        '+42% increase in Click-Through Rate (CTR) compared to video ads',
        'Eliminated cross-browser WebGL shader artifacts'
      ]
    }
  },
  {
    id: 'pgdc-2025',
    title: 'PGDC 2025 – Pakistan Game Developers Conference',
    genre: 'Industry Leadership, Ideathon & Showcase',
    category: 'R&D & Conferences',
    year: 'June 2025',
    studio: 'Air University, Islamabad',
    role: 'Organizing Committee & Technical Mentor',
    platforms: ['Air University Dept. of Computer Games Development'],
    summary: 'Active organizer and contributor to the premier game development conference in Pakistan, featuring GameJams, prototype showcases, and student mentoring.',
    description: 'Collaborated with the Department of Computer Games Development to organize the 2nd PGDC event featuring Gaming Ideathon, Prototype Showcase, GameJam, Tekken 8 Tournament, and industry career fairs.',
    imageUrl: '/assets/aistudio/image_db232aad.png',
    technologies: ['Conference Leadership', 'GameJam Mentorship', 'FYP Evaluation', 'Industry Panels'],
    featured: false,
    caseStudy: {
      challenge: 'Bridging the gap between academic game programming students and commercial studio publishing standards in Pakistan.',
      solution: 'Organized hands-on technical workshops, FYP demo showcases, and live studio evaluations with leading Pakistani gaming studios.',
      engineArchitecture: [
        'Ideathon Coordination: Evaluated 40+ innovative indie game pitches',
        'Workshops: Conducted sessions on Unity mobile optimization and playable ads',
        'Showcase: Curated student portfolio displays and publisher pitch sessions'
      ],
      optimizationMetrics: [
        '500+ attendees from industry studios and universities',
        '15+ studio recruiters actively scouting engineering talent',
        'High impact visibility for Pakistani game development ecosystem'
      ]
    }
  }
];

export const initialExperiences: ExperienceItem[] = [
  {
    id: 'exp-simfusion',
    role: 'Game Producer & Lead XR Architect (ImmersAnatomy)',
    company: 'Simfusion',
    location: 'Islamabad, Pakistan',
    period: '2024 — Present',
    employmentType: 'Contract / Project Leadership',
    description: 'Spearheaded production and engineering of "ImmersAnatomy" — a complete cross-platform human anatomy simulation suite deployed across AR, VR, Desktop (PC/Mac), Android, iOS, and Tablets.',
    achievements: [
      'Orchestrated multi-disciplinary squads (3D medical modelers, anatomists, and programmers) to ship unified cross-platform XR apps.',
      'Designed 90 FPS VR hand-tracking interactions (Meta Quest) and surface-detecting AR mobile inspection frameworks.',
      'Implemented custom GPU volumetric cutting shaders enabling microvascular cross-sectional slicing without polygon tearing.'
    ],
    skills: ['Game Production', 'Unity XR Toolkit', 'AR Foundation', 'OpenXR', 'Volumetric Shaders', 'Desktop / Mobile Deployment']
  },
  {
    id: 'exp-1',
    role: 'Unity Developer',
    company: 'Ideofuzion (Pvt.) Ltd.',
    location: 'Islamabad, Pakistan',
    period: 'Feb 2024 – Present',
    employmentType: 'Hybrid',
    description: 'Leading Unity-based game architectures across iOS, Android, and WebGL, focusing on gameplay mechanics, AI behaviors, and playable ads pipelines.',
    achievements: [
      'Architected robust game systems including core gameplay mechanics, AI behaviors, and modular level design frameworks.',
      'Implemented full playable ad builds using Luna Playworks SDK for tier-1 ad networks (AppLovin, Mintegral, Google Ads).',
      'Engineered custom asset packaging scripts enforcing strict 5MB build caps for WebGL ad networks.',
      'Mentored junior game developers and conducted rigorous code reviews to maintain architecture consistency.'
    ],
    skills: ['Unity 3D', 'C#', 'Luna Playworks', 'WebGL', 'AI Behaviors', 'Cross-Platform CI/CD']
  },
  {
    id: 'exp-2',
    role: 'Unity Developer',
    company: 'Codora',
    location: 'Islamabad, Pakistan',
    period: 'Aug 2022 – Jan 2024',
    employmentType: 'On-site · Full-time',
    description: 'Delivered multiple commercial game titles from initial concept prototype through store release using Unity and C#.',
    achievements: [
      'Designed and coded core gameplay systems, dynamic physics interactions, and character animation pipelines.',
      'Integrated third-party SDKs for analytics, monetization (AdMob, AppLovin, IAP), and social features.',
      'Conducted deep performance profiling using Unity Profiler and Frame Debugger to ensure stable 60 FPS gameplay on target mobile devices.',
      'Collaborated closely in Agile/Scrum sprints, daily standups, and milestone release planning.'
    ],
    skills: ['Unity Engine', 'C# Scripting', 'Physics Systems', 'Profiling & Optimization', 'SDK Integration']
  },
  {
    id: 'exp-3',
    role: 'Unity Developer',
    company: 'Plasma IT Solutions',
    location: 'Islamabad, Pakistan',
    period: 'May 2021 – Aug 2022',
    employmentType: 'On-site · Full-time',
    description: 'Engineered simulation and adventure genre titles with complex state machines and event-driven architectures.',
    achievements: [
      'Built simulation and adventure games featuring intricate event-driven architectures and finite state machines.',
      'Developed custom Unity editor tools, inspectors, and plugins to streamline level design workflows for content creators.',
      'Created custom Shader Graph nodes and particle systems for striking environmental visual effects.',
      'Partnered with QA teams to systematically identify, reproduce, and eliminate critical edge-case bugs before store releases.'
    ],
    skills: ['Simulation Mechanics', 'Custom Editor Tools', 'Shader Graph', 'Particle Systems', 'Event-Driven Systems']
  },
  {
    id: 'exp-4',
    role: 'Unity Developer',
    company: 'Geo Tech',
    location: 'Islamabad, Pakistan',
    period: 'Dec 2018 – Apr 2021',
    employmentType: 'On-site · Full-time',
    description: 'Delivered shooting and arcade genre mobile titles with responsive controls, weapon upgrades, and level progression systems.',
    achievements: [
      'Delivered popular shooting and arcade genre games with ultra-responsive mobile controls and engaging level progression.',
      'Managed 3D/2D asset pipelines, optimizing high-resolution textures, models, and audio for seamless mobile execution.',
      'Integrated Unity Ads and Google AdMob monetization strategies, increasing studio ad revenue through optimized placement timing.',
      'Translated game design documents into fully implemented, tested gameplay features.'
    ],
    skills: ['Shooting Game Mechanics', 'Weapon Systems', 'Asset Pipeline Optimization', 'AdMob / Unity Ads']
  },
  {
    id: 'exp-5',
    role: 'Unity Developer',
    company: 'Aspire Soft Tech',
    location: 'Islamabad, Pakistan',
    period: 'Apr 2017 – Oct 2018',
    employmentType: 'On-site · Full-time',
    description: 'Developed casual and hyper-casual game prototypes with rapid iteration cycles for Google Play Store and Apple App Store.',
    achievements: [
      'Rapidly prototyped casual and hyper-casual games, testing mechanics with quick turnaround sprints.',
      'Implemented core physics mechanics, multi-touch input systems, and mobile-optimized UI layouts.',
      'Assisted in publishing and store asset preparation for Google Play Store and Apple App Store.',
      'Mastered foundational Unity scripting, physics collision matrices, and Mecanim animation controllers.'
    ],
    skills: ['Casual Games', 'Touch Input UI', 'Prototyping', 'Store Publishing']
  }
];

export const initialEducation: EducationItem[] = [
  {
    degree: 'Master of Science – Computer Games Development',
    institution: 'Air University, Islamabad',
    period: 'Aug 2023 – Apr 2025',
    cgpa: 'CGPA: 3.28 / 4.0',
    details: 'Advanced XR & VR Architecture, AI in Games, Shaders & Rendering Engines, Cross-Platform Optimization, PGDC 2025 Leadership'
  },
  {
    degree: 'Bachelor of Science – Computer Science',
    institution: 'Center of Information and Technology',
    period: 'Aug 2012 – Dec 2016',
    cgpa: 'CGPA: 3.41 / 4.0 (Grade A)',
    details: 'Object-Oriented Programming, Data Structures, Algorithms, Computer Graphics, Software Engineering'
  }
];

export const initialSkillCategories: SkillCategory[] = [
  {
    title: 'AR, VR, MR & Desktop XR Ecosystem',
    iconName: 'Glasses',
    skills: [
      { name: 'Unity XR Interaction Toolkit', level: 'Expert', experience: '5+ Years' },
      { name: 'AR Foundation (ARCore & ARKit)', level: 'Expert', experience: '4+ Years' },
      { name: 'OpenXR & Meta Quest SDK', level: 'Expert', experience: '4+ Years' },
      { name: 'Desktop (Windows / macOS) Builds', level: 'Expert', experience: '7+ Years' },
      { name: 'Hand Tracking & Spatial Anchors', level: 'Advanced', experience: '3+ Years' },
      { name: 'SteamVR & Room-Scale Locomotion', level: 'Advanced', experience: '4+ Years' }
    ]
  },
  {
    title: 'Game Engines & Core Architecture',
    iconName: 'Gamepad',
    skills: [
      { name: 'Unity 3D / 2D Engine', level: 'Expert', experience: '7+ Years' },
      { name: 'C# (Game Scripting & Systems)', level: 'Expert', experience: '7+ Years' },
      { name: 'Unreal Engine', level: 'Familiar', experience: '2 Years' },
      { name: 'C++ & JavaScript', level: 'Proficient', experience: '4+ Years' },
      { name: 'Game Producer & Team Mentorship', level: 'Expert', experience: '4+ Years' },
      { name: 'State Machines & Event Buses', level: 'Expert', experience: '6+ Years' }
    ]
  },
  {
    title: 'Optimization, Graphics & Toolchains',
    iconName: 'Cpu',
    skills: [
      { name: 'Unity Profiler & 60/90 FPS Locked', level: 'Expert', experience: '7+ Years' },
      { name: 'Shader Graph & Volumetric VFX', level: 'Advanced', experience: '5+ Years' },
      { name: 'DOTween & Kinematic Animation', level: 'Expert', experience: '6+ Years' },
      { name: 'Luna Playworks SDK (Playable Ads)', level: 'Expert', experience: '2+ Years' },
      { name: 'Addressables & Memory Management', level: 'Advanced', experience: '4+ Years' },
      { name: 'Monetization (AdMob, AppLovin, IAP)', level: 'Expert', experience: '6+ Years' }
    ]
  }
];
