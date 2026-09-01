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

export const weeklySignals: WeeklySignal[] = [];
