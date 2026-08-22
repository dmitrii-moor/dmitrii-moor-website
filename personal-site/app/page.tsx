export default function ResearchWebsite() {
  const publications = [
    {
      title: "Primal-Dual Guided Decoding for Constrained Discrete Diffusion",
      venue: "ArXiv (working paper)",
      description: "",
      //  "Using primal-dual optimization to guide reverse diffusion processes under constraints.",
      link: "https://arxiv.org/pdf/2605.09749",
    },
    {
      title: "Stochastic Primal-Dual Decoding for Multiobjective Generative Recommender Systems",
      venue: "KDD 2026",
      description: "",
     //   "Relying on constrained optimization to guide autoregressive generative recommendation systems.",
     link: "https://dl.acm.org/doi/abs/10.1145/3770855.3817806"
    },
    {
      title: "Learning Optimal Personalised Reservation Prices in Impression Ad Auctions with Mixture Density Networks",
      venue: "CIKM 2025",
      description: "",
      //  "Designing a mixture density network to learn optimal bidder- and user-specific reservation prices in impression ad auctions.",
      link: "https://dl.acm.org/doi/abs/10.1145/3746252.3761070",
    },
    {
      title: "Optimising Budget Management via Primal-Dual Approximation with Constrained Polynomial Weights Update",
      venue: "KDD 2025",
      description: "",
      //  "Bridging the gap between primal-dual optimisation and online learning in budget management problems.",
      link: "https://dl.acm.org/doi/abs/10.1145/3711896.3737071",
    },
    {
      title: "Exploiting Sequential Music Preferences via Optimisation-Based Sequencing",
      venue: "CIKM 2023",
      description: "",
      //  "Building sequential ML models to improve music recommendations.",
      link: "https://dl.acm.org/doi/abs/10.1145/3583780.3615476",
    },
    {
      title: "Data markets with dynamic arrival of buyers and sellers",
      venue: "NetEcon 2019",
      description: "",
      //  "Design of a market mechanism for data markets with dynamic arrival of buyers and sellers.",
      link: "https://dl.acm.org/doi/abs/10.1145/3338506.3340270",
    },
    {
      title: "Core-Selecting Payment Rules for Combinatorial Auctions with Uncertain Availability of Goods",
      venue: "IJCAI 2016",
      description: "",
      //  "Design of a core-selecting combinatorial auction rule in the setting when the allocated goods may become unavailable.",
      link: "https://dl.acm.org/doi/10.5555/3060621.3060681",
    },
  ];

  const projects = [
    {
      title: "Generative Recommendation Models",
      description:
        "Research on diffusion and autoregressive methods for recommendation and sequence generation.",
    },
    {
      title: "User Churn Prediction",
      description:
        "Applied work on retention modeling, user lifetime value, and engagement forecasting.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 px-6 py-10 sm:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto space-y-16">
        <header className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start border-b border-neutral-200 pb-14">
          {
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <img
              src="/IMG_website.jpg"
              alt="Portrait"
              className="w-72 h-72 rounded-sm object-cover mt-2"
            />
          </div>
          }

          <div className="md:col-span-8 space-y-7 pt-1">
            <div>
              <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-none">
                Dmitrii Moor
              </h1>

              <p className="mt-6 text-[20px] text-neutral-700 leading-relaxed max-w-3xl">
                Senior Research Scientist at Spotify in London. I work on
                generative modeling, recommender systems,
                sequential decision making and AI.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-neutral-500">
              <a
                href="https://scholar.google.com/citations?user=1i7y2lkAAAAJ&hl=en&oi=ao"
                className="hover:text-black transition-colors"
              >
                Google Scholar
              </a>
              <a
                href="https://www.linkedin.com/in/dmitrymoor/"
                className="hover:text-black transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:dmitry.moor@gmail.com"
                className="hover:text-black transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <h2 className="text-xl font-semibold tracking-tight">
              Research Interests
            </h2>
          </div>

          <div className="md:col-span-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-neutral-700 leading-relaxed text-[17px]">
              <li>Generative AI</li>
              <li>Recommendation systems</li>
              <li>Online decision making</li>
              <li>Machine learning</li>
              <li>Probabilistic modeling</li>
              <li>Algorithmic game theory</li>
            </ul>
          </div>
        </section>

        <section className="space-y-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Selected Publications
          </h2>

          <div className="space-y-8">
            {publications.map((publication, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-medium leading-snug">
                  {publication.title}
                </h3>

                <div className="flex items-baseline gap-2">
                  <p className="text-sm text-neutral-500">
                    {publication.venue}
                  </p>

                  {publication.link && (
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-500 underline underline-offset-4 hover:text-black"
                    >
                      paper
                    </a>
                  )}
                </div>

                {publication.description && (
                  <p className="text-neutral-700 leading-relaxed">
                    {publication.description}
                  </p>
                )}
                
              </div>
            ))}
          </div>
        </section>

        {/*<section className="space-y-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Selected Projects
          </h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <p className="text-neutral-700 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>*/}

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Notes
          </h2>

          <div className="space-y-4 text-neutral-700 leading-relaxed">
            <p>
              Short technical essays and blog posts on recommendation
              systems, generative models, and applied machine learning.
            </p>

            <ul className="space-y-2 text-neutral-600">

              <li>
                • <a href="https://research.atspotify.com/2026/8/balancing-multiple-objectives-in-generative-recommendations-with-adaptive-decoding" className="hover:text-black underline underline-offset-4">
                  Balancing Multiple Objectives in Generative Recommendations with Adaptive Decoding
                </a>
              </li>

              <li>
                • <a href="https://research.atspotify.com/2025/11/learning-personalised-prices-in-ad-auctions-with-game-theory-and-deep" className="hover:text-black underline underline-offset-4">
                  Learning Personalised Prices in Ad Auctions with Game Theory and Deep Learning
                </a>
              </li>
              
              <li>
                • <a href="https://research.atspotify.com/2025/9/optimizing-budget-allocation-with-theoretical-guarantees-and-adaptive" className="hover:text-black underline underline-offset-4">
                Optimizing Budget Allocation with Theoretical Guarantees and Adaptive Learning
                </a>
              </li>

              <li>
                • <a href="https://research.atspotify.com/2023/10/exploiting-sequential-music-preferences-via-optimisation-based-sequencing" className="hover:text-black underline underline-offset-4">
                On Modelling Sequential Music Preferences at Spotify
                </a>
              </li>
            </ul>
          </div>
        </section>

        <footer className="pt-8 border-t border-neutral-200 text-sm text-neutral-500">
          <p>
            © 2026 Dmitrii Moor
          </p>
        </footer>
      </div>
    </div>
  );
}

