CREATE TABLE IF NOT EXISTS "users"(
  "id" SERIAL PRIMARY KEY,
  "name" varchar (255) NOT NULL,
  "email" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
  "createdAt" timestamp NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS "urls"(
  "id" SERIAL PRIMARY KEY,
  "shortUrl" varchar (255) NOT NULL UNIQUE,
  "url" varchar(255) NOT NULL ,
	"visitCount" integer NOT NULL DEFAULT 0,
  "userId" integer NOT NULL,
  "createdAt" timestamp NOT NULL DEFAULT now(),
  CONSTRAINT "urls_fk" FOREIGN KEY ("userId") REFERENCES "users"("id")
);
