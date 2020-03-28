import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import Logo from "./logo";

export default () => (
  <footer className="pt-24 pb-10 text-cyan-light bg-cyan-dark">
    <div className="px-4 pt-12 md:px-8 lg:px-16">
      <div className="w-40 mb-8 text-white md:w-48">
        <Logo />
      </div>
      <div className="flex flex-col flex-wrap justify-between md:flex-row lg:text-base">
        <div className="max-w-sm mb-8 md:w-1/2 lg:flex-1 lg:mr-20">
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
            <img
              className="h-4"
              src="/images/icon-phone.svg"
              alt="phone icon"
            />
            <p className="ml-6 -mt-1 leading-tight">+1-543-123-4567</p>
          </div>
          <div className="flex mb-8">
            <img
              className="h-4"
              src="/images/icon-email.svg"
              alt="email icon"
            />
            <p className="ml-6 -mt-1 leading-tight">example@huddle.com</p>
          </div>
        </div>
        <nav className="flex flex-col mb-16 -mt-1 md:w-1/2 lg:flex-1 md:flex-row md:justify-around lg:justify-between lg:mr-20">
          <ul>
            <li className="mb-3">About Us</li>
            <li className="mb-3">What We Do</li>
            <li className="mb-3">FAQ</li>
          </ul>
          <ul>
            <li className="mb-3">Career</li>
            <li className="mb-3">Blog</li>
            <li className="mb-3">Contact Us</li>
          </ul>
        </nav>
        <div className="flex flex-col justify-between flex-1">
          <div className="flex justify-center mb-8 text-lg lg:justify-start">
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
          <div className="text-xs text-center lg:text-left lg:text-sm">
            <small className="block mx-auto mb-2 text-xs">
              &copy; Copyright {new Date().getFullYear()} Huddle. All rights
              reserved.
            </small>
            <p>
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
          </div>
        </div>
      </div>
    </div>
  </footer>
);
