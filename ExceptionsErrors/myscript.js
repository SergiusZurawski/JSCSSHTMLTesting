function ShowInput(d)
{
    try{
        doSomething();
    }catch(ex) {
        console.log("============0");
        console.log(ex.name);
        if (ex.message == -2095782459)
        {
            console.log("============1");
        }
    }
}

function doSomething() {
    //throw -2095782459;
    throw new Error (-2095782459);
}
