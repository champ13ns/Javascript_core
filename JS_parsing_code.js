/*
                            HOW JS PARSES CODE?
As JS is not interpreted, it is hybrid(JIT), whenever we try to execute a JS code,
JS first parses the whole code, in this parsing phase, it assign scopes to variables/functions.
Once done, then it reads the code and executes it.

Every varible in our code will be used in one of the following ways:
Either it will be getting a value assigned, i.e it is used as target (x = 10)
or it will be used to retrieve a value i.e it will be used as as source (y = x + 12)

What JS does, it will start the parsing phase outside everything, it maintains, global scope
but the moment it goes inside a function it starts maintaining scope of that function also
*/  