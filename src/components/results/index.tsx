type ResultsProps = {
  data: object;
};

export const Results = ({ data }: ResultsProps) => {
  return (
    <section>
      <pre>{data ? JSON.stringify(data, undefined, 2) : null}</pre>
    </section>
  );
};
