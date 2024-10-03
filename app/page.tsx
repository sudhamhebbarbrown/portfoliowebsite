import React from 'react';
import { Link } from 'next-view-transitions';

function AnimatedName() {
  return (
    <h1 className="font-medium pt-12 transition-element">
      <span className="sr-only">Sudham Hebbar</span>
      <span aria-hidden="true" className="block overflow-hidden group relative">
        <span className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-full">
          {'Sudham Hebbar'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </span>
        <span className="inline-block absolute left-0 top-0 transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
          {'sudhamhebbar'.split('').map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter}
            </span>
          ))}
        </span>
      </span>
    </h1>
  );
}

export default function Home() {
  return (
    <>
      <AnimatedName />
      <div className="text-gray-800 space-y-4 leading-snug">
        <p>
          I'm a full stack developer and a distributed systems engineer. I am a  at{' '}
          <Link href="/education" className="text-blue-500 hover:text-blue-700">
            student
          </Link>
          , Brown University here my primary concencration is distributed systems and programming languages.
        </p>
        <p>
          I have previously{' '}
          <Link href="/work" className="text-blue-500 hover:text-blue-700">
          worked
          </Link>
         {' '} at {'Schneider Electric'} as a backend developer and eClinicalworks as a software intern.
        </p>
        <p>
          I have worked on many{' '}
          <Link href="/projects" className="text-blue-500 hover:text-blue-700">
          projects
          </Link> 
         {' '} including a distributed search engine, a multi-threaded database system, and a music streaming service.
        </p>
        <p>
          I am currently researching on combined static and dynamic analysis to prevent supply chain attacks in npm packages.
        </p>
        <div className="bg-gray-100 border-l-4 border-blue-500 text-gray-700 p-4 my-4"><p>🚨 I am <b>open to work</b> (preferably backend engineering), so if you think you'd like a hardworking &amp; passionate engineer on your team, please reach out!🚨</p></div>
      </div>
    </>
  );
}
