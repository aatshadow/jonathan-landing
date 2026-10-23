/* ═══════════════════════════════════════════════════════════════════════════
   TRADESTART · /training · EL CONTENIDO
   18-09-2026: primera versión (4 pilares, todo placeholder).
   22-10-2026: el curso real de Jonathan — «Forex Trading Course, From Zero to a
   Working Strategy», módulos 1-10 de su PDF, con sus 9 vídeos (Drive, carpeta
   1atMZq5ASZAOiOJldXz5kAXYBerKopZQ4). Los módulos 5, 9 y 10 no tienen vídeo:
   son lecciones de lectura (los apuntes debajo).
   24-10-2026: los 9 vídeos pasan del Drive a Bunny Stream, librería propia de
   Jonathan (788540). En la página ya no queda ningún enlace al Drive.

   Este fichero es lo ÚNICO que hay que tocar para meter un vídeo o un documento.
   La página (training.html) lo lee y se pinta sola.

   Cada lección lleva:
     id        → clave estable; es lo que va en la URL (#id). No la cambies una
                 vez publicada o los enlaces compartidos dejan de abrir.
     minutes   → duración en minutos (del vídeo; de lectura si no hay vídeo).
     video     → 'drive:<id>' = fichero de Google Drive (público con enlace);
                 un id a secas = vídeo de Bunny Stream (librería bunnyLibrary).
                 null = lección de lectura (sin vídeo).
     docs      → entregables: [{ title, url, kind }]. kind = PDF · Link · Sheet.
                 Los PDF van en assets/docs/.
     summary   → 1-2 frases debajo del vídeo.
     notes     → los apuntes de la lección (HTML), sacados del PDF del curso.

   Regla de la casa: nada de promesas de rentabilidad (promoción financiera
   regulada, UK/UE). Los textos son los del PDF de Jonathan, con su disclaimer.
   ═══════════════════════════════════════════════════════════════════════════ */
