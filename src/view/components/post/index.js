import Moon from "moon";
import home from "../../home";

const { div, h2, p, button } = Moon.view.m;

const post = ({ data }) => {
  const handleClick = () => {
    Moon.run(() => {
      const postCount = data.postCount + 1

      return({
        http: [
          {
            method: "GET",
            url: `https://jsonplaceholder.typicode.com/posts/${postCount}`,
            headers: {
              "Content-type": "application/json"
          },
            onLoad: ({ http }) => {
              const response = {...JSON.parse(http.body), postCount}

              return {
                view: <home data=response />
              };
            },
          }
        ]
      })}
    );
  };

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto p-8">
        <div className="mb-8">
          <h2 className="font-bold text-xl mb-2">{data.title}</h2>
          <p className="font-light">{data.body}</p>
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click=handleClick
        >
          Fetch post {data.postCount + 1}
        </button>
      </div>
    </div>
  )
}

export default post
