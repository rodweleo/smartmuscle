function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <hr />
      <p>Smart Muscle Fitness Center {year}</p>
    </footer>
  );
}

export default Footer;
