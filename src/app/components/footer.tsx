const Footer = () => {
  // Data for the footer links and sections
  const links = [
    { name: "Home", href: "#" },
    { name: "Shop", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const helpLinks = [
    { name: "Payment Options", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Privacy Policies", href: "#" },
  ];

  return (
    <footer className="bg-white text-gray-800 py-8 px-11 border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Address Section */}
        <div className="flex flex-col space-y-4">
          <address className="not-italic text-sm text-[#9F9F9F]">
            400 University Drive Suite 200 Coral <br />
            Gables, <br /> FL 33134 USA
          </address>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="font-semibold text-sm mb-4 text-[#9F9F9F]">Links</h4>
          <ul className="space-y-2 text-sm font-semibold">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h4 className="font-semibold text-sm mb-4 text-[#9F9F9F]">Help</h4>
          <ul className="space-y-2 text-sm font-semibold">
            {helpLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="font-semibold text-sm mb-4 text-[#9F9F9F]">Newsletter</h4>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border-b-2 border-gray-300 py-2 px-4 text-sm focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded mt-4 hover:bg-gray-800"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="mt-5" />
      <div className="mt-6 text-center text-sm text-gray-500">
        © 2022 Meubel House. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
