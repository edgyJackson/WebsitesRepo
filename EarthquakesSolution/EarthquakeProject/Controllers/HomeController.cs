using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using EarthquakeProject.Models;

namespace EarthquakeProject.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Earthquakes(int? hour, int? day)
        {
            Debug.WriteLine($"{hour}, {day}");
            EarthquakeAPI quakesource = new EarthquakeAPI("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson");
            IEnumerable<Earthquake> quakes = quakesource.GetRecentEarthquakes();

            return Json(quakes);
        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
