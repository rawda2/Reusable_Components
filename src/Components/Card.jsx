import React from 'react';

const Card = ({ image, title, subtitle, children }) => {
  return (
    <div className="border rounded-lg shadow p-4 max-w-sm">
      {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded" />}
      {title && <h2 className="text-lg font-bold mt-2">{title}</h2>}
      {subtitle && <p className="text-sm text-gray-500 mb-2">{subtitle}</p>}
      {children}
    </div>
  );
};

export default Card;
