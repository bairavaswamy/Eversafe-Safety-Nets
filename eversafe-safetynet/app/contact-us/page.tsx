import { generateMetadata } from "./contact-metadata";
import ContactPageClient from "./ContactPageClient"; // your client form component

export { generateMetadata }; // Next.js will use this

export default function Page() {
  return <ContactPageClient />;
}