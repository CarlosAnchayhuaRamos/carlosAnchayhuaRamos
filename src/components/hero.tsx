import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";

function hero() {
  return (
    <section className="p-5 lg:flex items-center bg-gray-700 text-white">
      <div className="lg:ml-5">
        <h1 className="text-5xl lg:text-6xl m-5 lg:m-5 font-bold">about.</h1>
        <p className="text-2xl lg:mx-5 lg:mt-10 justify-self-auto">
          Systems Engineer specializing in web development, serverless projects
          and microservices based in sunny Lima, Perú.
        </p>
        <p className="text-1xl lg:mx-5 lg:mt-5 justify-self-auto">
          I am a conscientious, proactive, self-motivated, and communicative
          professional with a demonstrated proficiency in interpersonal skills,
          goal leadership, management, and programming. I find motivation in the
          opportunity to make meaningful contributions to both professional and
          interpersonal aspects of my environment.
        </p>
      </div>

      <div className="flex justify-center py-5 lg:w-2/3">
        <img
          className="rounded-full border-2 border-gray-500 opacity-0 transition hover:scale-105 duration-1000 ease-in-out"
          src="https://carlosanchayhua.s3.us-west-2.amazonaws.com/carlos2.PNG"
          alt="Myself"
          onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
        />
      </div>

      <div>
        <h1 className="text-3xl lg:text-4xl pb-5 lg:p-5">Show More:</h1>
        <div className="lg:mx-10 flex justify-center space-x-5">
          <a
            href="https://www.facebook.com/CarlosMiguelAnchayhua/"
            target="_blank"
          >
            <BsFacebook
              size={30}
              className="hover:scale-120 transition duration-500 ease-in-out"
            />
          </a>

          <a href="https://www.instagram.com/carlos.miguel.pe/" target="_blank">
            <BsInstagram
              size={30}
              className="hover:scale-120 transition duration-500 ease-in-out"
            />
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=51980732693"
            target="_blank"
          >
            <BsWhatsapp
              size={30}
              className="hover:scale-120 transition duration-500 ease-in-out"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/carlosanchayhua/"
            target="_blank"
          >
            <BsLinkedin
              size={30}
              className="hover:scale-120 transition duration-500 ease-in-out"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default hero;
