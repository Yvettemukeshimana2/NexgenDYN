 import React, { useState, useEffect, useRef } from "react";
 import { FaWhatsapp } from "react-icons/fa";
 import icon1 from "../assets/logo.jpeg";
 import Avatar from "../assets/logo.jpeg";
 import { motion } from "framer-motion";
const faq: Record<string, string> = {
  "What services does NEXGEN DYN offer?":
    "NEXGEN DYN offers CCTV installation, car buy & sell services, solar PV installation, plumbing and water heater systems, electrical and elevator installation, fleet management software, software development, and prototype development across Rwanda and Africa.",

  "How do I initiate a project with NEXGEN DYN?":
    "Contact our team via phone (+250789319155 / +250787042094) or email (nexgene24@gmail.com) for a preliminary discussion and quote.",

  "What is your commitment to quality and safety?":
    "NEXGEN DYN is committed to quality, safety, and customer satisfaction on every project, delivering reliable engineering and technology solutions.",

  "Who are your target clients?":
    "We serve residential customers, commercial businesses, manufacturing industries, government institutions, construction companies, transport and logistics companies, and energy sector organizations.",

  "What kind of support do you offer?":
    "We provide reliable project delivery, technical support, and maintenance services across our security, energy, infrastructure, and software solutions.",

  "Do you provide residential services as well?":
    "Yes. NEXGEN DYN offers residential solutions including CCTV security, solar PV, plumbing, water heaters, and electrical installation.",
};

 const WhatsAppChatButton: React.FC = () => {
   const [chatActive, setChatActive] = useState(false);
   const [conversation, setConversation] = useState<
     { question: string; answer: string }[]
   >([]);
   const [remainingQuestions, setRemainingQuestions] = useState(
     Object.keys(faq).slice(0, 5)
   );

   const chatContentRef = useRef<HTMLDivElement>(null);

   const handleSelectQuestion = (question: string) => {
     const answer = faq[question];
     setConversation((prevConversation) => [
       ...prevConversation,
       { question, answer },
     ]);
   };

   const handleSelectAnotherQuestion = () => {
     // Reset the conversation state
     setConversation([]);
     setRemainingQuestions(Object.keys(faq).slice(0, 5));
   };

   const handleCloseChat = () => {
     setChatActive(false);
     setConversation([]);
     setRemainingQuestions(Object.keys(faq).slice(0, 5));
   };

   useEffect(() => {
     if (chatContentRef.current) {
       chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
     }
   }, [conversation]);

   return (
     <div className="fixed">
       <div className="">
      <style>
        {/* {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .bounce {
            animation: bounce 1.5s infinite;
          }
        `} */}
      </style>
      <button
         onClick={() => setChatActive(!chatActive)}
         className="fixed bounce bottom-16 right-4 bg-brand-yellow text-white p-2 rounded-full z-50 shadow-lg hover:bg-brand-navy hover:text-brand-navy transition-colors duration-300"
         style={{ zIndex: 9999 }}
       >
         {/* <FaWhatsapp className="sm:w-6 sm:h-6  w-24 h-24" /> */}
         <img
                   src={icon1}  
                   alt="Profile"
                   className="w-10 h-10 rounded-full"
                 />
        
       </button>
    </div>
       
       {/* Chat Window */}
       {chatActive && (
         <div
           className="fixed bottom-2 right-4 sm:w-96 p-4 bg-white bg-opacity-95 border border-gray-300 rounded-lg max-h-[70vh] overflow-y-96 shadow-md z-50"
           ref={chatContentRef}
           style={{ zIndex: 9999 }}
         >
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="flex flex-col"
           >
             {/* Chat Header */}
             <div className="flex items-center justify-between mb-4 bg-gray-100 p-2 rounded-lg">
               <div className="flex items-center space-x-2">
                 <img
                   src={icon1}  
                   alt="Profile"
                   className="w-10 h-10 rounded-full"
                 />
                 <div>
                   <p className="font-semibold">Nexgen DYN</p>
                   <p className="text-xs text-brand-yellow">Online</p>
                 </div>
               </div>
               <button
                 onClick={handleCloseChat}
                 className="text-gray-700 font-bold hover:text-red-800 transition-colors duration-300"
               >
                 &#x2715;
               </button>
             </div>
             <div className="text-sm text-gray-700 mb-4">
               <div className="flex flex-col space-y-2">
                 <div className="self-start text-lg text-black rounded-lg">
                   <div className="not-italic text-sm pt-6 pb-2">
                     <motion.div
                       initial={{ opacity: 0, y: 50 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.8 }}
                       className="flex flex-col"
                     >
                       <div className="flex items-start space-x-2">
                         <img
                           src={icon1} // Replace with actual image
                           alt="Profile"
                           className="w-8 h-8 rounded-full"
                         />
                         <div className="bg-gray-100 p-2 rounded-lg">
                           <p>Need any help? Click here!</p>
                         </div>
                       </div>
                       <div className="flex items-start space-x-2 mt-2">
                         <img
                           src={icon1} // Replace with actual image
                           alt="Profile"
                           className="w-8 h-8 rounded-full"
                         />
                         <div className="bg-gray-100 p-2 rounded-lg">
                           <p>How can I help you?</p>
                         </div>
                       </div>
                     </motion.div>
                   </div>
                 </div>

                 {/* Conversation Flow */}
                 {conversation.map((entry, index) => (
                   <div key={index}>
                     {/* User Question */}
                     <div className="flex justify-end space-x-2">
                       <motion.div
                         initial={{ opacity: 0, y: 50 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8 }}
                         className="flex flex-col"
                       >
                         <p className="bg-gray-300 text-gray-600 text-sm p-2 rounded-md">
                           {entry.question}
                         </p>
                         <p className="text-xs text-gray-400 text-right mt-1">
                           12:00 PM
                         </p>
                       </motion.div>
                     </div>

                     {/* Assistant Answer */}
                     <div className="flex space-x-2">
                       <img
                         src={Avatar}
                         alt="Profile"
                         className="w-8 h-8 rounded-full"
                       />
                       <motion.div
                         initial={{ opacity: 0, y: 50 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8 }}
                         className="flex flex-col"
                       >
                         <p className="bg-customTeal-950 shadow-sm rounded-md text-white text-sm p-2">
                           {entry.answer}
                         </p>
                         <p className="text-xs text-gray-400 mt-1">12:00 PM</p>
                       </motion.div>
                     </div>
                   </div>
                 ))}

                 {/* Ask Another Question Button */}
                 {conversation.length > 0 &&
                   
                     <button
                       onClick={handleSelectAnotherQuestion}
                       className="text-customTeal-950 text-sm mt-4 hover:underline transition-colors duration-300"
                     >
                       Ask another question
                     </button>
                   }

                 {/* Initial Questions */}
                 {!conversation.length && remainingQuestions.length > 0 && (
                   <ul className="list-none space-y-2 text-black">
                     {remainingQuestions.map((q, index) => (
                       <li key={index}>
                         <button
                           onClick={() => handleSelectQuestion(q)}
                           className="text-customTeal-950 hover:underline"
                         >
                           {q}
                         </button>
                       </li>
                     ))}
                   </ul>
                 )}
               </div>
             </div>
             {/* Input Section */}
             <div className="self-start text-black rounded-lg mt-4">
               <p className="mt-4 text-gray-600 text-xs">
                 Alternatively, send us a message directly on WhatsApp.
               </p>
               <button className="mt-2 flex items-center bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition-colors duration-300">
                 <a
                   href="https://wa.me/+250789319155"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex flex-row justify-center items-center"
                 >
                   <FaWhatsapp className="mr-2" />
                   <p>contact us on WhatsApp</p>
                 </a>
               </button>
             </div>
           </motion.div>
         </div>
       )}
     </div>
   );
 };
 export default WhatsAppChatButton;