using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BookStore.CustomEntities
{
    public class UserBookModel
    {
        [Key]
        public long BookId { get; set; }
        public string BookName { get; set; } 
        public string BookAuthor { get; set; } 
        public string BookImage { get; set; } 
        public string BookPrice { get; set; } 
      



    }
}
