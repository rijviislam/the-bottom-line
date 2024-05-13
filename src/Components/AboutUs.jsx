import About from "../assets/about.svg";
export default function AboutUs() {
  return (
    <div>
      <div>
        <h2 className="text-5xl font-extrabold">AboutUs</h2>
        <p>
          Welcome to TheBottom Line, your one-stop destination for inspiring
          content in five categories: travel, education, fitness, finance,
          photography, and technology. At TheBottom Line, we're dedicated to
          providing you with informative and engaging articles to enrich your
          life. Explore new destinations, learn something new, stay fit, manage
          your finances, capture beautiful moments, and stay updated with the
          latest in technology. Our team of experts is committed to delivering
          quality content that educates, motivates, and inspires. Join our
          community of readers who are passionate about growth and exploration.
          Welcome to TheBottom Line where inspiration meets knowledge!
        </p>
      </div>
      <div>
        <img src={About} alt="" />
      </div>
    </div>
  );
}
