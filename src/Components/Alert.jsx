const Alert = ({ type = 'info', message }) => {
  const styles = {
    success: 'alert alert-success',
    error: 'alert alert-danger',
    info: 'alert alert-info'
    
  };

  return (
    <div className={styles[type]}>
      {message}
    </div>
  );
};

export default Alert;
