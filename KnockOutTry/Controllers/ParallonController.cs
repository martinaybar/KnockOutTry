using KnockOutTry.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KnockOutTry.Controllers
{
    public class ParallonController : Controller
    {
        // GET: Parallon
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ProdcutiveMin()
        {
            ProductiveMinFTEsItem prod = new ProductiveMinFTEsItem() { TargetId = 1, ProductiveMin = 55, MinHoursSun = 0, MinHoursMon = 1, MinHoursTue = 2, MinHoursWed = 3, MinHoursThu = 4, MinHoursFri = 5, MinHoursSat = 6, TargetMinHours = 7, DefinedBY = 'M', EffMonthDate = new DateTime(2016, 1 + 1, 1) };

            return View(prod);
        
        }

        public JsonResult GetProductiveItems()
        {
            var items = new List<ProductiveMinFTEsItem>();

            for (int i = 0; i < 12; i++)
            {
                items.Add(new ProductiveMinFTEsItem() { TargetId = i, ProductiveMin = 55, MinHoursSun = 0, MinHoursMon = 1, MinHoursTue = 2, MinHoursWed = 3, MinHoursThu = 4, MinHoursFri = 5, MinHoursSat = 6, TargetMinHours = 7, DefinedBY = 'M', EffMonthDate = new DateTime(2016, i + 1, 1) });
            }

            return Json(items, JsonRequestBehavior.AllowGet);
        }
    }
}