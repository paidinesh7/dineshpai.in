import React, { useState } from 'react';

export default function KellyWidget() {
  const [winProb, setWinProb] = useState(55); // in % (e.g. 55%)
  const [payoff, setPayoff] = useState(2.0); // e.g. 2:1 (payoff is 2)

  const p = winProb / 100;
  const b = payoff;
  const q = 1 - p;

  // Expected Value (EV) = p * b - q
  const ev = p * b - q;

  // Kelly % = p - q/b = (p * (b + 1) - 1) / b
  const fullKelly = b > 0 ? (p - q / b) * 100 : 0;
  const halfKelly = fullKelly / 2;

  const evPct = ev * 100;

  // Get status text and color
  let statusText = "Negative Expectancy — Do Not Allocate";
  let statusClass = "text-red-600 dark:text-red-400";
  let bgClass = "bg-red-50/50 dark:bg-red-950/10 border-red-200/50 dark:border-red-900/20";
  let accentBarClass = "bg-red-600 dark:bg-red-400";

  if (ev > 0) {
    if (halfKelly > 20) {
      statusText = "High Conviction Expectancy — Strong Sizing";
      statusClass = "text-brand-light dark:text-brand-dark";
      bgClass = "bg-brand-light/5 dark:bg-brand-dark/5 border-brand-light/20 dark:border-brand-dark/20";
      accentBarClass = "bg-brand-light dark:bg-brand-dark";
    } else {
      statusText = "Positive Expectancy — Moderate Sizing (Half-Kelly)";
      statusClass = "text-amber-600 dark:text-amber-400";
      bgClass = "bg-amber-50/30 dark:bg-amber-950/5 border-amber-200/30 dark:border-amber-900/10";
      accentBarClass = "bg-amber-600 dark:bg-amber-400";
    }
  }

  return (
    <div className="p-6 sm:p-8 rounded-lg bg-stone-100/60 dark:bg-stone-900/40 border border-stone-200/50 dark:border-stone-800/50 font-serif space-y-6 shadow-sm">
      
      {/* HEADER */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-3">
        <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 flex items-center justify-between">
          <span>Half-Kelly Sizing Simulator</span>
          <span className="font-mono text-[9px] uppercase tracking-wider bg-stone-200/60 dark:bg-stone-800/60 px-2 py-0.5 rounded text-stone-500 dark:text-stone-400">
            Interactive Calculator
          </span>
        </h3>
        <p className="text-xs text-stone-500 dark:text-stone-400 font-serif mt-1 italic">
          Determine optimal position sizing mathematically.
        </p>
      </div>

      {/* SLIDERS CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* SLIDER 1: WIN PROBABILITY */}
        <div className="space-y-2">
          <div className="flex justify-between font-mono text-xs text-stone-600 dark:text-stone-400 uppercase tracking-wider">
            <span>Win Probability (p)</span>
            <span className="font-bold text-stone-900 dark:text-stone-100">{winProb}%</span>
          </div>
          <input 
            type="range" 
            min="10" 
            max="95" 
            step="1" 
            value={winProb} 
            onChange={(e) => setWinProb(parseInt(e.target.value))}
            className="w-full h-1.5 bg-stone-200 dark:bg-stone-800 rounded-lg appearance-none cursor-pointer accent-brand-light dark:accent-brand-dark"
          />
          <div className="flex justify-between text-[10px] text-stone-400 font-mono">
            <span>10% (Low odds)</span>
            <span>95% (Near certainty)</span>
          </div>
        </div>

        {/* SLIDER 2: PAYOFF RATIO */}
        <div className="space-y-2">
          <div className="flex justify-between font-mono text-xs text-stone-600 dark:text-stone-400 uppercase tracking-wider">
            <span>Payoff Ratio (b)</span>
            <span className="font-bold text-stone-900 dark:text-stone-100">{payoff.toFixed(1)}x</span>
          </div>
          <input 
            type="range" 
            min="0.5" 
            max="5.0" 
            step="0.1" 
            value={payoff} 
            onChange={(e) => setPayoff(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-stone-200 dark:bg-stone-800 rounded-lg appearance-none cursor-pointer accent-brand-light dark:accent-brand-dark"
          />
          <div className="flex justify-between text-[10px] text-stone-400 font-mono">
            <span>0.5x (Downside bias)</span>
            <span>5.0x (Outsize upside)</span>
          </div>
        </div>

      </div>

      {/* READOUT CARD */}
      <div className={`p-4 rounded border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-colors duration-300 ${bgClass}`}>
        <div className="space-y-1">
          <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500 block">
            Ecosystem Verdict
          </span>
          <div className={`text-sm sm:text-base font-bold ${statusClass}`}>
            {statusText}
          </div>
        </div>
        
        <div className="flex gap-4 font-mono text-center self-stretch md:self-auto justify-around md:justify-end border-t border-stone-200/50 dark:border-stone-800/30 md:border-t-0 pt-3 md:pt-0">
          <div className="px-2">
            <span className="text-[10px] uppercase tracking-wider text-stone-400 dark:text-stone-500 block">Expected Value (EV)</span>
            <span className={`text-base font-bold ${ev >= 0 ? 'text-stone-900 dark:text-stone-100' : 'text-red-500'}`}>
              {ev >= 0 ? '+' : ''}{evPct.toFixed(1)}%
            </span>
          </div>
        </div>
      </div>

      {/* METRIC GRAPHICS */}
      <div className="grid grid-cols-2 gap-4">
        
        {/* FULL KELLY POSITION */}
        <div className="p-4 rounded-lg bg-stone-50 dark:bg-stone-950/30 border border-stone-200/40 dark:border-stone-800/40 text-center space-y-1">
          <span className="font-mono text-[9px] uppercase tracking-wider text-stone-400 dark:text-stone-500 block">
            Full-Kelly Allocation
          </span>
          <span className={`text-xl sm:text-2xl font-black font-mono tracking-tight ${ev > 0 ? 'text-stone-900 dark:text-stone-100' : 'text-stone-400 dark:text-stone-600'}`}>
            {ev > 0 ? `${fullKelly.toFixed(1)}%` : '0.0%'}
          </span>
          <p className="text-[10px] font-serif text-stone-400 italic">
            Maximum compounding limit (Aggressive)
          </p>
        </div>

        {/* HALF-KELLY SUGGESTION */}
        <div className="p-4 rounded-lg bg-stone-50 dark:bg-stone-950/30 border border-stone-200/40 dark:border-stone-800/40 text-center space-y-1 relative overflow-hidden">
          {/* Subtle colored accent edge to highlight the recommended approach */}
          <div className={`absolute top-0 left-0 right-0 h-1 ${ev > 0 ? accentBarClass : 'bg-stone-200'}`}></div>
          <span className="font-mono text-[9px] uppercase tracking-wider text-stone-400 dark:text-stone-500 block">
            Recommended (Half-Kelly)
          </span>
          <span className={`text-xl sm:text-2xl font-black font-mono tracking-tight ${ev > 0 ? 'text-brand-light dark:text-brand-dark' : 'text-stone-400 dark:text-stone-600'}`}>
            {ev > 0 ? `${halfKelly.toFixed(1)}%` : '0.0%'}
          </span>
          <p className="text-[10px] font-serif text-stone-400 italic">
            Safeguards against variance (Dinesh's Default)
          </p>
        </div>

      </div>

      {/* FOOTNOTE NOTE */}
      <p className="text-[10px] sm:text-xs text-stone-500 dark:text-stone-400 font-serif leading-relaxed italic border-l-2 border-stone-200 dark:border-stone-800 pl-3">
        * <strong>The Kelly Sizing Philosophy:</strong> Allocating capital using full Kelly mathematically maximizes the growth rate of your bankroll in the long term, but is highly sensitive to parameter misestimation. Sizing at <strong>Half-Kelly</strong> captures ~75% of the growth rate of full Kelly while reducing asset volatility by 50%, providing a vital defense premium against unexpected variance.
      </p>

    </div>
  );
}
