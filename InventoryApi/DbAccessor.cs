using System;
using Microsoft.Data.SqlClient;
namespace InventoryApi
{
    public class ConnectionAccessor
    {
        public void TestDatabaseConnection()
        {
            string connectionString = DbConfig.ConnectionString;
            try
            {
                using (SqlConnection connection = new SqlConnection(connectionString))
                { connection.Open(); Console.WriteLine("Connection successful!"); }
            }
            catch (Exception ex) { Console.WriteLine("Connection failed: " + ex.Message); }
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            ConnectionAccessor accessor = new ConnectionAccessor();
            accessor.TestDatabaseConnection();
        }
    }
}