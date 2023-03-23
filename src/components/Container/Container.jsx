const Container = ({ children }) => {
  return (
    <div className="center">
      <div className="calcuator-grid">{children}</div>;
    </div>
  );
};

export default Container;
