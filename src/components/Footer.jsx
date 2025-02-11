// src/components/Footer.jsx
import { Link } from 'react-scroll'

const Footer = () => {
  const navItems = [
    { name: 'About', href: 'about' },
    { name: 'Experience', href: 'experience' },
    { name: 'Projects', href: 'projects' },
    { name: 'Achievements', href: 'achievements' },
    { name: 'Contact', href: 'contact' },
  ]

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/SamarthBhatia', icon: 'github' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/samarthbhatia89', icon: 'linkedin' },
  ]

  return (
    <footer className="bg-secondary/30 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Samarth Bhatia</h3>
            <p className="text-gray-400">
              Full Stack Developer specializing in building exceptional digital experiences
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    spy={true}
                    smooth={true}
                    className="text-gray-400 hover:text-primary cursor-pointer transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>Milan, Italy</p>
              <p>samarth.bhatia@mail.polimi.it</p>
              <p>samarthbhatia700@gmail.com</p>
              <div className="flex gap-4 mt-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Samarth Bhatia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer