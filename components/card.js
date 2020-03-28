export default ({ title, imgSrc, imgAlt, description }) => (
  <div className="flex flex-col items-center px-12 py-12 mb-10 text-center bg-white rounded-lg shadow md:justify-between md:even:pl-8 md:pr-8 md:px-12 lg:px-16 md:text-left md:flex-row-reverse md:even:flex-row">
    <div className="md:flex-1 md:max-w-xs">
      <img src={imgSrc} alt={imgAlt} />
    </div>
    <div className="mt-12 md:mt-0 md:flex-1 md:max-w-md">
      <h2 className="mb-4 text-2xl font-bold font-heading md:text-2xl">
        {title}
      </h2>
      <p className="text-base text-blue md:text-base">{description}</p>
    </div>
  </div>
);
