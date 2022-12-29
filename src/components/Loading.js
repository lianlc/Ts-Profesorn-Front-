import Lottie from "lottie-react";
import loader from "../loarder.json";

const Loading = () => {
  return (
    <>
      <p className="mt-6 text-lg leading-8 text-[#007ACC] sm:text-center ">
        Analizando error
      </p>

      <Lottie
        animationData={loader}
        loop={true}
        style={{
          width: "500px",
          height: "500px",
          margin: "-140px auto 0 auto",
        }}
      />
    </>
  );
};

export default Loading;
