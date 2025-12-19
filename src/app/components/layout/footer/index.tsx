import Logo from "../logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-8 sm:py-14">
        <div className="flex flex-col items-center gap-6">

          {/* Logo with Horizontal Lines */}
          <div className="flex items-center w-full max-w-md">
            <span className="flex-grow h-px bg-black/10" />
            <span className="flex-grow h-px bg-black/10" />
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-secondary font-medium">
              © {currentYear} Sumeet Goenka. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Full Stack Developer • Jaipur, Rajasthan
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
