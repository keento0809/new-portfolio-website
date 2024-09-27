import { Metadata } from "next";
import { ContactMeSection } from "./_components/contactMeSection/ContactMeSection";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return <ContactMeSection />;
}
