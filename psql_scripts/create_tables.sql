CREATE TABLE IF NOT EXISTS "users"(
  "id" SERIAL PRIMARY KEY,
  "name" varchar (255) NOT NULL,
  "email" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS "urls"(
  "id" SERIAL PRIMARY KEY,
  "shortUrl" varchar (255) NOT NULL UNIQUE,
  "url" varchar(255) NOT NULL UNIQUE,
	"visitCount" integer NOT NULL DEFAULT 0,
  "userId" integer NOT NULL,
  CONSTRAINT "urls_fk" FOREIGN KEY ("userId") REFERENCES "users"("id")
);
