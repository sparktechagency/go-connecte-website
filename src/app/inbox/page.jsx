"use client";

import React, { useState, useRef, useEffect } from "react";
import { Avatar, Button, IconButton, TextField } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { MdMoreVert, MdMenu } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { TbMinusVertical } from "react-icons/tb";
import { ImAttachment } from "react-icons/im";
import { FaImage, FaRegCalendar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import Image from "next/image";
import { suggestedCarImage } from "../../../public/images/AllImages";

const conversations = [
  {
    id: 1,
    name: "Sarah Johnson",
    status: "The car will be ready for pickup at 10 AM",
    car: "Tesla Model 3",
    tag: "Upcoming",
    time: "2 min ago",
    initials: "SJ",
    active: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    status: "Thanks I will be there on time. Looking forward",
    car: "BMW 4 Series",
    tag: "Upcoming",
    time: "1 hour ago",
    initials: "MC",
    active: false,
  },
  {
    id: 3,
    name: "Emma Davis",
    status: "Great The car was returned in perfect",
    car: "Jeep Wrangler",
    tag: "Completed",
    time: "2 days ago",
    initials: "ED",
    active: false,
  },
  {
    id: 4,
    name: "Lisa Anderson",
    status: "Is it possible to extend the rental by one",
    car: "Tesla Model 3",
    tag: "Active",
    time: "3 days ago",
    initials: "LA",
    active: false,
  },
];

const conversationMessages = {
  1: [
    {
      id: 1,
      fromHost: false,
      text: "Hi Sarah I am excited about renting your Tesla. I have a question about the charging situation.",
      time: "10:30 AM",
    },
    {
      id: 2,
      fromHost: true,
      text: "Hello Great to hear from you. The car comes fully charged, and I will provide you with a charging cable. There are also several Supercharger stations nearby.",
      time: "10:35 AM",
    },
    {
      id: 3,
      fromHost: false,
      text: "Perfect That is exactly what I needed to know. What time should I arrive for pickup",
      time: "10:37 AM",
    },
    {
      id: 4,
      fromHost: true,
      text: "The car will be ready for pickup at 10 AM sharp. I will meet you at the location.",
      time: "10:40 AM",
    },
    {
      id: 5,
      fromHost: true,
      text: "Please make sure to bring your driver license and the booking confirmation.",
      time: "10:41 AM",
    },
  ],
  2: [
    {
      id: 1,
      fromHost: false,
      text: "Hi Michael, I'm interested in renting your BMW 4 Series. Is it still available for next weekend?",
      time: "9:15 AM",
    },
    {
      id: 2,
      fromHost: true,
      text: "Yes, it's available! The car is in excellent condition and comes with full insurance coverage.",
      time: "9:20 AM",
    },
    {
      id: 3,
      fromHost: false,
      text: "Great! What's included in the rental?",
      time: "9:22 AM",
    },
    {
      id: 4,
      fromHost: true,
      text: "You'll get unlimited mileage, full tank of gas, and I can deliver it to your location for free.",
      time: "9:25 AM",
    },
    {
      id: 5,
      fromHost: false,
      text: "Thanks I will be there on time. Looking forward to it!",
      time: "9:30 AM",
    },
  ],
  3: [
    {
      id: 1,
      fromHost: false,
      text: "Hi Emma, just wanted to let you know I'm returning the Jeep now.",
      time: "3:00 PM",
    },
    {
      id: 2,
      fromHost: true,
      text: "Perfect timing! I'll meet you at the spot in 5 minutes.",
      time: "3:02 PM",
    },
    {
      id: 3,
      fromHost: false,
      text: "Great The car was returned in perfect condition. Thank you!",
      time: "3:15 PM",
    },
    {
      id: 4,
      fromHost: true,
      text: "Thank you so much! Hope you had a great trip. Feel free to rent again anytime!",
      time: "3:16 PM",
    },
  ],
  4: [
    {
      id: 1,
      fromHost: false,
      text: "Hi Lisa, I have the Tesla for 3 days starting tomorrow. Quick question about parking.",
      time: "2:00 PM",
    },
    {
      id: 2,
      fromHost: true,
      text: "Sure! What would you like to know?",
      time: "2:05 PM",
    },
    {
      id: 3,
      fromHost: false,
      text: "Is it possible to extend the rental by one more day? I'm having such a great experience.",
      time: "2:10 PM",
    },
    {
      id: 4,
      fromHost: true,
      text: "Let me check my calendar and get back to you shortly!",
      time: "2:12 PM",
    },
  ],
};

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(
    conversations[0]
  );
  const [allMessages, setAllMessages] = useState(conversationMessages);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showBookingDetails, setShowBookingDetails] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const messagesEndRef = useRef(null);

  const currentMessages = allMessages[selectedConversation.id] || [];

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // useEffect(() => {
  //   scrollToBottom();
  // }, [currentMessages, selectedConversation]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      const updatedMessages = {
        ...allMessages,
        [selectedConversation.id]: [
          ...currentMessages,
          {
            id: currentMessages.length + 1,
            fromHost: false,
            text: newMessage,
            time: timeString,
          },
        ],
      };

      setAllMessages(updatedMessages);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.car.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleConversationSelect = (conv) => {
    setSelectedConversation(conv);
    setShowSidebar(false);
  };

  return (
    <div className="h-[90vh] bg-[#f5f5f7] text-gray-900 flex flex-col">
      {/* Header */}
      <div className="flex items-center p-3 bg-white border-b border-[#E5E7EB] shrink-0">
        <IconButton
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
          className="sm:hidden mr-2"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <MdMenu />
        </IconButton>
        <TbMinusVertical className="text-[#D1D5DC] text-xl" />
        <p className="text-[#191919] text-xl md:text-2xl font-bold">Messages</p>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar - Mobile drawer + Desktop fixed */}
        <div
          className={`
            fixed md:relative inset-y-0 left-0 z-40 
            w-80 md:w-80 lg:w-96
            border-r border-gray-200 bg-white flex flex-col
            transition-transform duration-300 ease-in-out
            ${
              showSidebar
                ? "translate-x-0"
                : "-translate-x-full md:translate-x-0"
            }
          `}
          style={{ top: "64px" }}
        >
          {/* Search input */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100">
              <FaSearch className="text-gray-500" fontSize="small" />
              <input
                className="bg-transparent text-sm outline-none w-full"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Conversation list */}
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => handleConversationSelect(conv)}
                className={
                  "flex items-start gap-3 px-4 py-3 cursor-pointer border-b border-gray-100 " +
                  (selectedConversation.id === conv.id
                    ? "bg-[#00AEA80D]"
                    : "bg-white hover:bg-gray-50")
                }
              >
                <Avatar
                  sx={{
                    width: 36,
                    height: 36,
                    fontSize: 14,
                    color: "white",
                    bgcolor:
                      selectedConversation.id === conv.id
                        ? "#00a8ff"
                        : "#00AEA8",
                  }}
                >
                  {conv.initials}
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium truncate">{conv.name}</p>
                    <p className="text-[11px] text-gray-400 ml-2 shrink-0">
                      {conv.time}
                    </p>
                  </div>

                  <p className="text-xs text-gray-500 mt-0.5 truncate">
                    {conv.status}
                  </p>

                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-[11px] text-gray-400 truncate">
                      {conv.car}
                    </p>
                    <span
                      className={
                        "px-2 py-0.5 rounded-full text-[10px] font-medium shrink-0 " +
                        (conv.tag === "Upcoming"
                          ? "bg-[#DBEAFE] text-blue-600"
                          : conv.tag === "Completed"
                          ? "bg-[#F3F4F6] text-[#364153]"
                          : "bg-[#DCFCE7] text-[#008236]")
                      }
                    >
                      {conv.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Overlay for mobile */}
        {showSidebar && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setShowSidebar(false)}
          />
        )}

        {/* Right chat area */}
        <div className="flex-1 flex flex-col min-w-0 min-h-0">
          {/* Chat Header */}
          <div className="h-16 px-3 md:px-6 flex items-center justify-between bg-white border-b border-gray-200 shrink-0">
            <div className="flex items-center gap-2 md:gap-3 min-w-0">
              <Avatar
                sx={{
                  width: { xs: 36, md: 40 },
                  height: { xs: 36, md: 40 },
                  bgcolor: "#00AEA8",
                  color: "white",
                }}
              >
                {selectedConversation.initials}
              </Avatar>
              <div className="min-w-0">
                <p className="text-sm font-medium truncate">
                  {selectedConversation.name}
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-[#00A63E]">Online</p>
                  <p className="text-xs text-[#737373]">·</p>
                  <p className="text-xs text-[#737373]">Host</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 md:gap-2 shrink-0">
              <Button
                onClick={() => setShowBookingDetails(!showBookingDetails)}
                sx={{
                  textTransform: "none",
                  px: { xs: "8px", md: "12px" },
                  py: "5px",
                  fontSize: { xs: "11px", md: "12px" },
                  bgcolor: "#00AEA81A",
                  border: "1px solid #00AEA8",
                  color: "#0A0A0A",
                  borderRadius: "20px",
                  minWidth: "auto",
                }}
              >
                <span className="hidden sm:inline">Booking Details</span>
                <span className="sm:hidden">Details</span>
              </Button>
              <IconButton size="small">
                <MdMoreVert fontSize="small" />
              </IconButton>
            </div>
          </div>

          <div className="flex flex-1 min-h-0">
            {/* Messages area */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Messages list */}
              <div className="flex-1 overflow-y-auto px-3 md:px-6 py-4 space-y-4">
                {currentMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={
                      "flex " + (msg.fromHost ? "justify-start" : "justify-end")
                    }
                  >
                    <div className="max-w-[85%] sm:max-w-md md:max-w-lg lg:max-w-xl">
                      <div
                        className={
                          "rounded-2xl px-3 md:px-4 py-2 md:py-3 text-sm leading-relaxed " +
                          (msg.fromHost
                            ? "bg-white text-gray-800 rounded-tl-none"
                            : "bg-[#00AEA8] text-white rounded-tr-none")
                        }
                      >
                        <p className="text-xs sm:text-sm">{msg.text}</p>
                      </div>
                      <p className="text-[10px] text-gray-400 mt-1 text-right">
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input area */}
              <div className="border-t border-gray-200 bg-white px-3 md:px-4 py-3 shrink-0">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-1 md:gap-2">
                    <IconButton size="small">
                      <ImAttachment className="text-lg" />
                    </IconButton>
                    <IconButton size="small">
                      <FaImage className="text-lg" />
                    </IconButton>
                  </div>
                  <TextField
                    fullWidth
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    InputProps={{
                      className: "rounded-full bg-gray-50",
                    }}
                  />
                  <IconButton
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    sx={{
                      bgcolor: "#00AEA8",
                      color: "white",
                      borderRadius: "10px",
                      "&:hover": {
                        bgcolor: "#0090dd",
                      },
                      "&:disabled": {
                        opacity: 0.8,
                        bgcolor: "#00AEA844",
                      },
                    }}
                  >
                    <IoIosSend fontSize="medium" />
                  </IconButton>
                </div>
              </div>
            </div>

            {/* Booking Details Sidebar */}
            {showBookingDetails && (
              <div className="hidden lg:flex w-72 xl:w-88 bg-white border-l border-gray-200 flex-col shrink-0">
                {/* Booking Details Header */}
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Booking Details
                  </h2>
                  <IconButton
                    onClick={() => setShowBookingDetails(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <IoClose />
                  </IconButton>
                </div>

                {/* Car Image */}
                <div className="p-4">
                  <div className="flex flex-col w-full h-40 bg-gray-200 rounded-lg">
                    <Image
                      src={suggestedCarImage.suggestedImage}
                      alt="Tesla Model 3"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <span className="px-2 py-1 my-1 w-fit bg-[#DBEAFE] text-blue-600 text-xs font-medium rounded-full">
                      Upcoming
                    </span>
                  </div>
                </div>

                {/* Car Details */}
                <div className="px-4 pb-4 mt-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {selectedConversation.car}
                  </h3>
                  <div className="space-y-3 mt-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Booking ID</p>
                      <p className="text-sm font-medium text-gray-900">
                        BA-2024-001
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                        <FaRegCalendar />
                        Trip Dates
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        Nov 20-23, 2024
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Host</p>
                      <p className="text-sm font-medium text-gray-900">
                        {selectedConversation.name}
                      </p>
                    </div>
                  </div>
                </div>

                {/* View Full Booking Button */}
                <div className="p-4">
                  <Button
                    sx={{
                      textTransform: "none",
                      width: "100%",
                      paddingY: "8px",
                      backgroundColor: "#00AEA8",
                      color: "white",
                      fontWeight: "500",
                      borderRadius: "8px",
                      fontSize: "14px",
                      "&:hover": {
                        backgroundColor: "#009990",
                      },
                      transition: "background-color 0.3s",
                    }}
                  >
                    View Full Booking
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Booking Details Modal */}
          {showBookingDetails && (
            <div className="lg:hidden fixed inset-0 z-50 flex items-end">
              <div className="bg-white w-full sm:w-1/2 lg:w-full max-h-[80vh] rounded-t-2xl overflow-y-auto">
                {/* Booking Details Header */}
                <div className="p-2 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
                  <h2 className="text-sm font-semibold text-gray-900">
                    Booking Details
                  </h2>
                  <IconButton
                    onClick={() => setShowBookingDetails(false)}
                    sx={{
                      fontSize: "14px",
                      color: "#0A0A0A",
                    }}
                  >
                    <IoClose />
                  </IconButton>
                </div>

                {/* Car Image */}
                <div className="p-4 mb-4">
                  <div className="flex flex-col w-full sm:w-1/2 h-36 bg-gray-200 rounded-lg">
                    <Image
                      src={suggestedCarImage.suggestedImage}
                      alt="Tesla Model 3"
                      className="w-full h-full object-fit rounded-lg"
                    />
                    <span className="w-fit px-2 py-1 my-1 bg-[#DBEAFE] text-[#1447E6] text-xs font-medium rounded-full">
                      Upcoming
                    </span>
                  </div>
                </div>

                {/* Car Details */}
                <div className="px-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {selectedConversation.car}
                  </h3>
                  <div className="space-y-3 mt-2">
                    <div>
                      <p className="text-xs text-gray-500">Booking ID</p>
                      <p className="text-sm font-medium text-gray-900">
                        BA-2024-001
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <FaRegCalendar />
                        Trip Dates
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        Nov 20-23, 2024
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Host</p>
                      <p className="text-sm font-medium text-gray-900">
                        {selectedConversation.name}
                      </p>
                    </div>
                  </div>
                </div>

                {/* View Full Booking Button */}
                <div className="p-4">
                  <Button
                    sx={{
                      textTransform: "none",
                      width: "100%",
                      paddingY: "8px",
                      backgroundColor: "#00AEA8",
                      color: "white",
                      fontWeight: "500",
                      borderRadius: "8px",
                      fontSize: "12px",
                      "&:hover": {
                        backgroundColor: "#009990",
                      },
                      transition: "background-color 0.3s",
                    }}
                  >
                    View Full Booking
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
