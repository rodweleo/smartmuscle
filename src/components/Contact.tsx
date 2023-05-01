import Button from "./Button";

function Contact() {
  function sendMessage() {
    alert("Send message");
  }
  return (
    <div className="form">
      <h2>You have a question? Ask us.</h2>
      <h3>Send us a message</h3>
      <form>
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
