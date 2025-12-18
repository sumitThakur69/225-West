"use client";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

interface ShareButtonsProps {
  title: string;
  description?: string;
}

export default function ShareButtons({ title, description }: ShareButtonsProps) {
  const url =
    typeof window !== "undefined" ? window.location.href : "";

  const handleShare = (platform: "facebook" | "twitter" | "instagram") => {
    if (!url) return;

    if (platform === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        "_blank"
      );
    }

    if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
        "_blank"
      );
    }

    if (platform === "instagram") {
      navigator.clipboard.writeText(url);
      alert("Link copied. Paste it on Instagram.");
      window.open("https://www.instagram.com/", "_blank");
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <span className="text-sm font-light text-(--west-bg-secondary)">
        Share on
      </span>

      <div className="flex gap-4">
        <button onClick={() => handleShare("facebook")} className="icon-circle icon-circle-dark">
          <FaFacebook className="text-2xl" />
        </button>

        <button onClick={() => handleShare("twitter")} className="icon-circle icon-circle-dark">
          <FaTwitter className="text-2xl" />
        </button>

        <button onClick={() => handleShare("instagram")} className="icon-circle icon-circle-dark">
          <FaInstagram className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
