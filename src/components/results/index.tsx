import React from "react";

// class Results extends React.Component {
//   render() {
//     return (
//       <section>
//         <pre>
//           {this.props.data
//             ? JSON.stringify(this.props.data, undefined, 2)
//             : null}
//         </pre>
//       </section>
//     );
//   }
// }

type ResultsProps = {
  data: any;
};

const Results = ({ data }: ResultsProps) => {
  return (
    <section>
      <pre>{data ? JSON.stringify(data, undefined, 2) : null}</pre>
    </section>
  );
};

export default Results;
