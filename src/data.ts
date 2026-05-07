export const headlineMetrics = [
  { label: 'Qualified sessions', value: '184K', delta: '+9.4% vs last cycle' },
  { label: 'Pipeline-ready leads', value: '12.8K', delta: '+1.8% with better fit' },
  { label: 'Demo-to-opportunity', value: '37%', delta: '-2.1 pts guardrail' },
  { label: 'Revenue at leakage risk', value: '$2.4M', delta: '3 funnel breaks in review' },
]

export const funnelSteps = [
  { label: 'Qualified traffic', volume: '184K', rate: '100%', note: 'Paid, organic, partner, lifecycle' },
  { label: 'Product interest', volume: '69K', rate: '37.5%', note: 'Scroll depth and CTA engagement' },
  { label: 'Lead capture', volume: '21.4K', rate: '11.6%', note: 'Form completion and identity match' },
  { label: 'Sales accepted', volume: '12.8K', rate: '6.9%', note: 'Routing and fit validation' },
  { label: 'Demo booked', volume: '6.1K', rate: '3.3%', note: 'Calendar conversion and SDR readiness' },
  { label: 'Opportunity created', volume: '2.2K', rate: '1.2%', note: 'Pipeline creation and attribution lock' },
]

export const segmentStories = [
  {
    segment: 'Enterprise paid search',
    conversion: '4.8%',
    change: '+0.7 pts',
    friction: 'Healthy',
    insight: 'Landing-page relevance improved, but demo calendar inventory is tightening.',
  },
  {
    segment: 'Partner referrals',
    conversion: '6.2%',
    change: '+1.2 pts',
    friction: 'Watch',
    insight: 'Lead quality is high; routing speed is starting to bottleneck MQL-to-SAL.',
  },
  {
    segment: 'Lifecycle nurture',
    conversion: '3.1%',
    change: '-0.9 pts',
    friction: 'Critical',
    insight: 'Message fatigue and stale offer sequencing are suppressing high-intent return traffic.',
  },
]

export const diagnostics = [
  { title: 'Lead capture abandonment', value: '31%', detail: 'Biggest break sits between interest and form completion.' },
  { title: 'Routing SLA pressure', value: '5h', detail: 'Average response time on high-fit inbound leads.' },
  { title: 'Calendar availability drift', value: '18%', detail: 'Availability loss in enterprise demo booking windows.' },
  { title: 'Attribution confidence', value: '91%', detail: 'Multi-touch stitching remains healthy across primary channels.' },
]

export const experiments = [
  {
    name: 'Hero narrative shift',
    owner: 'Growth',
    stage: 'Shipping',
    confidence: '92%',
    impact: '+11% product-interest lift',
  },
  {
    name: 'Form compression test',
    owner: 'RevOps',
    stage: 'Review',
    confidence: '71%',
    impact: '+7% lead-capture rate',
  },
  {
    name: 'Lifecycle rescue sequence',
    owner: 'CRM Ops',
    stage: 'Blocked',
    confidence: '58%',
    impact: 'Recover stalled nurture path',
  },
]

export const actionQueue = [
  { priority: 'P1', title: 'Repair lifecycle nurture drop-off before next campaign wave', owner: 'CRM Ops' },
  { priority: 'P1', title: 'Expand enterprise demo inventory for high-intent traffic spikes', owner: 'Revenue Ops' },
  { priority: 'P2', title: 'Accelerate partner lead routing and tighten SAL handoff', owner: 'Channel Ops' },
  { priority: 'P3', title: 'Bundle experiment insights into weekly GTM executive readout', owner: 'Growth Analytics' },
]
