import { FaUniversity, FaCode, FaUser } from "react-icons/fa";
import Image from "next/image";

export default function DonateSection() {
  return (
    <div className="relative w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Assets/Payment/PaymentDesktop.png" // Add this image to your public folder
          alt="Donate Background"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-12 lg:py-20 text-white max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Bank Details */}
          <div className="flex-1 space-y-6">
            <h3 className="text-xl font-semibold border-b border-white pb-2 w-fit">
              Transfer via Bank Details
            </h3>
            <div className="flex items-center gap-4">
              <FaUniversity className="text-2xl text-blue-400" />
              <div>
                <p className="font-semibold">Account Number</p>
                <p>97823 74927 894390</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaCode className="text-2xl text-blue-400" />
              <div>
                <p className="font-semibold">IFSC</p>
                <p>BANK1420029ad</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaUser className="text-2xl text-blue-400" />
              <div>
                <p className="font-semibold">Beneficiary Name</p>
                <p>Chhoti si muskaan Org</p>
              </div>
            </div>
          </div>

          {/* Center Text */}
          <div className="flex-1 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              You are making a difference. <br />
              Your impact is meaningful.
            </h2>
          </div>

          {/* QR Code */}
          <div className="flex-1 flex flex-col items-center">
            <h3 className="text-xl font-semibold border-b border-white pb-2 mb-4">
              Transfer Via UPI
            </h3>
            <Image
              src="/Assets/Payment/qr.png" // Save your QR image as public/qr-code.png
              alt="QR Code"
              width={150}
              height={150}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
