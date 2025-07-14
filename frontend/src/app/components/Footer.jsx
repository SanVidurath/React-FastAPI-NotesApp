import { useEffect, useState } from "react";

// Footer component to display at the bottom of the page
const Footer = () => {
    // Get the current date and time
  const [time, setTime] = useState(new Date());


//   Use effect to update the time every second
useEffect(()=>{
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <footer
        className="py-3 my-4"
        style={{ position: "absolute", bottom: "0", left: "0", right: "0" }}
      >
        <p className="text-center text-muted">&copy; {time.toLocaleDateString()} {time.toLocaleTimeString()}</p>
      </footer>
    </div>
  );
};

export default Footer;
