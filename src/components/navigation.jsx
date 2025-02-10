import Image from "next/image";

export default function Navigation({ onBack, onNext }) {
    return (
      <div className="flex space-x-4 mt-4">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="p2"
        >
          <Image src="/back.png" 
          alt="Back"
          width={50}   // Adjust width based on your preference
          height={50} />
        </button>
        

        {/* Tulip */}

        <Image src="/tulips.png"
        alt="tulips"
        width={50}
        height={50}
        className="p2"
        />

        {/* Next Button */}
        <button
          onClick={onNext}
          className="p2"
        >
          <Image src="/next.png" 
          alt="Next"
          width={50}   // Adjust width based on your preference
          height={50} />
        </button>
      </div>
    );
  }
  