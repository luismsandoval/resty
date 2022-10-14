type ResultsProps = {
  data: object | undefined;
};

export const Results = ({ data }: ResultsProps) => {
  return (
    <section>
      <pre>{data ? JSON.stringify(data, undefined, 2) : null}</pre>
    </section>
  );
};
