# backend starter template

Here is example content of a .env file that is to be stored in the root of the `backend/`  directory.
\
For this template, the .env file is named `.env`

```env
DROP_TABLES_FIRST=0
DB_USER=postgres
DB_PASSWORD=root
DB_HOST=localhost
DB_PORT=5432
DB_NAME=starterdb
DB_ECHO=True
```

`DROP_TABLES_FIRST` is just a development convenience.
\
\
It is a boolean that determines whether to drop existing tables before creating them (say, because you want to purge tables at application restart in development).
\
Set the value to `1` to drop tables, or `0` to keep existing tables.
