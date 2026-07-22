import React from "react";

interface FooterProps {
  companyName: string;
  year: number;
}

const Footer: React.FC<FooterProps> = ({ companyName, year }) => {
  const links = [
    { href: "/", label: "Home", category: "Useful Links" },
    { href: "/aboutus1", label: "About", category: "Useful Links" },
    { href: "/contactus", label: "Contact", category: "Useful Links" },
    {
      href: "/services/3",
      label: "Solar PV Installation",
      category: "Services",
    },
    {
      href: "/services/1",
      label: "CCTV Installation",
      category: "Services",
    },
    {
      href: "/services/7",
      label: "Software Development",
      category: "Services",
    },
    {
      href: "/services/6",
      label: "Fleet Management",
      category: "Services",
    },
  ];

  const categories = ["Useful Links", "Services"];

  return (
    <footer className="bg-brand-navy text-white py-8">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-4 sm:grid-cols-5 md:justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-white">{companyName}</h2>
            <p className="text-white/70">
              Engineering the Future of Africa.
            </p>
            <p className="text-white/60 text-sm mt-1">
              Integrated Industrial, Energy, Mobility, and Technology
              Conglomerate
            </p>
          </div>

          {categories.map((category) => (
            <div
              key={category}
              className="flex font-normal text-lg flex-col mb-6"
            >
              <span className="text-brand-yellow font-normal mb-3">
                {category}
              </span>
              <div className=" text-sm flex flex-col">
                {links
                  .filter((link) => link.category === category)
                  .map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-white/80 hover:text-brand-yellow pl-2 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
              </div>
            </div>
          ))}

          <div className="flex flex-col mb-6">
            <span className="text-brand-yellow font-normal mb-3">
              Contact Us
            </span>
            <div className="text-sm text-white/80">
              <p>Kigali, Rwanda</p>
              <p>Phone: +250789319155, +250787042094</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:nexgene24@gmail.com"
                  className="hover:text-brand-yellow transition-colors"
                >
                  nexgene24@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex space-x-6 mt-6 md:mt-0">
              {["twitter", "facebook", "instagram"].map((platform) => (
                <a
                  key={platform}
                  href={`https://${platform}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 text-white/80 hover:text-brand-yellow transition-colors"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      d={
                        platform === "twitter"
                          ? "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                          : platform === "facebook"
                          ? "M22 12a10 10 0 10-11.77 9.92v-7h-2v-2.92h2v-2.24a3.3 3.3 0 013.55-3.45h1.65v2.86h-1.17c-.81 0-1 .39-1 1v2h2.75L14 14.92h-2v7A10 10 0 0022 12z"
                          : "M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm8.5 1.5h-8.5a4.25 4.25 0 00-4.25 4.25v8.5a4.25 4.25 0 004.25 4.25h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25zm-4.25 3.75a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm5.25-.5a1 1 0 111 1 1 1 0 01-1-1z"
                      }
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-6 pt-6 text-center">
          <p className="text-white/60 text-sm">
            © {year} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
