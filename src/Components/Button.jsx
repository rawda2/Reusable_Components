import React from 'react';

const Button = ({
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon,
  children,
  onClick
}) => {
  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    success: "bg-success text-white",
    danger: "bg-danger text-white",
    warning: "bg-warning text-dark",
    info: "bg-info text-white",
    light: "bg-light text-dark",
    dark: "bg-dark text-white"
  };

  const sizes = {
    sm: "btn-sm",
    md: "",        // default bootstrap size
    lg: "btn-lg"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${variants[variant] || variants.primary} ${sizes[size] || ''} d-flex align-items-center gap-2 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {icon && <span className="me-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
