#Software:

```
    1. Balsamiq Mockups3 
    2. brew : Package manager  -- 
    3. install node (JS on the deskop) 
        -- brew install node 
        -- node -v 
        -- brew upgrade node 
    4. Mongodb (database)
        -- brew install mongo 
        # Data directory /data/db not found 
        -- sudo mkdir -p /data/db 
        # Unable to create/open lock file Permission denied 
        -- whoami 
        -- sudo chown -Rv ya-qi /data/db 
        -- mongod # start local mongodb server  
            waiting for connections on port 27017 
        -- brew services start mongo # login auto start 
        -- mongod # every time  
    5. Robomongo 
        --(Robo 3T) is a free lightweight GUI MongoDB enthusiasts 
        --(Studio 3T) fully featured IDE for MongoDB professionals
    6. Vim + JS 
        -- 安装Vim JS 插件
```
-----------------
A Quick ES6 Refresher 
    Learning some JavaScript 
-----------------
Core Fundamentals of MongoDB 
    where we use Mongo?
        Mongoose -- ORM or ODM(Object Database Map)
    Fundamentals of MongoDB 
        Mongo->Database->Collection
    Core Mongooes/Mongo
        Mongooes API -> Mongo 
        "CRUD"
        Create -> 
        Read -> 
        Update -> 
        Destroy -> 
-----------------
    $ npm init 
    $ npm install --save mocha nodemon mongoose 
    Mocha <-> Mongoose <-> MongoDB 
    Project Structure 
        /src/
            user.js  -- Mongoose <-> MongoDB 
        /test/
            create_test.js
            read_test.js
            update_test.js
            destroy_test.js 
            test_helper.js
                Mocha starts 
                    |
            Tell Mongoose to connect to Mongo
                    |
            Mongoose to connect to Mocha 
                    |
            Connection Successful, Run Tests
                    |
            Connection Failed? Show Error 
-----------------
    $ node test/test_helper.js 
----------------
    User Model - > Schema -> name -> instance name: "Alex"
    $ npm run test 
---------------
    Mocha starts -> Empty Database -> test #1 -> Empty Database -> test #2 -> Empty Database
----------------
    beforeEach -> Start long running process -> Call done -> tests continue running 
---------------
    Userfind(criteria) -- find all the users that match the given criteria, Returns an array 
    UserfindOne(criteria) --  Find the first user that matches the criteria. Return  a single record.
----------------
Automating Tests with Nodemon 

----------------
Finding Particular Records 

---------------
The Many Ways to Remove Records 
    Model Class:
        remove
        findOneAndRemove 
        findByIdAndRemove 
    Model Instance:
        remove 


