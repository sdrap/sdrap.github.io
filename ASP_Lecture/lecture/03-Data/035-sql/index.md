# Databases and SQL

Pandas is a handy and advanced way to handle data. However, storing, organizing and querying data has a long history related to databases. There are many ways to consider data as objects in a computer and in a broad sense they can be distinguished between two categories:

- **SQL**: tabular data with predefined structure (collection of tuples with predefined columns and types). For instance collection of student names (string), student id (int) and grades (float).
- **NoSQL**: As the name indicates, it is not of the previous type. Those datasets are of variable length, content. They can be thought as dictionaries with key values inputs.

In the following we will mainly introduce the concept of SQL databases.

> [!NOTE]
>
> **What SQL stands for?**
>
> The three letters SQL stands for **standardized query language**. It has a long history dating back to the 70ies and is based on tuple calculus. It has been standardized and the language itself is, modulo some minor modifications, similar across all platforms and database provider.

## Tuple Calculus

The foundation of SQL language is based on tuple calculus that is a handy representation in set theoretical sense. We won't enter into the full details of it, we present however a succinct overview how it works.

In this context, we consider two sets of data:

- \\(A\\subseteq X \\times Y\\);
- \\(B\\subseteq X \\times Z\\);

that is collections of tuples in the sets \\(X\\), \\(Y\\) and \\(Z\\). The generic elements of those sets are labelled as \\(x\\), \\(y\\) and \\(z\\), respectively.

For instance:

- \\(X= \\mathbb{N}\\) is a set of students id
- \\(Y\\) is the set of all possible names
- \\(Z = \\mathbb{R}\\) is the set of grades in the lecture

In this case:

- \\(A\\) is the set of tuples students id and corresponding names of SJTU Bachelor students
- \\(B\\) is the set of tuples students id and corresponding grades of those students that took the lecture Advanced programming SS2024

If you want to get the set of all students id, names and grades in the lecture for those students that took the lecture, you look at the following set

\\\[ \\begin{equation} \\left\\{(x, y, z)\\colon (x, y) \\in A \\text{ and }(x, z) \\in B\\right\\}\\subseteq X \\times Y \\times Z \\end{equation} \\\]

If you just want the name and grade you want

\\\[ \\begin{equation} \\left\\{(y, z)\\colon (x, y) \\in A \\text{ and }(x, z) \\in B\\right\\}\\subseteq Y \\times Z \\end{equation} \\\]

These operation can be summarized as intersection/union between cartesian products and then projections. We define

\\\[ \\begin{equation} \\begin{split} \\sigma\_{X} \\colon X \\times Y \\times Z &amp; \\longrightarrow X\\\\ (x, y, z) &amp;\\mapsto \\sigma\_X(x, y, z) = x \\end{split} \\end{equation} \\\]

which is the projection of \\(X\\times Y\\times Z\\) to \\(X\\) and similarly \\(\\sigma\_{XY}\\), \\(\\sigma\_{YZ}\\), etc. It follows that

\\\[ \\begin{equation} \\left\\{(x, y, z)\\colon (x, y) \\in A \\text{ and }(x, z) \\in B\\right\\} = \\sigma^{-1}\_{XY}(A)\\cap \\sigma^{-1}\_{XZ}(B) \\end{equation} \\\]

and

\\\[ \\begin{equation} \\left\\{(x, y, z)\\colon (x, y) \\in A \\text{ and }(x, z) \\in B\\right\\} = \\sigma\_{YZ}\\left(\\sigma^{-1}\_{XY}(A)\\cap \\sigma^{-1}\_{XZ}(B)\\right) \\end{equation} \\\]

The intersection and projections are the easiest set operation on cartesian sets. Things gets more complicated when you want to get all the students id and names and if they are in table \\(B\\), then the grades of those students otherwize en empty value.

