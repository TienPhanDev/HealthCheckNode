node_modules/.bin/sequelize model:generate --name BpScreen --attributes user_id:integer,systolic_pressure:integer,diastolic_pressure:integer,date:Date 

node_modules/.bin/sequelize model:generate --name SugarScreen --attributes user_id:integer,result:integer,date:Date 

node_modules/.bin/sequelize model:generate --name VaccinationRecord --attributes user_id:integer,tetanus:boolean,flu:boolean,pneumonia:boolean,shingles:boolean

CREATE USER tienphan WITH PASSWORD 'portis12';
CREATE DATABASE nodeBackend_development WITH OWNER tienphan;
CREATE DATABASE nodeBackend_development WITH OWNER nodeBackend_development;
\password tienphan
\q

sudo -u postgres psql -c 'alter user tienphan with createdb' postgres