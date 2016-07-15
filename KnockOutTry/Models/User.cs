using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KnockOutTry.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string FullName { get; set; }
        public int[] Nros { get; set; } = new[] { 1, 2, 3, 4, 5, 6 };
    }
}