export default (req, res) => {
  res.statusCode = 500;
  res.json({ userName: 'Vrime' });
};

// TimeLine.getInitialProps = () => {
//   return fetch('../api/App')
//     .then(res => res.json()
//     )
// };
