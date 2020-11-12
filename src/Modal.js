import React from 'react'

import { Carousel, Modal } from 'react-bootstrap';
import CloseIcon from './close'
const Model = (props) => {
  const { name, price, hero, images } = props;
  const [showModal, setShowModal] = React.useState(false);
  const handleOpen = () => images.map((val)=>val ? setShowModal(true):setShowModal(false));
  const handleClose = () => setShowModal(false);
  const { Item } = Carousel;
  const { Body } = Modal;
  
  const styles = {
    backgroundImage: `url(${hero['href']})`,
  }
  return (
    <div className='contentModal'>
      <div className="image-list" onClick={handleOpen} >
        <label><span>{name}</span></label>
        <div className="image"style={styles}>
        <span className="price" >{price}</span>
        </div>
      </div>
      {showModal? (

        <Modal show={showModal} onHide={handleClose}>
        <Body >
     <span onClick={handleClose} className='model-close' >
              <CloseIcon />
            </span>
            <Carousel>
              {images.map((val, index) => {
                console.log(val.href ,'111')
                return (
                  <Item key={index}>
                    {val.href ?
                    <img
                      key={index}
                      src={val.href}
                    /> : handleClose}
                  </Item>
                )
              })}
            </Carousel>

          </Body>
        </Modal>
      ) : ''}
    </div>
  )

}

export default Model
