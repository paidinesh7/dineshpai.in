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
    id: "week-46-2026",
    week: "Week of November 16, 2026",
    items: [
      {
        title: "The Soft Enemy Problem",
        source: "The Odin Times (Dan Gray)",
        url: "https://blog.joinodin.com/p/the-soft-enemy-problem",
        category: "Venture Capital",
        takeaway: "After decades of fighting weak insurgents, militaries started optimising for tactics that looked good on camera rather than what works against a real adversary. Venture capital fell into the same trap during the easy-money years, nudging smart founders toward quick 18-month valuation markups instead of hard 5-year engineering and industrial problems."
      },
      {
        title: "What Comes After Selling Work",
        source: "Digital Native (Rex Woodbury & Jared Newman)",
        url: "https://www.digitalnative.tech/p/what-comes-after-selling-work",
        category: "Business Models",
        takeaway: "As open-weight and frontier AI models drive the cost of routine cognitive work toward zero, charging for automated bookkeeping, legal work, or compliance will face rapid price wars. The durable model is giving the work away for free to capture the underlying network of transactions, working capital, and risk underwriting."
      },
      {
        title: "What's in a Round?",
        source: "Capital Gains / The Diff (Byrne Hobart)",
        url: "https://capitalgains.thediff.co/p/tranched-rounds",
        category: "Venture Mechanics",
        takeaway: "Why US venture rounds are splitting into multi-price tranches where funds supplying scarce GPU compute or brand signaling buy in cheap and bring in pure-cash funds days later at 2x to 5x the price. A candid look at how funds manufacture quick paper markups to game their next LP fundraise."
      }
    ]
  },
  {
    id: "week-44-2026",
    week: "Week of November 2, 2026",
    items: [
      {
        title: "Why Being Right Can Make You a Worse Investor",
        source: "Morningstar (Allan Roth)",
        url: "https://www.morningstar.com/financial-advisors/why-being-right-can-make-you-worse-investor",
        category: "Behavioral Finance",
        takeaway: "Even if an epidemiologist had told you in December 2019 with 100% certainty that a pandemic would shut down the global economy in 2020, selling your stocks for T-bills would have lost you money. Being right about the world rarely beats the market when consensus truths are already priced in."
      },
      {
        title: "5 Myths and Misunderstandings About Investing in the Stock Market",
        source: "TKer (Sam Ro)",
        url: "https://www.tker.co/p/stock-market-investing-myths-and-misunderstandings",
        category: "Market Data",
        takeaway: "Hard data dismantling five common market beliefs: why P/E multiples do not revert to a fixed historical average, why only 19% of S&P 500 stocks beat the index average, and why even the top 20 stock market winners of the last 40 years suffered a median drawdown of 72% along the way."
      },
      {
        title: "The Case for Global Investing",
        source: "Nonmaterial (VSG)",
        url: "https://nonmaterial.substack.com/p/the-case-for-global-investing",
        category: "Asset Allocation",
        takeaway: "Almost all of US stocks' outperformance over international markets since 1969 came after 2009. A good reminder that single-country exceptionalism moves in multi-decade cycles, and how a globally diversified portfolio protected Japanese savers even at the peak of the 1989 Nikkei bubble."
      }
    ]
  },
  {
    id: "week-42-2026",
    week: "Week of October 19, 2026",
    items: [
      {
        title: "Consequences of Cheap Electricity",
        source: "Ajay Shah (Business Standard / The Leap Blog)",
        url: "https://www.mayin.org/ajayshah/MEDIA/2026/clean_consequences.html",
        category: "Energy & Industry",
        takeaway: "For the first time since the Industrial Revolution, India beats the US on both labor costs and electricity prices. With daylight solar at ₹2.50/kWh and firm 24x7 solar-plus-storage at ₹5.25/kWh—cheaper than new coal—cheap power stops being just a climate goal and becomes a core industrial advantage."
      },
      {
        title: "AI 2027",
        source: "AI Futures Project (Kokotajlo, Alexander et al.)",
        url: "https://ai-2027.com/",
        category: "AI Forecasting",
        takeaway: "A detailed month-by-month scenario tracing how coding agents could evolve into autonomous AI researchers over the next 30 months. Worth reading both for its concrete look at compute and power bottlenecks, and for how it grounds frontier technology in everyday bureaucracy and geopolitics."
      },
      {
        title: "What the Heck Is Wonder?",
        source: "The Leverage (Evan Armstrong)",
        url: "https://www.gettheleverage.com/p/what-the-heck-is-wonder",
        category: "Unit Economics",
        takeaway: "A breakdown of Marc Lore's $9B food-tech roll-up—and a good lens on why high-capex kitchen robotics and multi-brand food delivery work differently in the US ($45 average orders) than in India (₹300 average orders and low kitchen labor costs)."
      }
    ]
  },
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
        source: "Pivotal (Abraham Thomas)",
        url: "https://pivotal.substack.com/p/trust-is-the-scarce-asset",
        category: "Business Moats",
        takeaway: "As AI makes generating code and content nearly free, value shifts to what cannot be automated: trust. Durable moats will belong to businesses built on skin in the game, reputation, and clear accountability."
      },
      {
        title: "The Stablecoin Inversion: OUSD & The Open Standard Coalition",
        source: "Open Standard (Visa / Stripe)",
        url: "https://finance.yahoo.com/markets/crypto/articles/ousd-stablecoin-goes-live-visa-212301843.html",
        category: "Fintech",
        takeaway: "Instead of keeping interest income on reserves like Tether or Circle, Open USD shares reserve yield and network ownership with the platforms distributing it—a modern take on how Visa was originally built as a member-owned network."
      },
      {
        title: "RIP, the Product Playbook",
        source: "Build with AI (Abhishek / GrowthX)",
        url: "https://buildwithai.to/p/rip-the-product-playbook",
        category: "Product Strategy",
        takeaway: "When software can take a user from prompt to output in seconds, traditional onboarding funnels stop mattering. The real bottleneck shifts from building features to having clear product judgment."
      }
    ]
  },
  {
    id: "week-39-2026",
    week: "Week of September 28, 2026",
    items: [
      {
        title: "Why Ambitious Investors Fail",
        source: "Reimar Scholz",
        url: "https://reimarscholz.substack.com/p/why-ambitious-investors-fail",
        category: "Investing",
        takeaway: "Most investment mistakes come from boredom and action bias rather than a lack of IQ. Like carmakers reducing defects on an assembly line, long-term compounding comes from systematically eliminating unforced errors."
      },
      {
        title: "Benjamin Graham Unscripted",
        source: "Kingswell (Alex Morris)",
        url: "https://www.kingswell.io/p/benjamin-graham-unscripted",
        category: "Market History",
        takeaway: "Notes from a 1955 archival interview with Benjamin Graham: why Wall Street consensus is no better than a coin flip, why mechanical strategies like dollar-cost averaging fail when human emotions take over, and why credit leverage—not high prices alone—causes market crashes."
      },
      {
        title: "The Mega-Million Dollar Customer",
        source: "The Leverage (Kyle Harrison & Evan Armstrong)",
        url: "https://www.gettheleverage.com/p/the-mega-million-dollar-customer",
        category: "SaaS & AI",
        takeaway: "Why chasing logo counts in AI software is misleading when inference costs pull gross margins down to ~50%, and how to separate temporary 'experimental' budgets from sticky annual contracts."
      }
    ]
  },
  {
    id: "week-38-2026",
    week: "Week of September 21, 2026",
    items: [
      {
        title: "Hyperbanks & The New Financial",
        source: "Fintech Blueprint (Lex Sokolin)",
        url: "https://lex.substack.com/p/analysis-hyperbanks-and-the-new-financial",
        category: "Fintech Plumbing",
        takeaway: "The split between 'Neobranches' (polished apps renting banking APIs with thin margins) and 'Hyperbanks' (firms that own their regulatory licenses and clear directly at the central-bank and depository level)."
      },
      {
        title: "Cards on UPI: Why Only RuPay Is Winning",
        source: "Unit Economics (Kaushik)",
        url: "https://uniteconomics.substack.com/p/cards-on-upi-why-only-rupay-is-winning",
        category: "Indian Fintech",
        takeaway: "A clear breakdown of how reserving credit-on-UPI for RuPay pushed its share of new cards past 30%, and how the 0% MDR rule on transactions under ₹2,000 squeezes issuing bank margins."
      },
      {
        title: "The Overhang",
        source: "One Useful Thing (Ethan Mollick)",
        url: "https://www.oneusefulthing.org/p/the-overhang",
        category: "AI & Workflows",
        takeaway: "Even if AI labs stopped training new models today, it would take years for companies to absorb what existing models can already do. The bottleneck is no longer raw model intelligence, but workflow design and human judgment."
      }
    ]
  },
  {
    id: "week-37-2026",
    week: "Week of September 14, 2026",
    items: [
      {
        title: "after this post you will be sizing bets in your head",
        source: "Moontower Meta (Kris Abdelmessih)",
        url: "https://moontower.substack.com/p/after-this-post-you-will-be-sizing",
        category: "Risk Management",
        takeaway: "Kris Abdelmessih breaks down position sizing under uncertainty—why even a great bet can ruin you if you size it too aggressively, and why survival always comes before maximizing returns."
      },
      {
        title: "Nubank America & The AWS of Money",
        source: "Fintech Brainfood (Simon Taylor)",
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
    week: "Week of September 7, 2026",
    items: [
      {
        title: "We Must Pace the Frontier",
        source: "Dario Amodei",
        url: "https://darioamodei.com/post/we-must-pace-the-frontier",
        category: "AI Policy",
        takeaway: "Anthropic CEO Dario Amodei makes the case for tying frontier AI deployment speed to measurable safety benchmarks rather than racing blindly ahead."
      },
      {
        title: "The Dauphin Discount: Love the Founder",
        source: "Business Standard (Sandeep Goyal)",
        url: "https://www.business-standard.com/opinion/columns/the-dauphin-discount-love-the-founder-126091101542_1.html",
        category: "Governance",
        takeaway: "Why public markets often price in a 15–25% discount when second-generation heirs take over from founders—and how hard it is to pass down founder-level urgency and cost discipline."
      },
      {
        title: "A Short History of Trend-Following and Momentum",
        source: "A Wealth of Common Sense (Ben Carlson)",
        url: "https://awealthofcommonsense.com/2026/09/a-short-history-of-trend-following-and-momentum/",
        category: "Capital Markets",
        takeaway: "A clear look at why momentum persists across centuries of market data, and how simple index funds quietly act as long-term trend-following machines."
      }
    ]
  }
];
