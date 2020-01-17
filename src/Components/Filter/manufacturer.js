import ProductsService from 'services/products.service';

const createManufacturer = () => {
  let products;
  try {
    products = ProductsService.getProducts();
  } catch (err) {
    products = [];
  }

  const manufacturer = products.reduce( (acc, curr) => {
    let occured = acc.some( object => object.name === curr.manufacture );
    if( !occured ) {
      acc.push( {name: curr.manufacture, checked: ''} )
    }
    return acc;
  }, [{name: 'all', checked: 'checked'}] );

  return manufacturer;
}

export default createManufacturer;