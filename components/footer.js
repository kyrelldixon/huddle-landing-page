import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import Logo from "./logo";

export default () => (
  <footer className="px-4 pt-24 pb-8 text-white md:px-8 lg:px-12 bg-cyan-dark">
    <div className="mb-16">
      <Logo />
      <div className="flex mb-8">
        <img
          className="h-4"
          src="/images/icon-location.svg"
          alt="location icon"
        />
        <p className="ml-6 -mt-1 leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="flex mb-8">
        <img className="h-4" src="/images/icon-phone.svg" alt="phone icon" />
        <p className="ml-6 -mt-1 leading-tight">+1-543-123-4567</p>
      </div>
      <div className="flex mb-8">
        <img className="h-4" src="/images/icon-email.svg" alt="email icon" />
        <p className="ml-6 -mt-1 leading-tight">example@huddle.com</p>
      </div>
    </div>
    <nav className="mb-16 leading-loose">
      <ul>
        <li>About Us</li>
        <li>What We Do</li>
        <li>FAQ</li>
      </ul>
      <ul>
        <li>Career</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>
    </nav>
    <div className="flex justify-center mb-8 text-lg">
      <a
        href="https://www.twitter.com/kyrelldixon"
        target="_blank"
        className="px-1 py-1 mr-4 border border-gray-100 rounded-full"
      >
        <TiSocialFacebook size="1.3rem" />
      </a>
      <a
        href="https://www.twitter.com/kyrelldixon"
        target="_blank"
        className="px-1 py-1 mr-4 border border-gray-100 rounded-full"
      >
        <TiSocialTwitter size="1.3rem" />
      </a>
      <a
        href="https://www.instagram.com/kyrell.dixon"
        target="_blank"
        className="px-1 py-1 border border-gray-100 rounded-full"
      >
        <IoLogoInstagram size="1.3rem" />
      </a>
    </div>
    <small className="block mx-auto mb-2 text-center">
      &copy; Copyright {new Date().getFullYear()} Huddle. All rights reserved.
    </small>
    <p className="text-xs text-center">
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
