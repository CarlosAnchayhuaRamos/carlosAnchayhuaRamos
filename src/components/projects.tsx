import Card from "./card";

function projects() {
  const cards = [
    {
      title: "Notifications-AWS-Twilio",
      description: "A module of notification system for your projects.",
      image: "../../public/1.png",
      url: "https://github.com/CarlosAnchayhuaRamos/Notifications-AWS-Twilio",
    },
    {
      title: "Transactions with Nest",
      description: "A project with Kafka, GraphQL and NestJs.",
      image: "../../public/nest.png",
      url: "https://github.com/CarlosAnchayhuaRamos/app-nodejs-codechallenge",
    },
    {
      title: "Tokenización de Tarjetas",
      description: "A project with rds and elasticache",
      image: "../../public/tarjeta.png",
      url: "https://github.com/CarlosAnchayhuaRamos/tokenization-rds-elasticache",
    },
    {
      title: "Star Wars API",
      description: "A website of Star Wars.",
      image: "../../public/sw.png",
      url: "https://github.com/CarlosAnchayhuaRamos/sw-api",
    },
    {
      title: "Mortal Kombat",
      description: "A server for your projects.",
      image: "../../public/Mortal.png",
      url: "https://github.com/CarlosAnchayhuaRamos/mortal_kombat",
    },
  ];

  return (
    <>
      <div className="bg-gray-600 text-white max-w-full p-5 lg:px-20">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl m-5 lg:m-5 font-bold">
            projects.
          </h1>
        </div>

        <div className="lg:flex lg:flex-wrap lg:justify-around border-2 border-gray-500 p-5">
          {cards.map((card) => (
            <Card {...card} />
          ))}
        </div>
      </div>
    </>
  );
}

export default projects;
