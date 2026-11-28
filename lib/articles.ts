// Car Tips articles, from section 8 of the Master Website Content & UX Guide.
// Titles without a `body` are listed on the hub as "coming soon" and become
// links automatically once their copy is added here.

// Text may use **bold** and [link](/path/) (see components/rich-text.tsx).
export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | {
      type: "list";
      ordered?: boolean;
      items: { label?: string; text: string }[];
    };

export type Article = {
  slug: string;
  /** Page H1 (and the title shown on the Car Tips hub). */
  title: string;
  /** Exact <title> from the Master SEO Blueprint, when it differs from the H1. */
  metaTitle?: string;
  category: string;
  /** ISO date (YYYY-MM-DD). Set when the article is published. */
  date?: string;
  /** Blueprint articles live at the site root (/<slug>/), not /car-tips/. */
  root?: boolean;
  /** Meta description from the Master SEO Blueprint; defaults to the subheading. */
  metaDescription?: string;
  /** Alt text for the article image, from the Master SEO Blueprint. */
  imageAlt?: string;
  subheading?: string;
  image?: string;
  imagePosition?: string;
  body?: ArticleBlock[];
  related?: string[];
};

export const articles: Article[] = [
  {
    slug: "diagnosing-vehicle-alignment-issues",
    title: "Diagnosing Your Vehicle's Alignment Issues",
    category: "Auto Maintenance",
    date: "2025-07-16",
    subheading:
      "Duke Auto Repair is your local Alexandria destination for complete foreign and domestic repair service with ASE-Certified Master Auto Technicians.",
    image: "/images/about/alignment-tech.jpg",
    imagePosition: "70% 50%",
    body: [
      {
        type: "p",
        text: "At Duke Auto Repair, we frequently get questions from Alexandria car owners about wheel alignment. Many drivers don't fully understand the importance of proper alignment and its direct ability to affect multiple aspects of your vehicle's safety and performance.",
      },
      {
        type: "p",
        text: "Over time, due to potholes, curbs, and general suspension wear, your vehicle's alignment will shift. In order to properly steer your vehicle, your wheel alignment must be frequently checked and adjusted. Proper four-wheel alignment directly affects the following critical aspects of your vehicle:",
      },
      {
        type: "list",
        items: [
          { text: "Tire Wear and Longevity" },
          { text: "Gas Mileage and Fuel Efficiency" },
          { text: "Overall Vehicle Handling" },
          { text: "Safe Driving in Wet Conditions" },
        ],
      },
      {
        type: "p",
        text: "Improper tire alignment is the number one cause of premature tire wear. If you have ever replaced the tires on your vehicle, you know that they are a significant investment. Proper alignment can add thousands of miles to the life of your vehicle's tires.",
      },
      {
        type: "p",
        text: "Gas mileage is also heavily affected by rolling resistance. Poor wheel alignment causes an increase in this resistance. A complete alignment will set all four wheels straight, minimizing the rolling resistance of your vehicle and instantly increasing your gas mileage.",
      },
      {
        type: "p",
        text: "If your car is pulling to the side or if your steering wheel vibrates at highway speeds, it is time for a total tire alignment. A proper alignment will keep your vehicle traveling straight and minimize road shock for a much smoother ride. During a total wheel alignment at Duke Auto Repair, your vehicle's suspension will be thoroughly checked. A trained technician will be able to spot any worn suspension parts that could cause a serious malfunction or accident. Contact Duke Auto Repair today for a full laser alignment.",
      },
    ],
    related: [
      "how-long-does-a-wheel-alignment-take",
      "what-is-a-wheel-alignment",
      "tires-balding",
    ],
  },
  {
    slug: "winter-driving-tips-northern-virginia",
    title: "Winter Driving Tips to Help Keep You Safe on Northern Virginia Roads",
    category: "Auto Maintenance",
    date: "2025-12-10",
    subheading:
      "Prepare your vehicle for the cold with Duke Auto Repair's ASE-Certified winterization services.",
    image: "/images/about/exterior-bays.jpg",
    imagePosition: "center 50%",
    body: [
      {
        type: "p",
        text: "Northern Virginia winters can be unpredictable. From freezing rain on I-395 to sudden snow squalls in Alexandria, being prepared is the best way to keep yourself and your family safe on the road. The team at Duke Auto Repair recommends a proactive approach to winter car care.",
      },
      {
        type: "p",
        text: "Before the temperatures drop below freezing consistently, you should have a trusted mechanic perform a complete winterization inspection. Cold weather puts immense stress on your vehicle's most critical systems.",
      },
      {
        type: "list",
        items: [
          {
            label: "Battery Health",
            text: "Cold weather severely reduces a battery's cranking power. Have it load-tested.",
          },
          {
            label: "Tire Tread & Pressure",
            text: "Tire pressure drops in the cold. Ensure you have adequate tread for snow and ice.",
          },
          {
            label: "Antifreeze/Coolant",
            text: "Your engine needs the correct ratio of antifreeze to prevent freezing and cracking.",
          },
          {
            label: "Wiper Blades & Fluid",
            text: "Visibility is paramount. Switch to winter-grade washer fluid that won't freeze on your windshield.",
          },
        ],
      },
      {
        type: "p",
        text: "Don't wait until the first major snowstorm to find out your heater isn't working or your tires are bald. Schedule a pre-winter inspection at Duke Auto Repair today, and drive with confidence all season long.",
      },
    ],
    related: [
      "diagnosing-vehicle-alignment-issues",
      "tires-balding",
      "clicking-sound-when-trying-to-start-the-car",
    ],
  },
  {
    slug: "what-your-check-engine-light-means",
    title: "What Your Check Engine Light Really Means",
    category: "Auto Maintenance",
    date: "2025-08-20",
    subheading:
      "Honest, transparent engine diagnostics by the ASE-Certified experts at Duke Auto Repair.",
    image: "/images/about/diagnostics-portrait.jpg",
    imagePosition: "center 40%",
    body: [
      {
        type: "p",
        text: "Few things cause as much instant anxiety for a driver as the sudden appearance of the check engine light. While it's easy to assume the worst—and the most expensive—scenario, the truth is that this little yellow light can indicate a massive variety of issues, ranging from a loose gas cap to a failing catalytic converter.",
      },
      {
        type: "p",
        text: "The most important rule regarding the check engine light is this: Is it solid, or is it flashing?",
      },
      {
        type: "p",
        text: "A SOLID check engine light means that your vehicle's computer system has detected a fault. While you shouldn't ignore it, it generally means you have time to schedule a diagnostic appointment at your convenience. Common culprits include faulty oxygen sensors or a loose gas cap.",
      },
      {
        type: "p",
        text: "A FLASHING check engine light is a completely different story. This indicates a severe engine misfire that is actively dumping unburned fuel into your exhaust system. If your light is flashing, you must pull over safely and shut off the engine to prevent catastrophic damage to your catalytic converter. Towing the vehicle to Duke Auto Repair is highly recommended in this scenario.",
      },
      {
        type: "p",
        text: "Never rely on auto parts stores that offer 'free code reading.' A code only tells you what sensor triggered the alert; it does not tell you why. Our ASE-certified technicians at Duke Auto Repair use advanced diagnostic computers to pinpoint the exact root cause of the problem, saving you from replacing unnecessary parts.",
      },
    ],
    related: [
      "why-is-my-check-engine-light-flashing",
      "gas-cap-is-loose",
      "winter-driving-tips-northern-virginia",
    ],
  },
  // Master SEO Blueprint, section 4 (slug, meta title, description, alt) and
  // the Car Tips SEO Content drafts (H1, copy, photos, Similar Articles).
  {
    slug: "how-long-do-brake-pads-last",
    root: true,
    title: "How Long Do Brake Pads Last? (And 3 Signs They Are Failing)",
    metaTitle: "How Long Do Brake Pads Last? (3 Signs They Are Failing)",
    category: "Brakes",
    date: "2026-10-14",
    metaDescription:
      "Wondering how long do brake pads last? Learn the average mileage lifespan, 3 warning signs of worn pads, and when to schedule a brake check in Alexandria, VA.",
    subheading:
      "Wondering how long do brake pads last? Learn the average mileage lifespan, 3 warning signs of worn pads, and when to schedule a brake check in Alexandria, VA.",
    image: "/images/tips/brake-inspection.jpg",
    imageAlt: "Worn brake pad thickness comparison during brake inspection",
    body: [
      {
        "type": "p",
        "text": "If you commute through stop-and-go traffic in Northern Virginia, your brakes put in a lot of work. But exactly how long do brake pads last? On average, brake pads last between 30,000 and 70,000 miles. However, this number completely depends on your driving habits, the weight of your vehicle, and the type of brake pads you use."
      },
      {
        "type": "h2",
        "text": "3 Signs Your Brake Pads Are Worn Out"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Squeaking or Squealing",
            "text": "This is a built-in warning. Manufacturers put tiny metal indicators on brake pads that scrape against the rotor when the pads get dangerously thin."
          },
          {
            "label": "Grinding Noises",
            "text": "If you hear grinding, the pad is completely gone and metal is scraping against metal. This damages the brake rotors and requires immediate attention."
          },
          {
            "label": "A Spongy Brake Pedal",
            "text": "If you have to press your foot all the way to the floor to stop, you likely have a brake fluid leak or worn pads."
          }
        ]
      },
      {
        "type": "p",
        "text": "If you notice any of these signs, don't wait. Searching for a reliable [mechanic near me](/mechanic-alexandria-va/)? Duke Auto Repair can check your brake thickness and ensure your vehicle is safe to drive."
      }
    ],
    related: ["when-to-get-a-brake-pad-replacement", "why-are-my-brakes-squeaking"],
  },
  {
    slug: "gas-cap-is-loose",
    root: true,
    title: "Is Your Check Engine Light On? A Loose Gas Cap Might Be the Culprit",
    metaTitle: "Check Engine Light On? A Loose Gas Cap Might Be the Culprit",
    category: "Check Engine & Diagnostics",
    date: "2026-09-22",
    metaDescription:
      "If your gas cap is loose, it can trigger your check engine light and fail emissions. Learn how to fix it and when to visit Duke Auto Repair in Alexandria.",
    subheading:
      "If your gas cap is loose, it can trigger your check engine light and fail emissions. Learn how to fix it and when to visit Duke Auto Repair in Alexandria.",
    image: "/images/shop/diagnostic-tablet.jpg",
    imageAlt: "Mechanic tightening gas cap after check engine light diagnostic",
    body: [
      {
        "type": "p",
        "text": "A glowing check engine light is usually enough to cause immediate panic. But before you assume the worst, check the simplest solution first: your gas cap."
      },
      {
        "type": "h2",
        "text": "Why a Gas Cap Triggers the Engine Light"
      },
      {
        "type": "p",
        "text": "Your vehicle has an evaporative emissions system (EVAP) designed to prevent raw fuel vapors from leaking into the air. If your gas cap is loose, cracked, or missing, the system detects a leak and triggers the check engine light on your dashboard. This is one of the most common reasons drivers fail emissions testing."
      },
      {
        "type": "h2",
        "text": "What to Do Next"
      },
      {
        "type": "p",
        "text": "Pull over, unscrew the gas cap, and tighten it until it clicks at least three times. The check engine light may not turn off immediately—it can take 10 to 20 miles of driving for the system to reset. If the light stays on, you might have a real mechanical issue. If you need a diagnostic check or are looking for a [virginia state vehicle inspection near me](/virginia-safety-inspection/), bring your car into Duke Auto Repair so we can pull the codes and get you back on the road."
      }
    ],
    related: ["why-is-my-check-engine-light-flashing", "why-is-my-oil-light-on"],
  },
  {
    slug: "tires-balding",
    root: true,
    title: "What Happens if You Drive on Bald Tires?",
    metaTitle: "What Happens if You Drive on Bald Tires? | Safety Risks",
    category: "Tires & Alignment",
    date: "2026-08-27",
    metaDescription:
      "Driving with tires balding increases hydroplaning, blowouts, and stopping distance. Learn the dangers and how wheel alignments protect your tread life.",
    subheading:
      "Driving with tires balding increases hydroplaning, blowouts, and stopping distance. Learn the dangers and how wheel alignments protect your tread life.",
    image: "/images/tips/tire-closeup.jpg",
    imageAlt: "Comparison of tires balding next to new tire tread depth",
    body: [
      {
        "type": "p",
        "text": "Tires are the only part of your car that actually touches the road. When the tread wears down to the point where the tires are \"bald,\" you are putting yourself and other drivers at serious risk."
      },
      {
        "type": "h2",
        "text": "The Dangers of Bald Tires"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Hydroplaning",
            "text": "Tire tread is designed to channel water away. Bald tires cannot push water out of the way, meaning your car will literally float on top of wet roads, causing a complete loss of steering and braking."
          },
          {
            "label": "Blowouts",
            "text": "Without thick rubber to protect the inner tire, a small nail or pothole can easily cause a tire blowout at highway speeds."
          },
          {
            "label": "Increased Stopping Distance",
            "text": "Bald tires lack grip. If you have to slam on the brakes, a car with bald tires will skid significantly further than a car with healthy tread."
          }
        ],
        "ordered": true
      },
      {
        "type": "p",
        "text": "To maximize the lifespan of your tires and prevent premature balding, regular alignments are key. If you are searching for [wheel alignment shops near me](/wheel-alignment/), Duke Auto Repair uses precision computerized alignment racks to make sure your tires wear evenly and last longer."
      }
    ],
    related: ["what-is-a-wheel-alignment", "how-long-does-a-wheel-alignment-take"],
  },
  {
    slug: "why-does-my-car-shake-when-i-brake",
    root: true,
    title: "Why Does My Car Shake When I Brake?",
    metaTitle: "Why Does My Car Shake When I Brake? | Warped Rotors Guide",
    category: "Brakes",
    date: "2026-07-30",
    metaDescription:
      "Asking why does my car shake when i brake? Discover how warped brake rotors cause steering wheel shudder and how our mechanics fix it smoothly.",
    subheading:
      "Asking why does my car shake when i brake? Discover how warped brake rotors cause steering wheel shudder and how our mechanics fix it smoothly.",
    image: "/images/tips/wheel-hub.jpg",
    imageAlt: "Mechanic inspecting warped brake rotor on vehicle hub",
    body: [
      {
        "type": "p",
        "text": "Feeling a violent shudder in your steering wheel or brake pedal when you try to slow down is an unsettling experience. In almost all cases, this shaking is caused by warped brake rotors."
      },
      {
        "type": "h2",
        "text": "What Are Warped Rotors?"
      },
      {
        "type": "p",
        "text": "The brake rotor is the heavy metal disc that your brake pads clamp down on to stop the car. Under heavy braking, these rotors generate massive amounts of heat. Over time, this heat causes the smooth metal surface to warp and become uneven. When you press the brake pedal, the brake pads skip over these bumps and grooves, sending a shaking sensation straight up the steering column."
      },
      {
        "type": "h2",
        "text": "How to Fix the Shake"
      },
      {
        "type": "p",
        "text": "A mechanic will need to either turn the rotors on a lathe to make them flat again, or replace them entirely. Luxury vehicles, especially heavy sedans and SUVs, are prone to this wear. If you drive an Audi, BMW, or Mercedes and are looking for a trusted [european auto repair shop near me](/audi-repair/), Duke Auto Repair has the specialized tools to restore your smooth ride."
      }
    ],
    related: ["why-are-my-brakes-squeaking", "when-to-get-a-brake-pad-replacement"],
  },
  {
    slug: "why-are-my-brakes-squeaking",
    root: true,
    title: "Why Are My Brakes Squeaking? (3 Common Causes)",
    metaTitle: "Why Are My Brakes Squeaking? (3 Common Causes Explained)",
    category: "Brakes",
    date: "2026-07-08",
    metaDescription:
      "Wondering why are my brakes squeaking? Learn the 3 main causes—from wear indicators to surface rust—and when to get a professional brake inspection.",
    subheading:
      "Wondering why are my brakes squeaking? Learn the 3 main causes—from wear indicators to surface rust—and when to get a professional brake inspection.",
    image: "/images/tips/brake-pads.jpg",
    imageAlt: "Technician replacing squeaking brake pads in Alexandria auto shop",
    body: [
      {
        "type": "p",
        "text": "Hearing a high-pitched squeal every time you pull up to a stoplight is annoying, but it is also your car trying to communicate with you. Here are the three most common reasons your brakes are squeaking."
      },
      {
        "type": "h2",
        "text": "1. Worn Brake Pads"
      },
      {
        "type": "p",
        "text": "Manufacturers design brake pads with a small metal wear indicator. When the friction material gets dangerously thin, this metal tab scrapes against the rotor to warn you that it's time for a replacement."
      },
      {
        "type": "h2",
        "text": "2. Moisture and Surface Rust"
      },
      {
        "type": "p",
        "text": "If your brakes only squeak first thing in the morning, especially after rain or humidity, it's likely just a thin layer of surface rust on the rotors. After a few stops, the pads scrape the rust off and the noise should disappear."
      },
      {
        "type": "h2",
        "text": "3. Cheap Brake Pads"
      },
      {
        "type": "p",
        "text": "Brake pads with high metallic content often squeak simply because of the cheap materials rubbing against the metal rotor. Upgrading to ceramic brake pads usually solves this noise."
      },
      {
        "type": "p",
        "text": "Never ignore persistent brake noises. Whenever you need professional [brake repair](/brake-repair/), Duke Auto Repair offers comprehensive inspections to pinpoint exactly where the noise is coming from."
      }
    ],
    related: ["why-does-my-car-shake-when-i-brake", "how-long-do-brake-pads-last"],
  },
  {
    slug: "why-is-my-check-engine-light-flashing",
    root: true,
    title: "Why Is My Check Engine Light Flashing? (When to Stop Driving)",
    metaTitle: "Why Is My Check Engine Light Flashing? (When to Stop Driving)",
    category: "Check Engine & Diagnostics",
    date: "2026-06-16",
    metaDescription:
      "Asking why is my check engine light flashing? A blinking light signals a severe engine misfire that can damage your catalytic converter. Here is what to do.",
    subheading:
      "Asking why is my check engine light flashing? A blinking light signals a severe engine misfire that can damage your catalytic converter. Here is what to do.",
    image: "/images/shop/diagnostic-kit.jpg",
    imageAlt: "Dashboard showing flashing check engine light warning",
    body: [
      {
        "type": "p",
        "text": "A solid check engine light means you should get your car checked soon. A flashing check engine light means you have an active, severe mechanical emergency."
      },
      {
        "type": "h2",
        "text": "What a Flashing Light Means"
      },
      {
        "type": "p",
        "text": "A flashing engine light almost always indicates a severe engine misfire. Unburned fuel is being dumped directly into the exhaust system, where it can quickly overheat and destroy your catalytic converter—an incredibly expensive repair. Your car will likely shake, idle roughly, and struggle to accelerate."
      },
      {
        "type": "h2",
        "text": "What You Should Do"
      },
      {
        "type": "p",
        "text": "Pull over to a safe area immediately and turn off the engine. Do not attempt to drive the car at highway speeds or tow heavy loads. Have the vehicle towed to a repair shop. Whether you need an emergency diagnostic or just need to pass your [virginia state vehicle inspection near me](/virginia-safety-inspection/), Duke Auto Repair can accurately diagnose the misfire and repair the root cause."
      }
    ],
    related: ["gas-cap-is-loose", "why-is-my-oil-light-on"],
  },
  {
    slug: "why-is-my-oil-light-on",
    root: true,
    title: "Why Is My Oil Light On? (And What to Do Next)",
    metaTitle: "Why Is My Oil Light On? (Immediate Steps to Protect Engine)",
    category: "Oil & Fluids",
    date: "2026-03-18",
    metaDescription:
      "Wondering why is my oil light on? A red oil pressure warning means your engine is losing lubrication. Follow these immediate steps to prevent engine damage.",
    subheading:
      "Wondering why is my oil light on? A red oil pressure warning means your engine is losing lubrication. Follow these immediate steps to prevent engine damage.",
    image: "/images/shop/oil-check-3.jpg",
    imageAlt: "Technician checking engine oil dipstick after oil warning light",
    body: [
      {
        "type": "p",
        "text": "The oil pressure warning light—which looks like an old-fashioned oil can dripping a single drop—is arguably the most critical warning light on your dashboard. When it turns red, your engine is in immediate danger."
      },
      {
        "type": "h2",
        "text": "What the Oil Light Means"
      },
      {
        "type": "p",
        "text": "This light does not just mean you are due for an oil change. It means your engine has lost oil pressure. Without oil pressure, the metal parts inside your engine are grinding against each other without lubrication. This will destroy a motor in a matter of minutes."
      },
      {
        "type": "h2",
        "text": "Your Immediate Action Plan"
      },
      {
        "type": "p",
        "text": "Pull over safely and shut off the engine right away. Check your dipstick to see if the oil level is drastically low. If it is bone dry, you have a massive leak or oil consumption issue. Never drive a car with the red oil light illuminated."
      },
      {
        "type": "p",
        "text": "The best way to prevent this is regular maintenance. If you are searching for a high-quality [oil change service near me](/oil-change-service/), the technicians at Duke Auto Repair not only change your oil but also check for slow leaks to protect your engine long-term."
      }
    ],
    related: ["how-long-does-an-oil-change-take", "why-is-my-check-engine-light-flashing"],
  },
  {
    slug: "how-often-should-i-change-my-transmission-fluid",
    root: true,
    title: "How Often Should I Change My Transmission Fluid?",
    metaTitle: "How Often Should I Change My Transmission Fluid? | Guide",
    category: "Oil & Fluids",
    date: "2026-04-23",
    metaDescription:
      "Learn how often should i change my transmission fluid to prevent slipping gears and costly rebuilds, plus 3 warning signs of burnt transmission fluid.",
    subheading:
      "Learn how often should i change my transmission fluid to prevent slipping gears and costly rebuilds, plus 3 warning signs of burnt transmission fluid.",
    image: "/images/tips/underside.jpg",
    imageAlt: "Mechanic draining dark transmission fluid during flush service",
    body: [
      {
        "type": "p",
        "text": "While everyone knows to change their engine oil, transmission fluid often gets forgotten—until the car starts slipping gears and struggling to shift."
      },
      {
        "type": "h2",
        "text": "The Timeline for Fluid Changes"
      },
      {
        "type": "p",
        "text": "Transmission fluid lubricates the complex gears inside your transmission and acts as a hydraulic fluid to shift gears. Over time, heat causes the fluid to break down, turning it from a bright red color to a dark, burnt brown. For most automatic vehicles, you should change the transmission fluid every 30,000 to 60,000 miles. However, if you regularly tow heavy loads or drive in heavy Alexandria traffic, you should fall on the 30,000-mile side of that schedule."
      },
      {
        "type": "h2",
        "text": "Warning Signs of Burnt Fluid"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Your car hesitates or clunks when shifting into Drive or Reverse."
          },
          {
            "text": "You experience slipping gears while accelerating."
          },
          {
            "text": "You smell a sweet, burning odor coming from under the car."
          }
        ]
      },
      {
        "type": "p",
        "text": "Protect your transmission before a total failure occurs. Need honest [transmission repair](/transmission-repair/)? Duke Auto Repair can flush the old fluid, replace the filter, and add fresh fluid to keep your car shifting smoothly."
      }
    ],
    related: ["why-is-my-oil-light-on", "clicking-sound-when-trying-to-start-the-car"],
  },
  {
    slug: "clicking-sound-when-trying-to-start-the-car",
    root: true,
    title: "Clicking Sound When Trying to Start the Car? (Battery vs. Starter)",
    metaTitle: "Clicking Sound When Trying to Start the Car? (Battery vs Starter)",
    category: "Battery & Electrical",
    date: "2026-01-21",
    metaDescription:
      "Hearing a clicking sound when trying to start the car? Learn how to tell the difference between a dead car battery and a failing starter motor.",
    subheading:
      "Hearing a clicking sound when trying to start the car? Learn how to tell the difference between a dead car battery and a failing starter motor.",
    image: "/images/tips/battery-tester.jpg",
    imageAlt: "Technician testing car battery voltage with digital multimeter",
    body: [
      {
        "type": "p",
        "text": "You turn the key to go to work, and instead of the engine roaring to life, you hear a rapid clicking sound. You are stranded. But is it the battery or the starter?"
      },
      {
        "type": "h2",
        "text": "The Dead Battery"
      },
      {
        "type": "p",
        "text": "A rapid, machine-gun clicking sound is almost always a dead battery. The battery has just enough juice to trigger the starter solenoid, but not enough raw power to physically spin the heavy engine block. Try jump-starting the car; if it starts immediately and runs fine, your battery just needs to be replaced."
      },
      {
        "type": "h2",
        "text": "The Failing Starter"
      },
      {
        "type": "p",
        "text": "If you turn the key and hear one single, loud clunk or click—and your headlights are bright and radio works fine—the starter motor itself is likely dead or jammed. A jump start will not fix a broken starter."
      },
      {
        "type": "p",
        "text": "Whether you drive a domestic truck or are looking for a reliable [european auto repair shop near me](/audi-repair/) to service your Audi or BMW, Duke Auto Repair can test your electrical system and replace the battery, alternator, or starter today."
      }
    ],
    related: ["why-is-my-check-engine-light-flashing", "why-is-my-oil-light-on"],
  },
  {
    slug: "why-is-my-car-ac-blowing-hot-air",
    root: true,
    title: "Why Is My Car AC Blowing Hot Air?",
    metaTitle: "Why Is My Car AC Blowing Hot Air? (3 Common Culprits)",
    category: "AC & Heating",
    date: "2026-05-20",
    metaDescription:
      "Asking why is my car ac blowing hot air? Discover the 3 most common causes—from Freon leaks to compressor failure—and how UV leak detection fixes it.",
    subheading:
      "Asking why is my car ac blowing hot air? Discover the 3 most common causes—from Freon leaks to compressor failure—and how UV leak detection fixes it.",
    image: "/images/tips/ac-machine.jpg",
    imageAlt: "Mechanic checking refrigerant pressure with AC manifold gauges",
    body: [
      {
        "type": "p",
        "text": "Few things are worse than getting into a hot car during a humid Virginia summer, turning on the AC, and being blasted with warm air. When your car AC stops blowing cold, one of these issues is usually the culprit."
      },
      {
        "type": "h2",
        "text": "1. A Refrigerant (Freon) Leak"
      },
      {
        "type": "p",
        "text": "The AC system is a closed loop. If the refrigerant level is low, it means there is a leak somewhere in the system—often in a rubber hose, O-ring, or the evaporator. Adding more freon will not fix the problem long-term; a mechanic must find and seal the leak."
      },
      {
        "type": "h2",
        "text": "2. A Failing AC Compressor"
      },
      {
        "type": "p",
        "text": "The compressor pumps the refrigerant through the system. If it fails to engage when you hit the AC button, the air cannot cool down. You might also hear strange squealing noises if the compressor clutch is wearing out."
      },
      {
        "type": "h2",
        "text": "3. Clogged Condenser"
      },
      {
        "type": "p",
        "text": "The condenser sits at the front of your car and cools the hot refrigerant. If it gets blocked by leaves, road debris, or bugs, it cannot do its job."
      },
      {
        "type": "p",
        "text": "Don't sweat through your commute. If you need [car ac repair](/car-ac-repair/) in Alexandria, bring your vehicle to Duke Auto Repair. We use UV leak detection and professional manifold gauges to get your AC blowing ice-cold again."
      }
    ],
    related: ["how-often-should-i-change-my-transmission-fluid", "gas-cap-is-loose"],
  },
  {
    slug: "how-long-does-a-wheel-alignment-take",
    root: true,
    title: "How Long Does a Wheel Alignment Take?",
    metaTitle: "How Long Does a Wheel Alignment Take? | What to Expect",
    category: "Tires & Alignment",
    date: "2026-02-11",
    metaDescription:
      "Wondering how long does a wheel alignment take? Learn what happens during a 45-to-60-minute computerized alignment and when suspension wear adds time.",
    subheading:
      "Wondering how long does a wheel alignment take? Learn what happens during a 45-to-60-minute computerized alignment and when suspension wear adds time.",
    image: "/images/about/alignment-rig.jpg",
    imageAlt: "Car mounted with digital sensors on laser wheel alignment rack",
    body: [
      {
        "type": "p",
        "text": "If you've noticed your steering wheel pulling to the left or right, it’s time for an alignment. But how long will you have to sit in the waiting room? Generally, a standard four-wheel alignment takes about 45 to 60 minutes."
      },
      {
        "type": "h2",
        "text": "What Happens During That Hour?"
      },
      {
        "type": "p",
        "text": "A wheel alignment is a precise procedure. The mechanic drives your car onto a specialized rack and mounts digital sensors to each wheel. These sensors connect to a computer that measures the exact angles of your tires down to the decimal. The technician then goes underneath the car and manually adjusts the suspension rods until the tires are perfectly aligned with the manufacturer's factory specifications."
      },
      {
        "type": "h2",
        "text": "When It Might Take Longer"
      },
      {
        "type": "p",
        "text": "If your car has severe suspension damage, rusted tie rods, or if you drive a heavily modified vehicle, the alignment could take closer to two hours. If you are searching for [wheel alignment shops near me](/wheel-alignment/), Duke Auto Repair utilizes state-of-the-art computerized alignment technology to get you back on the road quickly and safely."
      }
    ],
    related: ["what-is-a-wheel-alignment", "tires-balding"],
  },
  {
    slug: "what-is-a-wheel-alignment",
    root: true,
    title: "What is a Wheel Alignment?",
    metaTitle: "What is a Wheel Alignment? (Camber, Toe & Caster Explained)",
    category: "Tires & Alignment",
    date: "2025-11-12",
    metaDescription:
      "Curious what is a wheel alignment? Learn how calibrating camber, toe, and caster angles stops uneven tire wear and keeps your steering straight.",
    subheading:
      "Curious what is a wheel alignment? Learn how calibrating camber, toe, and caster angles stops uneven tire wear and keeps your steering straight.",
    image: "/images/tips/under-wheel.jpg",
    imageAlt: "Technician adjusting suspension tie rods during wheel alignment",
    body: [
      {
        "type": "p",
        "text": "A common misconception is that a \"wheel alignment\" involves adjusting the wheels or tires themselves. In reality, a wheel alignment is an adjustment of your vehicle's suspension—the complex system that connects your car to its wheels."
      },
      {
        "type": "h2",
        "text": "The 3 Key Adjustments"
      },
      {
        "type": "p",
        "text": "When you get an alignment, a technician is correcting three specific angles:"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Camber",
            "text": "This is the inward or outward angle of the tire when viewed from the front of the car. Potholes and worn ball joints can cause camber misalignment, which leads to your tires wearing down on one side."
          },
          {
            "label": "Toe",
            "text": "Imagine looking down at your feet. If your toes point inward, that is \"toe-in.\" If they point outward, it is \"toe-out.\" Your tires need to point perfectly straight."
          },
          {
            "label": "Caster",
            "text": "This angle balances steering, stability, and cornering. If your caster is off, steering might feel loose or heavy."
          }
        ]
      },
      {
        "type": "p",
        "text": "Ignoring these angles will destroy your tires prematurely and make your car dangerous to drive. Need dependable [wheel alignment services](/wheel-alignment/)? The crew at Duke Auto Repair can calibrate your suspension to factory specs today."
      }
    ],
    related: ["how-long-does-a-wheel-alignment-take", "tires-balding"],
  },
  {
    slug: "how-long-does-an-oil-change-take",
    root: true,
    title: "How Long Does an Oil Change Take?",
    metaTitle: "How Long Does an Oil Change Take? | Quality vs Quick-Lube",
    category: "Oil & Fluids",
    date: "2025-10-08",
    metaDescription:
      "Wondering how long does an oil change take at a full-service shop? Learn what goes into a thorough 30-to-45-minute synthetic oil change and inspection.",
    subheading:
      "Wondering how long does an oil change take at a full-service shop? Learn what goes into a thorough 30-to-45-minute synthetic oil change and inspection.",
    image: "/images/tips/filter.jpg",
    imageAlt: "Certified technician replacing oil filter during synthetic oil change",
    body: [
      {
        "type": "p",
        "text": "We know you have a busy schedule. If you are dropping your car off for routine maintenance, you want to know exactly how long you will be without it. A professional oil change should take between 30 to 45 minutes."
      },
      {
        "type": "h2",
        "text": "Why Not 10 Minutes?"
      },
      {
        "type": "p",
        "text": "While quick-lube drive-thrus advertise 10-minute oil changes, those shops are focused on rushing cars out the door. At a professional repair shop, that 45 minutes involves much more than just draining fluid."
      },
      {
        "type": "p",
        "text": "During a quality oil change, a certified technician will fully drain the old oil, replace the oil filter with a high-quality OEM part, and fill the engine with fresh synthetic oil. More importantly, they will perform a comprehensive Digital Vehicle Inspection (DVI). They will check your tire pressure, inspect your brake pads, look for suspension wear, and top off all critical fluids."
      },
      {
        "type": "p",
        "text": "If you are looking for an [oil change service](/oil-change-service/) that prioritizes the health of your engine over speed, book an appointment at Duke Auto Repair."
      }
    ],
    related: ["why-is-my-oil-light-on", "gas-cap-is-loose"],
  },
  {
    slug: "when-to-get-a-brake-pad-replacement",
    root: true,
    title: "When to Get a Brake Pad Replacement",
    metaTitle: "When to Get a Brake Pad Replacement | Mileage & Signs",
    category: "Brakes",
    date: "2025-09-17",
    metaDescription:
      "Learn when to get a brake pad replacement before metal-on-metal grinding damages your rotors. Know the mileage guidelines and early squeal warnings.",
    subheading:
      "Learn when to get a brake pad replacement before metal-on-metal grinding damages your rotors. Know the mileage guidelines and early squeal warnings.",
    image: "/images/tips/brake-gauge.jpg",
    imageAlt: "New ceramic brake pad compared to worn brake pad",
    body: [
      {
        "type": "p",
        "text": "Your brakes are the most important safety feature on your vehicle. But how do you know exactly when it is time to replace them? While mileage intervals are a good baseline, your car will physically tell you when the pads are too thin."
      },
      {
        "type": "h2",
        "text": "Listen to Your Car"
      },
      {
        "type": "p",
        "text": "Most brake pads last between 30,000 and 70,000 miles. However, the best time to replace them is the moment you start hearing a high-pitched squeal when applying the brakes. That noise is an intentional warning designed to alert you before the pad wears down completely."
      },
      {
        "type": "p",
        "text": "If you ignore the squeal, the noise will eventually turn into a harsh grinding sound. Grinding means the friction material is completely gone, and metal is gouging into your brake rotors—turning a simple pad replacement into a very expensive repair."
      },
      {
        "type": "p",
        "text": "Do not compromise your safety on the road. If you need a thorough inspection or professional [brake repair](/brake-repair/), Duke Auto Repair has you covered."
      }
    ],
    related: ["how-long-do-brake-pads-last", "why-are-my-brakes-squeaking"],
  },
];

export type PublishedArticle = Article &
  Required<Pick<Article, "body" | "subheading" | "image" | "date">>;

export const isPublished = (article: Article): article is PublishedArticle =>
  Boolean(
    article.body?.length && article.subheading && article.image && article.date,
  );

export const publishedArticles = articles.filter(isPublished);

export const findArticle = (slug: string) =>
  articles.find((article) => article.slug === slug);

export const articleHref = (article: Article) =>
  article.root ? `/${article.slug}` : `/car-tips/${article.slug}`;

/** "11-11-2026", the date style used in the content guide. */
export const formatArticleDate = (iso: string) => {
  const [year, month, day] = iso.split("-");
  return `${month}-${day}-${year}`;
};

// "Services by Location" tab on the Car Tips hub. The content guide plans
// SEO pages per neighbourhood (e.g. "Brake Repair in Old Town Alexandria");
// until those are written the tab lists the areas served.
export const serviceAreas = [
  "Old Town Alexandria",
  "Landmark",
  "West End",
  "Seminary Hill",
  "Del Ray",
  "Fairlington",
  "Bradlee",
  "Lincolnia",
];
