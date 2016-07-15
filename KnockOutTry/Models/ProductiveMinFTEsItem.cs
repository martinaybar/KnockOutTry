using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KnockOutTry.Models
{
    public class ProductiveMinFTEsItem
    {
        public virtual long Id { get; set; }

        public virtual long TargetId { get; set; }

        public virtual int UnitNum { get; set; }
        public virtual int DeptNum { get; set; }
        public virtual DateTime EffMonthDate { get; set; }
        public virtual char DefinedBY { get; set; }

        public virtual decimal MinHoursSun { get; set; }
        public virtual decimal MinHoursMon { get; set; }
        public virtual decimal MinHoursTue { get; set; }
        public virtual decimal MinHoursWed { get; set; }
        public virtual decimal MinHoursThu { get; set; }
        public virtual decimal MinHoursFri { get; set; }
        public virtual decimal MinHoursSat { get; set; }

        public virtual decimal TargetMinHours { get; set; }

        public virtual decimal ProductiveMin { get; set; }

        public virtual DateTime LastUpdateDate { get; set; }


        public ProductiveMinFTEsItem()
        {
        }
    }
}