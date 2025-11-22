import { useState } from "react";
import PdfModal from "./PdfModal";
import { ShimmerButton } from "../ui/shimmer-button";

export default function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <ShimmerButton
        className="shadow-2xl flex-1 fs-xl"
        onClick={() => setOpen(true)}
      >
        View CV
      </ShimmerButton>

      {/* Modal */}
      <PdfModal
        open={open}
        onClose={() => setOpen(false)}
        pdfUrl="/cv.pdf"   // put your CV in /public folder
      />
    </div>
  );
}
