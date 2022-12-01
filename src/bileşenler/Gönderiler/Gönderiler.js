import React from 'react';
import Gönderi from './Gönderi';
import './Gönderiler.css';

const Gönderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiyiBegen, gonderiler } = props;

  return (
  <div className="posts-container-wrapper">
    {" "}
     {gonderiler.map((armut) => (
     <Gönderi gönderi={armut} gonderiyiBegen={gonderiyiBegen} key={armut.id} />
    ))}
  </div>
  );
};

export default Gönderiler;
