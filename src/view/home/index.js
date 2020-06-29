import Moon from "moon";
import navbar from "../components/navbar";
import post from "../components/post";

const { section, div } = Moon.view.m;

export default ({ data }) => {
  return (
    <div>
      <section>
        <navbar />
      </section>
      <section>
        <post data=data />
      </section>
    </div>
  );
};
