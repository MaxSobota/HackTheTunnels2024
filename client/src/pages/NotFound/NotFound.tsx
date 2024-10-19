import { Central as Layout } from "@/layouts";
import "./NotFound.style.scss";

function NotFound() { // new for challenge 4
  return (
    <Layout title={"No page for you"}>
      <h1>Instead of a page, here's a frog</h1>
      <img src="/frog.jpg" alt="frog" />
      <audio controls autoPlay loop><source src="buzzer.mp3" type="audio/mp3"/></audio>
      <audio controls autoPlay><source src="explosion.mp3" type="audio/mp3"/></audio>
      <audio controls autoPlay loop><source src="fart.mp3" type="audio/mp3"/></audio>
      <audio controls autoPlay><source src="goofy.mp3" type="audio/mp3"/></audio>
      <audio controls autoPlay><source src="laugh.mp3" type="audio/mp3"/></audio>
      <audio controls autoPlay loop><source src="sus.mp3" type="audio/mp3"/></audio>
    </Layout>
  );
}

export default NotFound;
