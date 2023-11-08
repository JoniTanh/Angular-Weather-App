## Weather App with Angular, C# (ASP.NET Core), Tailwind CSS, and SQLite

The development of the application is in progress, with the front-end currently undergoing significant development. The README file is being updated to provide more comprehensive information and will be further refined based on ongoing testing and feedback. :)

## About

This application serves as a personal weather data management tool, designed to enable users to store, update, and delete weather statistics for cities, towns, or specific locations of their choice. The primary purpose is to provide a personalized experience where users can maintain a record of weather patterns and changes as per their individual requirements or interests.

### Functionality

Users have the ability to:

- `Record Weather Data:` Manually input weather data for different locations.
- `Edit Entries:` Update previously entered data to ensure accuracy.
- `Delete Records:` Remove data that is no longer needed or relevant.
- `View Statistics:` Access a variety of statistics generated from the input data.
- `Analyze Patterns:` Make use of graphical and tabulated representations to analyze weather trends over time.

<b>Integration with Open Weather API</b>

In addition to manual data management, the application integrates with the Open Weather API, which provides real-time weather information. This feature allows users to:

- `Fetch Current Weather Data:` Automatically retrieve and display weather conditions for a chosen location.

You can use tools like Postman to test the API endpoints. For instance, to fetch all cities, you can use the following GET request:

```plaintext
GET https://localhost:5001/api/cities
```

### Project Setup

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

### Running the Application

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

### Backend / API Commands

- `dotnet ef database drop` - Drop the existing database
- `dotnet ef migrations add InitialCreate` - Create initial database migrations
- `dotnet ef database update` - Apply the database updates
- `dotnet watch` - Start the backend with live reloading
- `dotnet run` - Run the backend

### Note

- It is recommended to configure HTTPS for secure connections when deploying the application to a production environment
- When moving the application to a production environment, database connection settings should be updated to match the production server's configuration
