import React, { useState, useEffect } from "react";
import {
  BsCursorFill,
  BsTextareaT,
  BsFillStickyFill,
  BsChatSquareText,
} from "react-icons/bs";
import { BiMicrophone, BiPaperclip } from "react-icons/bi";
import { TbPencil, TbSquarePlus, TbArrowUpRight } from "react-icons/tb";

const cursorMap: Record<string, string> = {
  cursor: "default",
  sticky: "cell",
  pencil: "crosshair",
  text: "text",
  mic: "default",
  frame: "crosshair",
  arrow: "pointer",
  comment: "default",
  attachment: "copy",
};

const Tools: React.FC = () => {
  const [activeTool, setActiveTool] = useState("cursor");

  const handleToolClick = (id: string) => {
    setActiveTool(id);
    document.body.style.cursor = cursorMap[id] ?? "default";
  };

  // Reset cursor when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.cursor = "default";
    };
  }, []);

  const tools = [
    {
      id: "cursor",
      icon: <BsCursorFill className="text-2xl" />,
      hasDropdown: true,
    },
    {
      id: "sticky",
      icon: <BsFillStickyFill className="text-2xl text-[#FFD600]" />,
      hasDropdown: false,
    },
    {
      id: "pencil",
      icon: <TbPencil className="text-2xl text-gray-400" />,
      hasDropdown: false,
    },
    {
      id: "text",
      icon: <BsTextareaT className="text-2xl text-gray-600" />,
      hasDropdown: false,
    },
    {
      id: "mic",
      icon: <BiMicrophone className="text-2xl text-gray-600" />,
      hasDropdown: false,
    },
    {
      id: "frame",
      icon: <TbSquarePlus className="text-2xl text-gray-600" />,
      hasDropdown: false,
    },
    {
      id: "arrow",
      icon: <TbArrowUpRight className="text-2xl text-gray-600" />,
      hasDropdown: false,
    },
    {
      id: "comment",
      icon: <BsChatSquareText className="text-2xl text-gray-600" />,
      hasDropdown: false,
    },
    {
      id: "attachment",
      icon: <BiPaperclip className="text-2xl text-gray-600" />,
      hasDropdown: false,
    },
  ];

  return (
    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 z-20 w-[calc(100%-48px)] md:w-max">
      <div className="bg-white/90 backdrop-blur-md rounded-[22px] shadow-[0_10px_40px_rgba(0,0,0,0.10)] hover:shadow-none border border-[#EAEAEA] flex items-center justify-start md:justify-center -rotate-2 hover:rotate-0 transition-all duration-500 px-4 md:px-8 py-3 gap-2 overflow-x-auto no-scrollbar">
        {tools.map((tool, index) => (
          <React.Fragment key={tool.id}>
            {/* Separator */}
            {index === 3 && (
              <div className="w-[1px] h-10 bg-gray-200 mx-3"></div>
            )}

            <button
              onClick={() => handleToolClick(tool.id)}
              title={tool.id.charAt(0).toUpperCase() + tool.id.slice(1)}
              className={`relative flex items-center justify-center w-14 h-14 rounded-[14px] transition-all duration-200 ${
                activeTool === tool.id
                  ? "bg-[#5D5FEF] text-white shadow-sm"
                  : "bg-transparent text-[#6B6B6B] hover:bg-gray-50 hover:text-[#111111]"
              }`}
            >
              {tool.icon}
              {tool.hasDropdown && (
                <div
                  className={`absolute bottom-1 right-1 flex items-center justify-center ${activeTool === tool.id ? "text-white" : "text-gray-400"}`}
                >
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              )}
            </button>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Tools;
