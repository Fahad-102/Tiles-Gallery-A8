import Link from "next/link";
import Image from "next/image";
import logo from "@/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t ">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <Image
                         src={logo}
                         alt="The Tiles Gallery logo"
                         loading="eager"
                         width={50}
                         height={50}
                         style={{ width: 'auto', height: 'auto' }}
                         className="object-cover h-auto w-auto border"
                       />
              <span className="font-black text-lg">Tiles Gallery</span>
            </div>
            <p className="text-sm text-amber-950 max-w-62">
              Discover the finest collection of premium tiles for your dream spaces. Quality and elegance in every piece.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase mb-4 tracking-wider text-black">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-sm text-white-600">
              <li><Link href="/" className="  hover:text-amber-950

 transition-colors">Home</Link></li>
              <li><Link href="/all-photos" className="  hover:text-black

 transition-colors">All Photos</Link></li>
              <li><Link href="/pricing" className="  hover:text-black

 transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="font-bold text-sm uppercase mb-4 tracking-wider text-black">Support</h4>
            <ul className="flex flex-col gap-2 text-sm text-amber-950">
              <li><Link href="/contact" className="  hover:text-black

 transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="  hover:text-black

 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="  hover:text-black

 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-amber-950">
            © {currentYear} Tiles Gallery. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-amber-950">
            <p>Developed By Muhammad Fahad Jamal</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;