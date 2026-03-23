import React, { useState } from "react";
import { ChevronDown, ArrowLeft, ArrowRight } from "lucide-react";
import { FaRegCommentDots } from "react-icons/fa";

interface Comment {
  name: string;
  time: string;
  text: string;
  img: string;
}

interface DiscussionItem {
  id: number;
  userImg: string;
  title: string;
  latestReplyUser: string;
  latestReplyTime: string;
  description: string;
  commenters: string[];
  commentCount: number | string;
  isExpanded?: boolean;
  comments?: Comment[];
}

const discussionData: DiscussionItem[] = [
  {
    id: 1,
    userImg: "/1.png",
    title: "What are you working on with stickkly",
    latestReplyUser: "Qhobbiejunior84",
    latestReplyTime: "30 minutes ago",
    description: "Figma ipsum component variant main layer. Fill horizontal project follower rotate move. Bullet auto shadow share reesizing component. Library follower object vector plugin. Create italic star link ellipse vector comment blur outline layout. Component draft background comment reesizing follower create boolean. Clip component pixel underline edit clip community selection slice. Follower fill comment arrow.",
    commenters: ["/1.png", "/13.jpg", "/3.png", "/4.png", "/5.png"],
    commentCount: 96,
  },
  {
    id: 2,
    userImg: "/13.jpg",
    title: "My canvas keeps freezing, what could be the problem",
    latestReplyUser: "Qhobbiejunior84",
    latestReplyTime: "30 minutes ago",
    description: "Figma ipsum component variant main layer. Fill horizontal project follower rotate move. Bullet auto shadow share reesizing component. Library follower object vector plugin. Create italic star link ellipse vector comment blur outline layout. Component draft background comment reesizing follower create boolean. Clip component pixel underline edit clip community selection slice. Follower fill comment arrow.",
    commenters: ["/1.png", "/13.jpg", "/3.png", "/4.png", "/5.png"],
    commentCount: "128K",
  },
  {
    id: 3,
    userImg: "/4.png",
    title: "UI of an ecommerce app, help needed !! 😢😢",
    latestReplyUser: "Qhobbiejunior84",
    latestReplyTime: "30 minutes ago",
    description: "Figma ipsum component variant main layer. Fill horizontal project follower rotate move. Bullet auto shadow share reesizing component. Library follower object vector plugin. Create italic star link ellipse vector",
    commenters: ["/1.png", "/13.jpg", "/3.png", "/4.png", "/5.png"],
    commentCount: 42,
    isExpanded: true,
    comments: [
      { name: "Qhobbie Junior Maddison", time: "30mins ago", text: "Figma ipsum component variant main layer. Fill horizontal project follower rotate move. Bullet auto shadow share reesizing component. Library follower object vector plugin. Create italic star link ellipse vector", img: "/1.png" },
      { name: "Pressplay Jackson", time: "45mins ago", text: "Figma ipsum component variant main layer. Fill horizontal project follower rotate move. Bullet auto shadow share reesizing component. Library follower object vector plugin. Create italic star link ellipse vector", img: "/13.jpg" },
      { name: "Vibrant Studio Hayes", time: "1 hr ago", text: "Figma ipsum component variant main layer. Fill horizontal project follower rotate move. Bullet auto shadow share reesizing component. Library follower object vector plugin. Create italic star link ellipse vector", img: "/4.png" }
    ]
  }
];

