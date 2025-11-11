import { Button, Divider, TextField } from "@mui/material";
import React, { useState } from "react";

export default function PersonalInformation() {
  // Step 1: Initialize state for user information
  const [userInfo, setUserInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    dob: "May 15, 1990",
    address: "742 Evergreen Terrace",
    city: "San Francisco",
    state: "California",
    zip: "94102",
    about:
      "Car enthusiast who loves road trips and exploring new places. Responsible driver with a clean driving record.",
    emergencyContactName: "Jane Doe",
    emergencyContactPhone: "+1 (555) 987-6543",
    relationship: "Spouse",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Step 2: Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Step 3: Toggle between default view and form view
  const handleSave = () => {
    setIsEditing(false);
  };

  const textFieldStyle = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#F3F3F5",
      },
      "&:hover fieldset": {
        borderColor: "#737373",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#737373",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#737373",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#737373",
    },
    "& .MuiInputBase-input": {
      color: "#000",
    },
    "& .MuiInputBase-input::placeholder": {
      color: "#B0B0B0",
    },
  };

  return (
    <div className="w-full bg-white ">
      <div className="flex items-center justify-between py-3">
        <p className="text-[#191919] text-base sm:text-xl md:text-2xl font-semibold">
          Personal Information
        </p>
        {!isEditing && (
          <Button
            sx={{
              textTransform: "none",
              bgcolor: "#00AEA8",
              color: "white",
              width: "150px",
              ":hover": {
                bgcolor: "white",
                color: "#00AEA8",
                border: "1px solid #00AEA8",
                fontWeight: "500",
              },
            }}
            onClick={() => setIsEditing(true)}
          >
            Edit Information
          </Button>
        )}
      </div>

      {/* Step 4: Conditional rendering */}
      {!isEditing ? (
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 w-full border border-[#D0D0D0] mt-5 rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
            <div className="min-w-0">
              <p className="text-[#737373] text-xs sm:text-sm">First Name</p>
              <p className="text-[#191919] text-sm sm:text-base">
                {userInfo.firstName}
              </p>
            </div>
            <div className="min-w-0">
              <p className="text-[#737373] text-xs sm:text-sm">Last Name</p>
              <p className="text-[#191919] text-sm sm:text-base">
                {userInfo.lastName}
              </p>
            </div>
          </div>
          <div className="min-w-0">
            <p className="text-[#737373] text-xs sm:text-sm">Email Address</p>
            <p className="text-[#191919] text-sm sm:text-base">
              {userInfo.email}
            </p>
          </div>
          <div className="min-w-0">
            <p className="text-[#737373] text-xs sm:text-sm">Phone Number</p>
            <p className="text-[#191919] text-sm sm:text-base">
              {userInfo.phone}
            </p>
          </div>
          <div className="min-w-0">
            <p className="text-[#737373] text-xs sm:text-sm">Date of Birth</p>
            <p className="text-[#191919] text-sm sm:text-base">
              {userInfo.dob}
            </p>
          </div>
          <div className="min-w-0">
            <p className="text-[#737373] text-xs sm:text-sm">Street Address</p>
            <p className="text-[#191919] text-sm sm:text-base">
              {userInfo.address}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            <div className="min-w-0">
              <p className="text-[#737373] text-xs sm:text-sm">City</p>
              <p className="text-[#191919] text-sm sm:text-base">
                {userInfo.city}
              </p>
            </div>
            <div className="min-w-0">
              <p className="text-[#737373] text-xs sm:text-sm">State</p>
              <p className="text-[#191919] text-sm sm:text-base">
                {userInfo.state}
              </p>
            </div>
            <div className="min-w-0">
              <p className="text-[#737373] text-xs sm:text-sm">ZIP Code</p>
              <p className="text-[#191919] text-sm sm:text-base">
                {" "}
                {userInfo.zip}
              </p>
            </div>
          </div>
          <div className="min-w-0">
            <p className="text-[#737373] text-xs sm:text-sm">About Me</p>
            <p className="text-[#191919] leading-relaxed text-sm sm:text-base">
              {userInfo.about}
            </p>
          </div>
          <Divider className="my-2" />
          <div className="flex flex-col gap-4">
            <p className="text-[#191919] text-base sm:text-lg font-bold">
              Emergency Contact
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              <div className="min-w-0">
                <p className="text-[#737373] text-xs sm:text-sm">
                  Contact Name
                </p>
                <p className="text-[#191919] text-sm sm:text-base">
                  {userInfo.emergencyContactName}
                </p>
              </div>
              <div className="min-w-0">
                <p className="text-[#737373] text-xs sm:text-sm">
                  Contact Phone
                </p>
                <p className="text-[#191919] text-sm sm:text-base">
                  {userInfo.emergencyContactPhone}
                </p>
              </div>
            </div>
            <div className="min-w-0">
              <p className="text-[#737373] text-xs sm:text-sm">Relationship</p>
              <p className="text-[#191919] text-sm sm:text-base">
                {userInfo.relationship}
              </p>
            </div>
          </div>
        </div>
      ) : (
        // Step 5: Form for editing user information (including emergency contact)
        <div className="flex flex-col gap-4 w-full mt-5 border border-[#D0D0D0] rounded-lg p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 bg-white">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName">First Name *</label>
              <TextField
                id="firstName"
                variant="outlined"
                fullWidth
                name="firstName"
                value={userInfo.firstName}
                onChange={handleChange}
                required
                sx={textFieldStyle}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name *</label>
              <TextField
                id="lastName"
                variant="outlined"
                fullWidth
                name="lastName"
                value={userInfo.lastName}
                onChange={handleChange}
                required
                sx={textFieldStyle}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email">Email Address *</label>
            <TextField
              id="email"
              variant="outlined"
              fullWidth
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              helperText="We'll send booking confirmations to this email"
              required
              sx={textFieldStyle}
            />
          </div>

          <div>
            <label htmlFor="phone">Phone Number *</label>
            <TextField
              id="phone"
              variant="outlined"
              fullWidth
              name="phone"
              value={userInfo.phone}
              onChange={handleChange}
              helperText="For booking updates and host communication"
              required
              sx={textFieldStyle}
            />
          </div>

          <div>
            <label htmlFor="dob">Date of Birth *</label>
            <TextField
              id="dob"
              variant="outlined"
              fullWidth
              name="dob"
              value={userInfo.dob}
              onChange={handleChange}
              required
              helperText="You must be 21+ to rent vehicles"
              sx={textFieldStyle}
            />
          </div>

          <div>
            <label htmlFor="address">Street Address</label>
            <TextField
              id="address"
              variant="outlined"
              fullWidth
              name="address"
              value={userInfo.address}
              onChange={handleChange}
              sx={textFieldStyle}
            />
          </div>

          <div>
            <label htmlFor="city">City</label>
            <TextField
              id="city"
              variant="outlined"
              fullWidth
              name="city"
              value={userInfo.city}
              onChange={handleChange}
              sx={textFieldStyle}
            />
          </div>

          <div>
            <label htmlFor="state">State</label>
            <TextField
              id="state"
              variant="outlined"
              fullWidth
              name="state"
              value={userInfo.state}
              onChange={handleChange}
              sx={textFieldStyle}
            />
          </div>

          <div>
            <label htmlFor="zip">ZIP Code</label>
            <TextField
              id="zip"
              variant="outlined"
              fullWidth
              name="zip"
              value={userInfo.zip}
              onChange={handleChange}
              sx={textFieldStyle}
            />
          </div>

          <div>
            <label htmlFor="about">About Me</label>
            <TextField
              id="about"
              variant="outlined"
              fullWidth
              name="about"
              value={userInfo.about}
              onChange={handleChange}
              multiline
              rows={3}
              helperText="Share a bit about yourself with hosts"
              sx={textFieldStyle}
            />
          </div>

          {/* Emergency Contact Fields */}
          <div>
            <label htmlFor="emergencyContactName">Emergency Contact Name</label>
            <TextField
              id="emergencyContactName"
              variant="outlined"
              fullWidth
              name="emergencyContactName"
              value={userInfo.emergencyContactName}
              onChange={handleChange}
              sx={textFieldStyle}
            />
          </div>

          <div>
            <label htmlFor="emergencyContactPhone">
              Emergency Contact Phone
            </label>
            <TextField
              id="emergencyContactPhone"
              variant="outlined"
              fullWidth
              name="emergencyContactPhone"
              value={userInfo.emergencyContactPhone}
              onChange={handleChange}
              sx={textFieldStyle}
            />
          </div>

          <div>
            <label htmlFor="relationship">Relationship</label>
            <TextField
              id="relationship"
              variant="outlined"
              fullWidth
              name="relationship"
              value={userInfo.relationship}
              onChange={handleChange}
              sx={textFieldStyle}
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button
              sx={{
                textTransform: "none",
                border: "1px solid #D1D5DC",
                color: "#191919",
                width: "120px",
              }}
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>{" "}
            <Button
              sx={{
                textTransform: "none",
                bgcolor: "#00AEA8",
                border: "1px solid #00AEA8",
                color: "white",
                width: "130px",
                ":hover": {
                  bgcolor: "#fff",
                  border: "1px solid #00AEA8",
                  color: "#00AEA8",
                },
              }}
              onClick={handleSave}
            >
              Save Changes
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
