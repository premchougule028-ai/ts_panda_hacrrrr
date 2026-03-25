export const slides = [
  {
    id: 1,
    title: "The Evolution of Television",
    points: [
      "From CRT to Flat Screens: The physical transformation.",
      "Analog to Digital: The shift in signal processing.",
      "Passive to Interactive: The birth of the Smart TV.",
      "A Smart TV is essentially a computer with a large display."
    ],
    visualType: "tv-transition",
    speaker: "Welcome. Let's trace the evolution of television. We've moved from bulky CRTs to sleek flat screens, and from analog signals to digital broadcasts. But the most significant leap was from passive viewing to interactive experiences—the birth of the Smart TV. Today, a Smart TV is essentially a powerful computer attached to a large display."
  },
  {
    id: 2,
    title: "Anatomy of a Smart TV",
    points: [
      "System on a Chip (SoC): The brain handling processing and graphics.",
      "Network Interface: Wi-Fi and Ethernet for connectivity.",
      "Memory & Storage: RAM for multitasking, Flash for apps.",
      "Display Controller: Translating data into visual pixels."
    ],
    visualType: "architecture",
    speaker: "Let's look at the anatomy of a Smart TV. Unlike old TVs, it relies on a System on a Chip, or SoC, which acts as the brain. It has dedicated network interfaces for internet access, RAM for multitasking, flash storage for your apps, and a complex display controller to render high-definition visuals."
  },
  {
    id: 3,
    title: "The Operating System Layer",
    points: [
      "The OS manages hardware resources and software applications.",
      "Popular platforms: WebOS, Tizen, Android TV, Roku OS.",
      "Provides the user interface and app ecosystem.",
      "Enables seamless multitasking and background updates."
    ],
    visualType: "os",
    speaker: "The hardware is driven by an Operating System. Just like your phone or PC, the OS manages resources. Platforms like WebOS, Tizen, or Android TV provide the user interface, manage the app ecosystem, and handle background tasks like updates, making the experience seamless."
  },
  {
    id: 4,
    title: "Content Delivery Networks (CDNs)",
    points: [
      "How streaming services deliver video without buffering.",
      "CDNs store content on servers geographically close to you.",
      "Reduces latency and bandwidth costs.",
      "Essential for 4K and 8K streaming."
    ],
    visualType: "data-flow",
    speaker: "How does a Smart TV stream 4K video so smoothly? The secret is Content Delivery Networks, or CDNs. Services like Netflix don't stream from one central server; they use CDNs to store copies of movies on servers geographically close to your home, drastically reducing latency and buffering."
  },
  {
    id: 5,
    title: "Video Compression & Decoding",
    points: [
      "Raw video data is too large to stream over standard internet.",
      "Codecs (like H.264, HEVC/H.265, AV1) compress the data.",
      "The TV's processor decodes this data in real-time.",
      "Hardware acceleration ensures smooth playback."
    ],
    visualType: "smart-tv-flow",
    speaker: "Even with CDNs, raw video is too large. It must be compressed using codecs like HEVC or AV1. Your Smart TV receives this compressed data stream and uses its processor's hardware acceleration to decode it in real-time, turning data packets back into visible frames."
  },
  {
    id: 6,
    title: "The App Ecosystem",
    points: [
      "Smart TVs rely on a diverse ecosystem of applications.",
      "Streaming (Netflix, Hulu), Gaming (GeForce Now), Utility.",
      "Apps are built using web technologies (HTML5) or native SDKs.",
      "App stores curate and update software automatically."
    ],
    visualType: "software-apps",
    speaker: "The value of a Smart TV lies in its app ecosystem. Beyond streaming, there are apps for gaming, fitness, and smart home control. Developers build these apps using web technologies or native SDKs, and the TV's app store manages installation and updates."
  },
  {
    id: 7,
    title: "Connectivity & IoT Integration",
    points: [
      "Smart TVs act as central hubs for the Internet of Things.",
      "Protocols: Wi-Fi, Bluetooth, Zigbee, Matter.",
      "Control lights, cameras, and thermostats from the screen.",
      "Seamless casting via AirPlay or Chromecast."
    ],
    visualType: "connectivity",
    speaker: "Modern Smart TVs are central hubs for the Internet of Things. Using protocols like Wi-Fi, Bluetooth, and Matter, they connect to other devices. You can view security cameras, control smart lights, or cast content directly from your phone to the big screen."
  },
  {
    id: 8,
    title: "Artificial Intelligence in TVs",
    points: [
      "AI Upscaling: Enhancing lower-resolution content to 4K/8K.",
      "Content Recommendation Engines: Learning viewing habits.",
      "Adaptive Picture & Sound: Adjusting to room lighting and acoustics.",
      "Natural Language Processing for voice commands."
    ],
    visualType: "smart-features",
    speaker: "Artificial Intelligence is deeply integrated. AI upscaling enhances older content to look crisp on 4K screens. Recommendation engines learn what you like. Furthermore, AI adapts the picture and sound based on your room's lighting and acoustics."
  },
  {
    id: 9,
    title: "Voice Control & Interaction",
    points: [
      "Moving beyond the traditional remote control.",
      "Integration with Alexa, Google Assistant, and Siri.",
      "Far-field microphones allow hands-free operation.",
      "Complex queries: 'Show me action movies from the 90s'."
    ],
    visualType: "interaction",
    speaker: "Interaction has evolved beyond the remote. With built-in far-field microphones and integration with assistants like Alexa or Google Assistant, you can use natural language. You can ask complex queries like 'Show me action movies from the 90s' without pressing a button."
  },
  {
    id: 10,
    title: "Security & Privacy Concerns",
    points: [
      "Smart TVs collect data on viewing habits (ACR technology).",
      "Microphones and cameras pose potential privacy risks.",
      "Vulnerability to malware and hacking if not updated.",
      "The importance of secure network configurations."
    ],
    visualType: "security",
    speaker: "However, this connectivity brings security and privacy concerns. Smart TVs use Automatic Content Recognition to track what you watch. Built-in microphones can be a privacy risk, and like any computer, they are vulnerable to malware if the OS isn't kept updated."
  },
  {
    id: 11,
    title: "Display Technologies: OLED vs. QLED",
    points: [
      "OLED: Self-lit pixels, perfect blacks, infinite contrast.",
      "QLED: LED backlight with quantum dots for vibrant colors.",
      "Mini-LED: Smaller LEDs for precise local dimming.",
      "MicroLED: The future, combining the best of both."
    ],
    visualType: "smart-tv-concept",
    speaker: "Let's touch on the display tech itself. OLED offers perfect blacks because each pixel emits its own light. QLED uses quantum dots for extreme brightness and color volume. Mini-LED improves contrast, while MicroLED represents the ultimate future of display technology."
  },
  {
    id: 12,
    title: "The Rise of Cloud Gaming",
    points: [
      "Playing AAA games without a console.",
      "Services like Xbox Cloud Gaming and NVIDIA GeForce Now.",
      "Requires low latency internet and a Bluetooth controller.",
      "The TV acts as a thin client for remote servers."
    ],
    visualType: "future-tv",
    speaker: "Smart TVs are disrupting the gaming industry through Cloud Gaming. Services like Xbox Cloud Gaming allow you to play AAA titles directly on the TV without a console. The TV acts as a thin client, streaming the game from powerful remote servers."
  },
  {
    id: 13,
    title: "Accessibility Features",
    points: [
      "Making television accessible to everyone.",
      "Screen readers and voice guidance for the visually impaired.",
      "High contrast modes and closed captioning customization.",
      "Sign language avatars and audio descriptions."
    ],
    visualType: "software-apps",
    speaker: "Smart TVs also prioritize accessibility. They include built-in screen readers, high contrast interfaces, and customizable closed captioning, ensuring that entertainment and information are accessible to users with visual or hearing impairments."
  },
  {
    id: 14,
    title: "The Future: Spatial Computing & AR",
    points: [
      "Moving beyond the flat 2D screen.",
      "Integration with Augmented Reality (AR) glasses.",
      "Holographic displays and light-field technology.",
      "Interactive, immersive 3D environments."
    ],
    visualType: "future-tv",
    speaker: "Looking to the future, we are moving beyond the flat screen towards spatial computing. We will see integration with AR glasses, and eventually, holographic displays that project interactive, immersive 3D environments directly into your living room."
  },
  {
    id: 15,
    title: "Conclusion",
    points: [
      "Smart TVs are the nexus of entertainment and computing.",
      "They have transformed passive viewing into an interactive hub.",
      "Continuous evolution in AI, display tech, and connectivity.",
      "The living room experience will never be the same."
    ],
    visualType: "conclusion",
    speaker: "In conclusion, the Smart TV is no longer just a screen; it is the nexus of home entertainment and computing. It has transformed passive viewing into an interactive, connected experience, and with continuous advancements in AI and display tech, the living room experience will never be the same. Thank you."
  }
];
