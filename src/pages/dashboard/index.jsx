export const Dashboard = () => {
  return (
    <>
      <Header
        setWordSearch={setWordSearch}
        products={products}
        setFilteredProducts={setFilteredProducts}
      />
      <main className={"container"}>
        <ProductList
          wordSearch={wordSearch}
          setWordSearch={setWordSearch}
          products={filteredProducts.length != 0 ? filteredProducts : products}
          setFilteredProducts={setFilteredProducts}
          cartList={cartList}
          setCartList={setCartList}
        />
        <Cart cartList={cartList} setCartList={setCartList} />
      </main>
    </>
  );
};
