const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl 
        ${
          bigShoeImg === imgURL.bigShoe
            ? "border-coral-red"
            : "border-transparent"
        } 
        cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div
        className="flex justify-center items-center bg-card bg-center bg-cover 
        sm:w-40 sm:h-40 max-sm:w-32 max-sm:h-32 
        rounded-xl max-sm:p-0"
      >
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="w-full h-full object-contain flex-shrink-0"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
