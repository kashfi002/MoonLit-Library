import Header from "@/components/Header";
import JoinUs from "@/components/JoinUs";
import Review from "@/components/Review";
import TopBooks from "@/components/TopBooks";
import Image from "next/image";

export default function Home() {
  return (
    <div>
  <Header></Header>
  <TopBooks></TopBooks>
  <Review></Review>
  <JoinUs></JoinUs>
    </div>
  );
}
