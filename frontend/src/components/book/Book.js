import './book.css';
import SolidHeartWhiteS from '../../assets/icons/SolidHeartWhiteS.png';


function Book({
  isbn,
  cover_img,
  title,
  author,
  publisher,
  publishedDate,
  genre,
  listing_id,
  onClick,
  handleCloseClick
}) {
  return (
    <div id="book" key={listing_id} onClick={() => onClick && onClick()}>
      <div id="book-container">
        <img id="like-heart" src={SolidHeartWhiteS} alt="" />
        <img id="book-cover" src={cover_img} alt="" />
        <p id="book-title">{title}</p>
        <p id="book-author">{author}</p>
        <p id="book-publisher">{publisher}</p>
        <p id="book-publishedDate">{publishedDate}</p>
        <p id="book-genre">{genre}</p>
        <p id="book-isbn">{isbn}</p>
      </div>
    </div>
  );
}

export default Book;
