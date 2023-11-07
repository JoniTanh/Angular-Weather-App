## Weather App w/ Angular, C# (ASP.NET), Tailwind, SQLite

README tulee vielä muuttumaan paremmaksi. :)

- esim. Postman voi testata

- Voi lisätä ja poistaa kaupungin
- Voi lisätä, päivittää ja poistaa säätiedon kaupungille
- Voi hakea kaikki kaupungit
- Voi hakea yksittäisen säätiedon

- Komentoja:

- dotnet ef database drop
- dotnet ef migrations add InitialCreate
- dotnet ef database update
- dotnet watch

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
