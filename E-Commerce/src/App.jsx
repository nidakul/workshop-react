import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Header from './components/Header'
import Loading from './components/Loading'
import RouterConfig from './config/RouterConfig'
import PageContainer from './container/PageContainer'
import Drawer from '@mui/material/Drawer';
import { calculateBasket, removeToBasket, setDrawer } from './redux/slices/basketSlice'
import { useEffect, useState } from 'react'


function App() {
  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  const [selectedProductId, setSelectedProductId] = useState();
  console.log(selectedProductId);

  useEffect(() => {
    dispatch(removeToBasket(selectedProductId));
    dispatch(calculateBasket());
  }, [selectedProductId])

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer className='drawer' anchor='right' open={drawer} onClose={() => dispatch(setDrawer())}>
          {
            products && products.map((product, index) => {
              return (
                <div key={product.id}>
                  <div className='flex-row' style={{
                    padding: '20px'
                  }}>
                    <img style={{
                      marginRight: '5px'
                    }} src={product.image} width={50} height={50} />
                    <p style={{ width: '320px' }}>{product.title}({product.count})</p>
                    <p style={{ fontWeight: 'bold', marginRight: '10px', width: '60px' }}>{product.price}TL</p>
                    <button onClick={() => setSelectedProductId(product.id)} className='delete-btn'>sil</button>
                  </div>
                </div>
              )
            })
          }
          <div>
            <p style={{ textAlign: 'center' }}>Toplam tutar : {totalAmount}</p>
          </div>
        </Drawer>
      </PageContainer>
    </div >
  )
}

export default App
