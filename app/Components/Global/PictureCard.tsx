

type PictureCardProps = {
  image: string;
  text: string;
  head: string;
  button?: boolean; // optional text for button
  subtitle: string;
};

const PictureCard: React.FC<PictureCardProps> = ({ image, text, button, head, subtitle }) => {
  return (
    <div
      className="relative  h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] rounded-2xl overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top overlay */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 text-white">
        <h2 className="text-[8px] md:text-sm  ">{head}</h2>
       
      </div>
      <div className="absolute bottom-4 right-2 md:bottom-4 xl:bottom-8 md:right-6  ">
         {button && (
          <button className="mt-2 px-3 py-1 md:px-4 md:py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
            <h1 className="md:text-base text-[9px]">Try Now</h1>
            {button}
          </button>
        )}
      </div>

      {/* Bottom overlay */}
      <div className="absolute bottom-0 left-1 md:bottom-4 xl:bottom-8 md:left-6 w-[90%] md:w-[75%]  text-white p-4 rounded-lg">
        <h3 className="font-semibold text-sm md:text-[20px]">{subtitle}</h3>
        <p className="md:mt-2 mt-0 text-[11px] md:text-[16px] font-light leading-relaxed ">{text}</p>
      </div>
    </div>
  );
};

export default PictureCard;
