import Article from "./article";

function blog() {
  const articles = [
    {
      title: "Can We Unify the Visual Identity of Serverless Computing? ☁️",
      description:
        "Proposed universal logo for the serverless concept, which has multiple representations by each cloud provider.",
      image: "../../public/images/6.png",
      url: "https://www.linkedin.com/posts/carlosanchayhua_serverless-cloudcomputing-design-activity-7284412067887886337-JqtQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB_06fYB2VJYV_EDfRcT9INfflbc7JlyIUw",
    },
    {
      title: "🌐 Serverless: Transforming Cloud Computing ☁️",
      description:
        "Learn how define serverless a tool to build a modern web application.",
      image: "../../public/what_is_serverless.png",
      url: "https://www.linkedin.com/posts/carlosanchayhua_serverless-cloudcomputing-techinnovation-activity-7279639278660341760-OVoK/?rcm=ACoAAB_06fYB2VJYV_EDfRcT9INfflbc7JlyIUw",
    },
    {
      title: "My passion for olives <3",
      description:
        "Learn how to use Trade Map and Fairs to find Peruvian olives.",
      image: "../../public/olives.webp",
      url: "https://cinternacionaluni.blogspot.com/2021/05/informacion-de-exportacion-de-aceitunas.html",
    },
  ];
  return (
    <>
      <div className="bg-gray-600 text-white max-w-full p-5 lg:px-20">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl m-5 lg:m-5 font-bold">blog.</h1>
        </div>

        <div className="lg:flex lg:flex-wrap lg:justify-around border-2 border-gray-500 p-5">
          {articles.map((article) => (
            <Article {...article} />
          ))}
        </div>
      </div>
    </>
  );
}

export default blog;
