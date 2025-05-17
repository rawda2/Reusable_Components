import React from 'react';

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  error = "",
  success = ""
}) => {
  const borderStyle = error
    ? 'border-red-500'
    : success
    ? 'border-green-500'
    : 'border-gray-300';

  return (
    <div className="mb-4">
      {label && <label className="block mb-1 font-semibold">{label}</label>}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`w-full px-3 py-2 border ${borderStyle} rounded ${disabled ? 'bg-gray-100' : ''}`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">{success}</p>}
    </div>
  );
};

export default InputField;