const Discussions: React.FC = () => {
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  return (
    <section className="bg-white py-20 px-6 md:px-[128px] mt-[150px]">

      <div className="max-w-[1728px] mx-auto">
        {/* Header */}
        <div className="mb-12 text-left">
          <h2 className="text-[30px] font-bold text-[#101828] mb-4">
            Discussions
          </h2>
          <p className="text-[#475467] text-[20px] font-normal mb-8">
            Check out upcoming and past events organized by Stickkly
          </p>

          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="relative">
              <button 
                className="flex items-center justify-center gap-[10px] px-[20px] py-[10px] rounded-[5px] border border-[rgba(0,0,0,0.10)] text-[#344054] font-medium text-[16px] hover:bg-gray-50 transition-colors"
                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
              >
                Latest First
                <ChevronDown className={`w-4 h-4 transition-transform ${sortDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {sortDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-[#EAECF0] rounded-lg shadow-lg z-20 py-1">
                  {["Latest First", "Oldest First", "Most Popular", "Most Comments"].map((option) => (
                    <button 
                      key={option}
                      className="w-full text-left px-4 py-2 text-[14px] text-[#344054] hover:bg-[#F9FAFB] transition-colors"
                      onClick={() => setSortDropdownOpen(false)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="flex items-center justify-center gap-[10px] px-[20px] py-[10px] rounded-[5px] border border-[rgba(0,0,0,0.10)] bg-[#7058D0] text-white font-bold text-[18px] hover:bg-[#5C46B1] transition-colors shadow-sm">
              Start New Discussions
            </button>
          </div>

        </div>

        {/* Discussions List */}
        <div className="flex flex-col gap-0 border-t border-[#EAECF0]">
          {discussionData.map((discussion) => (
            <div key={discussion.id} className="py-12 border-b border-[#EAECF0]">
              <div className="flex gap-6 items-start">
                <img src={discussion.userImg} alt="User" className="w-[60px] h-[60px] rounded-full object-cover" />
                <div className="flex-1">
                  <h3 className="text-[24px] font-bold text-[#101828] mb-1">
                    {discussion.title}
                  </h3>
                  <p className="text-[#475467] text-[16px] mb-6">
                    Latest reply from <span className="text-[#7F56D9] font-medium">{discussion.latestReplyUser} {discussion.latestReplyTime}</span>
                  </p>
                  
                  <div className="flex flex-col md:flex-row justify-between gap-8 items-end">
                    <p className={`text-[#475467] text-[18px] leading-[28px] ${discussion.isExpanded ? 'max-w-4xl' : 'max-w-3xl'} mb-0`}>
                      {discussion.description}
                    </p>
                    
                    {!discussion.isExpanded && (
                      <div className="flex flex-col items-end gap-3 flex-shrink-0">
                        <div className="flex -space-x-2">
                           {discussion.commenters.map((img, i) => (
                             <img key={i} src={img} className="w-8 h-8 rounded-full border-2 border-white" alt="Commenter" />
                           ))}
                        </div>
                        <div className="flex items-center gap-2 text-[#667085] text-[16px]">
                          <FaRegCommentDots className="w-4 h-4" />
                          <span>{discussion.commentCount} comments</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {discussion.isExpanded && discussion.comments && (
                    <div className="mt-12 pl-6 border-l-2 border-[#EAECF0]">
                      <h4 className="font-bold text-[#101828] text-[20px] mb-6">Comments</h4>
                      
                      <div className="flex gap-4 items-center bg-[#F9FAFB] p-2 rounded-lg mb-8">
                         <img src="/5.png" className="w-[40px] h-[40px] rounded-full" alt="Me" />
                         <input 
                           type="text" 
                           placeholder="Add a public comment..." 
                           className="flex-1 bg-transparent border-none focus:ring-0 text-[#101828] placeholder-[#667085]"
                         />
                      </div>

                      <div className="flex flex-col gap-10">
                        {discussion.comments.map((comment, idx) => (
                          <div key={idx} className="flex gap-4">
                            <img src={comment.img} className="w-[45px] h-[45px] rounded-full object-cover" alt="Commenter" />
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-[#101828] text-[18px]">{comment.name}</span>
                                <span className="text-[#667085] text-[14px]">{comment.time}</span>
                              </div>
                              <p className="text-[#475467] text-[16px] leading-relaxed">
                                {comment.text}
                              </p>
                            </div>
                          </div>
                        ))}
                        <button className="text-[#7F56D9] font-bold text-[18px] flex items-center gap-2 mt-4 hover:underline self-start">
                          Read More
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pt-5 flex justify-end border-[#EAECF0]">
          <div className="flex items-center border border-[#EAECF0] rounded-[8px] overflow-hidden bg-white">
            <button className="flex items-center gap-2 px-[14px] py-[10px] text-[#344054] hover:bg-gray-50 font-semibold border-r border-[#EAECF0] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            
            <div className="flex items-center">
              {[1, 2, 3, "...", 8, 9, 10].map((page, idx) => (
                <button
                  key={idx}
                  className={`w-[45px] h-[44px] flex items-center justify-center font-semibold border-r border-[#EAECF0] last:border-r-0 transition-colors ${
                    page === 1
                      ? "bg-[#F9F5FF] text-[#7058D0]"
                      : "text-[#667085] hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button className="flex items-center gap-2 px-[14px] py-[10px] text-[#344054] hover:bg-gray-50 font-semibold border-[#EAECF0] transition-colors">
              <span>Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Discussions;
