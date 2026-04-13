import type { Metadata } from "next";
import { LookbookPage } from "../../components/lookbook-page";

export const metadata: Metadata = {
  title: "VAGANZA | LookBook",
  description: "Editorial lookbook page for VAGANZA with cinematic video and seasonal collections.",
};

export default function Lookbook() {
  return <LookbookPage />;
}
