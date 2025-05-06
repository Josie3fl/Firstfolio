import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1b355b] text-white font-sans">
      <header className="bg-cover bg-center h-24 flex items-center justify-around text-white font-bold text-xl tracking-wide" style={{ backgroundImage: "url('/path/to/your/diagonal-bg.png')" }}>
        <div className="text-3xl font-serif">Resume Section</div>
        <nav className="space-x-6">
          <a href="#about" className="hover:underline"></a>
          <a href="#portfolio" className="hover:underline"></a>
          <a href="#contact" className="hover:underline"></a>
          <a href="#resume" className="hover:underline"></a>
        </nav>
      </header>

      <main className="p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Resume</h2>

        <section className="mb-10">
          <h3 className="text-xl font-medium mb-2">Download</h3>
          <a
            href="firstfolio-resume.pdf"
            download
            className="inline-block bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
          >
            Download My Resume
          </a>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-2">Front-end Proficiencies</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Responsive Design</li>
              <li>Tailwind CSS</li>
              <li>TypeScript</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Back-end Proficiencies</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>RESTful APIs</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resume;
