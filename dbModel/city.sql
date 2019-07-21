CREATE TABLE city (
  id SERIAL PRIMARY KEY,
  name VARCHAR(128) NOT NULL,
  country VARCHAR(128),
  coord GEOGRAPHY(POINT, 4326) NOT NULL
);

CREATE INDEX city_coord_gix ON city USING GIST(coord);