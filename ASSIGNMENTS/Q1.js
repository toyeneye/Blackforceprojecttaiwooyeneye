

CREATE TABLE Users (
    ID int,
    Name varchar(225),
    Age varchar(225),
    Department varchar(225),
    Role varchar(225),
    Status varchar(225),
    Created_dt date

//ASSUMPTION MADE:That todays date is Sunday 09/01/2022

    INSERT INTO Users (ID, Name, Age, Department, Role, Status, Created_dt )
VALUES (1, 'Sarah', '5', 'Accounting', 'PM', 'Activated','01-01-2022'),
       (2, 'Tim', '10', 'Engineering', 'QA', 'Pending','02-01-2022'),
       (3, 'Joe', '17', 'Management', 'PM', 'Activated','02-01-2022'),
       (4, 'Tolu', '25', 'Management', 'Dev', 'Pending','02-01-2022'),
        (5, 'Rob', '5', 'Engineering', 'QA', 'Activated','03-01-2022'),
        (6, 'Ade', '10', 'Management', 'QA', 'Pending','04-01-2022'),
       (7, 'Tom', '17', 'Security', 'QA', 'Activated','05-01-2022'),
       (8, 'Jide', '26', 'Accounting', 'Dev', 'Activated','06-01-2022')

       //Q1: 
       SELECT  COUNT(*) FROM [Users]
       
       //Q2:
       SELECT  COUNT(*) FROM [Users] WHERE Department ='Accounting'
    
        //Q3:
        SELECT  COUNT(*) FROM [Users] WHERE Status ='Pending'

        //Q4:
        SELECT TOP (5) *
        FROM [Users]
        ORDER BY Created_dt ASC

        //Q5:
        SELECT *
        FROM [Users]
        WHERE Age >18 AND Age <26

        //Q6:
        SELECT *
        FROM [Users]
        WHERE FORMAT(Created_dt, 'dd-mm-yyyy')  ='06-01-2022'

        //Q7:
        SELECT *
        FROM [Users]
        WHERE FORMAT(Created_dt, 'dd-MM-yyyy')  BETWEEN '02-01-2022' AND '10-01-2022'

        //Q8:
        UPDATE Users
        SET Status = 'Activated'
        WHERE Status = 'Pending'

        //Q9:
        UPDATE Users
        SET Name = 'Timothy'
        WHERE Name = 'Tim'
        AND ID = 2

       //Q10:
       SELECT Department, COUNT(*) AS TOTAL FROM Users
       GROUP BY Department