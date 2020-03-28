import Footer from "../components/footer";
import Card from "../components/card";
import Header from "../components/header";

export default () => (
  <div className="font-body text-cyan-dark">
    <Header />
    <main className="px-4 pt-16 pb-4 md:px-8 lg:px-16 md:pt-24">
      <div className="max-w-lg mx-auto md:max-w-none">
        <Card
          imgSrc="/images/illustration-grow-together.svg"
          imgAlt="desktop and mobile browsers"
          title="Grow Together"
          description="Generate meaningful discussions with your audience and build a strong,
            loyal community. Think of the insightful conversations you miss out on
            with a feedback form."
        />
        <Card
          imgSrc="/images/illustration-flowing-conversation.svg"
          imgAlt="desktop and mobile browsers"
          title="Flowing Conversations"
          description="You wouldn't paginate a conversation in real life, so why do it online? Our
            threads have just-in-time loading for a more natural flow."
        />
        <Card
          imgSrc="/images/illustration-your-users.svg"
          imgAlt="desktop and mobile browsers"
          title="Your Users"
          description="It takes no time at all to integrate Huddle with your app's authentication
            solution. This means, once signed in to your app, your users can start
            chatting immediately."
        />
      </div>
      <div
        className="relative max-w-lg px-4 py-10 mx-auto text-center bg-white rounded-lg shadow-lg"
        style={{ top: "6rem" }}
      >
        <h2 className="mb-6 font-heading md:text-2xl">
          Ready To Build Your Community?
        </h2>
        <button className="px-10 py-2 text-xs font-bold text-white rounded-full shadow-lg bg-pink md:px-16 md:py-4">
          Get Started For Free
        </button>
      </div>
    </main>
    <Footer />
  </div>
);
