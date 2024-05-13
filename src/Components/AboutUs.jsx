import About from "../assets/about.svg";
export default function AboutUs() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={About} className="lg:max-w-xl rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">AboutUs</h1>
          <p className="py-6 text-sm font-medium">
            {" "}
            Welcome to TheBottom Line, your one-stop destination for inspiring
            content in five categories: travel, education, fitness, finance,
            photography, and technology. At TheBottom Line, we're dedicated to
            providing you with informative and engaging articles to enrich your
            life. Explore new destinations, learn something new, stay fit,
            manage your finances, capture beautiful moments, and stay updated
            with the latest in technology. Our team of experts is committed to
            delivering quality content that educates, motivates, and inspires.
            Join our community of readers who are passionate about growth and
            exploration. Welcome to TheBottom Line where inspiration meets
            knowledge!
          </p>
          <button className="btn btn-primary">Get in touch!</button>
        </div>
      </div>
    </div>
  );
}
