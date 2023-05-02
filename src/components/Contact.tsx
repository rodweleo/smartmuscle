import Button from "./Button";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
function Contact() {
  function sendMessage() {
    alert("Send message");
  }
  return (
    <div className="form">
      <div>
        <h3>CONTACT US</h3>
        <h2>WE CAN'T WAIT TO SEE YOU</h2>
        <p>
          We are looking forward to your joining our gym, training with us and
          starting your journey to your dream physique
        </p>
        <ul>
          <li>
            <FaPhoneAlt /> &nbsp; +257715578832 <span>or</span> +254740460689
          </li>
          <li>
            <MdEmail /> &nbsp; info@smartmuscle.com
          </li>
          <li>
            <MdLocationPin /> &nbsp; 420 Backyard Street Egerton, Njoro
          </li>
          <li>
            <FaBusinessTime /> &nbsp; Monday - Friday(5AM - 9PM), Saturday(8AM -
            3PM)
          </li>
        </ul>
      </div>
      <form>
        <h2>You have a question? Ask us.</h2>
        <h3>Send us a message</h3>
        <table>
          <tr>
            <td>
              <label htmlFor="name">Name</label>
            </td>
            <td>
              <input type="text" name="name" id="name" placeholder="Name" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="email">Email</label>
            </td>
            <td>
              <input type="email" name="email" id="email" placeholder="Email" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="message">Message</label>
            </td>
            <td>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
              ></textarea>
            </td>
          </tr>
        </table>
        <Button value="SEND MESSAGE" onclick={sendMessage} />
      </form>
    </div>
  );
}

export default Contact;
