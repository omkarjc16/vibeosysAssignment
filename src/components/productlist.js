import { Link } from "react-router-dom";

const ProductList = () => {
    const products = useSelector((state) => state.products || []);
  
    if (!products.length) {
      return <p>No products available. Please add some products.</p>;
    }
  
    return (
      <div>
        <h1>Product List</h1>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Total Cost</th>
              <th>Number of Raw Materials</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <Link to={`/update-product/${product.id}`}>{product.name}</Link>
                </td>
                <td>{product.category}</td>
                <td>{product.totalCost}</td>
                <td>{product.materials.length}</td>
                <td>
                  <Link to={`/update-product/${product.id}`}>Update</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

export default ProductList;
