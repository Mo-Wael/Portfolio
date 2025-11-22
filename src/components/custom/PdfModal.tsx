
interface IProps {
  open: boolean;
  onClose: () => void;
  pdfUrl: string;
}

const PdfModal = ({ open, onClose, pdfUrl } : IProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-11/12 max-w-4xl h-[90vh] p-4 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold text-gray-800 hover:text-black"
        >
          ×
        </button>

        {/* PDF Viewer */}
        <iframe
          src={pdfUrl}
          className="w-full h-full rounded-md"
        />
      </div>
    </div>
  );
};

export default PdfModal;
