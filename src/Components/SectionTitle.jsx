const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="w-[450px] mx-auto pb-14">
      <div className="text-center italic pb-3">
        <h4 className="text-xl text-yellow-500">--- {subtitle} ---</h4>
      </div>
      <div className="text-center border-y-4 py-4">
        <h2 className="text-4xl font-semibold ">{title}</h2>
      </div>
    </div>
  );
};

export default SectionTitle;
