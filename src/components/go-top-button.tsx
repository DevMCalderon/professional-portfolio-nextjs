import { CircleArrowUp } from "lucide-react";

export default function GoTopButton() {
  return (
    <div className="floating-button svg_link2" id="goTopBtn">
      <a href="#top" aria-label="Back to top">
        <CircleArrowUp />
      </a>
    </div>
  );
}
