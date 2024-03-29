import Head from "next/head";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook, faDev } from '@fortawesome/free-brands-svg-icons'
import Crubs from "../components/crubs"

export default function Index() {
  return (
    <div>
      <Head>
        <title>Home | Okumu Justine | Software Developer</title>
        <meta name="description" content="Home | Okumu Justine | Software Developer" />
        <meta property="og:title" content="Home | Okumu Justine | Software Developer" />
        <meta property="og:description" content="Home | Okumu Justine | Software Developer" />
        <meta property="og:url" content="https://okumujustine.com" />
        <meta property="og:site_name" content="Okumu Justine: Software Developer" />
      </Head>
      <section className="flex flex-col lg:flex-row justify-between items-center lg:px-4 h-1/2 pb-10 lg:pb-16">
        <div className="flex flex-col lg:justify-between space-y-6 py-4 w-10/12 lg:w-6/12 ">
          <div>
            <p className="text-lg">Hello, I am</p>
            <h1 className=" text-3xl lg:text-5xl font-bold text-gray-800">Okumu Justine</h1>
          </div>
          <div>
            <p className="leading-relaxed">
              <br />A software Developer with over 4 years of experience in Python & JavaScript.
              <br/> Currently learning Salesforce CRM and Machine Learning.
            </p>

          </div>
          <div className="inline-flex space-x-4">
            <a
              target="_blank"
              rel="noopener noreferrer" href="https://github.com/okumujustine">
              <FontAwesomeIcon className="social-link" icon={faGithub} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer" href="https://www.linkedin.com/in/okumu-justine-b4993b13b/">
              <FontAwesomeIcon className="social-link" icon={faLinkedin} />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer" href="https://www.facebook.com/okumu.justine.9/">
              <FontAwesomeIcon className="social-link" icon={faFacebook} />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer" href="https://dev.to/okumujustine">
              <FontAwesomeIcon className="social-link" icon={faDev} />
            </a>

          </div>
        </div>
        <div className="pt-5 lg:pt-0">
          <div className="rounded-full border-4 border-gray-200 h-52 lg:h-60 w-52 lg:w-60 bg-cover" style={{ backgroundImage: "url('dist/images/zila1.jpeg')" }}></div>
        </div>
      </section>
      <div className="flex flex-col justify-center items-center mb-20">
        <h3 className="text-2xl text-gray-500 text-center">Incase you loved my work and experience!</h3>
        <br />
        <div><a href="mailto:okumujustine01@gmail.com" className="bg-blue-700 text-white py-3 px-4 hover:bg-blue-900 font-bold shadow-lg rounded-md flex justify-between items-center uppercase w-full">Work with me<span className="ml-3 animate-ping bg-white h-3 w-3 rounded-full"></span></a></div>
      </div>
      <section className="bg-gray-50 py-16 px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800">Technologies</h1>
            <p className="py-4">Here's is my tech stacks</p>
          </div>
          <div className="flex lg:flex-row flex-wrap flex-row justify-center">
            <Crubs text="Python" />
            <Crubs text="Flask" />
            <Crubs text="Django" />

            <Crubs text="TypeScript" />
            <Crubs text="ReactJS" />

            <Crubs text="Elasticsearch" />
            <Crubs text="Docker" />

            <Crubs text="MongoDB" />
            <Crubs text="Postgres" />
          </div>
          <div className="flex justify-center mt-10">
            <a href="mailto:okumujustine01@gmail.com" className="bg-green-700 text-white py-3 px-4 hover:bg-green-900 font-bold shadow-lg rounded-md flex justify-between items-center uppercase">Work with me<span className="ml-3 animate-ping bg-white h-3 w-3 rounded-full"></span></a>
          </div>
        </div>
      </section>
    </div>
  );
}
