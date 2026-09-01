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
    id: "2",
    week: "Week of August 31, 2026",
    description: "Observations on trust as a moat in fintech, navigating advance taxes in India, and the structural shift of Indian family offices.",
    items: [
      {
        title: "The Moat of Brand Credibility in Indian Finance",
        source: "Nithin Kamath on Risk & Moats (Zerodha Podcast)",
        url: "https://www.youtube.com/watch?v=eZdrpChV0C4",
        category: "Risk & Moats",
        takeaway: "In financial services, trust isn't built through software features, which are easily commoditized, but through reputation, extreme cost leadership, and surviving down-cycles. For Indian fintechs, regulatory compliance and transparency must be treated as strategic moats rather than cost centers."
      },
      {
        title: "Navigating Advance Taxes in India: Why and How to Pay",
        source: "Income Tax Department of India Guide",
        url: "https://www.incometax.gov.in/",
        category: "Personal Finance & Taxes",
        takeaway: "If your tax liability exceeds ₹10,000 after TDS, you must pay advance tax in 4 quarterly installments (June 15, Sept 15, Dec 15, Mar 15) to avoid 1% per month penalty interest under Sections 234B/234C. Tip: Always download your updated AIS/TIS form on the e-filing portal to capture non-salary capital gains or interest income early, and aim to clear the 45% cumulative threshold by the September 15 deadline."
      },
      {
        title: "The Rise of Direct Investments by Indian Family Offices",
        source: "Bain India VC Report 2026",
        url: "https://www.youtube.com/watch?v=TbsWx16UFhM",
        category: "Capital Markets",
        takeaway: "Indian family offices are rapidly moving from passive LP commitments to leading direct venture rounds. This shift is structurally altering early-stage valuations and terms, meaning founders must learn to pitch domestic business houses as much as traditional global funds."
      }
    ]
  },
  {
    id: "1",
    week: "Week of August 24, 2026",
    description: "Deep dives on product-market fit frameworks, testing founder insights, and co-founder alignment strategies.",
    items: [
      {
        title: "Deconstructing Product-Market Fit (GRUE Framework)",
        source: "Sajith Pai (Blume Ventures Podcast)",
        url: "https://www.youtube.com/watch?v=-TqOl7NjB7o",
        category: "PMF Frameworks",
        takeaway: "PMF is not binary; it's a progression from Product-to-Problem Fit (PPF) to Motion-to-Market Fit (MMF). Measuring with the GRUE (Growth, Retention, Unit Economics) framework prevents the common mistake of scaling before product-market synchronization is truly reached."
      },
      {
        title: "Why You? — Testing Founder's Earned Insights",
        source: "Kushal Bhagia (All In Capital Podcast)",
        url: "https://www.youtube.com/watch?v=dhuHgsGevks",
        category: "Pitching & Team",
        takeaway: "In seed-stage meetings, VCs care less about TAM and more about the founder's 'earned insights' from operating in the trenches. If your pitch relies entirely on publicly available industry data, you lack the information asymmetry needed to win."
      },
      {
        title: "The Art of Structured 3-Month Trial Co-founder Partnerships",
        source: "Ashish Goel (Urban Ladder Podcast)",
        url: "https://www.youtube.com/watch?v=ORPVZgc2ScM",
        category: "Team Building",
        takeaway: "Co-founder disputes are one of the leading causes of early-stage startup deaths. Setting up a mutual, explicit 3-month trial period with pre-defined exit clauses is the healthiest way to test alignment and work styles before legally signing equity documents."
      }
    ]
  }
];
