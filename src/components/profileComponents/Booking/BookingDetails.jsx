// components/BookingDetails.js

import Image from "next/image";

const BookingDetails = ({ booking }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold">{booking.title}</h2>
      <Image
        src={booking.image}
        alt={booking.title}
        width={100}
        height={100}
        className="w-full h-64 object-cover mt-4"
      />
      <p className="text-lg mt-2">
        Pickup: {booking.fromDate} - {booking.toDate}
      </p>
      <p className="text-lg mt-2">Location: {booking.destination}</p>
      <p className="text-xl font-semibold mt-4">
        Total: {booking.totalFare} FCFA
      </p>
      {/* More details and buttons */}
    </div>
  );
};

export default BookingDetails;
