import { Central as Layout } from "@/layouts";
import "./NotFound.style.scss";

function NotFound() { // new for challenge 4
  return (
    <Layout title={"No page for you"}>
      <h1>Instead of a page, here's a frog</h1>
      <img src="/frog.jpg" alt="frog" />
    </Layout>
  );
}

export default NotFound;
