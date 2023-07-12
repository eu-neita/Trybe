-- Ex 1.

SELECT Pf.title, Po.domestic_sales, Po.international_sales
FROM pixar.box_office AS Po
INNER JOIN pixar.movies AS Pf
ON Po.movie_id = Pf.id;

-- Ex 2.
SELECT Pf.title, Po.domestic_sales, Po.international_sales
FROM pixar.box_office AS Po
INNER JOIN pixar.movies AS Pf
ON Po.movie_id = Pf.id AND Po.domestic_sales < Po.international_sales
;

-- EX 3.

SELECT Pf.title, Po.domestic_sales, Po.international_sales, Po.rating
FROM pixar.box_office AS Po
INNER JOIN pixar.movies AS Pf
ON Po.movie_id = Pf.id
ORDER BY Po.rating 
;

-- EX 4.

SELECT Mo.*, Th.name
FROM pixar.movies AS Mo
LEFT JOIN pixar.theater AS Th
ON Mo.theater_id = Th.id
ORDER BY Th.name
;

-- EX 5.

SELECT Mo.*, Th.name
FROM pixar.movies AS Mo
RIGHT JOIN pixar.theater AS Th
ON Mo.theater_id = Th.id
ORDER BY Th.name
;