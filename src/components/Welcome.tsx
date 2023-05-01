import Button from "./Button";

function Welcome() {
  function handleClick() {
    alert("Hello world");
  }
  return (
    <div className="welcome">
      <h1>
        START <span>YOUR</span> JOURNEY <span>TODAY</span>
      </h1>
      <p>
        Smart Muscle is a gym in the centre of fitness. Come join us and be
        close to your dream body.
      </p>
      <Button onclick={handleClick} value="GET STARTED" />
    </div>
  );
}

export default Welcome;
