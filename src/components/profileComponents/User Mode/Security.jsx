import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { FiLock } from "react-icons/fi";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import { toast } from "sonner";

export default function Security() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowCurrentPassword = () =>
    setShowCurrentPassword((prev) => !prev);
  const handleShowNewPassword = () => setShowNewPassword((prev) => !prev);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);

  const validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    return minLength && hasUpperCase && hasLowerCase && hasNumber;
  };

  const handleCancel = () => {
    // Reset all fields
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    // Reset password visibility
    setShowCurrentPassword(false);
    setShowNewPassword(false);
    setShowConfirmPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!currentPassword) {
      toast.warning("Current password is required");
      return;
    }

    if (!newPassword) {
      toast.warning("New password is required");
      return;
    }

    if (!validatePassword(newPassword)) {
      toast.error(
        "Password must be at least 8 characters with uppercase, lowercase, and numbers"
      );
      return;
    }

    if (!confirmPassword) {
      toast.warning("Please confirm your password");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (currentPassword && newPassword && currentPassword === newPassword) {
      toast.error("New password must be different from current password");
      return;
    }

    // If validation passes, proceed with password change
    console.log("Password change submitted:", {
      currentPassword,
      newPassword,
    });

    // Here you would typically make an API call to update the password
    // Example:
    // try {
    //   await updatePassword({ currentPassword, newPassword });
    //   toast.success("Password updated successfully!");
    //   handleCancel(); // Reset form after success
    // } catch (error) {
    //   toast.error(error.message || "Failed to update password");
    // }

    // For now, just show success message and reset
    toast.success("Password updated successfully!");
    handleCancel();
  };

  return (
    <div className="bg-white px-2 sm:px-4 md:px-6 py-4 sm:py-6">
      <p className="text-[#191919] text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
        Security Settings
      </p>
      <div className="border border-[#E5E7EB] rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 xl:w-1/2">
        <div className="flex items-start sm:items-center gap-2 sm:gap-3">
          <div className="bg-[#00AEA81A] p-2 sm:p-2.5 md:p-3 rounded-full shrink-0">
            <FiLock className="text-base sm:text-lg md:text-xl text-[#00AEA8]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm sm:text-base md:text-lg font-bold text-[#191919] truncate">
              Change Password
            </p>
            <p className="text-xs sm:text-sm text-[#737373] mt-0.5 sm:mt-1 leading-tight sm:leading-normal">
              Update your password regularly to keep your account secure
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-5"
        >
          {/* Current Password */}
          <div className="space-y-1 sm:space-y-1.5">
            <label
              htmlFor="currentPassword"
              className="block text-[#191919] font-semibold text-xs sm:text-sm md:text-base"
            >
              Current Password *
            </label>
            <TextField
              id="currentPassword"
              placeholder="Enter your current password"
              type={showCurrentPassword ? "text" : "password"}
              fullWidth
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              InputProps={{
                sx: {
                  height: {
                    xs: "42px",
                    sm: "46px",
                    md: "50px",
                    lg: "54px",
                  },
                  fontSize: {
                    xs: "0.875rem",
                    sm: "0.9375rem",
                    md: "1rem",
                  },
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#00AEA8",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#00AEA8",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#00AEA8",
                },
                "& .MuiOutlinedInput-input": {
                  padding: {
                    xs: "10px 12px",
                    sm: "12px 14px",
                    md: "14px 14px",
                    lg: "16px 14px",
                  },
                },
                "& .MuiOutlinedInput-input::placeholder": {
                  fontSize: {
                    xs: "0.8125rem",
                    sm: "0.875rem",
                    md: "0.9375rem",
                  },
                  opacity: 0.6,
                },
              }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showCurrentPassword
                            ? "Hide password"
                            : "Show password"
                        }
                        onClick={handleShowCurrentPassword}
                        edge="end"
                        sx={{
                          padding: { xs: "6px", sm: "8px" },
                        }}
                      >
                        {showCurrentPassword ? (
                          <IoIosEyeOff className="text-[#00AEA8] text-base sm:text-lg md:text-xl" />
                        ) : (
                          <IoMdEye className="text-[#00AEA8] text-base sm:text-lg md:text-xl" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </div>

          {/* New Password */}
          <div className="space-y-1 sm:space-y-1.5">
            <label
              htmlFor="newPassword"
              className="block text-[#191919] font-semibold text-xs sm:text-sm md:text-base"
            >
              New Password *
            </label>
            <TextField
              id="newPassword"
              placeholder="Enter new password"
              type={showNewPassword ? "text" : "password"}
              fullWidth
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              helperText="Must be at least 8 characters with uppercase, lowercase, and numbers"
              FormHelperTextProps={{
                sx: {
                  fontSize: { xs: "0.6875rem", sm: "0.75rem", md: "0.8125rem" },
                  marginTop: { xs: "4px", sm: "6px" },
                  marginLeft: { xs: "2px", sm: "4px" },
                },
              }}
              InputProps={{
                sx: {
                  height: {
                    xs: "42px",
                    sm: "46px",
                    md: "50px",
                    lg: "54px",
                  },
                  fontSize: {
                    xs: "0.875rem",
                    sm: "0.9375rem",
                    md: "1rem",
                  },
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#00AEA8",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#00AEA8",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#00AEA8",
                },
                "& .MuiOutlinedInput-input": {
                  padding: {
                    xs: "10px 12px",
                    sm: "12px 14px",
                    md: "14px 14px",
                    lg: "16px 14px",
                  },
                },
                "& .MuiOutlinedInput-input::placeholder": {
                  fontSize: {
                    xs: "0.8125rem",
                    sm: "0.875rem",
                    md: "0.9375rem",
                  },
                  opacity: 0.6,
                },
              }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showNewPassword ? "Hide password" : "Show password"
                        }
                        onClick={handleShowNewPassword}
                        edge="end"
                        sx={{
                          padding: { xs: "6px", sm: "8px" },
                        }}
                      >
                        {showNewPassword ? (
                          <IoIosEyeOff className="text-[#00AEA8] text-base sm:text-lg md:text-xl" />
                        ) : (
                          <IoMdEye className="text-[#00AEA8] text-base sm:text-lg md:text-xl" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </div>

          {/* Confirm Password */}
          <div className="space-y-1 sm:space-y-1.5">
            <label
              htmlFor="confirmPassword"
              className="block text-[#191919] font-semibold text-xs sm:text-sm md:text-base"
            >
              Confirm New Password *
            </label>
            <TextField
              id="confirmPassword"
              placeholder="Confirm new password"
              type={showConfirmPassword ? "text" : "password"}
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              InputProps={{
                sx: {
                  height: {
                    xs: "42px",
                    sm: "46px",
                    md: "50px",
                    lg: "54px",
                  },
                  fontSize: {
                    xs: "0.875rem",
                    sm: "0.9375rem",
                    md: "1rem",
                  },
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#00AEA8",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#00AEA8",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#00AEA8",
                },
                "& .MuiOutlinedInput-input": {
                  padding: {
                    xs: "10px 12px",
                    sm: "12px 14px",
                    md: "14px 14px",
                    lg: "16px 14px",
                  },
                },
                "& .MuiOutlinedInput-input::placeholder": {
                  fontSize: {
                    xs: "0.8125rem",
                    sm: "0.875rem",
                    md: "0.9375rem",
                  },
                  opacity: 0.6,
                },
              }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showConfirmPassword
                            ? "Hide password"
                            : "Show password"
                        }
                        onClick={handleShowConfirmPassword}
                        edge="end"
                        sx={{
                          padding: { xs: "6px", sm: "8px" },
                        }}
                      >
                        {showConfirmPassword ? (
                          <IoIosEyeOff className="text-[#00AEA8] text-base sm:text-lg md:text-xl" />
                        ) : (
                          <IoMdEye className="text-[#00AEA8] text-base sm:text-lg md:text-xl" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 sm:gap-3 mt-2 sm:mt-3 md:mt-4">
            <Button
              sx={{
                textTransform: "none",
                border: "1px solid #D1D5DC",
                color: "#191919",
                width: { xs: "100%", sm: "110px", md: "120px" },
                height: { xs: "40px", sm: "42px", md: "44px" },
                fontSize: { xs: "0.8125rem", sm: "0.875rem", md: "0.9375rem" },
                fontWeight: 500,
                ":hover": {
                  bgcolor: "#F9FAFB",
                  border: "1px solid #D1D5DC",
                },
              }}
              onClick={handleCancel}
              type="button"
            >
              Cancel
            </Button>
            <Button
              sx={{
                textTransform: "none",
                bgcolor: "#00AEA8",
                border: "1px solid #00AEA8",
                color: "white",
                width: { xs: "100%", sm: "130px", md: "140px" },
                height: { xs: "40px", sm: "42px", md: "44px" },
                fontSize: { xs: "0.8125rem", sm: "0.875rem", md: "0.9375rem" },
                fontWeight: 500,
                ":hover": {
                  bgcolor: "#fff",
                  border: "1px solid #00AEA8",
                  color: "#00AEA8",
                },
              }}
              type="submit"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
