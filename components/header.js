export default () => (
  <header
      className="relative bg-cyan-light bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/images/bg-hero-mobile.svg')` }}
    >
    <nav className="px-4 py-6 flex items-center justify-between">
      <img className="h-4" src="/images/logo.svg" alt="Huddle Logo" />
      <button className="bg-white px-6 py-1 text-xs font-bold rounded-full shadow-lg">
        Try It Free
      </button>
    </nav>
    <div className="flex flex-col items-center pt-16 text-center px-8 pb-8">
      <h1 className="text-2xl font-bold mb-8">
        Build The Community Your Fans Will Love
      </h1>
      <p className="mb-8 text-base">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you
        engage in genuine discussion.
      </p>
      <button className="bg-pink text-xs text-white mb-8 px-16 py-3 font-bold rounded-full">
        Get Started For Free
      </button>
      <img
        src="/images/illustration-mockups.svg"
        alt="desktop and mobile browsers"
      />
    </div>
  </header>
)