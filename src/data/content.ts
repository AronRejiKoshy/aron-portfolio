export type Project = {
  slug: string;
  title: string;
  corporateTitle: string;
  question: string;
  image: string;
  video?: string;
  alt: string;
  eyebrow: string;
  summary: string;
  problem: string;
  insight: string;
  solution: string;
  outcome: string;
  gallery: { image: string; caption: string }[];
  // The boring LinkedIn fields
  corporateSummary: string;
  corporateProblem: string;
  corporateInsight: string;
  corporateSolution: string;
  corporateOutcome: string;
};

export type Obsession = {
  title: string;
  description: string;
};

export type Experience = {
  title: string;
  detail: string;
  links?: { label: string; url: string }[];
  images?: string[];
  isWip?: boolean;
};

export const email = "hello@aron.studio";

export const obsessions: Obsession[] = [
  {
    title: "Human Behaviour",
    description: "Making daily choices based on biases we pretend we don't have.",
  },
  {
    title: "Board Games",
    description: "Monopoly was invented as an anti-capitalist protest. We just decided we liked ruining friendships instead.",
  },
  {
    title: "Football",
    description: "Most likely staying up all night watching the World Cup.",
  },
  {
    title: "Advertising",
    description: "Interrupting people's day and hoping they don't mind.",
  },
  {
    title: "AI",
    description: "Are robots really going to take over the world?",
  },
  {
    title: "Branding",
    description: "Waiting all year just to let #1DB954 judge my music taste.",
  },
  {
    title: "Beer",
    description: "Nothing much really, I just love Spoons.",
  },
];

