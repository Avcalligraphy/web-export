"use client";

import React from "react";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import TextareaInput from "./TextareaInput";
import CheckboxInput from "./CheckboxInput";
import { Button } from "@/components/ui";

export default function InquiryForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  const regionOptions = [
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "americas", label: "Americas" },
    { value: "africa", label: "Africa" },
    { value: "oceania", label: "Oceania" },
  ];

  const productOptions = [
    { value: "coconut-charcoal", label: "Coconut Charcoal" },
    { value: "briquettes", label: "Briquettes" },
    { value: "hookah-charcoal", label: "Hookah Charcoal" },
  ];

  const quantityOptions = [
    { value: "1-10", label: "1-10 tons" },
    { value: "11-50", label: "11-50 tons" },
    { value: "51-100", label: "51-100 tons" },
    { value: "100+", label: "100+ tons" },
  ];

  const packagingOptions = [
    { value: "bags", label: "Bags" },
    { value: "boxes", label: "Boxes" },
    { value: "bulk", label: "Bulk" },
    { value: "custom", label: "Custom Packaging" },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TextInput
          label="First Name"
          placeholder="Enter First Name"
          name="firstName"
          required
        />
        <TextInput
          label="Last Name"
          placeholder="Enter Last Name"
          name="lastName"
          required
        />
        <TextInput
          label="Email"
          placeholder="Enter your Email"
          name="email"
          type="email"
          required
        />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TextInput
          label="Phone"
          placeholder="Enter Phone Number"
          name="phone"
          type="tel"
          required
        />
        <SelectInput
          label="Region"
          placeholder="Select Your Region"
          name="region"
          options={regionOptions}
          required
        />
        <SelectInput
          label="Product Interest"
          placeholder="Select Your Product"
          name="productInterest"
          options={productOptions}
          required
        />
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectInput
          label="Quantity Required"
          placeholder="Select Your Quantity"
          name="quantity"
          options={quantityOptions}
          required
        />
        <SelectInput
          label="Preferred Packaging"
          placeholder="Select Your Packaging"
          name="packaging"
          options={packagingOptions}
          required
        />
      </div>

      {/* Row 4 */}
      <div>
        <TextareaInput
          label="Message"
          placeholder="Enter your Message here.."
          name="message"
          rows={5}
        />
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <CheckboxInput
          name="terms"
          label="I agree with"
          linkTexts={[
            { text: "Terms of Use", href: "#" },
            { text: "Privacy Policy", href: "#" },
          ]}
          required
        />
        <Button
          type="submit"
          variant="red"
          size="md"
          className="w-full sm:w-auto"
        >
          Send Inquiry
        </Button>
      </div>
    </form>
  );
}

