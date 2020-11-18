using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace EarthquakeProject.Models
{
    public class EarthquakeAPI
    {
        public string Source { get; set; }

		public EarthquakeAPI(string endpoint)
        {
			Source = endpoint;
        }

		public IEnumerable<Earthquake> GetRecentEarthquakes()
        {
			string jsonResponse = SendRequest(Source);
			Debug.WriteLine(jsonResponse);

			JObject geo = JObject.Parse(jsonResponse);
			int count = (int)geo["metadata"]["count"];
			List<Earthquake> output = new List<Earthquake>();

			for(int i = 0; i < count; i++)
            {
				string place = (string)geo["features"][i]["properties"]["place"];
				double mag = (double)geo["features"][i]["properties"]["mag"];
				output.Add(new Earthquake { Location = place, Magnitude = mag });
            }

			return output;
        }

        private static string SendRequest(string uri)
		{
			HttpWebRequest request = (HttpWebRequest)WebRequest.Create(uri);
			
			request.Accept = "application/json";

			string jsonString = null;
			// TODO: You should handle exceptions here
			using (WebResponse response = request.GetResponse())
			{
				Stream stream = response.GetResponseStream();
				StreamReader reader = new StreamReader(stream);
				jsonString = reader.ReadToEnd();
				reader.Close();
				stream.Close();
			}
			return jsonString;
		}

	}
}
