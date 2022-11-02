export default function CommonTable({
  itemsProduction,
  
  columns,
  prevHandler,
  nextHandler,
  currentPage,
}) {
  console.log(itemsProduction);
  console.log(columns)
  return (
    <>
      {/* <h2>Page: {items ? currentPage : 0}</h2> */}
      <button onClick={prevHandler}>Prev</button>
      <button onClick={nextHandler}>Next</button>

      <table className="table table-striped-columns">
        <thead>
          <tr>
            {columns &&
              columns.length > 0 &&
              columns.map((column, index) => (
                <th key={`col-${index}`}>{column}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {/* {itemsProduction ? (
            itemsProduction.length > 0 &&
            itemsProduction.map((item) => (
              
              <tr key={item.id}>
                <td>
                  <button className="btn btn-secondary">Edit</button>
                  <button className="btn btn-secondary">Delete</button>
                </td>
                <td>{item.id}</td>
                <td>{item.wellname}</td>
                <td>{item?.wellapi}</td>
                <td>{item?.boreid}</td>
                <td>{item?.compsubid}</td>
                <td>{item?.type}</td>
                <td>{item?.x}</td>
                <td>{item?.y}</td>
                <td>{item?.td}</td>
                <td>{item?.ishorizontal}</td>
                <td>{item?.reservoir}</td>
                <td>{item?.faultblock}</td>
                <td>{item?.compartment}</td>
                <td>{item?.maxbhp}</td>
                <td>{item?.long}</td>
                <td>{item?.lat}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No data</td>
            </tr>
          )} */}
        </tbody>
      </table>
    </>
  );
}
