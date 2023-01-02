const History = (props) => {
  return (
    <div>
      {props.history.map((entry) => {
        console.log(entry);
        return <pre>{JSON.stringify(entry, undefined, 2)}</pre>;
      })}
    </div>
  );
};

export default History;
