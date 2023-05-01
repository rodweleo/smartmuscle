import Button from "./Button";

function Plans() {
  function handleClick() {
    alert("BUY ONLINE");
  }
  return (
    <>
      <h3>FIRST ENTRANCE IS FREE</h3>
      <h2>MEMBERSHIP PLANS</h2>
      <div className="plans">
        <div className="plan">
          <h3>BASIC</h3>
          <h2>
            Kshs 100/<span>day</span>
          </h2>
          <ul>
            <li>Access to all gym equipment</li>
            <li>Unlimited training area</li>
            <li>1 free entry for a friend every month</li>
            <li>Discounts on group fitness</li>
          </ul>
          <Button value={"BUY ONLINE"} onclick={handleClick} />
        </div>
        <div className="plan">
          <h3>PLUS</h3>
          <h2>
            Kshs 500/<span>week</span>
          </h2>
          <ul>
            <li>All Benefits from BASIC</li>
            <li>Specialized training programs.</li>
            <li>2 free personal training sessions per month.</li>
            <li>Pre-orders in out eShop</li>
            <li>Discount on nutrition.</li>
            <li>Access to our exclusive events.</li>
          </ul>
          <Button value={"BUY ONLINE"} onclick={handleClick} />
        </div>
        <div className="plan">
          <h3>VIP</h3>
          <h2>
            Kshs 2000/<span>month</span>
          </h2>
          <ul>
            <li>All benefits from PLUS.</li>
            <li>Unlimited personal training sessions.</li>
            <li>VIP discount on all services and products.</li>
            <li>VIP access to our exclusive events.</li>
          </ul>
          <Button value={"BUY ONLINE"} onclick={handleClick} />
        </div>
      </div>
    </>
  );
}

export default Plans;
