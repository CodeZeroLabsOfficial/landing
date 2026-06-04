import type { Metadata } from "next";
import { ProductPage } from "@/components/ProductPage";
import { products } from "@/lib/content";

export const metadata: Metadata = {
  title: "Code Zero Gym — Memberships, classes and gains in one app",
  description:
    "A bold member app and gym management platform: class bookings, memberships, QR check-in, and workout tracking that keep members coming back.",
};

export default function GymPage() {
  return <ProductPage content={products.gym} />;
}