(function(){
  var PDF = { title: 'Forex Trading Course — complete notes', url: 'assets/docs/tradestart-forex-course.pdf', kind: 'PDF · Modules 1–10' };

  window.TRAINING = {
    title: 'Forex Trading Course',
    intro: 'From zero to a working strategy, in 10 modules. Videos, notes and exercises, included free with the group.',
    owner: 'Jonathan',
    bunnyLibrary: '788540',

    modules: [
      {
        id: 'introduction',
        title: 'Introduction',
        blurb: 'What this course covers and how to study it.',
        lessons: [
          {
            /* id heredado de la v1 (era el VSL): se mantiene para que los enlaces viejos abran */
            id: 'welcome',
            title: 'Welcome to the course',
            minutes: 3,
            video: '01528d9b-ce9e-4b31-a8d3-e19d4178591e',
            docs: [PDF],
            summary: 'An overview of the 10 modules, from the basics to the strategy I use on the charts every day, plus risk management and your trading journal.',
            notes:
              '<h4>What you will learn in this course</h4>' +
              '<p>This course takes you from complete beginner to a trader who understands and can apply one complete, structured strategy. By the end, you will know how to read the market, manage risk properly, and follow a clear trading plan.</p>' +
              '<p>This is a skill-building course. Trading is a skill like any other: it takes practice, repetition, and discipline to get good at it. Nobody becomes consistent overnight, and no course can promise you specific profits. What this course gives you is a solid, repeatable process.</p>' +
              '<div class="callout"><b>Before you start</b>Sit at your desk with your laptop or phone, and keep pen and paper next to you for the whole course. Writing and drawing things out is the fastest way to remember them.</div>',
          },
          {
            id: 'how-to-watch',
            title: 'How to watch the videos',
            minutes: 3,
            video: '747348f3-452b-48e1-bf8f-a0373ae4c1db',
            docs: [PDF],
            summary: 'The 3-step method to turn every video into a skill: watch, take notes, practice.',
            notes:
              '<h4>The 3-step method</h4>' +
              '<p>To get the most out of this course, follow this simple method for every video:</p>' +
              '<ol><li><b>Watch it once</b>, all the way through, without pausing. Just get the big picture.</li>' +
              '<li><b>Watch it a second time and take notes.</b> Write down the key concepts in your own words.</li>' +
              '<li><b>Watch it a third time and practice</b> what you learned: on a chart, in a demo account, or in your trading journal.</li></ol>' +
              '<p>Repetition is what turns information into a skill. Don\'t rush through the modules: understanding beats speed.</p>',
          },
        ],
      },
      {
        id: 'what-is-trading',
        title: 'What is trading?',
        blurb: 'The markets you can trade, how they differ, and the core mechanics.',
        lessons: [
          {
            id: 'markets-and-styles',
            title: 'Forex, crypto, futures & trading styles',
            minutes: 15,
            video: 'c859ee31-9031-4870-a2df-51ed6565c8a0',
            docs: [PDF],
            summary: 'Forex vs crypto, futures vs spot, leverage, order types, pips, and how to choose between scalping, intraday and swing trading.',
            notes:
              '<h4>Forex vs crypto: which market fits you?</h4>' +
              '<div class="tbl"><table><thead><tr><th>Feature</th><th>Forex</th><th>Crypto</th></tr></thead><tbody>' +
              '<tr><td>Trading hours</td><td>24/5 (Mon–Fri)</td><td>24/7 (always open)</td></tr>' +
              '<tr><td>Volatility</td><td>Low to moderate</td><td>High</td></tr>' +
              '<tr><td>Liquidity</td><td>Extremely high</td><td>High, but varies per coin</td></tr>' +
              '<tr><td>Regulation</td><td>Strongly regulated</td><td>Largely unregulated</td></tr>' +
              '<tr><td>Leverage</td><td>1:10 – 1:500</td><td>1:2 – 1:125 (futures)</td></tr>' +
              '<tr><td>Driven by</td><td>Economic data, central banks</td><td>News, adoption, market manipulation</td></tr>' +
              '</tbody></table></div>' +
              '<p>Want stability and a well-regulated market? Forex is generally the better fit. Want faster moves and more volatility? Crypto tends to offer that. Some traders combine both. There is no single "correct" choice, only what fits your goals and risk tolerance.</p>' +
              '<h4>Futures</h4>' +
              '<p>A future is a contract in which you speculate on the future price of an underlying asset (gold, oil, a currency) without owning it directly.</p>' +
              '<ul><li>You do not physically own the underlying asset.</li><li>You trade based on price expectations for the future.</li><li>You can go both long (buy) and short (sell).</li><li>Futures are often traded with leverage, which can increase both gains and losses.</li></ul>' +
              '<p><b>Futures vs spot:</b> with futures you trade contracts that represent a future price, leverage is common and you don\'t pay the full value of the asset. With spot you buy the asset directly and own it, with no leverage and no expiry date.</p>' +
              '<h4>Leverage & margin</h4>' +
              '<ul><li>Leverage lets you open larger positions with less capital: with 10x leverage on €100, you control a €1,000 position.</li>' +
              '<li>It can amplify results from a small amount of capital, and lets you take positions in rising and falling markets.</li>' +
              '<li><b>Risk:</b> higher leverage significantly increases the chance of liquidation. Use low leverage (max 5–10x) when starting out, and only go higher once you have a proven, well-tested strategy.</li></ul>' +
              '<h4>Limit order vs market order</h4>' +
              '<ul><li><b>Limit order:</b> sits ready and only activates once the market reaches a specific price. You set your entry with a stop-loss (SL) and take-profit (TP), then wait for it to trigger.</li>' +
              '<li><b>Market order:</b> executed immediately at the current price. Useful when you need to act on an opportunity right away.</li></ul>' +
              '<h4>Pips</h4>' +
              '<p>A pip is the smallest standard price movement in a market, and its value differs per instrument.</p>' +
              '<ul><li>EUR/USD: 1 pip = 0.0001 → 1.1000 to 1.1005 = 5 pips.</li><li>XAU/USD (gold): 1 pip = 0.10 → 2000.00 to 2001.50 = 15 pips.</li></ul>' +
              '<h4>Trading styles</h4>' +
              '<div class="tbl"><table><thead><tr><th>Style</th><th>Timeframe</th><th>Trade duration</th><th>Frequency</th><th>Pros</th><th>Cons</th></tr></thead><tbody>' +
              '<tr><td>Scalping</td><td>1m – 5m</td><td>Seconds to minutes</td><td>10–50 per day</td><td>Fast results, no overnight exposure</td><td>High stress, requires quick reactions</td></tr>' +
              '<tr><td>Intraday</td><td>5m – 1h</td><td>Minutes to hours (closed same day)</td><td>1–10 per day</td><td>No overnight exposure, uses daily volatility</td><td>Requires a lot of time and monitoring</td></tr>' +
              '<tr><td>Swing</td><td>4h – 1D</td><td>Days to weeks</td><td>1–5 per week</td><td>Less stress, follows bigger trends</td><td>Overnight exposure, requires patience</td></tr>' +
              '</tbody></table></div>' +
              '<p>There is no single "best" style. The right one depends on how much time you have, your personality, and how you handle stress. Many beginners start with swing or intraday trading, since scalping demands very fast decisions.</p>',
          },
        ],
      },
      {
        id: 'basic-concepts',
        title: 'Basic concepts',
        blurb: 'How big players move price, and the vocabulary of every trade.',
        lessons: [
          {
            id: 'basic-concepts',
            title: 'Accumulation, distribution & the basics',
            minutes: 6,
            video: '09acf8e9-f622-40ab-a68d-64e12e166fc1',
            docs: [PDF],
            summary: 'How institutions build and unwind positions, long vs short, lot sizes, order types, pips and spread.',
            notes:
              '<h4>Accumulation & distribution</h4>' +
              '<p>Large market participants (institutions, banks, funds) often move price in ways designed to build or unwind their positions without alerting retail traders.</p>' +
              '<ul><li><b>Accumulation:</b> they buy quietly while keeping price relatively flat, building large positions without pushing price up too early.</li>' +
              '<li><b>Distribution:</b> they sell at higher levels. They let price rise temporarily to attract retail traders, then sell into that demand, which is often followed by a decline.</li></ul>' +
              '<p>Retail traders often lose money by buying into distribution or selling into accumulation. Recognizing these phases is part of reading market structure (Module 6).</p>' +
              '<h4>Long vs short</h4>' +
              '<div class="tbl"><table><thead><tr><th>Feature</th><th>Long trade</th><th>Short trade</th></tr></thead><tbody>' +
              '<tr><td>Direction</td><td>Price rises</td><td>Price falls</td></tr>' +
              '<tr><td>Suited for</td><td>Bullish market</td><td>Bearish market</td></tr>' +
              '<tr><td>Strategy</td><td>Buy, then sell later</td><td>Sell, then buy back later</td></tr>' +
              '<tr><td>Applies to</td><td>Spot, futures, forex</td><td>Futures, options, CFDs</td></tr>' +
              '</tbody></table></div>' +
              '<p>Use long trades in uptrends (bull markets) and short trades in downtrends (bear markets).</p>' +
              '<h4>Lot sizes & order types</h4>' +
              '<ul><li><b>Lot size:</b> the size of your position, which depends on the instrument. 1 standard lot in forex = 100,000 units of the base currency.</li>' +
              '<li><b>Limit order:</b> activates automatically once the market reaches a specified price.</li>' +
              '<li><b>Market order:</b> executed immediately at the current price.</li></ul>' +
              '<h4>Pips & spread</h4>' +
              '<ul><li><b>Pips:</b> the smallest standard price movement (EUR/USD 0.0001 · gold 0.10).</li>' +
              '<li><b>Spread:</b> the difference between the bid and the ask price. A smaller spread lowers the cost of entering and exiting a trade.</li></ul>',
          },
        ],
      },
      {
        id: 'tradingview',
        title: 'Introduction to TradingView',
        blurb: 'The platform where you\'ll read the charts and plan every trade.',
        lessons: [
          {
            id: 'tradingview',
            title: 'Candles, timeframes & drawing tools',
            minutes: 12,
            video: 'acff692a-83f7-48ab-97f4-1bb339fecfaf',
            docs: [PDF, { title: 'TradingView (free account)', url: 'https://www.tradingview.com/', kind: 'Link' }],
            summary: 'A full TradingView walkthrough: reading candles, the key candlestick patterns, choosing a timeframe and marking up a chart.',
            notes:
              '<h4>What is TradingView?</h4>' +
              '<p>One of the most widely used charting and technical analysis platforms. It\'s where you\'ll spend most of your time analyzing markets, drawing on charts and planning trades. Free to start, in your browser, with web and mobile apps.</p>' +
              '<h4>What is a candle?</h4>' +
              '<p>A candlestick shows the price action for a period of time (a minute, an hour, a day, depending on the timeframe). Each candle shows four prices: open, high, low and close. Reading candles is the foundation for everything else in this course.</p>' +
              '<h4>Key candlestick patterns</h4>' +
              '<p>They work best as confirmation, not in isolation: combine them with support/resistance or Fibonacci levels (Module 7).</p>' +
              '<div class="tbl"><table><thead><tr><th>Pattern</th><th>What it signals</th><th>How to use it</th></tr></thead><tbody>' +
              '<tr><td>Hammer</td><td>Possible bullish reversal after a downtrend</td><td>Look for it forming at a support level or key zone</td></tr>' +
              '<tr><td>Hanging Man</td><td>Possible bearish reversal after an uptrend</td><td>Look for it forming at a resistance level or key zone</td></tr>' +
              '<tr><td>Bullish Engulfing</td><td>Reversal to the upside: a strong bullish candle fully engulfs the prior small candle</td><td>More reliable after a pullback into a support/Fib zone</td></tr>' +
              '<tr><td>Bearish Engulfing</td><td>Reversal to the downside: a strong bearish candle fully engulfs the prior small candle</td><td>More reliable after a pullback into a resistance/Fib zone</td></tr>' +
              '<tr><td>Shooting Star</td><td>Possible bearish reversal</td><td>Strongest when it forms exactly at a Fibonacci retracement level</td></tr>' +
              '<tr><td>Inverted Hammer</td><td>Possible bullish reversal</td><td>Strongest when it forms exactly at a Fibonacci retracement level</td></tr>' +
              '</tbody></table></div>' +
              '<p>Candlestick signals are most reliable at key support and resistance levels. In the middle of nowhere on a chart they tell you far less.</p>' +
              '<h4>Timeframes: which one should you use?</h4>' +
              '<ul><li><b>Lower timeframes (1m–15m):</b> more noise, more trades, more precision needed. Mainly for scalping and intraday entries.</li>' +
              '<li><b>Higher timeframes (1H–1D):</b> clearer trends, fewer false signals. For swing trading and for reading the overall structure.</li>' +
              '<li>A common approach: check the higher timeframe first for the overall trend, then drop to a lower timeframe to fine-tune your entry.</li></ul>' +
              '<h4>Drawing tools</h4>' +
              '<ul><li><b>Support & resistance:</b> horizontal lines at levels where the market has previously reversed or paused.</li>' +
              '<li><b>Trendlines:</b> diagonal lines connecting swing highs or swing lows to show the direction and strength of a trend.</li>' +
              '<li><b>Indicators:</b> moving averages, RSI, the Fibonacci retracement tool… They support your analysis, they don\'t replace it.</li></ul>' +
              '<div class="callout"><b>Exercise</b>Open TradingView and click everything. Nothing can go wrong there: no money is at risk. Get used to the tools before the next modules.</div>',
          },
        ],
      },
      {
        id: 'trading-times',
        title: 'Trading times',
        blurb: 'When the market is worth trading, and when it\'s a trap.',
        lessons: [
          {
            id: 'trading-times',
            title: 'Sessions, the killzone & volume',
            minutes: 4,
            video: null,
            docs: [PDF],
            summary: 'A reading lesson: the four sessions in CET, the golden overlap, the killzone before each open, and how to use volume.',
            notes:
              '<h4>Session overlaps & the golden overlap</h4>' +
              '<p>Markets are more active, and more tradable, when major sessions overlap: that\'s when liquidity and volume are highest.</p>' +
              '<div class="callout"><b>Golden overlap</b>New York + London: 14:00 – 17:00 CET. Generally the most active window of the trading day.</div>' +
              '<h4>Market hours (CET)</h4>' +
              '<div class="tbl"><table><thead><tr><th>Session</th><th>Hours (CET)</th></tr></thead><tbody>' +
              '<tr><td>Sydney</td><td>22:00 – 07:00</td></tr><tr><td>Tokyo</td><td>01:00 – 10:00</td></tr>' +
              '<tr><td>London</td><td>08:00 – 17:00</td></tr><tr><td>New York</td><td>14:00 – 23:00</td></tr>' +
              '</tbody></table></div>' +
              '<h4>The killzone</h4>' +
              '<p>The hour directly before a major session opens. For example, the London session opens at 09:00 CET, so its killzone runs from 08:00 to 09:00 CET. Each session has its own killzone in the hour right before it starts.</p>' +
              '<p><b>Why "killzone"?</b> This is where liquidity is often swept and many stop-losses get triggered (a "liquidity grab"). It\'s common to see a fake move in the wrong direction first, shaking out retail traders before the real move develops.</p>' +
              '<h4>Volume</h4>' +
              '<p>Volume is the number of transactions in a given period: how much interest and activity there is in the market at that moment.</p>' +
              '<ul><li>High volume usually means strong moves backed by real buying or selling interest.</li>' +
              '<li>Low volume often signals hesitation, consolidation, or a move that may not be genuine.</li>' +
              '<li>Use it to confirm breakouts: a breakout on high volume is more reliable than one on low volume.</li>' +
              '<li>Volume spikes can signal the start or end of a strong move. Combine volume with price action.</li></ul>' +
              '<p>In forex and crypto you\'ll often see <b>tick volume</b>: it counts how often price changes and is usually a reasonable proxy for real activity.</p>',
          },
        ],
      },
      {
        id: 'market-structure',
        title: 'Market structure',
        blurb: 'Trends, highs and lows, and the signal that the direction is changing.',
        lessons: [
          {
            id: 'market-structure',
            title: 'Trends, break of structure & impulses',
            minutes: 26,
            video: 'f9523a74-4106-4121-83f1-e8c68caac310',
            docs: [PDF],
            summary: 'How to identify a bullish and a bearish structure, the break of structure (BOS), higher highs and lower lows, consolidation and impulse.',
            notes:
              '<h4>Bullish vs bearish</h4>' +
              '<ul><li><b>Uptrend</b> → bullish → higher highs & higher lows.</li><li><b>Long position</b> → buy → market goes up.</li>' +
              '<li><b>Impulse</b> → the move in the trend\'s direction.</li><li><b>Retracement</b> → the pullback against the trend.</li></ul>' +
              '<h4>Break of structure (BOS)</h4>' +
              '<p>A BOS happens when price breaks beyond a previous significant high or low, signaling that the trend may be continuing or reversing. It\'s one of the key signals to confirm a change (or continuation) in direction, and the Simple Strategy builds directly on it.</p>' +
              '<h4>Higher highs & lower lows</h4>' +
              '<p>A <b>higher high</b> forms when the market makes a new high above the previous one: during an uptrend, after an impulse up and a small retracement, when buyers regain control and push price above the previous high.</p>' +
              '<p>A <b>lower low</b> forms when the market makes a new low below the previous one: during a downtrend, after an impulse down and a small bounce, when sellers regain control and push price below the previous low.</p>' +
              '<h4>Consolidation vs impulse</h4>' +
              '<p><b>Consolidation:</b> price moves sideways in a tight range. Often a phase where larger players build or unwind positions without moving price much.</p>' +
              '<p><b>Impulse:</b> a strong, fast move up or down that typically follows consolidation, often from a surge of volume or liquidity.</p>' +
              '<div class="callout"><b>Tip</b>Learn to recognize when the market is consolidating, and anticipate the impulse that tends to follow. Most of the meaningful movement isn\'t in the consolidation itself, but in the impulse afterward.</div>' +
              '<div class="callout"><b>Before the next module</b>Make sure you can spot highs and lows (higher highs, higher lows, lower highs, lower lows) and a break of structure on a chart.</div>',
          },
        ],
      },
      {
        id: 'simple-strategy',
        title: 'Simple strategy',
        blurb: 'Modules 4–6 together, in one repeatable process.',
        lessons: [
          {
            id: 'simple-strategy',
            title: 'The strategy: Fibonacci, BOS & support/resistance',
            minutes: 19,
            video: 'f5fd68d5-b9d9-4f99-925d-9789eb72bb0e',
            docs: [PDF],
            summary: 'The four steps I use to find trades: trend, retracement into the golden zone or a key level, confirmation candle and break of structure.',
            notes:
              '<h4>Fibonacci retracement</h4>' +
              '<p>The Fibonacci retracement tool helps you measure how far a pullback is likely to go after an impulsive move, and where to look for an entry.</p>' +
              '<h4>Break of structure (BOS)</h4>' +
              '<p>Used here to confirm that the trend has genuinely changed (or continued) before you commit to a trade, analyzing the break of a previous high or low (Module 6).</p>' +
              '<h4>Golden zone entries</h4>' +
              '<p>The "golden zone" is a Fibonacci retracement area (commonly around 61.8%–78.6%) where price often reacts and reverses back in the direction of the original trend. It\'s used to identify higher-probability entry points.</p>' +
              '<h4>Support & resistance</h4>' +
              '<p>Price levels where the market has previously reacted strongly, either bouncing (support) or rejecting (resistance). These are the levels where you want to see confirmation (candlestick patterns, BOS) before entering.</p>' +
              '<div class="callout"><b>How the pieces fit together</b><ol><li>Identify the trend using market structure (Module 6).</li><li>Wait for a retracement into a Fibonacci golden zone or a key support/resistance level.</li><li>Look for a confirmation candlestick pattern (Module 4) at that zone.</li><li>Confirm with a break of structure before entering.</li></ol>This is a framework for building a repeatable process, not a guarantee of any specific trade outcome.</div>',
          },
          {
            id: 'gold-key-levels',
            title: 'Gold only: the $25 key levels',
            minutes: 11,
            video: '1d59bab2-56e5-4afb-aba1-8e26593fc68e',
            docs: [PDF],
            summary: 'The $25 grid I use on gold (XAU/USD): how to build the zones and how to trade the breakout and retest.',
            notes:
              '<p>This variation applies to <b>gold (XAU/USD) only</b>, not to forex pairs. Gold tends to react around clean, round price levels, so we use a fixed $25 grid to mark out zones worth watching.</p>' +
              '<h4>How to build the levels</h4>' +
              '<ul><li>Mark a key level every $25: 4500, 4525, 4550, 4575, 4600, and so on.</li>' +
              '<li>At each level, build a zone of $2.50 above and $2.50 below it. For 4500, that\'s 4497.50 to 4502.50.</li>' +
              '<li>These zones are where you look for a potential setup, not an automatic entry signal.</li></ul>' +
              '<h4>How to trade the zone</h4>' +
              '<ol><li>Wait for price to break through the zone (a clean breakout, not just a wick through it).</li>' +
              '<li>Wait for price to come back and retest the zone from the other side.</li>' +
              '<li>Drop to a lower timeframe once price is back inside the zone, and look for a confirmation candle, for example a bullish engulfing forming right from that zone.</li>' +
              '<li>If the confirmation candle shows up, that\'s your potential entry.</li></ol>' +
              '<figure><img src="assets/training/bullish-engulfing-key-level.png" alt="Diagram: a bullish engulfing candle forming at a key level after a breakout and retest" loading="lazy" width="1471" height="819"><figcaption>A bullish engulfing candle forming at a key zone after a breakout and retest.</figcaption></figure>' +
              '<p>As with every setup in this course, this is a framework for finding higher-probability zones. It doesn\'t guarantee that price will react at the level, and it still needs proper risk management (Module 8).</p>',
          },
        ],
      },
      {
        id: 'risk-management',
        title: 'Risk management',
        blurb: 'The most important skill in trading, more than the strategy itself.',
        lessons: [
          {
            id: 'risk-management',
            title: 'Compounding, lot size & 1% risk',
            minutes: 10,
            video: '86be4187-f317-45fb-9953-e3e28ba60ec0',
            docs: [PDF, { title: 'Lot size calculator (myfxbook)', url: 'https://www.myfxbook.com/forex-calculators/position-size', kind: 'Link' }],
            summary: 'Why most traders fail on risk, not on strategy: compounding, consistency, sizing every position and starting at 1% per trade.',
            notes:
              '<p>Risk management is arguably the single most important skill in trading. Most traders who fail don\'t fail because of a bad strategy; they fail because of poor risk management.</p>' +
              '<h4>Compound interest</h4>' +
              '<p>Compounding shows the power of staying consistent and protecting your capital over time, rather than chasing large wins. Small, consistent, well-managed gains can add up over a long period. The compound calculator in the video helps visualize this.</p>' +
              '<h4>Consistency & discipline</h4>' +
              '<p>Results play out over a large sample of trades, not any single one. A trader who risks a small, consistent amount per trade and follows the same process is far more likely to survive long enough to improve.</p>' +
              '<h4>Lot size calculator</h4>' +
              '<p>A lot size calculator (like the one on myfxbook) works out the correct position size from your stop-loss distance and how much of your account you\'re willing to risk. No more guesswork.</p>' +
              '<h4>Risk per trade: why start with 1%?</h4>' +
              '<ol><li><b>Protect your capital.</b> The number one rule. At 1% per trade, 10 losses in a row leave you down 10%, not your whole account.</li>' +
              '<li><b>Keep your mindset under control.</b> Lower risk means less pressure, more rational decisions, no FOMO or revenge trading.</li>' +
              '<li><b>Room to learn and make mistakes.</b> Everyone makes mistakes early on; 1% gives you time to develop your strategy, entries and discipline.</li>' +
              '<li><b>Build consistency.</b> A fixed risk rule creates a consistent approach, and consistency is what drives long-term results.</li></ol>' +
              '<h4>Worked example</h4>' +
              '<div class="tbl"><table><thead><tr><th>Scenario</th><th>Risk per trade</th><th>After 10 losses in a row</th></tr></thead><tbody>' +
              '<tr><td>€1,000 account, risking 1%</td><td>€10 per trade</td><td>€900 (10% drawdown)</td></tr>' +
              '<tr><td>€1,000 account, risking 5%</td><td>€50 per trade</td><td>€500 (50% drawdown)</td></tr>' +
              '</tbody></table></div>' +
              '<p>Even after 20 losing trades at 1%, you\'d still have roughly 80% of your capital. At 5%, 10 losses in a row cut the account in half, and then you need a 100% gain just to get back to where you started. The bigger the loss, the harder it is to recover.</p>',
          },
        ],
      },
      {
        id: 'account-setup',
        title: 'Account set-up',
        blurb: 'Security first, then your broker account and MT5, step by step.',
        lessons: [
          {
            id: 'account-setup',
            title: 'VTMarkets + MetaTrader 5, step by step',
            minutes: 5,
            video: null,
            docs: [{ title: 'Create your VTMarkets account', url: 'https://go.vtaffiliates.com/visit/?bta=43694&brand=vt', kind: 'Link · referral' }, PDF],
            summary: 'A reading lesson: secure your setup, open and verify your VTMarkets account, fund it, create an MT5 account and connect it on your phone.',
            notes:
              '<h4>Security first</h4>' +
              '<ul><li>Use a dedicated, secure email (such as ProtonMail) for your trading accounts. A separate inbox reduces spam, phishing and the risk of someone getting into your account through a fake email.</li>' +
              '<li>Enable two-factor authentication (2FA) wherever it\'s offered.</li>' +
              '<li>Run antivirus software on any device you trade from.</li></ul>' +
              '<p>For this course we use <b>VTMarkets</b> as the broker and <b>MetaTrader 5 (MT5)</b> as the platform.</p>' +
              '<p><a class="btn btn-sm" href="https://go.vtaffiliates.com/visit/?bta=43694&amp;brand=vt" target="_blank" rel="noopener sponsored">Create your VTMarkets account</a></p>' +
              '<h4>Step 1 · Create your VTMarkets account</h4>' +
              '<ol><li>Open the account link above.</li><li>Click "Open Live Account" or "Sign Up" and choose "Individual Account".</li>' +
              '<li>Fill in your personal details accurately (name, email, country…).</li><li>Verify your email with the confirmation link.</li>' +
              '<li>Upload the required documents: proof of ID (passport or ID card) and proof of address (bank statement or utility bill, max. 3 months old).</li>' +
              '<li>Wait for verification, usually less than 24 hours.</li></ol>' +
              '<h4>Step 2 · Fund your account</h4>' +
              '<ol><li>Log in to your VTMarkets dashboard.</li><li>Click "Deposit Funds" and choose a payment method (bank transfer, card, crypto…).</li>' +
              '<li>Deposit your desired amount (check VTMarkets\' current minimum deposit for your account type).</li></ol>' +
              '<h4>Step 3 · Create an MT5 account within VTMarkets</h4>' +
              '<ol><li>In your dashboard, click "Trading Accounts" → "Open New Account".</li><li>Choose the platform: MetaTrader 5 (MT5).</li>' +
              '<li>Select your account type, currency (e.g. EUR or USD) and leverage (e.g. 1:100 or 1:500).</li>' +
              '<li>Confirm. You\'ll receive your login ID, server address and password.</li></ol>' +
              '<h4>Step 4 · Connect your account to MT5 (iOS/Android)</h4>' +
              '<ol><li>Download the official MetaTrader 5 app from the App Store or Google Play.</li><li>Open it and select "Start without registration".</li>' +
              '<li>Go to Menu → Manage Accounts → "+".</li><li>Search for "VTMarkets" and select the correct server (Live or Demo, depending on your account).</li>' +
              '<li>Enter your login (MT5 account number), password and server exactly as provided.</li><li>Tap "Sign In". You\'re connected.</li></ol>' +
              '<div class="callout"><b>Reminder</b>A live account means real money is at risk. Consider starting with a demo account until you execute your strategy consistently.</div>' +
              '<p class="fine">The link above is a referral link. Signing up through it supports this free course at no extra cost to you.</p>',
          },
        ],
      },
      {
        id: 'trading-plan',
        title: 'Trading plan & journal',
        blurb: 'Test it, write it down, follow it, and learn from every trade.',
        lessons: [
          {
            id: 'trading-plan',
            title: 'Backtesting, your plan & your journal',
            minutes: 4,
            video: null,
            docs: [PDF],
            summary: 'A reading lesson: backtest before risking money, keep emotions in check, write your trading plan and journal every trade.',
            notes:
              '<h4>Backtesting</h4>' +
              '<p>Testing your strategy against historical data before risking real money.</p>' +
              '<ul><li>Open TradingView, select a period in the past, and manually simulate trades based on your strategy.</li>' +
              '<li>Record each trade: entry, stop-loss, take-profit, and whether it would have been a win or a loss.</li>' +
              '<li>This tells you whether your strategy actually works before you trade it live.</li></ul>' +
              '<h4>Keeping emotions under control</h4>' +
              '<ul><li>Set rules in advance: when you are allowed to trade, and when you stop.</li>' +
              '<li>Use a risk management plan so emotions don\'t take over your decisions.</li>' +
              '<li>Step away after a loss. No revenge trading.</li></ul>' +
              '<h4>Building a trading plan</h4>' +
              '<ul><li>Describe your ideal setup: entry criteria, stop-loss/take-profit rules and your maximum risk per day.</li>' +
              '<li>Write it out literally, as an instruction manual for yourself.</li>' +
              '<li>Follow it strictly, and only adjust it once you have solid data showing something works better.</li></ul>' +
              '<h4>Keeping a trading journal</h4>' +
              '<ul><li>Log your trades daily: entry, exit, profit/loss, emotions, mistakes and what you did well.</li>' +
              '<li>Use a tool such as Excel, Notion or Edgewonk.</li>' +
              '<li>Review your mistakes and areas for improvement every week.</li></ul>' +
              '<div class="callout"><b>Final reminder</b>This course is for educational purposes only and does not constitute financial advice. Trading involves substantial risk, including the potential loss of your invested capital. No strategy, tool or process described here guarantees profits or specific results.</div>',
          },
        ],
      },
    ],
  };
})();
