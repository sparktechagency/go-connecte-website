"use client";

import React, { useRef, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Menu,
  MenuItem,
  Modal,
} from "@mui/material";
import { FiMoreVertical } from "react-icons/fi";
import { FaStar, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import { suggestedCarImage } from "../../../../public/images/AllImages";
import VehicleManageForm from "./VehicleManageForm";

const vehicleData = [
  {
    id: 1,
    name: "Audi A3 1.6 TDI S line",
    year: "2020",
    make: "Audi",
    model: "A3",
    category: "sedan",
    transmission: "automatic",
    seats: "5",
    fuelType: "diesel",
    odometer: "45000",
    location: "Manchester, England • 31 mi",
    price: "25000 FCFA/Day",
    rating: 4.96,
    trips: 15,
    driver: "With Driver",
    status: "Available",
    image: suggestedCarImage.suggestedImage,
    features: {
      airConditioning: true,
      bluetooth: true,
      gps: true,
      usbCharger: true,
      auxInput: true,
      sunroof: false,
      heatedSeats: true,
      backupCamera: true,
      childSeat: false,
    },
    overview:
      "Well-maintained Audi A3 with premium features. Perfect for city drives and long journeys. Regular servicing done at authorized service centers.",
  },
  {
    id: 2,
    name: "BMW 3 Series",
    year: "2021",
    make: "BMW",
    model: "3 Series",
    category: "sedan",
    transmission: "automatic",
    seats: "5",
    fuelType: "petrol",
    odometer: "32000",
    location: "London, England • 15 mi",
    price: "35000 FCFA/Day",
    rating: 4.92,
    trips: 22,
    driver: "With Driver",
    status: "Booked",
    image: suggestedCarImage.suggestedImage,
    features: {
      airConditioning: true,
      bluetooth: true,
      gps: true,
      usbCharger: true,
      auxInput: true,
      sunroof: true,
      heatedSeats: true,
      backupCamera: true,
      childSeat: true,
    },
    overview:
      "Luxury BMW with all modern amenities. Excellent performance and comfort for business trips and special occasions.",
  },
  {
    id: 3,
    name: "Toyota Corolla",
    year: "2019",
    make: "Toyota",
    model: "Corolla",
    category: "sedan",
    transmission: "manual",
    seats: "5",
    fuelType: "petrol",
    odometer: "68000",
    location: "Birmingham, England • 25 mi",
    price: "18000 FCFA/Day",
    rating: 4.85,
    trips: 35,
    driver: "Self Drive",
    status: "Maintenance",
    image: suggestedCarImage.suggestedImage,
    features: {
      airConditioning: true,
      bluetooth: true,
      gps: false,
      usbCharger: true,
      auxInput: true,
      sunroof: false,
      heatedSeats: false,
      backupCamera: false,
      childSeat: false,
    },
    overview:
      "Reliable and fuel-efficient Toyota Corolla. Great for daily commutes and budget-conscious travelers.",
  },
  {
    id: 4,
    name: "Mercedes-Benz C-Class",
    year: "2022",
    make: "Mercedes-Benz",
    model: "C-Class",
    category: "sedan",
    transmission: "automatic",
    seats: "5",
    fuelType: "hybrid",
    odometer: "15000",
    location: "Leeds, England • 40 mi",
    price: "45000 FCFA/Day",
    rating: 4.98,
    trips: 12,
    driver: "With Driver",
    status: "Available",
    image: suggestedCarImage.suggestedImage,
    features: {
      airConditioning: true,
      bluetooth: true,
      gps: true,
      usbCharger: true,
      auxInput: true,
      sunroof: true,
      heatedSeats: true,
      backupCamera: true,
      childSeat: true,
    },
    overview:
      "Premium Mercedes-Benz with cutting-edge technology and luxurious interiors. Perfect for VIP clients and special events.",
  },
];

const MyVehicles = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false); // Changed from isEditing
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [vehicles, setVehicles] = useState(vehicleData);
  const formRef = useRef();

  const handleMenuClick = (event, vehicle) => {
    setAnchorEl(event.currentTarget);
    setSelectedVehicle(vehicle);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setIsFormOpen(true); // Open the form for editing
    handleMenuClose();
  };

  const handleDelete = () => {
    setIsDeleteModalOpen(true); // Open the delete confirmation modal
    handleMenuClose();
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
    setSelectedVehicle(null);
  };

  const handleConfirmDelete = () => {
    setVehicles(vehicles.filter((v) => v.id !== selectedVehicle.id));
    setIsDeleteModalOpen(false);
    setSelectedVehicle(null);
  };

  const handleCancelForm = () => {
    setIsFormOpen(false);
    setIsEditing(false);
    setSelectedVehicle(null);
  };

  const handleSaveVehicle = (vehicleData) => {
    if (isEditing) {
      // Update existing vehicle
      setVehicles(
        vehicles.map((v) => (v.id === vehicleData.id ? vehicleData : v))
      );
    } else {
      const newVehicle = {
        ...vehicleData,
        image: suggestedCarImage.suggestedImage, // Use default image
      };
      setVehicles([...vehicles, newVehicle]);
    }
    setIsFormOpen(false);
    setIsEditing(false);
    setSelectedVehicle(null);
  };

  const handleAddNewVehicle = () => {
    console.log("Click");
    setIsEditing(false);
    setSelectedVehicle(null);
    setIsFormOpen(true);
  };

  return (
    <div className="py-5">
      {/* Title and Stats */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-base lg:text-2xl font-semibold">
            {isFormOpen
              ? isEditing
                ? "Edit Vehicle"
                : "Add New Vehicle"
              : "My Vehicles"}
          </p>

          <p className="text-xs sm:text-sm text-[#737373]">
            {isFormOpen
              ? isEditing
                ? "Update your vehicle information"
                : "Fill in the details below"
              : "Manage your rental fleet"}
          </p>
        </div>
        {/* Conditional Buttons based on form state  */}
        {isFormOpen ? (
          // When editing: Show Delete and Save Changes buttons
          <div className="flex gap-2">
            <Button
              onClick={handleCancelForm}
              sx={{
                border: "1px solid #d32f2f",
                color: "#d32f2f",
                textTransform: "none",
                fontSize: {
                  xs: "10px",
                  md: "12px",
                  lg: "14px",
                },
                width: {
                  xs: "100px",
                  md: "110px",
                  lg: "120px",
                },
                "&:hover": {
                  bgcolor: "#d32f2f",
                  color: "white",
                },
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                if (formRef.current) {
                  formRef.current.submitForm();
                }
              }}
              sx={{
                bgcolor: "#00AEA8",
                color: "white",
                textTransform: "none",
                fontSize: {
                  xs: "10px",
                  md: "12px",
                  lg: "14px",
                },
                width: {
                  xs: "120px",
                  md: "130px",
                  lg: "140px",
                },
                "&:hover": {
                  bgcolor: "#009690",
                },
              }}
            >
              Save Changes
            </Button>
          </div>
        ) : (
          <Button
            onClick={handleAddNewVehicle}
            sx={{
              bgcolor: "#00AEA8",
              color: "white",
              textTransform: "none",
              fontSize: {
                xs: "10px",
                md: "12px",
                lg: "14px",
              },
              width: {
                xs: "120px",
                md: "130px",
                lg: "140px",
              },
              "&:hover": {
                bgcolor: "#009690",
              },
            }}
          >
            + Add New Vehicle
          </Button>
        )}
      </div>

      {isFormOpen ? (
        <VehicleManageForm
          ref={formRef}
          vehicle={selectedVehicle}
          onSave={handleSaveVehicle}
          onCancel={handleCancelForm}
          isEditing={isEditing}
        />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6">
          {vehicleData.map((vehicle, index) => (
            <Card
              key={index}
              className="rounded-lg shadow-lg border border-[#E5E7EB] p-1 sm:p-4"
            >
              <div className="relative">
                {/* Vehicle Image */}
                <div className="w-full relative rounded-md overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    width={400}
                    height={200}
                    className="rounded-md w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute top-1 sm:top-2 lg:top-4 right-1 sm:right-2 lg:right-4">
                  <Button
                    onClick={(e) => handleMenuClick(e, vehicle)}
                    size="small"
                    sx={{
                      color: "#737373",
                      backgroundColor: "#ffffff",
                      borderRadius: "50%",
                      minWidth: "30px",
                      height: "30px",
                    }}
                  >
                    <FiMoreVertical className="text-lg" />
                  </Button>
                </div>
              </div>
              <CardContent sx={{ p: "4px" }}>
                <p className="font-semibold text-[#191919] mb-2 text-xs sm:text-base">
                  {vehicle.name}
                </p>
                <div className="flex flex-wrap sm:flex-row items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                  <p className="text-[#191919]"> {vehicle.rating}</p>
                  <FaStar className="text-[#FFC700]" />
                  <p className="text-[#737373]"> ({vehicle.trips} Trips)</p>
                  <FaUser className="text-[#737373]" />
                  <p className="text-[#737373]">{vehicle.driver}</p>
                </div>
                <div className="flex items-center gap-1 text-xs sm:text-sm text-[#737373]">
                  <FaLocationDot />
                  <p>{vehicle.location}</p>
                </div>
                <div className="mt-2 font-semibold text-[#00AEA8] text-sm sm:text-base">
                  {vehicle.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Vehicle Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{
          "& .MuiMenu-paper": {
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <MenuItem
          onClick={handleEdit}
          sx={{
            fontSize: "14px",
            "&:hover": {
              backgroundColor: "#00AEA8",
              color: "white",
            },
          }}
        >
          Edit
        </MenuItem>
        <MenuItem
          onClick={handleDelete}
          sx={{
            fontSize: "14px",
            "&:hover": {
              backgroundColor: "#d32f2f",
              color: "white",
            },
          }}
        >
          Delete
        </MenuItem>
      </Menu>

      {/* Delete Confirmation Modal */}
      <Modal open={isDeleteModalOpen} onClose={handleCancelDelete}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            width: "300px",
            textAlign: "center",
          }}
        >
          <h3>Are you sure you want to delete {selectedVehicle?.name}?</h3>
          <div>
            <Button onClick={handleConfirmDelete} color="error">
              Yes, Delete
            </Button>
            <Button onClick={handleCancelDelete} color="primary">
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MyVehicles;
