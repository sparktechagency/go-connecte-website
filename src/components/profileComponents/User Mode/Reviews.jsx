import React, { useState } from "react";
import {
  Tab,
  Tabs,
  Card,
  CardContent,
  Button,
  TextField,
  Modal,
  Box,
} from "@mui/material";
import { FaRegMessage } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const reviewsGiven = [
  {
    reviewer: "John Doe",
    vehicle: "Tesla Model 3",
    date: "Nov 5, 2024",
    rating: 5,
    review:
      "John was an excellent renter! Returned the car on time and in perfect condition. Very respectful and easy to communicate with. Highly recommend!",
  },
  {
    reviewer: "Jane Smith",
    vehicle: "BMW 4 Series",
    date: "Oct 12, 2024",
    rating: 4,
    review:
      "Great renter! The car was returned in good condition, but there was a slight delay in returning. Would rent to again.",
  },
  {
    reviewer: "Mark Johnson",
    vehicle: "Audi Q7",
    date: "Sep 19, 2024",
    rating: 5,
    review:
      "Excellent renter! Took great care of the vehicle and communicated well. Highly recommended.",
  },
];

const reviewsReceived = [
  {
    reviewer: "Sarah Johnson",
    vehicle: "Tesla Model 3",
    date: "Nov 5, 2024",
    rating: 5,
    review:
      "Great renter! John took excellent care of the Jeep and followed all the guidelines. Would definitely rent to him again.",
    reply:
      "Thanks Emma! Your Jeep was perfect for the trails. Looking forward to renting from you again!",
  },
  {
    reviewer: "Emma Davis",
    vehicle: "Jeep Wrangler",
    date: "Nov 5, 2024",
    rating: 4,
    review:
      "Great renter! John took excellent care of the car. Everything was smooth with the booking process.",
    reply:
      "Thanks for the feedback! I’m glad the car worked well for you. Looking forward to more bookings!",
  },
  {
    reviewer: "Alice Williams",
    vehicle: "Ford Mustang",
    date: "Oct 22, 2024",
    rating: 4,
    review:
      "Good renter, but there were some delays with communication. The car was returned clean and undamaged.",
    reply:
      "Thanks Alice! I’ll make sure to communicate better next time. Appreciate the feedback!",
  },
];

const Reviews = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [reply, setReply] = useState("");

  // Function to handle tab change
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Function to handle opening the modal
  const handleOpen = (review) => {
    setSelectedReview(review);
    setOpen(true);
  };

  // Function to handle closing of the modal
  const handleClose = () => {
    setOpen(false);
    setReply(""); // Clear the reply field when modal closes
  };

  // Function to handle reply change
  const handleReplyChange = (event) => {
    setReply(event.target.value);
  };

  // Function to handle sending the reply
  const handleSendReply = () => {
    alert(`Reply sent: ${reply}`);
    handleClose(); // Close the modal after reply is sent
  };

  return (
    <div className="py-5">
      <p className="text-2xl text-[#191919] font-semibold mb-2">Reviews</p>
      {/* Tabs for Reviews Given / Reviews Received */}
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="Reviews Tabs"
        indicatorColor="primary"
        textColor="primary"
        centered
        sx={{
          textTransform: "none",
          "& .MuiTabs-indicator": {
            backgroundColor: "#00AEA8",
          },
          "& .MuiTab-root": {
            color: "#737373",
          },
          "& .MuiTab-root.Mui-selected": {
            color: "#00AEA8",
          },
        }}
      >
        <Tab label={`Reviews Given (${reviewsGiven.length})`} />
        <Tab label={`Reviews Received (${reviewsReceived.length})`} />
      </Tabs>

      {/* Tab Content */}
      <div className="mt-4">
        {selectedTab === 0 ? (
          // Reviews Given
          <div>
            {reviewsGiven.map((review, index) => (
              <Card key={index} className="mb-4 p-4 rounded-lg shadow-lg">
                <CardContent>
                  <div className="flex items-center mb-2">
                    <div className="font-semibold text-lg">
                      {review.reviewer}
                    </div>
                    <div className="ml-auto text-sm text-gray-500">
                      {review.date}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{`About your rental: ${review.vehicle}`}</div>
                  <div className="mt-2 text-gray-700">{review.review}</div>
                  <div className="mt-2 flex items-center">
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button
                    onClick={() => handleOpen(review)}
                    sx={{
                      border: "1px solid #E5E7EB",
                      textTransform: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      color: "#191919",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    <FaRegMessage />
                    <p>Reply to review</p>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          // Reviews Received
          <div>
            {reviewsReceived.map((review, index) => (
              <Card key={index} className="mb-4 p-4 rounded-lg shadow-lg">
                <CardContent>
                  <div className="flex items-center mb-2">
                    <div className="font-semibold text-lg">
                      {review.reviewer}
                    </div>
                    <div className="ml-auto text-sm text-gray-500">
                      {review.date}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{`About your rental: ${review.vehicle}`}</div>
                  <div className="mt-2 text-gray-700">{review.review}</div>
                  <div className="mt-2 flex items-center">
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <TextField
                      label="Your reply"
                      multiline
                      rows={3}
                      fullWidth
                      variant="outlined"
                      value={review.reply}
                      disabled
                    />
                    <div className="mt-2 text-gray-500">
                      <strong>Your reply:</strong> {review.reply}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Modal for Replying */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "background.paper",
            borderRadius: "8px",
            boxShadow: 24,
            p: 3,
          }}
        >
          <h2 className="font-semibold text-lg mb-2">
            Reply to {selectedReview?.reviewer}&apos;s Review
          </h2>
          <div className="mt-2 text-gray-700 bg-[#F2F4F6] p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="bg-[#00AEA81A] p-1.5 rounded-full border border-[#00AEA8]">
                <FaUser className="text-xl text-[#00AEA8]" />
              </div>
              <div>
                <p className="text-[#191919] font-bold">
                  {selectedReview?.reviewer}
                </p>
                <div className="flex">
                  {[...Array(selectedReview?.rating)].map((_, i) => (
                    <span key={i} className="text-[#FDC700]">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-[#737373]">{selectedReview?.review}</p>
          </div>
          <TextField
            label="Your reply"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            value={reply}
            onChange={handleReplyChange} // Handle reply text change
            sx={{
              mt: "20px",
            }}
          />
          <div className="flex items-center gap-3 mt-4 justify-end">
            <Button
              onClick={handleClose}
              sx={{
                border: "1px solid #D1D5DC",
                textTransform: "none",
                color: "#0A0A0A",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSendReply}
              sx={{
                border: "1px solid #D1D5DC",
                textTransform: "none",
                color: "#fff",
                fontWeight: "600",
                fontSize: "14px",
                bgcolor: "#00AEA8",
              }}
            >
              Send Reply
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Reviews;
