import Logo from "../logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-14 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">

          {/* Logo with Horizontal Lines */}
          <div className="relative flex items-center w-full">
            <div className="flex-grow h-px bg-black/10" />
            <div className="mx-6">
              <Logo />
            </div>
            <div className="flex-grow h-px bg-black/10" />
          </div>

          {/* Copyright and Professional Info */}
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-secondary font-medium">
              © {currentYear} Sumeet Goenka. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Full Stack Developer • Jaipur, Rajasthan
            </p>
          </div>

          {/* Optional: Quick Social Links for Footer */}
          <div className="flex gap-6 mt-2">
            <a
              href="https://linkedin.com/in/sumeet-goenka"
              target="_blank"
              className="text-gray-400 hover:text-primary transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:sumeetgoenka24@gmail.com"
              className="text-gray-400 hover:text-primary transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
