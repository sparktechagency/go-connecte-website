import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { GoInfo } from "react-icons/go";

import { Button } from "@mui/material";
import { toast } from "sonner";

export default function Verifications() {
  const [verifications, setVerifications] = useState({
    email: {
      verified: true,
      value: "john.doe@example.com",
      label: "Email",
    },
    phone: {
      verified: true,
      value: "+1 (555) 123-4567",
      label: "Phone",
    },
    license: {
      verified: false,
      value: "Not verified yet",
      label: "Driver's License",
    },
  });

  const handleVerify = (type) => {
    // Simulate verification process
    toast.info(`Initiating ${verifications[type].label} verification...`);

    // Here you would typically open a modal or redirect to verification flow
    // For demo purposes, we'll simulate successful verification after 2 seconds
    setTimeout(() => {
      setVerifications((prev) => ({
        ...prev,
        [type]: {
          ...prev[type],
          verified: true,
          value:
            type === "license"
              ? "DL-123456789"
              : type === "identity"
              ? "ID-987654321"
              : prev[type].value,
        },
      }));
      toast.success(`${verifications[type].label} verified successfully!`);
    }, 2000);
  };

  const VerificationCard = ({ type, data }) => {
    const { verified, value, label } = data;

    return (
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 border border-[#E5E7EB] p-3 sm:p-4 rounded-lg hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
          <div
            className={`${
              verified ? "bg-[#DCFCE7]" : "bg-[#FEE2E2]"
            } p-2 sm:p-2.5 md:p-3 rounded-full shrink-0`}
          >
            {verified ? (
              <FaCheck className="text-base sm:text-lg md:text-xl text-[#00A63E]" />
            ) : (
              <MdClose className="text-base sm:text-lg md:text-xl text-[#DC2626]" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-[#191919] truncate">
              {label}
            </p>
            <p
              className={`${
                verified ? "text-[#737373]" : "text-[#DC2626]"
              } text-xs sm:text-sm truncate`}
            >
              {value}
            </p>
          </div>
        </div>

        {!verified && (
          <Button
            onClick={() => handleVerify(type)}
            sx={{
              textTransform: "none",
              bgcolor: "#00AEA8",
              color: "white",
              width: { xs: "100%", sm: "auto" },
              minWidth: { sm: "100px", md: "120px" },
              height: { xs: "38px", sm: "40px" },
              fontSize: { xs: "0.8125rem", sm: "0.875rem" },
              fontWeight: 500,
              borderRadius: "6px",
              flexShrink: 0,
              ":hover": {
                bgcolor: "#009991",
              },
            }}
          >
            Verify Now
          </Button>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white px-2 sm:px-4 md:px-6 py-4 sm:py-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-4 sm:mb-6">
        <div>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#191919]">
            Verifications
          </p>
          <p className="text-xs sm:text-sm text-[#737373] mt-0.5 sm:mt-1">
            Verify your information to build trust and unlock features
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4">
        {Object.entries(verifications).map(([key, data]) => (
          <VerificationCard key={key} type={key} data={data} />
        ))}
      </div>

      {/* Info Box */}
      {/* <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-[#F0F9FF] border border-[#BAE6FD] rounded-lg">
        <div className="flex gap-2 sm:gap-3">
          <div className="shrink-0">
            <GoInfo />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-semibold text-[#0C4A6E] mb-1">
              Why verify your account?
            </p>
            <p className="text-xs sm:text-sm text-[#075985] leading-relaxed">
              Verified accounts have higher credibility, access to premium
              features, and are prioritized in search results. Your information
              is encrypted and secure.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
