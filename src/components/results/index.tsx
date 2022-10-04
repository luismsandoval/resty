type ResultsProps = {
  data: object;
};

const Results = ({ data }: ResultsProps) => {
  return (
    <section>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </section>
  );
};

export default Results;
