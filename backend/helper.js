import dotenv from "dotenv";
// import { v4 as uuidv4 } from 'uuid';

dotenv.config();

// BOOKS

export async function getBooks(pool) {
  const query = "SELECT * FROM books;";
  const result = await pool.query(query);
  console.table(result.rows);
  return result.rows;
}

// GET BOOK BY transitionDelay: 

export async function getBookByTitle(pool, title) {
  try {
    const result = await pool.query("SELECT * FROM books WHERE LOWER(title) = $1", [title.toLowerCase()]);
    if (result.rows.length > 0) {
      return result.rows[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error executing query:", error);
    return null;
  }
}


// LISTINGS

// get my listings
export async function getMyListings(pool) {
  try {
    const query =
      "SELECT listings.*, users.* FROM listings JOIN users ON listings.user_id = users.id WHERE listings.user_id = 1 ORDER BY listings.listing_id DESC;";
    const result = await pool.query(query);
    console.table(result.rows);
    return result.rows;
  } catch (error) {
    console.error("Error executing query:", error);
    return null;
  }
}

// get others' listings
export async function getOthersListings(pool) {
  try {
    const query =
      "SELECT listings.*, users.* FROM listings JOIN users ON listings.user_id = users.id WHERE listings.user_id != 1 ORDER BY listings.listing_id DESC;";
    const result = await pool.query(query);
    console.table(result.rows);
    return result.rows;
  } catch (error) {
    console.error("Error executing query:", error);
    return null;
  }
}

// post a new listing into the database
export async function postListing(pool, newListing) {
  try {
    const values = [
      newListing.title,
      newListing.author,
      newListing.isbn,
      newListing.cover_img,
      newListing.condition,
      newListing.notes,
      newListing.user_id,
    ];

    const postQuery =
      "INSERT INTO listings (title, author, isbn, cover_img, condition, notes, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7)";
    const result = await pool.query(postQuery, values);
    console.table(result.rows);
    return result.rows;
  } catch (error) {
    console.error("Error executing query:", error);
    return null;
  }
}

// USERS
