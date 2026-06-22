export type Project = {
  slug: string;
  title: string;
  corporateTitle: string;
  question: string;
  image: string;
  alt: string;
  eyebrow: string;
  summary: string;
  problem: string;
  insight: string;
  solution: string;
  outcome: string;
  gallery: string[];
  tags: string[];
};

export type Obsession = {
  title: string;
  description: string;
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
    image: "/work/face-value.png",
    alt: "A dark exhibition table with board game cards, evidence tokens and identity tags.",
    eyebrow: "Board game / Unconscious Bias",
    summary:
      "A social deduction board game exploring how brands influence assumptions, identity signalling and unconscious bias.",
    problem:
      "People insist they judge fairly, then make tiny decisions based on clothes, logos, price cues and the social story attached to them.",
    insight:
      "A brand can behave like evidence even when it is only atmosphere. Put people in a game and that shortcut becomes visible very quickly.",
    solution:
      "FACE VALUE turns brand signals into playable suspicion. Players read evidence, misread each other and discover how quickly confidence can become bias.",
    outcome:
      "Developed as Aron’s hero project and exhibited at the University of Greenwich End of Year Show 2026.",
    gallery: [
      "Signals that look objective until someone has to defend them.",
      "Cards, roles and accusations designed to make assumptions feel playable.",
      "A museum-like setup for a subject that usually hides in everyday judgement.",
    ],
    tags: ["Speculative Design", "Board Games", "Brand Behaviour"],
  },
  {
    slug: "twinings-loneliness",
    title: "TWININGS x LONELINESS",
    corporateTitle: "Tea-Led Community Engagement Concept",
    question: "Can a cup of tea make a stranger feel less alone?",
    image: "/work/twinings-loneliness.png",
    alt: "A warm evening table with tea cups, cards and people in conversation around the edges.",
    eyebrow: "Campaign Development / Touchpoints",
    summary:
      "A campaign concept where Twinings becomes a ritual for connection through gameplay and conversation-led experiences.",
    problem:
      "Young adults are surrounded by contact but still miss the smaller rituals that make closeness feel easy.",
    insight:
      "Connection often begins before the big conversation. It starts with a shared pause, a repeated gesture and something warm between two people.",
    solution:
      "Twinings becomes the host: tea, prompts, small games and conversation-led experiences that give people a reason to stay a little longer.",
    outcome:
      "A brand experience built around ritual rather than noise, designed to make connection feel less like a performance.",
    gallery: [
      "Tea as permission to slow down.",
      "Prompt-led games that create low-pressure beginnings.",
      "A brand behaving more like a host than a billboard.",
    ],
    tags: ["Brand Experience", "Campaign", "Human Behaviour"],
  },
  {
    slug: "what-do-you-call",
    title: "WHAT DO YOU CALL *****?",
    corporateTitle: "Digital Language Moderation Study",
    question: "What happens when important language is forbidden?",
    image: "/work/what-do-you-call.png",
    alt: "A redacted mixed-media poster with coded symbols, medical imagery and digital screen layers.",
    eyebrow: "Censorship / Social Media Culture",
    summary:
      "A culturally driven language system for women’s health conversations that need to survive moderation filters.",
    problem:
      "Women’s health content is routinely muted online while sexualised slang often slips through untouched.",
    insight:
      "Algorithms are literal in odd places. They can punish the direct word and miss the metaphor, the joke or the coded phrase people already use to survive censorship.",
    solution:
      "A language system of coded terms, visual cues and cultural shorthand that keeps conversations alive without making them smaller.",
    outcome:
      "A speculative campaign that treats censorship as a creative constraint and asks who gets to name their own body.",
    gallery: [
      "Redaction as both obstacle and visual language.",
      "Coded phrases designed to move faster than filters.",
      "A serious subject carried with cultural fluency instead of clinical distance.",
    ],
    tags: ["Speculative Design", "Women's Health", "Digital Culture"],
  },
];

export const experience = [
  {
    title: "Cray Valley PM FC",
    detail:
      "Local football, matchday attention and the strange magic of getting people to care before kick-off.",
  },
  {
    title: "Head of Marketing, Cinematic Arts Society",
    detail:
      "Built the invitation around the feeling of watching films with people who argue about them afterwards.",
  },
  {
    title: "Pokémon Catchables",
    detail:
      "A playful collecting idea with enough nostalgia to make adults admit they still want the shiny one.",
  },
  {
    title: "Other selected projects",
    detail:
      "Small experiments, brand thoughts, half-built systems and things that began with: wait, what if?",
  },
];

export const lessons = [
  "The best ideas usually sound ridiculous at first.",
  "Research is only useful if it changes something.",
  "Board games are one of the best ways to understand people.",
  "A good question can do more work than a polished answer.",
  "Most brands are more interesting when they stop talking about themselves.",
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