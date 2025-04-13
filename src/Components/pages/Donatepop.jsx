import React from "react";
import { Card, CardContent } from "../ui/Card";
import { Button } from "../ui/Button";
import Image from "next/image";

const DonationPopup = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <Card className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
        {/* Left Side */}
        <div className="bg-cyan-100 flex flex-col items-center justify-center p-6 text-center">
          <Image
            src="\Assets\Payment_popup\illustration.svg"
            alt="Donate Illustration"
            width={200}
            height={200}
            className="mb-4"
          />
        </div>

        {/* Right Side */}
        <div className="bg-gray-100 p-6 space-y-4">
          <p className="text-sm text-gray-700">
            Pay 20, 50, 100 every month and help making this world fair and happy for all.
          </p>
          <p className="text-sm text-gray-700">
            While doing payment add your name, mobile number and email in note, It helps track donations.
          </p>

          <div className="bg-green-200 rounded-lg p-4">
            <p><strong>Account Number:</strong> 48495 484938 48495</p>
            <p><strong>IFSC:</strong> BANK35935WRG</p>
            <p><strong>Beneficiary Name:</strong> Chhoti si muskaan org</p>
          </div>

          <div className="bg-green-200 p-4 rounded-lg">
  <p className="font-semibold mb-4">
    Donate money by Scanning QR with any UPI APP.
  </p>

  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
    {/* QR Code on the left */}
    <Image
      src="/Assets/Payment_popup/qr.png"
      alt="QR Code"
      width={120}
      height={120}
      className="shrink-0"
    />

    {/* Payment methods on the right */}
    <div className="flex flex-col items-center sm:items-start justify-between h-full gap-2">
      <div className="flex gap-4">
        <Image
          src="/Assets/Payment_popup/image 6.png"
          alt="Paytm"
          width={30}
          height={30}
        />
        <Image
          src="/Assets/Payment_popup/image 7.png"
          alt="PhonePe"
          width={30}
          height={30}
        />
        <Image
          src="/Assets/Payment_popup/image 8.png"
          alt="GPay"
          width={30}
          height={30}
        />
      </div>
      <Image
        src="/Assets/Payment_popup/image 9.png"
        alt="BHIM"
        width={60}
        height={30}
        className="mt-2"
      />
    </div>
  </div>
</div>


          <div className="pt-4 text-right">
            <Button variant="outline">Close</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DonationPopup;
