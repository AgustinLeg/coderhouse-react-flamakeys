import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-300 w-full py-6 px-4 mt-32 overflow-x-hidden ">
      <div className="flex flex-col  md:flex-row items-center justify-between my-4 text-gray-500">
        <span>Proyecto final de<a href="https://www.coderhouse.com/" target="_blank" rel="noopener noreferrer" aria-label="CoderHouse" className="ml-1  underline">
           CoderHouse
        </a></span>
        
        <p className="inline-flex mt-5 md:mt-0 text-gray-500">
          Construido por Agustin Leguizamon
          <span className="ml-1">
            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
          </span>
          .
        </p>
        <div className="flex items-center mt-5 md:mt-0">
          <a href="https://www.agustin.leg7@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
            <svg
              fill="none"
              className="h-6 w-6 text-gray-600 mr-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/agustin-leguizamon-359b69208/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg
              className="h-6 w-6 fill-current text-gray-600 mr-6"
              viewBox="0 0 512 512"
            >
              <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
            </svg>
          </a>
          <a href="https://github.com/AgustinLeg" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg
              className="h-6 w-6 fill-current text-gray-600 mr-6"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
