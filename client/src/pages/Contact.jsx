import React from 'react'

const socialLinks = [
  {
    href: 'https://github.com/devsaxena01',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2Z"
          fill="currentColor"
        />
      </svg>
    ),
    alt: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/dev-saxena-430614294/',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599..."
          fill="currentColor"
        />
      </svg>
    ),
    alt: 'LinkedIn',
  },
  {
    href: '',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6.25 3C4.46403 3 3 4.46403..." fill="currentColor" />
      </svg>
    ),
    alt: 'Twitter X',
  },
  {
    href: '',
    icon: (
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
        <path d="M8.75 2.5C5.58319 2.5 3 5.08319..." fill="currentColor" />
      </svg>
    ),
    alt: 'Instagram',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16">
        {/* Left Section */}
        <div className="mb-12 lg:mb-0 flex flex-col">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent drop-shadow">
            Contact me for collaboration
          </h2>
          <p className="text-zinc-400 mt-4 mb-10 max-w-md">
            Reach out today to discuss your project needs and start collaborating on something amazing!
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-auto">
            {socialLinks.map(({ href, icon }, key) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-lg ring-2 ring-zinc-700 hover:bg-zinc-50 hover:text-gray-900 transition duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section - Form */}
        <form
          action="https://getform.io/f/amdmrxyb"
          method="POST"
          className="space-y-6 bg-gray-800 p-6 rounded-2xl shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-300">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Hi!"
              required
              className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 resize-y min-h-[120px] max-h-[300px] focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 hover:opacity-90 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>

      <hr className="mt-16 border-gray-700" />
    </section>
  );
};

export default Contact;
