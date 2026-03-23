import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

const PRODUCT_DROPDOWN = {
  sections: [
    {
      type: "overview",
      title: "Overview",
      subtitle: "What Stikkly is",
    },
    {
      type: "list",
      title: "Features",
      items: [
        { title: "Canvas", href: "/product/canvas" },
        { title: "Collaboration", href: "/product/collaboration" },
        { title: "Task Management", href: "/product/task-management" },
        { title: "AI Teammate", href: "/product/ai-teammate" },
        { title: "Files & Context", href: "#" },
      ],
    },
    {
      type: "overview",
      title: "Integrations",
      subtitle: "Coming soon",
    },
    {
      type: "overview",
      title: "Security",
      subtitle: "Coming soon",
    },
  ],
};

const RESOURCES_DROPDOWN = {
  sections: [
    {
      items: [
        {
          title: "Blogs",
          description: "learn about new product features, and updates",
          href: "#",
        },
        {
          title: "Help Center",
          description: "Find answers and inspiration on all things Stikkly.",
          href: "/resources/help-center",
        },
      ],
    },
    {
      items: [
        {
          title: "Community",
          description: "Join the Stikkly community to help shape the future of creative workflows,",
          href: "/resources/community",
        },
        {
          title: "Release Notes",
          description: "Follow Stikkly's latest product news, or subscribe when new releases and updates go live.",
          href: "/resources/release-notes",
        },
      ],
    },
    {
      items: [
        {
          title: "Guides",
          description: "Learn how to use Stikkly with our tutorials",
          href: "#",
        },
        {
          title: "User Stories",
          description: "Hear how teams and individuals use Stikkly to build better products, together.",
          href: "/resources/user-stories",
        },
      ],
    },
  ],
};

const SOLUTIONS_DROPDOWN = {
  sections: [
    {
      type: "list",
      title: "Use Cases",
      items: [
        { title: "Brainstorming", href: "#" },
        { title: "Idea to Execution", href: "#" },
        { title: "Project Planning", href: "#" },
        { title: "Task Management", href: "#" },
      ],
    },
    {
      type: "list",
      title: "",
      items: [
        { title: "Creative Collaboration", href: "#" },
        { title: "Project Handoff", href: "#" },
        { title: "Async Work", href: "#" },
      ],
    },
    {
      type: "list",
      title: "Roles",
      items: [
        { title: "Creative Director", href: "#" },
        { title: "Designers", href: "#" },
        { title: "Founders", href: "#" },
        { title: "Freelancer", href: "#" },
      ],
    },
  ],
};

const NAV_LINKS = [
  { name: "Solutions", href: "#", hasDropdown: true, type: "solutions" },
  { name: "Resources", href: "#", hasDropdown: true, type: "resources" },
  { name: "Pricing", href: "/#pricing" },
];

