export interface Snippet {
  id: string;
  date: string;
  category: string;
  content: string;
  link?: string;
  linkText?: string;
}

export const dailySnippets: Snippet[] = [
  {
    id: "3",
    date: "Aug 31, 2026",
    category: "Moats & Trust",
    content: "Reading about how the best products don't win on features, but on compounding trust. In financial services especially, brand credibility and customer trust is the only moat that competitors can't simply fast-copy or buy with capital.",
  },
  {
    id: "2",
    date: "Aug 29, 2026",
    category: "Contrarian Investing",
    content: "Loved this quote by Howard Marks: 'You can't do the same things others do and expect to outperform.' True contrarianism requires being both lonely and right. Most people only manage the lonely part.",
    link: "https://www.oaktreecapital.com/insights/memos",
    linkText: "Howard Marks Memos"
  },
  {
    id: "1",
    date: "Aug 26, 2026",
    category: "India Private Markets",
    content: "Watching the rise of domestic family offices in India. They are increasingly bypassing traditional PE/VC funds to lead early-stage startup rounds directly. It’s a massive structural shift in capital allocation that will redefine early seed stages over the next decade.",
  }
];
