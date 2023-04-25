import React from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import ImageModal from '../components/ImageModal';

function ImageModalContainer() {
  // 0. Org Code
  // const { modalVisible, bgColor, src, alt } = useSelector(state => ({
  //   modalVisible: state.imageModal.modalVisible,
  //   bgColor: state.imageModal.bgColor,
  //   src: state.imageModal.src,
  //   alt: state.imageModal.alt,
  // }));

  // Case 1. 객체 반환 값 분리
  // const modalVisible = useSelector(state => state.imageModal.modalVisible);
  // const bgColor = useSelector(state => state.imageModal.bgColor);
  // const src = useSelector(state => state.imageModal.src);
  // const alt = useSelector(state => state.imageModal.alt);

  // Case 2. Equality Function 사용
  const { modalVisible, bgColor, src, alt } = useSelector(state => ({
    modalVisible: state.imageModal.modalVisible,
    bgColor: state.imageModal.bgColor,
    src: state.imageModal.src,
    alt: state.imageModal.alt,
  }),
      shallowEqual
  );

  return (
    <ImageModal
      modalVisible={modalVisible}
      bgColor={bgColor}
      src={src}
      alt={alt}
    />
  );
}

export default ImageModalContainer;
