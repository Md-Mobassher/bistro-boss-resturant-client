const Cover = ({ bgImg, title, subTitle, details }) => {

  return (
    <div
      className="hero min-h-[700px] bg-fixed"
      style={{
        backgroundImage: `url('${bgImg}')`,
      }}
    >

      <div className="hero-content text-center  bg-black opacity-80">
        <div className="lg:w-[1000px] max-w-4xl p-16 text-white opacity-100">
          <h1 className="mb-5 text-4xl font-bold uppercase">{title}</h1>
          <h3 className="text-xl mb-5 font-semibold uppercase">{subTitle}</h3>
          <p className="my-5">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
