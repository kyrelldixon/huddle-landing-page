import Logo from './logo'

export default () => (
  <footer className="bg-cyan-dark text-white px-4 pt-24 pb-8">
    <div className="mb-8">
      <Logo />
      <div className="flex mb-8">
        <img
          className="h-4"
          src="/images/icon-location.svg"
          alt="location icon"
        />
        <p className="ml-6 leading-tight -mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="flex mb-8">
        <img className="h-4" src="/images/icon-phone.svg" alt="phone icon" />
        <p className="ml-6 leading-tight -mt-1">+1-543-123-4567</p>
      </div>
      <div className="flex mb-8">
        <img className="h-4" src="/images/icon-email.svg" alt="email icon" />
        <p className="ml-6 leading-tight -mt-1">example@huddle.com</p>
      </div>
    </div>
    <nav className="mb-8">
      <ul className="leading-loose">
        <li>About Us</li>
        <li>What We Do</li>
        <li>FAQ</li>
        <li>Career</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>
    </nav>
    <small className="block text-center mx-auto mb-1">
      &copy; Copyright 2018 Huddle. All rights reserved.
    </small>
    <p className="text-center text-sm">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer nofollower"
      >
        Frontend Mentor.
      </a>{" "}
      Coded by{" "}
      <a
        href="https://www.kyrelldixon.com"
        target="_blank"
        rel="noreferrer nofollower"
      >
        Kyrell Dixon.
      </a>
    </p>
  </footer>
);
