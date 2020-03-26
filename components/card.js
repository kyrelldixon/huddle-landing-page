export default ({ title, imgSrc, imgAlt, description }) => (
  <div className="bg-white shadow rounded-lg text-center p-8 mb-10">
    <img src={imgSrc} alt={imgAlt} />
    <h2 className="text-xl font-bold font-heading mt-12 mb-4">{title}</h2>
    <p className="text-sm text-blue">{description}</p>
  </div>
);