using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KnockOutTry.Models
{
    public class ProductiveMinViewModel
    {
        public List<ProductiveMinFTEsItem> FtesItems { get; set; }
        public bool IsReadOnly { get; set; } = true;
        public int MonthSelected { get; set; }

        public ProductiveMinViewModel() { }
        public ProductiveMinViewModel(List<ProductiveMinFTEsItem> items)
        {
            FtesItems = items;
            MonthSelected = 1;
            IsReadOnly = true;
        }
    }
}