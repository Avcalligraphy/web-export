"use client";

import React, { useState } from "react";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import TextareaInput from "./TextareaInput";
import CheckboxInput from "./CheckboxInput";
import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";
import countries from "@/lib/countries";

export default function InquiryForm() {
  const t = useTranslations("contactUs.inquiryForm");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // Simpan reference form sebelum async operation
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      region: formData.get('region'),
      productInterest: formData.get('productInterest'),
      quantity: formData.get('quantity'),
      packaging: formData.get('packaging'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: t('submitSuccess') || 'Thank you! Your inquiry has been sent successfully. We will contact you within 24 hours.'
        });
        // Reset form menggunakan reference yang sudah disimpan
        if (form) {
          form.reset();
        }
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || (t('submitError') || 'Failed to send inquiry. Please try again.')
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: t('submitError') || 'An error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  // Get unique regions from countries and add "others" option
  const uniqueRegions = Array.from(new Set(countries.map(c => c.region)));
  const regionOptions = [
    ...uniqueRegions.map((region, index) => ({
      value: region,
      label: region,
    })),
    { value: "others", label: t("regions.others") || "Others" }
  ];


  const productOptions = [
    { value: "coconut-charcoal", label: t("products.coconutCharcoal") },
    { value: "briquettes", label: t("products.briquettes") },
    { value: "hookah-charcoal", label: t("products.hookahCharcoal") },
  ];

  const quantityOptions = [
    { value: "18", label: t("quantities.1-10") },
    { value: "18-50", label: t("quantities.11-50") },
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        <TextInput
          label={t("email")}
          placeholder={t("placeholders.email")}
          name="email"
          type="email"
          required
        />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TextInput
          label={t("phone")}
          placeholder={t("placeholders.phone")}
          name="phone"
          type="tel"
          required
        />
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

      {/* Row 3 */}
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

      {/* Status Message */}
      {submitStatus.type && (
        <div className={`p-4 rounded-lg border ${
          submitStatus.type === 'success' 
            ? 'bg-green-50 text-green-800 border-green-200' 
            : 'bg-red-50 text-red-800 border-red-200'
        }`}>
          <div className="flex items-start gap-2">
            {submitStatus.type === 'success' ? (
              <svg className="w-5 h-5 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            )}
            <p className="text-sm font-medium">{submitStatus.message}</p>
          </div>
        </div>
      )}

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
          disabled={isSubmitting}
        >
          {isSubmitting ? (t('submitting') || 'Sending...') : t("submit")}
        </Button>
      </div>
    </form>
  );
}