The exact formalism of SQL language is based on *[relational algebra](<https://en.wikipedia.org/wiki/Relational_algebra>)* and is relatively complex in terms of definition and operations.

However, we present here after the basics using [SQLite](<https://www.sqlite.org/>). As the name indicates, it is a very portable sql database stored in a single text file and is open sourced. It implements most of the SQL functionalities and is very efficient. You can start using sqlite by just installing a database query program such as [Beekeeper Studio Community Edition](<https://github.com/beekeeper-studio/beekeeper-studio/releases>) which is open sourced.

## SQL Language

### Create Tables

A database is a collection of tables.

Three main actions can be used:

- `CREATE`: create a new table in the database
- `DROP`: drop an existing table
- `ALTER`: modify the structure of a table

A table is declared as a list of columns labels and a type (like a panda dataframe). The available datatypes in SQL are very limited:

| Name | Type |
| --- | --- |
| NULL | Null value standing for no data |
| INT | Integers |
| REAL | Floats |
| TEXT | Strings |
| BLOB | Pieces of data in binary form |

The SQL Commands are usually in capital letters (but do not have to). The command to create a table is as follows

```SQL
--- The dashes are condidered as escaped characters like the # for python
CREATE TABLE students (
    id INT PRIMARY KEY,
    name TEXT NOT NULL,
    lev TEXT NOT NULL,
    email TEXT
);
--- A command is terminated with a semi column ;
```

This code will create a table students with the columns

- `id`: represent the student id. It is an integer and we say that it is a primary key in the sense that the value will be unique.
- `name`: name of the student is text. We precise that the value shall not be empty
- `lev`: level of the student (Bachelor, Master, PhD). Shall not be null
- `email`: email of the student

Be careful with the following command, it deletes the table with all the data inside.

```SQL
DROP TABLE students;
```

If you deleted the table create it again.

```SQL
--- Will rename the table students to student
ALTER TABLE students RENAME TO student;

--- revert to the original name
ALTER TABLE student RENAME TO students;

--- Will add a new column age
ALTER TABLE students ADD COLUMN age INT;
```

### Data

Now that we have our students table, we can do the following

- `INSERT`: insert data in the table
- `UPDATE`: update data in the table
- `DELETE`: delete data in the table
- `SELECT`: query data in the table

The last one is the most important so we will see it in a separate section. However let us have a look at the most simple select function that will show the current content of the table.

```SQL
--- Show the content of the table students
SELECT * FROM students;
```

Delete and recreate the table students.

#### Insert

```SQL
--- We insert one student in the table
INSERT INTO students (id, name, lev, email)
VALUES (1, 'WANG Xin', 'Master', 'wch@some_address.cn');

--- We insert several students in the table
INSERT INTO students (id, name, lev, email)
VALUES 
    (2, 'LI Xuan', 'Master', 'lxu@some_address.cn'),
    (3, 'DRAPEAU Samuel', 'Bachelor', 'sd@some_address.cn'),
    (4, 'TURGEDIEV Maximilian', 'PhD', 'tm@some_address.cn'),
    (5, 'FISCHER Johannes', 'Bachelor', 'fj@some_address.cn');

--- Check the content of the table
SELECT * FROM students;
```

#### Update or Delete

```SQL
--- We update Samuel from Bachelor to Master and change its email address
UPDATE students
SET lev = 'Master', email = 'sdrapeau@some_address.cn'     --- set the values for the columns to be updated
WHERE id = 3;                                              --- select the rows to be updated

--- We delete FISHER Johannes since he left
DELETE FROM students
WHERE name = 'FISCHER Johannes';

--- Check the content of the table
SELECT * FROM students;
```

### Query

#### Simple

The basic functionality to query data is the `SELECT` statement. It can become very complicated but in a basic form it is of the kind

`SELECT <what> FROM <which_table> WHERE <some_constraints>`

In the following code you have to run each statement independently to see the result.

```SQL
--- query everything (* stands for all)
SELECT * FROM students;

--- query only name and level (indentation is easier to read)
SELECT
    name,
    lev
FROM
    students;

--- query only name and level and rename the column names
SELECT
    name as Name,
    lev as Level
FROM
    students;

--- Query id, name, mail for all the master students
SELECT
    id as StudentID,
    name as Name,
    email as Email
FROM
    students
WHERE                       --- here we put the condition clause
    lev = 'Master';
```

#### Join Tables

The interest of SQL is to orgainzed data in more than tabular (2d form) format. Those tables can then be logically connected in the following way

Let us consider the following example with 4 tables.

1. `students`: with columns `student_id`, `name`
2. `informations`: with columns `student_id`, `email`, `phone`, `lev`
3. `lectures`: with columns `lecture_id`, `lecture_name`
4. `grades`: with columns `lecture_id`, `student_id`, `grade`

The relation between tables can be of different nature

- 1 -\> 1: one record in table \\(A\\) is uniquely mapped to a record in table \\(B\\). For instance `students` has a unique corresponding record in `informations` with `student_id` linking both.
- 1 -\> n: one record in table \\(C\\) can be mapped to different records in table \\(D\\). For instance a record in `lectures` can have several grades records in `grades`. However a single grade record in `grades` can only be mapped to a single record in `lectures`.
- n -\> n: different record in table \\(A\\) are mapped to different records in table \\(C\\). In order to do so you need a so called intermediary table to realize n-\>1 and 1-\>n. For example, different students can attend different lectures.

> [!NOTE]
>
> Note that the exact 1\<-\>1 is redundant and could be put into a single table, eventually with `NULL` values for missing informations if it is just a 1-\>1

Let us generate different tables for the previous example

```SQL
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    name TEXT NOT NULL,
    lev TEXT NOT NULL,
    email TEXT
);
CREATE TABLE lectures (
    lecture_id INT PRIMARY KEY,
    name TEXT
);
CREATE TABLE grades (
    lecture_id INT,
    student_id INT,
    grade INT
);


INSERT INTO students (student_id, name, lev, email)
VALUES
    (1, 'WANG Xin', 'Master', 'wch@some_address.cn'),
    (2, 'LI Xuan', 'Master', 'lxu@some_address.cn'),
    (3, 'DRAPEAU Samuel', 'Bachelor', 'sd@some_address.cn'),
    (4, 'TURGEDIEV Maximilian', 'PhD', 'tm@some_address.cn'),
    (5, 'FISCHER Johannes', 'Bachelor', 'fj@some_address.cn'),
    (6, 'XYZ Theo', 'Bachelor', 'xyz@some_address.cn');
INSERT INTO lectures (lecture_id, name)
VALUES
    (1, 'Stochastic Processes'),
    (2, 'Advanced Programming');

INSERT INTO grades (lecture_id, student_id, grade)
VALUES
    (1, 1, 78),
    (1, 3, 87),
    (1, 4, 56),
    (1, 5, 98),
    (2, 1, 97),
    (2, 2, 93),
    (2, 4, 84);
--- Note that Li Xuan did not follow any lectures

--- Run the following statement one after the other to check each table

SELECT * FROM students;
SELECT * FROM lectures;
SELECT * FROM grades;
```

There are many different kind of join (how to combine data from different tables with common content).

- `INNER JOIN`: (has default when `JOIN` is called). It takes the intersection on both tables on the condition.
- `LEFT JOIN`: takes all the keys from the left table and add the data from the right table if the condition is met otherwize it fills with `NULL` data.
- `RIGHT JOIN`: Same as left join but on the right table condition.
- `FULL JOIN`: generate the union of the rows in each (basically union of left and right join).
- `CROSS JOIN`: generate the cartesian product of the two tables. To be prevented since it might get very large and is not that useful.

We just illustrate here inner and left join:

- Inner Join:

```SQL
--- We want the student_id, grade and lecture name
SELECT 
    grades.student_id as student_ID,
    grades.grade as Grade,
    lectures.name as LectureName
FROM
    grades
    JOIN lectures ON grades.lecture_id = lectures.lecture_id;
```

- Left Join:

```SQL
--- We want all the students name who are Master
--- if they have lectures we show lecture_id and grade otherwize none
SELECT 
    students.name as Name,
    students.lev as Level,
    grades.lecture_id,
    grades.grade as Grade
FROM
    students
    LEFT JOIN grades ON students.student_id = grades.student_id
WHERE
    students.lev = 'Master';
```

#### Perform Computations/Aggregations

As for Pandas, data can be aggregated in order to perform computations. As for pandas, the keyword is `GROUPBY`.

For instance, get for each lecture name the average grade, maximum and minimum. We need to join with the table `lectures` in order to get the name and will aggregate on it

```SQL
SELECT
    lectures.name as LectureName,
    MEAN(grades.grade) as mean,
    MAX(grades.grade) as max,
    MIN(grades.grade) as min
FROM
    grades
    JOIN lectures ON grades.lecture_id = lectures.lecture_id
GROUP BY
    lectures.name;
```

We complicate a bit by getting the same results however detailed by level of the students. In this case we need two joins

```SQL
SELECT
    lectures.name as LectureName,
    students.lev as Level,
    MEAN(grades.grade) as mean,
    MAX(grades.grade) as max,
    MIN(grades.grade) as min
FROM
    grades
    JOIN lectures ON grades.lecture_id = lectures.lecture_id
    JOIN students ON grades.student_id = students.student_id
GROUP BY
    lectures.name, students.lev;
```

### SQL &amp; Pandas

Depending on your needs, you can consider SQL as a large container of many dataframes. Some computations can be performed directly in SQL but the main purpose it to query data directly from SQL and get them in pandas for further use.

Any database has libraries that allows to connect to any programming language. In the case of SQLite the library is called `sqlite3` which can be installed with anaconda or using pip `pip install sqlite3`. With this API at hand, pandas can directly retrieve data from the database.

In our example, we have a database `test.db3` stored in the folder `./data/` with a table `grades` as in the previous example.

Read the table grades from the database

```py
import pandas as pd
import sqlite3 

# you first need to establish a connection to the database
con = sqlite3.connect('./data/test.db3')

# write the query
QUERY = """
SELECT 
    *
FROM 
    students
WHERE
    students.lev = 'Master'
"""

# get the result of the query in the dataframe
df = pd.read_sql_query(QUERY, con)

display(df)
```

You can design complex queries against many tables to get the result in the dataframe. You can also just query the full table

```py
import pandas as pd
import sqlite3 

# connection to the database
con = sqlite3.connect('./data/test.db3')

# get the full table grades in the dataframe
df = pd.read_sql_table('grades', con)

display(df)
```
