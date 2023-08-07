import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, openModal, largeImageURL, tag }) => {
  return (
    <li className={styles.galleryItem} onClick={openModal}>
      <img
        className={styles.img}
        src={webformatURL}
        alt={tag}
        title={largeImageURL}
      />
    </li>
  );
};

export default ImageGalleryItem;
