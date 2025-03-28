import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";

function contact() {
  return (
    <section id="contact">
      <div className="p-5 lg:flex lg:justify-around items-center bg-gray-700 text-white">
        <div className="lg:ml-5">
          <h1 className="text-5xl lg:text-6xl m-5 lg:m-5 font-bold">
            contact.
          </h1>
          <p className="text-2xl lg:mx-5 lg:mt-10 justify-self-auto">
            Get in touch with me via social media or send me an email.
          </p>

          <div>
            <div className="lg:mx-10 lg:my-10 flex justify-center space-x-5">
              <a
                href="https://www.facebook.com/CarlosMiguelAnchayhua/"
                target="_blank"
              >
                <BsFacebook
                  size={40}
                  className="hover:scale-120 transition duration-500 ease-in-out"
                />
              </a>

              <a
                href="https://www.instagram.com/carlos.miguel.pe/"
                target="_blank"
              >
                <BsInstagram
                  size={40}
                  className="hover:scale-120 transition duration-500 ease-in-out"
                />
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=51980732693"
                target="_blank"
              >
                <BsWhatsapp
                  size={40}
                  className="hover:scale-120 transition duration-500 ease-in-out"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/carlosanchayhua/"
                target="_blank"
              >
                <BsLinkedin
                  size={40}
                  className="hover:scale-120 transition duration-500 ease-in-out"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="py-5 lg:w-1/4">
          <img
            className="rounded-full border-2 border-gray-500 opacity-0 transition-opacity duration-2000 ease-in-out"
            src="/carlos2.png"
            alt="Myself"
            onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
          />
        </div>
      </div>
      {/* <div className="bg-gray-700 text-white text-center p-5">
        <h2 className="text-4xl font-bold p-5">Send me an email</h2>
        <form className="justify-items-center border-t-2" action="">
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full p-2 border-2 border-gray-500 rounded-md"
          />
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full p-2 border-2 border-gray-500 rounded-md"
          />
          <label htmlFor="message" className="block">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="w-full p-2 border-2 border-gray-500 rounded-md"
          ></textarea>
          <button
            type="submit"
            className="bg-gray-500 text-white p-2 rounded-md mt-2"
          >
            Send
          </button>
        </form>
      </div> */}
    </section>
  );
}

export default contact;
