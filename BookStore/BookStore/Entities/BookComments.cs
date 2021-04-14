using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace BookStore.Entities
{
    public partial class BookComments
    {
        public long BookCommentId { get; set; }
        public long UserId { get; set; }
        public long BookId { get; set; }
        public string Comment { get; set; }

        public virtual Books Book { get; set; }
        public virtual Users User { get; set; }
    }
}
