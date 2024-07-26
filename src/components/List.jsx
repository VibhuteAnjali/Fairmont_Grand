/* eslint-disable react/prop-types */
export default function List({ list }) {
  return (
    <div className="list-container">
      {list.map((item, index) => {
        return (
          <div key={index} className="list-box">
            <img src={item.img} />
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}
