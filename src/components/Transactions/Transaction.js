import TransactionList from "./TransactionList";

function Transaction({ name, data }) {

  return (
    <div className='card'>
      <h4 className='card-title text-center mt-4'>{name}</h4>

      {data.trans.length > 0 
      ?
        <div className="card-body">
          <TransactionList data={data.trans} />
          { data.seeMore 
            &&
              <button
                className="btn btn-outline-primary block"
                type="submit">
                  See More
              </button>
          }

        </div>
        : 
        `No ${name}s yet`}

    </div>
  );
}

export default Transaction;