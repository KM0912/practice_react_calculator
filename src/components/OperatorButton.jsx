export const OperatorButton = (props) => {
  const { children, className, onClick } = props;
  return (
    <>
      <div className={className} onClick={() => onClick()}>
        {children}
      </div>
    </>
  );
};
