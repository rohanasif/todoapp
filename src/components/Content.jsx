const Content = ({ items }) => {
  return items.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
};

export default Content;
