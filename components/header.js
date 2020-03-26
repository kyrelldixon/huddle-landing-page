export default () => (
  <header className="relative bg-center bg-no-repeat bg-cover bg-cyan-light bg-mobile lg:bg-desktop">
    <nav className="flex items-center justify-between px-4 py-6 lg:px-12 lg:mb-4">
      <img className="h-4" src="/images/logo.svg" alt="Huddle Logo" />
      <button className="px-6 py-1 text-xs font-bold bg-white rounded-full shadow-lg">
        Try It Free
      </button>
    </nav>
    <div className="flex flex-col items-center px-8 pt-16 pb-8 text-center lg:pb-12 lg:px-12 lg:pt-4 lg:text-left lg:flex-row">
      <div className="max-w-sm mb-4 lg:mb-0 lg:mr-12">
        <h1 className="mb-8 text-2xl font-bold lg:text-3xl">
          Build The Community Your Fans Will Love
        </h1>
        <p className="mb-8 text-base">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button className="px-16 py-3 mb-8 text-xs font-bold text-white rounded-full bg-pink lg:mb-0 lg:py-4">
          Get Started For Free
        </button>
      </div>
      <img
        src="/images/illustration-mockups.svg"
        alt="desktop and mobile browsers"
      />
    </div>
  </header>
);
