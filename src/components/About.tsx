import image from "../assets/Smart Muscle Documents/about.jpeg";

function About() {
  return (
    <>
      <h3>About Us</h3>
      <h2>Find Out More</h2>
      <div className="about">
        <p>
          We are a community-based gym located in the heart of Egerton. Our team
          is dedicated to helping people of all fitness levels reach their goals
          and lead healthier and more active lives. At Smart Muscle, we believe
          in the power of exercise to transform both the body and the mind. That
          is why we offer a wide range of equipment and classes to suit every
          fitness need and preference from weight lifting to cardio to yoga, we
          have something for everyone.Our teams of certified trainers is here to
          support and motivate you every step of the way. Whether you are just
          starting out on your fitness journey or looking to take your training
          to the next level, we have the knowledge and experience to help you
          succeed.
        </p>
        <img
          src={image}
          alt="About SM"
          style={{ width: "400px", height: "300px" }}
        />
      </div>
    </>
  );
}

export default About;
