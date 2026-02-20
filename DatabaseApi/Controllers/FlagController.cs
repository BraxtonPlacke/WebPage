using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using InventoryApi.Models;

[ApiController]
[Route("api/[controller]")]
public class CountriesController : ControllerBase
{
	[HttpGet]
	public IActionResult GetCountries()
	{
		var countries = new List<Country>();

		using (SqlConnection conn = new SqlConnection(DbConfig.ConnectionString))
		{
			conn.Open();

			string query = "SELECT Id, CountryName FROM Flags";

			using (SqlCommand cmd = new SqlCommand(query, conn))
			using (SqlDataReader reader = cmd.ExecuteReader())
			{
				while (reader.Read())
				{
					countries.Add(new Country
					{
						Id = reader["Id"].ToString(),
						CountryName = reader["CountryName"].ToString()
					});
				}
			}
		}

		return Ok(countries); // automatically returns JSON
	}
}
