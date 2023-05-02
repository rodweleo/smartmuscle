import lameck from "../assets/Smart Muscle Documents/Lameck Trainer.jpeg";

function Staff() {
  return (
    <section id="trainers">
      <h3>ATLEAST 3 YEARS OF EXPERIENCE</h3>
      <h2>OUR TRAINERS</h2>
      <div className="trainers">
        <div className="trainer">
          <img
            src={lameck}
            alt="Lameck the Builder"
            style={{ height: "250px", width: "250px" }}
          />
          <h2>Lameck The Builder</h2>
          <p>
            <i>
              "I have been passionate about health and fitness as long as I can
              remember and I have always loved helping others achieve their body
              goals."
            </i>
          </p>
        </div>
        <div className="trainer">
          <img
            src={lameck}
            alt="Lameck the Builder"
            style={{ height: "250px", width: "250px" }}
          />
          <h2>Booster The Trainer</h2>
          <p>
            <i>
              "I have been passionate about health and fitness as long as I can
              remember and I have always loved helping others achieve their body
              goals.""I believe that fitness is more than just a physical
              pursuit - it's a mindset and a lifestyle that's why I focus on
              helping my clients develop healthy habits and behaviors that they
              can sustain long-term."
            </i>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Staff;
