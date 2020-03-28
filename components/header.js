export default () => (
  <header className="relative bg-center bg-no-repeat bg-cover bg-cyan-light bg-mobile lg:bg-desktop">
    <nav className="flex items-center justify-between px-4 py-6 md:px-8 lg:px-16 lg:mb-4">
      <img className="h-4 lg:h-6" src="/images/logo.svg" alt="Huddle Logo" />
      <button className="px-6 py-1 text-xs font-bold bg-white rounded-full shadow-lg md:px-10 md:py-2 lg:px-12 lg:py-3">
        Try It Free
      </button>
    </nav>
    <div className="flex flex-col items-center px-8 pt-16 pb-8 text-center md:pb-12 md:pt-8 md:text-left md:flex-row lg:pb-20 lg:px-16 lg:pt-4 lg:text-left lg:flex-row">
      <div className="max-w-lg pr-8 mb-4 md:mb-0 md:mr-8 lg:mr-12 lg:mt-12 md:flex-1">
        <h1 className="mb-8 text-3xl font-bold lg:text-4xl">
          Build The Community Your Fans Will Love
        </h1>
        <p className="mb-8 text-base">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button className="px-16 py-3 mb-8 text-xs font-bold text-white rounded-full bg-pink md:mb-0 lg:py-4">
          Get Started For Free
        </button>
      </div>
      <div className="flex-1 max-w-4xl">
        <img
          src="/images/illustration-mockups.svg"
          alt="desktop and mobile browsers"
        />
      </div>
    </div>
  </header>
);
