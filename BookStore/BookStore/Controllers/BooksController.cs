using BookStore.CustomEntities;
using BookStore.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookStore.Controllers
{

    [ApiController]
    [Route("[controller]/[action]")]
    public class BooksController : ControllerBase
    {
        private readonly BookStoreDbContext _bookStoreDbContext;
        public BooksController(BookStoreDbContext bookStoreDbContext)
        {
            _bookStoreDbContext = bookStoreDbContext;
        }

        [HttpGet]
        [Authorize]
        public async Task<Object> GetBooks()
        {
            List<Books> booksList = _bookStoreDbContext.Books.ToList();
            return booksList;
        }

        [HttpPost]
        public async Task<Object> AddBook(Books book)
        {
            _bookStoreDbContext.Books.Add(book);
            _bookStoreDbContext.SaveChanges();
            return Ok();
        }


        [HttpDelete]
        public async Task<Object> DeleteBook(long bookId)
        {
            var Obj = _bookStoreDbContext.Books.FirstOrDefault(x => x.BookId == bookId);
            _bookStoreDbContext.Remove(Obj);
            _bookStoreDbContext.SaveChanges();
            return Ok();
        }

        [HttpPost]
        public async Task<Object> UpdateBook(Books book)
        {
            var studentObj = _bookStoreDbContext.Books.FirstOrDefault(x => x.BookId == book.BookId);
            studentObj.BookName = book.BookName;
            studentObj.BookAuthor = book.BookAuthor;
            studentObj.BookSummary = book.BookSummary;
            studentObj.BookImage = book.BookImage;
            studentObj.BookPrice = book.BookPrice;

            _bookStoreDbContext.Books.Update(studentObj);
            _bookStoreDbContext.SaveChanges();
            return Ok();
        }


        [HttpGet]
        public Books GetBookById(long bookId)
        {
            Books obj = _bookStoreDbContext.Books.FirstOrDefault(e => e.BookId == bookId);
            return obj;
        }


        [HttpGet]
        public Books Testing(long bookId,long userId)
        {
            return _bookStoreDbContext.Books.FirstOrDefault(e => e.BookId == bookId);
        }

        [HttpPost]
        public async Task<Object> AddToBookList(long userId, long bookId)
        {
            try
            {
                var userBookObj = new UserBook()
                {
                    UserId = userId,
                    BookId = bookId
                };
                _bookStoreDbContext.UserBook.Add(userBookObj);
                _bookStoreDbContext.SaveChanges();
            }
            catch (Exception e)
            {
                return BadRequest(new { message = "Can't be Added" });
            }
            return Ok();

        }




        [HttpDelete]
        // [Authorize]
        public async Task<Object> RemoveFromBookList(long userId, long bookId)
        {
            var Obj = _bookStoreDbContext.UserBook.FirstOrDefault(x => x.BookId == bookId && x.UserId == userId);

            if (Obj == null)
            {
                return BadRequest(new { message = "The list has no entries!" });
            }
            else
            {

                _bookStoreDbContext.Remove(Obj);
                _bookStoreDbContext.SaveChanges();
                return Ok(new { message = "Book Removed from BookList" });

            }

        }


        [HttpGet]
        // [Authorize]
        public async Task<Object> GetBookComments(long bookId)
        {
            //Change it according to enum
            List<UserCommentModel> userCommentObj;
            try
            {
                userCommentObj = _bookStoreDbContext.UserCommentModel.FromSqlRaw("exec [dbo].[GetComments]" + bookId).ToList();
            }
            catch (Exception e)
            {
                return BadRequest(new { message = "No Comments Found" });
            }
            return Ok(userCommentObj);

        }

        [HttpPost]
        public IActionResult AddComment(long userId, long bookId, string comment)
        {
            BookComments obj = new BookComments()
            {
                UserId = userId,
                BookId = bookId,
                Comment = comment
            };

            _bookStoreDbContext.Add(obj);
            _bookStoreDbContext.SaveChanges();
            return Ok();
        }




        [HttpGet]
        // [Authorize]
        public async Task<Object> GetBookList(long id)
        {
            //Change it according to enum
            List<Users> temp = _bookStoreDbContext.Users.ToList();
            if (temp == null)
                return BadRequest(new { message = "No Co-owner Found" });
            return Ok(temp);

        }


        [HttpGet]
        // [Authorize]
        public async Task<Object> GetMyBookList(long id)
        {
            List<UserBookModel> userBookObj;

           // id.GetType();
            //Change it according to enum
            try
            {
                userBookObj = _bookStoreDbContext.UserBookModel.FromSqlRaw("exec [dbo].[GetMyBookList] = @userId  " + id).ToList();
            }
            catch (Exception e)
            {

                return BadRequest(new { message = "Nothing Found in your Book" });
            }
            return Ok(userBookObj);

        }


    }
}
