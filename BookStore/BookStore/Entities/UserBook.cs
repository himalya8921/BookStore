using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BookStore.Entities
{
    public partial class UserBook
    {
        public long UserBookId { get; set; }
        public long UserId { get; set; }
        public long BookId { get; set; }

        public virtual Books Book { get; set; }
        public virtual Users User { get; set; }
    }
}
