using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using AJAXExampleProject.Models;
using Microsoft.Extensions.Configuration;

namespace AJAXExampleProject.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IConfiguration _config;
        public HomeController(ILogger<HomeController> logger, IConfiguration config)
        {
            _logger = logger;
            _config = config;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult RandomNumbers(int? count = 100)
        {
            Random generator = new Random();
            var data = new
            {
                message = "Random Numbers API",
                num = (int)count,
                domain = Enumerable.Range(1,(int)count),
                range = Enumerable.Range(1, (int)count).Select(x=> generator.Next(1000))
            };
            return Json(data);
        }

        public IActionResult Privacy()
        {
            string secret = _config["Secret:Password"];
            Debug.WriteLine("secret is: " + secret);
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