const ProductDropdown: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 w-full bg-[#F8F9FB] border-t border-gray-200 shadow-lg animate-fade-in px-6 md:px-[128px] pt-[60px] pb-[38px] min-h-[489px]">
      <div className="max-w-[1728px] w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {PRODUCT_DROPDOWN.sections.map((section, idx) => (
          <div key={idx} className="flex flex-col">
            {section.type === "overview" ? (
              <div className="flex flex-col">
                <p className="text-[24px] font-sans text-[#000000] font-medium">
                  {section.title}
                </p>
                <p className="text-[20px] text-[#505050] mt-1 whitespace-nowrap">
                  {section.subtitle}
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                <p className="text-[20px] font-sans text-[#8C8C8C] font-normal tracking-tight">
                  {section.title}
                </p>
                <div className="flex flex-col gap-4">
                  {section.items?.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="text-[24px] font-sans text-[#000000] font-medium hover:text-black transition-colors"
                      onClick={onClose}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const SolutionsDropdown: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 w-full bg-[#F8F9FB] border-t border-gray-200 shadow-lg animate-fade-in px-6 md:px-[128px] pt-[60px] pb-[38px] min-h-[489px]">
      <div className="max-w-[1728px] w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {SOLUTIONS_DROPDOWN.sections.map((section, idx) => (
          <div key={idx} className="flex flex-col gap-6">
            <p className="text-[20px] font-sans text-[#8C8C8C] font-normal tracking-tight min-h-[30px]">
              {section.title}
            </p>
            <div className="flex flex-col gap-4">
              {section.items.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="text-[24px] font-sans text-[#000000] font-medium hover:text-black transition-colors"
                  onClick={onClose}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ResourcesDropdown: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 w-full bg-[#F8F9FB] border-t border-gray-200 shadow-lg animate-fade-in px-6 md:px-[128px] pt-[60px] pb-[38px] min-h-[489px]">
      <div className="max-w-[1728px] w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {RESOURCES_DROPDOWN.sections.map((section, idx) => (
          <div key={idx} className="flex flex-col gap-10">
            {section.items.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="group flex flex-col"
                onClick={onClose}
              >
                <span className="text-[24px] font-sans text-[#000000] font-medium group-hover:text-black transition-colors">
                  {item.title}
                </span>
                <p className="text-[20px] text-[#505050] mt-1 group-hover:text-gray-700 transition-colors max-w-[340px] leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const Nav: React.FC = () => {
  const [productOpen, setProductOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#F8F9FB]">
      <div className="flex items-center justify-between w-full max-w-[1728px] mx-auto px-6 md:px-[128px] py-6 md:py-10">
        <div className="flex items-center gap-16">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Stikkly" className="h-[32px] md:h-[40px]" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 font-sans">
            <button
              className={`flex items-center gap-1 font-normal transition-colors text-[24px] ${
                productOpen ? "text-[#6292FF]" : "text-[#333] hover:text-black"
              }`}
              onClick={() => {
                setProductOpen((v) => !v);
                setSolutionsOpen(false);
                setResourcesOpen(false);
              }}
            >
              Product
              {productOpen ? <ChevronUp size={14} className="mt-0.5" strokeWidth={2.5} /> : <ChevronDown size={14} className="mt-0.5 text-gray-600" strokeWidth={2.5} />}
            </button>

            {NAV_LINKS.map((link) => (
              <React.Fragment key={link.name}>
                {link.hasDropdown ? (
                  <button
                    className={`flex items-center gap-1 font-normal transition-colors text-[24px] ${
                      (link.type === "solutions" ? solutionsOpen : resourcesOpen) ? "text-[#6292FF]" : "text-[#333] hover:text-black"
                    }`}
                    onClick={() => {
                      if (link.type === "solutions") {
                        setSolutionsOpen((v) => !v);
                        setProductOpen(false);
                        setResourcesOpen(false);
                      } else {
                        setResourcesOpen((v) => !v);
                        setProductOpen(false);
                        setSolutionsOpen(false);
                      }
                    }}
                  >
                    {link.name}
                    {(link.type === "solutions" ? solutionsOpen : resourcesOpen) ? (
                      <ChevronUp size={14} className="mt-0.5" strokeWidth={2.5} />
                    ) : (
                      <ChevronDown size={14} className="mt-0.5 text-gray-600" strokeWidth={2.5} />
                    )}
                  </button>
                ) : (
                  <Link to={link.href} className="flex items-center gap-1 text-[#333] hover:text-black font-normal transition-colors text-[24px]">
                    {link.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center justify-end gap-3 min-w-[160px]">
          <Link to="/#login" className="flex justify-center items-center px-[45px] py-[16px] rounded-[9.5px] bg-[#E0E0E0] shadow-[inset_0_2.4px_3.9px_0_rgba(255,255,255,0.4)] text-[#111] font-semibold hover:bg-[#D9D9D9] transition-all text-[19px]">
            Log in
          </Link>
          <button className="flex justify-center items-center px-[22px] py-[16px] rounded-[9.5px] bg-[#0F0F0F] shadow-[inset_0_2.4px_3.9px_0_rgba(255,255,255,0.4)] text-white font-semibold hover:bg-black/80 transition-all text-[19px]">
            Get started
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-[#333] hover:text-black transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#F8F9FB] border-t border-gray-200 shadow-xl p-6 animate-fade-in z-40 overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="flex flex-col gap-8 pb-10">
            {/* Nav Links */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <p className="text-[20px] font-bold text-gray-400 uppercase tracking-widest px-2">Product</p>
                {PRODUCT_DROPDOWN.sections.flatMap(s => s.items?.map(i => ({ ...i, subtitle: undefined })) || [{ title: s.title, href: "#", subtitle: s.subtitle }]).map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="text-[28px] font-normal text-[#111] px-2 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                    {'subtitle' in item && item.subtitle && <span className="block text-[14px] text-gray-500 mt-1">{item.subtitle}</span>}
                  </Link>
                ))}
              </div>
              <div className="h-[1px] bg-gray-200 mx-2"></div>

              <div className="flex flex-col gap-4">
                <p className="text-[20px] font-bold text-gray-400 uppercase tracking-widest px-2">Solutions</p>
                {SOLUTIONS_DROPDOWN.sections.flatMap(s => s.items).map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="text-[28px] font-normal text-[#111] px-2 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="h-[1px] bg-gray-200 mx-2"></div>

              <div className="flex flex-col gap-4">
                <p className="text-[20px] font-bold text-gray-400 uppercase tracking-widest px-2">Resources</p>
                {RESOURCES_DROPDOWN.sections.flatMap(s => s.items).map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="text-[28px] font-normal text-[#111] px-2 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              <div className="h-[1px] bg-gray-200 mx-2"></div>

              {NAV_LINKS.filter(l => !l.hasDropdown).map((link) => (
                <Link
                  key={link.name}
                  to={link.href === "#" ? "#" : link.href}
                  className="text-[28px] font-normal text-[#111] px-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 mt-4">
              <Link
                to="/#login"
                className="flex justify-center items-center w-full py-5 rounded-[12px] bg-[#E0E0E0] text-[#111] font-semibold text-[22px]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <button
                className="flex justify-center items-center w-full py-5 rounded-[12px] bg-[#0F0F0F] text-white font-semibold text-[22px]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Dropdowns */}
      <div className="hidden md:block">
        <ProductDropdown isOpen={productOpen} onClose={() => setProductOpen(false)} />
        <SolutionsDropdown isOpen={solutionsOpen} onClose={() => setSolutionsOpen(false)} />
        <ResourcesDropdown isOpen={resourcesOpen} onClose={() => setResourcesOpen(false)} />
      </div>
    </nav>
  );
};

export default Nav;
