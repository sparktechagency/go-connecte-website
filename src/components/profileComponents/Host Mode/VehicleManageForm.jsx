"use client";

import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useRef,
} from "react";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import { FiUpload } from "react-icons/fi";
import Image from "next/image";
import { toast } from "sonner";
import { IoKey } from "react-icons/io5";

const VehicleForm = forwardRef(
  ({ vehicle, onSave, onCancel, isEditing }, ref) => {
    // Initialize state based on whether we're editing or adding new
    const initialState =
      isEditing && vehicle
        ? vehicle
        : {
            id: null,
            name: "",
            year: "",
            make: "",
            model: "",
            category: "",
            transmission: "",
            seats: "",
            fuelType: "",
            odometer: "",
            location: "",
            price: "",
            rating: "",
            trips: 0,
            driver: "With Driver",
            status: "Available",
            image: null,
            features: {
              bluetooth: false,
              gps: false,
              usbCharger: false,
              auxInput: false,
              sunroof: false,
              heatedSeats: false,
              backupCamera: false,
              childSeat: false,
              airConditioning: false,
            },
            overview: "",
          };

    const [vehicleData, setVehicleData] = useState(initialState);
    const fileInputRef = useRef(null);

    const currentYear = new Date().getFullYear();
    const years = Array.from(
      { length: currentYear - 2000 + 1 },
      (_, i) => currentYear - i
    );
    const seatOptions = [2, 3, 4, 5, 6, 7, 8, 9, 10];

    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        // Check file size (Max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          toast.error("File size exceeds 5MB. Please upload a smaller image.");
          return;
        }

        // Check file type
        if (!file.type.startsWith("image/")) {
          toast.warning("Please upload a valid image file.");
          return;
        }

        // Create a preview URL
        const reader = new FileReader();
        reader.onloadend = () => {
          setVehicleData({
            ...vehicleData,
            image: reader.result,
          });
        };
        reader.readAsDataURL(file);
      }
    };

    const handleUploadClick = () => {
      fileInputRef.current?.click();
    };

    const handleRemoveImage = () => {
      setVehicleData({
        ...vehicleData,
        image: null,
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setVehicleData({
        ...vehicleData,
        [name]: value,
      });
    };

    const handleFeatureChange = (e) => {
      const { name, checked } = e.target;
      setVehicleData({
        ...vehicleData,
        features: {
          ...vehicleData.features,
          [name]: checked,
        },
      });
    };

    const handleSubmit = () => {
      if (isEditing) {
        onSave(vehicleData);
      } else {
        onSave({
          ...vehicleData,
          id: Date.now(),
          image: vehicleData.image || "/default-car-image.jpg",
        });
      }
    };

    // Expose submit function to parent component
    useImperativeHandle(ref, () => ({
      submitForm: () => {
        handleSubmit();
      },
    }));

    return (
      <div className="flex  gap-5 bg-white rounded-lg">
        <div>
          {/* Vehicle Image Upload Section */}
          <div className="mb-8 border border-[#E5E7EB] p-4 rounded-lg">
            <div className="flex flex-col justify-between mb-2">
              <h4 className="text-lg font-semibold text-[#191919] mb-5">
                Vehicle Image
              </h4>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                style={{ display: "none" }}
              />
              <Button
                fullWidth
                onClick={handleUploadClick}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  px: "16px",
                  py: "8px",
                  fontSize: "14px",
                  textTransform: "none",
                  border: "1px dashed #E5E7EB",
                  color: "#0A0A0A",
                  borderRadius: "8px",
                  ":hover": {
                    bgcolor: "#00AEA8",
                    color: "white",
                  },
                }}
                className=" hover:bg-[#00AEA8] hover:text-white transition-colors"
              >
                <FiUpload />
                Upload Image
              </Button>
            </div>
            <p className="text-xs text-[#737373]">
              Upload a high-quality image of your vehicle. Recommended size:
              1200x800px
            </p>
            {vehicleData.image && (
              <div className="mt-3 w-full h-64 bg-gray-100 rounded-md overflow-hidden">
                <Image
                  src={vehicleData.image}
                  alt="Vehicle"
                  height={50}
                  width={50}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Basic Information Section */}
          <div className="mb-8 border border-[#E5E7EB] p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-[#191919] mb-5">
              Basic Information
            </h4>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-[#191919] mb-2">
                    Vehicle Name <span className="text-[#191919]">*</span>
                  </label>
                  <TextField
                    fullWidth
                    placeholder="e.g., Audi A3 1.6 TDI S line"
                    value={vehicleData.name}
                    name="name"
                    onChange={handleChange}
                    size="small"
                    sx={{
                      bgcolor: "#F3F3F5",
                      border: "none",
                      outline: "none",
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "#00AEA8",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#00AEA8",
                        },
                      },
                    }}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-[#191919] mb-2">
                    Year <span className="text-[#191919]">*</span>
                  </label>
                  <FormControl fullWidth size="small">
                    <Select
                      value={vehicleData.year}
                      name="year"
                      onChange={handleChange}
                      displayEmpty
                      sx={{
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#00AEA8",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#00AEA8",
                        },
                      }}
                    >
                      {years.map((year) => (
                        <MenuItem key={year} value={year}>
                          {year}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-[#191919] mb-2">
                    Category <span className="text-[#191919]">*</span>{" "}
                    <span className="text-xs font-normal text-[#6A7282]">
                      (Type of vehicle)
                    </span>
                  </label>
                  <FormControl fullWidth size="small">
                    <Select
                      value={vehicleData.category}
                      name="category"
                      onChange={handleChange}
                      displayEmpty
                      sx={{
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#00AEA8",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#00AEA8",
                        },
                      }}
                    >
                      <MenuItem value="" disabled>
                        Select category
                      </MenuItem>
                      <MenuItem value="sedan">Sedan</MenuItem>
                      <MenuItem value="suv">SUV</MenuItem>
                      <MenuItem value="hatchback">Hatchback</MenuItem>
                      <MenuItem value="coupe">Coupe</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-[#191919] mb-2">
                    Transmission <span className="text-[#191919]">*</span>
                  </label>
                  <FormControl fullWidth size="small">
                    <Select
                      value={vehicleData.transmission}
                      name="transmission"
                      onChange={handleChange}
                      displayEmpty
                      sx={{
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#00AEA8",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#00AEA8",
                        },
                      }}
                    >
                      <MenuItem value="" disabled>
                        Select transmission
                      </MenuItem>
                      <MenuItem value="automatic">Automatic</MenuItem>
                      <MenuItem value="manual">Manual</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-[#191919] mb-2">
                    Seats <span className="text-[#191919]">*</span>
                  </label>
                  <FormControl fullWidth size="small">
                    <Select
                      value={vehicleData.seats}
                      name="seats"
                      onChange={handleChange}
                      sx={{
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#00AEA8",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#00AEA8",
                        },
                      }}
                    >
                      {seatOptions.map((seats) => (
                        <MenuItem key={seats} value={seats}>
                          {seats}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-[#191919] mb-2">
                    Fuel Type <span className="text-[#191919]">*</span>
                  </label>
                  <FormControl fullWidth size="small">
                    <Select
                      value={vehicleData.fuelType}
                      name="fuelType"
                      onChange={handleChange}
                      displayEmpty
                      sx={{
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#00AEA8",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#00AEA8",
                        },
                      }}
                    >
                      <MenuItem value="" disabled>
                        Select fuel type
                      </MenuItem>
                      <MenuItem value="petrol">Petrol</MenuItem>
                      <MenuItem value="diesel">Diesel</MenuItem>
                      <MenuItem value="electric">Electric</MenuItem>
                      <MenuItem value="hybrid">Hybrid</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-[#191919] mb-2">
                    Odometer / Mileage (km){" "}
                    <span className="text-[#191919]">*</span>
                  </label>
                  <TextField
                    fullWidth
                    placeholder="e.g., 50000"
                    value={vehicleData.odometer}
                    name="odometer"
                    onChange={handleChange}
                    size="small"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "#00AEA8",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#00AEA8",
                        },
                      },
                    }}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-[#191919] mb-2">
                    Location <span className="text-[#191919]">*</span>
                  </label>
                  <TextField
                    fullWidth
                    placeholder="e.g., Manchester, England"
                    value={vehicleData.location}
                    name="location"
                    onChange={handleChange}
                    size="small"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&:hover fieldset": {
                          borderColor: "#00AEA8",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#00AEA8",
                        },
                      },
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#191919] mb-2">
                  Driver Type <span className="text-[#191919]">*</span>
                  <span className="text-xs text-[#737373] font-medium">
                    (Important rental option)
                  </span>
                </label>
                <FormControl fullWidth size="small">
                  <Select
                    value={vehicleData.driver}
                    name="driver"
                    onChange={handleChange}
                    sx={{
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#00AEA8",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#00AEA8",
                      },
                    }}
                  >
                    <MenuItem value="With Driver">
                      With Driver - (Self-drive rental)
                    </MenuItem>
                    <MenuItem value="Self Drive">Self Drive</MenuItem>
                  </Select>
                </FormControl>
                <p className="text-xs text-[#737373] mt-1">
                  This vehicle is available for rent on our platform
                </p>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="mb-8 border border-[#E5E7EB] p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-[#191919] mb-5">
              Overview
            </h4>
            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="Add detailed vehicle description (optional). Include details like condition, special features, usage restrictions etc."
              value={vehicleData.overview}
              name="overview"
              onChange={handleChange}
              helperText="This description will be shown on the car details page"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "#00AEA8",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#00AEA8",
                  },
                },
              }}
            />
          </div>

          {/* Car Features Section */}
          <div className="mb-8 border border-[#E5E7EB] p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-[#191919] mb-5">
              Car Features
            </h4>
            <p className="text-sm text-[#737373] mb-4">
              Select the features available in your vehicle
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <div className="w-[calc(50%-1rem)]">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={vehicleData.features.airConditioning}
                      onChange={handleFeatureChange}
                      name="airConditioning"
                      sx={{
                        color: "#00AEA8",
                        "&.Mui-checked": {
                          color: "#00AEA8",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-sm text-[#191919]">
                      Air Conditioning
                    </span>
                  }
                />
              </div>
              <div className="w-[calc(50%-1rem)]">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={vehicleData.features.bluetooth}
                      onChange={handleFeatureChange}
                      name="bluetooth"
                      sx={{
                        color: "#00AEA8",
                        "&.Mui-checked": {
                          color: "#00AEA8",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-sm text-[#191919]">Bluetooth</span>
                  }
                />
              </div>
              <div className="w-[calc(50%-1rem)]">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={vehicleData.features.gps}
                      onChange={handleFeatureChange}
                      name="gps"
                      sx={{
                        color: "#00AEA8",
                        "&.Mui-checked": {
                          color: "#00AEA8",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-sm text-[#191919]">
                      GPS or Satnav
                    </span>
                  }
                />
              </div>
              <div className="w-[calc(50%-1rem)]">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={vehicleData.features.usbCharger}
                      onChange={handleFeatureChange}
                      name="usbCharger"
                      sx={{
                        color: "#00AEA8",
                        "&.Mui-checked": {
                          color: "#00AEA8",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-sm text-[#191919]">USB Charger</span>
                  }
                />
              </div>
              <div className="w-[calc(50%-1rem)]">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={vehicleData.features.auxInput}
                      onChange={handleFeatureChange}
                      name="auxInput"
                      sx={{
                        color: "#00AEA8",
                        "&.Mui-checked": {
                          color: "#00AEA8",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-sm text-[#191919]">AUX Input</span>
                  }
                />
              </div>
              <div className="w-[calc(50%-1rem)]">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={vehicleData.features.sunroof}
                      onChange={handleFeatureChange}
                      name="sunroof"
                      sx={{
                        color: "#00AEA8",
                        "&.Mui-checked": {
                          color: "#00AEA8",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-sm text-[#191919]">Sunroof</span>
                  }
                />
              </div>
              <div className="w-[calc(50%-1rem)]">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={vehicleData.features.heatedSeats}
                      onChange={handleFeatureChange}
                      name="heatedSeats"
                      sx={{
                        color: "#00AEA8",
                        "&.Mui-checked": {
                          color: "#00AEA8",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-sm text-[#191919]">Heated Seats</span>
                  }
                />
              </div>
              <div className="w-[calc(50%-1rem)]">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={vehicleData.features.backupCamera}
                      onChange={handleFeatureChange}
                      name="backupCamera"
                      sx={{
                        color: "#00AEA8",
                        "&.Mui-checked": {
                          color: "#00AEA8",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-sm text-[#191919]">
                      Backup Camera
                    </span>
                  }
                />
              </div>
              <div className="w-[calc(50%-1rem)]">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={vehicleData.features.childSeat}
                      onChange={handleFeatureChange}
                      name="childSeat"
                      sx={{
                        color: "#00AEA8",
                        "&.Mui-checked": {
                          color: "#00AEA8",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-sm text-[#191919]">Child Seat</span>
                  }
                />
              </div>
            </div>
          </div>
          {/* Included Features Section */}
          <div className="mb-8 border border-[#E5E7EB] p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-[#191919] mb-5">
              Included In The Price
            </h4>
            <p className="text-sm text-[#737373] mb-4">
              Select what&apos;s included in the rental price{" "}
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <div className="w-[calc(50%-1rem)]">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={vehicleData.features.airConditioning}
                      onChange={handleFeatureChange}
                      name="airConditioning"
                      sx={{
                        color: "#00AEA8",
                        "&.Mui-checked": {
                          color: "#00AEA8",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-sm text-[#191919]">
                      Rental Cost (all days add only includes)
                    </span>
                  }
                />
              </div>
              <div className="w-[calc(50%-1rem)]">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={vehicleData.features.bluetooth}
                      onChange={handleFeatureChange}
                      name="bluetooth"
                      sx={{
                        color: "#00AEA8",
                        "&.Mui-checked": {
                          color: "#00AEA8",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-sm text-[#191919]">
                      Roadside Assistance
                    </span>
                  }
                />
              </div>
              <div className="w-[calc(50%-1rem)]">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={vehicleData.features.gps}
                      onChange={handleFeatureChange}
                      name="gps"
                      sx={{
                        color: "#00AEA8",
                        "&.Mui-checked": {
                          color: "#00AEA8",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-sm text-[#191919]">
                      Liability insurance{" "}
                    </span>
                  }
                />
              </div>
              <div className="w-[calc(50%-1rem)]">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={vehicleData.features.usbCharger}
                      onChange={handleFeatureChange}
                      name="usbCharger"
                      sx={{
                        color: "#00AEA8",
                        "&.Mui-checked": {
                          color: "#00AEA8",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-sm text-[#191919]">24/7 Support</span>
                  }
                />
              </div>
              <div className="w-[calc(50%-1rem)]">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={vehicleData.features.auxInput}
                      onChange={handleFeatureChange}
                      name="auxInput"
                      sx={{
                        color: "#00AEA8",
                        "&.Mui-checked": {
                          color: "#00AEA8",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-sm text-[#191919]">
                      Comprehensive Insurance
                    </span>
                  }
                />
              </div>
              <div className="w-[calc(50%-1rem)]">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={vehicleData.features.sunroof}
                      onChange={handleFeatureChange}
                      name="sunroof"
                      sx={{
                        color: "#00AEA8",
                        "&.Mui-checked": {
                          color: "#00AEA8",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-sm text-[#191919]">
                      Professional Driver
                    </span>
                  }
                />
              </div>
              <div className="w-[calc(50%-1rem)]">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={vehicleData.features.heatedSeats}
                      onChange={handleFeatureChange}
                      name="heatedSeats"
                      sx={{
                        color: "#00AEA8",
                        "&.Mui-checked": {
                          color: "#00AEA8",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-sm text-[#191919]">
                      Basic Insurance
                    </span>
                  }
                />
              </div>
              <div className="w-[calc(50%-1rem)]">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={vehicleData.features.backupCamera}
                      onChange={handleFeatureChange}
                      name="backupCamera"
                      sx={{
                        color: "#00AEA8",
                        "&.Mui-checked": {
                          color: "#00AEA8",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-sm text-[#191919]">
                      Backup Camera
                    </span>
                  }
                />
              </div>
              <div className="w-[calc(50%-1rem)]">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={vehicleData.features.childSeat}
                      onChange={handleFeatureChange}
                      name="childSeat"
                      sx={{
                        color: "#00AEA8",
                        "&.Mui-checked": {
                          color: "#00AEA8",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="text-sm text-[#191919]">
                      Fuel included
                    </span>
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="flex flex-col gap-5">
          <div className="border border-[#E5E7EB] p-4 rounded-lg">
            <h4 className="text-base font-semibold text-[#191919] mb-4">
              Pricing
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-[#191919] mb-2">
                  Daily Rate (FCFA) <span className="text-[#191919]">*</span>
                </label>
                <TextField
                  fullWidth
                  placeholder="Enter rate"
                  value={vehicleData.price}
                  name="price"
                  onChange={handleChange}
                  size="small"
                  sx={{
                    backgroundColor: "white",
                    "& .MuiOutlinedInput-root": {
                      "&:hover fieldset": {
                        borderColor: "#00AEA8",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#00AEA8",
                      },
                    },
                  }}
                />
              </div>
              <div className="bg-[#00AEA81A] p-3 rounded-lg">
                <p className="text-sm text-[#737373]">Preview Price</p>
                <p className="text-[#00AEA8] font-semibold">
                  {vehicleData.price}
                </p>
              </div>
              <div className="bg-[#F9FAFB] p-3 rounded-lg">
                <p className="text-xs text-[#4A5565]">Rental Type</p>
                <div className="flex items-center gap-2">
                  <IoKey className="text-yellow-600" />
                  <p className="text-[#191919] font-semibold">
                    {vehicleData.driver}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-[#191919] mb-2">
                Other fees
              </label>
              <TextField
                fullWidth
                placeholder="Add description"
                size="small"
                sx={{
                  backgroundColor: "white",
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: "#00AEA8",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00AEA8",
                    },
                  },
                }}
              />
            </div>
          </div>

          {/* Listing Status Section */}
          <div className="border border-[#E5E7EB] p-4 rounded-lg">
            <h4 className="text-base font-semibold text-[#191919] mb-4">
              Listing Status
            </h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-[#191919] mb-2">
                  Status
                </label>
                <FormControl fullWidth size="small">
                  <Select
                    value={vehicleData.status}
                    name="status"
                    onChange={handleChange}
                    sx={{
                      backgroundColor: "white",
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#00AEA8",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#00AEA8",
                      },
                    }}
                  >
                    <MenuItem value="Available">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Ensure availability for booking
                      </span>
                    </MenuItem>
                    <MenuItem value="Booked">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        Booked
                      </span>
                    </MenuItem>
                    <MenuItem value="Maintenance">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        Maintenance
                      </span>
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#191919] mb-2">
                  Current Status
                </label>
                <div className="flex gap-2">
                  <button className="px-4 py-2 text-sm bg-green-100 text-green-700 rounded-md font-medium">
                    Active
                  </button>
                  <button className="px-4 py-2 text-sm text-[#737373] border border-[#E5E7EB] rounded-md hover:bg-gray-50">
                    Inactive
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

VehicleForm.displayName = "VehicleForm";

export default VehicleForm;
