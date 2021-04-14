using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BookStore.Entities
{
    public partial class Books
    {
        public Books()
        {
            BookComments = new HashSet<BookComments>();
            UserBook = new HashSet<UserBook>();
        }

        public long BookId { get; set; }
        public string BookName { get; set; }
        public string BookAuthor { get; set; }
        public string BookSummary { get; set; }
        public byte[] BookImage { get; set; }
        public decimal BookPrice { get; set; }

        public virtual ICollection<BookComments> BookComments { get; set; }
        public virtual ICollection<UserBook> UserBook { get; set; }
    }
}
