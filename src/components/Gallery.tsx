import pic1 from "../assets/Smart Muscle Documents/personal.jpeg";
import pic2 from "../assets/Smart Muscle Documents/WhatsApp Image 2022-12-13 at 12.40.24.jpeg";
function Gallery() {
  return (
    <>
      <section id="gallery">
        <h3>SEE WHAT OUR GYM LOOKS LIKE</h3>
        <h2>GALLERY</h2>
        <div className="pictures">
          <img
            src={pic1}
            style={{ width: "350px", height: "350px" }}
            alt="Smart Gym"
          />
          <img
            src={pic2}
            style={{ width: "350px", height: "350px" }}
            alt="Smart Gym"
          />
          <img
            src={pic2}
            style={{ width: "350px", height: "350px" }}
            alt="Smart Gym"
          />
          <img
            src={pic2}
            style={{ width: "350px", height: "350px" }}
            alt="Smart Gym"
          />
          <img
            src={pic2}
            style={{ width: "350px", height: "350px" }}
            alt="Smart Gym"
          />
        </div>
      </section>
    </>
  );
}
export default Gallery;