export const projects: Project[] = [
  {
    slug: "face-value",
    title: "FACE VALUE",
    corporateTitle: "Consumer Perception Research Initiative",
    question: "How much of our judgement comes from evidence, and how much comes from perception?",
    image: "/work/face-value-hero.png",
    alt: "A dark exhibition table with board game cards, evidence tokens and identity tags.",
    eyebrow: "Unconscious Bias / Board Game",
    summary:
      "A social deduction board game exploring how brands influence assumptions, identity signalling and unconscious bias.",
    problem:
      "People insist they judge fairly, then make tiny decisions based on clothes, logos, price cues and the social story attached to them.",
    insight:
      "A brand can behave like evidence even when it is only atmosphere. Put people in a game and that shortcut becomes visible very quickly.",
    solution:
      "<i>Face Value</i> turns brand signals into playable suspicion. Players read evidence, misread each other and discover how quickly confidence can become bias.",
    outcome:
      "Developed as Aron’s advanced project and exhibited at the University of Greenwich End of Year Show 2026.<br><br><a href='https://aronrejikoshy.github.io/face-value-portfolio/' target='_blank' rel='noopener noreferrer'>View the project portfolio</a> <span class='text-sm text-signal-paper/40 ml-2'>(Best viewed on desktop)</span>",
    gallery: [
      {
        image: "/work/face-value-gal-1.png",
        caption: "A structured sequence of rounds designed to escalate tension as evidence is recovered."
      },
      {
        image: "/work/face-value-gal-2.png",
        caption: "Rules defining how information can be shared, concealed, or weaponised."
      },
      {
        image: "/work/face-value-gal-3.png",
        caption: "A physical translation of the game's mechanics into an interactive suspect board."
      }
    ],
    corporateSummary: "A research-led brand strategy initiative exploring how consumer perception and unconscious bias impact brand equity.",
    corporateProblem: "We noticed a gap in how people evaluate brands. Consumers believe they make rational choices, but our research showed they often rely heavily on visual cues and social reputation instead.",
    corporateInsight: "Brand identity acts as a shortcut for trust. We realized the best way to demonstrate this was to put consumers in a scenario where they had to rely on these shortcuts under pressure.",
    corporateSolution: "Developed and launched an interactive board game designed to test brand bias in real-time, effectively turning consumer research into an engaging physical experience.",
    corporateOutcome: "Successfully showcased the project at the 2026 Academic Exhibition, receiving highly positive feedback for strategic thinking and creative execution. Excited to leverage these learnings in my next role! 🚀"
  },
  {
    slug: "twinings-loneliness",
    title: "TWININGS x LONELINESS",
    corporateTitle: "Tea-Led Community Engagement Concept",
    question: "Can a cup of tea make a stranger feel less alone?",
    image: "/work/twinings-hero.png",
    alt: "A warm evening table with tea cups, cards and people in conversation around the edges.",
    eyebrow: "Campaign Development / Touchpoints",
    summary:
      "A campaign concept where Twinings becomes a ritual for connection through gameplay and conversation-led experiences.",
    problem:
      "Legacy tea brands sell heritage to a generation facing a profound loneliness crisis. Today, a massive percentage of tea is consumed completely alone. The beverage of gathering has become a symbol of isolation.",
    insight:
      "Real connection rarely starts with a heavy conversation, it starts with a shared pause. Tea naturally enforces a slow, low-pressure ritual. It speaks a language of cosiness and calm that makes people feel safe enough to open up.",
    solution:
      "The strategy repositioned Twinings from a product to a host. The experience launched within an immersive Minecraft world where players had to team up and communicate to progress. This digital collaboration then bridged into the real world through physical touchpoints: direct-mail invitations, pop-up community spaces, and tea tags printed with conversation starters.",
    outcome:
      "A socially perceptive campaign that successfully merged virtual gameplay with physical interaction. It proved that a legacy brand can make a genuine impact on social issues, far beyond its core product.<br><br><span class='text-sm text-signal-paper/50'><i>Developed as a collaborative group project for the Brand Worldbuilding module at University of Greenwich.</i></span>",
    gallery: [
      {
        image: "/work/twinings-gal-1.png",
        caption: "Obstacles that require players to coordinate and communicate to unlock the path ahead."
      },
      {
        image: "/work/twinings-gal-2.png",
        caption: "In-game Turkish inspired tea houses designed as low-pressure spaces for players to pause and connect over culture."
      },
      {
        image: "/work/twinings-gal-3.png",
        caption: "Personalised tea tags acting as physical prompts to carry the conversation offline."
      }
    ],
    corporateSummary: "A multi-channel community engagement campaign designed to modernize a legacy brand and drive connection among younger demographics.",
    corporateProblem: "Legacy tea brands are struggling to maintain relevance with younger audiences, and tea consumption has increasingly become a solitary activity rather than a social one.",
    corporateInsight: "We identified an opportunity to reposition the brand. Tea naturally creates a slow, low-pressure environment, making it the perfect catalyst for meaningful conversations and community building.",
    corporateSolution: "Designed a hybrid digital-to-physical campaign, starting with a collaborative activation in Minecraft and expanding into real-world pop-up spaces and direct-mail touchpoints.",
    corporateOutcome: "Delivered a comprehensive campaign framework that successfully bridged digital platforms with physical experiences. Grateful to my incredible team for their hard work and dedication. #TeamWork #Innovation 🤝"
  },
  {
    slug: "what-do-you-call",
    title: "WHAT DO YOU CALL *****?",
    corporateTitle: "Digital Language Moderation Study",
    question: "What happens when important language is forbidden?",
    image: "/work/what-do-you-call-hero.png",
    video: "/work/what-do-you-call.mp4",
    alt: "A redacted mixed-media poster with coded symbols, medical imagery and digital screen layers.",
    eyebrow: "Censorship / Social Media Culture",
    summary:
      "A culturally driven language system for women’s health conversations that need to survive moderation filters.",
    problem:
      "Women’s health content is routinely censored online, while sexualised slang remains untouched.",
    insight:
      "Algorithms struggle to detect metaphor and coded language.",
    solution:
      "A culturally-driven language system that uses euphemisms to bypass moderation filters and keep conversations around women’s health alive.",
    outcome:
      "A speculative campaign that treats censorship as a creative constraint and asks who gets to name their own body.<br><br><span class='text-sm text-signal-paper/50'><i>Developed as a collaborative group project for D&AD New Blood 2026. (Spoiler: we didn't win, but we definitely should have.)</i></span>",
    gallery: [
      {
        image: "/work/what-do-you-call-gal-1.png",
        caption: "Food trucks, menus, and receipts acting as physical gateways to bypass digital censorship and link directly to educational platforms."
      },
      {
        image: "/work/what-do-you-call-gal-2.png",
        caption: "Social activations and an mockup website designed for data collection and mapping out conversational safe havens."
      },
      {
        image: "/work/what-do-you-call-gal-3.png",
        caption: "A self-replenishing system. Every time a platform bans a word, a new slang term immediately takes its place to keep the conversation going."
      }
    ],
    corporateSummary: "A strategic digital communications framework designed to navigate social media moderation and protect important consumer conversations.",
    corporateProblem: "Crucial conversations around women’s health are frequently flagged and removed by social media algorithms, negatively impacting community engagement and education.",
    corporateInsight: "We recognized that while automated moderation filters are strict, they struggle to understand cultural nuances, creative metaphors, and coded language.",
    corporateSolution: "Created a dynamic, culturally relevant language system that allows users to bypass content filters, ensuring health-related discussions remain accessible and active.",
    corporateOutcome: "Pitched a complete strategic roadmap for the D&AD New Blood 2026 initiative. Thrilled to continue pushing the envelope and driving creative problem-solving in the digital space. 💡"
  },
];

