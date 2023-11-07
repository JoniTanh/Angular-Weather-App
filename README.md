## Weather App with Angular, C# (ASP.NET Core), Tailwind CSS, and SQLite

The development of the application is in progress, and the README file is being updated to provide more comprehensive information. The file will be further refined based on testing... :)

You can use tools like Postman to test the API endpoints. For instance, to fetch all cities, you can use the following GET request:

```plaintext
GET https://localhost:5001/api/cities
```

### Features:

- Add and remove cities
- Add, update, and delete weather information for a city
- Fetch all cities
- Retrieve specific weather information for a city

### Running the Application:

To run the application, start the frontend and backend (API) separately.

In the frontend root directory, install dependencies with:

```
npm install
```

Then, launch the frontend with:

```
ng serve
```

In the Backend / API root directory, ensure the necessary packages are installed with:

```
dotnet restore
```

And then start the backend with:

```
dotnet run
```

Backend / API Commands:

- `dotnet ef database drop` - Drop the existing database
- `dotnet ef migrations add InitialCreate` - Create initial database migrations
- `dotnet ef database update` - Apply the database updates
- `dotnet watch` - Start the backend with live reloading
- `dotnet run` - Run the backend

### Note

- It is recommended to configure HTTPS for secure connections when deploying the application to a production environment
- When moving the application to a production environment, database connection settings should be updated to match the production server's configuration

For the root of the API, you could create a basic configuration as follows, for example:

appsettings.json

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Information"
    }
  },
  "AllowedHosts": "*"
}
```

appsettings.Development.json

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "ConnectionStrings": {
    "DefaultConnection": "Data source=weatherapp.db"
  }
}
```
