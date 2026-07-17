import { redirect } from "next/navigation";

export default function ChatRedirectPage() {
  // İstifadəçini birbaşa əsas chat olan ana səhifəyə atır
  redirect("/");
}