export const experience: Experience[] = [
  {
    title: "How do you make a collectible survive past the unboxing?",
    detail:
      "Traditional collectibles often lose engagement the second the box is opened. For Pokémon Catchables, the insight was that young audiences seek emotional interaction and self-expression, not just another static trading card. The solution transformed physical toys into interactive companions, pairing reusable physical eggs with a connected digital experience to build a new generation of collectors.",
    links: [
      { label: "View Digital Experience", url: "https://catchables.netlify.app" }
    ],
    images: [
      "/work/experience/pokemon-1.png",
      "/work/experience/pokemon-2.png",
      "/work/experience/pokemon-3.png",
      "/work/experience/pokemon-4.png"
    ]
  },
  {
    title: "How do you make people care about non-league football before kick-off?",
    detail:
      "Working in matchday media for Cray Valley PM FC taught me that local football isn't about glamour, it's about grit. Without realising it at the time, standing on the sidelines recording raw, reactive content for Instagram was a crash course in social-first thinking. It wasn't about broadcasting polished match updates; it was about tapping into the immediate culture of the terraces and giving fans content that felt native to their feeds. It proved that whether you're working for a local club or a Premier League giant, the job is the same: treating social channels as active communities where narratives are built before the whistle even blows.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/crayvalleypm/" },
      { label: "X (Twitter)", url: "https://x.com/CrayValleyPM" }
    ]
  },
  {
    title: "How do you sell a film society to a screen-fatigued generation?",
    detail:
      "As Head of Marketing for the Cinematic Arts Society at the University of Greenwich, my role was a lesson in grassroots community building. I designed social media posts, showed up to events, and hustled to get as many bodies through the door as possible. It was a grounded experiment in trying to sell not just the movies, but the social experience of watching them.",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/cinematicartsgre/" }
    ]
  },
  {
    title: "Could Cyberpunk 2077 sell products in 202X?",
    detail:
      "An upcoming experiment testing whether dystopian advertising can persuade contemporary consumers. It’s a dive into in-game brand strategy, asking if the hyper-commodified world of Night City holds lessons for real-world campaigns. Currently in the 'obsessive research' phase.",
    links: [],
    isWip: true
  },
];

export const unfinishedNotes = [
  "A board game about queue etiquette where nobody knows the rules, but everyone is furious.",
  "Campaign thought: what if a brand behaved like the most useful person in the room?",
  "Beer tasting notes are basically brand strategy with more honesty.",
  "Football chants are sonic logos that people actually want to repeat.",
  "Failed concept: an AI confession booth. Too weird. Maybe not weird enough.",
  "Observation: people say they hate being marketed to, then wear logos across their chest.",
  "Question for later: can a menu be a personality test?",
  "Keep the idea. Burn the explanation.",
];