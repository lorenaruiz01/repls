let person = { 
        name : "John", 
        age : 31, 
        logInfo : function() { 
            document.write(this.name + " is " + this.age + " years old."); 
        } 
    } 
       // logs John is 31 years old. 
 person.logInfo();  


 // NOTE!
// So far, you’ve only explored using this in the context of a function above. However, this can also be used outside of a function, for instance, in a “global” context. In the global context (outside of a function), this refers to the global object. If you’re interested in learning more about the use of this, you can take a look at the guide from MDN web docs:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this