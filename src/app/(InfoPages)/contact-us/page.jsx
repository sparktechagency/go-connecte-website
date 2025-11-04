"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { TextField, Button, Snackbar, Alert } from "@mui/material";
import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { contactUsImage } from "../../../../public/images/AllImages";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.message.trim() || form.message.length < 10)
      e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      // Simulate API call. Replace with real fetch/axios call to your API endpoint.
      await new Promise((res) => setTimeout(res, 900));

      setSnack({ open: true, severity: "success", message: "Message sent." });
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } catch (err) {
      setSnack({
        open: true,
        severity: "error",
        message: "Send failed. Try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main className="max-w-7xl mx-auto p-6 md:p-10">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left contact cards */}
          <div className="space-y-6 lg:col-span-1">
            <ContactCard
              title="Contact"
              subtitle="+234 912 230 8240"
              icon={<FiPhoneCall className="text-[#00AEA8] sm:text-2xl" />}
            />
            <ContactCard
              title="Support email"
              subtitle="info@goconnecte.com"
              icon={<MdEmail className="text-[#00AEA8] sm:text-2xl" />}
            />
            <ContactCard
              title="Visit Us"
              subtitle={`15 Soloki St, Surulere, Lagos\n101241, Lagos`}
              icon={<FaLocationDot className="text-[#00AEA8] sm:text-2xl" />}
            />
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-7 grid grid-cols-1 md:grid-cols-3 gap-6 items-start bg-[url('/images/bg.png')] bg-cover bg-center">
              <div className="md:col-span-1 flex justify-center items-start">
                <div className="w-full max-w-md rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={contactUsImage.contactImage}
                    alt="contact"
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>
              </div>

              {/* Form area */}
              <div className="md:col-span-2">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <TextField
                    label="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name}
                    size="small"
                    inputProps={{ "aria-label": "name" }}
                  />

                  <TextField
                    label="Email address"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email}
                    size="small"
                    inputProps={{ "aria-label": "email" }}
                  />

                  <TextField
                    label="Write message..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    fullWidth
                    multiline
                    rows={4}
                    error={!!errors.message}
                    helperText={errors.message}
                    size="small"
                    inputProps={{ "aria-label": "message" }}
                  />

                  <div className="flex justify-start">
                    <Button
                      type="submit"
                      disabled={loading}
                      sx={{
                        borderRadius: "5px",
                        bgcolor: "#00AEA8",
                        color: "white",
                        width: { xs: "100%", sm: "50%" },
                        textTransform: "none",
                        fontSize: {
                          sm: "12px",
                          lg: "16px",
                        },
                      }}
                      variant="contained"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Snackbar
          open={snack.open}
          autoHideDuration={4000}
          onClose={() => setSnack({ ...snack, open: false })}
        >
          <Alert
            onClose={() => setSnack({ ...snack, open: false })}
            severity={snack.severity}
            sx={{ width: "100%" }}
          >
            {snack.message}
          </Alert>
        </Snackbar>
      </main>
    </>
  );
}

function ContactCard({ title, subtitle, icon }) {
  return (
    <div className="flex items-center gap-4 bg-[#F1F7F4] rounded-xl p-4 shadow-sm">
      <div className="size-8 sm:size-10 lg:size-16 bg-white rounded-full flex items-center justify-center shadow border-4 border-[#D2D2D2]">
        {icon}
      </div>
      <div>
        <div className="text-xs sm:text-base font-semibold text-gray-800">
          {title}
        </div>
        <div className="text-xs sm:text-sm text-gray-500">{subtitle}</div>
      </div>
    </div>
  );
}
