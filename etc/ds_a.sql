SELECT 
  "street", "house_nr", 
  CASE "flat_nr"
  WHEN '' THEN ''
  ELSE '/'||"flat_nr"
  END AS "flat_nr",
  "postal_code", "city",                        
  "regon", "longname",
  "phone" ||' / '|| "fax" as "fax",
  "email"        
FROM "company" WHERE "id"=:company_id;
-- company_id=3