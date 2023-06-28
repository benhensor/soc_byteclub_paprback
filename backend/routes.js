import {
  getBooks,
  getBookByTitle,
  getMyListings,
  getOthersListings,
  postListing,
} from "./helper.js";

export default function Routes(app, pool) {
  // BOOKS
  app.get("/", (req, res) => {
    res.json({
      status: true,
      payload: "This route works!",
    });
  });
 // Get all books
app.get("/api/books", async function (req, res) {
  try {
    const result = await getBooks(pool);
    if (result) {
      res.json({ success: true, payload: result });
    } else {
      res.send("No books found");
    }
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

  // Get a single book by title
  app.get("/api/books/:title", async function (req, res) {
    try {
      const result = await getBookByTitle(pool, req.params.title);
      if (result.rows.length > 0) {
        res.json({ success: true, payload: result.rows });
      } else {
        res.send("No book found");
      }
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });
 
  // LISTINGS

  // Get a single book from Listings by isbn
  app.get("/api/listings/:isbn", async function (req, res) {
    try {
      const result = await pool.query(
        "SELECT * FROM listings WHERE isbn = $1",
        [req.params.isbn]
      );
      const book = result.rows[0];
      if (book) {
        res.json({ success: true, payload: result.rows });
      } else {
        res.send("No book found");
      }
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  // Get book from listings by title
  app.get("/api/listings/:title", async function (req, res) {
    try {
      const result = await pool.query(
        "SELECT * FROM listings WHERE LOWER(title) = $1",
        [req.params.title.toLowerCase()]
      );
      if (result.rows.length > 0) {
        res.json({ success: true, payload: result.rows });
      } else {
        res.send("No listing found");
      }
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  // app.get("/api/listings/:title", async function (req, res) {
  //   try {
  //     const searchTerm = req.params.title.toLowerCase(); // Convert the search term to lowercase

  //     const result = await client.query(
  //       "SELECT * FROM listings WHERE LOWER(title) = $1",
  //       [searchTerm]
  //     );

  //     if (result.rows.length > 0) {
  //       res.json({ success: true, payload: result.rows });
  //     } else {
  //       res.send("No listing found");
  //     }
  //   } catch (error) {
  //     console.error("Error executing query:", error);
  //     res.status(500).json({ success: false, error: "Internal server error" });
  //   }
  // // });

  // Get a single book from books table by isbn or title
  app.get("/api/books/:isbntitle", async function (req, res) {
    try {
      const result = await pool.query(
        "SELECT * FROM listings WHERE isbn = $1 OR LOWER(title) = $1",
        [req.params.isbntitle.toLowerCase()]
      );
      const book = result.rows[0];
      if (book) {
        res.json({ success: true, payload: result.rows });
      } else {
        res.send("No book found");
      }
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  // Get all Listings (mylistngs + other listings)
  app.get("/api/listings", async function (req, res) {
    try {
      const myListings = await getMyListings(pool);
      const othersListings = await getOthersListings(pool);
      const body = { success: true, payload: { myListings, othersListings } };

      res.json(body);
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  }); 
 
  // List a book
  app.post("/api/listings", async function (req, res) {
    try {
      const result = await postListing(pool, req.body);

      if (result) {
        res.json({ success: true, payload: result });
      } else {
        res.status(500).json({ success: false, error: "Book not listed" });
      }
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  // Delete a Listing
  app.delete("/api/listings/:id", async function (req, res) {
    try {
      const result = await pool.query("DELETE FROM listings WHERE id = $1", [
        req.params.id,
      ]);
      if (result) {
        res.json({ success: true, payload: result.rows });
      } else {
        res.send("Listing not deleted");
      }
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  const closeDatabaseConnection = () => {
    pool
      .end()
      .then(() => {
        console.log("Database connection closed");
        process.exit(0);
      })
      .catch((error) => {
        console.error("Error closing database connection:", error);
        process.exit(1);
      });
  };

  process.on("SIGINT", closeDatabaseConnection);
  process.on("SIGTERM", closeDatabaseConnection);
}
