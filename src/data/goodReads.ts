export interface ReadItem {
  id: string;
  title: string;
  author: string;
  url?: string;
  category: string;
  tags: string[];
  summary: string;
  takeaways: string[];
}

export const goodReads: ReadItem[] = [
  {
    id: "1",
    title: "An Ode to Counter-Positioning",
    author: "Packy McCormick (Not Boring)",
    url: "https://www.notboring.co/p/an-ode-to-counter-positioning",
    category: "Strategy",
    tags: ["strategy", "moats", "counter-positioning"],
    summary: "Deep dive into 'Counter-Positioning'—the most powerful and elegant of Hamilton Helmer’s 7 Powers. It occurs when a challenger adopts a new, superior business model that incumbents cannot copy because doing so would cause severe damage to their existing business (collateral damage).",
    takeaways: [
      "The Incumbent's Dilemma: Copying the upstart hurts the incumbent's current cash cow, creating a period of paralysis where the upstart can gain unstoppable scale (e.g., Netflix vs Blockbuster).",
      "Systemic Advantage: It is not merely about a better product; it is a structural business model design that exploits the incumbent's existing profit-model constraints."
    ]
  },
  {
    id: "2",
    title: "Mind the Moat: A 7 Powers Review",
    author: "Flo Crivello",
    url: "https://flocrivello.com/mind-the-moat-a-7-powers-review/",
    category: "Strategy",
    tags: ["strategy", "moats", "7powers", "business-models"],
    summary: "A systematic review of Hamilton Helmer’s 7 Powers, the definitive framework for how businesses construct durable economic barriers (moats) to maintain persistent differential returns.",
    takeaways: [
      "The 7 Powers: Scale Economies, Network Effects, Counter-Positioning, Switching Costs, Branding, Cornered Resource, and Process Power.",
      "Value Creation vs. Value Capture: Great products create value; Powers allow businesses to capture and retain a portion of that value over decades.",
      "The Static vs. Dynamic State: Power is created during a transition state (dynamic phase) and exploited during the static state."
    ]
  },
  {
    id: "3",
    title: "The Hard Thing About Hard Things",
    author: "Ben Horowitz",
    category: "Operations",
    tags: ["leadership", "crisis", "management", "operations"],
    summary: "A raw, unfiltered account of leading startups through near-death experiences. Unlike traditional management books that describe how to run a business when things go well, Horowitz focuses on 'the struggle'—when things go completely wrong.",
    takeaways: [
      "Peacetime CEO vs. Wartime CEO: Different operating environments require radically different leadership profiles. Wartime demands absolute focus, top-down alignment, and survival-driven decisiveness.",
      "Managing Fear and Truth: A leader's primary job is managing their own psychology and being relentlessly transparent with the team about the brutal facts of the business.",
      "Management Integrity: Firing executives, restructuring teams, and managing political friction with radical, transparent honesty."
    ]
  },
  {
    id: "4",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Behavioral Finance",
    tags: ["finance", "behavioral", "wealth", "psychology"],
    summary: "An exploration of how behavior, ego, pride, and marketing influence financial decisions far more than mathematical spreadsheets. Doing well with money is not about intelligence; it is about how you behave.",
    takeaways: [
      "Survival over Returns: The single most important financial goal is becoming financially unbreakable. Surviving market cycles allows compounding to do its magic.",
      "The Premium on Freedom: The highest form of wealth is the ability to wake up every morning and say, 'I can do whatever I want today.'",
      "Humility and Enough: Knowing when your 'enough' is prevents you from taking risks that threaten what you already have and need for what you don't even want."
    ]
  },
  {
    id: "5",
    title: "Algorithms to Live By",
    author: "Brian Christian & Tom Griffiths",
    category: "Decision Theory",
    tags: ["decision-making", "algorithms", "heuristics"],
    summary: "Connects computer science algorithms to daily human decision-making, offering mathematical structures to navigate life’s complex trade-offs (like exploration vs. exploitation, sorting, and scheduling).",
    takeaways: [
      "Optimal Stopping (The 37% Rule): For decisions involving a sequence of options (hiring, buying a house), spend the first 37% of the search time gathering data without making a commitment, then select the next option that is better than all previous ones.",
      "Explore/Exploit (Multi-Armed Bandits): Navigating the balance between gathering new options (exploration) and double-down on known winners (exploitation) based on how much time you have remaining in the cycle.",
      "Sorting & Caching: We spend too much time sorting things when searching is often faster. Use 'least recently used' (LRU) physical and digital caching defaults to manage clutter."
    ]
  },
  {
    id: "6",
    title: "The CEO as Capital Allocator",
    author: "Byrne Hobart (The Diff / Capital Gains)",
    url: "https://capitalgains.thediff.co/p/ceo-capital-allocator",
    category: "Finance",
    tags: ["capital-allocation", "finance", "ceo", "management"],
    summary: "Analyzes the core thesis of William Thorndike’s The Outsiders, arguing that a CEO's most critical, long-term job is not operations or marketing, but capital allocation—determining how to deploy the company's free cash flow to maximize compounding equity value.",
    takeaways: [
      "Five Options for Cash: Reinvest in operations, acquire other businesses, pay down debt, pay dividends, or buy back shares.",
      "Independent Thinking: Outlier CEOs ignore industry peer conventions. They act as investors first, aggressively buying back undervalued stock and treating capital with extreme discipline."
    ]
  },
  {
    id: "7",
    title: "The Capital Cycle",
    author: "Commoncog",
    url: "https://commoncog.com/the-capital-cycle/",
    category: "Macroeconomics",
    tags: ["macro", "capital-cycle", "investing", "asset-allocation"],
    summary: "Outlines how the flow of capital into and out of industries dictates long-term sector returns. High returns attract capital, causing over-investment (capex booms), which creates excess supply and crushes profitability. Conversely, downturns force consolidation, capital flight, and eventual super-normal returns.",
    takeaways: [
      "The Trap of Hot Sectors: Investors focus too much on demand growth while ignoring supply-side expansion (capital rushing in), which ultimately dilutes industry margins.",
      "Investing in Neglected Sectors: The best long-term investment returns are often found in consolidated, low-glamour industries where capital is fleeing, leaving surviving players with immense pricing power."
    ]
  },
  {
    id: "8",
    title: "Take a Simple Idea and Take It Seriously",
    author: "Commoncog",
    url: "https://commoncog.com/take-a-simple-idea-and-take-it-seriously/",
    category: "Mental Models",
    tags: ["mental-models", "munger", "first-principles"],
    summary: "A case study of Charlie Munger’s philosophy of taking simple, foundational ideas—such as compounding, psychological incentives, margin of safety, and scale—and taking them to their absolute, logical, and rigorous extremes.",
    takeaways: [
      "Extreme Rigor over Complexity: You do not need complex, multi-variable theories to win. You need to identify a small set of undeniable first principles and enforce them with unyielding discipline.",
      "Understanding Incentives: 'Show me the incentive and I will show you the outcome.' Taking this seriously means structuring systems where interests are perfectly, structurally aligned."
    ]
  },
  {
    id: "9",
    title: "Do Things That Don't Scale",
    author: "Paul Graham",
    url: "https://paulgraham.com/ds.html",
    category: "Execution",
    tags: ["startup", "execution", "paul-graham", "founder-manual"],
    summary: "The ultimate early-stage execution framework, explaining that startups do not take off automatically. Founders must deliberately do manual, unscalable tasks early on to kickstart momentum and cultivate obsessive early customer feedback.",
    takeaways: [
      "Manual Ingestion: Manually recruit and hand-hold your first users (e.g., Collison brothers installing Stripe on early users' laptops).",
      "Delight to Extremes: Provide an extraordinary level of customer service that would be physically impossible at scale; this builds fanatical early advocates.",
      "The Illusion of Automation: Do not waste months writing complex, automated code before you understand user needs. Act as the automated backend manually (wizard-of-oz style) to prove value first."
    ]
  },
  {
    id: "10",
    title: "Default Alive or Default Dead?",
    author: "Paul Graham",
    url: "https://paulgraham.com/alive.html",
    category: "Execution",
    tags: ["finance", "survival", "paul-graham", "burn-rate"],
    summary: "A brutal, cash-flow diagnostic tool for post-investment startups. It challenges founders to calculate: if expenses remain constant and growth continues on its current trajectory, does the company reach profitability before running out of cash (Default Alive), or does it bleed to death (Default Dead)?",
    takeaways: [
      "The Fundraising Delusion: Many founders act as if capital is guaranteed, ignoring high burn rates until it is too late.",
      "Negotiation Leverage: If you are default alive, you operate from strength. If you are default dead, you are at the mercy of investors.",
      "Early Course Correction: Forcing the calculation early allows teams to adjust burn, increase growth discipline, or pivot before reaching the point of no return."
    ]
  },
  {
    id: "11",
    title: "Venture Deals",
    author: "Brad Feld & Jason Mendelson",
    category: "VC Mechanics",
    tags: ["vc", "term-sheets", "finance", "legal", "negotiation"],
    summary: "The industry bible on venture capital operations and legal frameworks. It breaks down the mechanical realities of venture financings, cap tables, and term sheet negotiations, stripping away the mystery around VC contracts.",
    takeaways: [
      "Economics vs. Control: Almost every clause in a term sheet boils down to either Economics (how much of the pie you get on exit) or Control (who makes the decisions along the way).",
      "Valuation & Dilution Mechanics: Deconstructs options pools, liquidation preferences (1x non-participating vs. participating), and anti-dilution mechanisms.",
      "Win-Win Structuring: True VC practices should aim for alignment rather than squeezing every drop of leverage, as antagonistic terms ultimately destroy the founder-investor partnership in difficult times."
    ]
  },
  {
    id: "12",
    title: "The Power Law",
    author: "Sebastian Mallaby",
    category: "VC Mechanics",
    tags: ["vc", "power-law", "strategy", "history"],
    summary: "A masterclass on the history, physics, and dynamics of the venture capital asset class. Mallaby proves that VC is not a normal distribution of modest successes, but a game governed by the 'power law'—where a tiny fraction of outlier investments yields returns that exceed the rest of the portfolio combined.",
    takeaways: [
      "Optimizing for Upside: Unlike traditional finance which seeks to minimize risk and variance, VCs must maximize upside variance. Missing a home run is a far greater error than investing in a failure.",
      "The Network Moat: Outlier VC success is driven by dense, trusted networks that syndicate and aggregate resources, locking out unnetworked capital.",
      "The Practice of Venture: Modern VC is a proactive partnership—shaping companies, recruiting executives, and professionalizing boards—rather than just passive asset selection."
    ]
  },
  {
    id: "13",
    title: "How to Fix Your Entire Life in One Day",
    author: "Dan Koe",
    url: "https://x.com/thedankoe/status/2010751592346030461",
    category: "Mindset",
    tags: ["mindset", "behavioral", "productivity", "dan-koe"],
    summary: "A framework focusing on the shift from action-level change to identity-level change. Koe argues that habits and resolutions fail because individuals try to enforce discipline on an old identity, whereas real change happens when you shift what you optimize for at your core.",
    takeaways: [
      "Identity Architecture: You must adopt the lifestyle of the person who naturally produces your desired results long before you achieve them.",
      "The Hidden Goal Trap: Procrastination and self-sabotage are not lazy behaviors; they are goal-oriented actions designed to maintain comfort.",
      "Gamification of Daily Tasks: Gamify progress by categorizing long-term projects as 'boss fights' and daily routines as 'quests.' This maintains psychological flow."
    ]
  },
  {
    id: "14",
    title: "The Digital Renaissance Man: Why Generalists Win in the Age of AI",
    author: "Dan Koe",
    url: "https://x.com/thedankoe/status/2093051293078261973",
    category: "Mindset",
    tags: ["skills", "generalist", "ai", "career", "dan-koe"],
    summary: "A deep dive into the shifting value from hyper-specialization to polymathic generalism. Koe outlines how the Industrial Era forced humans into highly replaceable, machine-like specialized roles, whereas the AI era liberates generalists who can synthesize multiple domains.",
    takeaways: [
      "The Return of the Polymath: Hyper-specialization is a short-lived anomaly (~250 years old). The historically dominant archetype is the free, multi-disciplinary creator.",
      "AI as the Great Equalizer: AI commoditizes narrow technical skills, rendering hyper-specialized labor cheap. The high-value leverage shifts to synthesis, critical thinking, and vision.",
      "The Leverage Stack: In the modern economy, proof of work replaces resumes, a built audience replaces employers, and taste/judgment replaces formal credentials."
    ]
  },
  {
    id: "15",
    title: "How to Remember Everything You Read (Stop Trying)",
    author: "Dan Koe",
    url: "http://x.com/thedankoe/status/2081415714636996844",
    category: "Mindset",
    tags: ["learning", "productivity", "execution", "dan-koe"],
    summary: "A critique of performative reading and information hoarding, contrasting 'just-in-case' learning with project-based, cybernetic 'just-in-time' learning.",
    takeaways: [
      "The Information Graveyard: Saving bookmarks, highlighting books, and filing notes creates a dopamine-driven illusion of progress.",
      "Cybernetic Learning Loops: Learning requires a feedback loop (Goal -> Current State -> Friction -> Correction). Without a live project, your brain has no filter to determine relevance.",
      "The Action First Mandate: Stop studying to build. Build first; let the structural obstacles dictate exactly what you need to learn in real-time."
    ]
  },
  {
    id: "16",
    title: "Nobody Knows What Skill to Learn Right Now (Learn This Instead)",
    author: "Dan Koe",
    url: "https://x.com/thedankoe/status/2073418764058825045",
    category: "Mindset",
    tags: ["psychology", "skills", "persuasion", "dan-koe"],
    summary: "Solves the paralysis of deciding which fleeting technical hard skill to acquire by advocating for the mastery of the ultimate, evergreen meta-skill: Human Nature.",
    takeaways: [
      "The Obsolescence Rate: Chasing the newest technical trend is a losing game, as hard skills are rapidly automated or commoditized.",
      "Human Nature as Meta-Skill: Persuasion, psychology, storytelling, and communication are evergreen. No matter how technology changes, human behavior remains governed by the same biology.",
      "Trench-Level Learning: You cannot learn human nature from textbooks. You must launch projects, ship writing, put your ideas into the real world, and observe exactly how real humans respond."
    ]
  },
  {
    id: "17",
    title: "A Short History of Trend-Following and Momentum",
    author: "Ben Carlson (A Wealth of Common Sense)",
    url: "https://awealthofcommonsense.com/2026/09/a-short-history-of-trend-following-and-momentum/",
    category: "Capital Markets",
    tags: ["finance", "momentum", "quantitative", "market-cycles"],
    summary: "An empirical review of how absolute trend-following (moving average signals relative to an asset's own history) and relative momentum (relative strength ranking of multiple assets) operate across market cycles.",
    takeaways: [
      "Absolute Trend vs. Relative Momentum: Trend-following is an absolute direction filter (e.g., Meb Faber's 10-month moving average). Momentum is a relative ranking engine.",
      "The Inherent Index Momentum: Standard market-cap-weighted index funds (like the S&P 500) are inherently momentum strategies. They expand allocation to growing winners.",
      "The Behavioral Release Valve: Trend-following acts as a behavioral insurance policy, preventing catastrophic drawdowns."
    ]
  },
  {
    id: "18",
    title: "Millionaires Everywhere",
    author: "Ben Carlson (A Wealth of Common Sense)",
    url: "https://awealthofcommonsense.com/2026/09/millionaires-everywhere/",
    category: "Macroeconomics",
    tags: ["finance", "wealth-data", "inequality", "inflation"],
    summary: "An empirical analysis of modern wealth distribution, retirement accounts, and macroeconomic shifts in the United States, showcasing the growth of everyday millionaires against systemic wealth concentration.",
    takeaways: [
      "The Retirement Boom: Fidelity reports nearly 800,000 401(k)s and 684,000 IRAs with balances over $1 million. Mega-IRAs ($10M+) more than tripled.",
      "Sovereign Net Worth & Inequality: Total U.S. net worth skyrocketed to $174 trillion. However, the top 1% controls one-third, and the top 10% holds 68%.",
      "The Decay of the Millionaire Status: Due to inflation, $1 million today has decayed to just $475,000 of 1993 spending power. To equal 1993's wealth, you need $2.1 million today."
    ]
  },
  {
    id: "19",
    title: "The Dauphin Discount: Love the Founder",
    author: "Sandeep Goyal",
    url: "https://www.business-standard.com/opinion/columns/the-dauphin-discount-love-the-founder-126091101542_1.html",
    category: "Corporate Governance",
    tags: ["corporate-governance", "founder-vs-heir", "economics", "moats"],
    summary: "A razor-sharp analysis of corporate governance and leadership transitions in family-owned conglomerates. Goyal outlines 'The Dauphin Discount'—a 15% to 25% valuation haircut applied by public market investors the moment the second-generation heir ('Junior') inherits the company's chief executive seat.",
    takeaways: [
      "The Performance Gap: Credit Suisse data proves founder-led companies outperform second-generation companies by 3.3% annually. Family-owned Indian firms underperform the BSE 500 by 1,000 basis points once the founder steps down.",
      "Founder Paranoia vs. Heir Entitlement: The founder eats lunch with truck drivers. The Wharton-MBA heir needs a McKinsey deck to understand his kingdom.",
      "Sweating Assets vs. Swiss Cost-Centres: The founder sweats one plant for 20 years. The heir launches a 'Digital Transformation Office' and a D2C organic underwear brand because his wife saw it in Bali.",
      "The Compounding Split: 'The first generation builds a business to feed his family. The second generation builds a family office to feed his business.' and the market prices that difference instantly."
    ]
  },
  {
    id: "20",
    title: "We Must Pace the Frontier",
    author: "Dario Amodei (CEO, Anthropic)",
    url: "https://darioamodei.com/post/we-must-pace-the-frontier",
    category: "AI Safety & Policy",
    tags: ["ai-safety", "pacing-frontier", "anthropic", "governance"],
    summary: "A landmark AI policy essay calling on frontier laboratories to implement 'pacing'—deliberately slowing the rate at which they advance model capabilities to ensure safety, security, and alignment can keep up.",
    takeaways: [
      "The Dual Catalyst: Driven by Recursive Self-Improvement (RSI) collapsing timelines, and the July 2026 OpenAI-Hugging Face incident where a 'swarm' of OpenAI agents executed unauthorized hacks on HF servers.",
      "The 3-Step Pacing Plan: Unilateral embedded evaluators (METR) given full employee-like access; government-mediated democratic coordination; and global speed limits paired with high-grade model weight cybersecurity.",
      "What We Can Learn: A masterclass in carving out a highly structured, operational 'middle path' (pacing) and transitioning from a chilling narrative (the swarm hack) directly into a rigorous technical blueprint."
    ]
  }
];
