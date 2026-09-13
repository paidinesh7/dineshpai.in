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
  }
];
