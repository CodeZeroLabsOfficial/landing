import type { Metadata } from "next";
import { ProductPage } from "@/components/ProductPage";
import { products } from "@/lib/content";

export const metadata: Metadata = {
  title: "Code Zero Clinic — Modern care, from booking to follow-up",
  description:
    "A calm, secure patient platform for GP clinics and medical centers: online bookings, telehealth, e-scripts, and reminders that reduce no-shows.",
};

export default function ClinicPage() {
  return <ProductPage content={products.clinic} />;
}
