import Image from "next/image";
import {
  FaCarSide,
  FaStar,
  FaRegCalendar,
  FaRegClock,
  FaRegUser,
  FaPhoneAlt,
} from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { MdOutlineEmail, MdOutlineShield } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdCard } from "react-icons/io";
import { Button, Divider } from "@mui/material";

const BookingDetails = ({ booking, closeBookingDetails }) => {
  return (
    <div className="bg-white rounded-lg flex flex-col gap-5">
      {/* Vehicle Info */}
      <div className="border border-[#E5E7EB] rounded-lg py-5 px-4">
        <div className="flex items-center gap-3">
          <FaCarSide className="text-[#00AEA8] sm:text-lg" />
          <p className="text-[#191919] font-bold text-sm sm:text-base">
            Vehicle Information
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-8 mt-4">
          <Image
            src={booking.image}
            alt={booking.title}
            width={100}
            height={100}
            className="sm:w-64 sm:h-48 object-cover mt-4 rounded-lg"
          />
          <div className="flex flex-col gap-2 w-full sm:w-auto">
            <p className="text-[#191919] sm:text-2xl font-bold text-center sm:text-start">
              {booking.title}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
              <div className="flex items-center gap-2 text-sm">
                <FaStar className="text-[#FDC700]" />
                <p>{booking.rating}</p>
                <p className="text-[#737373]">({booking.trips} Trips)</p>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm border border-[#E5E7EB] rounded-lg px-2">
                <FaCarSide />
                <span>{booking.driveType}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#737373]">
              <LuMapPin />
              <p>{booking.location}</p>
              <GoDotFill />
              <p>{booking.distance}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 mt-4">
              <div>
                <p className="text-[#737373] text-xs sm:text-sm">
                  Vehicle Type
                </p>
                <p className="text-[#191919] font-bold text-sm sm:text-base">
                  {booking.vehicleType}
                </p>
              </div>
              <div>
                <p className="text-[#737373] text-xs sm:text-sm">Seats</p>
                <p className="text-[#191919] font-bold text-sm sm:text-base">
                  {booking.seats}
                </p>
              </div>
              <div>
                <p className="text-[#737373] text-xs sm:text-sm">
                  Transmission
                </p>
                <p className="text-[#191919] font-bold text-sm sm:text-base">
                  {booking.transmission}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trip Details */}
      <div className="border border-[#E5E7EB] rounded-lg py-5 px-4">
        <div className="flex items-center gap-3">
          <FaRegCalendar className="text-[#00AEA8] sm:text-lg" />
          <p className="text-[#191919] font-bold text-sm sm:text-base">
            Trip Details
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg p-4">
            <div className="flex items-center gap-2 text-xs lg:text-sm text-[#737373]">
              <FaRegClock />
              <p>Pick Up</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[#191919] font-bold text-sm lg:text-base">
                {booking.fromDate}
              </p>
              <p className="text-[#737373] text-sm lg:text-base">
                {booking.fromTime}
              </p>
            </div>
          </div>
          <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg p-4">
            <div className="flex items-center gap-2 text-xs lg:text-sm text-[#737373]">
              <FaRegClock />
              <p>Drop Off</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[#191919] font-bold text-sm lg:text-base">
                {booking.toDate}
              </p>
              <p className="text-[#737373] text-sm lg:text-base">
                {booking.endTime}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-[#F2FBFA] border border-[#00AEA83D] rounded-lg p-4">
            <LuMapPin className="text-[#00AEA8] text-lg" />
            <div className="text-xs lg:text-sm text-[#737373]">
              <p className="mb-1">Pick Up Location</p>
              <p className="text-[#191919] font-bold ">
                {booking.pickupLocation}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-[#F2FBFA] border border-[#00AEA83D] rounded-lg p-4">
            <LuMapPin className="text-[#00AEA8] text-lg" />
            <div className="text-xs lg:text-sm text-[#737373]">
              <p className="mb-1">Drop Off Location</p>
              <p className="text-[#191919] font-bold">
                {booking.dropoffLocation}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Host Info */}
      <div className="border border-[#E5E7EB] rounded-lg py-5 px-4">
        <div className="flex items-center gap-3">
          <FaRegUser className="text-[#00AEA8] sm:text-lg" />
          <p className="text-[#191919] font-bold text-sm sm:text-base">
            Host Information
          </p>
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg p-2 sm:p-4">
            <p className="bg-[#00AEA8] text-white rounded-full p-1 sm:p-4">
              <FaRegUser className=" text-sm lg:text-xl" />
            </p>
            <div className="text-sm text-[#737373]">
              <p className="mb-1 text-[#191919] lg:text-lg font-bold">
                {booking.hostName}
              </p>
              <div>
                <div className="flex items-center gap-1 sm:gap-3 mb-1 text-xs lg:text-base">
                  <FaPhoneAlt className="text-[#00AEA8]" />
                  <p className="text-[#737373]">{booking.hostPhone}</p>
                </div>
                <div className="flex items-center gap-1 sm:gap-3 text-xs lg:text-base">
                  <MdOutlineEmail className="text-[#00AEA8]" />
                  <p className="text-[#737373] ">{booking.hostEmail}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Details */}
      <div className="border border-[#E5E7EB] rounded-lg py-5 px-4 ">
        <div className="flex items-center gap-3">
          <IoMdCard className="text-[#00AEA8] sm:text-lg" />
          <p className="text-[#191919] font-bold text-sm sm:text-base">
            Transaction Details
          </p>
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg p-4">
            <div className="text-sm text-[#737373] w-full">
              <div className="space-y-4 mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-56">
                  <div>
                    <p className="text-[#737373] text-xs sm:text-sm mb-1">
                      Status:
                    </p>
                    <span className="bg-[#DCFCE7] border border-[#B9F8CF] text-[#008236] text-xs px-2 py-1 rounded-lg">
                      Paid
                    </span>
                  </div>
                  <div>
                    <p className="text-[#737373] text-xs sm:text-sm mb-1">
                      Total Amount:
                    </p>
                    <p className="text-[#00AEA8] sm:text-lg font-semibold">
                      {booking.totalFare} {booking.currency}
                    </p>
                  </div>
                </div>
                <div className="grid  grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-56">
                  <div>
                    <p className="text-[#737373] text-xs sm:text-sm mb-1">
                      Payment Method:
                    </p>
                    <p className="text-[#191919] font-bold text-xs sm:text-base">
                      {booking.paymentMethod}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#737373] text-xs sm:text-sm mb-1">
                      Date:
                    </p>
                    <p className="text-[#191919] font-bold text-xs sm:text-base">
                      {booking.transactionDate}
                    </p>
                  </div>
                </div>
                <Divider sx={{ py: "5px" }} />
                <div>
                  <p className="text-[#737373] text-sm mb-1">Transaction ID:</p>
                  <p className="text-[#191919] font-bold">
                    {booking.transactionId}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="border border-[#E5E7EB] rounded-lg py-5 px-2 sm:px-4">
        <div className="flex items-center gap-3">
          <IoMdCard className="text-[#00AEA8] sm:text-lg" />
          <p className="text-[#191919] font-bold text-sm sm:text-base">
            Price Breakdown
          </p>
        </div>
        <div className="bg-[#f2fbfa] border border-[#00AEA833] p-1 sm:p-4 rounded-lg my-3">
          <div className="flex items-center justify-between">
            <p className="text-[#737373] text-xs sm:text-base">
              {booking.dailyRate} {booking.currency}/Day *{" "}
              {booking.durationDays} days
            </p>
            <p className="text-xs sm:text-lg text-[#191919] font-bold">
              {booking.priceBreakdown.dailyRateTotal}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[#737373] text-xs sm:text-base">Service Fee</p>
            <p className="text-xs sm:text-lg text-[#191919] font-bold">
              {booking.priceBreakdown.serviceFee}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[#737373] text-xs sm:text-base">Taxes</p>
            <p className="text-xs sm:text-lg text-[#191919] font-bold ">
              {booking.priceBreakdown.taxes}
            </p>
          </div>
          <Divider sx={{ my: "10px" }} />
          <div className="flex items-center justify-between">
            <p className="text-[#191919] font-bold text-sm sm:text-lg">
              Total Amount
            </p>
            <p className="text-lg sm:text-xl text-[#00AEA8] font-bold">
              {booking.priceBreakdown.totalAmount}
            </p>
          </div>
        </div>
      </div>

      {/* Cancellation */}
      <div className="border border-[#E5E7EB] rounded-lg py-5 px-4">
        <div className="flex items-center gap-3">
          <MdOutlineShield className="text-[#00AEA8] sm:text-lg" />
          <p className="text-[#191919] font-bold text-sm sm:text-base">
            Cancellation Policy
          </p>
        </div>
        <div className="flex items-center gap-2 bg-[#EFF6FF] border border-[#DBEAFE] p-2 sm:p-4 rounded-lg my-3 text-sm sm:text-base">
          <BsInfoCircle className="text-[#155DFC]" />
          <p className="text-[#191919]">{booking.cancellationPolicy}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 w-full justify-between">
        <Button
          sx={{
            textTransform: "none",
            display: "flex",
            justifyItems: "center",
            textAlign: "center",
            alignItems: "center",
            gap: "8px",
            width: "100%",
            bgcolor: "#00AEA8",
            color: "white",
            fontSize: {
              xs: "10px", // Small screens
              sm: "12px", // Small to medium screens
              md: "12px", // Medium screens
            },
            border: "1px solid #00AEA8",
            ":hover": {
              bgcolor: "white",
              color: "#00AEA8",
            },
          }}
        >
          <FiMessageSquare />
          Contact Host
        </Button>
        <Button
          onClick={closeBookingDetails}
          sx={{
            width: "100%",
            textTransform: "none",
            bgcolor: "#fff",
            color: "#EB1700",
            fontSize: {
              xs: "10px", // Small screens
              sm: "12px", // Small to medium screens
              md: "12px", // Medium screens
            },
            border: "1px solid #FFA2A2",
            ":hover": {
              bgcolor: "#EB1700",
              color: "white",
            },
          }}
        >
          Cancel Booking
        </Button>
      </div>
    </div>
  );
};

export default BookingDetails;
