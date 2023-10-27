const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="lg:w-[450px] w-[350px] mx-auto pb-10">
      <div className="text-center italic pb-3">
        <h4 className="lg:text-xl text-md text-yellow-500">--- {subtitle} ---</h4>
      </div>
      <div className="text-center border-y-4 lg:py-4 py-2">
        <h2 className="lg:text-4xl text-2xl font-semibold ">{title}</h2>
      </div>
    </div>
  ); 
};

export default SectionTitle;
