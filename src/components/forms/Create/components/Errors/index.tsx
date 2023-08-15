const Errors = ({ errors }: { errors: string[] }) => (
  <>
    {errors.map(error => (
      <p key={error}>{error}</p>
    ))}
  </>
);

export default Errors;
