// Miriyari blog — monthly posts from the capital desk.
//
// HOW TO POST MONTHLY:
//   1. Copy the newest post object below and paste it at the TOP of the array.
//   2. Change `slug` (used in the URL, e.g. /blog/<slug>), `title`, `date`
//      (ISO: YYYY-MM-DD), `category` (one of the existing ones or a new one),
//      `author` / `authorRole`, `excerpt` (1-2 sentences), and the `content`
//      blocks. Supported blocks: { type: 'p', text } | { type: 'h2', text } |
//      { type: 'quote', text } | { type: 'list', items: [...] }.
//   3. Push to main — the blog updates automatically (deploy is manual via
//      Render API if auto-deploy webhooks are not connected).

const posts = [
  {
    slug: 'results-first-model',
    title: "Why We Don't Charge Until We Deliver: Inside the Results-First Model",
    date: '2026-08-01',
    category: 'Mission',
    author: 'Eric Nshuti',
    authorRole: 'Chief Executive Officer',
    excerpt:
      "Most funding services charge for effort; we charge for outcomes. Here's why the results-first model is the only way we work — and what it changes for founders.",
    content: [
      {
        type: 'p',
        text: "When a founder first sits down with our capital desk, the question that comes up most often is simple: how do we charge? The answer tends to surprise them. We don't charge for the application. We don't charge for the pitch. We charge when we deliver results — and not a moment before.",
      },
      {
        type: 'h2',
        text: 'The problem with paying for promises',
      },
      {
        type: 'p',
        text: "Across Africa, too many founders have learned the same expensive lesson: pay an upfront fee, wait months, and end up with a handful of half-finished applications that were never a real fit. The incentives are wrong from the start. When a service is paid for effort rather than outcomes, the founder carries all the risk — and the service has little reason to be selective.",
      },
      {
        type: 'p',
        text: "We built Miriyari to break that pattern. Our grant partnerships are structured around delivery: you build, we work the capital desk, and the fee follows the result. If the grant doesn't land, neither does our invoice.",
      },
      {
        type: 'h2',
        text: 'What results-first changes in practice',
      },
      {
        type: 'list',
        items: [
          'Applications managed end-to-end — from shortlisting to submission, with pitch support along the way.',
          'Continuous sourcing, not on-demand work — the desk keeps a live map of relevant opportunities.',
          "Honest fit assessment — we turn down work when the match isn't real, because our fee depends on it.",
          'Transparent progress reporting — you always know what has been submitted, where it stands, and what comes next.',
        ],
      },
      {
        type: 'quote',
        text: "Miriyari supported us in raising $80,000+ through grants and opportunities in 12 months. There's one thing I loved about the model: they don't charge you until they deliver results.",
      },
      {
        type: 'h2',
        text: 'Walk the talk',
      },
      {
        type: 'p',
        text: "The same logic extends beyond grants. When we make direct investments, we deploy our own capital alongside founders — sharing the risk and the vision, not just advising on it. Every engagement is designed so that our success and yours move in the same direction. That is the mission, and it's the standard we hold every partnership to.",
      },
    ],
  },
  {
    slug: 'afriinnox-funding-pipeline',
    title: 'From Grant Chasing to a Funding Pipeline: The AFRIINNOX Partnership',
    date: '2026-07-01',
    category: 'Partner Stories',
    author: 'The Capital Desk',
    authorRole: 'Miriyari Capital Desk',
    excerpt:
      'One Rwandan technology company turned a constant scramble for grants into a structured, repeatable pipeline — $80,000+ in 12 months. This is how.',
    content: [
      {
        type: 'p',
        text: 'Before partnering with Miriyari, AFRIINNOX — a Rwandan technology company — was doing what too many strong founders do: chasing grants in every spare hour. Applications were scattered, deadlines slipped, and the search for funding competed directly with the work of building.',
      },
      {
        type: 'h2',
        text: 'The challenge',
      },
      {
        type: 'p',
        text: 'Grant seeking is not a side project. It is a discipline: knowing which funds match your stage, preparing materials that answer what reviewers actually ask, and following up at the right moment. Do it badly, and you burn months. Do it constantly, and it crowds out the product, the customers, and the team that make a company fundable in the first place.',
      },
      {
        type: 'h2',
        text: 'The partnership',
      },
      {
        type: 'p',
        text: "AFRIINNOX came to our capital desk looking for a different approach. We built them a structured, repeatable funding pipeline: continuous sourcing of grant opportunities matched to their sector and stage, end-to-end application management, and pitch support when it mattered.",
      },
      {
        type: 'list',
        items: [
          'A live pipeline of relevant opportunities instead of a scramble when a deadline appears.',
          "Applications written to fit each fund's priorities, reviewed by the desk before submission.",
          'Pitch preparation that left the founding team confident in the room.',
          'Regular reporting so leadership always knew where the funding work stood.',
        ],
      },
      {
        type: 'quote',
        text: 'Our job was to strengthen the product and grow the customer base. They focused on finding opportunities. When we got selected, we went and pitched — they would even pitch for us.',
      },
      {
        type: 'h2',
        text: 'The result',
      },
      {
        type: 'p',
        text: 'Within 12 months, AFRIINNOX raised more than $80,000 through grants and opportunities — with no charge to the company until results were delivered. More important than the figure is what it represents: a funding process that stopped competing with the business and started serving it.',
      },
      {
        type: 'h2',
        text: 'What we learned',
      },
      {
        type: 'list',
        items: [
          'Treat funding like a pipeline, not an event. Consistency beats intensity.',
          'Fit beats volume. Ten aligned applications outperform fifty random ones.',
          "The founder's job is the product. The capital desk exists so they can stay on it.",
        ],
      },
      {
        type: 'p',
        text: 'We open partnership applications every month for founders ready to stop chasing grants and start building. Selection is competitive — and worth it.',
      },
    ],
  },
  {
    slug: '80k-in-12-months',
    title: '$80K in 12 Months: What the Number Actually Means',
    date: '2026-06-01',
    category: 'Impact',
    author: 'The Capital Desk',
    authorRole: 'Miriyari Capital Desk',
    excerpt:
      'Behind every headline number is a series of quieter decisions. What the $80,000 actually bought — and why the model mattered.',
    content: [
      {
        type: 'p',
        text: 'Numbers make headlines; they rarely tell the story. When we say a partner raised $80,000+ in 12 months, the figure is true — but the meaning is in what happened underneath it.',
      },
      {
        type: 'h2',
        text: 'Where the money came from',
      },
      {
        type: 'p',
        text: "It did not arrive as one dramatic cheque. It came as a sequence of grants and opportunities, each secured through a pipeline that kept moving month after month: a match here, an application there, a pitch that landed. That is the unglamorous reality of smart fundraising — and it is exactly why a continuous desk beats occasional effort.",
      },
      {
        type: 'h2',
        text: 'What it bought',
      },
      {
        type: 'list',
        items: [
          'Product development runway — the team kept building without stopping to fundraise.',
          'Customer growth — resources went to acquisition, not to grant paperwork.',
          'Team stability — the company held its people and its momentum.',
          'Investor-ready metrics — the same discipline made later conversations stronger.',
        ],
      },
      {
        type: 'h2',
        text: 'Why the model mattered',
      },
      {
        type: 'p',
        text: "Because the partnership carried no upfront fee, the risk sat with us. The founder's team never had to weigh a funding bet against payroll. That alignment — our fee, their results — is what makes the number possible in the first place.",
      },
      {
        type: 'h2',
        text: 'The bigger picture',
      },
      {
        type: 'p',
        text: "One company's $80,000 is a chapter in a longer story. Miriyari exists to bridge the gap between African businesses and transformative investment — grants, investor connections, and direct capital for companies building resilient, SDG-aligned enterprises. Every month brings new partnerships, new pipelines, and new chapters like this one.",
      },
      {
        type: 'p',
        text: 'Follow along — we publish these briefs monthly.',
      },
    ],
  },
];

// Newest first (new posts are added at the top, but keep this sort as a guard).
posts.sort((a, b) => (a.date < b.date ? 1 : -1));

export const CATEGORIES = ['All', ...new Set(posts.map((p) => p.category))];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

export function relatedPosts(post, n = 2) {
  const same = posts.filter((p) => p.slug !== post.slug && p.category === post.category);
  const rest = posts.filter((p) => p.slug !== post.slug && p.category !== post.category);
  return [...same, ...rest].slice(0, n);
}

export function readingTime(post) {
  const words = post.content.reduce(
    (acc, b) =>
      acc +
      (b.text
        ? b.text.split(/\s+/).length
        : (b.items || []).join(' ').split(/\s+/).length),
    0
  );
  return Math.max(1, Math.ceil(words / 200));
}

export function formatDate(iso) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export { posts };
