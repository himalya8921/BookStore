using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BookStore.CustomEntities
{
    public class UserCommentModel
    {
        [Key]
        public long UserCommentId { get; set; }
        public string UserName { get; set; }
        public string Comment { get; set; }
    }
}
