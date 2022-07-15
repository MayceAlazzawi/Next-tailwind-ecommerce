import data from '../../utils/data'
import { useRouter } from 'next/router';
import React from 'react'
import Layout from '../../components/Layout'

const productScreen = () => {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find(x => x.slug === slug)
  if (!product) {
    return <div>Product Not Found</div>
  }
  return (
    <Layout title={product.name}>
      {product.name}
    </Layout>
  )
}

export default productScreen