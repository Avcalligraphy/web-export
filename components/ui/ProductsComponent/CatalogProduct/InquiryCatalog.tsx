"use client";

import React from "react";

import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";
import TextInput from "../../ContactComponent/TextInput";
import SelectInput from "../../ContactComponent/SelectInput";
import TextareaInput from "../../ContactComponent/TextareaInput";
import CheckboxInput from "../../ContactComponent/CheckboxInput";

export default function InquiryCatalog() {
  const t = useTranslations("contactUs.inquiryForm");
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  const regionOptions = [
    { value: "asia", label: t("regions.asia") },
    { value: "europe", label: t("regions.europe") },
    { value: "americas", label: t("regions.americas") },
    { value: "africa", label: t("regions.africa") },
    { value: "oceania", label: t("regions.oceania") },
  ];

  const productOptions = [
    { value: "coconut-charcoal", label: t("products.coconutCharcoal") },
    { value: "briquettes", label: t("products.briquettes") },
    { value: "hookah-charcoal", label: t("products.hookahCharcoal") },
  ];

  const quantityOptions = [
    { value: "1-10", label: t("quantities.1-10") },
    { value: "11-50", label: t("quantities.11-50") },
    { value: "51-100", label: t("quantities.51-100") },
    { value: "100+", label: t("quantities.100+") },
  ];

  const packagingOptions = [
    { value: "bags", label: t("packaging.bags") },
    { value: "boxes", label: t("packaging.boxes") },
    { value: "bulk", label: t("packaging.bulk") },
    { value: "custom", label: t("packaging.custom") },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextInput
          label={t("firstName")}
          placeholder={t("placeholders.firstName")}
          name="firstName"
          required
        />
        <TextInput
          label={t("lastName")}
          placeholder={t("placeholders.lastName")}
          name="lastName"
          required
        />

      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <TextInput
          label={t("email")}
          placeholder={t("placeholders.email")}
          name="email"
          type="email"
          required
        />
        <TextInput
          label={t("phone")}
          placeholder={t("placeholders.phone")}
          name="phone"
          type="tel"
          required
        />
      </div>

       {/* Row 3 */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectInput
          label={t("region")}
          placeholder={t("placeholders.selectRegion")}
          name="region"
          options={regionOptions}
          required
        />
        <SelectInput
          label={t("productInterest")}
          placeholder={t("placeholders.selectProduct")}
          name="productInterest"
          options={productOptions}
          required
        />
      </div>

      {/* Row 4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectInput
          label={t("quantityRequired")}
          placeholder={t("placeholders.selectQuantity")}
          name="quantity"
          options={quantityOptions}
          required
        />
        <SelectInput
          label={t("preferredPackaging")}
          placeholder={t("placeholders.selectPackaging")}
          name="packaging"
          options={packagingOptions}
          required
        />
      </div>

      {/* Row 4 */}
      <div>
        <TextareaInput
          label={t("message")}
          placeholder={t("placeholders.message")}
          name="message"
          rows={5}
        />
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <CheckboxInput
          name="terms"
          label={t("terms.agree")}
          linkTexts={[
            { text: t("terms.termsOfUse"), href: "#" },
            { text: t("terms.privacyPolicy"), href: "#" },
          ]}
          required
        />
        <Button
          type="submit"
          variant="red"
          size="md"
          className="w-full sm:w-auto"
        >
          {t("submit")}
        </Button>
      </div>
    </form>
  );
}

