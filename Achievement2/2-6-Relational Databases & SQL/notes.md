- relational databases and SQL
- install PostgresSQL to computer
- think about and create schema (structure of data)
- input data using CRUD SQL commands: 
    CREATE:
        syntax:  
        INSERT INTO table_name(column1, column2, …) VALUES(value1, value2, …);

    READ: 
        syntax: 
        SELECT col1,col2,col3 FROM [table name]

                use * to signify ALL

    UPDATE: 
        syntax: 
        UPDATE table
            SET column1 = value1,
                column2 = value2 ,...
            WHERE
            Condition;

    DELETE: 
        DELETE (datatype) FROM table