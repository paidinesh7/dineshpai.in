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
    id: "week-37-2026",
    week: "Week of September 19, 2026",
    items: [
      {
        title: "after this post you will be sizing bets in your head",
        source: "Moontower Meta",
        url: "https://moontower.substack.com/p/after-this-post-you-will-be-sizing",
        category: "Risk Management",
        takeaway: "Option trader Kris Abdelmessih's masterclass on position sizing using the Kelly Criterion, balancing compounding and survival under uncertainty, and why over-betting is the ultimate cause of allocator failure."
      },
      {
        title: "Nubank America & The AWS of Money",
        source: "fintechbrainfood.com",
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash",
        category: "Fintech",
        takeaway: "Deconstructs Nubank's massive U.S. neobanking debut using Lead Bank as a sponsor shortcut, and how their stablecoin-powered 'Nu Global' remittance engine bridges retail banking with on-chain rails."
      },
      {
        title: "Kenyans Did Homework for Years. Then A.I. Arrived.",
        source: "New York Times",
        url: "https://www.nytimes.com/2026/09/05/technology/kenya-college-essays-ai.html",
        category: "Digital Livelihoods",
        takeaway: "A sobering case study of how generative AI completely decimated a thriving 40,000-person essay-writing gig economy in Nairobi, warning us of the extreme fragility of transactional digital labor."
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
        category: "AI Safety & Policy",
        takeaway: "Anthropic CEO Dario Amodei outlines 'pacing'—a verifiable middle path to slow down frontier AI capability growth so safety audits can keep up, triggered by recursive self-improvement and swarm alignment failures."
      },
      {
        title: "The Dauphin Discount: Love the Founder",
        source: "Business Standard",
        url: "https://www.business-standard.com/opinion/columns/the-dauphin-discount-love-the-founder-126091101542_1.html",
        category: "Corporate Governance",
        takeaway: "A data-rich breakdown of why public markets apply a 15-25% valuation haircut once second-generation heirs take over, contrasting founder-led paranoia with entitled, consulting-heavy managerial decay."
      },
      {
        title: "A Short History of Trend-Following and Momentum",
        source: "A Wealth of Common Sense",
        url: "https://awealthofcommonsense.com/2026/09/a-short-history-of-trend-following-and-momentum/",
        category: "Capital Markets",
        takeaway: "An empirical look at why trend-following serves as an essential behavioral release valve during market drawdowns, and how cap-weighted index funds are inherently automated momentum engines."
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
        category: "Early-Stage Execution",
        takeaway: "Paul Graham explains why startups don't take off on their own—urging founders to manually recruit users, delight them to extremes, and resist premature automation."
      },
      {
        title: "An Ode to Counter-Positioning",
        source: "notboring.co",
        url: "https://www.notboring.co/p/an-ode-to-counter-positioning",
        category: "Business Strategy",
        takeaway: "Packy McCormick analyzes Helmer's ultimate business moat—how upstarts win by adopting business models that incumbents are structurally paralyzed from copying."
      },
      {
        title: "The Psychology of Money",
        source: "Morgan Housel",
        url: "https://dineshpai.in/blog/timing-and-capital---what-your-spreadsheets-cant-tell-you",
        category: "Behavioral Finance",
        takeaway: "Exploring why financial success is driven by behavioral humility and survival margins over raw mathematical modeling—saving to feed your freedom, not just your ego."
      }
    ]
  }
];
