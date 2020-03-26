import Footer from "../components/footer";
import Card from "../components/card"
import Header from "../components/header"

export default () => (
  <div className="font-body text-cyan-dark">
    <Header />
    <section className="px-4 pt-16 pb-4">
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
      <div
        className="relative bg-white rounded-lg text-center px-4 py-10 shadow-lg"
        style={{ top: "5rem" }}
      >
        <h2 className="font-heading mb-6">Ready To Build Your Community?</h2>
        <button className="bg-pink px-10 py-2 text-xs font-bold rounded-full text-white shadow-lg">
          Get Started For Free
        </button>
      </div>
    </section>
    <Footer />
  </div>
);
