var builder = WebApplication.CreateBuilder(args);

// Add controller support
builder.Services.AddControllers();

// Optional: enable Swagger (nice for testing)
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Enable Swagger UI (development only)
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// This allows controllers to work
app.UseAuthorization();

app.MapControllers();

app.Run();
