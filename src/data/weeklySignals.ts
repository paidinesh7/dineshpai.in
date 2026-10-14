export interface CurationItem {
  title: string;
  source: string;
  url: string;
  category: string;
  takeaway: string;
}

export interface WeeklySignal {
  id: string;
  week: string;
  description?: string;
  items: CurationItem[];
}

export const weeklySignals: WeeklySignal[] = [
  {
    id: "week-41-2026",
    week: "Week of October 12, 2026",
    items: [
      {
        title: "The Importance of Playing to Win",
        source: "The Odin Times (Dan Gray)",
        url: "https://blog.joinodin.com/p/the-importance-of-playing-to-win",
        category: "Venture Capital",
        takeaway: "In venture capital, chasing 'access' to hot, consensus deals is usually a trap. The best founders and investors learn faster from direct, real-world feedback than from polished credentials."
      },
      {
        title: "The Best Charity of the Next 50 Years Might Be a Company",
        source: "Collaborative Fund (Craig Shapiro)",
        url: "https://collabfund.com/blog/the-best-charity-of-the-next-50-years-might-be-a-company/",
        category: "Business Models",
        takeaway: "For a century, companies extracted profits first and gave back through charity later. The most enduring businesses of the next 50 years will build models where unit economics improve only when customer and community outcomes improve."
      },
      {
        title: "Why Doesn’t the Risk of AI Feel More Frightening?",
        source: "Behavioural Investment (Joe Wiggins)",
        url: "https://behaviouralinvestment.com/2026/09/28/why-doesnt-the-risk-of-ai-wiping-out-humanity-feel-more-frightening/",
        category: "Behavioral Finance",
        takeaway: "We are wired to react to vivid, emotional threats while ignoring slow-moving statistical risks. In markets as in technology, abstract risks on a spreadsheet rarely feel real until the damage is already done."
      }
    ]
  },
  {
    id: "week-40-2026",
    week: "Week of October 5, 2026",
    items: [
      {
        title: "Trust Is The Scarce Asset",
        source: "Pivotal",
        url: "https://pivotal.substack.com/p/trust-is-the-scarce-asset",
        category: "Business Moats",
        takeaway: "As AI makes generating code and content nearly free, value shifts to what cannot be automated: trust. Durable moats will belong to businesses built on skin in the game, reputation, and clear accountability."
      },
      {
        title: "The Stablecoin Inversion: OUSD & The Open Standard Coalition",
        source: "Open Standard (Visa / Stripe)",
        url: "https://openstandard.org",
        category: "Fintech",
        takeaway: "Instead of keeping interest income on reserves like Tether or Circle, Open USD shares 100% of yield and network ownership with the platforms distributing it—a modern take on how Visa was originally built as a member-owned network."
      },
      {
        title: "RIP, the Product Playbook",
        source: "Build with AI (GrowthX)",
        url: "https://buildwithai.to/p/rip-the-product-playbook",
        category: "Product Strategy",
        takeaway: "When software can take a user from prompt to output in seconds, traditional onboarding funnels stop mattering. The real bottleneck shifts from building features to having clear product judgment."
      }
    ]
  },
  {
    id: "week-37-2026",
    week: "Week of September 19, 2026",
    items: [
      {
        title: "after this post you will be sizing bets in your head",
        source: "Moontower Meta",
        url: "https://moontower.substack.com/p/after-this-post-you-will-be-sizing",
        category: "Risk Management",
        takeaway: "Kris Abdelmessih breaks down position sizing under uncertainty—why even a great bet can ruin you if you size it too aggressively, and why survival always comes before maximizing returns."
      },
      {
        title: "Nubank America & The AWS of Money",
        source: "fintechbrainfood.com",
        url: "https://www.fintechbrainfood.com/p/nubank-america-and-the-aws-of-money",
        category: "Fintech",
        takeaway: "How Nubank is entering the U.S. market through partner banking rails and using low-cost cross-border settlement to connect everyday retail banking with global transfers."
      },
      {
        title: "Kenyans Did Homework for Years. Then A.I. Arrived.",
        source: "New York Times",
        url: "https://www.nytimes.com/2026/09/05/technology/kenya-college-essays-ai.html",
        category: "Livelihoods & AI",
        takeaway: "A sobering look at how generative AI wiped out a 40,000-person freelance writing economy in Nairobi almost overnight—and a reminder of how fragile purely transactional digital work has become."
      }
    ]
  },
  {
    id: "week-36-2026",
    week: "Week of September 12, 2026",
    items: [
      {
        title: "We Must Pace the Frontier",
        source: "darioamodei.com",
        url: "https://darioamodei.com/post/we-must-pace-the-frontier",
        category: "AI Policy",
        takeaway: "Anthropic CEO Dario Amodei makes the case for tying frontier AI deployment speed to measurable safety benchmarks rather than racing blindly ahead."
      },
      {
        title: "The Dauphin Discount: Love the Founder",
        source: "Business Standard",
        url: "https://www.business-standard.com/opinion/columns/the-dauphin-discount-love-the-founder-126091101542_1.html",
        category: "Governance",
        takeaway: "Why public markets often price in a 15–25% discount when second-generation heirs take over from founders—and how hard it is to pass down founder-level urgency and cost discipline."
      },
      {
        title: "A Short History of Trend-Following and Momentum",
        source: "A Wealth of Common Sense",
        url: "https://awealthofcommonsense.com/2026/09/a-short-history-of-trend-following-and-momentum/",
        category: "Capital Markets",
        takeaway: "A clear look at why momentum persists across centuries of market data, and how simple index funds quietly act as long-term trend-following machines."
      }
    ]
  },
  {
    id: "week-35-2026",
    week: "Week of September 5, 2026",
    items: [
      {
        title: "Do Things That Don't Scale",
        source: "paulgraham.com",
        url: "https://paulgraham.com/ds.html",
        category: "Early Stage",
        takeaway: "Paul Graham's classic reminder that startups don't take off on their own—in the beginning, you have to recruit users manually, solve their problems by hand, and resist automating too early."
      },
      {
        title: "An Ode to Counter-Positioning",
        source: "notboring.co",
        url: "https://www.notboring.co/p/an-ode-to-counter-positioning",
        category: "Strategy",
        takeaway: "How challengers win against giants by choosing a business model that incumbents cannot copy without hurting their own existing cash cow."
      },
      {
        title: "The Psychology of Money",
        source: "Morgan Housel",
        url: "https://dineshpai.in/blog/timing-and-capital---what-your-spreadsheets-cant-tell-you",
        category: "Behavioral Finance",
        takeaway: "Doing well with money has little to do with how smart you are and everything to do with how you behave—staying unbreakable so you can let compounding work uninterrupted."
      }
    ]
  }
];
