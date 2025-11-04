// /app/terms-and-conditions/page.jsx
"use client";

import Image from "next/image";

export default function TermsAndConditions() {
  return (
    <section className="flex flex-col gap-4 max-w-6xl mx-auto px-6 sm:px-8 py-12 lg:py-16 text-sm sm:text-base">
      {/* Document content */}
      <div>
        <h2 className="font-semibold">1. Introduction</h2>
        <p className="text-[#737373]">
          Welcome to Go Connect. By using our platform, you agree to these Terms
          & Conditions. Please read carefully.
        </p>
      </div>

      <div>
        <h2 className="font-semibold">2. Eligibility</h2>
        <ul className="text-[#737373] list-disc ml-7">
          <li>You must be at least 18 years old.</li>
          <li>
            You must hold a valid Nigerian driver’s license to use our services.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold">3. Account Registration</h2>
        <p className="text-[#737373]">
          Users must provide accurate information during account creation. You
          are responsible for keeping your account login details secure.
        </p>
      </div>

      <div>
        <h2 className="font-semibold">4. Booking & Payments</h2>
        <ul className="text-[#737373] list-disc ml-7">
          <li>Bookings are subject to vehicle availability.</li>
          <li>
            Payment must be made through Go Connect before vehicle access.
          </li>
          <li>Prices, taxes, and fees are shown during booking.</li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold">5. Vehicle Use</h2>
        <ul className="text-[#737373] list-disc ml-7">
          <li>All users must follow Nigerian traffic laws.</li>
          <li>Vehicles may only be used legally and safely.</li>
          <li>
            Renters are responsible for any damage or fines during the rental
            period.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold">6. Owner Responsibilities</h2>
        <ul className="text-[#737373] list-disc ml-7">
          <li>
            Vehicle owners must ensure cars are insured, safe, and roadworthy.
          </li>
          <li>
            Owners must provide accurate information about their vehicles.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold">7. Cancellations & Refunds</h2>
        <ul className="text-[#737373] list-disc ml-7">
          <li>Cancellation and refund policies depend on the booking.</li>
          <li>
            Any eligible refunds will follow the policy displayed at booking.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold">8. Liability</h2>
        <ul className="text-[#737373] list-disc ml-7">
          <li>
            Go Connect is a platform connecting car owners and renters and is
            not responsible for accidents, damage, or losses during rentals.
          </li>
          <li>
            Users agree to indemnify Go Connect from claims arising from vehicle
            use.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="font-semibold">9. Termination</h2>
        <p className="text-[#737373]">
          Accounts may be suspended or terminated for violating these Terms or
          engaging in illegal activity.
        </p>
      </div>

      <div>
        <h2 className="font-semibold">10. Modifications</h2>
        <p className="text-[#737373]">
          Go Connect may update these Terms at any time. Continued use of the
          platform constitutes acceptance of updates.
        </p>
      </div>

      <div>
        <h2 className="font-semibold">11. Governing Law</h2>
        <p className="text-[#737373]">
          These Terms are governed by the laws of Nigeria. Any disputes will be
          resolved under Nigerian jurisdiction.
        </p>
      </div>
    </section>
  );
}
