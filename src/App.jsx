import React from 'react';
import ReactMarkdown from 'react-markdown';
import { promptText } from './promptContent';

export default function App() {
  const resources = [
    {
      name: "React Documentation",
      url: "https://react.dev",
      description: "Official React documentation"
    },
    {
      name: "Tailwind CSS",
      url: "https://tailwindcss.com",
      description: "A utility-first CSS framework"
    },
    {
      name: "Vite",
      url: "https://vitejs.dev",
      description: "Next generation frontend tooling"
    },
    {
      name: "GitHub",
      url: "https://github.com",
      description: "Store and manage your code repositories"
    },
    {
      name: "Vercel",
      url: "https://vercel.com",
      description: "Deploy web projects with the best developer experience"
    },
    {
      name: "ZAPT",
      url: "https://www.zapt.ai",
      description: "Build with AI"
    },
    {
      name: "MDN Web Docs",
      url: "https://developer.mozilla.org",
      description: "Resources for web developers"
    },
    {
      name: "Web.dev",
      url: "https://web.dev",
      description: "Guidance for modern web development"
    },
    {
      name: "Figma",
      url: "https://figma.com",
      description: "Design, prototype, and collaborate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Web App Development Guide</h1>
          <p className="mt-4 text-xl text-gray-600">A comprehensive resource for building modern web applications</p>
        </header>

        <section className="bg-white rounded-xl shadow-lg p-6 mb-16">
          <div className="prose prose-lg prose-indigo mx-auto">
            <ReactMarkdown>{promptText}</ReactMarkdown>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <a 
                key={index}
                href={resource.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 cursor-pointer"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.name}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center text-indigo-600 font-medium">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-16 text-center">
          <p className="text-gray-600">
            Made on <a href="https://www.zapt.ai" className="text-indigo-600 font-medium">ZAPT</a>
          </p>
        </footer>
      </div>
    </div>
  );
}