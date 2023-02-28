import React from 'react'

const FavoriteTable = () => {
    return (
        <div>
            
            <div className="d-flex justify-content-center">
            <table className="table table-striped m-2 w-75 table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" className="h5">Stock/Crypto</th>
                        <th scope="col" className="h5">Price</th>
                        <th scope="col" className="h5">Change</th>
                        <th scope="col" className="h5">Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {/* {
                        stocks && stockListSort.map((stock, index) => {
                            return (
                                <tr key={index}>
                                    <td className="align-middle">
                                        <Link to={"/stock/view/" + stock._id}>
                                            {stock.name}
                                        </Link>
                                    </td>
                                    <td className="align-middle">
                                        {stock.type}
                                    </td>
                                    <td>
                                    <Link to={"/view/" + stock._id}>
                                    <button className="btn btn-primary m-2">View</button>
                                        </Link>
                                        |
                                        OR
                                    <button onClick={(e) => removeFavorite(eachCoin._id)} className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    } */}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default FavoriteTable