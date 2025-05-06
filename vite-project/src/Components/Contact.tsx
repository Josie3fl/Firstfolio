import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1b355b] text-white font-sans">
      <header className="bg-cover bg-center h-24 flex items-center justify-around text-white font-bold text-xl tracking-wide" style={{ backgroundImage: "url('/path/to/your/diagonal-bg.png')" }}>
        <div className="text-3xl font-serif">Contact Section</div>
        <nav className="space-x-6">
          <a href="#about" className="hover:underline"></a>
          <a href="#portfolio" className="hover:underline"></a>
          <a href="#contact" className="hover:underline"></a>
          <a href="#resume" className="hover:underline"></a>
        </nav>
      </header>

      <main className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl mb-6 font-semibold">Contact</h2>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">Name:</label>
            <input type="text" id="name" name="name" className="w-full p-2 rounded text-black" defaultValue="Your Name" />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium">Email address:</label>
            <input type="email" id="email" name="email" className="w-full p-2 rounded text-black" />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium">Message:</label>
            <textarea id="message" name="message" rows={6} className="w-full p-2 rounded text-black"></textarea>
          </div>

          <button type="submit" className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
