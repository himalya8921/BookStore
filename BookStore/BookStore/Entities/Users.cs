using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BookStore.Entities
{
    public partial class Users
    {
        public Users()
        {
            BookComments = new HashSet<BookComments>();
            UserBook = new HashSet<UserBook>();
        }

        public long UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Address { get; set; }
        public int? Role { get; set; }
        public string FullName { get; set; }

        public virtual ICollection<BookComments> BookComments { get; set; }
        public virtual ICollection<UserBook> UserBook { get; set; }
    }
}
